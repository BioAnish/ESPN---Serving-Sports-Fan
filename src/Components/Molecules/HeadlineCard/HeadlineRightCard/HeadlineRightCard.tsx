import React from "react";
import style from "./HeadlineRightCard.module.scss";
import { IHeadlineRightCardProps } from "./HeadlineRightCard.types";

const HeadlineRightCard = ({ cards }: { cards: IHeadlineRightCardProps[] }) => {
  return (
    <section className={style.article__card}>
      <div className={style.header}>
        <h2>Headlines</h2>
      </div>
      <ul className={style.article__card__content}>
        {cards.map((card, index) => (
          <li className={style.card} key={index}>
            <div className={style.img__wrap}>
              <a href={card.imageUrl}>
                <img src={card.imageUrl} alt={card.title} />
              </a>
            </div>
            <div className={style.text__container}>
              <h2>{card.heading}</h2>
              <p>{card.subTitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HeadlineRightCard;
