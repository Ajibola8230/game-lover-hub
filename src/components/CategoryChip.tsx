import { motion } from "framer-motion";
import type { Category } from "@/types/game";

interface CategoryChipProps {
  category: Category;
  index?: number;
}

const CategoryChip = ({ category, index = 0 }: CategoryChipProps) => (
  <motion.button
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.06 }}
    className="glass-card flex flex-col items-center gap-1.5 rounded-xl px-5 py-3 transition-all hover:border-glow hover:neon-border md:py-4"
  >
    <span className="text-2xl">{category.icon}</span>
    <span className="font-display text-xs font-semibold">{category.name}</span>
    <span className="text-[10px] text-muted-foreground">{category.count} games</span>
  </motion.button>
);

export default CategoryChip;
