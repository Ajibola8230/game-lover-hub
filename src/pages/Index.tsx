import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeader from "@/components/SectionHeader";
import GameCard from "@/components/GameCard";
import CategoryChip from "@/components/CategoryChip";
import { featuredGames, trendingGames, categories } from "@/data/games";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative mx-4 mt-4 overflow-hidden rounded-2xl md:mx-0 md:rounded-3xl"
      >
        <img
          src={heroBanner}
          alt="Featured gaming world"
          className="h-48 w-full object-cover md:h-72 lg:h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5 md:p-8 lg:p-12">
          <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground md:px-4 md:py-1 md:text-xs">
            FEATURED
          </span>
          <h2 className="mt-2 font-display text-xl font-bold leading-tight text-glow md:text-3xl lg:text-4xl">
            Discover New Worlds
          </h2>
          <p className="mt-1 text-xs text-muted-foreground md:text-sm lg:text-base">
            Explore the latest releases
          </p>
        </div>
      </motion.section>

      {/* Categories */}
      <section className="mt-6 md:mt-8">
        <SectionHeader title="Categories" />
        <div className="mt-3 flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide md:grid md:grid-cols-6 md:gap-4 md:overflow-visible md:px-0">
          {categories.map((cat, i) => (
            <CategoryChip key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>

      {/* Featured Games */}
      <section className="mt-6 md:mt-8">
        <SectionHeader title="Featured Games" />
        <div className="mt-3 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {featuredGames.map((game, i) => (
            <GameCard key={game.id} game={game} variant="featured" index={i} />
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="mt-6 md:mt-8">
        <SectionHeader title="Trending Now" action="View All" />
        <div className="mt-3 grid grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-4 md:gap-4 md:px-0 lg:grid-cols-4">
          {trendingGames.slice(0, 4).map((game, i) => (
            <GameCard key={`${game.id}-trending-${i}`} game={game} index={i} />
          ))}
        </div>
      </section>

      {/* Top Rated */}
      <section className="mt-6 mb-4 md:mt-8">
        <SectionHeader title="Top Rated" />
        <div className="mt-3 space-y-1 px-4 md:grid md:grid-cols-2 md:gap-2 md:space-y-0 md:px-0 lg:grid-cols-4">
          {trendingGames.slice(0, 4).map((game, i) => (
            <GameCard key={`${game.id}-top-${i}`} game={game} variant="compact" index={i} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
