import { FC, ReactNode } from "react";

import s from "./Card.module.css";

interface ICard {
  image: string;
  name: string;
  email: string;
}
const Card: FC = ({ image, name, email }: ICard): ReactNode => {
  return (
    <div className={s.root}>
      <div className={s.avatar}>
        <img src={image} alt="avatar" />
      </div>
      <div className={s.infoWrap}>
        <div className={s.name}>{name}</div>
        <div className={s.email}>{email}</div>
      </div>
      <div className={s.like} />
    </div>
  );
};

export default Card;
