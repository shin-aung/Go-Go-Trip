import { getTranslations } from 'next-intl/server'

type Section = {
  title: string
  content: string
}

const sectionKey = ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour']

const AboutSection = async () => {
  const t = await getTranslations('about')

  const sections: Section[] = sectionKey.map((key) => ({
    title: t(`${key}.title`),
    content: t(`${key}.content`),
  }))

  return (
    <section
      id="about"
      className="w-full pt-20 px-4 md:px-10 bg-white"
    >
      <h1 className="text-center text-3xl font-bold mb-10">{t('title')}</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl shadow-md bg-gray-50 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
