import axios from "axios";
import { useEffect, useState } from "react";
import List from "./components/List";

import "./App.css";

const getContacts = async () => {
  const items = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.data;
    })
    .catch();

  return items;
};

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getContacts().then((res) => setContacts(res));
  }, []);

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
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
