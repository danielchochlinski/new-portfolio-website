import { useEffect } from "react";
import styles from "./AboutMeView.module.scss";
import { Element } from "react-scroll";

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
          "Wagmi",
          "Ethers JS",
          "Thirdweb",
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
    <Element name="about-me" id="about-me" className={styles.container}>
      <div className={styles.info} id="about-me">
        <h2>About Me</h2>
        <p>
          In my first year and a half, I focused on front-end development,
          gaining valuable experience in JavaScript and related technologies.
          Over the past six months, I transitioned to full-stack development,
          working on two projects. I enjoy the process of creating visually
          appealing solutions and finding innovative ways to solve problems.
          Learning new technologies excites me as it opens doors to endless
          possibilities.
          <br />
          <br />
          Throughout my journey, I have successfully contributed to both
          front-end and back-end aspects, gaining a holistic understanding of
          the development process. While I have a strong foundation in front-end
          development, I discovered that I feel most comfortable and confident
          working within the JavaScript ecosystem as a full-stack developer.
          <br />
          <br />
          Prior to my career in development, I was a professional athlete, which
          instilled in me qualities such as hard work, performing under
          pressure, and excellent teamwork. These traits complement my technical
          skills and enable me to thrive in dynamic and collaborative
          environments.
          <br />
          <br />
          I am eager to continue my growth, expand my skill set, and make
          meaningful contributions in the world of web development.
        </p>
      </div>
      <div className={styles.tagCloud}>
        <div className={"tagcloud-container"} />
      </div>
    </Element>
  );
}

export default AboutMeView;
