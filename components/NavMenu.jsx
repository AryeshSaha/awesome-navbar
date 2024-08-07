import { NavRoutes } from "@/data/NavRoutes";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const NavMenu = ({ isOpen, toggleDrawer }) => {
  const controls = useAnimation();

  const ulVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren",
        ease: "easeInOut",
      },
    },
    hidden: { opacity: 0 },
  };

  const liVariants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (isOpen) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isOpen, controls]);

  return (
    <>
      <div
        onClick={() => toggleDrawer(false)}
        className={`min-h-screen fixed ${
          isOpen ? "top-0" : "top-[-100%]"
        } left-0 transition-all duration-500 ease-in-out z-40 w-full bg-zinc-900 flex justify-center items-center pt-16`}
      >
        <motion.ul
          className="text-sky-600 w-full md:w-[50%] flex flex-col justify-center items-center"
          initial="hidden"
          animate={controls}
          variants={ulVariants}
        >
          {NavRoutes.map((item, index) => (
            <motion.li
              key={index}
              className="relative flex items-center justify-center w-full overflow-hidden cursor-pointer bg-zinc-800 h-36 group"
              onClick={() => toggleDrawer(false)}
              variants={liVariants}
            >
              <Link
                className="relative z-10 flex items-center justify-center w-full h-full py-4 space-x-2"
                href={item.route}
              >
                <div className="text-3xl text-sky-600">{item.icon}</div>
                <p className="text-3xl font-bold">{item.title}</p>
              </Link>
              {/* pseudo-element for hover effect */}
              <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out origin-left scale-x-0 bg-zinc-900 group-hover:scale-x-100"></div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};

export default NavMenu;
