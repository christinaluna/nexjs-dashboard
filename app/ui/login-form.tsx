'use client';

import {
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from './button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { ptsans } from '@/app/ui/fonts';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="space-y-3 w-full">
      <div className="flex-1 pb-4 pt-8">
        <div className="w-full">
          <h2 className={`${ptsans.className} text-3xl pb-8`}>Login</h2>
          <div>
            <label
              className="mb-3 mt-5 block text-md font-medium text-gray-900"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-700 py-[9px] text-sm outline-3 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="name@email.com"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-md font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-700 py-[9px] text-sm outline-3 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <Button className="mt-8 w-full" aria-disabled={isPending}>
          Log in
        </Button>
        <div className="flex h-8 items-end space-x-1">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
