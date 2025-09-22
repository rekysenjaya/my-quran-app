"use client";

import { useState } from "react"

import ImageMode from "../ImageMode"

import { Surat } from "@/types/ayatType"

const DescriptionSurat = ({ detailSurat }: { detailSurat: Surat }) => {
  const [show, setShow] = useState(false)

  return <div>
    <div className="flex gap-2 items-center cursor-pointer" onClick={() => setShow(prev => !prev)}>
      <h2 className='font-extralight'>{detailSurat.arti}</h2>
      <div className={`h-4 w-4 cursor-pointer  transform transition-transform duration-300 ${show ? '-rotate-180' : ''}`}>
        <ImageMode type='arrow' />
      </div>
    </div>
    <div className={`transition-all duration-500 ease-in-out transform ${show ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 max-h-0 overflow-hidden'}`}>
      <div className="mb-4 text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: detailSurat.deskripsi }} />
    </div>
  </div>
}

export default DescriptionSurat