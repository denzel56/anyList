import { contactsContext } from "./components/Context/contactsContext";
import List from "./components/List";

import "./App.css";

function App() {
  return (
    <>
    <contactsContext.Provider value={{
      contacts: []
    }}>

      <h1>My contact list</h1>
      <List />
    </contactsContext.Provider>
    </>
  );
}

export default App;
