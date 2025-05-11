import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { ImageBannerSection } from '@/assets/images'

const Banner = async () => {
  const t = await getTranslations('banner')

  return (
    <section
      id="home"
      className="w-full pt-[80px] flex items-center justify-center"
    >
      <div className="relative w-full max-w-7xl aspect-[16/9] sm:aspect-[21/9] mx-4 md:mx-10 rounded-xl overflow-hidden">
        <Image
          src={ImageBannerSection}
          alt="Banner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 px-4 sm:px-10 py-10 text-white">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            {t('title')}
          </h1>
          <p className="mt-6 sm:mt-10 text-base sm:text-lg md:text-xl max-w-2xl">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Banner
