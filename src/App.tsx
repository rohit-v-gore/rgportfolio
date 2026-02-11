import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Career from "./pages/Career";
import Education from "./pages/Education";
import Fitness from "./pages/Fitness";
import Travel from "./pages/Travel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/career" element={<Career />} />
            <Route path="/education" element={<Education />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <footer className="border-t border-border bg-background/80 py-10">
          <div className="container mx-auto flex flex-wrap items-center gap-3 px-6 text-sm text-muted-foreground">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground/80">CONTACT</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/rohit-v-gore"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground transition hover:border-primary hover:text-primary"
              >
                GitHub
              </a>
              <a
                href="https://x.com/rohitvgore"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground transition hover:border-primary hover:text-primary"
              >
                X
              </a>
              <a
                href="https://www.linkedin.com/in/rohitvgore"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground transition hover:border-primary hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href="mailto:rohitvivekgore@gmail.com"
                className="rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground transition hover:border-primary hover:text-primary"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
