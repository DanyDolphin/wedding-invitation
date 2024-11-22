// Next
import Image from 'next/image'

// Components
import Section from '@/components/Section'

// Images
import background from '@images/section-background.png'
import branch from '@images/branch.png'
import wedding from '@images/wedding.svg'
import coups from '@images/coups.svg'
import plate from '@images/plate.svg'
import party from '@images/party.svg'
import leaf4 from '@images/leaf4.png'

const ScheduleSection = () => {
  return (
    <Section
      backgroundImage={background}
      className="flex flex-col items-center"
    >
      <div className="flex items-center justify-center">
        <Image src={branch} alt="Branch" className="h-64 object-contain" />
        <div className="flex flex-col items-center">
          <h1 className="font-head1 text-3xl uppercase text-center mt-20">
            Itinerario
          </h1>
          <hr className="my-10" />
          <div className="grid grid-cols-3 gap-8 justify-items-center items-center mb-20">
            <Image
              src={wedding}
              alt="Wedding"
              className="col-start-2 h-14 enter-animation enter-fade-up"
            />
            <p className="font-body2 text-base text-accent uppercase text-center tracking-widest enter-animation enter-fade-up">
              Ceremonia <br /> 5:oo pm
            </p>
            <p className="font-body2 text-base text-accent uppercase text-center tracking-widest enter-animation enter-fade-up">
              Recepción <br /> 5:45 pm
            </p>
            <Image
              src={coups}
              alt="Coups"
              className="h-20 enter-animation enter-fade-up"
            />
            <Image
              src={plate}
              alt="Plate"
              className="col-start-2 h-14 enter-animation enter-fade-up"
            />
            <p className="font-body2 text-base text-accent uppercase text-center tracking-widest enter-animation enter-fade-up">
              Cena <br /> 6:30 pm
            </p>
            <p className="font-body2 text-base text-accent uppercase text-center tracking-widest enter-animation enter-fade-up">
              Fiesta <br /> 7:3o pm
            </p>
            <Image
              src={party}
              alt="Party"
              className="h-20 enter-animation enter-fade-up"
            />
          </div>
        </div>
        <Image src={branch} alt="Branch" className="h-64 object-contain" />
      </div>
      <div className="w-96 flex flex-col items-center mb-32">
        <p className="text-center text-accent font-body2 text-base mt-10">
          <span className="tracking-widest uppercase">Con todo respeto</span>
          <br />
          <br />
          Aunque amamos a sus pequeños, hemos decidido celebrar este momento sin
          criaturas.
        </p>
        <div className="flex items-center justify-items-center font-head1 text-xl uppercase text-center my-10">
          <p>
            Solo
            <br />
            adultos
          </p>
          <Image
            src={leaf4}
            alt="Leaf"
            className="w-20 h-24 object-contain enter-animation enter-fade-up"
          />
          <p>
            Sin
            <br />
            mascotas
          </p>
        </div>
        <p className="text-center text-accent font-body2 text-base">
          Deseamos que esta decisión no les impida asistir y celebrar nuestro
          dia
        </p>
      </div>
    </Section>
  )
}

export default ScheduleSection
