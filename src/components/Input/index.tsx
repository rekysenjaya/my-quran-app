"use client";

import React, { InputHTMLAttributes } from "react";
import Image from 'next/image';
import Search from '@/images/search.svg';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = '',
  ...props
}: InputProps) {
  return (
    <div className={`flex items-center border-[1.5px] rounded-full border-gray-300 px-3 py-2 transition-transform duration-300 transform focus-within:scale-[101%] focus-within:ring-gray-300 my-4 ${className}`}>
      <Image src={Search} alt='' className="h-[20px] w-[20px]" />
      <input
        {...props}
        className="flex-grow border-none focus:ring-0 outline-none px-2 text-white placeholder-gray-400 bg-transparent"
      />
    </div>
  );
}
