'use client'

// React
import { useState } from 'react'

// Libraries
import Swal from 'sweetalert2'

// Services
import { getGuest } from '@/services/api.service'

// Types
import { Guest } from '@/types'

const InvitationGenerator = () => {
  const [name, setName] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [invitation, setInvitation] = useState<string>('')

  const generateInvitation = async () => {
    setLoading(true)
    try {
      const response = await getGuest(name)
      const guest: Guest = response.data
      if (!guest) {
        setInvitation(
          'No se encontró el invitado en la hoja de excel. Compruebalo'
        )
      } else {
        const baseUrl =
          window.location.protocol + '//' + window.location.hostname
        setInvitation(`
*${name}*

¡Nos casamos!

☺️ Con muchísimo gusto, te invitamos a nuestra boda el día 15/02/2025

Presiona aquí para ver todos los detalles del evento. Tambien podras confirmar
tu asistencia o avisar que no podras asistir:

💌 ${baseUrl}/?name=${encodeURIComponent(name)}

Atte. *Allison y Mario*
        `)
      }
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
    <>
      <p className="font-body2 font-thin text-xl tracking-widest mt-4">
        Ingresa el nombre del invitado tal cual viene en el excel
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-1/2 mt-4"
      />
      <button className="mt-4" onClick={generateInvitation}>
        {loading ? '...' : 'Generar invitación'}
      </button>
      <textarea
        rows={10}
        className="mt-8 w-1/2"
        value={invitation}
        onChange={(e) => setInvitation(e.target.value)}
      ></textarea>
    </>
  )
}

export default InvitationGenerator
