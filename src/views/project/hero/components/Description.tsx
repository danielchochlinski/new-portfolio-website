import React from "react";
import styles from "../HeroView.module.scss";
interface DescriptionT {
  data: any;
}
const Description = ({ data }: DescriptionT) => {
  console.log(data);
  return (
    <div className={styles.des_container}>
      <span>{data.des}</span>
    </div>
  );
};

export default Description;
