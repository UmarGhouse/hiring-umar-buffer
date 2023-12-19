import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

export default function TeamImage() {
  const { ref: torusConcentricRef } = useParallax({ speed: 10, translateY: [150, -50] });
  const { ref: torusRef } = useParallax({ speed: 10, translateY: [-50, 50] });
  const { ref: gonRef } = useParallax({ speed: 10, translateY: [-50, 50] });

  return (
    <div className='relative'>
      <Image src="/me/team/Torus_Concentric_Standing_1_0002.png" alt='keyboard' width={150} height={150} className='absolute top-10 left-10 z-1 w-3/12 h-3/12' ref={torusConcentricRef} />
      <Image src="/me/team/Torus_2x_Link0001.png" alt='macbook' width={150} height={150} className='absolute z-10 right-0 top-10 w-3/12 h-3/12' ref={torusRef} />
      <Image src="/me/team/Gon_6_Standing_Outline0001.png" alt='watch' width={150} height={150} className='absolute bottom-0 right-16 z-10 w-3/12 h-3/12' ref={gonRef} />
      <Image src="/me/team/folks-team-working-together.svg" alt='Logo' width={500} height={500} className='relative z-2' />
    </div>
  )
}
