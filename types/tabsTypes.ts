export interface TabsButtonType {
  title: string;
}

export interface TabButtonsProps {
  buttons: TabsButtonType[];
  currentTab: number;
  setCurrentTab: (index: number) => void;
}

export enum TabsOptions {
  Films,
  Planets,
}
