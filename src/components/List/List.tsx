import { FC } from "react";
import Card from "../Card";

import s from "./List.module.css";

const List: FC = () => {
  return (
    <div className={s.root}>
      <Card title="denzel" email="example@email.com" />
    </div>
  );
};

export default List;
