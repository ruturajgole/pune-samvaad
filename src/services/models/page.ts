export enum Pages {
  About,
  Events,
  Gallery,
  Contact,
  Homepage,
  Suggestions,
  Error
}

export enum Gallery {
  Photos,
  Videos
}

export enum Events {
  Upcoming,
  Past
}

export type SubPages = Gallery | Events;

export interface Page {
  readonly page: Pages;
  readonly subPage?: SubPages | undefined;
}
