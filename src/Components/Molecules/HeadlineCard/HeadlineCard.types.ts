export interface IHeadlineCardProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
    imageUrl?: string;
    title?: string;
    subTitle?: string;
    bottomTitle?: string;
    bottomSubTitle?: string;
    bottomDescription?: boolean;
  }