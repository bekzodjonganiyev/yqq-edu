import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DashboardIcon,
  LogoutIcon,
  NewsIcon,
  UsersIcon,
} from "../../../assets/icons";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-60">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-white">Yangiyer flour trading  </h2>
        </div>

        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <Link
                to={""}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <DashboardIcon />
                <span className="text-gray-100">Dashboard</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to={"news"}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <NewsIcon />
                <span className="text-gray-100">Blogs</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to={"vacancies"}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <NewsIcon />
                <span className="text-gray-100">Vacancy</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to={"mottos"}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <UsersIcon />
                <span className="text-gray-100">Motto</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to={"banner"}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <UsersIcon />
                <span className="text-gray-100">Banner</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to={"media"}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <UsersIcon />
                <span className="text-gray-100">Brands</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to={"photos"}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <UsersIcon />
                <span className="text-gray-100">Foto news</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to={"faq"}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <UsersIcon />
                <span className="text-gray-100">FAQ</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                to={"partners"}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <UsersIcon />
                <span className="text-gray-100">Partners</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <button
                onClick={() => {
                  window.localStorage.removeItem("token");
                  navigate("/");
                  window.location.reload(false);
                }}
                to={"#"}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <LogoutIcon />
                <span className="text-gray-100">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
