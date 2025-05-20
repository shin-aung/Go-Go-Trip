import { getTranslations } from 'next-intl/server'
import { Info, Target, Users, Rocket } from 'lucide-react' // Replace with icons that match your content
import { JSX } from 'react/jsx-runtime'

type Section = {
  title: string
  content: string
  icon: JSX.Element
}

const sectionKey = ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour']

const iconList = [<Info />, <Target />, <Users />, <Rocket />]

const AboutSection = async () => {
  const t = await getTranslations('about')

  const sections: Section[] = sectionKey.map((key, i) => ({
    title: t(`${key}.title`),
    content: t(`${key}.content`),
    icon: iconList[i],
  }))

  return (
    <section id="about" className="w-full pt-20 px-4 md:px-10 bg-white">
      <h1 className="text-center mb-10">{t('title')}</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl shadow-md bg-gray-50 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6">{section.icon}</div>
              <h2>{section.title}</h2>
            </div>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection