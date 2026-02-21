import { NavLink, useLocation } from "react-router-dom";
import { Home, Search, Gamepad2, Heart, User, Gamepad } from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/search", icon: Search, label: "Search" },
  { to: "/categories", icon: Gamepad2, label: "Games" },
  { to: "/favorites", icon: Heart, label: "Favorites" },
  { to: "/profile", icon: User, label: "Profile" },
];

const DesktopNav = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 hidden md:block glass-card border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <Gamepad className="h-7 w-7 text-primary" />
          <h1 className="font-display text-xl font-bold tracking-wider">
            <span className="text-primary">GAME</span>{" "}
            <span className="text-foreground">LOVER</span>
          </h1>
        </div>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default DesktopNav;
