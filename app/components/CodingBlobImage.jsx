import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

export default function CodingBlobImage() {
  const { ref: blobRef } = useParallax({ rotate: [0, 40] });

  return (
    <div className='relative'>
      <Image src="/you/codingBlob.svg" alt='hero' width={500} height={500} className='absolute' ref={blobRef} />
      <Image src="/you/coding.svg" alt='hero' width={500} height={500} className='relative z-1' />
    </div>
  )
}
