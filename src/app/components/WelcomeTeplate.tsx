'use client';
import Image from 'next/image';

export default function WelcomeTemplate() {

  return (
    <main className="h-[70px] my-8 flex items-center justify-center bg-[#fff4ea]">
      <div className='flex items-center gap-4 p-4'>
        <Image 
          src="/biinfo-circle.png" 
          alt="logo" 
          width={20}
          height={20}
        />

        <p className=" text-[#252525] font-400 text-[14px]">
            Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates
        </p>
      </div>
    </main>
  );
}
