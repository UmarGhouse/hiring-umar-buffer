import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

export default function HandshakeBlobImage() {
  const { ref: blobRef } = useParallax({ rotate: [0, 80] });

  return (
    <div className='relative mt-12'>
      <Image src="/handshakeBlob.svg" alt='hero' width={650} height={650} className='absolute md:top-8 md:w-11/12' ref={blobRef} />
      <Image src="/3d-fluency-handshake.svg" alt='hero' width={700} height={700} className='relative z-1' />
    </div>
  )
}
