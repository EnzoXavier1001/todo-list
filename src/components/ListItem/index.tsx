import { Trash } from "@phosphor-icons/react";
import style from "./styles.module.css";
import { Task } from "../../data/Task";

interface ListItemProps extends Task {
  onRemoveTask: (id: string) => void;
  onChecked: (id: string) => void;
}

export function ListItem({
  id,
  text,
  onRemoveTask,
  done,
  onChecked,
}: ListItemProps) {
  return (
    <div className={style.listItem}>
      <div className={style.checkBoxWrapper}>
        <input
          id={`checkboxHasDone-${id}`}
          type="checkbox"
          checked={done}
          onChange={() => onChecked(id)}
        />

        <label
          htmlFor={`checkboxHasDone-${id}`}
          className={done ? style.hasDone : ""}
        ></label>
      </div>
      <p className={`${style.listItemText} ${done ? style.hasDone : ""}`}>
        {text}
      </p>
      <button
        className={style.trashButton}
        onClick={() => onRemoveTask(id)}
        title="Deletar Tarefa"
      >
        <Trash className={style.trashButtonIcon} size={22} color="#808080" />
      </button>
    </div>
  );
}
