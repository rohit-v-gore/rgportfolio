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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-0">
          <div className="flex items-center justify-between">
            <span className="text-base font-bold tracking-wider text-foreground sm:text-lg">
              ROHIT GORE
            </span>
          </div>

          <div className="-mx-4 overflow-x-auto px-4 pb-1 hide-scrollbar sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
            <div className="flex w-max items-center gap-2 sm:w-auto sm:gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="whitespace-nowrap rounded-full border border-transparent bg-transparent px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary/70 hover:text-foreground sm:rounded-none sm:px-4 sm:py-2 sm:text-muted-foreground sm:hover:bg-transparent sm:hover:text-primary"
                  activeClassName="bg-secondary/80 text-foreground border-border sm:bg-transparent sm:border-transparent sm:text-primary sm:border-b-2 sm:border-primary"
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
