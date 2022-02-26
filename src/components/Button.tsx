import { FC } from "react";

interface ButtonProps {
  active: boolean;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <button
      onClick={(e) => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};
