import cn from "classnames";

import { ICard } from "../../types/ICard";

import s from "./Card.module.css";

const Card = ({ id, avatar, first_name, email, liked, onLikeClick }: ICard) => {
  const handleClick = () => {
    onLikeClick && onLikeClick(id);
  };

  return (
    <div className={s.root}>
      <div className={s.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={s.infoWrap}>
        <div className={s.name}>{first_name}</div>
        <div className={s.email}>{email}</div>
      </div>
      <div
        className={cn(s.like, {
          [s.redHeart]: liked,
        })}
        onClick={handleClick}
      />
    </div>
  );
};

export default Card;
