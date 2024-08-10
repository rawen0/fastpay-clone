import { Bell } from "lucide-react";
import Sidebar from "@/components/side-bar";
import Logo from "@/components/logo";
type Props = {};

const AppHeader = (props: Props) => {
  return (
    <header className="sticky z-50 top-0 flex items-center justify-between px-5 sm:px-20 py-4 bg-[#E2EBEF] shadow">
      <Sidebar />
      <Logo />
      <Bell fill="#FC2861" />
    </header>
  );
};

export default AppHeader;
