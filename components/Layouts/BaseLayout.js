import { useState } from "react";
import { useEffect } from "react";
import styles from "./BaseLayout.module.css";
import Header from "../Header";
import Link from "next/link";
import { useRouter } from "next/router";

const BaseLayout = (props) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState();
  const [currentPageSection, setCPS] = useState();

  useEffect(() => {
    console.log("path name", router.pathname);
    const urls = router.pathname.split("/");
    const firstPath = urls[1];
    console.log(urls);
    console.log(firstPath);
    setCPS(firstPath);
    //get last element in the path that would determine what navs would be shown
    setActiveLink(urls[urls.length - 1]);
  }, [router.pathname]);

  const navs = [
    { name: "Shout-links", link: `/${currentPageSection}/shout-links`, icon: "shout-link-2", page: "affiliates-management" },
    { name: "Shout-links", link: `/${currentPageSection}/shout-links`, icon: "shout-link-2", page: "brand-management" },
    { name: "Adverts", link: `/${currentPageSection}/adverts`, icon: "image-upload", page: "brand-management" },
    { name: "Brands", link: `/${currentPageSection}/brands`, icon: "bag", page: "brand-management" },
    { name: "Challenges", link: `/${currentPageSection}/challenges`, icon: "puzzle-piece", page: "challenges" },
    { name: "Dashboard", link: `/${currentPageSection}/dashboard`, icon: "home-alt", page: "super-admin" },
    { name: "Managers", link: `/${currentPageSection}/managers`, icon: "double-user", page: "super-admin" },
    { name: "Settings", link: `/${currentPageSection}/settings`, icon: "gear", page: "super-admin" },
  ];
  return (
    <div className={styles.container}>
      <nav className={styles.sidebar + " border-r border-b border-gray-light p-[16px] pr-[44px]"}>
        <img className="w-[100px] h-[32px] mb-[40px] ml-[40px]" src="/Shout Logo.svg" />

        <ul className={styles.nav}>
          {navs.map((nav, i) => {
            return (
              <>
                {router.pathname.includes(nav.page) && (
                  <Link href={nav.link} key={i}>
                    <li
                      onClick={() => {
                        setActiveLink(nav.link);
                      }}
                      className={styles.nav__item + ` hover:bg hover:bg-hover-color--1 ${router.pathname.includes(nav.link) ? "text-primary bg-gray-100" : ""}`}
                    >
                      <span className={`icon-${nav.icon} text-[16px] mr-[9px]`}></span>
                      <span className="body_light">{nav.name}</span>
                    </li>
                  </Link>
                )}
              </>
            );
          })}
        </ul>
      </nav>
      <section className={styles.section}>
        <Header />
        <main>{props.children}</main>
      </section>
    </div>
  );
};

export default BaseLayout;
