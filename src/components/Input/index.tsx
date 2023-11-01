import style from "./styles.module.css";

export function Input() {
  return (
    <input placeholder="Adicione uma nova tarefa" className={style.input} />
  );
}
