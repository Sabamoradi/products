"use client";

import Input from "@/components/Input";
import "./style.scss";
import { useRouter } from 'next/navigation'
import { useState } from "react";


export default function Header() {
  const router = useRouter()
  const [inputValue,setInputValue] = useState('')

  const sendToSearch = () =>{
    if(inputValue.length === 0){
      router.push(`/`)
    }else{
      router.push(`/search?sp=${inputValue}`)
    }
  }

  return (
    <header className="header_wrapper  bg-white">
      <Input placeholder="search ..." type="search" inputClassName="w-50" onChange={setInputValue} />
      <button className="header_btn" onClick={()=> sendToSearch()}>search</button>
    </header>
  );
}
