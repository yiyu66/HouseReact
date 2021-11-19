import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

import Home from "../pages/Home";
import Expenses from "../pages/CityList/expenses";
import Invoices from "../pages/CityList/invoices";
import Invoice from "../pages/CityList/invoice";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          /> */}
        </Route>
        <Route path="*" element={NotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}
