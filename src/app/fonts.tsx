// Next
import localFont from 'next/font/local'

// local fonts
const body1 = localFont({
  src: './fonts/body1.woff',
  display: 'swap',
  variable: '--font-body1',
})
const body2 = localFont({
  src: './fonts/body2.woff2',
  display: 'swap',
  variable: '--font-body2',
})
const head1 = localFont({
  src: './fonts/head1.woff2',
  display: 'swap',
  variable: '--font-head1',
})
const head2 = localFont({
  src: './fonts/head2.woff2',
  display: 'swap',
  variable: '--font-head2',
})
const head3 = localFont({
  src: './fonts/head3.woff2',
  display: 'swap',
  variable: '--font-head3',
})
const handwritting = localFont({
  src: './fonts/handwritting.woff2',
  display: 'swap',
  variable: '--font-handwritting',
})

export default [
  body1.variable,
  body2.variable,
  head1.variable,
  head2.variable,
  head3.variable,
  handwritting.variable,
].join(' ')
