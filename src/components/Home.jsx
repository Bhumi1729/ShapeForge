import React from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineCode,
  HiOutlineAdjustments,
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

function Hero24() {
  const styles = {
    container: "bg-gradient-to-b from-[#101212] to-[#08201D] relative",
    header: "absolute inset-x-0 top-0 z-10 w-full",
    headerContent: "px-4 mx-auto sm:px-6 lg:px-8",
    headerFlex: "flex items-center justify-between h-16 lg:h-20",
    logo: "w-auto h-8 mr-8",
    navLinks: "hidden lg:flex lg:items-center lg:justify-center lg:space-x-10",
    navLink:
      "text-base text-white transition-all duration-200 hover:text-opacity-80",
    actionBtns:
      "lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto",
    menuBtn:
      "inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800",
    section:
      "relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24",
    sectionContent: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20",
    title: "text-4xl font-bold sm:text-6xl",
    titleGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white",
    description: "mt-5 text-base text-white sm:text-xl",
    ctaBtn:
      "inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700",
    statsGrid:
      "grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0",
    statItem: "flex items-center",
    statIcon: "w-8 h-8 text-[#28CC9D]",
    statText: "ml-3 text-sm text-white",
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerFlex}>
            <div className="flex-shrink-0">
              <a href="#" title="Shape Customizer" className="flex">
                
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className="max-w-xl mx-auto text-center">
            <h1 className={styles.title}>
              <span className={styles.titleGradient}>
                Shape Customizer Tool
              </span>
            </h1>
            <p className={styles.description}>
              Create, customize, and generate shapes with just a few clicks. 
              Modify colors, dimensions, borders, and more!
            </p>
            <a
              href="/createshape"
              title="Get Started"
              className={styles.ctaBtn}
              role="button"
            >
              Get Started
              <FaArrowRight className="w-6 h-6 ml-8 -mr-2" />
            </a>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <HiOutlineAdjustments className={styles.statIcon} />
                <p className={styles.statText}>
                  Customize colors, borders, and dimensions
                </p>
              </div>
              <div className={styles.statItem}>
                <HiOutlineCode className={styles.statIcon} />
                <p className={styles.statText}>
                  Generate and copy CSS code instantly
                </p>
              </div>
              <div className={styles.statItem}>
                <HiOutlineMenuAlt3 className={styles.statIcon} />
                <p className={styles.statText}>
                  Intuitive and user-friendly design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero24;
