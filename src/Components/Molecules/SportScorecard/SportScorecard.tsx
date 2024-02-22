import React from "react";
import style from "./SportScorecard.module.scss";
import { ISportSCoreCardProps } from "./SportScoreCard.types";

const SportScorecard = ({
  imageurlHome,
  imageurlAway,
  homeTeam,
  awayTeam,
  homeTeamScore = 0,
  awayTeamScore = 0,
  leagueTitle,
  fullTimeResult,
}: ISportSCoreCardProps) => {
  const winningTeam = homeTeamScore > awayTeamScore ? "home" : "away";
  const isDraw = homeTeamScore === awayTeamScore;
  return (
    <>
      <div className={style.scorecard_score_collection}>
        <div className={style.scorecard_score_collection_content}>
          <div className={style.final_score}>
            <a href="#" className={style.score_link}>
              <div className={style.score_overview}>{fullTimeResult}</div>
              <div className={style.score_details}>
                <ul className={style.score_competitors}>
                  <li className={`${style.score_item}`}>
                    <div className={style.score_logo}>
                      <img src={imageurlHome} alt="Home Team Logo" />
                    </div>
                    <div className={style.score_team}>
                      <div className={style.score_truncate}>
                        <span>{homeTeam}</span>
                      </div>
                      <div className={style.score_score}>{homeTeamScore}</div>
                      {winningTeam === "home" && !isDraw && (
                        <div className={style.winning__indicator}></div>
                      )}
                    </div>
                  </li>
                  <li className={`${style.score_item}`}>
                    <div className={style.score_logo}>
                      <img src={imageurlAway} alt="Away Team Logo" />
                    </div>
                    <div className={style.score_team}>
                      <div className={style.score_truncate}>
                        <span>{awayTeam}</span>
                      </div>
                      <div className={style.score_score}>{awayTeamScore}</div>
                      {winningTeam === "away" && !isDraw && (
                        <div className={style.winning__indicator}></div>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </a>
            <div className={style.score_commentary}>
              <div className={style.cscore_notes}>
                <span className={style.cscore_notes_game}>{leagueTitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportScorecard;
