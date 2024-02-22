import React from "react";
import style from "./page.module.scss";
import Card from "@/Components/Atoms/Card/Card";
import SharedData from "@/Utils/SharedData";
import NewsCard from "@/Components/Molecules/NewsCard/NewsCard";
import Footer from "@/Components/Molecules/Footer/Footer";

const SoccerTeamPage = () => {
  return (
    <>
      <div className={style.pageLayout}>
        <div className={style.col_one}>
          <Card padding={"16px"}>
            <div className={style.TeamsWrapper}>
              <div className={style.TeamsWrapper__header}>
                <h1 className={style.headline}>Soccer Teams</h1>
                <div className={style.card__dropdown}>
                  <select className={style.card__dropdown__select}>
                    <option className={style.card__dropdown__select}>
                      English Premier League
                    </option>
                  </select>
                </div>
              </div>
              <div className={style.Teams__layout}>
                <div className={style.Teams__layout__column}>
                  <div className={style.ContentList}>
                    <div className={style.ContentList__Item}>
                      <section className={style.TeamLinks}>
                        <a>
                          <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png&scale=crop&cquality=40&location=origin&w=80&h=80" />
                        </a>
                        <div className={style.Teamname}>
                          <a className={style.AnchorLink} tabIndex={0}>
                            <h2>AFC Bournemouth</h2>
                          </a>
                          <div className={style.TeamLinks__Links}>
                            <span className={style.TeamLinks__Link}>
                              <a tabIndex={0}>Fixtures</a>
                            </span>
                            <span className={style.TeamLinks__Link}>
                              <a tabIndex={0}>Stats</a>
                            </span>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className={style.ContentList__Item}>
                      <section className={style.TeamLinks}>
                        <a>
                          <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png&scale=crop&cquality=40&location=origin&w=80&h=80" />
                        </a>
                        <div className={style.Teamname}>
                          <a className={style.AnchorLink} tabIndex={0}>
                            <h2>Arsenal</h2>
                          </a>
                          <div className={style.TeamLinks__Links}>
                            <span className={style.TeamLinks__Link}>
                              <a tabIndex={0}>Fixtures</a>
                            </span>
                            <span className={style.TeamLinks__Link}>
                              <a tabIndex={0}>Stats</a>
                            </span>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className={style.ContentList__Item}>
                      <section className={style.TeamLinks}>
                        <a>
                          <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png&scale=crop&cquality=40&location=origin&w=80&h=80" />
                        </a>
                        <div className={style.Teamname}>
                          <a className={style.AnchorLink} tabIndex={0}>
                            <h2>Aston Villa</h2>
                          </a>
                          <div className={style.TeamLinks__Links}>
                            <span className={style.TeamLinks__Link}>
                              <a tabIndex={0}>Fixtures</a>
                            </span>
                            <span className={style.TeamLinks__Link}>
                              <a tabIndex={0}>Stats</a>
                            </span>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
                <div className={style.Teams__layout__column}>
                  <div className={style.ContentList}>
                    <div className={style.ContentList__Item}>
                      <section className={style.TeamLinks}>
                        <a>
                          <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png&scale=crop&cquality=40&location=origin&w=80&h=80" />
                        </a>
                        <div className={style.Teamname}>
                          <a className={style.AnchorLink} tabIndex={0}>
                            <h2>Liverpool</h2>
                          </a>
                          <div className={style.TeamLinks__Links}>
                            <span className={style.TeamLinks__Link}>
                              <a tabIndex={0}>Fixtures</a>
                            </span>
                            <span className={style.TeamLinks__Link}>
                              <a tabIndex={0}>Stats</a>
                            </span>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className={style.ContentList__Item}>
                      <section className={style.TeamLinks}>
                        <a>
                          <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/301.png&scale=crop&cquality=40&location=origin&w=80&h=80" />
                        </a>
                        <div className={style.Teamname}>
                          <a className={style.AnchorLink} tabIndex={0}>
                            <h2>Luton Town</h2>
                          </a>
                          <div className={style.TeamLinks__Links}>
                            <span className={style.TeamLinks__Link}>
                              <a tabIndex={0}>Fixtures</a>
                            </span>
                            <span className={style.TeamLinks__Link}>
                              <a tabIndex={0}>Stats</a>
                            </span>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className={style.ContentList__Item}>
                      <section className={style.TeamLinks}>
                        <a>
                          <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png&scale=crop&cquality=40&location=origin&w=80&h=80" />
                        </a>
                        <div className={style.Teamname}>
                          <a className={style.AnchorLink} tabIndex={0}>
                            <h2>Manchester City</h2>
                          </a>
                          <div className={style.TeamLinks__Links}>
                            <span className={style.TeamLinks__Link}>
                              <a tabIndex={0}>Fixtures</a>
                            </span>
                            <span className={style.TeamLinks__Link}>
                              <a tabIndex={0}>Stats</a>
                            </span>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
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

export default SoccerTeamPage;
