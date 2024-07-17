import {Pages, SubPages} from "./page";

export interface SubPage <T> {
  readonly title: string;
  readonly page: T;
}

export interface Navigation {
  readonly icon: JSX.Element;
  readonly title: string;
  readonly page: Pages;
  readonly subPages?: ReadonlyArray<SubPage<SubPages>>;
}