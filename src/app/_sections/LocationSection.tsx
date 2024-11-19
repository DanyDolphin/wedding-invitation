// Next
import Image from 'next/image'

// Component
import Section from '@/components/Section'

// images
import paper from '@images/paper.png'
import dandelion from '@images/dandelion.png'
import airplane from '@images/airplane.png'

const LocationSection = () => {
  return (
    <Section className="w-screen flex flex-col items-center justify-items-center">
      <div className="relative my-20">
        <Image
          src={paper}
          alt="Paper"
          className="h-[473px] object-cover sm:object-contain -z-10"
        />
        <div className="absolute top-0 left-0 w-full flex flex-col items-center">
          <Image
            src={dandelion}
            alt="Dandelion"
            className="h-28 object-contain mt-10"
          />
          <p className="font-head1 tracking-widest text-xl text-center mt-4">
            Todo se llevará a cabo en el
            <br />
            mismo lugar
          </p>
          <a
            role="button"
            target="_blank"
            href="https://maps.app.goo.gl/KDU67L3Fysir3edu5"
            className="inline-block mt-10 uppercase font-body2 px-32"
          >
            ubicación
          </a>
          <p className="text-center font-body2 text-xl mt-2">
            Hacienda del Marqués, Saldarriaga, Querétaro.
          </p>
          <Image
            src={airplane}
            alt="Airplane"
            className="w-80 translate-y-14"
          />
        </div>
      </div>
    </Section>
  )
}

export default LocationSection
