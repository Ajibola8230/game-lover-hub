import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import GameCard from "@/components/GameCard";
import { featuredGames } from "@/data/games";

const Favorites = () => (
  <div className="min-h-screen bg-background pb-20">
    <AppHeader />

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-4 pt-4"
    >
      <h2 className="font-display text-xl font-bold">Your Favorites</h2>
      <p className="text-sm text-muted-foreground">Games you love</p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {featuredGames.map((game, i) => (
          <GameCard key={game.id} game={game} index={i} />
        ))}
      </div>

      {featuredGames.length === 0 && (
        <div className="mt-20 flex flex-col items-center text-center">
          <Heart className="h-12 w-12 text-muted-foreground" />
          <p className="mt-3 font-display text-sm text-muted-foreground">
            No favorites yet
          </p>
        </div>
      )}
    </motion.div>

    <BottomNav />
  </div>
);

export default Favorites;
