import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import CategoryChip from "@/components/CategoryChip";
import GameCard from "@/components/GameCard";
import SectionHeader from "@/components/SectionHeader";
import { categories, trendingGames } from "@/data/games";

const Categories = () => (
  <div className="min-h-screen bg-background pb-20">
    <AppHeader />

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-4 pt-4"
    >
      <h2 className="font-display text-xl font-bold">Browse Games</h2>
      <p className="text-sm text-muted-foreground">Find your next adventure</p>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {categories.map((cat, i) => (
          <CategoryChip key={cat.id} category={cat} index={i} />
        ))}
      </div>
    </motion.div>

    <section className="mt-6">
      <SectionHeader title="All Games" />
      <div className="mt-3 grid grid-cols-2 gap-3 px-4 sm:grid-cols-3">
        {trendingGames.map((game, i) => (
          <GameCard key={`${game.id}-cat-${i}`} game={game} index={i} />
        ))}
      </div>
    </section>

    <BottomNav />
  </div>
);

export default Categories;
