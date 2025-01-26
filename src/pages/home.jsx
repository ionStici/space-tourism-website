import { Link } from "react-router-dom";
import styles from "./../styles/home.module.scss";
import { paths } from "../data/paths";

export function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bg}></div>

      <div className={styles.contentWrapper}>
        <h1 className={styles.h1}>
          <span className={styles.h1_up}>So, you want to travel to</span>
          <span className={styles.h1_down}>Space</span>
        </h1>
        <p className={styles.p}>
          Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer
          space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll
          give you a truly out of this world experience!
        </p>
      </div>

      <div className={styles.buttonWrapper}>
        <Link to={paths.destination} className={styles.link}>
          Explore
        </Link>
      </div>
    </main>
  );
}
