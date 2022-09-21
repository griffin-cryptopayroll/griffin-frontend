import { HomeIcon, UserIcon, CircleStackIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

const iconStyle = "h-6 w-auto mr-2"
const menuItems = [
    {
        href: "/dashboard",
        title: "Dashboard",
        icon: <HomeIcon className={iconStyle} />,
    },
    {
        href: "/employees",
        title: "Employees",
        icon: <UserIcon className={iconStyle} />,
    },
    {
        href: "/payroll",
        title: "Payroll",
        icon: <CircleStackIcon className={iconStyle} />,
    },
    // {
    //     href: "/about",
    //     title: "about",
    //     icon: <HomeIcon className={iconStyle} />,
    // },
];

export default function SidePanel() {
    const [activeItem, setActiveItem] = useState()

    return (
        <div className="h-full bg-white">
            {menuItems.map(({ href, title, icon }) => {
                return <Link key={title} href={href}>
                    <div className="flex items-center pl-6 pr-10 py-5 text-lg font-light tracking-wider cursor-pointer hover:bg-violet-100 transition-all">
                        {icon}
                        <div>
                            {title}
                        </div>
                    </div>
                </Link>
            })}
        </div>)
}