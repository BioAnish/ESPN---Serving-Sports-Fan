import React from "react";

export interface IQuickLink {
  href: string;
  iconSrc: string;
  altText: string;
  quickListDetailsName: string;
}

export interface ICardWithLinkAction extends React.HTMLAttributes<HTMLDivElement> {
  header?: string;
  quickLinks: IQuickLink[];
}
