import React from "react";
import style from "./page.module.scss";
import Footer from "@/Components/Molecules/Footer/Footer";
import Card from "@/Components/Atoms/Card/Card";
import CardWithLinkAction from "@/Components/Molecules/CardWithLinkAction/CardWithLinkAction";
import SharedData from "@/Utils/SharedData";
import HeadlineTopCard from "@/Components/Molecules/HeadlineCard/HeadlineTopCard/HeadlineTopCard";
import HeadlineRightCard from "@/Components/Molecules/HeadlineCard/HeadlineRightCard/HeadlineRightCard";
import HeadlineBottomCard from "@/Components/Molecules/HeadlineCard/HeadlineBottomCard/HeadlineBottomCard";
import HeadlineCard from "@/Components/Molecules/HeadlineCard/HeadlineCard";

const SoccerTransferPage = () => {
  const cards = [
    {
      heading: "Trending Transfers",
      imageUrl:
        "https://a.espncdn.com/photo/2024/0112/r1276479_2_1296x729_16-9.jpg",
      title: "All the latest transfers from Europe's top leagues and clubs",
      subTitle:
        "Catch up on which players are moving where this summer. As soon as a deal for a major club is completed, it will appear here.",
    },
    {
      imageUrl:
        "https://a.espncdn.com/photo/2024/0201/r1285305_1296x729_16-9.jpg",
      title: "January transfer window: Grading big signings in men's soccer",
      subTitle:
        "The January transfer window is now closed. Here are the big deals in the men's game and how we rate them.",
    },
    {
      imageUrl:
        "https://a.espncdn.com/photo/2022/0207/r971179_1296x729_16-9.jpg",
      title: "Pogba, Pepe among Premier League's expensive flop transfers",
      subTitle:
        "With the transfer window now closed, we look at the most expensive flop signings for each team in the Premier League.",
    },
  ];
  return (
    <>
      <div className={style.pageLayout}>
        <div className={style.col_one}>
          <Card backgroundColor="#f9f9fb">
            <CardWithLinkAction
              headerLink={true}
              quickLinks={SharedData.espnPlus}
            ></CardWithLinkAction>
          </Card>
          <Card backgroundColor="#f9f9fb">
            <CardWithLinkAction
              header="Topics"
              quickLinks={SharedData.topics}
            ></CardWithLinkAction>
          </Card>
        </div>
        <div className={style.col_two}>
          <div>
            <HeadlineTopCard
              imageUrl="https://a.espncdn.com/combiner/i?img=/photo/2024/0221/r1293855_1296x729_16-9.jpg"
              title="Transfer Talk: Man Utd, Liverpool, Chelsea to battle for Guehis"
              subTitle="Crystal Palace defender Marc Guehi is reportedly being tracked by the likes of Liverpool, Manchester United and Chelsea. Transfer Talk has the latest."
              hour="1h"
              author="Rajan Hothi"
            ></HeadlineTopCard>
          </div>
          <div>
            <HeadlineCard
              imageUrl="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/176.png&w=288&h=288"
              title="Marseille"
              subTitle="Soccer"
            >
              <HeadlineBottomCard
                imageUrl="https://a.espncdn.com/photo/2024/0219/r1293200_1296x729_16-9.jpg"
                title="Marseille sack Gattuso at 'rock bottom'"
                subTitle="Marseille manager Gennaro Gattuso has been sacked after five months in charge, a person with direct knowledge of the decision told The Associated Press on Monday."
                hour="14h"
                name="Associated Press"
              ></HeadlineBottomCard>
            </HeadlineCard>
          </div>
        </div>
        <div className={style.col_three}>
          <Card>
            <HeadlineRightCard cards={cards}></HeadlineRightCard>
          </Card>
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </>
  );
};

export default SoccerTransferPage;
