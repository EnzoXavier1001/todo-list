import style from "./styles.module.css";
import { ChangeEvent } from "react";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export function Input({ onChange, value }: InputProps) {
  return (
    <input
      placeholder="Adicione uma nova tarefa"
      className={style.input}
      onChange={onChange}
      value={value}
    />
  );
}
