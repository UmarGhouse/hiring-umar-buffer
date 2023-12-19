import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

export default function CodingBlobImage() {
  const { ref: blobRef } = useParallax({ rotate: [0, 40] });

  return (
    <div className='relative mb-16'>
      <Image src="/you/codingBlob.svg" alt='hero' width={500} height={500} className='absolute w-4/5 left-10 top-10 md:w-full md:left-0 md:top-0' ref={blobRef} />
      <Image src="/you/coding.svg" alt='hero' width={500} height={500} className='relative z-1' />
    </div>
  )
}
