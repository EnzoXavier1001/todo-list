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
    </main>
  );
}
