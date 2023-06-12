"use client";

import AboutMeView from "@/views/home/about/AboutMeView";
import styles from "./page.module.scss";
import HeroView from "@/views/home/hero/HeroView";
import ProjectsView from "@/views/home/projects/ProjectsView";
import NavbarView from "@/views/home/navbar/NavbarView";
import ContactView from "@/views/home/contact/ContactView";
import NotificationProvider from "@/context/notifications/NotificationProvider";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <NotificationProvider>
        <>
          <HeroView />
          <main className={styles.main}>
            <NavbarView />
            <ProjectsView />
            <AboutMeView />
          </main>
          <ContactView />
        </>
      </NotificationProvider>
    </>
  );
}
