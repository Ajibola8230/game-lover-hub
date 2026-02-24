import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Heart, ShoppingCart, Download, Share2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { featuredGames, trendingGames } from "@/data/games";
import GameCard from "@/components/GameCard";
import { useFavorites } from "@/hooks/useFavorites";
import { useAuth } from "@/hooks/useAuth";

const allGames = [...featuredGames, ...trendingGames];

const GameDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();

  const game = allGames.find((g) => g.id === id);

  if (!game) {
    return (
      <PageLayout>
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <h2 className="font-display text-xl font-bold">Game Not Found</h2>
          <p className="mt-2 text-sm text-muted-foreground">This game doesn't exist.</p>
          <Button onClick={() => navigate("/")} className="mt-4" variant="outline">
            Go Home
          </Button>
        </div>
      </PageLayout>
    );
  }

  const isFav = isFavorite(game.id);
  const relatedGames = allGames
    .filter((g) => g.genre === game.genre && g.id !== game.id)
    .slice(0, 4);

  return (
    <PageLayout>
      {/* Hero image */}
      <div className="relative">
        <img
          src={game.image}
          alt={game.title}
          className="h-56 w-full object-cover md:h-80 lg:h-[420px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-3 top-3 z-10 rounded-full bg-background/60 p-2 backdrop-blur-sm transition-colors hover:bg-background/80 md:left-6 md:top-6"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Share button */}
        <button
          className="absolute right-3 top-3 z-10 rounded-full bg-background/60 p-2 backdrop-blur-sm transition-colors hover:bg-background/80 md:right-6 md:top-6"
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title: game.title, url: window.location.href });
            }
          }}
        >
          <Share2 className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative -mt-16 z-10 px-4 md:px-0"
      >
        <div className="mx-auto max-w-2xl">
          {/* Title section */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              {game.isNew && (
                <span className="mb-1 inline-block rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground">
                  NEW
                </span>
              )}
              <h1 className="font-display text-2xl font-bold leading-tight md:text-3xl">
                {game.title}
              </h1>
              <p className="mt-0.5 text-sm text-muted-foreground">{game.genre}</p>
            </div>
            {user && (
              <button
                onClick={() => toggleFavorite(game.id)}
                className="mt-1 rounded-full bg-secondary p-2.5 transition-colors hover:bg-secondary/80"
              >
                <Heart
                  className={`h-5 w-5 ${isFav ? "fill-primary text-primary" : "text-muted-foreground"}`}
                />
              </button>
            )}
          </div>

          {/* Rating & Price row */}
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-semibold">{game.rating}</span>
            </div>
            <span className="font-display text-xl font-bold text-primary">{game.price}</span>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              About
            </h3>
            <p className="mt-2 leading-relaxed text-foreground/80">
              {game.description} Experience immersive gameplay with stunning visuals,
              deep narrative elements, and hours of engaging content. Challenge yourself
              with multiple difficulty modes and unlock exclusive rewards as you progress.
            </p>
          </div>

          {/* Details grid */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { label: "Genre", value: game.genre },
              { label: "Rating", value: `${game.rating}/5.0` },
              { label: "Size", value: "4.2 GB" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-secondary/50 p-3 text-center"
              >
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 font-display text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex gap-3">
            <Button className="flex-1 gap-2" size="lg">
              <ShoppingCart className="h-4 w-4" />
              Buy Now — {game.price}
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Demo
            </Button>
          </div>

          {/* Related games */}
          {relatedGames.length > 0 && (
            <div className="mt-8 mb-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                More in {game.genre}
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
                {relatedGames.map((g, i) => (
                  <div key={g.id} onClick={() => navigate(`/game/${g.id}`)} className="cursor-pointer">
                    <GameCard game={g} index={i} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default GameDetail;
