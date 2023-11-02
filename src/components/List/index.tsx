import { Trash } from "@phosphor-icons/react";
import { Button } from "../Button";
import { Input } from "../Input";
import style from "./styles.module.css";

export function List() {
  return (
    <main className={style.main}>
      <header className={style.header}>
        <Input />
        <Button />
      </header>

      <div className={style.containerList}>
        <header>
          <div className={style.headerContent}>
            <h3 className={style.titleHeaderContent}>Tarefas criadas</h3>
            <span className={style.counterHeaderContent}>5</span>
          </div>
          <div className={style.headerContent}>
            <h3 className={style.titleHeaderContent}>Concluídas</h3>
            <span className={style.counterHeaderContent}>2 de 5</span>
          </div>
        </header>
        <div className={style.list}>
          <div className={style.listItem}>
            <input type="checkbox" />
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <button>
              <Trash size={32} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
