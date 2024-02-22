import React from "react";
import style from "./TopHeadlines.module.scss";
import Card from "@/Components/Atoms/Card/Card";
import { MdOutlineViewHeadline } from "react-icons/md";
import { ITopHeadlineProps } from "./TopHeadlines.types";

const TopHeadlines = ({ headlines }: ITopHeadlineProps) => {
  return (
    <>
      <Card padding={"12px 12px 0 12px"}>
        <header className={style.headlineStack__header}>
          <div>
            <MdOutlineViewHeadline />
          </div>
          <h2 className={style.module__header}>Top Headlines</h2>
        </header>
        <div className={style.headlineStack__listContainer}>
          <ul className={style.headlineStack__list}>
            {headlines.map((headline, index) => (
              <li key={index}>
                <a>{headline}</a>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </>
  );
};

export default TopHeadlines;
