import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import CategoryChip from "@/components/CategoryChip";
import GameCard from "@/components/GameCard";
import SectionHeader from "@/components/SectionHeader";
import { categories, trendingGames } from "@/data/games";

const Categories = () => (
  <PageLayout>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-4 pt-4 md:px-0"
    >
      <h2 className="font-display text-xl font-bold md:text-2xl">Browse Games</h2>
      <p className="text-sm text-muted-foreground">Find your next adventure</p>

      <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">
        {categories.map((cat, i) => (
          <CategoryChip key={cat.id} category={cat} index={i} />
        ))}
      </div>
    </motion.div>

    <section className="mt-6 md:mt-8">
      <SectionHeader title="All Games" />
      <div className="mt-3 grid grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-4 md:gap-4 md:px-0 lg:grid-cols-5">
        {trendingGames.map((game, i) => (
          <GameCard key={`${game.id}-cat-${i}`} game={game} index={i} />
        ))}
      </div>
    </section>
  </PageLayout>
);

export default Categories;
