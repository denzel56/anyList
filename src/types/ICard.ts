export interface ICard {
  id: number;
  email: string;
  first_name: string;
  last_name?: string;
  avatar: string;
  liked?: boolean;
  onLikeClick: (id: number) => void;
}
