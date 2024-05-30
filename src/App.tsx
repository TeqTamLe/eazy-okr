import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages";
import Contact from "./pages/contact";

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