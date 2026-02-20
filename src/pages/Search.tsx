import { motion } from "framer-motion";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import GameCard from "@/components/GameCard";
import { trendingGames } from "@/data/games";

const Search = () => {
  const [query, setQuery] = useState("");

  const filtered = trendingGames.filter((g) =>
    g.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader />

      <div className="px-4 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search games..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-border bg-secondary py-3 pl-10 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </motion.div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {filtered.map((game, i) => (
            <GameCard key={`${game.id}-search-${i}`} game={game} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-20 text-center">
            <p className="font-display text-sm text-muted-foreground">
              No games found
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Search;
