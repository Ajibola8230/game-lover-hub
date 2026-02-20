import gameRpg from "@/assets/game-rpg.jpg";
import gameRacing from "@/assets/game-racing.jpg";
import gameScifi from "@/assets/game-scifi.jpg";
import gameShooter from "@/assets/game-shooter.jpg";
import gamePuzzle from "@/assets/game-puzzle.jpg";
import gameHorror from "@/assets/game-horror.jpg";
import type { Game, Category } from "@/types/game";

export const featuredGames: Game[] = [
  {
    id: "1",
    title: "Shadow Blade: Reborn",
    genre: "RPG",
    rating: 4.8,
    image: gameRpg,
    description: "Embark on an epic dark fantasy journey through mystical forests.",
    price: "$49.99",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Neon Velocity",
    genre: "Racing",
    rating: 4.6,
    image: gameRacing,
    description: "Race through neon-lit highways at breakneck speeds.",
    price: "$39.99",
    isFeatured: true,
  },
  {
    id: "3",
    title: "Starfall Command",
    genre: "Sci-Fi",
    rating: 4.9,
    image: gameScifi,
    description: "Command your fleet in epic space battles across the galaxy.",
    price: "$59.99",
    isFeatured: true,
    isNew: true,
  },
];

export const trendingGames: Game[] = [
  {
    id: "4",
    title: "Iron Protocol",
    genre: "Shooter",
    rating: 4.5,
    image: gameShooter,
    description: "Tactical combat in a dystopian future.",
    price: "$44.99",
  },
  {
    id: "5",
    title: "Crystal Realms",
    genre: "Puzzle",
    rating: 4.7,
    image: gamePuzzle,
    description: "Solve mystical puzzles across magical floating islands.",
    price: "$19.99",
    isNew: true,
  },
  {
    id: "6",
    title: "The Hollow",
    genre: "Horror",
    rating: 4.4,
    image: gameHorror,
    description: "Survive the terrors lurking in an abandoned mansion.",
    price: "$34.99",
  },
  {
    id: "1",
    title: "Shadow Blade: Reborn",
    genre: "RPG",
    rating: 4.8,
    image: gameRpg,
    description: "Embark on an epic dark fantasy journey.",
    price: "$49.99",
  },
  {
    id: "2",
    title: "Neon Velocity",
    genre: "Racing",
    rating: 4.6,
    image: gameRacing,
    description: "Race through neon-lit highways.",
    price: "$39.99",
  },
  {
    id: "3",
    title: "Starfall Command",
    genre: "Sci-Fi",
    rating: 4.9,
    image: gameScifi,
    description: "Command your fleet in epic space battles.",
    price: "$59.99",
  },
];

export const categories: Category[] = [
  { id: "1", name: "RPG", icon: "⚔️", count: 234 },
  { id: "2", name: "Racing", icon: "🏎️", count: 156 },
  { id: "3", name: "Shooter", icon: "🎯", count: 312 },
  { id: "4", name: "Puzzle", icon: "🧩", count: 189 },
  { id: "5", name: "Horror", icon: "👻", count: 98 },
  { id: "6", name: "Sci-Fi", icon: "🚀", count: 267 },
];
