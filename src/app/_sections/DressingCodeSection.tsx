// Components
import Section from '@/components/Section'

// Images
import background from '@images/section-background.png'

const DressingCodeSection = () => {
  return (
    <Section backgroundImage={background}>
      <div className="flex flex-col gap-12 sm:grid sm:gap-y-32 sm:grid-cols-3 py-32 items-center justify-items-center">
        <p className="col-start-2 font-handwritting text-accent text-5xl text-center">
          Sombrero
          <span className="font-body2 uppercase tracking-widest text-base block">
            Opcional
          </span>
        </p>
        <div></div>
        <p className="font-handwritting text-accent text-5xl text-center">
          Traje
          <span className="col-start-1 font-body2 uppercase tracking-widest text-base block">
            Formal
          </span>
        </p>
        <p className="font-head1 text-4xl text-center tracking-widest leading-normal">
          Codigo de
          <br />
          vestimenta
        </p>
        <p className="font-handwritting text-accent text-5xl text-center">
          Botas
          <span className="col-start-1 font-body2 uppercase tracking-widest text-base block">
            Opcional
          </span>
        </p>
        <p className="col-start-2 font-handwritting text-accent text-5xl text-center">
          Vestido
          <span className="col-start-1 font-body2 uppercase tracking-widest text-base block">
            Largo
          </span>
          <span className="col-start-1 font-body2 text-base text-black">
            * No vestidos blancos
          </span>
        </p>
      </div>
    </Section>
  )
}

export default DressingCodeSection
