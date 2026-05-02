import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}
export const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  const isMobile = useIsMobile();
  const navLinks = (
    <>
      <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Features
      </a>
      <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
        Testimonials
      </a>
    </>
  );
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2 mr-6">
            <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold text-foreground">Aura</span>
          </a>
        </div>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-6">
                {navLinks}
                <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center space-x-6">
            {navLinks}
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Get Started</Button>
          </nav>
        )}
      </div>
    </header>
  );
};