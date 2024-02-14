// HeadlineCard.tsx
import React, { ReactNode } from "react";
import style from "./HeadlineCard.module.scss";
import Card from "../../Atoms/Card/Card";

interface HeadlineCardProps {
  children: ReactNode;
}

const HeadlineCard: React.FC<HeadlineCardProps> = ({ children }) => {
  return (
    <div className={style.headlineCard}>
      <Card>
        <div className={style.contentItem__header__wrapper}>
          <div className={style.contentItem__logo}>
            <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png&w=288&h=288&transparent=true"></img>
          </div>
          <div className={style.contentItem__header__headings}>
            <h2>NBA TRADE DEADLINE</h2>
            <h3>FEB. 8</h3>
          </div>
        </div>
        {children}
        <div className={style.headlineStack}>
          <div className={style.headlineStack__listContainer}>
            <ul className={style.headlineStack__list}>
              <li>
                <a>Trade deadline: Latest buzz, news and reports</a>
              </li>
            </ul>
            <ul className={style.headlineStack__list}>
              <li>
                <a>Trade tracker: Grades, details for every deal</a>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HeadlineCard;
