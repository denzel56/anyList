import React from "react";
import { ICard } from "../../types/ICard";

export interface IContext {
  contacts: ICard[] | null;
  setContacts: (value: any) => void;
}

export const ContactsContext = React.createContext<IContext | null>(null);
