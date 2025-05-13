const pool = require("../config/db");
const bcrypt = require('bcrypt');

const comparePasswords = async (inputPassword, hashedPasswordFromDB) => {
    const isMatch = await bcrypt.compare(inputPassword, hashedPasswordFromDB);
    return isMatch;
  };


exports.LoginModel = async (email, password) => {
    const result = await pool.query(
        "SELECT * FROM public.membre WHERE email=$1",
        [email]
    );
    console.log(result)
    if (result.rows.length > 0) {
        const member = result.rows[0];
        const hashPass = /^\$2y\$/.test(member.mot_de_passe) ? '$2a$' + member.mot_de_passe.slice(4) : member.mot_de_passe;
        const IsPasswordValid = await bcrypt.compare(password, hashPass);
        
        if (IsPasswordValid) {
            return member;
        }
        
    }
    else return null; 
};

exports.FindUserByEmail =async (email)=>{
    const result = await pool.query("SELECT * FROM public.membre WHERE email = $1",
        [email])
    if (result.rows.length > 0) {
        const member = result.rows[0];
        return member;    
    }
    else return null; 
    
}

exports.GetUserById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM public.membre WHERE id = $1",
        [id]
    );

    if (result.rows.length > 0) {
        const member = result.rows[0];
        return member;    
    }
    else return null; 
}

exports.UpdatePassById = async (id_user, hashedPassword)=>{
    try {
        const result = await pool.query("SELECT * FROM public.membre WHERE id=$1", [id_user]);
        console.log(result);
        if(result.rows.length > 0){
            const update = await pool.query("UPDATE public.membre SET password=$1 WHERE id=$2 RETURNING *", [hashedPassword, id_user] )
            console.log("hello")
            return update.rows[0];
        }
    } catch (error) {
        console.log(error);
    }
}

exports.ajouterUtilisateur = async (id,nom, prenom, telephone, cin, email, date_naissance,lieu_naissance,adresse,nationalite,sexe,nom_commune,motDePasseSecurise) => {
    console.log("nom_commune envoyé :", nom_commune);
    // Nettoyage pour que la comparaison avec PostgreSQL soit cohérente
if (nom_commune) {
  nom_commune = nom_commune.normalize("NFC").trim();
}


    const result = await pool.query(
        "INSERT INTO public.membre (id,nom,prenom,email,mot_de_passe,telephone,nom_commune) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
        [id,nom,prenom,email,motDePasseSecurise,telephone,nom_commune]
    );
    const result1 = await pool.query(
        "INSERT INTO public.citoyen (id,date_naissance,lieu_naissance,adresse,nationalite) VALUES ($1,$2,$3,$4,$5) RETURNING *",
        [id,date_naissance,lieu_naissance,adresse,nationalite]
    );
    return {
    membre: result.rows[0],
    citoyen: result1.rows[0]
  };
};