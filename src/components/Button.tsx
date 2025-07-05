interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({ children, variant = "primary" }: ButtonProps) => {
  const base = "px-4 py-2 rounded text-white font-semibold"
  const styles =
    variant === "primary" ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-600"

  return <button className={`${base} ${styles}`}>{children}</button>
}
