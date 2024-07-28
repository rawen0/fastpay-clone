import { Bell } from "lucide-react"
import Image from "next/image"
import Sidebar from "./side-bar"
type Props = {}

const AppHeader = (props: Props) => {
  return (
    <header className="sticky z-50 top-0 flex items-center justify-between px-5 sm:px-20 py-4 bg-[#E2EBEF] shadow">
        <Sidebar />
        <Image className="mr-auto ml-4" width={80} height={20} src={"/logo.svg"} alt={"fast-pay logo"} priority/>
        <Bell fill="#FC2861"/>
    </header>
  )
}

export default AppHeader