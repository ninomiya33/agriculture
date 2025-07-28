
'use client';

import { useState } from 'react';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    farmName: '',
    ownerName: '',
    email: '',
    phone: '',
    prefecture: '',
    city: '',
    mainCrops: '',
    experience: '',
    salesChannel: '',
    monthlyRevenue: '',
    goals: '',
    howDidYouHear: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://readdy.ai/api/forms/signup-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          farmName: '',
          ownerName: '',
          email: '',
          phone: '',
          prefecture: '',
          city: '',
          mainCrops: '',
          experience: '',
          salesChannel: '',
          monthlyRevenue: '',
          goals: '',
          howDidYouHear: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            無料アカウント作成
          </h2>
          <p className="text-lg text-gray-600">
            以下の情報を入力して、今すぐ始めましょう
          </p>
        </div>

        <form id="signup-form" onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                農園・農場名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="farmName"
                value={formData.farmName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="例：田中農園"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                代表者名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="例：田中太郎"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="例：tanaka@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="例：090-1234-5678"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                都道府県 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="prefecture"
                value={formData.prefecture}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="例：熊本県"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                市区町村 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="例：熊本市"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                主な栽培作物 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="mainCrops"
                value={formData.mainCrops}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="例：トマト、キュウリ、ナス"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                農業経験年数
              </label>
              <div className="relative">
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white cursor-pointer">
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-transparent appearance-none pr-8 focus:outline-none cursor-pointer"
                  >
                    <option value="">選択してください</option>
                    <option value="1年未満">1年未満</option>
                    <option value="1-3年">1-3年</option>
                    <option value="3-5年">3-5年</option>
                    <option value="5-10年">5-10年</option>
                    <option value="10年以上">10年以上</option>
                  </select>
                </div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                現在の主な販路
              </label>
              <div className="relative">
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white cursor-pointer">
                  <select
                    name="salesChannel"
                    value={formData.salesChannel}
                    onChange={handleChange}
                    className="w-full bg-transparent appearance-none pr-8 focus:outline-none cursor-pointer"
                  >
                    <option value="">選択してください</option>
                    <option value="JA（農協）">JA（農協）</option>
                    <option value="道の駅">道の駅</option>
                    <option value="直売所">直売所</option>
                    <option value="ふるさと納税">ふるさと納税</option>
                    <option value="ECサイト">ECサイト</option>
                    <option value="飲食店直販">飲食店直販</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                月商規模
              </label>
              <div className="relative">
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white cursor-pointer">
                  <select
                    name="monthlyRevenue"
                    value={formData.monthlyRevenue}
                    onChange={handleChange}
                    className="w-full bg-transparent appearance-none pr-8 focus:outline-none cursor-pointer"
                  >
                    <option value="">選択してください</option>
                    <option value="10万円未満">10万円未満</option>
                    <option value="10-30万円">10-30万円</option>
                    <option value="30-50万円">30-50万円</option>
                    <option value="50-100万円">50-100万円</option>
                    <option value="100万円以上">100万円以上</option>
                  </select>
                </div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                このサービスを知ったきっかけ
              </label>
              <div className="relative">
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white cursor-pointer">
                  <select
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleChange}
                    className="w-full bg-transparent appearance-none pr-8 focus:outline-none cursor-pointer"
                  >
                    <option value="">選択してください</option>
                    <option value="Google検索">Google検索</option>
                    <option value="SNS（Facebook）">SNS（Facebook）</option>
                    <option value="SNS（Twitter）">SNS（Twitter）</option>
                    <option value="SNS（Instagram）">SNS（Instagram）</option>
                    <option value="友人・知人の紹介">友人・知人の紹介</option>
                    <option value="農業関連のイベント">農業関連のイベント</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              利用目的・達成したい目標
            </label>
            <textarea
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              rows={4}
              maxLength={500}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
              placeholder="例：売上を30%向上させたい、新しい販路を開拓したい、SNSマーケティングを始めたい など"
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {formData.goals.length}/500文字
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              {isSubmitting ? '送信中...' : '無料で始める'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <i className="ri-check-circle-fill text-green-600 mr-2"></i>
                <span className="text-green-800">登録が完了しました！メールをご確認ください。</span>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <i className="ri-error-warning-fill text-red-600 mr-2"></i>
                <span className="text-red-800">送信に失敗しました。再度お試しください。</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
