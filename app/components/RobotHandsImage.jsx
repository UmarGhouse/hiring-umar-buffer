import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

export default function RobotHandsImage() {
  const { ref: atomRef } = useParallax({ speed: 10, translateY: [150, -50] });
  const { ref: sphereRef } = useParallax({ speed: 10, translateY: [50, -50] });
  const { ref: springRef } = useParallax({ speed: 10, translateY: [-50, 50] });

  return (
    <div className='relative'>
      <Image src="/me/coder/Atom_Tetra_2_0000.png" alt='keyboard' width={150} height={150} className='absolute bottom-20 right-10 z-1' ref={atomRef} />
      <Image src="/me/coder/Sphere_Ring_Standing0003.png" alt='macbook' width={150} height={150} className='absolute z-10 left-0 top-40' ref={sphereRef} />
      <Image src="/me/coder/Spring_Fat_Short0001.png" alt='watch' width={150} height={150} className='absolute top-0 right-0 z-1' ref={springRef} />
      <Image src="/me/coder/folks-ai-coding-programming.svg" alt='Logo' width={500} height={500} className='relative z-2' />
    </div>
  )
}
