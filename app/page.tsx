import { nunito } from '@/app/ui/fonts';
import Image from 'next/image';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LoginForm from '@/app/ui/login-form';
import { ChartBarIcon } from '@heroicons/react/24/outline';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Analytics />
      <SpeedInsights />
      <div className="mt-4 flex grow flex-col md:flex-row">
        <div className="relative flex flex-col justify-start rounded-t-lg rounded-b-lg bg-indigo-500 px-6 py-10 md:w-3/6 md:px-20">
        <p className={`${nunito.className} text-2xl text-white`}><ChartBarIcon className="w-6 inline mr-2 mb-1" /><strong>Ledgerly</strong></p>
          <div className="flex flex-col flex-grow gap-6 mt-20">
            <p className={`${nunito.className} text-xl text-white md:text-3xl md:leading-1`}>
              <strong>Welcome to Ledgerly!</strong>
            </p>
            <p className={`${nunito.className} text-xl text-white md:text-1xl w-100`}>
            Track, invoice, and manage payments effortlessly. 
            </p>
          </div>
          <Image
            src="/hero-desktop.png"
            width={750}
            height={760}
            className="absolute bottom-0 right-0 h-auto hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          {/* <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          /> */}
        </div>
        <div className="flex flex-col justify-center items-center rounded-tr-lg rounded-br-lg p-6 md:w-3/6 md:px-28 md:py-12 bg-gray-50">
          <div className="w-2/3">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
