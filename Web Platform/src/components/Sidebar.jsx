import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo, useEffect } from "react";
import variables from "../styles/variables.module.scss";
import {isMobile} from 'react-device-detect';

import {
    AboutIcon,
    ArticleIcon,
    CollapsIcon,
    HomeIcon,
    LogoIcon,
    UsersIcon,
    QuestionsIcon
  } from "./icons";

const menuItems = [
    { id: 1, label: "Início", icon: HomeIcon, link: "/", stroke: false },
    { id: 2, label: "Considerações de Design", icon: ArticleIcon, link: "/considerations", stroke: false },
    { id: 3, label: "Personas", icon: UsersIcon, link: "/personas", stroke: true },
    { id: 4, label: "Perguntas e Respostas",  icon: QuestionsIcon, link: "/questions", stroke: false },
    { id: 5, label: "Sobre", icon: AboutIcon, link: "/about", stroke: false },
];


// Para implemetar uma página auxiliar, você deve criar aqui o item auxiliar com id do pai e a rota do page
const subMenuItem = [
  { id: 2, label: "Considerações de Design", icon: ArticleIcon, link: "/consideration" },
];

const menus = [].concat(menuItems, subMenuItem);

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menus.find((menu) => menu.link === router.pathname),
    [router.pathname]
    
  );

  useEffect(() => {
    if(localStorage.getItem("toggleCollapsed") === null) {
      localStorage.setItem("toggleCollapsed", isMobile);
      setToggleCollapse(isMobile);
      console.log("isMobile", isMobile);
      return;
    }
    setToggleCollapse(JSON.parse(localStorage.getItem("toggleCollapsed")));
  }, []);

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-webplat-white-color absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      `sidebar-items flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap`,
      {
        ["active"]: (activeMenu.id === menu.id),
      },
      {
        ["justify-center"]: toggleCollapse,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
    console.log(localStorage.getItem("toggleCollapsed", !toggleCollapse));
    localStorage.setItem("toggleCollapsed", !toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ backgroundColor: variables.primaryColor }}
      // style={{ backgroundColor: variables.primaryColor, transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center gap-4">
          <LogoIcon  width={ toggleCollapse ? "3.25em" : "5em" } height={ toggleCollapse ? "3.25em" : "5em" } />
            <span
              className={classNames("mt-2 text-lg font-medium", {
                hidden: toggleCollapse,
              })}
              style={{ color: variables.whiteColor }}
            >
              webplat
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}>
              <CollapsIcon className="fill-webplat-primary-color" />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={menu.id} className={classes}>
                <Link href={{pathname: menu.link}} >
                  <div className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: toggleCollapse ? "auto" : "2.5rem" }}>
                      {
                        menu.stroke ? (
                          <Icon className="icon-stroke" />
                        ) : (
                          <Icon className="icon-fill" />
                        )
                      }
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;