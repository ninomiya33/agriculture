'use client';

const testimonials = [
  {
    name: '田中 健太郎',
    location: '群馬県・トマト農家',
    image: 'https://readdy.ai/api/search-image?query=Japanese%20male%20farmer%20in%20his%2050s%20smiling%20confidently%2C%20wearing%20work%20clothes%2C%20standing%20in%20a%20tomato%20greenhouse%2C%20professional%20portrait%2C%20natural%20lighting%2C%20friendly%20expression%2C%20agricultural%20background&width=120&height=120&seq=farmer001&orientation=squarish',
    quote: 'AIの提案通りにSNSマーケティングを始めたら、売上が3ヶ月で40%も上がりました。特に価格設定のアドバイスが的確で、利益率も大幅に改善しました。',
    rating: 5,
    improvement: '売上40%向上'
  },
  {
    name: '佐藤 美香',
    location: '長野県・有機野菜農家',
    image: 'https://readdy.ai/api/search-image?query=Japanese%20female%20farmer%20in%20her%2040s%20smiling%20warmly%2C%20wearing%20farming%20attire%2C%20standing%20in%20an%20organic%20vegetable%20field%2C%20professional%20portrait%2C%20natural%20outdoor%20lighting%2C%20confident%20expression&width=120&height=120&seq=farmer002&orientation=squarish',
    quote: 'AIが提案してくれた販路開拓のおかげで、新しい取引先を3社も見つけることができました。特にふるさと納税への参加は大きな収入源になっています。',
    rating: 5,
    improvement: '取引先3社増加'
  },
  {
    name: '山田 一郎',
    location: '北海道・じゃがいも農家',
    image: 'https://readdy.ai/api/search-image?query=Japanese%20male%20farmer%20in%20his%2060s%20with%20a%20kind%20smile%2C%20wearing%20farming%20clothes%2C%20standing%20in%20a%20potato%20field%2C%20professional%20portrait%2C%20natural%20lighting%2C%20experienced%20and%20wise%20expression&width=120&height=120&seq=farmer003&orientation=squarish',
    quote: 'パッケージ診断で商品の見せ方を変えたら、道の駅での売れ行きが倍増しました。AIのアドバイスは本当に実践的で、すぐに効果が現れます。',
    rating: 5,
    improvement: '売れ行き2倍'
  }
];

export default function AITestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI支援を体験した農家の声
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            実際にAIアシスタントを活用して成果を上げた農家の方々からの声をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold inline-block">
                {testimonial.improvement}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            AIアシスタントの平均的な成果
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold mb-2">+42%</div>
              <div className="text-blue-100">平均売上向上率</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3.2社</div>
              <div className="text-blue-100">新規取引先獲得数</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">78%</div>
              <div className="text-blue-100">マーケティング効率化</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}