import React from "react";
import FreeMypage from "./pages/FreeMypage";
import MyInfo from "./components/my/FreeMyInfo";
import MyProject from "./components/my/FreeMyProject";
import { Route, Routes } from "react-router-dom";
import ClientMypage from "./pages/ClientMypage";
import ClientMyInfo from "./components/my/ClientMyInfo";

function App() {
  return (
    <Routes>
      <Route path="/freelancer/mypage" element={<FreeMypage />} />
      <Route path="/freelancer/myinfo" element={<MyInfo />} />
      <Route path="/freelancer/myproject" element={<MyProject />} />

      <Route path="/client/mypage" element={<ClientMypage />} />
      <Route path="/client/myinfo" element={<ClientMyInfo />} />
    </Routes>
  );
}

export default App;
