"use client";
import React, { useState } from "react";
import {  Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div id="Navbar" className={cn("fixed dark top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
        
        <Link href={"#home"}><MenuItem setActive={setActive} active={active} item="Home"></MenuItem> </Link>
        
        <Link href={"#about"}><MenuItem setActive={setActive} active={active} item="About">
        </MenuItem></Link>
        
        <Link href={"#projects"}><MenuItem setActive={setActive} active={active} item="Projects">
        </MenuItem></Link>
        
        <Link href={"#contact"}><MenuItem setActive={setActive} active={active} item="Contact us" >
        </MenuItem></Link>
        
        </Menu>
    </div>
  )
}

export default Navbar