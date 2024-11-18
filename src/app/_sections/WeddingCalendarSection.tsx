// Next
import Image from 'next/image'

// Components
import Section from '@/components/Section'

// Images
import leaf2 from '@images/leaf2.webp'
import leaf3 from '@images/leaf3.webp'

const WeddingCalendarSection = () => {
  return (
    <Section className="flex flex-col items-center">
      <Image
        src={leaf2}
        alt="Leaf"
        className="h-48 object-contain rotate-180"
      />
      <h1 className="font-head1 text-center my-10 text-4xl leading-relaxed tracking-wide">
        Allison Pedraza
        <br />
        <span className="font-head3 text-3xl">&</span>
        <br />
        Mario Castillo
      </h1>
      <p className="font-body2 uppercase tracking-widest">
        15 febrero 2025 | 5:00 pm
      </p>
      <hr className="w-1/2" />
      <button className="font-body2 mb-10">Agregar al calendario</button>
      <Image src={leaf3} alt="Leaf" className="h-48 object-contain" />
    </Section>
  )
}

export default WeddingCalendarSection
