import { Bell, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

const AppHeader = () => (
  <motion.header
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="sticky top-0 z-40 glass-card px-4 py-3"
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Gamepad2 className="h-6 w-6 text-primary" />
        <h1 className="font-display text-lg font-bold tracking-wider">
          <span className="text-primary">GAME</span>{" "}
          <span className="text-foreground">LOVER</span>
        </h1>
      </div>
      <button className="relative rounded-full p-2 transition-colors hover:bg-secondary">
        <Bell className="h-5 w-5 text-muted-foreground" />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary animate-pulse-neon" />
      </button>
    </div>
  </motion.header>
);

export default AppHeader;
