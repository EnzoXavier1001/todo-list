import style from "./styles.module.css";
import { PlusCircle } from "@phosphor-icons/react";

interface ButtonProps {
  onClick: () => void;
}

export function Button({ onClick }: ButtonProps) {
  return (
    <button className={style.button} onClick={onClick} title="Criar tarefa">
      Criar
      <PlusCircle size={24} />
    </button>
  );
}
