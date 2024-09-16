import Pagination from '@/app/ui/pagination';
import CustomersTable from '@/app/ui/customers/table';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCustomersPages, fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};
 
export default async function Page({
  searchParams
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages(query);
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
       <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}