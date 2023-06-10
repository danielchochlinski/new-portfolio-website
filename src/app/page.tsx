"use client";

import AboutMeView from "@/views/home/about/AboutMeView";
import styles from "./page.module.scss";
import HeroView from "@/views/home/hero/HeroView";
import ProjectsView from "@/views/home/projects/ProjectsView";
import NavbarView from "@/views/navbar/NavbarView";
import ContactView from "@/views/home/contact/ContactView";

export default function Home() {
  return (
    <>
      <HeroView />
      <main className={styles.main}>
        <NavbarView />
        <ProjectsView />
        <AboutMeView />
      </main>
      <ContactView />
    </>
  );
}
