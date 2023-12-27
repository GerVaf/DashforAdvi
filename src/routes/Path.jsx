import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Dashboard from "../pages/Dashboard";
import CreateBlog from "../pages/CreateBlog";
import Login from "../pages/Login";
import CreateWithEditor from "../components/CreateBlog/CreateWithEditor.jsx/CreateWithEditor";
import CreateWithDrapAndDrop from "../components/CreateBlog/CreateWithDrapAndDrop/CreateWithDrapAndDrop";
import List from "../pages/List";
import UserInfo from "../pages/UserInfo";
import Gallery from "../pages/Gallery";
import Ads from "../pages/Ads";
import SignUp from "../pages/Signup";
import RouteGuard from "../routes/RouteGuard";
const Path = () => {
  const routes = [
    {
      path: "list",
      element: <List />,
    },
    {
      path: "userInfo",
      element: <UserInfo />,
    },
    {
      path: "gallery",
      element: <Gallery />,
    },
    {
      path: "ads",
      element: <Ads />,
    },
    {
      path: "create",
      element: <CreateBlog />,
    },
    {
      path: "create/editor",
      element: <CreateWithEditor />,
    },
    {
      path: "create/drop",
      element: <CreateWithDrapAndDrop />,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Path;
