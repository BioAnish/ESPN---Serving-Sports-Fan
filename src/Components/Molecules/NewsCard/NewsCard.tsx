import React from "react";
import style from "./NewsCard.module.scss";
import { INewsCardProps } from './NewsCard.types'

const NewsCard = ({ imgUrl, title, subTitle, hour, author }: INewsCardProps) => {
  return (
    <div className={style.newscard__wrapper}>
      <div className={style.newscard__contentlist}>
        <div className={style.newscard__contentlist__item}>
          <a className={style.news__item}>
            <figure className={style.News__Item__Thumbnail}>
              <div className={style.RatioFrame}></div>
              <div className={style.aspect__ratio__child}>
                <img
                  alt={title}
                  className=""
                  data-mptype="image"
                  src={imgUrl}
                />
              </div>
            </figure>
            <div className={style.News__Content__Container}>
              <h2
                className={style.News__Item__Headline}
                aria-label=""
              >
                {title}
              </h2>
              <div
                className={style.News__Item__Description}
                aria-label=""
              >
                {subTitle}
              </div>
              <ul className={style.MetaContent}>
                <li className={style.MetaContent__Item}>
                  {hour}
                </li>
                <li className={`${style.MetaContent__Item} ${style.MetaContent__Item__Author}`}>
                  {author}
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
