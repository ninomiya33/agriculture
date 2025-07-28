'use client';

import Link from 'next/link';
import AIDemo from './AIDemo';
import AIFeatures from './AIFeatures';
import AITestimonials from './AITestimonials';
import AICallToAction from './AICallToAction';

export default function AISupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-green-600 cursor-pointer" style={{ fontFamily: '"Pacifico", serif' }}>
              logo
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                ホーム
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                機能一覧
              </Link>
              <Link href="/ai-support" className="text-green-600 font-semibold cursor-pointer">
                AI支援
              </Link>
              <Link href="/signup" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer">
                無料で始める
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=AI%20artificial%20intelligence%20technology%20assisting%20farmers%20in%20agriculture%2C%20futuristic%20farming%20with%20AI%20robots%20and%20automation%2C%20smart%20agriculture%20with%20digital%20assistance%2C%20modern%20farming%20technology%20with%20AI%20integration%2C%20clean%20tech%20illustration%20with%20blue%20and%20green%20color%20scheme&width=1920&height=600&seq=aidemo001&orientation=landscape)`
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AIアシスタントを<br />
            <span className="text-blue-600">実際に体験</span>してみよう
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            最新のAI技術があなたの農業経営をどのように変えるかを体験できます。
            実際の機能を使って、売上向上の可能性を確認してください。
          </p>
        </div>
      </div>

      <AIDemo />
      <AIFeatures />
      <AITestimonials />
      <AICallToAction />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Pacifico", serif' }}>logo</h3>
              <p className="text-gray-400">
                農作物の販売を成功に導く、AIとデータに基づいた包括的な支援プラットフォーム
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">機能</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/marketing-strategy" className="hover:text-white transition-colors cursor-pointer">マーケティング戦略</Link></li>
                <li><Link href="/sales-channels" className="hover:text-white transition-colors cursor-pointer">販路提案</Link></li>
                <li><Link href="/market-analysis" className="hover:text-white transition-colors cursor-pointer">相場分析</Link></li>
                <li><Link href="/sns-templates" className="hover:text-white transition-colors cursor-pointer">SNSテンプレート</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors cursor-pointer">ヘルプセンター</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors cursor-pointer">お問い合わせ</Link></li>
                <li><Link href="/tutorial" className="hover:text-white transition-colors cursor-pointer">使い方ガイド</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">会社概要</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">プライバシーポリシー</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors cursor-pointer">利用規約</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 農業支援プラットフォーム. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}