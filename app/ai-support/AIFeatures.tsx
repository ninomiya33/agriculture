'use client';

const features = [
  {
    icon: 'ri-brain-line',
    title: '高度な学習機能',
    description: '使用すればするほど、あなたの農業経営に最適化された提案を行います。',
    benefits: [
      '個人の栽培パターンを学習',
      '地域特性を考慮した提案',
      '季節変動を予測した戦略立案'
    ]
  },
  {
    icon: 'ri-time-line',
    title: 'リアルタイム分析',
    description: '市場データを24時間監視し、最適なタイミングでアドバイスを提供します。',
    benefits: [
      '市場価格の変動を即座に検知',
      '需要予測に基づく販売時期提案',
      '競合状況の自動分析'
    ]
  },
  {
    icon: 'ri-chat-3-line',
    title: '対話型サポート',
    description: 'チャット形式でいつでも質問でき、分かりやすい回答を得られます。',
    benefits: [
      '24時間いつでも相談可能',
      '専門用語を使わない分かりやすい説明',
      '具体的な行動提案'
    ]
  },
  {
    icon: 'ri-database-line',
    title: 'データ統合分析',
    description: '複数のデータソースを統合し、総合的な判断をサポートします。',
    benefits: [
      '気象データとの連携',
      '物流コストの最適化',
      '消費者トレンドの分析'
    ]
  }
];

export default function AIFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AIアシスタントの特徴
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            最新のAI技術を活用した農業支援システムの主な特徴をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-xl mr-4">
                  <i className={`${feature.icon} text-3xl text-blue-600`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start">
                    <i className="ri-check-line text-green-600 mr-3 text-lg mt-0.5"></i>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI技術の進歩により可能になった支援
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <i className="ri-speed-line text-3xl text-green-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">処理速度</h4>
                <p className="text-gray-600">従来の10倍の速度で市場分析を実行</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className="ri-accuracy-line text-3xl text-blue-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">精度向上</h4>
                <p className="text-gray-600">95%の精度で価格変動を予測</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                  <i className="ri-global-line text-3xl text-purple-600"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">広範囲対応</h4>
                <p className="text-gray-600">全国50以上の地域に対応</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}