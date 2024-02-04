import { FC } from "react";
import Card from "../Card";

import s from "./List.module.css";

interface IListItem {
  id: number;
  avatar: string;
  first_name: string;
  email: string;
}

interface IProps {
  list: [];
}

const List: FC = ({ list }: IProps) => {
  return (
    <div className={s.root}>
      {list &&
        list.map((item: IListItem) => {
          return (
            <div key={item.id}>
              <Card
                image={item.avatar}
                name={item.first_name}
                email={item.email}
              />
            </div>
          );
        })}
    </div>
  );
};

export default List;
