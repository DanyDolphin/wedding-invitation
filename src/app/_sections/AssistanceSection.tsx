'use client'

// React
import { FC, useState } from 'react'

// Components
import Section from '@/components/Section'

// Images
import background from '@images/section-background.png'
import { ConfirmStatus, Guest } from '@/types'
import Swal from 'sweetalert2'
import { updateGuest } from '@/services/api.service'

interface AssistanceSectionProps {
  guest?: Guest
}

const AssistanceSection: FC<AssistanceSectionProps> = ({ guest }) => {
  const [tickets, setTickets] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)

  const maxTickets = guest?.maxTickets || 1

  const confirmAssistance = async () => {
    if (!guest) {
      return
    }

    if (tickets > maxTickets) {
      Swal.fire({
        text: `No puedes elegir más de ${maxTickets} boletos`,
        icon: 'error',
      })
      return
    }

    setLoading(true)

    try {
      guest.confirmationDate = new Date().toLocaleDateString()
      guest.tickets = tickets
      guest.willAssist = ConfirmStatus.YES
      await updateGuest(guest)
      Swal.fire({
        text: 'Te enviaremos tus boletos lo mas prondo posible',
        title: 'Confirmado',
        icon: 'success',
      })
    } catch (err) {
      console.error(err)
      Swal.fire({
        text: 'Comunícanos que fue lo que pasó',
        title: 'Algo salió mal',
        icon: 'error',
      })
    }
    setLoading(false)
  }

  const cancelAssistance = async () => {
    if (!guest) {
      return
    }

    setLoading(true)
    try {
      guest.confirmationDate = new Date().toLocaleDateString()
      guest.tickets = 0
      guest.willAssist = ConfirmStatus.NO
      await updateGuest(guest)
      Swal.fire({
        text: 'Entendemos. Gracias por avisarnos',
        title: 'No asistiré',
        icon: 'success',
      })
    } catch (err) {
      console.error(err)
      Swal.fire({
        text: 'Comunícanos que fue lo que pasó',
        title: 'Algo salió mal',
        icon: 'error',
      })
    }
    setLoading(false)
  }

  return (
    <Section
      backgroundImage={background}
      className="flex flex-col items-center"
    >
      <div className="bg-primary my-40 py-20 px-10 text-center tracking-widest">
        <p className="font-head3 text-xl uppercase">Confirma tu asistencia</p>
        <p className="text-sm font-body2 text-secondary">
          Favor de confirmar el número total de personas que asistirán.
          <br />
          (Puedes confirmar hasta {maxTickets} personas)
        </p>
        <input
          type="number"
          value={tickets}
          max={maxTickets}
          min={1}
          onChange={(e) => setTickets(Number(e.target.value))}
          disabled={loading}
          className="mx-auto w-20"
        />
        <br />
        <button className="mt-2 font-body2" onClick={confirmAssistance}>
          {loading ? '...' : 'Confirmar asistencia'}
        </button>
        <p className="font-head3 text-xl uppercase mt-10">
          No podré ir, lo siento
        </p>
        <p className="text-sm font-body2 text-secondary">
          Lo entenderemos, si deseas hacernos un obsequio
          <br />
          te compartimos opciones
        </p>
        <button className="mt-2 font-body2" onClick={cancelAssistance}>
          {loading ? '...' : 'No puedo ir'}
        </button>
      </div>
    </Section>
  )
}

export default AssistanceSection
