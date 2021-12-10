import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Today from "./pages/Today";

export default function App() {
  const dateNow: number = new Date().getDate();
  // Template literal supaya parameter date menjadi type string
  const dateLocalStorage: any = localStorage.getItem("dateNow");

  if (dateLocalStorage) {
    const date: number = +dateLocalStorage;

    if (+date === dateNow) {
      console.log("Masih hari ini");
    } else {
      localStorage.setItem("dateNow", `${dateNow}`);
      console.log("Sudah berganti hari");
    }
  } else {
    // Tandanya sudah berganti hari
    localStorage.setItem("dateNow", `${dateNow}`);
  }

  return (
    <>
      <div>yahaha</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/today" element={<Today />} />
      </Routes>
    </>
  );
}
