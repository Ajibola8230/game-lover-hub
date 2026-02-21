import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import GameCard from "@/components/GameCard";
import { featuredGames, trendingGames } from "@/data/games";
import { useFavorites } from "@/hooks/useFavorites";

const allGames = [...featuredGames, ...trendingGames];

const Favorites = () => {
  const { favoriteIds, toggleFavorite, isFavorite } = useFavorites();

  const favoriteGames = allGames.filter((g) => favoriteIds.has(g.id));
  const uniqueFavorites = Array.from(new Map(favoriteGames.map((g) => [g.id, g])).values());

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-4 pt-4 md:px-0"
      >
        <h2 className="font-display text-xl font-bold md:text-2xl">Your Favorites</h2>
        <p className="text-sm text-muted-foreground">Games you love</p>

        {uniqueFavorites.length > 0 ? (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
            {uniqueFavorites.map((game, i) => (
              <GameCard
                key={game.id}
                game={game}
                index={i}
                isFavorite={isFavorite(game.id)}
                onToggleFavorite={() => toggleFavorite(game.id)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-20 flex flex-col items-center text-center">
            <Heart className="h-12 w-12 text-muted-foreground" />
            <p className="mt-3 font-display text-sm text-muted-foreground">
              No favorites yet — start adding some!
            </p>
          </div>
        )}
      </motion.div>
    </PageLayout>
  );
};

export default Favorites;
