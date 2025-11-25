import { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("Competitions");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    "Competitions",
    "Datasets",
    "Models",
    "Code",
    "Discussions",
    "Blog",
    "Courses",
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-[#0D1117]/85 backdrop-blur-xl border-b border-[#30363D]/60 shadow-[0_0_18px_#0005] starfield"
    >
      <div className="max-w-[1700px] mx-auto flex items-center gap-6 px-6 py-3">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="text-[#58A6FF] text-3xl font-bold tracking-tight flex items-center gap-2">
            <img src="/favicon.svg" alt="logo" className="w-8 h-8" />
          </span>
        </motion.div>

        <nav className="hidden lg:flex items-center gap-6 ml-28">
          {navLinks.map((item, idx) => (
            <motion.button
              key={item}
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              whileHover={{
                scale: 1.05,
                color: "#fff",
                textShadow: "0 0 6px #58A6FF",
              }}
              className={`relative text-sm transition ${
                active === item ? "text-white font-semibold" : "text-gray-300"
              }`}
            >
              {item}
              {active === item && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#58A6FF] to-[#9b5bff] rounded-md"
                />
              )}
            </motion.button>
          ))}
        </nav>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="hidden md:flex ml-auto items-center gap-2 bg-[#0E1523]/60 border border-[#2F3746] px-4 py-2 rounded-full text-gray-300 focus-within:ring-2 focus-within:ring-[#58A6FF]/60 transition-all shadow-[0_0_12px_#0003]"
        >
          <Search size={17} className="opacity-60" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm w-44 outline-none placeholder-gray-500"
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="px-5 py-2 text-sm font-semibold rounded-full bg-white text-black hover:bg-gray-200 transition shadow-[0_0_10px_#ffffff50] hidden md:block"
        >
          Sign In
        </motion.button>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden ml-auto text-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN NAV  for only mobile responsive*/}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden flex flex-col gap-4 px-6 py-5 bg-[#0D1117]/95 border-t border-[#30363D]"
          >
            {/* SEARCH ON MOBILE */}
            <div className="flex items-center gap-2 bg-[#0E1523]/60 border border-[#2F3746] px-4 py-2 rounded-full text-gray-300 shadow-[0_0_12px_#0003]">
              <Search size={17} className="opacity-60" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm w-full outline-none placeholder-gray-500"
              />
            </div>

            {/* LINKS for only mobile responsive*/}
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`text-left text-[15px] ${
                  active === item
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}

            {/* Sign in button mobile for only mobile responsive */}
            <button className="px-5 py-2 text-sm font-semibold rounded-full bg-white text-black hover:bg-gray-200 transition shadow-[0_0_10px_#ffffff50]">
              Sign In
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
