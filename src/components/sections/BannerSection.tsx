import { getTranslations } from 'next-intl/server'
import { ImageBannerSection } from '@/assets/images'
import Image from 'next/image'
import SplitText from '../ui/animatedText'

const Banner = async () => {
  const t = await getTranslations('banner')

  return (
    <section
      id="home"
      className="w-full pt-20 flex items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      <div className="relative w-full max-w-screen-xl h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] mx-4 sm:mx-6 md:mx-10 rounded-xl overflow-hidden">
        <Image
          src={ImageBannerSection}
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-between h-full px-4 sm:px-6 md:px-10 py-8 text-white">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <SplitText text={t('title')} />
            </h1>
          </div>
          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
