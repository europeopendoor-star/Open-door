import { motion } from "motion/react";

const PageHeader = ({ title, subtitle, bgImage }: { title: string, subtitle: string, bgImage: string }) => (
  <header className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 z-0">
      <img
        alt={title}
        className="w-full h-full object-cover"
        src={bgImage}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-lg"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-white/90 text-sm md:text-base tracking-widest uppercase font-medium"
      >
        {subtitle}
      </motion.p>
    </div>
  </header>
);

export default PageHeader;
