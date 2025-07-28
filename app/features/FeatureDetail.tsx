
'use client';

import Link from 'next/link';

const features = [
  {
    icon: 'ri-lightbulb-line',
    title: 'マーケティング戦略支援',
    description: 'AIが「どんな人に、どんな手段で売るとよいか」を提案。Instagram向け若い主婦層など具体的なターゲット設定をサポート。',
    details: [
      'ターゲット顧客の詳細分析',
      '最適な販売チャネルの提案',
      'SNSマーケティング戦略の立案',
      '競合他社の分析と差別化提案'
    ],
    image: 'https://readdy.ai/api/search-image?query=Digital%20marketing%20strategy%20visualization%20with%20target%20audience%20analysis%2C%20social%20media%20marketing%20for%20agriculture%2C%20AI-powered%20customer%20insights%20dashboard%2C%20modern%20marketing%20tools%20for%20farmers%2C%20Instagram%20marketing%20concept&width=600&height=400&seq=marketing001&orientation=landscape',
    link: '/marketing-strategy'
  },
  {
    icon: 'ri-store-line',
    title: '販路提案',
    description: '商品ジャンルや地域に合った販路をAIが提案。道の駅・ふるさと納税・ECサイトなど最適な販売チャネルを見つけます。',
    details: [
      '地域特化型販路の発掘',
      'ECサイト適性診断',
      '道の駅・直売所マッチング',
      'ふるさと納税参加支援'
    ],
    image: 'https://readdy.ai/api/search-image?query=Multiple%20sales%20channels%20for%20agricultural%20products%2C%20farmers%20market%2C%20online%20store%2C%20direct%20sales%2C%20distribution%20network%20visualization%2C%20e-commerce%20platform%20for%20farm%20products%2C%20modern%20retail%20concept&width=600&height=400&seq=sales001&orientation=landscape',
    link: '/sales-channels'
  },
  {
    icon: 'ri-line-chart-line',
    title: '相場分析',
    description: '過去データや市場情報から「今売るべき価格帯」や「売れ筋野菜」を可視化。データに基づいた戦略的な販売計画を立てられます。',
    details: [
      'リアルタイム市場価格分析',
      '季節変動パターンの把握',
      '地域別価格比較',
      '需要予測とトレンド分析'
    ],
    image: 'https://readdy.ai/api/search-image?query=Market%20analysis%20dashboard%20with%20price%20charts%20and%20graphs%2C%20agricultural%20commodity%20trading%20data%2C%20market%20trends%20visualization%2C%20financial%20analysis%20for%20farming%20business%2C%20data%20analytics%20interface&width=600&height=400&seq=analysis001&orientation=landscape',
    link: '/market-analysis'
  },
  {
    icon: 'ri-camera-line',
    title: 'SNSテンプレート',
    description: 'Instagram投稿用画像テンプレートや文章を自動生成。魅力的な商品写真と効果的なキャッチコピーでSNSマーケティングを強化。',
    details: [
      'Instagram投稿テンプレート生成',
      '商品写真の最適化提案',
      'ハッシュタグ自動提案',
      'エンゲージメント向上のコツ'
    ],
    image: 'https://readdy.ai/api/search-image?query=Social%20media%20template%20creation%20for%20farmers%2C%20Instagram%20post%20templates%20with%20fresh%20vegetables%2C%20mobile%20phone%20displaying%20farm%20social%20media%20content%2C%20creative%20agricultural%20marketing%20materials&width=600&height=400&seq=social001&orientation=landscape',
    link: '/sns-templates'
  },
  {
    icon: 'ri-gift-line',
    title: '売れるパッケージ診断',
    description: '商品の見せ方・名前・写真などをAIが評価＆アドバイス。パッケージデザインから商品名まで売上向上のための改善提案。',
    details: [
      'パッケージデザイン評価',
      '商品名の最適化提案',
      '写真撮影のアドバイス',
      'ブランディング戦略サポート'
    ],
    image: 'https://readdy.ai/api/search-image?query=Product%20packaging%20design%20for%20organic%20vegetables%2C%20attractive%20farm%20product%20branding%2C%20packaging%20evaluation%20and%20improvement%2C%20modern%20agricultural%20product%20presentation%2C%20creative%20packaging%20solutions&width=600&height=400&seq=package001&orientation=landscape',
    link: '/package-diagnosis'
  },
  {
    icon: 'ri-calculator-line',
    title: '価格シミュレーター',
    description: '原価・送料・梱包費などから「適正利益が出る価格」を算出。競合分析も含めた戦略的な価格設定をサポート。',
    details: [
      '原価計算の自動化',
      '送料・梱包費の最適化',
      '競合価格との比較分析',
      '利益率シミュレーション'
    ],
    image: 'https://readdy.ai/api/search-image?query=Price%20calculation%20simulator%20interface%2C%20cost%20analysis%20for%20agricultural%20products%2C%20profit%20margin%20calculator%2C%20business%20planning%20tools%20for%20farmers%2C%20financial%20planning%20dashboard&width=600&height=400&seq=price001&orientation=landscape',
    link: '/price-simulator'
  },
  {
    icon: 'ri-calendar-line',
    title: '販売カレンダー',
    description: '旬・市場動向・イベント連動した販売計画カレンダー。最適なタイミングで最大の売上を実現する年間計画を立てられます。',
    details: [
      '季節別販売計画の立案',
      'イベント連動販売提案',
      '収穫時期と販売時期の最適化',
      '年間売上計画サポート'
    ],
    image: 'https://readdy.ai/api/search-image?query=Agricultural%20sales%20calendar%20with%20seasonal%20planning%2C%20farming%20schedule%20management%2C%20harvest%20timing%20optimization%2C%20annual%20sales%20planning%20for%20farmers%2C%20seasonal%20marketing%20strategy&width=600&height=400&seq=calendar001&orientation=landscape',
    link: '/sales-calendar'
  },
  {
    icon: 'ri-handshake-line',
    title: '取引マッチング',
    description: 'BtoB（飲食店・卸）向けのマッチング支援。レストランや小売店との直接取引で安定した販路を確保できます。',
    details: [
      'レストラン・飲食店との直接取引',
      '卸売業者とのマッチング',
      '契約条件の交渉サポート',
      '長期取引関係の構築'
    ],
    image: 'https://readdy.ai/api/search-image?query=Business-to-business%20agricultural%20trading%2C%20restaurant%20and%20farm%20partnership%2C%20wholesale%20market%20connections%2C%20professional%20handshake%20between%20farmer%20and%20restaurant%20owner%2C%20B2B%20agricultural%20commerce&width=600&height=400&seq=b2b001&orientation=landscape',
    link: '/b2b-matching'
  },
  {
    icon: 'ri-shopping-cart-line',
    title: 'オンライン直売所',
    description: '自分専用のオンライン直売ページを自動生成。QRコードで簡単に配布可能な個人販売サイトを作成。',
    details: [
      '個人販売サイトの自動生成',
      'QRコード配布システム',
      '決済システム統合',
      'オーダー管理の自動化'
    ],
    image: 'https://readdy.ai/api/search-image?query=Online%20farm%20store%20website%20on%20mobile%20device%2C%20QR%20code%20for%20direct%20sales%2C%20digital%20marketplace%20for%20farmers%2C%20e-commerce%20platform%20for%20agricultural%20products%2C%20modern%20online%20shopping%20experience&width=600&height=400&seq=online001&orientation=landscape',
    link: '/online-store'
  }
];

export default function FeatureDetail() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-xl mr-4">
                    <i className={`${feature.icon} text-3xl text-green-600`}></i>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <i className="ri-check-line text-green-600 mr-3 text-lg"></i>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  href={feature.link}
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  詳しく見る
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
              <div className="flex-1">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-96 object-cover object-top rounded-xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
