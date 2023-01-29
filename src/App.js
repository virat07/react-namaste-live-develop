import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // help us create routing;
// RouterProvider is coming from react router rom which is a component which will provide the create brower router the app.
//Outlet is a component from react router dom which will be filled by children configuration. so that we can have header footer and in between we can outlet components.
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestrauntMenu";
import SignupForm from "./components/Login";
import UserContext from "./utils/UserContext";
import Instamart from "./components/Instamart";
import { ShimmerComponent } from "./components/ShimmerUI";
// Composing Comopnentss
// NAMED EXPORT import is nothing but when we export a component without default keyword we use { } in the import
// whereas when we export using DEFAULT keywoard then we use just the component name! Also remember we can't export 2 components in default

// import { ComponentName } from './ component/' where { } doesn't means object destructing but it means
//Config Driven UI

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
// routing configuration
const AppLayout = () => {
  const [loggedIn, setLogin] = useState(true);
  const [user, setUser] = useState({
    name: "Bharat Gupta",
    email: "support@namastedev-bharat.com",
  });

  useEffect(() => {
    const checkLoginUser = localStorage.getItem("login");
    setLogin(checkLoginUser);
  }, []);
  const handleUser = () => {
    if (loggedIn) localStorage.clear();
    setLogin(!loggedIn);
  };

  return !loggedIn ? (
    <SignupForm handleUser={handleUser} />
  ) : (
    <UserContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      <Header setLogin={handleUser} />
      <Outlet />
      {/* <About />
      <Body />
      <Contact /> */}
      <Footer />
    </UserContext.Provider>
  );
};
// I want to render my about in between header and footer for that i have to make my applayout as a children of it. using children keyword.

const appRouter = createBrowserRouter([
  // if there is / in the URL load that page
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id", // dynamic id
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerComponent />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
// now root will render according to app router
//SPA- single page application
// 2 types of routing:- 1. client side routing 2. server side routing
