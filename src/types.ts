export interface Page {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export enum ConfirmStatus {
  YES = 'si',
  NO = 'no',
}

export interface GuestMetadata {
  range: string
}

export interface Guest {
  name: string
  maxTickets: number
  confirmationDate: string
  willAssist: ConfirmStatus
  tickets: number
  metadata: GuestMetadata
}
