import React from "react";
import style from "./page.module.scss";
import Button from "@/Components/Atoms/Button/Button";
import HeadlineCard from "@/Components/Molecules/HeadlineCard/HeadlineCard";
import HeadlineTopCard from "@/Components/Molecules/HeadlineCard/HeadlineTopCard/HeadlineTopCard";
import MiniCardCarousel from "@/Components/Molecules/MiniCardCarousel/MiniCardCarousel";

const navigationItems = [
  "Home",
  "Fixtures",
  "Results",
  "Squad",
  "Stats",
  "Transfers",
  "Table",
];

const Team = () => {
  return (
    <div className={style.StickyContainer}>
      <div className={style.ResponsiveWrapper}>
        <div className={style.ClubhouseHeader}>
          <div className={style.ClubhouseHeader__Container}>
            <div className={style.ClubhouseHeader__Main}>
              <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&h=200&w=200"></img>
              <div className={style.ClubhouseHeader__Main_Aside}>
                <h1 className={style.ClubhouseHeader__Name}>
                  Paris Saint-Germain
                </h1>
                <div className={style.ClubhouseHeader__TeamDetails}>
                  <div className={style.button}>
                    <Button variant="secondary">Follow</Button>
                  </div>
                  <ul className={style.list}>
                    <li>16-5-1</li>
                    <li>1st in French Ligue 1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.sticky}>
        <nav className={style.Nav__Secondary}>
          <ul className={style.Nav__Secondary__Menu}>
            <li
              className={`${style.Nav__Secondary__Menu__Title} ${style.hideLogoUntilSticky}`}
            >
              <a className={style.Nav__Secondary__Menu__Link}>
                <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=64&h=64" />
              </a>
            </li>
            {navigationItems.map((item, index) => (
              <li key={index} className={style.Nav__Secondary__Menu__Item}>
                <a className={style.Nav__Secondary__Menu__Sub_Link}>
                  <span className={style.Nav__Text}>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={style.page__container}>
        <div className={style.layout}>
          <div className={style.layout__column__1}>
            <div className={style.Schedule}>
              <div className={style.Schedule__header}>
                <h1 className={style.Schedule__Header__Title}>Schedule</h1>
              </div>
              <div className={style.Schedule__Group}>
                <div className={style.Schedule__Group__link}>
                  <a className={style.Schedule__Game}>
                    <div className={style.Schedule__Game__Wrapper}>
                      <header className={style.Schedule__Info}>
                        <div className={style.Schedule__Competitor__Result}>
                          <div className={style.Schedule__Competitor}>
                            <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=40&h=40" />
                            <div className={style.Schedule__team}>PSG</div>
                          </div>
                          <div
                            className={style.Schedule__Competitor__Score}
                          ></div>
                        </div>
                        <div className={style.Schedule__Meta}>
                          <div className={style.Schedule__Meta__Time}>2/25</div>
                          <div className={style.Schedule__Meta__Time}>
                            11:05 am
                          </div>
                        </div>
                        <div className={style.Schedule__Competitor__Result}>
                          <div
                            className={style.Schedule__Competitor__Score}
                          ></div>
                          <div className={style.Schedule__Competitor}>
                            <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/169.png&scale=crop&cquality=40&location=origin&w=40&h=40" />
                            <div className={style.Schedule__team}>REN</div>
                          </div>
                        </div>
                      </header>
                      <div className={style.Schedule__League__Name}>
                        French Ligue 1
                      </div>
                    </div>
                  </a>
                </div>
                <div className={style.Schedule__Group__link}>
                  <a className={style.Schedule__Game}>
                    <div className={style.Schedule__Game__Wrapper}>
                      <header className={style.Schedule__Info}>
                        <div className={style.Schedule__Competitor__Result}>
                          <div className={style.Schedule__Competitor}>
                            <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/165.png&scale=crop&cquality=40&location=origin&w=40&h=40" />
                            <div className={style.Schedule__team}>NAN</div>
                          </div>
                          <div className={style.Schedule__Competitor__Score}>
                            0
                          </div>
                        </div>
                        <div className={style.Schedule__Meta}>
                          <div className={style.Schedule__Meta__Time}>FT</div>
                          {/* <div className={style.Schedule__Meta__Time}>
                          11:05 am
                        </div> */}
                        </div>
                        <div className={style.Schedule__Competitor__Result}>
                          <div className={style.Schedule__Competitor__Score}>
                            2
                          </div>
                          <div className={style.Schedule__Competitor}>
                            <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=40&h=40" />
                            <div className={style.Schedule__team}>PSG</div>
                          </div>
                        </div>
                      </header>
                      <div className={style.Schedule__League__Name}>
                        French Ligue 1
                      </div>
                    </div>
                  </a>
                </div>
                <div className={style.Schedule__Group__link}>
                  <a className={style.Schedule__Game}>
                    <div className={style.Schedule__Game__Wrapper}>
                      <header className={style.Schedule__Info}>
                        <div className={style.Schedule__Competitor__Result}>
                          <div className={style.Schedule__Competitor}>
                            <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=40&h=40" />
                            <div className={style.Schedule__team}>PSG</div>
                          </div>
                          <div className={style.Schedule__Competitor__Score}>
                            2
                          </div>
                        </div>
                        <div className={style.Schedule__Meta}>
                          <div className={style.Schedule__Meta__Time}>FT</div>
                          {/* <div className={style.Schedule__Meta__Time}>
                          11:05 am
                        </div> */}
                        </div>
                        <div className={style.Schedule__Competitor__Result}>
                          <div className={style.Schedule__Competitor__Score}>
                            0
                          </div>
                          <div className={style.Schedule__Competitor}>
                            <img src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png&scale=crop&cquality=40&location=origin&w=40&h=40" />
                            <div className={style.Schedule__team}>RSO</div>
                          </div>
                        </div>
                      </header>
                      <div className={style.Schedule__League__Name}>
                        <p>UEFA Champions League</p>
                        <p>1st Leg</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.layout__column__2}>
            <div>
              <HeadlineCard
                imageUrl="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png&scale=crop&cquality=40&location=origin&w=80&h=80"
                title="Paris Saint-Germain"
                subTitle="Soccer"
              >
                <HeadlineTopCard
                  imageUrl="https://a.espncdn.com/photo/2024/0219/r1293324_1296x518_5-2.jpg"
                  title="Why Mbappé is finally leaving PSG for Real Madrid: Piecing together football's longest transfer saga"
                  hour="11h"
                  name="Alex Kirkland, Julien Laurens"
                ></HeadlineTopCard>
              </HeadlineCard>
            </div>
            {/* <div>
              <MiniCardCarousel/>
            </div> */}
          </div>
          <div className={style.layout__column__3}>
            <section className={style.Card__TeamLeaders}>
              <header className={style.Card__Header}>
                <div className={style.Card__Header__Title__Wrapper}>
                  <h3 className={style.Card__Header__Title}>
                    2023-24 Team Leaders
                  </h3>
                  <h4 className={style.Card__Header__Subtitle}>
                    French Ligue 1
                  </h4>
                </div>
              </header>
              <nav className={style.tabs__nav}>
                <ul className={style.tabs__list}>
                  <li className={style.tabs__list__item}>
                    <button className={style.tabs__link}>Goals</button>
                  </li>
                  <li className={style.tabs__list__item}>
                    <button className={style.tabs__link}>Assists</button>
                  </li>
                </ul>
              </nav>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
