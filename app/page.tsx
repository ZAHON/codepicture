import { Header, HeroSection, FeaturesSection, Footer } from './components';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="px-4 lg:mx-auto lg:max-w-7xl">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}
