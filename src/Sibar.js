import React from "react";
import SidebarOption from "./SidebarOption";
import {BsTwitter, BsBookmark} from "react-icons/bs"
import {BiHash, BiSolidHomeCircle} from "react-icons/bi"
import {CiMail} from "react-icons/ci"
import {CgMoreO} from "react-icons/cg"
import {GoBell} from "react-icons/go"
import { useNavigate } from "react-router-dom";
// import {HiOutlineDotsCircleHorizontal} from "react-icons/hi"
import {RiFileList2Line} from "react-icons/ri"
import { Button } from "@chakra-ui/react";


import "./Sidebar.css"


const Sidebar = () => {
  const navigate = useNavigate();
  // const handleToGoLogin = () => {
  //   navigate('/login');
  // };
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate('/login');
  };
  return (
    <div className="sidebar">
        <BsTwitter className="sidebar__twitterIcon"/>

        <SidebarOption active Icon={BiSolidHomeCircle} text="Home"/>
        <SidebarOption  Icon={BiHash} text="Explore"/>
        <SidebarOption  Icon={GoBell} text="Notifications"/>
        <SidebarOption  Icon={CiMail} text="Messages"/>
        <SidebarOption  Icon={BsBookmark} text="Bookmarks"/>
        <SidebarOption  Icon={RiFileList2Line} text="Lists"/>
        {/* <SidebarOption  Icon={""} text="Profile"/> */}
        <SidebarOption  Icon={CgMoreO} text="More"/>
      

        <Button colorScheme="green" mt={"40px"} w={"100%"} color={"white"} bg={"green.400"}>Tweet</Button>
        <Button color={"white"} bg={"red.600"} mt={"10px"} onClick={handleLogout}>Logout</Button>

    </div>
  )
}

export default Sidebar
