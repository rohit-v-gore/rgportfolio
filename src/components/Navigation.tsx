import { NavLink } from "./NavLink";

const Navigation = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Career", path: "/career" },
    { name: "Education", path: "/education" },
    { name: "Fitness", path: "/fitness" },
    { name: "Travel", path: "/travel" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-lg font-bold tracking-wider text-foreground">ROHIT GORE</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  activeClassName="text-primary border-b-2 border-primary"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
