import React from "react";
import style from "./page.module.scss";
import Card from "@/Components/Atoms/Card/Card";
import Button from "@/Components/Atoms/Button/Button";
import NewsCard from "@/Components/Molecules/NewsCard/NewsCard";
import SharedData from "@/Utils/SharedData";
import Footer from "@/Components/Molecules/Footer/Footer";
import { IoCalendarOutline } from "react-icons/io5";

const SoccerScorePage = () => {
  return (
    <>
      <div className={style.pageLayout}>
        <div className={style.col_one}>
          <Card padding="10px 12px">
            <div className={style.card__heading}>
              <h1 className={style.card__headline}>Soccer Scores</h1>
              <div className={style.card__dropdown}>
                <select className={style.card__dropdown__select}>
                  <option className={style.card__dropdown__select}>
                    Soccer Scores
                  </option>
                </select>
              </div>
            </div>
            <div className={style.date__picker}>
              <div className={style.datePicker__wrapper}>
                <div className={style.date__Carousel}>
                  <button
                    className={`${style.arrow__button} ${style.left__button}`}
                  ></button>
                  <div className={style.react__swipe__container}>
                    <div className={style.container}>
                      <div className={style.week}>
                        <div className={style.Week__wrapper}>
                          <div tabIndex={0} className={style.day}>
                            <div className={style.day__Container}>
                              <p className={style.day__Name}>Mon</p>
                              <span className={style.day__Number}>
                                <span>Feb 12</span>
                              </span>
                            </div>
                          </div>
                          <div tabIndex={0} className={style.day}>
                            <div className={style.day__Container}>
                              <p className={style.day__Name}>tue</p>
                              <span className={style.day__Number}>
                                <span>Feb 13</span>
                              </span>
                            </div>
                          </div>
                          <div tabIndex={0} className={style.day}>
                            <div className={style.day__Container}>
                              <p className={style.day__Name}>wed</p>
                              <span className={style.day__Number}>
                                <span>Feb 14</span>
                              </span>
                            </div>
                          </div>
                          <div tabIndex={0} className={style.day}>
                            <div className={style.day__Container}>
                              <p className={style.day__Name}>thu</p>
                              <span className={style.day__Number}>
                                <span>Feb 15</span>
                              </span>
                            </div>
                          </div>
                          <div tabIndex={0} className={style.day}>
                            <div className={style.day__Container}>
                              <p className={style.day__Name}>fri</p>
                              <span className={style.day__Number}>
                                <span>Feb 16</span>
                              </span>
                            </div>
                          </div>
                          <div tabIndex={0} className={style.day}>
                            <div className={style.day__Container}>
                              <p className={style.day__Name}>sat</p>
                              <span className={style.day__Number}>
                                <span>Feb 17</span>
                              </span>
                            </div>
                          </div>
                          <div tabIndex={0} className={style.day}>
                            <div className={style.day__Container}>
                              <p className={style.day__Name}>sun</p>
                              <span className={style.day__Number}>
                                <span>Feb 18</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className={`${style.arrow__button} ${style.right__button}`}
                  ></button>
                </div>
                <div className={style.calendar__container}>
                  <button className={style.DateCarousel__MonthTrigger}>
                  <IoCalendarOutline size={"2em"} className={style.calendar__icon}/>
                  </button>
                </div>
              </div>
            </div>
          </Card>
          <header
            className={style.Card__Header}
            aria-label="Wednesday, February 14, 2024"
          >
            <div className={style.Card__Header__Title__Wrapper}>
              <h3 className={style.Card__Header__Title}>
                Wednesday, February 14, 2024
              </h3>
            </div>
          </header>
          <div>
            <Card padding="10px 12px">
              <header
                className={style.Card__League__Header}
                aria-label="UEFA Champions League"
              >
                <a
                  className={style.AnchorLink}
                  href="/soccer/scoreboard/_/league/uefa.champions"
                >
                  <div className={style.Card__Header__Title__Wrapper}>
                    <h3 className={style.Card__Header__Title}>
                      UEFA Champions League
                    </h3>
                  </div>
                </a>
              </header>
              <div>
                <section className={style.scoreboard}>
                  <div className={style.Scoreboard__RowContainer}>
                    <div className={style.Scoreboard__Row}>
                      <div
                        className={`${style.Scoreboard__Column} ${style.Scoreboard__Column__1}`}
                      >
                        <div className="">
                          <div className={style.ScoreboardScoreCell}>
                            <div
                              className={style.ScoreboardScoreCell__Overview}
                            >
                              <div className={style.ScoreCell__Time}>
                                7:30 AM
                              </div>
                              <div className={style.ScoreCell__Network}>
                                <div className={style.ScoreCell__NetworkItem}>
                                  ESPNDP
                                </div>
                                <div className={style.ScoreCell__NetworkItem}>
                                  ESPN+
                                </div>
                              </div>
                              <div className="ScoreboardScoreCell__Headings flex justify-end"></div>
                            </div>
                            <ul
                              className={style.ScoreboardScoreCell__Competitors}
                            >
                              <li className={style.ScoreboardScoreCell__Item}>
                                <a
                                  className={style.AnchorLink}
                                  tabIndex={0}
                                  href="/soccer/team/_/id/337/brentford"
                                >
                                  <img
                                    alt=""
                                    className={style.Logo}
                                    data-mptype="image"
                                    src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png&amp;scale=crop&amp;cquality=40&amp;location=origin&amp;w=64&amp;h=64"
                                  />
                                </a>
                                <div className={style.ScoreCell__Team}>
                                  <div className={style.ScoreCell__Truncate}>
                                    <a
                                      tabIndex={0}
                                      href="/soccer/team/_/id/337/brentford"
                                    >
                                      <div>Brentford</div>
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      style.ScoreboardScoreCell__RecordContainer
                                    }
                                  >
                                    (
                                    <span className="ScoreboardScoreCell__Record">
                                      7-4-12
                                    </span>
                                    )
                                  </div>
                                </div>
                                <div className="ScoreboardScoreCell_Linescores soccer flex justify-end"></div>
                              </li>
                              <li className={style.ScoreboardScoreCell__Item}>
                                <a
                                  className={style.AnchorLink}
                                  tabIndex={0}
                                  href="/soccer/team/_/id/337/brentford"
                                >
                                  <img
                                    alt=""
                                    className={style.Logo}
                                    data-mptype="image"
                                    src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png&amp;scale=crop&amp;cquality=40&amp;location=origin&amp;w=64&amp;h=64"
                                  />
                                </a>
                                <div className={style.ScoreCell__Team}>
                                  <div className={style.ScoreCell__Truncate}>
                                    <a
                                      tabIndex={0}
                                      href="/soccer/team/_/id/337/brentford"
                                    >
                                      <div>Liverpool</div>
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      style.ScoreboardScoreCell__RecordContainer
                                    }
                                  >
                                    (
                                    <span className="ScoreboardScoreCell__Record">
                                      7-4-12
                                    </span>
                                    )
                                  </div>
                                </div>
                                <div className="ScoreboardScoreCell_Linescores soccer flex justify-end"></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${style.Scoreboard__Column} ${style.Scoreboard__Column__2}`}
                      >
                        <div className={style.ScoreboardEventInfo}>
                          <div className={style.LocationDetail}>
                            <div>
                              <div className={style.LocationDetail__Item}>
                                Gtech Community Stadium
                              </div>
                              <div className={style.LocationDetail__Sub__Item}>
                                Brentford, England
                              </div>
                            </div>
                          </div>
                          <div className={style.Event__rate}>
                            <div className={style.Odds__Message}>
                              Line: LIV -170
                              <div className="db">O/U: 3.5</div>
                            </div>
                          </div>
                          <div className="OddsStripWrapper flex flex-row justify-between"></div>
                        </div>
                      </div>
                      <div
                        className={`${style.Scoreboard__Column} ${style.Scoreboard__Column__3}`}
                      >
                        <section className={style.TeamInformation}>
                          <div className={style.ContentList} role="list">
                            <div
                              className={style.ContentList__Item}
                              role="listitem"
                            >
                              <section className={style.TeamLinks}>
                                <div>
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    href="/soccer/team/_/id/337/brentford"
                                  >
                                    <h2>
                                      <img
                                        alt="Brentford"
                                        title="Brentford"
                                        data-mptype="image"
                                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png&amp;h=32&amp;w=32&amp;scale=crop&amp;cquality=40&amp;location=origin"
                                      />
                                      <span>Brentford</span>
                                    </h2>
                                  </a>
                                  <div className={style.TeamLinks__Links}>
                                    <span className={style.TeamLinks__Link}>
                                      <a
                                        className={style.AnchorLink}
                                        tabIndex={0}
                                        href="/soccer/team/squad/_/id/337/brentford"
                                      >
                                        Squad
                                      </a>
                                    </span>
                                    <span className={style.TeamLinks__Link}>
                                      <a
                                        className={style.AnchorLink}
                                        tabIndex={0}
                                        href="/soccer/team/stats/_/id/337/brentford"
                                      >
                                        Stats
                                      </a>
                                    </span>
                                    <span className={style.TeamLinks__Link}>
                                      <a
                                        className={style.AnchorLink}
                                        tabIndex={0}
                                        href="/soccer/team/fixtures/_/id/337/brentford"
                                      >
                                        Fixtures
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </section>
                            </div>
                            <div
                              className={style.ContentList__Item}
                              role="listitem"
                            >
                              <section className={style.TeamLinks}>
                                <div>
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    href="/soccer/team/_/id/337/brentford"
                                  >
                                    <h2>
                                      <img
                                        alt="Brentford"
                                        title="Brentford"
                                        data-mptype="image"
                                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png&amp;h=32&amp;w=32&amp;scale=crop&amp;cquality=40&amp;location=origin"
                                      />
                                      <span>Liverpool</span>
                                    </h2>
                                  </a>
                                  <div className={style.TeamLinks__Links}>
                                    <span className={style.TeamLinks__Link}>
                                      <a
                                        className={style.AnchorLink}
                                        tabIndex={0}
                                        href="/soccer/team/squad/_/id/337/brentford"
                                      >
                                        Squad
                                      </a>
                                    </span>
                                    <span className={style.TeamLinks__Link}>
                                      <a
                                        className={style.AnchorLink}
                                        tabIndex={0}
                                        href="/soccer/team/stats/_/id/337/brentford"
                                      >
                                        Stats
                                      </a>
                                    </span>
                                    <span className={style.TeamLinks__Link}>
                                      <a
                                        className={style.AnchorLink}
                                        tabIndex={0}
                                        href="/soccer/team/fixtures/_/id/337/brentford"
                                      >
                                        Fixtures
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className={style.Action__Button}>
                    <Button variant="secondary">SUMMARY</Button>
                    <Button variant="secondary">PREVIEW</Button>
                    <Button variant="secondary">STATISTIC</Button>
                  </div>
                </section>
                <section className={style.scoreboard}>
                  <div className={style.Scoreboard__RowContainer}>
                    <div className={style.Scoreboard__Row}>
                      <div
                        className={`${style.Scoreboard__Column} ${style.Scoreboard__Column__1}`}
                      >
                        <div className="">
                          <div className={style.ScoreboardScoreCell}>
                            <div
                              className={style.ScoreboardScoreCell__Overview}
                            >
                              <div className={style.ScoreCell__Time}>
                                7:30 AM
                              </div>
                              <div className={style.ScoreCell__Network}>
                                <div className={style.ScoreCell__NetworkItem}>
                                  ESPNDP
                                </div>
                                <div className={style.ScoreCell__NetworkItem}>
                                  ESPN+
                                </div>
                              </div>
                              <div className="ScoreboardScoreCell__Headings flex justify-end"></div>
                            </div>
                            <ul
                              className={style.ScoreboardScoreCell__Competitors}
                            >
                              <li className={style.ScoreboardScoreCell__Item}>
                                <a
                                  className={style.AnchorLink}
                                  tabIndex={0}
                                  href="/soccer/team/_/id/337/brentford"
                                >
                                  <img
                                    alt=""
                                    className={style.Logo}
                                    data-mptype="image"
                                    src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png&amp;scale=crop&amp;cquality=40&amp;location=origin&amp;w=64&amp;h=64"
                                  />
                                </a>
                                <div className={style.ScoreCell__Team}>
                                  <div className={style.ScoreCell__Truncate}>
                                    <a
                                      tabIndex={0}
                                      href="/soccer/team/_/id/337/brentford"
                                    >
                                      <div>Brentford</div>
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      style.ScoreboardScoreCell__RecordContainer
                                    }
                                  >
                                    (
                                    <span className="ScoreboardScoreCell__Record">
                                      7-4-12
                                    </span>
                                    )
                                  </div>
                                </div>
                                <div className="ScoreboardScoreCell_Linescores soccer flex justify-end"></div>
                              </li>
                              <li className={style.ScoreboardScoreCell__Item}>
                                <a
                                  className={style.AnchorLink}
                                  tabIndex={0}
                                  href="/soccer/team/_/id/337/brentford"
                                >
                                  <img
                                    alt=""
                                    className={style.Logo}
                                    data-mptype="image"
                                    src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png&amp;scale=crop&amp;cquality=40&amp;location=origin&amp;w=64&amp;h=64"
                                  />
                                </a>
                                <div className={style.ScoreCell__Team}>
                                  <div className={style.ScoreCell__Truncate}>
                                    <a
                                      tabIndex={0}
                                      href="/soccer/team/_/id/337/brentford"
                                    >
                                      <div>Liverpool</div>
                                    </a>
                                  </div>
                                  <div
                                    className={
                                      style.ScoreboardScoreCell__RecordContainer
                                    }
                                  >
                                    (
                                    <span className="ScoreboardScoreCell__Record">
                                      7-4-12
                                    </span>
                                    )
                                  </div>
                                </div>
                                <div className="ScoreboardScoreCell_Linescores soccer flex justify-end"></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${style.Scoreboard__Column} ${style.Scoreboard__Column__2}`}
                      >
                        <div className={style.ScoreboardEventInfo}>
                          <div className={style.LocationDetail}>
                            <div>
                              <div className={style.LocationDetail__Item}>
                                Gtech Community Stadium
                              </div>
                              <div className={style.LocationDetail__Sub__Item}>
                                Brentford, England
                              </div>
                            </div>
                          </div>
                          <div className={style.Event__rate}>
                            <div className={style.Odds__Message}>
                              Line: LIV -170
                              <div className="db">O/U: 3.5</div>
                            </div>
                          </div>
                          <div className="OddsStripWrapper flex flex-row justify-between"></div>
                        </div>
                      </div>
                      <div
                        className={`${style.Scoreboard__Column} ${style.Scoreboard__Column__3}`}
                      >
                        <section className={style.TeamInformation}>
                          <div className={style.ContentList} role="list">
                            <div
                              className={style.ContentList__Item}
                              role="listitem"
                            >
                              <section className={style.TeamLinks}>
                                <div>
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    href="/soccer/team/_/id/337/brentford"
                                  >
                                    <h2>
                                      <img
                                        alt="Brentford"
                                        title="Brentford"
                                        data-mptype="image"
                                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png&amp;h=32&amp;w=32&amp;scale=crop&amp;cquality=40&amp;location=origin"
                                      />
                                      <span>Brentford</span>
                                    </h2>
                                  </a>
                                  <div className={style.TeamLinks__Links}>
                                    <span className={style.TeamLinks__Link}>
                                      <a
                                        className={style.AnchorLink}
                                        tabIndex={0}
                                        href="/soccer/team/squad/_/id/337/brentford"
                                      >
                                        Squad
                                      </a>
                                    </span>
                                    <span className={style.TeamLinks__Link}>
                                      <a
                                        className={style.AnchorLink}
                                        tabIndex={0}
                                        href="/soccer/team/stats/_/id/337/brentford"
                                      >
                                        Stats
                                      </a>
                                    </span>
                                    <span className={style.TeamLinks__Link}>
                                      <a
                                        className={style.AnchorLink}
                                        tabIndex={0}
                                        href="/soccer/team/fixtures/_/id/337/brentford"
                                      >
                                        Fixtures
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </section>
                            </div>
                            <div
                              className={style.ContentList__Item}
                              role="listitem"
                            >
                              <section className={style.TeamLinks}>
                                <div>
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    href="/soccer/team/_/id/337/brentford"
                                  >
                                    <h2>
                                      <img
                                        alt="Brentford"
                                        title="Brentford"
                                        data-mptype="image"
                                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png&amp;h=32&amp;w=32&amp;scale=crop&amp;cquality=40&amp;location=origin"
                                      />
                                      <span>Liverpool</span>
                                    </h2>
                                  </a>
                                  <div className={style.TeamLinks__Links}>
                                    <span className={style.TeamLinks__Link}>
                                      <a
                                        className={style.AnchorLink}
                                        tabIndex={0}
                                        href="/soccer/team/squad/_/id/337/brentford"
                                      >
                                        Squad
                                      </a>
                                    </span>
                                    <span className={style.TeamLinks__Link}>
                                      <a
                                        className={style.AnchorLink}
                                        tabIndex={0}
                                        href="/soccer/team/stats/_/id/337/brentford"
                                      >
                                        Stats
                                      </a>
                                    </span>
                                    <span className={style.TeamLinks__Link}>
                                      <a
                                        className={style.AnchorLink}
                                        tabIndex={0}
                                        href="/soccer/team/fixtures/_/id/337/brentford"
                                      >
                                        Fixtures
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className={style.Action__Button}>
                    <Button variant="secondary">SUMMARY</Button>
                    <Button variant="secondary">PREVIEW</Button>
                    <Button variant="secondary">STATISTIC</Button>
                  </div>
                </section>
              </div>
            </Card>
          </div>
        </div>
        <div className={style.col_two}>
          <Card heading="Soccer News" padding={"10px 12px"}>
            {SharedData.soccerNewsCard.map((newsItem, index) => (
              <NewsCard
                key={index} // It's a good practice to provide a unique key when rendering lists
                imgUrl={newsItem.imgUrl}
                title={newsItem.title}
                subTitle={newsItem.subTitle}
                hour={newsItem.hour}
                author={newsItem.author}
              />
            ))}
          </Card>
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </>
  );
};

export default SoccerScorePage;
