import type { FC } from "react";
import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout";
import Contact from "./pages/contact";
import Home from "./pages";

const App: FC = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </DefaultLayout>
  );
};

export default App;
