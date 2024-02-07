"use client";
import React, { useState } from "react";
import style from "./HeaderCarousel.module.scss";
import SharedData from "@/Utils/SharedData";
import Scoreboard from "../Scoreboard/Scoreboard";
import { Game } from "../Scoreboard/Scoreboard.types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HeaderCarousel = () => {
  const gameTypes: (keyof typeof SharedData)[] = [
    "nbaGames",
    "ncaamGames",
    "nhlGames",
    "nflGames",
  ];

  const totalGames = gameTypes.length;

const isGameType = (
  data: any
): data is { id: number; labelContent: string; teams: any[]; dateTime: string; network: string }[] => {
  return data && Array.isArray(data) && data[0]?.hasOwnProperty("labelContent");
};

const dropdownItems = [
  { label: "Top Events", key: "topevent" as const },
  ...gameTypes.reduce((acc, gameType) => {
    const data = SharedData[gameType];
    if (gameType !== "quickLinks" && isGameType(data)) {
      const labelContent = data[0].labelContent;
      if (labelContent) {
        acc.push({ label: labelContent, key: gameType });
      }
    }
    return acc;
  }, [] as { label: string; key: "nbaGames" | "ncaamGames" | "nflGames" | "nhlGames" }[]),
];

  return (
    <div className={style.carouselContainer}>
      <div className={style.scoreboard_content}>
        <div className={style.scoreboard_dropdown_wrapper}>
          <div className={style.dropdown_wrapper}>
            <button className={style.dropdown_button}>{dropdownItems[0].label}</button>
          </div>
        </div>
        <div className={style.scores_carousel}>
          <ul className={style.ul}>
            {gameTypes.map((gameType, index) => (
              <li key={`${gameType}_${index}`}>
                <Scoreboard games={SharedData[gameType] as Game[]} />
              </li>
            ))}
          </ul>
        </div>  
      </div>
    </div>
  );
};

export default HeaderCarousel;
