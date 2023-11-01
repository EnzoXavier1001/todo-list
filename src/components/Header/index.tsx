import style from "./styles.module.css";
import logoImg from "../../assets/img/Logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={logoImg} alt="Logo todo" />
    </header>
  );
}
