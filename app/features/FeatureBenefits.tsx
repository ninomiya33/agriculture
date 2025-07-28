
'use client';

const benefits = [
  {
    icon: 'ri-time-line',
    title: '作業時間を70%削減',
    description: '自動化された機能により、マーケティングや販売管理にかかる時間を大幅に短縮できます。',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: '売上30%向上',
    description: 'AI分析による最適な価格設定と販路開拓で、平均30%の売上向上を実現します。',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: 'ri-user-heart-line',
    title: '新規顧客獲得率5倍',
    description: 'SNSマーケティング支援により、新規顧客の獲得率が従来の5倍に向上します。',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: 'ri-shield-check-line',
    title: '安定した収益確保',
    description: '複数の販路確保と価格変動リスクの分散により、安定した収益を実現します。',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: 'ri-lightbulb-line',
    title: '経営の見える化',
    description: 'データに基づいた経営判断により、より戦略的な農業経営が可能になります。',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: 'ri-team-line',
    title: 'コミュニティ連携',
    description: '他の農家や取引先との連携により、お互いに成長できる環境を構築します。',
    color: 'bg-indigo-100 text-indigo-600'
  }
];

const stats = [
  { number: '2,500+', label: '利用農家数' },
  { number: '98%', label: '顧客満足度' },
  { number: '150%', label: '平均売上向上率' },
  { number: '24/7', label: 'AI支援対応' }
];

export default function FeatureBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            導入効果とメリット
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            実際にご利用いただいている農家の皆様から、数多くの成功事例をいただいています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 flex items-center justify-center ${benefit.color} rounded-xl mx-auto mb-6`}>
                <i className={`${benefit.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">実績数値</h3>
            <p className="text-xl text-green-100">
              多くの農家様にご利用いただき、確実な成果を上げています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              成功事例：田中農園様
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                「従来は直売所での販売のみでしたが、プラットフォームを活用してInstagramマーケティングを始めたところ、3ヶ月で売上が2倍になりました。」
              </p>
              <p>
                「AI分析による価格設定で、適正な利益を確保しながら競争力のある価格を実現。お客様からも『お得感がある』と好評です。」
              </p>
              <p>
                「レストランとの直接取引も開始し、安定した収益源を確保できました。経営が格段に安定しています。」
              </p>
            </div>
          </div>
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Happy%20successful%20farmer%20in%20vegetable%20field%2C%20smiling%20agricultural%20worker%20with%20fresh%20produce%2C%20successful%20farming%20business%20owner%2C%20modern%20agriculture%20success%20story%2C%20confident%20farmer%20portrait%20with%20crops&width=600&height=400&seq=success001&orientation=landscape"
              alt="成功事例"
              className="w-full h-80 object-cover object-top rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
