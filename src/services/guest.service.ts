// Types
import {
  GOOGLE_SHEETS_SHEET_NAME,
  GOOGLE_SHEETS_SPREADSHEET_ID,
  GUESTS_ALLISON_RANGE,
  GUESTS_MARIO_RANGE,
} from '@/constants'
import { ConfirmStatus, Guest } from '@/types'
import { getSheet, updateSheet } from './google.service'

export const parseRowToGuest = (
  row: string[],
  index: number,
  originalRange: string
): Guest => {
  // calc range
  const [firstCell, lastCell] = originalRange.split(':')
  const firstCellRow = Number(firstCell.substring(1))
  const firstCellColumn = firstCell[0]
  const lastCellColumn = lastCell[0]
  const guestRange = `${firstCellColumn}${
    firstCellRow + index
  }:${lastCellColumn}${firstCellRow + index}`

  return {
    name: row[0] || '',
    maxTickets: Number(row[1] || 0),
    confirmationDate: row[4],
    willAssist: row[2] ?? ConfirmStatus.NO,
    tickets: Number(row[3] || 0),
    metadata: {
      range: guestRange,
    },
  } as Guest
}

export const parseGuestToRow = (guest: Guest): string[] => {
  return [
    guest.name,
    guest.maxTickets + '',
    guest.willAssist,
    guest.tickets + '',
    guest.confirmationDate,
  ]
}

export const getGuestsList = async (): Promise<Guest[]> => {
  // Mario guests
  const marioSheet = await getSheet(
    GOOGLE_SHEETS_SPREADSHEET_ID,
    GOOGLE_SHEETS_SHEET_NAME,
    GUESTS_MARIO_RANGE
  )
  const marioGuests = (marioSheet.values || []).map((row, index) =>
    parseRowToGuest(row, index, GUESTS_MARIO_RANGE)
  )

  // Allison guests
  const allisonSheet = await getSheet(
    GOOGLE_SHEETS_SPREADSHEET_ID,
    GOOGLE_SHEETS_SHEET_NAME,
    GUESTS_ALLISON_RANGE
  )
  const allisonGuests = (allisonSheet.values || []).map((row, index) =>
    parseRowToGuest(row, index, GUESTS_ALLISON_RANGE)
  )

  return [...marioGuests, ...allisonGuests]
}

export const getGuest = async (name: string): Promise<Guest | undefined> => {
  const guestList = await getGuestsList()
  return guestList.find((guest) => guest.name === name)
}

export const updateGuest = async (guest: Guest) => {
  const row = parseGuestToRow(guest)
  await updateSheet(
    GOOGLE_SHEETS_SPREADSHEET_ID,
    GOOGLE_SHEETS_SHEET_NAME,
    guest.metadata.range,
    [row]
  )
}
