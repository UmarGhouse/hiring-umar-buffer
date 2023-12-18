import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

export default function CoworkerBlobImage() {
  const { ref: blobRef } = useParallax({ rotate: [0, -40] });

  return (
    <div className='relative'>
      <Image src="/you/coworkerBlob.svg" alt='hero' width={400} height={400} className='absolute' ref={blobRef} />
      <Image src="/you/coworker.svg" alt='hero' width={500} height={500} className='relative z-1' />
    </div>
  )
}
