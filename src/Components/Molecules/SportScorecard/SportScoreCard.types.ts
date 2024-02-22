export interface ISportSCoreCardProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
    imageurlHome?: string;
    imageurlAway?: string;
    homeTeam?: string;
    awayTeam?: string;
    homeTeamScore?: number;
    awayTeamScore?: number;
    leagueTitle?: string;
    fullTimeResult?: string;
  }