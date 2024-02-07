import React from "react";

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
    cardStyle?: React.CSSProperties;
    cardBackgroundColor?: string;
    backgroundColor?: string;
}