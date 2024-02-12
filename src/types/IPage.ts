import { ICard } from "./ICard";

export interface IPage {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ICard[];
}
