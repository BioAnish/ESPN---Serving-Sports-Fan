export interface Tab {
    name: string;
    label: string;
    content: React.ReactNode; // Adjust the type to match your content
  }
  
  export interface ITabsProps extends React.HTMLAttributes<HTMLDivElement> {
    tabs: Tab[];
  }