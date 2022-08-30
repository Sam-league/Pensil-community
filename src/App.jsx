import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Compitition from "./components/Compititions/Compitition";
import Events from "./components/events/Events";
import Groups from "./components/groups/Groups";
import Home from "./components/main/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { ModeProvider } from "./Context";

const App = () => {
  const { dark_mode } = useContext(ModeProvider);
  const Page = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${dark_mode ? "#242424" : "white"};
    color: ${dark_mode ? "white" : "#242424"};
  `;
  return (
    <Page>
      <Navbar />
      <Body>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/competition" element={<Compitition />} />
          <Route path="/explore" element={<Groups />} />
        </Routes>
      </Body>
    </Page>
  );
};

export default App;

const Body = styled.div`
  height: 85vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 5.4fr;
`;
