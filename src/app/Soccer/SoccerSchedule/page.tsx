import React from "react";
import style from "./page.module.scss";
import Card from "@/Components/Atoms/Card/Card";
import Footer from "@/Components/Molecules/Footer/Footer";
import { IoCalendarOutline } from "react-icons/io5";

const SoccerSchedulePage = () => {
  return (
    <>
      <div className={style.pageLayout}>
        <div className={style.col_one}>
          <Card padding="10px 12px">
            <div className={style.card__heading}>
              <h1 className={style.card__headline}>Soccer Schedule</h1>
              <div className={style.card__dropdown}>
                <select className={style.card__dropdown__select}>
                  <option className={style.card__dropdown__select}>
                    Choose a League
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
            <div className={style.ScheduleTables}>
              <div className={style.ResponsiveTable}>
                <div className={style.Table__Title}>English Premier League</div>
                <div className={style.flex}>
                  <div className={style.Table__ScrollerWrapper}>
                    <div className={style.Table__Scroller}>
                      <table className={style.Table}>
                        {/* <col className="Table__Colgroup"><col className="Table__Column"><col className="Table__Column"><col className="Table__Column"><col className="Table__Column"><col className="Table__Column"></col> */}
                        <thead className={style.Table__THEAD}>
                          <tr className={style.Table__TR}>
                            <th
                              title=""
                              colSpan={2}
                              className={style.Table__TH}
                            >
                              <div className="">MATCH</div>
                            </th>
                            <th title="" className={style.Table__TH}>
                              <div className="">TIME</div>
                            </th>
                            <th title="" className={style.Table__TH}>
                              <div className="">TV</div>
                            </th>
                            <th title="" className={style.Table__TH}>
                              <div className="">Location</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className={style.Table__TBODY}>
                          <tr
                            className={`${style.Table__TR} ${style.Table__even}`}
                            data-idx="0"
                          >
                            <td
                              className={`${style.colspan__col} ${style.Table__TD}`}
                            >
                              <div className={style.matchTeams}>
                                <span
                                  className={`${style.Table__Team} ${style.away}`}
                                >
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/239/torino"
                                  >
                                    <img
                                      alt=""
                                      data-mptype="image"
                                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/239.png&amp;w=40&amp;h=40&amp;scale=crop&amp;cquality=40&amp;location=origin"
                                    />
                                  </a>
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/239/torino"
                                  >
                                    Torino
                                  </a>
                                </span>
                              </div>
                            </td>
                            <td
                              className={`${style.colspan__col} ${style.Table__TD}`}
                            >
                              <div className={style.local}>
                                <a
                                  tabIndex={0}
                                  href="/soccer/match/_/gameId/679469/lecce-torino"
                                >
                                  &nbsp; v &nbsp;
                                </a>
                                <span className="Table__Team">
                                  <a
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/113/lecce"
                                  >
                                    <img
                                      alt=""
                                      data-mptype="image"
                                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/113.png&amp;w=40&amp;h=40&amp;scale=crop&amp;cquality=40&amp;location=origin"
                                    />
                                  </a>
                                  <a
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/113/lecce"
                                  >
                                    Lecce
                                  </a>
                                </span>
                              </div>
                            </td>
                            <td
                              className={`${style.date__col} ${style.Table__TD}`}
                            >
                              <a
                                tabIndex={0}
                                href="/soccer/match/_/gameId/679469/lecce-torino"
                              >
                                1:00 PM
                              </a>
                            </td>
                            <td
                              className={`${style.broadcast__col} ${style.Table__TD}`}
                            ></td>
                            <td
                              className={`${style.venue__col} ${style.Table__TD}`}
                            >
                              <div>Olimpico Grande Torino, Torino, Italy</div>
                            </td>
                            <td className="odds__col Table__TD"></td>
                          </tr>
                          <tr
                            className={`${style.Table__TR} ${style.Table__even}`}
                            data-idx="0"
                          >
                            <td
                              className={`${style.colspan__col} ${style.Table__TD}`}
                            >
                              <div className={style.matchTeams}>
                                <span
                                  className={`${style.Table__Team} ${style.away}`}
                                >
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/239/torino"
                                  >
                                    <img
                                      alt=""
                                      data-mptype="image"
                                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                    />
                                  </a>
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/239/torino"
                                  >
                                    Internazionale
                                  </a>
                                </span>
                              </div>
                            </td>
                            <td
                              className={`${style.colspan__col} ${style.Table__TD}`}
                            >
                              <div className={style.local}>
                                <a
                                  tabIndex={0}
                                  href="/soccer/match/_/gameId/679469/lecce-torino"
                                >
                                  &nbsp; v &nbsp;
                                </a>
                                <span className="Table__Team">
                                  <a
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/113/lecce"
                                  >
                                    <img
                                      alt=""
                                      data-mptype="image"
                                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3240.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                    />
                                  </a>
                                  <a
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/113/lecce"
                                  >
                                    Salernitana
                                  </a>
                                </span>
                              </div>
                            </td>
                            <td
                              className={`${style.date__col} ${style.Table__TD}`}
                            >
                              <a
                                tabIndex={0}
                                href="/soccer/match/_/gameId/679469/lecce-torino"
                              >
                                3:00 PM
                              </a>
                            </td>
                            <td
                              className={`${style.broadcast__col} ${style.Table__TD}`}
                            ></td>
                            <td
                              className={`${style.venue__col} ${style.Table__TD}`}
                            >
                              <div>Stadio Giuseppe Meazza, Milano, Italy</div>
                            </td>
                            <td className="odds__col Table__TD"></td>
                          </tr>
                          <tr
                            className={`${style.Table__TR} ${style.Table__even}`}
                            data-idx="0"
                          >
                            <td
                              className={`${style.colspan__col} ${style.Table__TD}`}
                            >
                              <div className={style.matchTeams}>
                                <span
                                  className={`${style.Table__Team} ${style.away}`}
                                >
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/239/torino"
                                  >
                                    <img
                                      alt=""
                                      data-mptype="image"
                                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                    />
                                  </a>
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/239/torino"
                                  >
                                    Internazionale
                                  </a>
                                </span>
                              </div>
                            </td>
                            <td
                              className={`${style.colspan__col} ${style.Table__TD}`}
                            >
                              <div className={style.local}>
                                <a
                                  tabIndex={0}
                                  href="/soccer/match/_/gameId/679469/lecce-torino"
                                >
                                  &nbsp; v &nbsp;
                                </a>
                                <span className="Table__Team">
                                  <a
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/113/lecce"
                                  >
                                    <img
                                      alt=""
                                      data-mptype="image"
                                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3240.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                    />
                                  </a>
                                  <a
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/113/lecce"
                                  >
                                    Salernitana
                                  </a>
                                </span>
                              </div>
                            </td>
                            <td
                              className={`${style.date__col} ${style.Table__TD}`}
                            >
                              <a
                                tabIndex={0}
                                href="/soccer/match/_/gameId/679469/lecce-torino"
                              >
                                3:00 PM
                              </a>
                            </td>
                            <td
                              className={`${style.broadcast__col} ${style.Table__TD}`}
                            ></td>
                            <td
                              className={`${style.venue__col} ${style.Table__TD}`}
                            >
                              <div>Stadio Giuseppe Meazza, Milano, Italy</div>
                            </td>
                            <td className="odds__col Table__TD"></td>
                          </tr>
                          <tr
                            className={`${style.Table__TR} ${style.Table__even}`}
                            data-idx="0"
                          >
                            <td
                              className={`${style.colspan__col} ${style.Table__TD}`}
                            >
                              <div className={style.matchTeams}>
                                <span
                                  className={`${style.Table__Team} ${style.away}`}
                                >
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/239/torino"
                                  >
                                    <img
                                      alt=""
                                      data-mptype="image"
                                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                    />
                                  </a>
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/239/torino"
                                  >
                                    Internazionale
                                  </a>
                                </span>
                              </div>
                            </td>
                            <td
                              className={`${style.colspan__col} ${style.Table__TD}`}
                            >
                              <div className={style.local}>
                                <a
                                  tabIndex={0}
                                  href="/soccer/match/_/gameId/679469/lecce-torino"
                                >
                                  &nbsp; v &nbsp;
                                </a>
                                <span className="Table__Team">
                                  <a
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/113/lecce"
                                  >
                                    <img
                                      alt=""
                                      data-mptype="image"
                                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3240.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                    />
                                  </a>
                                  <a
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/113/lecce"
                                  >
                                    Salernitana
                                  </a>
                                </span>
                              </div>
                            </td>
                            <td
                              className={`${style.date__col} ${style.Table__TD}`}
                            >
                              <a
                                tabIndex={0}
                                href="/soccer/match/_/gameId/679469/lecce-torino"
                              >
                                3:00 PM
                              </a>
                            </td>
                            <td
                              className={`${style.broadcast__col} ${style.Table__TD}`}
                            ></td>
                            <td
                              className={`${style.venue__col} ${style.Table__TD}`}
                            >
                              <div>Stadio Giuseppe Meazza, Milano, Italy</div>
                            </td>
                            <td className="odds__col Table__TD"></td>
                          </tr>
                          <tr
                            className={`${style.Table__TR} ${style.Table__even}`}
                            data-idx="0"
                          >
                            <td
                              className={`${style.colspan__col} ${style.Table__TD}`}
                            >
                              <div className={style.matchTeams}>
                                <span
                                  className={`${style.Table__Team} ${style.away}`}
                                >
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/239/torino"
                                  >
                                    <img
                                      alt=""
                                      data-mptype="image"
                                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                    />
                                  </a>
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/239/torino"
                                  >
                                    Internazionale
                                  </a>
                                </span>
                              </div>
                            </td>
                            <td
                              className={`${style.colspan__col} ${style.Table__TD}`}
                            >
                              <div className={style.local}>
                                <a
                                  tabIndex={0}
                                  href="/soccer/match/_/gameId/679469/lecce-torino"
                                >
                                  &nbsp; v &nbsp;
                                </a>
                                <span className="Table__Team">
                                  <a
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/113/lecce"
                                  >
                                    <img
                                      alt=""
                                      data-mptype="image"
                                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3240.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                    />
                                  </a>
                                  <a
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/113/lecce"
                                  >
                                    Salernitana
                                  </a>
                                </span>
                              </div>
                            </td>
                            <td
                              className={`${style.date__col} ${style.Table__TD}`}
                            >
                              <a
                                tabIndex={0}
                                href="/soccer/match/_/gameId/679469/lecce-torino"
                              >
                                3:00 PM
                              </a>
                            </td>
                            <td
                              className={`${style.broadcast__col} ${style.Table__TD}`}
                            ></td>
                            <td
                              className={`${style.venue__col} ${style.Table__TD}`}
                            >
                              <div>Stadio Giuseppe Meazza, Milano, Italy</div>
                            </td>
                            <td className="odds__col Table__TD"></td>
                          </tr>
                          <tr
                            className={`${style.Table__TR} ${style.Table__even}`}
                            data-idx="0"
                          >
                            <td
                              className={`${style.colspan__col} ${style.Table__TD}`}
                            >
                              <div className={style.matchTeams}>
                                <span
                                  className={`${style.Table__Team} ${style.away}`}
                                >
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/239/torino"
                                  >
                                    <img
                                      alt=""
                                      data-mptype="image"
                                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                    />
                                  </a>
                                  <a
                                    className={style.AnchorLink}
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/239/torino"
                                  >
                                    Internazionale
                                  </a>
                                </span>
                              </div>
                            </td>
                            <td
                              className={`${style.colspan__col} ${style.Table__TD}`}
                            >
                              <div className={style.local}>
                                <a
                                  tabIndex={0}
                                  href="/soccer/match/_/gameId/679469/lecce-torino"
                                >
                                  &nbsp; v &nbsp;
                                </a>
                                <span className="Table__Team">
                                  <a
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/113/lecce"
                                  >
                                    <img
                                      alt=""
                                      data-mptype="image"
                                      src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3240.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                    />
                                  </a>
                                  <a
                                    tabIndex={0}
                                    data-track-navmethod="schedule"
                                    data-track-linkid="soccer:schedule:team"
                                    href="/soccer/team/_/id/113/lecce"
                                  >
                                    Salernitana
                                  </a>
                                </span>
                              </div>
                            </td>
                            <td
                              className={`${style.date__col} ${style.Table__TD}`}
                            >
                              <a
                                tabIndex={0}
                                href="/soccer/match/_/gameId/679469/lecce-torino"
                              >
                                3:00 PM
                              </a>
                            </td>
                            <td
                              className={`${style.broadcast__col} ${style.Table__TD}`}
                            ></td>
                            <td
                              className={`${style.venue__col} ${style.Table__TD}`}
                            >
                              <div>Stadio Giuseppe Meazza, Milano, Italy</div>
                            </td>
                            <td className="odds__col Table__TD"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </>
  );
};

export default SoccerSchedulePage;
