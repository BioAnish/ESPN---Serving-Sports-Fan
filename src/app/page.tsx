import Card from "@/Components/Atoms/Card/Card";
import CardWithLinkAction from "@/Components/Atoms/CardWithLinkAction/CardWithLinkAction";
import SharedData from "../Utils/SharedData";
import NavBar from "@/Components/Atoms/NarBar/NavBar";
import HeadlineCard from "@/Components/Atoms/HeadlineCard/HeadlineCard";
import HeadlineTopCard from "@/Components/Atoms/HeadlineCard/HeadlineTopCard/HeadlineTopCard";
import HeadlineRightCard from "@/Components/Atoms/HeadlineCard/HeadlineRightCard/HeadlineRightCard";
import styles from "./page.module.css";
import HeadlineBottomCard from "@/Components/Atoms/HeadlineCard/HeadlineBottomCard/HeadlineBottomCard";
import Scoreboard from "@/Components/Atoms/Scoreboard/Scoreboard";
import HeaderCarousel from "@/Components/Atoms/HeaderCarousel/HeaderCarousel";
import SubNavBar from "@/Components/Atoms/NarBar/SubNavBar/SubNavBar";
import Button from "@/Components/Atoms/Button/Button";

export default function Home() {
  return (
    <main>
      {/* <div className={styles.navbar}>
      <NavBarClient/>
      </div>
      <div className={styles.main}>
        <div className={styles.col_one}>
          <Card backgroundColor="#f9f9fb">
            <CardWithLinkAction
              header="Quick Links"
              quickLinks={SharedData.quickLinks}
            ></CardWithLinkAction>
          </Card>
        </div>
        <div className={styles.col_two}>
          <HeadlineCard>
            <HeadlineTopCard></HeadlineTopCard>
            <HeadlineBottomCard></HeadlineBottomCard>
          </HeadlineCard>
        </div>
        <div className={styles.col_three}>
          <Card>
            <HeadlineRightCard></HeadlineRightCard>
          </Card>
        </div>
      </div> */}
      {/* <div className={styles.scoreboard}>
      <Scoreboard games={SharedData.nbaGames}/>
      <Scoreboard games={SharedData.ncaamGames} />
      </div> */}
      {/* <HeaderCarousel />
      <div className={styles.navbar}>
        <NavBar regionTeams={[]} />
      </div> */}
      {/* <Card backgroundColor="#f9f9fb">
        <CardWithLinkAction
          header="Quick Links"
          quickLinks={SharedData.quickLinks}
        ></CardWithLinkAction>
      </Card> */}
      {/* <HeadlineCard>
        <HeadlineTopCard></HeadlineTopCard>
        <HeadlineBottomCard></HeadlineBottomCard>
      </HeadlineCard>
      <Card>
        <HeadlineRightCard></HeadlineRightCard>
      </Card> */}
      <div className={styles.buttonContainer}>
      <Button>Sign Up</Button>
      <Button variant="secondary">Log In</Button>
      <Button variant="yellow" iconPath="espnplus.svg">Get</Button>
      </div>
    </main>
  );
} 
