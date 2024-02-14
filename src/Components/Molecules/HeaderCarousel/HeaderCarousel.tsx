"use client";
import React, { useState } from "react";
import style from "./HeaderCarousel.module.scss";
import SharedData from "@/Utils/SharedData";
import Scoreboard from "../Scoreboard/Scoreboard";
import { Game } from "../Scoreboard/Scoreboard.types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DropdownMenu from "../../Atoms/DropdownMenu/DropdownMenu";
import Dropdown from "../../Atoms/Dropdown/Dropdown";

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
  ): data is {
    id: number;
    labelContent: string;
    teams: any[];
    dateTime: string;
    network: string;
  }[] => {
    return (
      data && Array.isArray(data) && data[0]?.hasOwnProperty("labelContent")
    );
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
          <Dropdown>
            <DropdownMenu items={SharedData.topevent.items} blueVariant />
          </Dropdown>
        </div>
        <div className={style.scores_carousel}>
          <div className={style.gameContainer}>
            {gameTypes.map((gameType, index) => (
              <div key={`${gameType}_${index}`} className={style.gameItem}>
                <Scoreboard games={SharedData[gameType] as Game[]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
