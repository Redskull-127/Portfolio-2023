/* eslint-disable react-hooks/rules-of-hooks */

import Link from "next/link"
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Image from "next/image";

const navItems = {
    home: {
        href: '/',
        label: 'Home',
    },
    about: {
        href: '/skills',
        label: 'Skills',
    },
    latest: {
        href: '/latest',
        label: 'Latest',
    },
    contact: {
        href: '/contact',
        label: 'Contact Me',
    },
    support: {
        href: '/support',
        label: 'Support',
    },
}

export default function Navbar() {
    return(
        <nav className="flex flex-col mt-24">
            {/* Desktop menu */}
            <div className="flex flex-col gap-2">
                <Image src="/Images/bitmoji.png" width={150} height={150} alt="bit"/>
                {Object.entries(navItems).map(([key, { href, label }]) => (
                    <Link key={key} href={href}>
                        <p className={clsx(
                            'px-3 py-2 rounded-md text-base font-medium',
                            usePathname() === href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        )}>
                            {label}
                        </p>
                    </Link>
                ))}
            </div>
        </nav>
        
    )
}