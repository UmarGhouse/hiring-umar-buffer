'use client';

import Image from 'next/image';
import { Popover } from '@headlessui/react';

export default function Home() {
  return (
    <main className='py-12'>
      {/* NAV */}
      <div className='container mx-auto flex justify-between items-center w-full'>
        <Image src="/Color=Default.svg" alt='Logo' width={50} height={50} />
        <div className='flex justify-between items-center gap-x-12'>
          <a href='#what-you-get'>What you Get</a>
          <a href='#what-i-get'>What I Get</a>
          <a href='#cta' className='py-2 px-4 bg-orange-100 text-white rounded-md'>Ready?</a>
        </div>
      </div>

      {/* HERO */}
      <div id='hero' className='container mx-auto flex justify-between items-center gap-x-2 relative w-full mt-12'>
        <div className='flex flex-col items-start gap-y-4'>
          <h1>Meet Umar.<br/>Coder, Designer, Nice Guy.</h1>
          <p>Turning Code into Digital Magic, One Design at a Time!</p>
          <a href='#cta' className='py-2 px-4 bg-orange-100 text-white rounded-md'>Let&apos;s work together!</a>
        </div>
        <div>
          <Image src="/Man with laptop sitting on Glass.svg" alt='Logo' width={700} height={700} />
        </div>
      </div>

      {/* LOGOS */}
      <div id='logos' className='bg-orange-50 w-full py-4'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-y-4'>
          <p className='text-gray-600'>As Seen at:</p>
          <div className='flex items-center justify-between gap-x-12 w-full'>
            <Image src="/cogsy.svg" alt='Logo' width={100} height={100} />
            <Image src="/frontier.svg" alt='Logo' width={100} height={100} />
            <div><Image src="/buffer.svg" alt='Logo' width={100} height={100} className='inline' />?</div>
          </div>
        </div>
      </div>

      {/* What YOU get */}
      <div id='what-you-get' className='container mx-auto mt-12'>
        <h1>What you get...</h1>
        
        <div className='flex items-center justify-around gap-x-2 mt-6'>
          <Image src="/Learning with blob.png" alt='Logo' width={500} height={500} />
          <div className='flex flex-col items-start justify-between gap-y-2'>
            <h2>A Quick learner</h2>
            <p>Being a self-taught developer, I&apos;m no stranger to learning what I need to get the job done. This website is the first time I&apos;ve used Figma and Next.js extensively, #learning</p>
          </div>
        </div>

        <div className='flex items-center justify-around gap-x-2 mt-6'>
          <div className='flex flex-col items-start justify-between gap-y-2'>
            <h2>A Quicker coder</h2>
            <p>Did you know this website was designed and coded in X days? And the majority of that was learning Figma and Next.js</p>
          </div>
          <Image src="/Coding with blob.png" alt='Logo' width={500} height={500} />
        </div>

        <div className='flex items-center justify-around gap-x-2 mt-6'>
          <Image src="/Coworker with blob.png" alt='Logo' width={500} height={500} />
          <div className='flex flex-col items-start justify-between gap-y-2'>
            <h2>A kind, empathetic co-worker</h2>
            <p>Kindness and empathy are important to me (have you read my last 3 blog posts 🙈)</p>
          </div>
        </div>
      </div>

      {/* What I get */}
      <div id='what-i-get' className='bg-orange-50 w-full mt-12 py-12'>
        <div className='container mx-auto'>
          <h1>What I get...</h1>
          
          <div className='flex items-center justify-between gap-x-8 mt-6'>
            <Image src="/folks-team-working-together.png" alt='Logo' width={500} height={500} />
            <div className='flex flex-col items-start justify-between gap-y-2'>
              <h2>An Exceptional Team</h2>
              <p>Joining Buffer means gaining not just co-workers, but a tight-knit team of titans, ready to inspire, collaborate, and elevate each other.</p>
            </div>
          </div>

          <div className='flex items-center justify-between gap-x-8 mt-6'>
            <div className='flex flex-col items-start justify-between gap-y-2'>
              <h2>Your Challenges, my Canvas</h2>
              <p>This role covers two of my passions - challenge and creativity. It&apos;s where art meets code.</p>
            </div>
            <Image src="/folks-ai-coding-programming.png" alt='Logo' width={500} height={500} />
          </div>

          <div className='flex items-center justify-between gap-x-8 mt-6'>
            <Image src="/folks-young-woman-sitting-in-lotus-position-1.png" alt='Logo' width={500} height={500} />
            <div className='flex flex-col items-start justify-between gap-y-2'>
              <h2>Values that Resonate</h2>
              <p>An organisation that prioritizes kindness, ambition and people over profit is exactly what I am looking for.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div id='cta' className='container mx-auto mt-12'>
        <h1>Ready? Let&apos;s work together!</h1>

        <div className='flex items-center justify-between'>
          <Image src="/Handshake with blob.png" alt='Logo' width={700} height={700} />
          <p>
            Great! I already submitted an application, but can&apos;t link to it 🤷🏽‍♂️. Here&apos;s my <a href='https://umarghouse.com' target='_blank' referrerPolicy='no-referrer'>portfolio</a> instead.
            <br/>
            <br/>
            Also check out my <a href='https://www.instagram.com/dsigned_sl' target='_blank' referrerPolicy='no-referrer'>design</a> <a href='https://www.teepublic.com/user/dsigned' target='_blank' referrerPolicy='no-referrer'>work</a> and <a href='https://blog.umarghouse.com' target='_blank' referrerPolicy='no-referrer'>blog</a>.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div id='footer' className='container mx-auto mt-12'>
        <div className='flex items-center justify-between'>
          <Image src="/Color=Default.svg" alt='Logo' width={50} height={50} />

          <div className='flex items-center justify-between gap-x-2'>
            <a href='https://github.com/UmarGhouse' target='_blank' referrerPolicy='no-referrer'>
              <Image src="/Github Logo.svg" alt='Logo' width={32} height={32} />
            </a>
            <a href='https://www.linkedin.com/in/umar-ghouse-020386a4/' target='_blank' referrerPolicy='no-referrer'>
              <Image src="/LinkedIn Logo.svg" alt='Logo' width={32} height={32} />
            </a>
            <a href='https://umarghouse.medium.com/' target='_blank' referrerPolicy='no-referrer'>
              <Image src="/Medium Logo.svg" alt='Logo' width={32} height={32} />
            </a>
          </div>
        </div>

        {/* Attributions */}
        <div className='my-6 text-sm text-gray-400'>
          <Popover className="relative">
            <Popover.Button>Click here for all attributions</Popover.Button>

            <Popover.Panel className="absolute z-10 mt-4 left-20 -top-[220px] overflow-hidden rounded shadow">
              <div className="bg-orange-50 p-6 rounded-lg">
                <p>Handshake Illustration by <a href='https://icons8.com/illustrations/author/zD2oqC8lLBBA'>Icons 8</a> from <a href='https://icons8.com/illustrations'>Ouch!</a></p>
                <p>Hero Illustration by <a href='https://icons8.com/illustrations/author/zD2oqC8lLBBA'>Icons 8</a> from <a href='https://icons8.com/illustrations'>Ouch!</a></p>
                <p>Exceptional Team Illustration by <a href='https://icons8.com/illustrations/author/mNCLibjicqSz'>Julia K</a> from <a href='https://icons8.com/illustrations'>Ouch!</a></p>
                <p>Robot hands Illustration by <a href='https://icons8.com/illustrations/author/XTPoH093lluQ'>Viktoriya Belinio</a> from <a href='https://icons8.com/illustrations'>Ouch!</a></p>
                <p>Woman meditating Illustration by <a href='https://icons8.com/illustrations/author/zD2oqC8lLBBA'>Icons 8</a> from <a href='https://icons8.com/illustrations'>Ouch!</a></p>
                <p>3D Scenes Illustration by <a href='https://www.figma.com/community/file/1008728929204279222/saly-3d-illustration-pack-community'>Alzea Arafat</a></p>
                <p>3D Shapes Illustration by Joseph Angelo Todaro from <a href='https://www.shapefest.com/'>Shapefest</a></p>
              </div>
            </Popover.Panel>
          </Popover>
        </div>
      </div>
    </main>
  )
}
