import React from "react";
import { Routes, Route } from "react-router-dom";
import AddContact from "./Components/AddContact/AddContact";
import ContactDetails from "./Components/ContactDetails/ContactDetails";
import ContactList from "./Components/ContactList/ContactList";
import EditContact from "./Components/EditContact/EditContact";
import Home from "./Components/Home/Home";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/topicsList" element={<ContactList />} />
      <Route path="/topicsDetails/:id" element={<ContactDetails />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;
