// HeadlineCard.tsx
import React, { ReactNode } from "react";
import style from "./HeadlineCard.module.scss";
import Card from "../../Atoms/Card/Card";
import { IHeadlineCardProps } from "./HeadlineCard.types";

interface HeadlineCardProps {
  children: ReactNode;
}

const HeadlineCard = ({
  imageUrl,
  title,
  subTitle,
  bottomTitle,
  bottomSubTitle,
  bottomDescription,
  children,
}: IHeadlineCardProps) => {
  return (
    <div className={style.headlineCard}>
      <Card>
        <div className={style.contentItem__header__wrapper}>
          <div className={style.contentItem__logo}>
            <img src={imageUrl}></img>
          </div>
          <div className={style.contentItem__header__headings}>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
          </div>
          {/* <div className={style.contentItem__header__link}>
            <a>See All</a>
          </div> */}
        </div>
        {children}
        {bottomDescription && (
          <div className={style.headlineStack}>
            <div className={style.headlineStack__listContainer}>
              <ul className={style.headlineStack__list}>
                <li>
                  <a>{bottomTitle}</a>
                </li>
              </ul>
              <ul className={style.headlineStack__list}>
                <li>
                  <a>{bottomSubTitle}</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default HeadlineCard;
