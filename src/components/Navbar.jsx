import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between py-5 px-12 mb-10 bg-black text-white">
      <h2 className="text-3xl text-center">Redux ToolKit Learning</h2>
      <div className="flex justify-center gap-5">
        {[
          { name: "home", link: "/" },
          { name: "counter", link: "/counter" },
          { name: "post", link: "/post" },
          {name:'Async Post', link:'/async-post'}
        ].map((nav, index) => (
          <nav
            key={index}
            className={`text-sm uppercase ${
              router.pathname == nav.link && "underline"
            }`}
          >
            <Link href={nav.link}>{nav.name}</Link>
          </nav>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
