"use client";
import React, { useState } from "react";
import style from "./PageGameStrip.module.scss";
import { IPageGameStripProps } from "./PageGameStrip.types";

const PageGameStrip = ({
  background,
  stripTitle,
  rightSideTeam,
  leftSideTeam,
  rightIcon,
  leftIcon,
  day,
  time,
}: IPageGameStripProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive); // Toggle the active state
  };
  return (
    <>
      <header className={style.game__strip}>
        <div className={style.game__details} style={{ background }}>
          <span className={style.cscore_notes_game}>{stripTitle}</span>
        </div>
        <a className={style.competitors}>
          <div className={style.team}>
            <div className={style.team__content}>
              <div className={style.team__container}>
                <div className={style.team__info}>
                  <div className={style.team__info__wrapper}>
                    <span className={style.rank}></span>
                    <span className={style.team__name}>{leftSideTeam}</span>
                  </div>
                  <span className={style.record}></span>
                </div>
                <div className={style.team__info__logo}>
                  <div className={style.logo}>
                    <picture>
                      <source srcSet={leftIcon} />
                      <img src={leftIcon} />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="score-container">
                <span className="score update__score icon-font-after"></span>
              </div>
            </div>
          </div>
          <div className={style.game__status}>
            <span data-date="2024-02-17T17:30:00Z" data-behavior="date_time">
              <span className={style.game__date} data-dateformat="date9">
                {day}
              </span>

              <span
                className={style.game__time}
                data-dateformat="time1"
                data-showtimezone="true"
              >
                {time}
              </span>
            </span>

            <div className="game-status-details"></div>
          </div>
          <div className={style.team}>
            <div className={style.team__content}>
              <div className={style.team__container}>
                <div className={style.team__info__logo}>
                  <div className={style.logo}>
                    <picture>
                      <source srcSet={rightIcon} />
                      <img src={rightIcon} />
                    </picture>
                  </div>
                </div>

                <div className={style.team__info}>
                  <div className={style.team__info__wrapper}>
                    <span className={style.rank}></span>
                    <span className={style.team__name}>{rightSideTeam}</span>
                  </div>
                  <span className={style.record}></span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </header>
      <section className={style.gameblockOdds}>
        <div className={style.oddsStripContent}>
          <div className={style.accordion__header} onClick={toggleAccordion}>
            <a
              className={`${style.oddsStrip} ${isActive ? style.active : ""}`}
              onClick={toggleActive}
            >
              <img src="https://assets.espn.com/i/espnbet/espn-bet-square-light.svg" />
              <ul className={style.bettingWrapper}>
                <li className={style.betting}>
                  <span className={style.bettingPrimary}>Chelsea +625</span>
                </li>

                <li className={style.betting}>
                  <span className={style.bettingPrimary}>Draw +450</span>
                </li>

                <li className={style.betting}>
                  <span className={style.bettingPrimary}>Man City -280</span>
                </li>
              </ul>
              <div className={style.oddsStripCaret}></div>
            </a>
          </div>
          {isAccordionOpen && (
            <div className={style.accordion__content}>
              <div className={style.betSixPackContent}>
                <div className={style.oddsGrid}>
                  <span
                    className={`${style.headerColumns} ${style.firstHeader}`}
                  >
                    <img
                      className={style.headerLogo}
                      alt=""
                      src="https://a.espncdn.com/i/espnbet/ESPN_Bet_Light.svg"
                    />
                  </span>
                  <span className={style.headerColumns}>Open</span>
                  <span className={style.headerColumns}>ML</span>
                  <span className={style.headerColumns}>Total</span>
                  <span className={style.headerColumns}>Spread</span>
                  <div
                    className={`${style.centerTable} ${style.tableFirstColumn}`}
                  >
                    <div className={style.first}>
                      <div className={style.teamName}>Manchester City</div>
                      <div className={style.secondaryOdd}>(16-4-3)</div>
                    </div>
                  </div>
                  <div className={` ${style.centerTable} ${style.cellOpen}`}>
                    <div className="">
                      <div id="topOdd" className={style.odd}>
                        -270
                      </div>
                      <div className={style.secondaryOdd}>ML</div>
                    </div>
                  </div>
                  <a
                    className={style.cellWrapper}
                    target="_blank"
                    href="https://espnbet.app.link/?%24canonical_url=%2Fsport%2Fsoccer%2Forganization%2Fengland%2Fcompetition%2Fpremier-league%2Fevent%2F9925931f-ce9c-46ee-a0fa-ea9b8ba07143&amp;channel=espn-web&amp;campaign=betting-integrations&amp;tags=pageTemplate%3Asoccer-index&amp;tags=league%3Aeng.1&amp;tags=sport%3Asoccer&amp;tags=gameId%3A671273&amp;tags=betSide%3Ahome&amp;tags=betType%3Astraight&amp;feature=Gameblock"
                    data-analytics-extras='{"gameInfo":"671273+Chelsea vs Manchester City"}'
                  >
                    <div
                      className={`${style.centerTable} ${style.oddsTableCell}`}
                    >
                      <div className={style.oddsTableCellFlex}>
                        <div
                          id="topOdd"
                          className={`${style.odd} ${style.primaryOdd}`}
                        >
                          -280
                        </div>
                        <div className={style.secondaryOdd}></div>
                      </div>
                    </div>
                  </a>
                  <a
                    className={style.cellWrapper}
                    target="_blank"
                    href="https://espnbet.app.link/?%24canonical_url=%2Fsport%2Fsoccer%2Forganization%2Fengland%2Fcompetition%2Fpremier-league%2Fevent%2F9925931f-ce9c-46ee-a0fa-ea9b8ba07143&amp;channel=espn-web&amp;campaign=betting-integrations&amp;tags=pageTemplate%3Asoccer-index&amp;tags=league%3Aeng.1&amp;tags=sport%3Asoccer&amp;tags=gameId%3A671273&amp;tags=betSide%3Ahome&amp;tags=betType%3Astraight&amp;feature=Gameblock"
                    data-analytics-extras='{"gameInfo":"671273+Chelsea vs Manchester City"}'
                  >
                    <div
                      className={`${style.centerTable} ${style.oddsTableCell}`}
                    >
                      <div className={style.oddsTableCellFlex}>
                        <div
                          id="topOdd"
                          className={`${style.odd} ${style.primaryOdd}`}
                        >
                          o3.5
                        </div>
                        <div
                          className={`${style.secondaryOdd} ${style.oddsAlt}`}
                        >
                          +110
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className={style.cellWrapper}
                    target="_blank"
                    href="https://espnbet.app.link/?%24canonical_url=%2Fsport%2Fsoccer%2Forganization%2Fengland%2Fcompetition%2Fpremier-league%2Fevent%2F9925931f-ce9c-46ee-a0fa-ea9b8ba07143&amp;channel=espn-web&amp;campaign=betting-integrations&amp;tags=pageTemplate%3Asoccer-index&amp;tags=league%3Aeng.1&amp;tags=sport%3Asoccer&amp;tags=gameId%3A671273&amp;tags=betSide%3Ahome&amp;tags=betType%3Astraight&amp;feature=Gameblock"
                    data-analytics-extras='{"gameInfo":"671273+Chelsea vs Manchester City"}'
                  >
                    <div
                      className={`${style.centerTable} ${style.oddsTableCell}`}
                    >
                      <div className={style.oddsTableCellFlex}>
                        <div
                          id="topOdd"
                          className={`${style.odd} ${style.primaryOdd}`}
                        >
                          -1.5
                        </div>
                        <div
                          className={`${style.secondaryOdd} ${style.oddsAlt}`}
                        >
                          -115
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className={`${style.centerTable} ${style.tableFirstColumn}`}
                  >
                    <div className={style.first}>
                      <div className={style.teamName}>Chelsea</div>
                      <div className={style.secondaryOdd}>(10-4-10)</div>
                    </div>
                  </div>
                  <div className={` ${style.centerTable} ${style.cellOpen}`}>
                    <div className="">
                      <div id="topOdd" className={style.odd}>
                        u3.5
                      </div>
                      <div className={style.secondaryOdd}>180</div>
                    </div>
                  </div>
                  <a
                    className={style.cellWrapper}
                    target="_blank"
                    href="https://espnbet.app.link/?%24canonical_url=%2Fsport%2Fsoccer%2Forganization%2Fengland%2Fcompetition%2Fpremier-league%2Fevent%2F9925931f-ce9c-46ee-a0fa-ea9b8ba07143&amp;channel=espn-web&amp;campaign=betting-integrations&amp;tags=pageTemplate%3Asoccer-index&amp;tags=league%3Aeng.1&amp;tags=sport%3Asoccer&amp;tags=gameId%3A671273&amp;tags=betSide%3Ahome&amp;tags=betType%3Astraight&amp;feature=Gameblock"
                    data-analytics-extras='{"gameInfo":"671273+Chelsea vs Manchester City"}'
                  >
                    <div
                      className={`${style.centerTable} ${style.oddsTableCell}`}
                    >
                      <div className={style.oddsTableCellFlex}>
                        <div
                          id="topOdd"
                          className={`${style.odd} ${style.primaryOdd}`}
                        >
                          +625
                        </div>
                        <div className={style.secondaryOdd}></div>
                      </div>
                    </div>
                  </a>
                  <a
                    className={style.cellWrapper}
                    target="_blank"
                    href="https://espnbet.app.link/?%24canonical_url=%2Fsport%2Fsoccer%2Forganization%2Fengland%2Fcompetition%2Fpremier-league%2Fevent%2F9925931f-ce9c-46ee-a0fa-ea9b8ba07143&amp;channel=espn-web&amp;campaign=betting-integrations&amp;tags=pageTemplate%3Asoccer-index&amp;tags=league%3Aeng.1&amp;tags=sport%3Asoccer&amp;tags=gameId%3A671273&amp;tags=betSide%3Ahome&amp;tags=betType%3Astraight&amp;feature=Gameblock"
                    data-analytics-extras='{"gameInfo":"671273+Chelsea vs Manchester City"}'
                  >
                    <div
                      className={`${style.centerTable} ${style.oddsTableCell}`}
                    >
                      <div className={style.oddsTableCellFlex}>
                        <div
                          id="topOdd"
                          className={`${style.odd} ${style.primaryOdd}`}
                        >
                          u3.5
                        </div>
                        <div
                          className={`${style.secondaryOdd} ${style.oddsAlt}`}
                        >
                          -140
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className={style.cellWrapper}
                    target="_blank"
                    href="https://espnbet.app.link/?%24canonical_url=%2Fsport%2Fsoccer%2Forganization%2Fengland%2Fcompetition%2Fpremier-league%2Fevent%2F9925931f-ce9c-46ee-a0fa-ea9b8ba07143&amp;channel=espn-web&amp;campaign=betting-integrations&amp;tags=pageTemplate%3Asoccer-index&amp;tags=league%3Aeng.1&amp;tags=sport%3Asoccer&amp;tags=gameId%3A671273&amp;tags=betSide%3Ahome&amp;tags=betType%3Astraight&amp;feature=Gameblock"
                    data-analytics-extras='{"gameInfo":"671273+Chelsea vs Manchester City"}'
                  >
                    <div
                      className={`${style.centerTable} ${style.oddsTableCell}`}
                    >
                      <div className={style.oddsTableCellFlex}>
                        <div
                          id="topOdd"
                          className={`${style.odd} ${style.primaryOdd}`}
                        >
                          +1.5
                        </div>
                        <div
                          className={`${style.secondaryOdd} ${style.oddsAlt}`}
                        >
                          -115
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className={`${style.centerTable} ${style.tableFirstColumn}`}
                  >
                    <div className={style.first}>
                      <div className={style.teamName}>Draw</div>
                      {/* <div className={style.secondaryOdd}>(16-4-3)</div> */}
                    </div>
                  </div>
                  <div className={` ${style.centerTable} ${style.cellOpen}`}>
                    <div className="">
                      <div id="topOdd" className={style.odd}>
                        +400
                      </div>
                      <div className={style.secondaryOdd}>Draw</div>
                    </div>
                  </div>
                  <a
                    className={style.cellWrapper}
                    target="_blank"
                    href="https://espnbet.app.link/?%24canonical_url=%2Fsport%2Fsoccer%2Forganization%2Fengland%2Fcompetition%2Fpremier-league%2Fevent%2F9925931f-ce9c-46ee-a0fa-ea9b8ba07143&amp;channel=espn-web&amp;campaign=betting-integrations&amp;tags=pageTemplate%3Asoccer-index&amp;tags=league%3Aeng.1&amp;tags=sport%3Asoccer&amp;tags=gameId%3A671273&amp;tags=betSide%3Ahome&amp;tags=betType%3Astraight&amp;feature=Gameblock"
                    data-analytics-extras='{"gameInfo":"671273+Chelsea vs Manchester City"}'
                  >
                    <div
                      className={`${style.centerTable} ${style.oddsTableCell}`}
                    >
                      <div className={style.oddsTableCellFlex}>
                        <div
                          id="topOdd"
                          className={`${style.odd} ${style.primaryOdd}`}
                        >
                          +450
                        </div>
                        <div className={style.secondaryOdd}></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PageGameStrip;
