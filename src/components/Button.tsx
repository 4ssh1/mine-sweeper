export type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ label, variant, disabled, onClick }: ButtonProps) => {
  const baseStyle = 'px-4 py-2 rounded text-white'
  const variantStyle =
    variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'
  const finalStyle = `${baseStyle} ${variantStyle} ${disabled ? 'opacity-50' : ''}`

  return (
    <button className={finalStyle} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button;
