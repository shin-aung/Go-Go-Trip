import { getTranslations } from 'next-intl/server'
import AttractionCarousel from '../ui/ProjectCarousel'

type TouristAttraction = {
  name: string
  src: string
  location: string
  about: string
  history: string
  flags?: string[]
}

const touristAttractionsKeys = ['touristAttractionOne']

const TouristAttractionsSection = async () => {
  const t = await getTranslations('touristAttraction')

  const touristAttraction = {
    title: t('title'),
    introduction: t('introduction'),
    location: t('location'),
    about: t('about'),
    history: t('history'),
  }

  const touristAttractions: TouristAttraction[] = await Promise.all(
    touristAttractionsKeys.map(async (key) => ({
      name: t(`touristAttractions.${key}.name`),
      src: t(`touristAttractions.${key}.src`),
      location: t(`touristAttractions.${key}.location`),
      about: t(`touristAttractions.${key}.about`),
      history: t(`touristAttractions.${key}.history`),
      flags: Object.values(await t.raw(`touristAttractions.${key}.flags`)),
    }))
  )

  return (
    <section id="ourProject" className="w-full min-h-screen py-16">
      <div className="w-full mx-auto px-4 text-center">
        <h1 className="text-center mb-12">{touristAttraction.title}</h1>
        <p className="mb-12">{touristAttraction.introduction}</p>
      </div>

      <div className="w-full mx-auto px-4">
        <AttractionCarousel
          attractions={touristAttractions}
          texts={touristAttraction}
        />
      </div>
    </section>
  )
}

export default TouristAttractionsSection
