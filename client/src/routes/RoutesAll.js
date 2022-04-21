import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import AddNewUser from "../pages/AddNewUser";
import EditUser from "../pages/EditUser";
import UserView from "../pages/UserView";

const RoutesAll = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<UserView />} />
        <Route path="/addUser" element={<AddNewUser />} />
        <Route path="/editUser" element={<EditUser />} />
      </Routes>
    </>
  );
};

export default RoutesAll;
