import React from "react";
import style from "./SoccerTablePage.module.scss";
import Card from "@/Components/Atoms/Card/Card";

const SoccerTablePage = () => {
  return (
    <>
      <Card padding={"10px 12px"}>
        <section>
          <div className={style.table__header}>
            <h1 className={style.table__headline}>
              English Premier League Table 2023-24
            </h1>
          </div>
          <section className={style.table__container}>
            <div className={style.dropdown}>
              <div className={style.card__dropdown}>
                <select className={style.card__dropdown__select}>
                  <option className={style.card__dropdown__select}>
                    English Premier League
                  </option>
                </select>
              </div>
              <div className={style.card__dropdown}>
                <select className={style.card__dropdown__select}>
                  <option className={style.card__dropdown__select}>
                    2023-24
                  </option>
                </select>
              </div>
            </div>
            <div className={style.standings__table}>
              <div className={style.Table__Title}>English Premier League</div>
              <div className={style.Table__content}>
                <table className={style.Table}>
                  <colgroup className={style.Table__Colgroup}>
                    <col className={style.Table__Column}></col>
                  </colgroup>
                  <thead className={style.Table__header__group}>
                    <tr className={style.Table__sub__header}>
                      <th title="" className={style.subHeader__item__content}>
                        <span title="English Premier League 2023-2024">
                          2023-2024
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className={style.Table__TBODY}>
                    <tr className={style.Table__TR} data-idx="0">
                      <td className={style.Table__TD}>
                        <div className={style.team__link}>
                          <span className={style.team__position}>1</span>
                          <span className={style.TeamLink__Logo}>
                            <a
                              className={style.AnchorLink}
                              tabIndex={0}
                              data-clubhouse-uid="s:600~t:364"
                              href="/soccer/team/_/id/364/liverpool"
                            >
                              <img
                                alt="LIV"
                                className="Image Logo Logo__sm"
                                title="LIV"
                                data-mptype="image"
                                src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png&amp;h=40&amp;w=40"
                              />
                            </a>
                          </span>
                          <span className={style.TeamLink__name}>
                            <a
                              className={style.AnchorLink}
                              tabIndex={0}
                              data-clubhouse-uid="s:600~t:364"
                              href="/soccer/team/_/id/364/liverpool"
                            >
                              Liverpool
                            </a>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className={style.Table__TR} data-idx="0">
                      <td className={style.Table__TD}>
                        <div className={style.team__link}>
                          <span className={style.team__position}>2</span>
                          <span className={style.TeamLink__Logo}>
                            <a
                              className={style.AnchorLink}
                              tabIndex={0}
                              data-clubhouse-uid="s:600~t:364"
                              href="/soccer/team/_/id/364/liverpool"
                            >
                              <img
                                alt="LIV"
                                className="Image Logo Logo__sm"
                                title="LIV"
                                data-mptype="image"
                                src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png&h=40&w=40"
                              />
                            </a>
                          </span>
                          <span className={style.TeamLink__name}>
                            <a
                              className={style.AnchorLink}
                              tabIndex={0}
                              data-clubhouse-uid="s:600~t:364"
                              href="/soccer/team/_/id/364/liverpool"
                            >
                              Arsenal
                            </a>
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={style.Table__ScrollerWrapper}>
                  <div className={style.Table__Scroller}>
                    <table className={style.table}>
                      <colgroup className={style.Table__Colgroup}>
                        <col className={style.Table__Column}></col>
                        <col className={style.Table__Column}></col>
                        <col className={style.Table__Column}></col>
                        <col className={style.Table__Column}></col>
                        <col className={style.Table__Column}></col>
                        <col className={style.Table__Column}></col>
                        <col className={style.Table__Column}></col>
                        <col className={style.Table__Column}></col>
                      </colgroup>
                      <thead className={style.Table__header__group}>
                        <tr className={style.Table__sub__header}>
                          <th
                            title=""
                            className={`${style.subHeader__item__content} ${style.tar}`}
                          >
                            <span title="">
                              <a>GP</a>
                            </span>
                          </th>
                          <th
                            title=""
                            className={`${style.subHeader__item__content} ${style.tar}`}
                          >
                            <span title="">
                              <a>W</a>
                            </span>
                          </th>
                          <th
                            title=""
                            className={`${style.subHeader__item__content} ${style.tar}`}
                          >
                            <span title="">
                              <a>D</a>
                            </span>
                          </th>
                          <th
                            title=""
                            className={`${style.subHeader__item__content} ${style.tar}`}
                          >
                            <span title="">
                              <a>L</a>
                            </span>
                          </th>
                          <th
                            title=""
                            className={`${style.subHeader__item__content} ${style.tar}`}
                          >
                            <span title="">
                              <a>F</a>
                            </span>
                          </th>
                          <th
                            title=""
                            className={`${style.subHeader__item__content} ${style.tar}`}
                          >
                            <span title="">
                              <a>A</a>
                            </span>
                          </th>
                          <th
                            title=""
                            className={`${style.subHeader__item__content} ${style.tar}`}
                          >
                            <span title="">
                              <a>GD</a>
                            </span>
                          </th>{" "}
                          <th
                            title=""
                            className={`${style.subHeader__item__content} ${style.tar}`}
                          >
                            <span title="">
                              <a>p</a>
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className={style.Table__TBODY}>
                        <tr className={style.Table__TR}>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>25</span>
                          </td>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>17</span>
                          </td>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>6</span>
                          </td>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>2</span>
                          </td>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>59</span>
                          </td>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>24</span>
                          </td>
                          <td className={style.Table__TD}>
                            <span
                              className={`${style.stat__cell} ${style.clr__positive}`}
                            >
                              +35
                            </span>
                          </td>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>57</span>
                          </td>
                        </tr>
                        <tr className={style.Table__TR}>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>25</span>
                          </td>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>17</span>
                          </td>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>4</span>
                          </td>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>4</span>
                          </td>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>58</span>
                          </td>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>22</span>
                          </td>
                          <td className={style.Table__TD}>
                            <span
                              className={`${style.stat__cell} ${style.clr__negative}`}
                            >
                              -36
                            </span>
                          </td>
                          <td className={style.Table__TD}>
                            <span className={style.stat__cell}>55</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.positions}>
              <p className={style.position_description}>
                Positions 1, 2, 3, 4: Champions League
              </p>
              <p className={style.position_description}>
                Position 5: Europa League
              </p>
              <p className={style.position_description}>
                Positions 18, 19, 20: Relegation
              </p>
            </div>
            <div className={style.glossary}>
              <h3 className={style.glossary__title}>Glossary</h3>
              <ul className={style.glossary__list}>
                <li className={style.glossary__item}>
                  <span className={style.glossary__abbr}>GP:</span>
                  Games Played
                </li>
                <li className={style.glossary__item}>
                  <span className={style.glossary__abbr}>W:</span>
                  Wins
                </li>
                <li className={style.glossary__item}>
                  <span className={style.glossary__abbr}>D:</span>
                  Draws
                </li>
                <li className={style.glossary__item}>
                  <span className={style.glossary__abbr}>L:</span>
                  Losses
                </li>
                <li className={style.glossary__item}>
                  <span className={style.glossary__abbr}>F:</span>
                  Goals For
                </li>
                <li className={style.glossary__item}>
                  <span className={style.glossary__abbr}>A:</span>
                  Goals Against
                </li>
                <li className={style.glossary__item}>
                  <span className={style.glossary__abbr}>GD:</span>
                  Goal Difference
                </li>
                <li className={style.glossary__item}>
                  <span className={style.glossary__abbr}>P:</span>
                  Points
                </li>
              </ul>
            </div>
          </section>
        </section>
      </Card>
    </>
  );
};

export default SoccerTablePage;
