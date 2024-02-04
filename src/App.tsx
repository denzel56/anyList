import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
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
    !search && console.log(ref.current);
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

  return (
    <>
      <h1>My contact list</h1>
      <input type="text" placeholder="search..." onChange={handleChange} />
      <List list={contacts} />
    </>
  );
}

export default App;
