import { getTranslations } from 'next-intl/server'

type TripPackage = {
  title: string
  dateAndTime: string
  cost: string
  description: string
}

const tripPackageKeys = ['tripPackageOne']

const TripPackageSection = async () => {
  const t = await getTranslations('tripPackages')

  const tripPackages: TripPackage[] = await Promise.all(
    tripPackageKeys.map((key) => ({
      title: t(`${key}.title`),
      dateAndTime: t(`${key}.dateAndTime`),
      cost: t(`${key}.cost`),
      description: t(`${key}.description`),
    }))
  )

  return (
    <section id="tripPackages" className="w-full pt-20 px-4 md:px-10 bg-white">
      <h1 className="text-center mb-8">{t('title')}</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {tripPackages.map((tripPackage, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl shadow-md bg-gray-50 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{tripPackage.title}</h2>
            <p className="text-gray-600 mb-1">{tripPackage.dateAndTime}</p>
            <p className="text-gray-600 mb-1">{tripPackage.cost}</p>
            <p className="text-gray-700">{tripPackage.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TripPackageSection
