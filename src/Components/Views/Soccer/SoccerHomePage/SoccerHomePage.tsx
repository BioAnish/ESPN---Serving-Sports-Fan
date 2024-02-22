"use client";

import React, { useState } from "react";
import style from "./SoccerHomePage.module.scss";
import HeadlineCard from "@/Components/Molecules/HeadlineCard/HeadlineCard";
import HeadlineTopCard from "@/Components/Molecules/HeadlineCard/HeadlineTopCard/HeadlineTopCard";
import HeadlineBottomCard from "@/Components/Molecules/HeadlineCard/HeadlineBottomCard/HeadlineBottomCard";
import Card from "@/Components/Atoms/Card/Card";
import SportScorecard from "@/Components/Molecules/SportScorecard/SportScorecard";
import HeadlineRightCard from "@/Components/Molecules/HeadlineCard/HeadlineRightCard/HeadlineRightCard";
import CardWithLinkAction from "@/Components/Molecules/CardWithLinkAction/CardWithLinkAction";
import SharedData from "@/Utils/SharedData";

const SoccerHomePage = () => {
  const cards = [
    {
      heading: "Best of ESPN+",
      imageUrl: "https://a.espncdn.com/photo/2024/0206/mls_messi-led_inter_miami_16x9.jpg",
      title: "Will Lionel Messi's Inter Miami set a record in MLS?",
      subTitle: "With Lionel Messi, Luis Suárez and Sergio Busquets, Inter Miami has the most star-studded MLS team ever. Is it enough to set new records, or is disappointment next?",
    },
    {
      imageUrl: "https://a.espncdn.com/photo/2024/0202/r1286157_1296x729_16-9.jpg",
      title: "January window recap: Transfers, loans and improved teams",
      subTitle: "With the winter transfer window finally shut, we take a look at some of the best transfers and best loans and which teams improved during this January window.",
    },
    {
      imageUrl: "https://a.espncdn.com/photo/2024/0201/r1285686_1296x729_16-9.jpg",
      title: "Making sense of Pulisic's stellar stats at AC Milan, USMNT",
      subTitle: "Christian Pulisic's goals + assists are up -- but everything else he does well is down, suggesting his output isn't sustainable. Should USMNT fans worry?",
    },
    // Add more cards as needed
  ];
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive); // Toggle the active state
  };
  return (
    <div className={style.homelayout}>
      <div className={style.col_one}>
        <Card backgroundColor="#f9f9fb">
          <CardWithLinkAction
            header="Quick Links"
            quickLinks={SharedData.quickLinks}
          ></CardWithLinkAction>
        </Card>
      </div>
      <div className={style.col_two}>
        <Card>
          <header className={style.game__strip}>
            <div className={style.game__details}>
              <span className={style.cscore_notes_game}>
                2023-24 English Premier League
              </span>
            </div>
            <a className={style.competitors}>
              <div className={style.team}>
                <div className={style.team__content}>
                  <div className={style.team__container}>
                    <div className={style.team__info}>
                      <div className={style.team__info__wrapper}>
                        <span className={style.rank}></span>
                        <span className={style.team__name}>Man City</span>
                      </div>
                      <span className={style.record}></span>
                    </div>
                    <div className={style.team__info__logo}>
                      <div className={style.logo}>
                        <picture>
                          <source srcSet="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png&amp;h=208&amp;w=208" />
                          <img
                            data-default-src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png&amp;h=208&amp;w=208"
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png&amp;h=208&amp;w=208"
                          />
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
                <span
                  data-date="2024-02-17T17:30:00Z"
                  data-behavior="date_time"
                >
                  <span className={style.game__date} data-dateformat="date9">
                    Sat
                  </span>

                  <span
                    className={style.game__time}
                    data-dateformat="time1"
                    data-showtimezone="true"
                  >
                    12:30 PM ET
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
                          <source srcSet="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png&amp;h=208&amp;w=208" />
                          <img
                            data-default-src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png&amp;h=208&amp;w=208"
                            src="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png&amp;h=208&amp;w=208"
                          />
                        </picture>
                      </div>
                    </div>

                    <div className={style.team__info}>
                      <div className={style.team__info__wrapper}>
                        <span className={style.rank}></span>
                        <span className={style.team__name}>Chelsea</span>
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
              <div
                className={style.accordion__header}
                onClick={toggleAccordion}
              >
                <a
                  className={`${style.oddsStrip} ${
                    isActive ? style.active : ""
                  }`}
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
                      <span className={style.bettingPrimary}>
                        Man City -280
                      </span>
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
                      <div
                        className={` ${style.centerTable} ${style.cellOpen}`}
                      >
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
                      <div
                        className={` ${style.centerTable} ${style.cellOpen}`}
                      >
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
                      <div
                        className={` ${style.centerTable} ${style.cellOpen}`}
                      >
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
          <div>
            <HeadlineTopCard
              imageUrl="https://a.espncdn.com/photo/2024/0130/r1284373_1296x729_16-9.jpg"
              title="Did Guardiola make a mistake in letting Cole Palmer join Chelsea?"
              hour="4h"
            ></HeadlineTopCard>
          </div>
          <div>
            <HeadlineBottomCard
              imageUrl="https://a.espncdn.com/photo/2024/0213/r1290869_2_1296x729_16-9.jpg"
              title="Palmer keen to show Man City what they lost when Chelsea visit"
              subTitle="Man City haven't missed Cole Palmer since his summer deadline day move to Chelsea."
              hour="2h"
              name="James Olley"
            ></HeadlineBottomCard>
          </div>
        </Card>
        <div>
          <SportScorecard />
        </div>
      </div>
      <div className={style.col_three}>
        <Card>
          <HeadlineRightCard
          cards={cards}
          ></HeadlineRightCard>
        </Card>
      </div>
    </div>
  );
};

export default SoccerHomePage;
