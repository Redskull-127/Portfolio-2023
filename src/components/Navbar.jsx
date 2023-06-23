/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/skills",
    label: "Skills",
  },
  {
    href: "/latest",
    label: "Latest",
  },
  {
    href: "/blogs",
    label: "Blog",
  },
  {
    href: "/chat",
    label: "Chat",
  },
  {
    href: "/contact",
    label: "Contact Me",
  },
];

const Navbar = () => {
  const { data, status } = useSession();
  const [img, setImg] = useState("/icon-256x256.png");

  useEffect(() => {
    if (status === "authenticated") {
      setImg(data.user.image);
    }
  }, [status, data]);

  return (
    <nav className="flex flex-col mt-24">
      {/* Desktop menu */}
      <div className="flex flex-col gap-2">
        <img
          onClick={(e) => {
            e.target.classList.toggle("animate-swipe");
          }}
          src={img}
          id="profilePicture"
          className="rounded-full transition-all duration-300"
          loading="lazy"
          width={150}
          height={150}
          alt="bit"
        />
        {navItems.map((item) => (
          <Link
            className="transition-all duration-200"
            key={item.href}
            href={item.href}
          >
            <p
              className={clsx(
                'px-3 py-2 transition-all duration-200 rounded-md text-base font-medium',
                usePathname() === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              )}
            >
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar
