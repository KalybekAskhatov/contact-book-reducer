import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import TopicContextProvider from "./context/TopicContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <TopicContextProvider>
        <Navbar />
        <MainRoutes />
      </TopicContextProvider>
    </>
  );
};

export default App;
