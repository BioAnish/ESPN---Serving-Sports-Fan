import React from "react";
import style from "./NflHomePage.module.scss";
import CardWithLinkAction from "@/Components/Molecules/CardWithLinkAction/CardWithLinkAction";
import Card from "@/Components/Atoms/Card/Card";
import SharedData from "@/Utils/SharedData";
import HeadlineCard from "@/Components/Molecules/HeadlineCard/HeadlineCard";
import HeadlineTopCard from "@/Components/Molecules/HeadlineCard/HeadlineTopCard/HeadlineTopCard";
import HeadlineBottomCard from "@/Components/Molecules/HeadlineCard/HeadlineBottomCard/HeadlineBottomCard";
import HeadlineRightCard from "@/Components/Molecules/HeadlineCard/HeadlineRightCard/HeadlineRightCard";

const NflHomePage = () => {
  return (
    <div className={style.nflHomePage}>
      <div>
        <Card backgroundColor="#f9f9fb">
          <CardWithLinkAction
            header="Quick Links"
            quickLinks={SharedData.quickLinks}
          ></CardWithLinkAction>
        </Card>
      </div>
      <div>
        <HeadlineCard>
          <HeadlineTopCard></HeadlineTopCard>
          <HeadlineBottomCard></HeadlineBottomCard>
        </HeadlineCard>
      </div>
      <div>
        <Card>
          <HeadlineRightCard></HeadlineRightCard>
        </Card>
      </div>
    </div>
  );
};

export default NflHomePage;
