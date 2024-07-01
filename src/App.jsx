import React from "react";
import Home from "./pages/Home/Home";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Innovation from "./pages/Innovation/Innovation";
import Entrepreneurship from "./pages/Entrepreneurship/Entrepreneurship";
import Consult from "./pages/Consultancy/Consult";
import Contact from "./pages/Contacts/Contact";
// import { Switch, Route } from "react-router-dom";


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/innovation" element={<Innovation/>}/>
      <Route path="/entrepreneurship" element={<Entrepreneurship/>}/>
      <Route path="/consultancy" element={<Consult/>}/>
      <Route path="/contacts" element={<Contact/>}/>
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;
