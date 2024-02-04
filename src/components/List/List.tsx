import { FC, useContext, useEffect } from "react";
import Card from "../Card";
import { ContactsContext } from "../Context/contactsContext";

import s from "./List.module.css";

interface IListItem {
  id: number;
  avatar: string;
  first_name: string;
  email: string;
  liked: boolean;
}

const List: FC = () => {
  const [contacts, setContacts] = useContext(ContactsContext);

  return (
    <div className={s.root}>
      {contacts &&
        contacts.map((item: IListItem) => {
          return (
            <div key={item.id}>
              <Card
                id={item.id}
                image={item.avatar}
                name={item.first_name}
                email={item.email}
                liked={item.liked}
              />
            </div>
          );
        })}
    </div>
  );
};

export default List;
