import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ContactsContext } from "./components/Context/contactsContext.js";
import List from "./components/List";

import "./App.css";

const getContacts = async (page = 1) => {
  const items = await axios
    .get(`https://reqres.in/api/users?page=${page}`)
    .then((res) => {
      return res.data;
    })
    .catch();

  return items;
};

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    getContacts().then((res) => setContacts(res.data));
  }, []);

  useEffect(() => {
    const filtered = contacts.filter((item) => {
      return item.first_name.includes(search);
    });

    setContacts(filtered);
  }, [search]);

  const handleChange = (e: ChangeEvent) => {
    if (!search) {
      ref.current = contacts;
    }
    !e.target.value ? setContacts(ref.current) : setSearch(e.target.value);
  };

  const handleClickMore = () => {
    let listPage = [];

    getContacts(2).then((res) => {
      setContacts((prevState) => {
        const newList = [...prevState, ...res.data];

        return newList;
      });
    });
  };

  return (
    <>
      <ContactsContext.Provider value={[contacts, setContacts]}>
        <h1>My contact list</h1>
        <input type="text" placeholder="search..." onChange={handleChange} />
        <List />

        {contacts.length < 12 && (
          <button onClick={handleClickMore}>Загрузить ещё</button>
        )}
      </ContactsContext.Provider>
    </>
  );
}

export default App;
