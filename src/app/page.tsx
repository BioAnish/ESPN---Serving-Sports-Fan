import Card from "@/Components/Atoms/Card/Card";
import CardWithLinkAction from "@/Components/Molecules/CardWithLinkAction/CardWithLinkAction";
import SharedData from "../Utils/SharedData";
import NavBar from "@/Components/Molecules/NarBar/NavBar";
import HeadlineCard from "@/Components/Molecules/HeadlineCard/HeadlineCard";
import HeadlineTopCard from "@/Components/Molecules/HeadlineCard/HeadlineTopCard/HeadlineTopCard";
import HeadlineRightCard from "@/Components/Molecules/HeadlineCard/HeadlineRightCard/HeadlineRightCard";
import styles from "./page.module.css";
import HeadlineBottomCard from "@/Components/Molecules/HeadlineCard/HeadlineBottomCard/HeadlineBottomCard";
import Scoreboard from "@/Components/Molecules/Scoreboard/Scoreboard";
import HeaderCarousel from "@/Components/Molecules/HeaderCarousel/HeaderCarousel";
import SubNavBar from "@/Components/Molecules/NarBar/SubNavBar/SubNavBar";
import Button from "@/Components/Atoms/Button/Button";
import Dropdown from "@/Components/Atoms/DropdownMenu/DropdownMenu";
import SportScorecard from "@/Components/Molecules/SportScorecard/SportScorecard";
import NflHomePage from "@/Components/Views/Nfl/NflHomePage/NflHomePage";
import MiniCardCarousel from "@/Components/Molecules/MiniCardCarousel/MiniCardCarousel";

export default function Home() {
  return (
    <main>
      <HeaderCarousel />
      <NavBar regionTeams={[]} />
      {/* <NflHomePage/> */}
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
      {/* <HeaderCarousel /> */}
      {/* <div className={styles.navbar}>
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
      {/* <div className={styles.buttonContainer}>
      <Button>Sign Up</Button>
      <Button variant="secondary">Log In</Button>
      <Button variant="yellow" iconPath="espnplus.svg">Get</Button>
      </div> */}
      {/* <SportScorecard/> */}
      {/* <MiniCardCarousel/> */}
    </main>
  );
} 
