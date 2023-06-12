import React from "react";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import styles from "../ProjectsView.module.scss";
interface CardT {
  data: any;
}
const Card = ({ data }: CardT) => {
  const stopPropagation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };
  return (
    <div className="card_container">
      <Link href={`/project/${data.url}`} className="card">
        <img src={data?.bg_img} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            {/* <img className="card__thumb" src="/dch-logo.svg" alt="" /> */}
            <div className="card__header-text">
              <h3 className="card__title">{data.title}</h3>
            </div>

            {data?.githubURL ? (
              <a
                href={data.githubURL}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
              >
                <Tooltip title="GitHube" placement="bottom">
                  <GitHubIcon />
                </Tooltip>
              </a>
            ) : (
              ""
            )}
            {data.pageURL ? (
              <a
                href={data.pageURL}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stopPropagation}
              >
                <Tooltip title="Website" placement="bottom">
                  <LanguageIcon />
                </Tooltip>
              </a>
            ) : (
              ""
            )}
          </div>
          <p className="card__description">{data.s_des}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
