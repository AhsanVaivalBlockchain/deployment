'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AccountsPage() {
  return (
    <section className="bg-gray-900 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Digital Bank Accounts
        </h1>
        <p className="text-center bg-black-500 text-bold max-w-3xl mx-auto mb-12">
          Explore the benefits of various digital banking services! From quick transactions to seamless integrations, 
          manage your money smarter with these trusted solutions.
        </p>

        {/* Containers Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Container 1 - JazzCash */}
          <div className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Image
                src="/P1.png"
                alt="JazzCash"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold text-center text-red-500 mb-2">
              JazzCash
            </h2>
            <p className="text-gray-600 text-center text-sm sm:text-base mb-4">
              JazzCash is one of the leading mobile wallets in Pakistan, offering instant money transfers, utility bill payments, and more.
            </p>
            <Link
              href={'registrationfom'}
              className="block text-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 transition"
            >
             Deposit
            </Link>
          </div>

          {/* Container 2 - Easypaisa */}
          <div className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Image
                src="/P2.png"
                alt="Easypaisa"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold text-center text-green-500 mb-2">
              Easypaisa
            </h2>
            <p className="text-gray-600 text-center text-sm sm:text-base mb-4">
              Easypaisa allows users to make fast payments, manage digital transactions, and access secure financial services across Pakistan.
            </p>
            <Link
              href={'registrationfom'}
              className="block text-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition"
            >
             Deposit
            </Link>
          </div>

          {/* Container 3 - Bank Alfalah */}
          <div className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Image
                src="/P5.jpg"
                alt="Bank Alfalah"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold text-center text-pink-500 mb-2">
              HBL
            </h2>
            <p className="text-gray-600 text-center text-sm sm:text-base mb-4">
              HBL provides seamless digital banking solutions with mobile and online banking platforms.
            </p>
            <Link
              href={'registrationfom'}
              className="block text-center bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-400 transition"
            >
             Deposit
            </Link>
          </div>

          {/* Container 4 - Meezan Bank */}
          <div className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Image
                src="/P6.jpg"
                alt="Meezan Bank"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold text-center text-gray-500 mb-2">
              UBL
            </h2>
            <p className="text-gray-600 text-center text-sm sm:text-base mb-4">
              UBL leads in Islamic banking, offering Sharia-compliant financial services to its customers.
            </p>
            <Link
              href={'registrationfom'}
              className="block text-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Deposit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
