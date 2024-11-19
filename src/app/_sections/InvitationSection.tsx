// Next
import Image from 'next/image'

// React
import { FC } from 'react'

// Components
import Section from '@/components/Section'

// Images
import background from '@images/section-background.png'
import leafs from '@images/leafs.webp'
import { Guest } from '@/types'

interface InvitationSectionProps {
  guest?: Guest
}

const InvitationSection: FC<InvitationSectionProps> = ({ guest }) => {
  return (
    <Section
      backgroundImage={background}
      className="flex flex-col items-center"
    >
      <p className="mt-20 font-body2 tracking-widest text-lg enter-animation enter-fade-up">
        Nos complace extender esta invitacion a
      </p>
      <h2 className="text-accent font-head1 text-5xl mt-10 text-center leading-normal enter-animation enter-fade-up">
        {guest?.name}
      </h2>
      <p className="mt-20 font-handwritting text-3xl">- te esperamos -</p>
      <Image
        src={leafs}
        alt="Leafs"
        className="mt-5 max-w-[1000px] w-full enter-animation enter-fade-up"
      />
    </Section>
  )
}

export default InvitationSection
