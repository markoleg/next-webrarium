import styles from "./Footer.module.css";

export default function Footer() {
  // get current year
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="divider"></div>
        <div className={styles.f_brand}>WEBRARIUM</div>
        <nav className={styles.f_nav}>
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </nav>
        <p className={styles.copyright}>
          <small>&copy;{year} Webrarium. All right reserved.</small>
        </p>
      </div>
    </footer>
  );
}
