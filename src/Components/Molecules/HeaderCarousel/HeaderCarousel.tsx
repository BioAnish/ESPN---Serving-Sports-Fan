"use client";
import React, { useEffect, useState } from "react";
import style from "./HeaderCarousel.module.scss";
import SharedData from "@/Utils/SharedData";
import Scoreboard from "../Scoreboard/Scoreboard";
import { Game } from "../Scoreboard/Scoreboard.types";
import DropdownMenu from "../../Atoms/DropdownMenu/DropdownMenu";
import Dropdown from "../../Atoms/Dropdown/Dropdown";

const HeaderCarousel = () => {
  const [selectedItem, setSelectedItem] = useState<string>("topevent");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (selectedItem === "topevent") {
      setSelectedItemIndex(null);
    }
  }, [selectedItem]);

  const handleSelect = (selectedItem: string) => {
    const index = SharedData.topevent.items.indexOf(selectedItem);
    setSelectedItemIndex(index);
    setSelectedItem(selectedItem);
  };
  const gameTypes: (keyof typeof SharedData)[] = [
    "nbaGames",
    "ncaamGames",
    "nflGames",
    "nhlGames",
  ];
  return (
    <div className={style.carouselContainer}>
      <div className={style.scoreboard_content}>
        <div className={style.scoreboard_dropdown_wrapper}>
          <Dropdown selectedItem={selectedItem}>
            <DropdownMenu
              items={SharedData.topevent.items}
              onSelect={handleSelect}
              blueVariant
            />
          </Dropdown>
        </div>
        <div className={style.scores_carousel}>
          <div className={style.gameContainer}>
            {(selectedItem === "topevent" || selectedItemIndex !== null) && (
              <div className={style.gameItem}>
                {selectedItem === "topevent" ? (
                  gameTypes.map((gameType) => (
                    <Scoreboard
                      key={gameType}
                      games={SharedData[gameType] as Game[]}
                    />
                  ))
                ) : (
                  <Scoreboard
                    games={
                      SharedData[
                        gameTypes[selectedItemIndex!] as keyof typeof SharedData
                      ] as Game[]
                    }
                  />
                )}
              </div>
            )}
          </div>
        </div>
      {(selectedItem !== "topevent" && selectedItem) && (
        <div className={style.view__full}>
          <a>Full Scoreboard »</a>
        </div>
      )}
      </div>
    </div>
  );
};

export default HeaderCarousel;
