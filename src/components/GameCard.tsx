import { Star, Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Game } from "@/types/game";

interface GameCardProps {
  game: Game;
  variant?: "default" | "compact" | "featured";
  index?: number;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

const FavButton = ({ isFavorite, onToggle }: { isFavorite?: boolean; onToggle?: () => void }) => {
  if (!onToggle) return null;
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onToggle(); }}
      className="absolute right-2 top-2 z-10 rounded-full bg-background/60 p-1.5 backdrop-blur-sm transition-colors hover:bg-background/80"
    >
      <Heart className={`h-4 w-4 ${isFavorite ? "fill-primary text-primary" : "text-muted-foreground"}`} />
    </button>
  );
};

const GameCard = ({ game, variant = "default", index = 0, isFavorite, onToggleFavorite }: GameCardProps) => {
  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        className="relative min-w-[280px] snap-center overflow-hidden rounded-xl md:min-w-0"
      >
        <FavButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
        <img src={game.image} alt={game.title} className="h-[360px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {game.isNew && (
            <span className="mb-2 inline-block rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">NEW</span>
          )}
          <h3 className="font-display text-lg font-bold">{game.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{game.description}</p>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-semibold">{game.rating}</span>
            </div>
            <span className="font-display text-sm font-bold text-primary">{game.price}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
      >
        <img src={game.image} alt={game.title} className="h-16 w-16 rounded-lg object-cover" />
        <div className="flex-1 min-w-0">
          <h4 className="truncate font-display text-sm font-semibold">{game.title}</h4>
          <p className="text-xs text-muted-foreground">{game.genre}</p>
          <div className="mt-0.5 flex items-center gap-1">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="text-xs">{game.rating}</span>
          </div>
        </div>
        <span className="font-display text-xs font-bold text-primary">{game.price}</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="glass-card group relative overflow-hidden rounded-xl transition-all hover:border-glow"
    >
      <div className="relative overflow-hidden">
        <FavButton isFavorite={isFavorite} onToggle={onToggleFavorite} />
        <img src={game.image} alt={game.title} className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        {game.isNew && (
          <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">NEW</span>
        )}
      </div>
      <div className="p-3">
        <h4 className="truncate font-display text-sm font-semibold">{game.title}</h4>
        <p className="text-xs text-muted-foreground">{game.genre}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="text-xs font-medium">{game.rating}</span>
          </div>
          <span className="font-display text-xs font-bold text-primary">{game.price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;
