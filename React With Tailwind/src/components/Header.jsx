import { NavLink } from "react-router-dom";
import viteLogo from "/vite.svg";
import Modal from "./Modal";
import { useState } from "react";

export default function Header() {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <header className="flex justify-between px-8 py-4 shadow-md">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-20">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
          >
            Contact
          </NavLink>
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setIsClosed(false);
          }}
        >
          <Modal
            isClosed={isClosed}
            setIsClosed={setIsClosed}
            header={<div className="text-xl font-bold">Sign In</div>}
            footer={
              <>
                <button
                  onClick={() => setIsClosed(true)}
                  className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsClosed(true)}
                  className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
                >
                  Sign In
                </button>
              </>
            }
          >
            <input
              placeholder="Username"
              className="grow rounded border border-gray-600 px-2 py-1"
              type="text"
            />
            <input
              placeholder="Password"
              className="grow rounded border border-gray-600 px-2 py-1"
              type="password"
            />
          </Modal>{" "}
          Sign In
        </li>
      </ul>
    </header>
  );
}
