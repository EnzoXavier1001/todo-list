import style from "./styles.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export function Button() {
  return (
    <button className={style.button}>
      Criar
      <PlusCircle size={24} />
    </button>
  );
}
