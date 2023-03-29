import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <Link href="/blog">Visit blog</Link>
    </main>
  );
}
