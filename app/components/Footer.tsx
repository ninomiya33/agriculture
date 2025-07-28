'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-lg">
                <i className="ri-plant-line text-white"></i>
              </div>
              <span className="text-xl font-bold font-pacifico">農業AI支援</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI技術を活用した農作物の販路開拓とマーケティング支援プラットフォーム。
              あなたの農業経営を次のレベルへ。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-blue-400"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-sky-400"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-pink-400"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-youtube-fill text-red-400"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">機能</h3>
            <ul className="space-y-2">
              <li><Link href="/marketing-strategy" className="text-gray-400 hover:text-white transition-colors cursor-pointer">マーケティング戦略</Link></li>
              <li><Link href="/sales-channels" className="text-gray-400 hover:text-white transition-colors cursor-pointer">販路提案</Link></li>
              <li><Link href="/market-analysis" className="text-gray-400 hover:text-white transition-colors cursor-pointer">相場分析</Link></li>
              <li><Link href="/sns-templates" className="text-gray-400 hover:text-white transition-colors cursor-pointer">SNSテンプレート</Link></li>
              <li><Link href="/price-simulator" className="text-gray-400 hover:text-white transition-colors cursor-pointer">価格シミュレーター</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">サポート</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors cursor-pointer">ヘルプセンター</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">お問い合わせ</Link></li>
              <li><Link href="/tutorial" className="text-gray-400 hover:text-white transition-colors cursor-pointer">チュートリアル</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors cursor-pointer">よくある質問</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors cursor-pointer">ブログ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 農業AI支援. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}