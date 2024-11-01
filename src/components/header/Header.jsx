import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header>
      <nav>
        <div className={`container ${styles["nav-container"]}`}>
          <a href="#home" className={styles["nav-logo"]}>
            <img height={30} src={logo} alt="Najot ta'lim" />
          </a>
          <div className={styles["nav-list"]}>
            <a className={styles["nav-link"]} href="#home">
              Home
            </a>
            <a className={styles["nav-link"]} href="#about">
              About
            </a>
            <a className={styles["nav-link"]} href="#service">
              Services
            </a>
            <a className={styles["nav-link"]} href="#portfolio">
              Portfolios
            </a>
            <a className={styles["nav-link"]} href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
