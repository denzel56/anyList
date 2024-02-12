import { useContext, useEffect, useState } from "react";
import { ICard } from "../../types/ICard";
import Card from "../Card";
import { ContactsContext, IContext } from "../Context/contactsContext";

import s from "./List.module.css";

const List = () => {
  const { contacts, setContacts } = useContext<IContext>(ContactsContext);

  const handleLikeClick = (id: number) => {
    setContacts((contacts: ICard[]) => {
      return (
        contacts &&
        contacts.map((item: ICard) => {
          const copyItem = { ...item };
          if (copyItem.id === id) {
            copyItem.liked = !copyItem.liked;
          }
          return copyItem;
        })
      );
    });
  };

  return (
    <div className={s.root}>
      <div className={s.list}>
        {contacts &&
          contacts.map((item: ICard) => {
            return (
              <div key={item.id}>
                <Card
                  id={item.id}
                  avatar={item.avatar}
                  first_name={item.first_name}
                  email={item.email}
                  liked={item.liked}
                  onLikeClick={handleLikeClick}
                />
              </div>
            );
          })}
      </div>
      <div className={s.list}>
        {contacts &&
          contacts
            .filter((item: ICard) => item.liked)
            .map((item: ICard) => {
              return (
                <div key={item.id}>
                  <Card
                    id={item.id}
                    avatar={item.avatar}
                    first_name={item.first_name}
                    email={item.email}
                    liked={item.liked}
                    onLikeClick={handleLikeClick}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default List;
