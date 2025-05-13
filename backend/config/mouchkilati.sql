CREATE TABLE notification (
    id_notification SERIAL PRIMARY KEY,
    message VARCHAR(1000),
    date_envoi DATE
);

CREATE TABLE region (
    nom_region VARCHAR(50) PRIMARY KEY
);

CREATE TABLE province (
    nom_province VARCHAR(200) PRIMARY KEY,
    nom_region VARCHAR(50) NOT NULL REFERENCES region(nom_region)
);

CREATE TABLE commune (
    nom_commune VARCHAR(200) PRIMARY KEY,
    nom_province VARCHAR(200) NOT NULL REFERENCES province(nom_province)
);

CREATE TABLE membre (
    id VARCHAR(200) PRIMARY KEY,
    email VARCHAR(200) UNIQUE,
    telephone VARCHAR(200),
    cin VARCHAR(200) UNIQUE,
    nom VARCHAR(200),
    prenom VARCHAR(200),
    mot_de_passe VARCHAR(255),
    role VARCHAR(100),
    statut VARCHAR(200) CHECK (statut IN ('actif', 'suspendu')),
    sexe VARCHAR(200) CHECK (sexe IN ('homme', 'femme')),
    nom_commune VARCHAR(200) NOT NULL REFERENCES commune(nom_commune)
);


CREATE TABLE citoyen (
    id VARCHAR(200) PRIMARY KEY REFERENCES membre(id),
    date_naissance DATE,
    lieu_naissance VARCHAR(200),
    adresse VARCHAR(200),
    nationalite VARCHAR(200)
);

CREATE TABLE responsable_province (
    id VARCHAR(200) PRIMARY KEY REFERENCES membre(id),
    fonction VARCHAR(200),
    date_nomination DATE,
    niveau_acces VARCHAR(200)
);

CREATE TABLE responsable_commune (
    id VARCHAR(200) PRIMARY KEY REFERENCES membre(id),
    fonction VARCHAR(200),
    date_affectation DATE,
    niveau_acces VARCHAR(200)
);

CREATE TABLE admin (
    id VARCHAR(200) PRIMARY KEY REFERENCES membre(id),
    niveau_acces VARCHAR(200)
);

CREATE TABLE signalement (
    id_signalement SERIAL PRIMARY KEY,
    description VARCHAR(1000),
    date_signalement DATE,
    adresse VARCHAR(200),
    statut VARCHAR(200) DEFAULT 'en attente' CHECK (statut IN ('en attente', 'en cours', 'complété', 'à compléter', 'rejeté', 'accepté')),
    id VARCHAR(200) NOT NULL REFERENCES responsable_commune(id)
);


CREATE TABLE signal (
    id VARCHAR(200),
    id_signalement INT,
    PRIMARY KEY(id, id_signalement),
    FOREIGN KEY(id) REFERENCES citoyen(id),
    FOREIGN KEY(id_signalement) REFERENCES signalement(id_signalement)
);

CREATE TABLE envoye (
    id VARCHAR(200),
    id_signalement INT,
    id_notification INT,
    PRIMARY KEY(id, id_signalement, id_notification),
    FOREIGN KEY(id) REFERENCES citoyen(id),
    FOREIGN KEY(id_signalement) REFERENCES signalement(id_signalement),
    FOREIGN KEY(id_notification) REFERENCES notification(id_notification)
);


--DATA
INSERT INTO region (nom_region) VALUES
('Tanger-Tétouan-Al Hoceima'),
('L''Oriental'),
('Fès-Meknès'),
('Rabat-Salé-Kénitra'),
('Béni Mellal-Khénifra'),
('Casablanca-Settat'),
('Marrakech-Safi'),
('Drâa-Tafilalet'),
('Souss-Massa'),
('Guelmim-Oued Noun'),
('Laâyoune-Sakia El Hamra'),
('Dakhla-Oued Ed Dahab');

INSERT INTO province (nom_province, nom_region) VALUES
('Tanger-Assilah', 'Tanger-Tétouan-Al Hoceima'),
('Tétouan', 'Tanger-Tétouan-Al Hoceima'),
('Al Hoceima', 'Tanger-Tétouan-Al Hoceima'),
('Larache', 'Tanger-Tétouan-Al Hoceima'),
('Chefchaouen', 'Tanger-Tétouan-Al Hoceima');

INSERT INTO province (nom_province, nom_region) VALUES
('Oujda-Angad', 'L''Oriental'),
('Nador', 'L''Oriental'),
('Driouch', 'L''Oriental'),
('Jerada', 'L''Oriental'),
('Berkane', 'L''Oriental'),
('Taourirt', 'L''Oriental');

INSERT INTO province (nom_province, nom_region) VALUES
('Fès', 'Fès-Meknès'),
('Meknès', 'Fès-Meknès'),
('Taza', 'Fès-Meknès'),
('Sefrou', 'Fès-Meknès'),
('Ifrane', 'Fès-Meknès');

INSERT INTO province (nom_province, nom_region) VALUES
('Rabat', 'Rabat-Salé-Kénitra'),
('Salé', 'Rabat-Salé-Kénitra'),
('Skhirate-Témara', 'Rabat-Salé-Kénitra'),
('Kénitra', 'Rabat-Salé-Kénitra'),
('Sidi Slimane', 'Rabat-Salé-Kénitra');

INSERT INTO province (nom_province, nom_region) VALUES
('Casablanca', 'Casablanca-Settat'),
('Mohammédia', 'Casablanca-Settat'),
('Settat', 'Casablanca-Settat'),
('El Jadida', 'Casablanca-Settat'),
('Berrechid', 'Casablanca-Settat');

INSERT INTO province (nom_province, nom_region) VALUES
('Marrakech', 'Marrakech-Safi'),
('Safi', 'Marrakech-Safi'),
('Chichaoua', 'Marrakech-Safi'),
('El Kelaa des Sraghna', 'Marrakech-Safi');

INSERT INTO commune (nom_commune, nom_province) VALUES
('Tanger Médina', 'Tanger-Assilah'),
('Bni Drar', 'Oujda-Angad'),
('Fès El Bali', 'Fès'),
('Tabriquet', 'Salé');

INSERT INTO membre (id, email, telephone, cin, nom, prenom, mot_de_passe, statut, sexe, nom_commune) VALUES
('MBR001', 'citoyen1@gmail.com', '0612345678', 'AA123456', 'EL AMRANI', 'Youssef', 'pass1234', 'actif', 'homme', 'Tanger Médina'),
('MBR002', 'respo1@gmail.com', '0698765432', 'BB654321', 'BENALI', 'Sara', 'secure456', 'actif', 'femme', 'Tabriquet'),
('MBR003', 'eloukili.nada@atu.uae.ac.ma', '0612345678', 'LA123456', 'EL OUKILI', 'NADA', '$2b$10$lXwUpW569qS9f4ICGYeTnOwR0k5mDC16gw3dz86tY9ot9I4FTloNO', 'actif', 'femme', 'Tanger Médina');

INSERT INTO citoyen (id, date_naissance, lieu_naissance, adresse, nationalite) VALUES
('MBR001', '1990-05-12', 'Tanger', 'Rue de Fès, Tanger', 'Marocaine');

INSERT INTO responsable_commune (id, fonction, date_affectation, niveau_acces) VALUES
('MBR002', 'Responsable d’hygiène', '2023-03-01', 'commune');


