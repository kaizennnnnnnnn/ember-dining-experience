import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import PrivateDiningSection from "@/components/PrivateDiningSection";
import ReservationSection from "@/components/ReservationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ChefSection from "@/components/ChefSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <>
    <Navigation />
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedDishes />
      <MenuSection />
      <GallerySection />
      <PrivateDiningSection />
      <ChefSection />
      <TestimonialsSection />
      <ReservationSection />
      <LocationSection />
    </main>
    <FooterSection />
    <BackToTop />
  </>
);

export default Index;
