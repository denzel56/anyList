import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ContactsContext } from "./components/Context/contactsContext";
import List from "./components/List";

import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { ICard } from "./types/ICard";

function App() {
  const [contacts, setContacts] = useState<ICard[]>([]);
  const [search, setSearch] = useState("");
  const localContactsState = useRef<ICard[] | null>(null);

  const { data, error, loading, refetch } = useFetch(
    "https://reqres.in/api/users",
    {
      page: 1,
    }
  );

  useEffect(() => {
    if (data !== null) {
      setContacts((prevState) => [...prevState, ...data.data]);
    }
  }, [data]);

  useEffect(() => {
    const filtered = contacts.filter((item) =>
      item.first_name.includes(search)
    );

    setContacts(filtered);
  }, [search]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!search) {
      localContactsState.current = contacts;
    }

    if (!e.target.value) {
      setContacts(localContactsState.current!);
    } else {
      setSearch(e.target.value);
    }
  };
  console.log(contacts);

  const handleClickMore = () => {
    refetch({ page: 2 });
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        setContacts,
      }}
    >
      <h1>My contact list</h1>
      <p>Total: {data?.per_page}</p>
      <input type="text" placeholder="search..." onChange={handleChange} />
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      <div className="list">
        <List />
      </div>
      {data && data.total_pages !== data.page && (
        <button onClick={handleClickMore}>Загрузить ещё</button>
      )}
    </ContactsContext.Provider>
  );
}

export default App;
