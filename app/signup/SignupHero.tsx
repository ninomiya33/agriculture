
'use client';

export default function SignupHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          無料で始める<br />
          <span className="text-green-600">農作物販売支援</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          AIが提供する販路開拓とマーケティング支援で、
          あなたの農業経営を次のレベルへ導きます。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
              <i className="ri-gift-line text-2xl text-green-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">完全無料</h3>
            <p className="text-gray-600">基本機能は永久無料でご利用いただけます</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
              <i className="ri-time-line text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">3分で開始</h3>
            <p className="text-gray-600">簡単な登録で今すぐ利用開始できます</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
              <i className="ri-shield-check-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">安心サポート</h3>
            <p className="text-gray-600">専門スタッフがしっかりサポートします</p>
          </div>
        </div>
      </div>
    </section>
  );
}
