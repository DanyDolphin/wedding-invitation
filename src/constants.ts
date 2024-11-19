// Environment variables
export const GOOGLE_SERVICE_ACCOUNT_EMAIL =
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || ''
export const GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY = (
  process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || ''
).replace(/\\n/g, '\n')
export const GOOGLE_SHEETS_SPREADSHEET_ID =
  process.env.GOOGLE_SHEETS_SPREADSHEET_ID || ''
export const GOOGLE_SHEETS_SHEET_NAME =
  process.env.GOOGLE_SHEETS_SHEET_NAME || ''

// Constants
export const GUESTS_MARIO_RANGE = process.env.GUESTS_MARIO_RANGE || ''
export const GUESTS_ALLISON_RANGE = process.env.GUESTS_ALLISON_RANGE || ''
