// Components
import Section from '@/components/Section'

// Images
import background from '@images/section-background.png'

const AssistanceSection = () => {
  return (
    <Section
      backgroundImage={background}
      className="flex flex-col items-center"
    >
      <div className="bg-primary my-40 py-20 px-10 text-center tracking-widest">
        <p className="font-head3 text-xl uppercase">Confirma tu asistencia</p>
        <p className="text-sm font-body2 text-secondary">
          Favor de confirmar el número total de personas que asistirán.
        </p>
        <p className="font-head3 text-xl uppercase mt-10">
          No podré ir, lo siento
        </p>
        <p className="text-sm font-body2 text-secondary">
          Lo entenderemos, si deseas hacernos un obsequio
          <br />
          te compartimos opciones
        </p>
      </div>
    </Section>
  )
}

export default AssistanceSection
