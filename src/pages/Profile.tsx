import { motion } from "framer-motion";
import { Settings, ChevronRight, Trophy, Clock, Download, LogOut } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { icon: Trophy, label: "Achievements", value: "24" },
  { icon: Clock, label: "Play Time", value: "142h" },
  { icon: Download, label: "Downloads", value: "18" },
  { icon: Settings, label: "Settings", value: "" },
];

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const displayName = user?.user_metadata?.display_name || "Gamer";
  const initials = displayName.slice(0, 2).toUpperCase();

  const handleLogout = async () => {
    await signOut();
    navigate("/auth");
  };

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 pt-6 md:px-0"
      >
        <div className="md:flex md:items-start md:gap-8">
          {/* Avatar */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary neon-border border-glow md:h-24 md:w-24">
                <span className="font-display text-2xl font-bold text-primary md:text-3xl">{initials}</span>
              </div>
              <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-primary border-2 border-background" />
            </div>
            <h2 className="mt-3 font-display text-lg font-bold md:text-xl">{displayName}</h2>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>

          {/* Stats + Menu on desktop side-by-side */}
          <div className="mt-6 flex-1 md:mt-0">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { label: "Games", value: "18" },
                { label: "Friends", value: "256" },
                { label: "Hours", value: "1.2K" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl py-3 text-center">
                  <p className="font-display text-lg font-bold text-primary">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Menu */}
            <div className="mt-6 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-secondary"
                >
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
                  {item.value && (
                    <span className="text-xs text-muted-foreground">{item.value}</span>
                  )}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}

              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-destructive transition-colors hover:bg-secondary"
              >
                <LogOut className="h-5 w-5" />
                <span className="flex-1 text-left text-sm font-medium">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Profile;
