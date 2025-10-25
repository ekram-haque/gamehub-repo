import { motion } from "framer-motion";

const LoadingAnim = () => {
  const letters = ["G", "a", "m", "e", "H", "u", "b"];

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.4,
        type: "spring",
        stiffness: 300,
      },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0b0b15]">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.08, 1], opacity: [1, 0.8, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex gap-2"
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className={`text-6xl font-extrabold drop-shadow-[0_0_15px_rgba(255,0,255,0.8)] ${
              i < 4
                ? "text-purple-500 shadow-purple-500"
                : "text-pink-500 shadow-pink-500"
            }`}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-6 text-sm text-gray-400 tracking-widest"
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default LoadingAnim;
