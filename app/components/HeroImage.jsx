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
      <Image src="/hero/MacBook_Air_Half_Closed_Front_R.png" alt='macbook' width={300} height={300} className='absolute z-10 left-10 bottom-0 lg:left-5 w-5/12 h-5/12' ref={laptopRef} />
      <Image src="/hero/Keyboard_L.png" alt='keyboard' width={300} height={300} className='absolute top-10 right-0 lg:top-[-50px] lg:right-[-20px] w-5/12 h-5/12' ref={keyboardRef} />
      <Image src="/hero/Apple_Watch_Laying_R.png" alt='watch' width={150} height={150} className='absolute bottom-16 right-24 sm:bottom-24 sm:right-40 md:right-28 md:bottom-16 xl:bottom-32 xl:right-48 w-2/12 h-2/12' ref={watchRef} />
      <Image src="/hero/Apple_Pencil_Angled_L.png" alt='pencil' width={200} height={200} className='absolute left-[-20px] top-32 sm:left-[-40px] z-10 w-5/12 h-5/12' ref={pencilRef} />
      <Image src="/hero/Airpods_1__R.png" alt='airpods' width={200} height={200} className='absolute top-0 left-14 lg:top-12 sm:max-md:left-20 lg:left-16 w-3/12 h-3/12' ref={airpodsRef} />
      <Image src="/hero/Man with laptop sitting on Glass.svg" alt='hero' width={700} height={700} className='relative z-1' />
    </div>
  )
}
