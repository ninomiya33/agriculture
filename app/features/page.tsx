
'use client';

import Link from 'next/link';
import FeatureDetail from './FeatureDetail';
import FeatureComparison from './FeatureComparison';
import FeatureBenefits from './FeatureBenefits';

export default function FeaturesPage() {
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
              <Link href="/features" className="text-green-600 font-semibold cursor-pointer">
                機能一覧
              </Link>
              <Link href="/ai-support" className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer">
                AI支援
              </Link>
              <Link href="/signup" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer">
                無料で始める
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(https://readdy.ai/api/search-image?query=Modern%20agricultural%20technology%20concept%20with%20digital%20farming%20tools%2C%20AI%20assistance%20in%20agriculture%2C%20smart%20farming%20dashboard%20interface%2C%20clean%20minimalist%20design%20with%20green%20and%20blue%20tones%2C%20futuristic%20farming%20visualization%2C%20technology%20meets%20agriculture&width=1920&height=600&seq=features001&orientation=landscape)`
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            強力な9つの機能
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            農作物の販売を成功に導く、AIとデータに基づいた包括的な支援ツールの詳細をご紹介します。
          </p>
        </div>
      </div>

      <FeatureDetail />
      <FeatureComparison />
      <FeatureBenefits />

      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            今すぐ始めて、売上を向上させましょう
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            すべての機能を無料でお試しいただけます。登録は3分で完了します。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 whitespace-nowrap cursor-pointer">
              無料で始める
            </Link>
            <Link href="/ai-support" className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-green-500 transition-all duration-200 whitespace-nowrap cursor-pointer">
              デモを見る
            </Link>
          </div>
        </div>
      </section>

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
