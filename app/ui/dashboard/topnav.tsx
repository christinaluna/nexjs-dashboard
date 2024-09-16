import Link from 'next/link';
import { nunito } from '@/app/ui/fonts';
import { ChartBarIcon } from '@heroicons/react/24/outline';

export default function TopNav() {
  return (
    <div className="flex h-16 flex-col">
      <div className="w-full bg-indigo-600">
        <Link
          className="mb-2 flex items-center justify-start p-3"
          href="/"
        >
          <div className="w-32 text-white md:w-40">
            <p className={`${nunito.className} text-2xl text-white`}><ChartBarIcon className="w-6 inline mr-2 mb-1" /><strong>Ledgerly</strong></p>
          </div>
        </Link>
      </div>
      
    </div>
  );
}
