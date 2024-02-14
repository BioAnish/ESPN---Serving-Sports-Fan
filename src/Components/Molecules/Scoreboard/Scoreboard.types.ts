export interface Team {
    abbreviation: string;
    logo: string;
    score: string;
  }
  
  export interface Game {
    id: number;
    teams: Team[];
    dateTime: string;
    network: string;
    labelContent: string;
  }

  