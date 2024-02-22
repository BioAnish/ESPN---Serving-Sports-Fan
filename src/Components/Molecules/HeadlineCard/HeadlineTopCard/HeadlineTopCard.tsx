import React from "react";
import style from "./HeadlineTopCard.module.scss";
import { IHeadlineTopCardProps } from './HeadlineTopCard.types'

const HeadlineTopCard = ({imageUrl, title, subTitle, hour,author,borderColor} : IHeadlineTopCardProps) => {
  return (
    <div>
      <section className={style.headline__top__card}>
        <a>
          <div className={style.contentItem__contentWrapper}>
            <div className={style.contentItem__teamBorder} style={{backgroundColor: borderColor}}></div>
            <div className={style.contentItem__titleWrapper}>
              <h2 className={style.contentItem__title}>
                {title}
              </h2>
              <p className={style.contentItem__subhead}>{subTitle}</p>
            </div>
            <div className={style.contentItem__contentMeta}>
              <span>{hour}</span>
              <span className={style.contentMeta__author}>{author}</span>
            </div>
          </div>
          <img src={imageUrl}></img>
        </a>
      </section>
    </div>
  );
};

export default HeadlineTopCard;
