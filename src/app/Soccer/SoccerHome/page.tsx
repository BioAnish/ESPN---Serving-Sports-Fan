"use client";

import React, { useState } from "react";
import style from "./page.module.scss";
import Card from "@/Components/Atoms/Card/Card";
import CardWithLinkAction from "@/Components/Molecules/CardWithLinkAction/CardWithLinkAction";
import SharedData from "@/Utils/SharedData";
import HeadlineTopCard from "@/Components/Molecules/HeadlineCard/HeadlineTopCard/HeadlineTopCard";
import HeadlineBottomCard from "@/Components/Molecules/HeadlineCard/HeadlineBottomCard/HeadlineBottomCard";
import SportScorecard from "@/Components/Molecules/SportScorecard/SportScorecard";
import HeadlineRightCard from "@/Components/Molecules/HeadlineCard/HeadlineRightCard/HeadlineRightCard";
import Footer from "@/Components/Molecules/Footer/Footer";
import MiniCardCarousel from "@/Components/Molecules/MiniCardCarousel/MiniCardCarousel";
import Button from "@/Components/Atoms/Button/Button";
import TopHeadlines from "@/Components/Molecules/HeadlineCard/TopHeadlines/TopHeadlines";
import HeadlineCard from "@/Components/Molecules/HeadlineCard/HeadlineCard";
import PageGameStrip from "@/Components/Atoms/PageGameStrip/PageGameStrip";

const SoccerHomePage = () => {
  const { soccerHeadlines } = SharedData;
  const { soccerScoreBoardMatches } = SharedData;
  const cards = [
    {
      heading: "Best of ESPN+",
      imageUrl:
        "https://a.espncdn.com/photo/2024/0206/mls_messi-led_inter_miami_16x9.jpg",
      title: "Will Lionel Messi's Inter Miami set a record in MLS?",
      subTitle:
        "With Lionel Messi, Luis Suárez and Sergio Busquets, Inter Miami has the most star-studded MLS team ever. Is it enough to set new records, or is disappointment next?",
    },
    {
      imageUrl:
        "https://a.espncdn.com/photo/2024/0202/r1286157_1296x729_16-9.jpg",
      title: "January window recap: Transfers, loans and improved teams",
      subTitle:
        "With the winter transfer window finally shut, we take a look at some of the best transfers and best loans and which teams improved during this January window.",
    },
    {
      imageUrl:
        "https://a.espncdn.com/photo/2024/0201/r1285686_1296x729_16-9.jpg",
      title: "Making sense of Pulisic's stellar stats at AC Milan, USMNT",
      subTitle:
        "Christian Pulisic's goals + assists are up -- but everything else he does well is down, suggesting his output isn't sustainable. Should USMNT fans worry?",
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
    <>
      <div className={style.homelayout}>
        <div className={style.col_one}>
          <div>
            <Card backgroundColor="#f9f9fb">
              <CardWithLinkAction
                header="Quick Links"
                quickLinks={SharedData.quickLinks}
              ></CardWithLinkAction>
            </Card>
          </div>
          <div>
            <Card heading="Customize ESPN" padding={"12px"}>
              <div className={style.button__container}>
                <Button variant="primary">Sign Up</Button>
                <Button variant="secondary">Log In</Button>
                <Button variant="yellow">Subscribe Now</Button>
              </div>
            </Card>
          </div>
        </div>
        <div className={style.col_two}>
          <Card>
            <PageGameStrip
              background="linear-gradient(to right, #6caddf, #144992)"
              stripTitle="2023-24 English Premier League"
              rightSideTeam="Chelsea"
              leftSideTeam="Man City"
              rightIcon="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png&amp;h=208&amp;w=208"
              leftIcon="https://a1.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png&amp;h=208&amp;w=208"
              day="sat"
              time="12:30 PM ET"
            />
            <div style={{ marginLeft: "16px", marginRight: "16px" }}>
              <HeadlineTopCard
                imageUrl="https://a.espncdn.com/photo/2024/0130/r1284373_1296x729_16-9.jpg"
                title="Did Guardiola make a mistake in letting Cole Palmer join Chelsea?"
                hour="4h"
                borderColor="#231f20"
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
            <HeadlineCard
              imageUrl="/soccer.png"
              title="GLOBAL SOCCER SCOREBOARD"
              subTitle="Tuesday's Matches"
            >
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {soccerScoreBoardMatches.map((match, index) => (
                  <div key={index} style={{ width: "50%" }}>
                    <SportScorecard
                      imageurlHome={match.imageurlHome}
                      imageurlAway={match.imageurlAway}
                      homeTeam={match.homeTeam}
                      awayTeam={match.awayTeam}
                      homeTeamScore={match.homeTeamScore}
                      awayTeamScore={match.awayTeamScore}
                      leagueTitle={match.leagueTitle}
                      fullTimeResult={match.fullTimeResult}
                    />
                  </div>
                ))}
              </div>
            </HeadlineCard>
          </div>
          <div>
            <Card padding={"12px"}>
              <MiniCardCarousel />
            </Card>
          </div>
        </div>
        <div className={style.col_three}>
          <div>
            <TopHeadlines
              headlines={soccerHeadlines.map((item) => item.headline)}
            />
          </div>
          <div>
            <Card>
              <HeadlineRightCard cards={cards}></HeadlineRightCard>
            </Card>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </>
  );
};

export default SoccerHomePage;
