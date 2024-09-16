import { Inter, Lusitana, Nunito, Lato, PT_Sans } from 'next/font/google';

export const inter = Inter({ subsets: ['latin']});

export const lusitana = Lusitana({ 
    subsets: ['latin'],
    weight: ['400', '700']
});

export const nunito = Nunito({ 
    subsets: ['latin'],
    weight: ['400']
});

export const lato = Lato({ 
    subsets: ['latin'],
    weight: ['400']
});

export const ptsans = PT_Sans({ 
    subsets: ['latin'],
    weight: ['400', '700']
});