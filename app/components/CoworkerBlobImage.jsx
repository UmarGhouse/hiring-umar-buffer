import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

export default function CoworkerBlobImage() {
  const { ref: blobRef } = useParallax({ rotate: [0, -40] });

  return (
    <div className='relative mb-16'>
      <Image src="/you/coworkerBlob.svg" alt='hero' width={400} height={400} className='absolute w-9/12 left-10 top-10 md:w-11/12 md:left-0 md:top-0' ref={blobRef} />
      <Image src="/you/coworker.svg" alt='hero' width={500} height={500} className='relative z-1' />
    </div>
  )
}
