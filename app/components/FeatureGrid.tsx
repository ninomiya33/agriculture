'use client';

import Link from 'next/link';

const features = [
  {
    icon: 'ri-lightbulb-line',
    title: 'マーケティング戦略支援',
    description: 'AIが「どんな人に、どんな手段で売るとよいか」を提案。Instagram向け若い主婦層など具体的なターゲット設定をサポート。',
    link: '/marketing-strategy'
  },
  {
    icon: 'ri-store-line',
    title: '販路提案',
    description: '商品ジャンルや地域に合った販路をAIが提案。道の駅・ふるさと納税・ECサイトなど最適な販売チャネルを見つけます。',
    link: '/sales-channels'
  },
  {
    icon: 'ri-line-chart-line',
    title: '相場分析',
    description: '過去データや市場情報から「今売るべき価格帯」や「売れ筋野菜」を可視化。データに基づいた戦略的な販売計画を立てられます。',
    link: '/market-analysis'
  },
  {
    icon: 'ri-camera-line',
    title: 'SNSテンプレート',
    description: 'Instagram投稿用画像テンプレートや文章を自動生成。魅力的な商品写真と効果的なキャッチコピーでSNSマーケティングを強化。',
    link: '/sns-templates'
  },
  {
    icon: 'ri-gift-line',
    title: '売れるパッケージ診断',
    description: '商品の見せ方・名前・写真などをAIが評価＆アドバイス。パッケージデザインから商品名まで売上向上のための改善提案。',
    link: '/package-diagnosis'
  },
  {
    icon: 'ri-calculator-line',
    title: '価格シミュレーター',
    description: '原価・送料・梱包費などから「適正利益が出る価格」を算出。競合分析も含めた戦略的な価格設定をサポート。',
    link: '/price-simulator'
  },
  {
    icon: 'ri-calendar-line',
    title: '販売カレンダー',
    description: '旬・市場動向・イベント連動した販売計画カレンダー。最適なタイミングで最大の売上を実現する年間計画を立てられます。',
    link: '/sales-calendar'
  },
  {
    icon: 'ri-handshake-line',
    title: '取引マッチング',
    description: 'BtoB（飲食店・卸）向けのマッチング支援。レストランや小売店との直接取引で安定した販路を確保できます。',
    link: '/b2b-matching'
  },
  {
    icon: 'ri-shopping-cart-line',
    title: 'オンライン直売所',
    description: '自分専用のオンライン直売ページを自動生成。QRコードで簡単に配布可能な個人販売サイトを作成。',
    link: '/online-store'
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            9つの強力な機能
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            農作物の販売を成功に導く、AIとデータに基づいた包括的な支援ツールをご提供します。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.link}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-6 group-hover:bg-green-200 transition-colors">
                <i className={`${feature.icon} text-2xl text-green-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}