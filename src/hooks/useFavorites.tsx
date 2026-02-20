import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export const useFavorites = () => {
  const { user } = useAuth();
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  const fetchFavorites = useCallback(async () => {
    if (!user) {
      setFavoriteIds(new Set());
      return;
    }
    setLoading(true);
    const { data } = await supabase
      .from("favorites")
      .select("game_id")
      .eq("user_id", user.id);
    setFavoriteIds(new Set(data?.map((f) => f.game_id) ?? []));
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const toggleFavorite = async (gameId: string) => {
    if (!user) return false;

    if (favoriteIds.has(gameId)) {
      await supabase.from("favorites").delete().eq("user_id", user.id).eq("game_id", gameId);
      setFavoriteIds((prev) => {
        const next = new Set(prev);
        next.delete(gameId);
        return next;
      });
    } else {
      await supabase.from("favorites").insert({ user_id: user.id, game_id: gameId });
      setFavoriteIds((prev) => new Set(prev).add(gameId));
    }
    return true;
  };

  const isFavorite = (gameId: string) => favoriteIds.has(gameId);

  return { favoriteIds, isFavorite, toggleFavorite, loading };
};
