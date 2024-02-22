import React from "react";
import style from "./HeadlineBottomCard.module.scss";
import { IHeadlineBottomCardProps } from "./HeadlineBottomCard.types";

const HeadlineBottomCard = ({imageUrl, title, subTitle, hour, name} : IHeadlineBottomCardProps) => {
  return (
    <div>
      <section className={style.contentItem__content}>
        <a>
          <div className={style.contentItem__titleWrapper}>
            <h2 className={style.contentItem__title}>
              {title}
            </h2>
            <p className={style.contentItem__subhead}>
             {subTitle}
            </p>
            <div className={style.contentItem__contentMeta}>
              <span>{hour}</span>
              <span className={style.contentMeta__author}>{name}</span>
            </div>
          </div>
          <img src={imageUrl}></img>
        </a>
      </section>
    </div>
  );
};

export default HeadlineBottomCard;
