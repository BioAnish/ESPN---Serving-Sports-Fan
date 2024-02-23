export interface IPageGameStripProps
  extends React.HTMLAttributes<HTMLDivElement> {
    background?: string;
    stripTitle?: string;
    rightSideTeam?: string;
    leftSideTeam?: string;
    rightIcon?: string;
    leftIcon?: string;
    day?: string;
    time?: string;
  }