// Services
import { getGuest, updateGuest } from '@/services/guest.service'

// Types
import { Guest } from '@/types'
import { type NextRequest } from 'next/server'

export async function POST(request: Request) {
  const guest: Guest = await request.json()
  console.log('El guest: ', guest)
  await updateGuest(guest)
  return Response.json({ message: 'ok' })
}

export async function GET(request: NextRequest) {
  const notFound = Response.json({
    message: 'not found',
    data: undefined,
  })

  const searchParams = request.nextUrl.searchParams
  const name = searchParams.get('name')
  console.log('El name: ', name)

  const guest = await getGuest(name || '')
  console.log('El guest encontrado: ', guest)
  if (!guest) {
    return notFound
  }

  return Response.json({
    message: 'found',
    data: guest,
  })
}
