import style from "./styles.module.css";
import { PlusCircle } from "@phosphor-icons/react";

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export function Button({ onClick, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={style.button}
      onClick={onClick}
      title="Criar tarefa"
      type="submit"
    >
      Criar
      <PlusCircle size={24} />
    </button>
  );
}
