import React from "react";
import style from "./Scoreboard.module.scss";
import { Game } from "./Scoreboard.types";

interface ScoreboardProps {
  games: Game[] | undefined;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ games }) => {
  return (
    <div>
      <ul className={style.ul}>
        {games &&
          Array.isArray(games) &&
          games.map((game, index) => (
            <li key={game.id} className={style.li}>
              <div className={style.scoreboard}>
                {index === 0 && (
                  <div className={style.scoreLabel}>
                    <div className={style.scoreLabel_content}>
                      <h2>{game.labelContent}</h2>
                      <div className={style.scoreLabel_link}>See All</div>
                    </div>
                  </div>
                )}
                <div className={style.cscore}>
                  <div className={style.cscore_header_links}>
                    <a className={style.cscore_header_link}>Gamecast</a>
                    <a className={style.cscore_header_link}>Tickets</a>
                  </div>
                  <a className={style.cscore_link}>
                    <div className={style.cscore_overview}>
                      <div className={style.cscore_date_time}>
                        <span>{game.dateTime}</span>
                      </div>
                      <div className={style.cscore_network}>{game.network}</div>
                    </div>
                    <div className={style.cscore_details}>
                      <ul className={style.cscore_competitors}>
                        {game.teams.map((team) => (
                          <li
                            key={team.abbreviation}
                            className={style.cscore_item}
                          >
                            <div className={style.cscore_logo}>
                              <img
                                src={`https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/scoreboard/${team.logo}&h=60&w=60`}
                                alt={`${team.abbreviation} Logo`}
                              />
                            </div>
                            <div className={style.cscore_team}>
                              <div className={style.cscore_truncate}>
                                <span>{team.abbreviation}</span>
                              </div>
                              <div className={style.cscore_score}>
                                {team.score}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
