import { useState } from "react";
import {
  PlusCircle,
  Home,
  Trophy,
  Database,
  Share2,
  BarChart3,
  Gamepad2,
  Code2,
  MessageSquare,
  GraduationCap,
   ChevronDown,
  ChevronUp,
  FileEdit,
  Award,
  TrendingUp,
  BookOpen,
  FileText,
  Flag,
  HelpCircle,
  Users,
  Shield,
  Lock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  const [showYourWork, setShowYourWork] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [active, setActive] = useState("Home");

  const mainLinks = [
    { name: "Home", icon: Home },
    { name: "Competitions", icon: Trophy },
    { name: "Datasets", icon: Database },
    { name: "Models", icon: Share2 },
    { name: "Benchmarks", icon: BarChart3 },
    { name: "Game Arena", icon: Gamepad2 },
    { name: "Code", icon: Code2 },
    { name: "Discussions", icon: MessageSquare },
    { name: "Learn", icon: GraduationCap },
  ];

  const moreLinks = [
    { name: "Kaggle Rankings", icon: Award },
    { name: "Progression", icon: TrendingUp },
    { name: "Documentation", icon: BookOpen },
    { name: "Blog", icon: FileText },
    { name: "Host a Competition", icon: Flag },
    { name: "Educator Resources", icon: GraduationCap },
    { name: "Support / Contact", icon: HelpCircle },
    { name: "Community Guidelines", icon: Shield },
    { name: "Team", icon: Users },
    { name: "Terms", icon: FileText },
    { name: "Privacy", icon: Lock },
  ];

  const handleLogoClick = () => {
    setIsCollapsed((prev) => !prev);
    setShowMore(false);
    setShowYourWork(false);
  };

  const shimmer =
    "opacity-50 starfield bg-cover bg-no-repeat bg-right-top backdrop-blur-xl";

  return (
    <motion.aside
      initial={{ x: -60, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        width: isCollapsed ? 85 : 298,
      }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
      className={`h-screen overflow-y-auto border-r border-[#30363D]/60 p-4 flex flex-col gap-6 shadow-[0_0_22px_#0008] bg-[#0D1117]/80 ${shimmer} relative`}
    >
      {/* LOGO */}
      <motion.button
        onClick={handleLogoClick}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.92 }}
        className={`flex items-center ${
          isCollapsed ? "justify-center" : "justify-start"
        } gap-3 w-full`}
      >
        <motion.div
          animate={{
            rotate: isCollapsed ? -10 : 0,
            scale: isCollapsed ? 1.06 : 1,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#161B22] border border-[#30363D] "
        >
          <span className="text-[#58A6FF] font-bold text-xl text-center block ">
            PUI
          </span>
        </motion.div>
      </motion.button>

      {/* CREATE BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.93 }}
        className={`flex items-center gap-2 bg-[#1F6FEB] hover:bg-[#2A7FFF] px-4 py-2 rounded-md shadow-[0_0_8px_#007bff50] ${
          isCollapsed ? "justify-center" : "justify-center"
        }`}
      >
        <PlusCircle size={18} />
        {!isCollapsed && <span className="font-medium">Create</span>}
      </motion.button>

      {/* MAIN LINKS */}
      <nav className="flex flex-col gap-1">
        {mainLinks.map((item, idx) => (
          <motion.button
            key={item.name}
            onClick={() => setActive(item.name)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={active !== item.name ? { x: 8, scale: 1.02 } : {}}
            className={`group flex items-center px-3 py-2 rounded-md transition ${
              isCollapsed ? "justify-center" : "justify-start gap-3"
            } ${
              active === item.name
                ? "bg-[#1E2A3A] text-white shadow-[0_0_12px_rgba(88,166,255,0.25)]"
                : "hover:bg-[#243040] hover:text-white"
            } ${active === item.name ? "pointer-events-none" : ""}`}
          >
            <motion.span
              whileHover={
                active !== item.name ? { rotate: 3, scale: 1.08 } : {}
              }
              transition={{ type: "spring", stiffness: 260, damping: 15 }}
              className={`${
                active === item.name
                  ? "text-[#8CA9FF]" // active icon color (blue)
                  : "text-[#4A70A9]" // default initial icon color
              }`}
            >
              <item.icon size={19} />

            </motion.span>
            {!isCollapsed && (
              <span
                className={`transition ${
                  active === item.name
                    ? "text-white"
                    : "text-[#5459AC] group-hover:text-white"
                }`}
              >
                {item.name}
              </span>
            )}


          </motion.button>
        ))}
      </nav>

      {/* MORE */}
      <div>
        <motion.button
          onClick={() => {
            setShowMore((prev) => !prev);
            setActive("More");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`group flex items-center px-3 py-2 rounded-md w-full transition ${
            isCollapsed ? "justify-center" : "justify-start gap-3"
          } ${
            active === "More"
              ? "bg-[#1E2A3A] text-white shadow-[0_0_12px_rgba(88,166,255,0.25)]"
              : "hover:bg-[#243040] hover:text-white"
          }`}
        >
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: showMore ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            
          >
            {showMore ? <ChevronUp size={18}  /> : <ChevronDown size={18} className="transition text-[#58A6FF]" />}
          </motion.span>

          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
                className={`text-sm transition ${
    active === "More"
      ? "text-white"
      : "text-[#5459AC] group-hover:text-white"
  }`}
            >
              More
            </motion.span>
          )}
        </motion.button>

        <AnimatePresence>
          {showMore && !isCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -6 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -6 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="ml-5 mt-3 flex flex-col gap-2 overflow-hidden"
            >
              {moreLinks.map((item, idx) => (
                <motion.button
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  whileHover={{
                    x: 6,
                    scale: 1.03,
                    boxShadow: "0px 0px 12px rgba(88,166,255,0.25)",
                    background: "linear-gradient(90deg, #0d1117, #1b2636)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative group flex items-center gap-3 py-1.5 px-2 rounded-md text-xs transition ${
                    active === item.name
                      ? "bg-[#1E2A3A] text-white shadow-[0_0_12px_rgba(88,166,255,0.25)]"
                      : "text-gray-400 hover:bg-[#243040] hover:text-white"
                  }`}
                >
                  {/* Icon animation */}
                  <motion.span
                    whileHover={{ rotate: -8, scale: 1.22 }}
                    transition={{ type: "spring", stiffness: 260, damping: 12 }}
                    className={`${
                      active === item.name
                        ? "text-[#58A6FF]"
                        : "text-gray-400 group-hover:text-[#58A6FF]"
                    }`}
                  >
                    <item.icon size={15} />
                  </motion.span>

                  {/* Name text */}
                  <span className="whitespace-nowrap">{item.name}</span>

                  {/* Animated underline */}
                  <motion.span
                    layoutId="underline"
                    className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#58A6FF] to-[#9b5bff] group-hover:w-full transition-all duration-300 ${
                      active === item.name ? "w-full" : ""
                    }`}
                  />

                  {/* Aura glow on hover */}
                  <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-25 transition duration-300 bg-[#58A6FF] blur-md pointer-events-none" />

                  {/* Click ripple */}
                  <span className="absolute inset-0 rounded-md opacity-0 group-active:opacity-30 transition duration-150 bg-white/20 blur-sm pointer-events-none" />
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

  
      {/* YOUR WORK */}
      <motion.div className="mt-6 border-t border-[#30363D] pt-4">
        <motion.button
          onClick={() => setShowYourWork((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center px-3 py-2 rounded-md w-full transition ${
            isCollapsed ? "justify-center" : "justify-start gap-3"
          } ${showYourWork ? "bg-[#1a2332]" : "hover:bg-[#161B22]"} `}
        >
          <motion.span
            whileHover={{ rotate: 4, scale: 1.12 }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className={`transition ${
    showYourWork
      ? "text-[#8CA9FF]"        // when opened (active)
      : "text-[#4A70A9] group-hover:text-white"   // default + hover
  }`}
          >
            <FileEdit size={18} />
          </motion.span>

          {!isCollapsed && (
            <>
              <motion.span
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                  className={`text-sm transition ${
    showYourWork
      ? "text-white"
      : "text-[#4A70A9] group-hover:text-white"
  }`}
              >
                Your Work
              </motion.span>

              <motion.span
                animate={{ rotate: showYourWork ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className={`ml-auto transition ${
    showYourWork ? "text-[#58A6FF]" : "text-[#B8C2D1]"
  }`}
              >
                {showYourWork ? (
                  <ChevronUp size={16} 

                  />
                ) : (
                  <ChevronDown size={16} 
                  
                  />
                )}
              </motion.span>
            </>
          )}
        </motion.button>

        <AnimatePresence>
          {showYourWork && !isCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
              exit={{ opacity: 0, height: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.5 }}
              className="ml-7 mt-3 flex flex-col gap-2 overflow-hidden"
            >
              {[
                "Pima Indians Diabetes (Viewed)",
                "Titanic Survival Model",
                "House Prices Project",
              ].map((item, idx) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{
                    x: 6,
                    scale: 1.03,
                    boxShadow: "0px 0px 12px rgba(88,166,255,0.25)",
                    background: "linear-gradient(90deg, #0d1117, #1b2636)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="relative group flex items-center gap-2 py-1.5 px-2 rounded-md text-xs text-gray-400 hover:text-white"
                >
                  {/* Bullet / icon */}
                  <motion.span
                    whileHover={{ rotate: -6, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 260, damping: 12 }}
                    className="text-[#58A6FF]"
                  >
                    •
                  </motion.span>

                  <span className="whitespace-nowrap">{item}</span>

                  {/* Animated underline */}
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#58A6FF] to-[#9b5bff] group-hover:w-full transition-all duration-300"
                  />

                  {/* Aura glow */}
                  <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-25 transition duration-300 bg-[#58A6FF] blur-md pointer-events-none" />

                  {/* Ripple */}
                  <span className="absolute inset-0 rounded-md opacity-0 group-active:opacity-30 transition duration-150 bg-white/20 blur-sm pointer-events-none" />
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
