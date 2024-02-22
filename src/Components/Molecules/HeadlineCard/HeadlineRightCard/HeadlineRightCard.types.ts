export interface IHeadlineRightCardProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
    heading? : string;
    imageUrl?: string;
    title?: string;
    subTitle?: string;
  }