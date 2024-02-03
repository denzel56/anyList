import { FC } from "react";
import Card from "../Card";

import s from "./List.module.css";

interface IListItem {
  id: number;
  name: string;
  email: string;
}

const List: FC = ({ list }) => {
  return (
    <div className={s.root}>
      {list &&
        list.map((item: IListItem) => {
          return (
            <div key={item.id}>
              <Card title={item.name} email={item.email} />
            </div>
          );
        })}
    </div>
  );
};

export default List;
