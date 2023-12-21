import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

export default function LearningBlobImage() {
  const { ref: blobRef } = useParallax({ rotate: [0, -80] });

  return (
    <div className='relative mb-16'>
      <Image src="/you/learningBlob.svg" alt='hero' width={500} height={500} className='absolute top-10' ref={blobRef} />
      <Image src="/you/learning.svg" alt='hero' width={500} height={500} className='relative z-1' />
    </div>
  )
}
