"use client"
import { useSearchParams } from 'next/navigation'


export default function Products() {
  const searchParams = useSearchParams()

  const search = searchParams.get('cat')
  console.log(search);
  
  return (
    <div>
      {search}
    </div>
  )
}
