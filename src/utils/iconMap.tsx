import {icons} from 'lucide-react';

interface IconProps {
  name: string | null;
  color?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, color = 'currentColor', size = 18 }) => {
  // Acessa o ícone com base no nome
  const LucideIconComponent = icons[name as keyof typeof icons];

  if (!LucideIconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null; // Retorna null caso o ícone não seja encontrado
  }

  return <LucideIconComponent color={color} size={size} />;
};
