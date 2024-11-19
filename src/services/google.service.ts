import {
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
} from '@/constants'
import { sheets, auth, sheets_v4 } from '@googleapis/sheets'

const credentials = new auth.JWT({
  email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

const client = sheets('v4')

export const getSpreadsheet = async (
  speadsheetId: string
): Promise<sheets_v4.Schema$Spreadsheet> => {
  const spreadsheet = await client.spreadsheets.get({
    spreadsheetId: speadsheetId,
    auth: credentials,
  })
  return spreadsheet.data
}

export const getSheet = async (
  speadsheetId: string,
  sheetName: string,
  range: string
): Promise<sheets_v4.Schema$ValueRange> => {
  const spreadsheet = await client.spreadsheets.values.get({
    auth: credentials,
    spreadsheetId: speadsheetId,
    range: (sheetName ? "'" + sheetName + "'!" : '') + range,
  })
  return spreadsheet.data
}

export const updateSheet = async (
  speadsheetId: string,
  sheetName: string,
  range: string,
  values: string[][]
): Promise<void> => {
  await client.spreadsheets.values.update({
    auth: credentials,
    spreadsheetId: speadsheetId,
    range: (sheetName ? "'" + sheetName + "'!" : '') + range,
    valueInputOption: 'RAW',
    requestBody: {
      values,
    },
  })
}
