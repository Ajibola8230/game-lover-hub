import DesktopNav from "@/components/DesktopNav";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen bg-background">
    {/* Desktop nav - hidden on mobile */}
    <DesktopNav />
    {/* Mobile header - hidden on desktop */}
    <div className="md:hidden">
      <AppHeader />
    </div>

    <main className="mx-auto max-w-7xl pb-20 md:px-6 md:pb-8 md:pt-4">
      {children}
    </main>

    {/* Mobile bottom nav - hidden on desktop */}
    <div className="md:hidden">
      <BottomNav />
    </div>
  </div>
);

export default PageLayout;
