import { Route, Routes } from "react-router-dom";
import Booking from "../../pages/Booking";
import Home from "../../pages/Home";
import "./styles.scss";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
