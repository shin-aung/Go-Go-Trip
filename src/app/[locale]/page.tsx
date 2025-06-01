import AboutSection from '@/components/sections/AboutSection'
import Banner from '@/components/sections/BannerSection'
import TouristAttractionsSection from '@/components/sections/TouriseAttractionsSection'
import TripPackageSection from '@/components/sections/TripPackageSection'
import Footer from '@/components/ui/footer/Footer'
import Navbar from '@/components/ui/navigation/Navbar'

const Home = async () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-full flex-1">
        <div className="w-full items-center justify-items-center min-h-screen">
          <Banner />
          <AboutSection />
          <TripPackageSection />
          <TouristAttractionsSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
