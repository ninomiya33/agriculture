
'use client';

const features = [
  {
    icon: 'ri-lightbulb-line',
    title: 'AI戦略提案',
    description: 'あなたの農作物に最適なマーケティング戦略をAIが提案します。'
  },
  {
    icon: 'ri-line-chart-line',
    title: '売上分析',
    description: '詳細な売上データ分析で、改善点を明確に把握できます。'
  },
  {
    icon: 'ri-store-line',
    title: '販路開拓',
    description: '新しい販売チャネルを発見し、売上の多様化を実現します。'
  },
  {
    icon: 'ri-camera-line',
    title: 'SNS支援',
    description: '効果的なSNS投稿テンプレートで、簡単にマーケティングができます。'
  },
  {
    icon: 'ri-calculator-line',
    title: '価格最適化',
    description: 'データに基づいた価格設定で、利益を最大化します。'
  },
  {
    icon: 'ri-calendar-line',
    title: '販売計画',
    description: '年間を通じた最適な販売スケジュールを立てられます。'
  }
];

export default function SignupFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            今すぐ使える機能
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            登録後すぐに、以下の機能をご利用いただけます
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                <i className={`${feature.icon} text-2xl text-green-600`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
