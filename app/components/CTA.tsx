'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          今すぐ始めて、<br />
          農作物の売上を向上させましょう
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          AIが提供する販路開拓とマーケティング支援で、
          あなたの農業経営を次のレベルへ導きます。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            無料で始める
          </Link>
          <Link
            href="/demo"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            デモを見る
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="text-white/90">
            <div className="text-3xl font-bold mb-2">1,200+</div>
            <div className="text-sm">登録農家数</div>
          </div>
          <div className="text-white/90">
            <div className="text-3xl font-bold mb-2">85%</div>
            <div className="text-sm">売上向上率</div>
          </div>
          <div className="text-white/90">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm">対応販路</div>
          </div>
        </div>
      </div>
    </section>
  );
}