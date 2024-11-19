// Services
import { getGuest, updateGuest } from '@/services/guest.service'

// Types
import { Guest } from '@/types'
import { type NextRequest } from 'next/server'

export async function POST(request: Request) {
  const guest: Guest = await request.json()
  updateGuest(guest)
  return Response.json({ message: 'ok' })
}

export async function GET(request: NextRequest) {
  const notFound = Response.json({
    message: 'not found',
    data: undefined,
  })
  const searchParams = request.nextUrl.searchParams
  const name = searchParams.get('name')
  const guest = await getGuest(name || '')
  if (!guest) {
    return notFound
  }

  return Response.json({
    message: 'found',
    data: guest,
  })
}
