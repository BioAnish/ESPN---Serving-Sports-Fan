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

// "use client";
// import React, { useState } from "react";
// import style from "./HeaderCarousel.module.scss";
// import SharedData from "@/Utils/SharedData";
// import Scoreboard from "../Scoreboard/Scoreboard";
// import { Game } from "../Scoreboard/Scoreboard.types";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import DropdownMenu from "../../Atoms/DropdownMenu/DropdownMenu";
// import Dropdown from "../../Atoms/Dropdown/Dropdown";

// const HeaderCarousel = () => {
//   return (
//     <div className={style.carouselContainer}>
//       <div className={style.scoreboard_content}>
//         <div className={style.scoreboard_dropdown_wrapper}>
//           <Dropdown>
//             <DropdownMenu items={SharedData.topevent.items} blueVariant />
//           </Dropdown>
//         </div>
//         <div className={style.gameItem}>
//           <Carousel
//             additionalTransfrom={0}
//             arrows
//             autoPlaySpeed={3000}
//             centerMode={false}
//             className=""
//             containerClass="container"
//             dotListClass=""
//             draggable
//             focusOnSelect={false}
//             infinite={false}
//             itemClass=""
//             keyBoardControl
//             minimumTouchDrag={80}
//             pauseOnHover
//             renderArrowsWhenDisabled={false}
//             renderButtonGroupOutside={false}
//             renderDotsOutside={false}
//             responsive={{
//               desktop: {
//                 breakpoint: {
//                   max: 3000,
//                   min: 1024,
//                 },
//                 items: 1,
//                 partialVisibilityGutter: 40,
//               },
//               mobile: {
//                 breakpoint: {
//                   max: 464,
//                   min: 0,
//                 },
//                 items: 1,
//                 partialVisibilityGutter: 30,
//               },
//               tablet: {
//                 breakpoint: {
//                   max: 1024,
//                   min: 464,
//                 },
//                 items: 2,
//                 partialVisibilityGutter: 30,
//               },
//             }}
//             rewind={false}
//             rewindWithAnimation={false}
//             rtl={false}
//             shouldResetAutoplay
//             showDots={false}
//             sliderClass=""
//             slidesToSlide={1}
//             swipeable
//           >
//             <div>
//               <Scoreboard games={SharedData.nbaGames} />
//             </div>
//             <div>
//               <Scoreboard games={SharedData.ncaamGames} />
//             </div>
//             <div>
//               <Scoreboard games={SharedData.nflGames} />
//             </div>
//             <div>
//               <Scoreboard games={SharedData.nhlGames} />
//             </div>
//             <div>
//               <Scoreboard games={SharedData.nbaGames} />
//             </div>
//           </Carousel>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderCarousel;
