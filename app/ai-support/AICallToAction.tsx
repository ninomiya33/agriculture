'use client';

import Link from 'next/link';

export default function AICallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          今すぐAIアシスタントを<br />
          あなたの農業経営に導入しませんか？
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          体験版で効果を実感いただけましたら、
          ぜひ本格的にAI支援を始めてみてください。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/signup"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            無料で始める
          </Link>
          <Link
            href="/features"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            全機能を見る
          </Link>
        </div>

        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-6">
            AIアシスタント導入のメリット
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start text-left">
              <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full mr-4 flex-shrink-0">
                <i className="ri-time-line text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">時間削減</h4>
                <p className="text-white/80">マーケティング作業時間を70%削減</p>
              </div>
            </div>
            <div className="flex items-start text-left">
              <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full mr-4 flex-shrink-0">
                <i className="ri-money-dollar-circle-line text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">収益向上</h4>
                <p className="text-white/80">平均42%の売上向上を実現</p>
              </div>
            </div>
            <div className="flex items-start text-left">
              <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full mr-4 flex-shrink-0">
                <i className="ri-target-line text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">精度向上</h4>
                <p className="text-white/80">データに基づく正確な判断</p>
              </div>
            </div>
            <div className="flex items-start text-left">
              <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full mr-4 flex-shrink-0">
                <i className="ri-support-line text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">24時間サポート</h4>
                <p className="text-white/80">いつでも相談できる安心感</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-white/80 text-sm">
          <p>30日間の無料体験期間中はいつでもキャンセル可能です</p>
        </div>
      </div>
    </section>
  );
}