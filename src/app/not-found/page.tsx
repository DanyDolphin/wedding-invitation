// Next
import Image from 'next/image'

// Components
import Section from '@/components/Section'

// Images
import background from '@images/section-background.png'
import leaf from '@images/leaf.svg'

const NotFoundPage = () => {
  return (
    <Section
      backgroundImage={background}
      className="h-screen flex flex-col items-center justify-center text-8xl"
    >
      <h1 className="flex items-end relative">
        <Image
          src={leaf}
          alt="leaf"
          className="absolute left-1/2 h-60 hero-leaf"
        />
        <span className="font-head1">A</span>
        <div className="w-20"></div>
        <span className="font-head1">M</span>
      </h1>
      <h2 className="font-head2 font-thin text-xl tracking-[0.3em] mt-8">
        Lo sentimos, no te encontramos en la lista de invitados
      </h2>
      <p className="font-body2 font-thin text-xl tracking-[0.3em] mt-4">
        Comunícate con Allison o Mario para resolver el malentendido
      </p>
    </Section>
  )
}

export default NotFoundPage
