export interface IHeadlineTopCardProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
    title? : string;
    subTitle? : string;
    hour?: string;
    imageUrl?: string;
    author?: string;
    borderColor?: string;
}