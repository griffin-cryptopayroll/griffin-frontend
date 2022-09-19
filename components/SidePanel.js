import { HomeIcon, UserIcon, CircleStackIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

const iconStyle = "h-6 w-auto mr-2"
const menuItems = [
    {
        href: "/dashboard",
        title: "dashboard",
        icon: <HomeIcon className={iconStyle} />,
    },
    {
        href: "/employees",
        title: "employees",
        icon: <UserIcon className={iconStyle} />,
    },
    {
        href: "/payroll",
        title: "payroll",
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

    return <div className="bg-violet-50 w-60 h-full">
        {menuItems.map(({ href, title, icon }) => {
            return <Link key={title} href={href}>
                <div className="flex items-center px-10 py-5 text-lg hover:bg-violet-300 transition-all">
                    {icon}
                    <div>
                        {title}
                    </div>
                </div>
            </Link>
        })}
    </div>
}