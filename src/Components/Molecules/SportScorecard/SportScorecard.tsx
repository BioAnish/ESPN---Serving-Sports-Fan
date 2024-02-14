import React from "react";
import Card from "@/Components/Atoms/Card/Card";
import style from "./SportScorecard.module.scss";

const SportScorecard = () => {
  return (
    <Card>
      <div className={style.scorecard_container}>
        <div className={style.scorecard_header}>
          <div className={style.scorecard_header_icon}>
            <a href="#">
              <img className={style.sport_icon} src="nba.png"></img>
              <div className={style.sport_information}>
                <label className={style.title}>NBA SCOREBOARD</label>
                <p className={style.subTitle}>Monday's Games</p>
              </div>
            </a>
          </div>
          <div className={style.scorecard_header_link}>
            <a href="#">See All</a>
          </div>
        </div>
        <div className={style.scorecard_score_collection}>
          <div className={style.scorecard_score_collection_content}>
            <div className={style.final_score}>
              <a href="#" className={style.score_link}>
                <div className={style.score_overview}>Final</div>
                <div className={style.score_details}>
                  <ul className={style.score_competitors}>
                    <li className={style.score_item}>
                      <div className={style.score_logo}>
                        <img src="nba.png"></img>
                      </div>
                      <div className={style.score_team}>
                        <div className={style.score_truncate}>
                          <span>Celtic</span>
                        </div>
                        <div className={style.score_score}>118</div>
                      </div>
                    </li>
                    <li className={style.score_item}>
                      <div className={style.score_logo}>
                        <img src="nba.png"></img>
                      </div>
                      <div className={style.score_team}>
                        <div className={style.score_truncate}>
                          <span>Nets</span>
                        </div>
                        <div className={style.score_score}>110</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
            <div className={style.final_score}>
              <a href="#" className={style.score_link}>
                <div className={style.score_overview}>Final</div>
                <div className={style.score_details}>
                  <ul className={style.score_competitors}>
                    <li className={style.score_item}>
                      <div className={style.score_logo}>
                        <img src="nba.png"></img>
                      </div>
                      <div className={style.score_team}>
                        <div className={style.score_truncate}>
                          <span>Celtic</span>
                        </div>
                        <div className={style.score_score}>123</div>
                      </div>
                    </li>
                    <li className={style.score_item}>
                      <div className={style.score_logo}>
                        <img src="nba.png"></img>
                      </div>
                      <div className={style.score_team}>
                        <div className={style.score_truncate}>
                          <span>nets</span>
                        </div>
                        <div className={style.score_score}>118</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
            <div className={style.final_score}>
              <a href="#" className={style.score_link}>
                <div className={style.score_overview}>Final</div>
                <div className={style.score_details}>
                  <ul className={style.score_competitors}>
                    <li className={style.score_item}>
                      <div className={style.score_logo}>
                        <img src="nba.png"></img>
                      </div>
                      <div className={style.score_team}>
                        <div className={style.score_truncate}>
                          <span>Celtic</span>
                        </div>
                        <div className={style.score_score}>110</div>
                      </div>
                    </li>
                    <li className={style.score_item}>
                      <div className={style.score_logo}>
                        <img src="nba.png"></img>
                      </div>
                      <div className={style.score_team}>
                        <div className={style.score_truncate}>
                          <span>nets</span>
                        </div>
                        <div className={style.score_score}>118</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
            <div className={style.final_score}>
              <a href="#" className={style.score_link}>
                <div className={style.score_overview}>Final</div>
                <div className={style.score_details}>
                  <ul className={style.score_competitors}>
                    <li className={style.score_item}>
                      <div className={style.score_logo}>
                        <img src="nba.png"></img>
                      </div>
                      <div className={style.score_team}>
                        <div className={style.score_truncate}>
                          <span>nets</span>
                        </div>
                        <div className={style.score_score}>140</div>
                      </div>
                    </li>
                    <li className={style.score_item}>
                      <div className={style.score_logo}>
                        <img src="nba.png"></img>
                      </div>
                      <div className={style.score_team}>
                        <div className={style.score_truncate}>
                          <span>Celtic</span>
                        </div>
                        <div className={style.score_score}>118</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
            <div className={style.final_score}>
              <a href="#" className={style.score_link}>
                <div className={style.score_overview}>Final</div>
                <div className={style.score_details}>
                  <ul className={style.score_competitors}>
                    <li className={style.score_item}>
                      <div className={style.score_logo}>
                        <img src="nba.png"></img>
                      </div>
                      <div className={style.score_team}>
                        <div className={style.score_truncate}>
                          <span>boston</span>
                        </div>
                        <div className={style.score_score}>118</div>
                      </div>
                    </li>
                    <li className={style.score_item}>
                      <div className={style.score_logo}>
                        <img src="nba.png"></img>
                      </div>
                      <div className={style.score_team}>
                        <div className={style.score_truncate}>
                          <span>lakers</span>
                        </div>
                        <div className={style.score_score}>110</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
            <div className={style.final_score}>
              <a href="#" className={style.score_link}>
                <div className={style.score_overview}>Final</div>
                <div className={style.score_details}>
                  <ul className={style.score_competitors}>
                    <li className={style.score_item}>
                      <div className={style.score_logo}>
                        <img src="nba.png"></img>
                      </div>
                      <div className={style.score_team}>
                        <div className={style.score_truncate}>
                          <span>Celtic</span>
                        </div>
                        <div className={style.score_score}>96</div>
                      </div>
                    </li>
                    <li className={style.score_item}>
                      <div className={style.score_logo}>
                        <img src="nba.png"></img>
                      </div>
                      <div className={style.score_team}>
                        <div className={style.score_truncate}>
                          <span>knicks</span>
                        </div>
                        <div className={style.score_score}>118</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SportScorecard;
