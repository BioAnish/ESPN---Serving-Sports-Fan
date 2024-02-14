// NavBar.types.ts

export interface Team {
    teamName: string;
    logoUrl: string;
    // other properties...
  }
  
  export interface RegionTeam {
    leagueTitle: string;
    teamNames: Team[];
    // other properties...
  }

  export interface Tab {
    title: string;
  }
  