import { FC, ReactNode, useContext } from "react";
import { ContactsContext } from "../Context/contactsContext.js";
import cn from "classnames";

import s from "./Card.module.css";

interface ICard {
  id: number;
  image: string;
  name: string;
  email: string;
  liked?: boolean;
}
const Card: FC = ({ id, image, name, email, liked }: ICard): ReactNode => {
  const [contacts, setcontacts] = useContext(ContactsContext);
  const handleClick = () => {
    const favorite = contacts.map((item) => {
      if (item.id === id) {
        item.liked = !item.liked;
      }

      return item;
    });

    setcontacts(favorite);
  };

  return (
    <div className={s.root}>
      <div className={s.avatar}>
        <img src={image} alt="avatar" />
      </div>
      <div className={s.infoWrap}>
        <div className={s.name}>{name}</div>
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
