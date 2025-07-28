'use client';

import { useState } from 'react';

export default function AIDemo() {
  const [activeDemo, setActiveDemo] = useState('marketing');
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState('');

  const demos = [
    {
      id: 'marketing',
      title: 'マーケティング戦略提案',
      description: '作物の情報を入力すると、AIが最適な販売戦略を提案します',
      placeholder: '例：トマト、有機栽培、関東地区',
      icon: 'ri-lightbulb-line'
    },
    {
      id: 'pricing',
      title: '価格分析',
      description: '市場データをもとに適正価格を算出します',
      placeholder: '例：きゅうり、1kg、群馬県',
      icon: 'ri-calculator-line'
    },
    {
      id: 'channels',
      title: '販路提案',
      description: 'あなたの商品に最適な販売チャネルを見つけます',
      placeholder: '例：白菜、大量生産、北海道',
      icon: 'ri-store-line'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setIsProcessing(true);
    
    setTimeout(() => {
      let response = '';
      
      if (activeDemo === 'marketing') {
        response = `📊 マーケティング戦略提案\n\n✅ ターゲット顧客：健康志向の主婦層（30-50代）\n✅ 推奨販路：Instagram、道の駅、有機食品店\n✅ 価格帯：一般トマトの1.5倍〜2倍\n✅ 訴求ポイント：有機栽培、地域密着、安全性\n\n📈 予想売上向上：+35%`;
      } else if (activeDemo === 'pricing') {
        response = `💰 価格分析結果\n\n📊 現在の市場価格：280円/kg\n📊 推奨販売価格：320円/kg\n📊 利益率：28%\n\n🔍 分析詳細：\n• 季節需要が高い時期です\n• 近隣地域での供給量が少なめ\n• 品質を考慮した価格設定が可能`;
      } else {
        response = `🛒 販路提案\n\n🏪 最適な販路：\n1. 地元直売所（売上予想：月50万円）\n2. 道の駅（売上予想：月30万円）\n3. 地域スーパー（売上予想：月80万円）\n\n📋 次のステップ：\n• 直売所への出荷準備\n• パッケージデザインの改善\n• 定期配送体制の構築`;
      }
      
      setResult(response);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AIアシスタントを体験
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            実際にAIがどのような提案をするかを体験できます。下のタブを選んで試してみてください。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => {
                  setActiveDemo(demo.id);
                  setResult('');
                  setInputValue('');
                }}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeDemo === demo.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`${demo.icon} mr-2`}></i>
                {demo.title}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {demos.find(d => d.id === activeDemo)?.title}
              </h3>
              <p className="text-gray-600">
                {demos.find(d => d.id === activeDemo)?.description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  商品情報を入力してください
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={demos.find(d => d.id === activeDemo)?.placeholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              
              <button
                type="submit"
                disabled={isProcessing || !inputValue.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    AI分析中...
                  </span>
                ) : (
                  'AI分析を開始'
                )}
              </button>
            </form>

            {result && (
              <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <i className="ri-robot-line text-blue-600 mr-2"></i>
                  AI分析結果
                </h4>
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {result}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}