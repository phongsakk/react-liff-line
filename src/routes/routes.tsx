import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main.routes";

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
