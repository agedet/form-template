'use client';
import Image from 'next/image';

export default function Navbar() {

  return (
    <header className="h-[100px] text-black font-bold text-[20px] flex items-center justify-space-between bg-white shadow-md px-4">
      <div>
        <Image 
          src="" 
          alt="logo" 
          width={50}
          height={50}
        />
        <h1 className=" text-black font-bold text-[20px]">FormPadi</h1>
      </div>
    </header>
  );
}
