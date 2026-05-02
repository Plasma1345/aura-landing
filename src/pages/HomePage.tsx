import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Zap, Globe, Heart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Header } from '@/components/Header'; // Assuming Header is created in a separate file
// --- Section Components ---
const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36 bg-hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Unlock Your <span className="text-indigo-600 dark:text-indigo-400">Potential</span>
          <br className="hidden sm:inline" /> with Aura
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          Aura transforms your workflow, offering unparalleled efficiency and intuitive design.
          Experience the future of productivity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          <Button
            size="lg"
            className="group px-8 py-3 text-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
const FeatureCard: React.FC<{ icon: React.ElementType; title: string; description: string; delay: number }> = ({
  icon: Icon,
  title,
  description,
  delay,
}) => (
  <motion.div
    className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay, duration: 0.6, ease: 'easeOut' }}
  >
    <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-4">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);
const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Intuitive Interface',
      description: 'Streamlined design for effortless navigation and a pleasant user experience.',
    },
    {
      icon: Zap,
      title: 'Blazing Fast Performance',
      description: 'Optimized for speed, Aura ensures a seamless and responsive experience.',
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Access your work from anywhere, on any device, with full synchronization.',
    },
    {
      icon: Heart,
      title: 'Delightful Experience',
      description: 'Crafted with care to make your daily tasks enjoyable and productive.',
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Powerful Features, Simplified
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Aura is packed with features designed to boost your productivity without the complexity.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          What Our Users Say
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Card className="p-8 md:p-10 text-left bg-white dark:bg-card shadow-lg border-none">
            <CardContent className="p-0">
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground italic mb-6">
                "Switching to Aura was a game-changer for our team. The elegant design and powerful features have
                significantly improved our collaboration and overall efficiency. Highly recommended!"
              </blockquote>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/8.x/initials/svg?seed=JD"
                  alt="John Doe"
                  className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-500"
                />
                <div>
                  <p className="font-semibold text-foreground">John Doe</p>
                  <p className="text-sm text-muted-foreground">CEO, InnovateTech</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
const CtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-indigo-600 dark:bg-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Ready to Elevate Your Productivity?
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-10 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Join thousands of satisfied users who have transformed their work with Aura.
          Get started today and experience the difference.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
        >
          <Button
            size="lg"
            className="group px-10 py-4 text-xl font-bold bg-white text-indigo-600 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95"
          >
            Start Your Free Trial <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 md:py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="mb-6">
          <span className="text-xl font-bold text-foreground">Aura</span>
        </div>
        <nav className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-foreground transition-colors text-sm">Features</a>
          <a href="#" className="hover:text-foreground transition-colors text-sm">Testimonials</a>
          <a href="#" className="hover:text-foreground transition-colors text-sm">Pricing</a>
          <a href="#" className="hover:text-foreground transition-colors text-sm">Contact</a>
        </nav>
        <p className="text-sm">&copy; {new Date().getFullYear()} Aura. All rights reserved.</p>
      </div>
    </footer>
  );
};
export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
      <ThemeToggle className="fixed bottom-4 right-4 z-50" />
    </div>
  );
}