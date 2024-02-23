"use client";
import React, { useState } from "react";
import style from "./page.module.scss";
import Card from "@/Components/Atoms/Card/Card";
import Footer from "@/Components/Molecules/Footer/Footer";
import DateCarousel from "@/Components/Atoms/DateCarousel/DateCarousel";

const SoccerSchedulePage = () => {
  const [selectedLeague, setSelectedLeague] = useState("Choose a League");
  const handleLeagueChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedLeague(event.target.value);
  };
  return (
    <>
      <div className={style.pageLayout}>
        <div className={style.col_one}>
          <Card padding="10px 12px">
            <div className={style.card__heading}>
              <h1 className={style.card__headline}>
                {selectedLeague === "Choose a League"
                  ? "Soccer Schedule"
                  : `${selectedLeague} Schedule`}
              </h1>
              <div className={style.card__dropdown}>
                <select
                  className={style.card__dropdown__select}
                  value={selectedLeague}
                  onChange={handleLeagueChange}
                >
                  <option
                    value="Choose a League"
                    className={style.card__dropdown__select}
                  >
                    Choose a League
                  </option>
                  <option
                    value="UEFA Champions League"
                    className={style.card__dropdown__select}
                  >
                    UEFA Champions League
                  </option>
                  <option
                    value="UEFA Europa League"
                    className={style.card__dropdown__select}
                  >
                    UEFA Europa League
                  </option>
                  <option
                    value="English Premier League"
                    className={style.card__dropdown__select}
                  >
                    English Premier League
                  </option>
                </select>
              </div>
            </div>
            <DateCarousel />
            <div className={style.ScheduleTables}>
              {(selectedLeague === "Choose a League" ||
                selectedLeague === "English Premier League") && (
                <div className={style.ResponsiveTable}>
                  <div className={style.Table__Title}>
                    English Premier League
                  </div>
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
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={style.ScheduleTables}>
              {(selectedLeague === "Choose a League" ||
                selectedLeague === "UEFA Champions League") && (
                <div className={style.ResponsiveTable}>
                  <div className={style.Table__Title}>
                    UEFA Champions League
                  </div>
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
                                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/437.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                      />
                                    </a>
                                    <a
                                      className={style.AnchorLink}
                                      tabIndex={0}
                                      data-track-navmethod="schedule"
                                      data-track-linkid="soccer:schedule:team"
                                      href="/soccer/team/_/id/239/torino"
                                    >
                                      Fc Porto
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
                                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                      />
                                    </a>
                                    <a
                                      tabIndex={0}
                                      data-track-navmethod="schedule"
                                      data-track-linkid="soccer:schedule:team"
                                      href="/soccer/team/_/id/113/lecce"
                                    >
                                      Arsenal
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
                                <div>Estádio do Dragão, Porto, Portugal</div>
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
                                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                      />
                                    </a>
                                    <a
                                      className={style.AnchorLink}
                                      tabIndex={0}
                                      data-track-navmethod="schedule"
                                      data-track-linkid="soccer:schedule:team"
                                      href="/soccer/team/_/id/239/torino"
                                    >
                                      Napoli
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
                                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                      />
                                    </a>
                                    <a
                                      tabIndex={0}
                                      data-track-navmethod="schedule"
                                      data-track-linkid="soccer:schedule:team"
                                      href="/soccer/team/_/id/113/lecce"
                                    >
                                      Barcelona
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
                                <div>Diego Armando Maradona, Napoli, Italy</div>
                              </td>
                              <td className="odds__col Table__TD"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={style.ScheduleTables}>
              {(selectedLeague === "Choose a League" ||
                selectedLeague === "UEFA Europa League") && (
                <div className={style.ResponsiveTable}>
                  <div className={style.Table__Title}>UEFA Europa League</div>
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
                                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/104.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                      />
                                    </a>
                                    <a
                                      className={style.AnchorLink}
                                      tabIndex={0}
                                      data-track-navmethod="schedule"
                                      data-track-linkid="soccer:schedule:team"
                                      href="/soccer/team/_/id/239/torino"
                                    >
                                      AS Roma
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
                                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/142.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                      />
                                    </a>
                                    <a
                                      tabIndex={0}
                                      data-track-navmethod="schedule"
                                      data-track-linkid="soccer:schedule:team"
                                      href="/soccer/team/_/id/113/lecce"
                                    >
                                      Feyenoord Rotterdam
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
                                <div>Olimpico, Roma, Italy</div>
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
                                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/176.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                      />
                                    </a>
                                    <a
                                      className={style.AnchorLink}
                                      tabIndex={0}
                                      data-track-navmethod="schedule"
                                      data-track-linkid="soccer:schedule:team"
                                      href="/soccer/team/_/id/239/torino"
                                    >
                                      Marseille
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
                                        src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/493.png&w=40&h=40&scale=crop&cquality=40&location=origin"
                                      />
                                    </a>
                                    <a
                                      tabIndex={0}
                                      data-track-navmethod="schedule"
                                      data-track-linkid="soccer:schedule:team"
                                      href="/soccer/team/_/id/113/lecce"
                                    >
                                      Shakhtar Donetsk
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
                                <div>Orange Vélodrome, Marseille, France</div>
                              </td>
                              <td className="odds__col Table__TD"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
