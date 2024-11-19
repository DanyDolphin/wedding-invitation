// Next
import Image from 'next/image'

// Components
import Section from '@/components/Section'

// Images
import background from '@images/section-background.png'
import leaf from '@images/leaf.svg'
import InvitationGenerator from '@/components/InvitationGenerator'

const InvitationsPage = () => {
  return (
    <Section
      backgroundImage={background}
      className="h-screen flex flex-col items-center justify-center"
    >
      <h1 className="flex items-end relative text-8xl">
        <Image
          src={leaf}
          alt="leaf"
          className="absolute left-1/2 h-60 hero-leaf"
        />
        <span className="font-head1">A</span>
        <div className="w-20"></div>
        <span className="font-head1">M</span>
      </h1>
      <InvitationGenerator />
    </Section>
  )
}

export default InvitationsPage
