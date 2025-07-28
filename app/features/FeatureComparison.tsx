
'use client';

const comparisonData = [
  {
    feature: 'マーケティング戦略支援',
    traditional: '経験と勘に頼った販売',
    ourPlatform: 'AIによる科学的な戦略提案',
    benefit: '売上30%向上'
  },
  {
    feature: '販路開拓',
    traditional: '手探りで新規開拓',
    ourPlatform: 'データに基づく最適な販路提案',
    benefit: '販路数3倍増加'
  },
  {
    feature: '価格設定',
    traditional: '周辺農家の価格を参考',
    ourPlatform: '市場分析による適正価格算出',
    benefit: '利益率20%改善'
  },
  {
    feature: 'SNSマーケティング',
    traditional: '投稿内容に困る',
    ourPlatform: 'AI生成テンプレートで効率化',
    benefit: 'フォロワー数5倍増'
  },
  {
    feature: '取引管理',
    traditional: '電話・FAXでのやり取り',
    ourPlatform: 'デジタル化された取引システム',
    benefit: '作業時間70%削減'
  }
];

export default function FeatureComparison() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            従来の方法との比較
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIと最新技術を活用することで、従来の農業経営を大きく改善します。
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            <div className="bg-green-600 text-white p-6 font-semibold text-lg">
              項目
            </div>
            <div className="bg-red-500 text-white p-6 font-semibold text-lg">
              従来の方法
            </div>
            <div className="bg-blue-600 text-white p-6 font-semibold text-lg">
              当プラットフォーム
            </div>
            <div className="bg-yellow-500 text-white p-6 font-semibold text-lg">
              改善効果
            </div>
          </div>
          
          {comparisonData.map((row, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-4 gap-0 border-t border-gray-200">
              <div className="p-6 font-semibold text-gray-900 bg-green-50">
                {row.feature}
              </div>
              <div className="p-6 text-gray-700 bg-red-50">
                <div className="flex items-center">
                  <i className="ri-close-circle-line text-red-500 mr-2"></i>
                  {row.traditional}
                </div>
              </div>
              <div className="p-6 text-gray-700 bg-blue-50">
                <div className="flex items-center">
                  <i className="ri-check-circle-line text-blue-500 mr-2"></i>
                  {row.ourPlatform}
                </div>
              </div>
              <div className="p-6 font-semibold text-yellow-700 bg-yellow-50">
                <div className="flex items-center">
                  <i className="ri-trophy-line text-yellow-600 mr-2"></i>
                  {row.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
