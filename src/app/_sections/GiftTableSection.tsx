// Next
import Image from 'next/image'

// Components
import Section from '@/components/Section'

// Images
import dandelion2 from '@images/dandelion2.png'

const GiftTableSection = () => {
  return (
    <Section className="flex flex-col items-center">
      <div className="w-96 my-40 relative">
        <Image
          src={dandelion2}
          alt="Dandelion"
          className="absolute object-contain -bottom-10 left-1/2 -translate-x-1/2 -z-10 h-80"
        />
        <h1 className="font-head1 text-3xl uppercase text-center">
          Mesa de regalos
        </h1>
        <hr className="w-full my-8" />
        <a role="button" className="w-full block font-body2 text-3xl mt-14">
          Liverpool
        </a>
        <a role="button" className="w-full block font-body2 text-3xl mt-14">
          Cuenta Bancaria
        </a>
        <a role="button" className="w-full block font-body2 text-3xl mt-14">
          Regalo presencial
        </a>
      </div>
    </Section>
  )
}

export default GiftTableSection
