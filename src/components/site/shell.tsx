import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { FilmProgress } from "@/components/site/progress";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bg text-fg">
      <div className="grain" aria-hidden />
      <FilmProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg p-3 sm:hidden">
        <Button className="w-full" asChild>
          <Link to="/book">Hold the date</Link>
        </Button>
      </div>
    </div>
  );
}
