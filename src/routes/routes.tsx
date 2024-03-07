import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main.routes";

const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesIndex;
