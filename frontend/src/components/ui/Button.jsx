export default function Button({ children, className = "", variant = "primary", size = "md", ...props }) {
  const baseClasses = "font-medium rounded-md focus:outline-none transition-colors"

  const variantClasses = {
    primary: "bg-green-500 hover:bg-green-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    outline: "bg-transparent border border-gray-300 hover:border-green-500 hover:text-green-500",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  }

  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4",
    lg: "py-3 px-6 text-lg",
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
