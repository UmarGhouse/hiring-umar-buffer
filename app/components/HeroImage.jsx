import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

export default function HeroImage() {
  const { ref: laptopRef } = useParallax({ speed: 10, translateY: [30, -50] });
  const { ref: watchRef } = useParallax({ speed: 20, translateY: [10, -20] });
  const { ref: pencilRef } = useParallax({ speed: 300, translateY: [30, -50] });
  const { ref: keyboardRef } = useParallax({ speed: 10, translateY: [-70, 50] });
  const { ref: airpodsRef } = useParallax({ speed: 10, translateY: [-70, 30] });

  return (
    <div className='relative'>
      <Image src="/MacBook_Air_Half_Closed_Front_R.png" alt='macbook' width={300} height={300} className='absolute z-10 left-5 bottom-0' ref={laptopRef} />
      <Image src="/Keyboard_L.png" alt='keyboard' width={300} height={300} className='absolute bottom-40 right-0' ref={keyboardRef} />
      <Image src="/Apple_Watch_Laying_R.png" alt='watch' width={150} height={150} className='absolute bottom-24 right-48 z-10' ref={watchRef} />
      <Image src="/Apple_Pencil_Angled_L.png" alt='pencil' width={200} height={200} className='absolute top-48 left-0 z-10' ref={pencilRef} />
      <Image src="/Airpods_1__R.png" alt='airpods' width={200} height={200} className='absolute top-12 left-20' ref={airpodsRef} />
      <Image src="/Man with laptop sitting on Glass.svg" alt='hero' width={700} height={700} className='relative z-1' />
    </div>
  )
}
