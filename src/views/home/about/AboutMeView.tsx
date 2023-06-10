import { useEffect } from "react";
import styles from "./AboutMeView.module.scss";

function AboutMeView(props: any) {
  useEffect(() => {
    import("../../../utils/TagCloud").then((response) => {
      const tagCloud = response.default;
      // Todo color each type of skill (web, data science, coding concepts)
      // Todo replace text with svg icons
      tagCloud(
        ".tagcloud-container",
        [
          "Javascript",
          "Firebase",
          "npm",
          "React",
          "Redux",
          "Next.js",
          "Tailwind CSS",
          "Bootstrap",
          "CSS",
          "HTML",
          "Git",
          "MongoDB",
          "FontAwesome",
          "NextAuth.js",
          "SASS",
          "Node.js",
          "Express",
          "Material UI",
        ],
        {
          radius: screen.width > 500 ? 320 : 100,
          maxSpeed: "normal",
          initSpeed: "normal",
          direction: 120,
          keep: true,
          useContainerInlineStyles: false,
          sectionContainer: "about",
        }
      );
    });
    return () => {
      let tagClouds = document.getElementsByClassName("tagcloud");
      for (let i = 0; i < tagClouds.length; i++) {
        tagClouds[0].remove();
      }
    };
  }, []);

  return (
    // todo: add hand holding sphere
    <div id="about-me" className={styles.container}>
      <div className={styles.info} id="about-me">
        <h2>About Me</h2>
        <p>
          I am a front end developer with a year of expirience.
          <br />
          <br />
          I enjoy creating what you see, finding solutions to various problem
          and learn new technologies that open doors to endless possibilities.
          <br />
          <br />
          My previous career as a professional athlete has given me what i
          believe are my best characteristics, hard work, ability to perform
          under pressure and excellent teamwork.
        </p>
      </div>
      <div className={styles.tagCloud}>
        <div className={"tagcloud-container"} />
      </div>
    </div>
  );
}

export default AboutMeView;
