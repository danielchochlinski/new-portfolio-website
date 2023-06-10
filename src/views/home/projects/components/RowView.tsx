import React from "react";
import styles from "../ProjectsView.module.scss";
import Card from "./Card";
import projects from "./projects.json";

const RowView = () => {
  return (
    <div className={styles.project_div}>
      {projects.map((el) => (
        <Card key={`${el.title}row`} data={el} />
      ))}
    </div>
  );
};

export default RowView;
