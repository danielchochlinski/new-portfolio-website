"use client";

import styles from "./page.module.scss";
import HeroView from "@/views/home/hero/HeroView";
import NavbarView from "@/views/navbar/NavbarView";

export default function Home() {
  return (
    <>
      <HeroView />
      <main className={styles.main}>
        <NavbarView />
      </main>
    </>
  );
}
