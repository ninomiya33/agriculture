'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://readdy.ai/api/search-image?query=Beautiful%20organic%20farm%20landscape%20with%20fresh%20vegetables%20and%20crops%20in%20morning%20sunlight%2C%20peaceful%20agricultural%20scene%20with%20green%20fields%20and%20blue%20sky%2C%20modern%20farming%20concept%2C%20natural%20organic%20produce%2C%20sustainable%20agriculture%20background%2C%20clean%20simple%20composition&width=1920&height=1080&seq=hero001&orientation=landscape)`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 w-full h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              農作物を<br />
              <span className="text-green-400">もっと広く</span>・<span className="text-blue-400">高く</span>・<span className="text-yellow-400">安定して</span><br />
              売るための支援サイト
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              AIが販路開拓からマーケティングまでサポート。<br />
              育てた作物の価値を最大化する新しい農業プラットフォーム。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/features" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 text-center whitespace-nowrap cursor-pointer"
              >
                機能を見る
              </Link>
              <Link 
                href="/ai-support" 
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/30 transition-all duration-200 text-center whitespace-nowrap cursor-pointer"
              >
                AI支援を体験
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}