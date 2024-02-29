import '../styles/divider.css';

export interface DividerProps {
  kind?: 'full' | 'half';
  orientation?: 'vertical' | 'horizontal';
  color?: 'blue' | 'gray';
}

const Divider = ({
  kind = 'full',
  orientation = 'horizontal',
  color = 'gray',
}: DividerProps) => {
  const dividerStyles = () => {
    switch (kind) {
      case 'half':
        return `divider ${orientation} ${color} divider-half`;
      default:
        return `divider ${color}`;
    }
  };
  return <div className={dividerStyles()} />;
};

export default Divider;
