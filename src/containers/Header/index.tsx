'use client'

import Input from '@/components/Input'
import './style.scss'

export default function Header() {
  return (
    <header className="header_wrapper  bg-white">
        <Input placeholder='search ...' type='search' inputClassName='w-50'/>
    </header> 
  )
}
