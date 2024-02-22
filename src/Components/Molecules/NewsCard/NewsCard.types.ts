export interface INewsCardProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
    imgUrl?: string;
    title?: string;
    subTitle?: string;
    hour?: string;
    author?: string;
  }