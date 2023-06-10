import React from "react";
import Link from "next/link";
interface CardT {
  data: any;
}
const Card = ({ data }: CardT) => {
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
          </div>
          <p className="card__description">{data.des}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
