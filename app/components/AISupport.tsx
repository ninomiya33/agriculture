'use client';

export default function AISupport() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              AI が農業を<br />
              <span className="text-green-600">スマートに</span>変える
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              最新のAI技術を活用して、農作物の販売戦略を自動化。
              データに基づいた意思決定で、売上を最大化します。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0">
                  <i className="ri-robot-line text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    パーソナライズされた提案
                  </h3>
                  <p className="text-gray-600">
                    あなたの農作物と地域特性に合わせた最適な販売戦略をAIが提案します。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <i className="ri-bar-chart-line text-green-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    リアルタイム市場分析
                  </h3>
                  <p className="text-gray-600">
                    市場動向を常に監視し、最適な販売タイミングと価格を提案します。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0">
                  <i className="ri-magic-line text-purple-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    自動コンテンツ生成
                  </h3>
                  <p className="text-gray-600">
                    商品説明文やSNS投稿文を自動生成し、マーケティング作業を効率化します。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20AI%20technology%20in%20agriculture%20concept%2C%20futuristic%20farm%20automation%20with%20digital%20interface%2C%20smart%20farming%20technology%2C%20artificial%20intelligence%20dashboard%20for%20crop%20management%2C%20clean%20tech%20illustration%2C%20blue%20and%20green%20color%20scheme%2C%20high-tech%20agricultural%20innovation&width=600&height=400&seq=ai001&orientation=landscape"
                alt="AI農業支援"
                className="rounded-2xl shadow-2xl object-cover object-top w-full h-96"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500 rounded-full opacity-10 z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-10 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}