import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

export default function MeditateImage() {
  const { ref: cubeRef } = useParallax({ speed: 10, translateY: [50, -50] });
  const { ref: icosaRef } = useParallax({ speed: 10, translateY: [-50, 50] });
  const { ref: octaRef } = useParallax({ speed: 10, translateY: [50, -50] });

  return (
    <div className='relative'>
      <Image src="/me/coworker/Atom_Cube_2_0001.png" alt='keyboard' width={150} height={150} className='absolute top-0 right-24 z-1 w-3/12 h-3/12' ref={cubeRef} />
      <Image src="/me/coworker/Atom_Icosa_2_0003.png" alt='macbook' width={150} height={150} className='absolute z-10 left-0 top-20 w-3/12 h-3/12' ref={icosaRef} />
      <Image src="/me/coworker/Atom_Octa_1_0003.png" alt='watch' width={150} height={150} className='absolute bottom-0 right-0 z-10 w-3/12 h-3/12' ref={octaRef} />
      <Image src="/me/coworker/folks-young-woman-sitting-in-lotus-position-1.svg" alt='Logo' width={500} height={500} className='relative z-2' />
    </div>
  )
}
