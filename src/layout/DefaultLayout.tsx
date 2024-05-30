import { ReactNode } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

interface Props {
  children: ReactNode
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-screen">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="w-full max-h-[calc(100vh_-_76px)] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};


export default DefaultLayout;