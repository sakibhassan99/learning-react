import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h1 className="text-3xl">Loading....</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
