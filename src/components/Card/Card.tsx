import { FC, ReactNode } from "react";
import Like from "./assets/heart.svg";
import s from "./Card.module.css";

interface ICard {
  title: string;
  email: string;
}
const Card: FC = ({ title, email }: ICard): ReactNode => {
  return (
    <div className={s.root}>
      <div className={s.avatar}>{`${title.split("").splice(0, 1)}`}</div>
      <div className={s.infoWrap}>
        <div className={s.name}>{title}</div>
        <div className={s.email}>{email}</div>
      </div>
      <div className={s.like} />
    </div>
  );
};

export default Card;
