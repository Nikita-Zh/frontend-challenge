import styles from "./Navbar.module.css";
import { NavLink } from "../NavLink/NavLink";

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li>
            <NavLink className={styles.link} href={"/"}>
              Все котики
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} href={"/liked"}>
              Любимые котики
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
