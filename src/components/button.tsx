import '../styles/button.css';
export interface ButtonProps {
  onClick?: () => void;
  text?: string;
  variant?: 'primary' | 'secondary' | 'close' | 'submit';
}

const Button = ({ onClick, text, variant = 'primary' }: ButtonProps) => {
  const variantStyle = () => {
    switch (variant) {
      case 'secondary':
        return 'secondaryContainer';
      case 'close':
        return 'closeContainer';
      case 'submit':
        return 'primaryContainer submitContainer';
      default:
        return 'primaryContainer';
    }
  };
  return (
    <button onClick={onClick} className={variantStyle()}>
      {text}
    </button>
  );
};

export default Button;
