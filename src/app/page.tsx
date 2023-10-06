'use client'

import Image from 'next/image'
import { useFunnelStore } from './lib/store';
import { useRouter } from 'next/navigation'
import FileLoader from './components/FileLoader';
import { Funnel } from './lib/types';

export default function Home() {
  const router = useRouter()
  const setFunnel = useFunnelStore((state) => state.setFunnel)

  const handleFileChange = async (parsedData: Funnel) => {
    setFunnel(parsedData);
    router.push('/funnel');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <Image
        src="/digestoraptor.png"
        alt="Digestoraptor Mascot made with AI"
        className='mb-3'
        width={150}
        height={24}
        priority
      />
      <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-700/60 to-50% to-slate-700">Welcome Test Guy <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
        <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
          <li>#1336</li>
          <li>#1429</li>
          <li>#1238</li>
          <li>#1534</li>
          <li>#1134</li>
          <li aria-hidden="true">#1336</li>
        </ul>
      </span></div>
      <p className='text-2xl mb-5'>Please upload a funnel to digest</p>
      <div className='width-[250px]'>
        <FileLoader onFileChange={handleFileChange} />
      </div>
      <p className='text-sm text-gray-600 mb-5'>
        Use our <a className='text-indigo-400' href="/funnel.json" target='_blank'>code sample</a> to test, <br />
        or check the <a className='text-indigo-400' href="https://perspectiveco.notion.site/Work-Sample-Senior-Frontend-Engineer-Cesar-Zapata-e29ccfa7e0494a63a1af1f89e08eb801" target='_blank'>original task</a> for more info
      </p>
    </main>
  )
}
