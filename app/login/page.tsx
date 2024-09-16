import LoginForm from '@/app/ui/login-form';
import { nunito } from '@/app/ui/fonts';
import { ptsans } from '@/app/ui/fonts';
import { ChartBarIcon } from '@heroicons/react/24/outline';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex flex-col h-28 w-full items-center justify-center rounded-lg bg-indigo-500 p-6">
          <p className={`${nunito.className} text-2xl text-white`}><ChartBarIcon className="w-6 inline mr-2 mb-1" /><strong>Ledgerly</strong></p>
          <p className={`${ptsans.className} text-smd text-white`}><strong>Seamless Billing Made Simple</strong></p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}