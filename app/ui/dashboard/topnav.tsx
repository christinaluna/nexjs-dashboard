import Link from 'next/link';
import { nunito } from '@/app/ui/fonts';
import { ChartBarIcon } from '@heroicons/react/24/outline';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function TopNav() {
  return (
    <div className="flex h-16 flex-col">
      <div className="w-full items-center flex justify-between bg-indigo-600">
        <Link
          className="mb-2 flex items-center justify-start p-3"
          href="/"
        >
          <div className="w-32 text-white md:w-40">
            <p className={`${nunito.className} text-2xl text-white`}><ChartBarIcon className="w-6 inline mr-2 mb-1" /><strong>Ledgerly</strong></p>
          </div>
        </Link>
        <form 
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 p-3 text-lg font-medium text-white md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
      
    </div>
  );
}
