import { redirect } from 'next/navigation'


export default async function Swap() {
  redirect('https://swap.defillama.com/?chain=base&from=0x0000000000000000000000000000000000000000&to=0x')
}