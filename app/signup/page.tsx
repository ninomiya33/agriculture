
'use client';

import { useState } from 'react';
import Link from 'next/link';
import SignupForm from './SignupForm';
import SignupHero from './SignupHero';
import SignupFeatures from './SignupFeatures';
import SignupTestimonials from './SignupTestimonials';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-green-600 cursor-pointer">
              <span className="font-pacifico">logo</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                ホーム
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                ログイン
              </Link>
            </div>
          </div>
        </div>
      </header>

      <SignupHero />
      <SignupForm />
      <SignupFeatures />
      <SignupTestimonials />
    </div>
  );
}
