'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import HeroImage from './components/HeroImage';
import TeamImage from './components/TeamImage';
import RobotHandsImage from './components/RobotHandsImage';
import MeditateImage from './components/MeditateImage';
import CodingBlobImage from './components/CodingBlobImage';
import LearningBlobImage from './components/LearningBlobImage';
import CoworkerBlobImage from './components/CoworkerBlobImage';
import HandshakeBlobImage from './components/HandshakeBlobImage';

export default function Home() {
  const router = useRouter();

  return (
    <main className='py-12'>
      {/* NAV */}
      <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center w-full'>
        <Image src="/logo.svg" alt='Logo' width={50} height={50} />
        <div className='flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-x-12'>
          <a href='#what-you-get' className='no-underline'>What you Get</a>
          <a href='#what-i-get' className='no-underline'>What I Get</a>
          <button className='py-2 px-4 bg-orange-75 text-white rounded-md hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-50' onClick={() => router.push('/#cta')}>Ready?</button>
        </div>
      </div>

      {/* HERO */}
      <div id='hero' className='container mx-auto p-6 flex flex-col-reverse md:flex-row justify-between items-center gap-x-2 relative w-full mt-12'>
        <div className='flex flex-col items-start gap-y-4 text-center md:text-left'>
          <h1>Meet Umar.<br/>Coder, Designer, Nice Guy.</h1>
          <p className='text-2xl'>Turning Code into Digital Magic, One Design at a Time!</p>
          <button onClick={() => router.push('/#cta')} className='py-2 px-4 bg-orange-75 text-white rounded-md hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-50 w-full md:w-max'>Let&apos;s work together!</button>
        </div>
        <HeroImage />
      </div>

      {/* LOGOS */}
      <div id='logos' className='bg-orange-50 w-full py-4'>
        <div className='container mx-auto px-6 flex flex-col items-center justify-between gap-y-4'>
          <p className='text-gray-600'>As Seen at:</p>
          <div className='flex items-center justify-around gap-x-12 w-full'>
            <Image src="/companies/cogsy.svg" alt='Logo' width={100} height={100} />
            <Image src="/companies/frontier.svg" alt='Logo' width={100} height={100} />
            <div className='flex items-center'><Image src="/companies/buffer.svg" alt='Logo' width={100} height={100} className='inline' />?</div>
          </div>
        </div>
      </div>

      {/* What YOU get */}
      <div id='what-you-get' className='container mx-auto mt-12 py-12 px-6 '>
        <h1>What you get...</h1>
        
        <div className='flex flex-col md:flex-row items-center justify-around gap-y-2 md:gap-x-2 mt-6'>
          <LearningBlobImage />
          <div className='flex flex-col items-start justify-between gap-y-2'>
            <h2>A Quick learner</h2>
            <p>Being a self-taught developer, I&apos;m no stranger to learning what I need to get the job done. This website is the first time I&apos;ve used Figma and Next.js extensively, #learning</p>
          </div>
        </div>

        <div className='flex flex-col-reverse md:flex-row items-center justify-around gap-y-2 md:gap-x-2 mt-6'>
          <div className='flex flex-col items-start justify-between gap-y-2'>
            <h2>A Quicker coder</h2>
            <p>Did you know this website was designed and coded in X days? And the majority of that was learning Figma and Next.js</p>
          </div>
          <CodingBlobImage />
        </div>

        <div className='flex flex-col md:flex-row items-center justify-around gap-y-2 md:gap-x-2 mt-6'>
          <CoworkerBlobImage />
          <div className='flex flex-col items-start justify-between gap-y-2'>
            <h2>A kind, empathetic co-worker</h2>
            <p>Kindness and empathy are important to me (have you read my last 3 blog posts 🙈)</p>
          </div>
        </div>
      </div>

      {/* What I get */}
      <div id='what-i-get' className='bg-orange-50 w-full mt-12 py-12 px-6 '>
        <div className='container mx-auto'>
          <h1>What I get...</h1>
          
          <div className='flex flex-col md:flex-row items-center justify-between gap-y-2 md:gap-x-8 mt-6'>
            <TeamImage />
            <div className='flex flex-col items-start justify-between gap-y-2'>
              <h2>An Exceptional Team</h2>
              <p>Joining Buffer means gaining not just co-workers, but a tight-knit team of titans, ready to inspire, collaborate, and elevate each other.</p>
            </div>
          </div>

          <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-y-2 md:gap-x-8 mt-6'>
            <div className='flex flex-col items-start justify-between gap-y-2'>
              <h2>Your Challenges, my Canvas</h2>
              <p>This role covers two of my passions - challenge and creativity. It&apos;s where art meets code.</p>
            </div>
            <RobotHandsImage />
          </div>

          <div className='flex flex-col md:flex-row items-center justify-between gap-y-2 md:gap-x-8 mt-6'>
            <MeditateImage />
            <div className='flex flex-col items-start justify-between gap-y-2'>
              <h2>Values that Resonate</h2>
              <p>An organisation that prioritizes kindness, ambition and people over profit is exactly what I am looking for.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div id='cta' className='container mx-auto mt-12 px-6 '>
        <h1>Ready? Let&apos;s work together!</h1>

        <div className='flex flex-col md:flex-row items-center justify-between'>
          <HandshakeBlobImage />
          <p>
            Great! I already submitted an application, but can&apos;t link to it 🤷🏽‍♂️. Here&apos;s my <a href='https://umarghouse.com' target='_blank' referrerPolicy='no-referrer'>portfolio</a> instead.
            <br/>
            <br/>
            Also check out my <a href='https://www.instagram.com/dsigned_sl' target='_blank' referrerPolicy='no-referrer'>design</a> <a href='https://www.teepublic.com/user/dsigned' target='_blank' referrerPolicy='no-referrer'>work</a> and <a href='https://blog.umarghouse.com' target='_blank' referrerPolicy='no-referrer'>blog</a>.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div id='footer' className='container mx-auto mt-12 px-6 '>
        <div className='flex items-center justify-between'>
          <Image src="/logo.svg" alt='Logo' width={50} height={50} />

          <div className='flex items-center justify-between gap-x-2'>
            <a href='https://github.com/UmarGhouse' target='_blank' referrerPolicy='no-referrer'>
              <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-orange-75 hover:fill-orange-100'>
                <path d="M21.5657 15.7897C22.1806 15.7897 22.6903 16.0937 23.1337 16.6949C23.5726 17.3006 23.8057 18.0389 23.8057 18.9234C23.8057 19.8034 23.5726 20.5486 23.1337 21.1474C22.6926 21.7531 22.1806 22.0526 21.5657 22.0526C20.9303 22.0526 20.3726 21.7531 19.9314 21.1474C19.4926 20.5486 19.2594 19.8034 19.2594 18.9234C19.2594 18.0389 19.4926 17.3006 19.9314 16.6949C20.3703 16.0914 20.928 15.7897 21.5657 15.7897ZM29.4286 7.65486C31.1337 9.50857 32 11.7577 32 14.4046C32 16.1143 31.8034 17.6571 31.408 19.0286C31.008 20.3931 30.5074 21.5063 29.9131 22.3634C29.2994 23.2334 28.5473 23.997 27.6869 24.624C26.9381 25.1985 26.1203 25.6769 25.2526 26.048C24.4331 26.37 23.5819 26.6044 22.7131 26.7474C22.0001 26.8791 21.2806 26.9729 20.5577 27.0286L18.992 27.0606L17.7417 27.0949C16.5811 27.1452 15.4189 27.1452 14.2583 27.0949L13.008 27.0606L11.4423 27.0286C10.7193 26.973 9.99985 26.8792 9.28686 26.7474C8.4174 26.6076 7.56585 26.3731 6.74743 26.048C5.87991 25.6779 5.06274 25.1994 4.31543 24.624C3.45373 23.9977 2.70084 23.234 2.08686 22.3634C1.49029 21.5063 0.992 20.3931 0.592 19.0286C0.196571 17.6571 0 16.1143 0 14.4046C0 11.7577 0.866286 9.50628 2.57143 7.65486C2.384 7.56114 2.37714 6.63314 2.55314 4.87314C2.67508 3.19988 3.05679 1.55581 3.68457 0C5.81943 0.226286 8.46171 1.43771 11.6183 3.61371C12.6834 3.34171 14.1349 3.19543 16 3.19543C17.9474 3.19543 19.408 3.34171 20.384 3.616C21.8217 2.64457 23.1954 1.85371 24.5097 1.25257C25.8446 0.656 26.8069 0.301714 27.4103 0.208L28.3154 0.00228555C28.9326 1.48571 29.3074 3.11086 29.4491 4.87543C29.6229 6.63314 29.616 7.56114 29.4286 7.65486ZM16.0686 25.5291C19.9269 25.5291 22.8206 25.0674 24.8023 24.1417C26.7566 23.2183 27.7554 21.312 27.7554 18.4366C27.7554 16.768 27.1314 15.3737 25.8766 14.2583C25.2538 13.6664 24.4651 13.2788 23.616 13.1474C22.7589 13.008 21.4469 13.008 19.6846 13.1474C17.9269 13.2891 16.7177 13.3531 16.0686 13.3531C15.1886 13.3531 14.24 13.312 13.0537 13.2183C11.8651 13.1269 10.9326 13.0697 10.2583 13.04C9.52077 13.0271 8.78471 13.1101 8.06857 13.2869C7.34712 13.441 6.67641 13.7752 6.11886 14.2583C4.928 15.3303 4.31314 16.72 4.31314 18.4366C4.31314 21.312 5.28686 23.2183 7.23886 24.1417C9.18171 25.0674 12.0686 25.5291 15.9291 25.5291H16.0686ZM10.5051 15.7897C11.1177 15.7897 11.6297 16.0937 12.0709 16.6949C12.5097 17.3006 12.7429 18.0389 12.7429 18.9234C12.7429 19.8034 12.5097 20.5486 12.0709 21.1474C11.632 21.7531 11.1177 22.0526 10.5051 22.0526C9.86743 22.0526 9.312 21.7531 8.86857 21.1474C8.42972 20.5486 8.19657 19.8034 8.19657 18.9234C8.19657 18.0389 8.42972 17.3006 8.86857 16.6949C9.30972 16.0914 9.86514 15.7897 10.5051 15.7897Z"/>
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/umar-ghouse-020386a4/' target='_blank' referrerPolicy='no-referrer'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-orange-75 hover:fill-orange-100'>
              <path d="M28.4444 0C29.3874 0 30.2918 0.374602 30.9586 1.0414C31.6254 1.70819 32 2.61256 32 3.55556V28.4444C32 29.3874 31.6254 30.2918 30.9586 30.9586C30.2918 31.6254 29.3874 32 28.4444 32H3.55556C2.61256 32 1.70819 31.6254 1.0414 30.9586C0.374602 30.2918 0 29.3874 0 28.4444V3.55556C0 2.61256 0.374602 1.70819 1.0414 1.0414C1.70819 0.374602 2.61256 0 3.55556 0H28.4444ZM27.5556 27.5556V18.1333C27.5556 16.5963 26.945 15.1221 25.8581 14.0353C24.7712 12.9484 23.2971 12.3378 21.76 12.3378C20.2489 12.3378 18.4889 13.2622 17.6356 14.6489V12.6756H12.6756V27.5556H17.6356V18.7911C17.6356 17.4222 18.7378 16.3022 20.1067 16.3022C20.7668 16.3022 21.3998 16.5644 21.8666 17.0312C22.3333 17.498 22.5956 18.131 22.5956 18.7911V27.5556H27.5556ZM6.89778 9.88445C7.68989 9.88445 8.44956 9.56978 9.00967 9.00967C9.56978 8.44956 9.88445 7.68989 9.88445 6.89778C9.88445 5.24444 8.55111 3.89333 6.89778 3.89333C6.10095 3.89333 5.33676 4.20987 4.77331 4.77331C4.20987 5.33676 3.89333 6.10095 3.89333 6.89778C3.89333 8.55111 5.24444 9.88445 6.89778 9.88445ZM9.36889 27.5556V12.6756H4.44444V27.5556H9.36889Z"/>
            </svg>
            </a>
            <a href='https://umarghouse.medium.com/' target='_blank' referrerPolicy='no-referrer'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-orange-75 hover:fill-orange-100'>
              <path d="M1.77778 0H30.2222C30.6937 0 31.1459 0.187301 31.4793 0.520699C31.8127 0.854097 32 1.30628 32 1.77778V30.2222C32 30.6937 31.8127 31.1459 31.4793 31.4793C31.1459 31.8127 30.6937 32 30.2222 32H1.77778C1.30628 32 0.854097 31.8127 0.520699 31.4793C0.187301 31.1459 0 30.6937 0 30.2222V1.77778C0 1.30628 0.187301 0.854097 0.520699 0.520699C0.854097 0.187301 1.30628 0 1.77778 0ZM25.4222 23.0044C25.2444 22.9156 25.1556 22.6489 25.1556 22.4693V8.89956C25.1556 8.72178 25.2444 8.45511 25.4222 8.27556L27.12 6.31111V6.22222H21.0489L16.4978 17.7387L11.3173 6.22222H5.06845V6.31111L6.67556 8.544C7.03289 8.89956 7.12178 9.43644 7.12178 9.88267V19.7013C7.21067 20.2382 7.12178 20.8622 6.85511 21.3973L4.44267 24.7004V24.7893H10.8711V24.7004L8.46045 21.488C8.19378 20.9511 8.10311 20.416 8.19378 19.792V10.8622C8.28267 11.04 8.37156 11.04 8.46045 11.3973L14.5298 24.9671H14.6187L20.5138 10.24C20.4249 10.7733 20.4249 11.3991 20.4249 11.8471V22.3804C20.4249 22.6471 20.336 22.8249 20.1582 23.0044L18.3716 24.7004V24.7893H27.12V24.7004L25.4222 23.0044Z"/>
            </svg>
            </a>
          </div>
        </div>

        {/* Attributions */}
        <Popover placement="top-start" showArrow={true} backdrop="blur" className='text-sm text-gray-400'>
          <PopoverTrigger>
            <button className='my-6 px-2 text-sm text-gray-400 focus:outline-orange-50'>
              Click here for all attributions
            </button>
          </PopoverTrigger>

          <PopoverContent>
            <div className="bg-orange-10 p-6 rounded-lg">
              <p>Handshake Illustration by <a href='https://icons8.com/illustrations/author/zD2oqC8lLBBA'>Icons 8</a> from <a href='https://icons8.com/illustrations'>Ouch!</a></p>
              <p>Hero Illustration by <a href='https://icons8.com/illustrations/author/zD2oqC8lLBBA'>Icons 8</a> from <a href='https://icons8.com/illustrations'>Ouch!</a></p>
              <p>Exceptional Team Illustration by <a href='https://icons8.com/illustrations/author/mNCLibjicqSz'>Julia K</a> from <a href='https://icons8.com/illustrations'>Ouch!</a></p>
              <p>Robot hands Illustration by <a href='https://icons8.com/illustrations/author/XTPoH093lluQ'>Viktoriya Belinio</a> from <a href='https://icons8.com/illustrations'>Ouch!</a></p>
              <p>Woman meditating Illustration by <a href='https://icons8.com/illustrations/author/zD2oqC8lLBBA'>Icons 8</a> from <a href='https://icons8.com/illustrations'>Ouch!</a></p>
              <p>3D Scenes Illustration by <a href='https://www.figma.com/community/file/1008728929204279222/saly-3d-illustration-pack-community'>Alzea Arafat</a></p>
              <p>3D Shapes Illustration by Joseph Angelo Todaro from <a href='https://www.shapefest.com/'>Shapefest</a></p>
            </div>
          </PopoverContent>
        </Popover>
        <div className='my-6 text-sm text-gray-400'>
        </div>
      </div>
    </main>
  )
}
