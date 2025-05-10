import Banner from '@/components/sections/BannerSection'
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
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
