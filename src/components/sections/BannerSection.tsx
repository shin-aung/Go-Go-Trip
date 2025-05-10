import { getTranslations } from 'next-intl/server'
import { ImageBannerSection } from '@/assets/images'
import Image from 'next/image'

const Banner = async () => {
  const t = await getTranslations('banner')

  return (
    <section
      id="home"
      className="w-full h-[500px] pt-[80px] mt-20 flex items-center justify-center bg-cover bg-center bg-no-repeat backdrop-blur-md"
    >
      <div className="relative w-full h-[700px] mx-10 mt-32 rounded-xl overflow-hidden">
        <Image
          src={ImageBannerSection}
          alt="Banner"
          fill
          className="object-cover z-20"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="flex">
          <div className="relative z-20 max-w-7xl mx-10 text-white">
            <h1 className="mt-10 text-7xl md:text-9xl font-bold">
              {t('title')}
            </h1>
            <div className="mt-10 md:mt-16">
              <p>{t('description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
