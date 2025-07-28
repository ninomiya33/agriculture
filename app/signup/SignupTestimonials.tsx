
'use client';

const testimonials = [
  {
    name: '田中明',
    location: '熊本県',
    crops: 'トマト農家',
    avatar: 'https://readdy.ai/api/search-image?query=Japanese%20middle%20aged%20male%20farmer%20portrait%20smiling%20confidently%20in%20farm%20setting%20with%20tomatoes%2C%20professional%20headshot%20style%2C%20natural%20lighting%2C%20clean%20background%2C%20agricultural%20business%20owner&width=150&height=150&seq=testimonial001&orientation=squarish',
    content: '登録後3ヶ月で売上が40%向上しました。特にAIによる販路提案が素晴らしく、これまで知らなかった販売チャネルを発見できました。',
    rating: 5
  },
  {
    name: '佐藤花子',
    location: '長野県',
    crops: '野菜農家',
    avatar: 'https://readdy.ai/api/search-image?query=Japanese%20middle%20aged%20female%20farmer%20portrait%20smiling%20warmly%20in%20greenhouse%20with%20fresh%20vegetables%2C%20professional%20headshot%20style%2C%20natural%20lighting%2C%20clean%20background%2C%20agricultural%20business%20owner&width=150&height=150&seq=testimonial002&orientation=squarish',
    content: 'SNSマーケティングが苦手でしたが、テンプレート機能のおかげで簡単に投稿できるようになりました。フォロワーも倍増しています。',
    rating: 5
  },
  {
    name: '山田太郎',
    location: '宮崎県',
    crops: '果物農家',
    avatar: 'https://readdy.ai/api/search-image?query=Japanese%20senior%20male%20farmer%20portrait%20smiling%20proudly%20in%20orchard%20with%20fruits%2C%20professional%20headshot%20style%2C%20natural%20lighting%2C%20clean%20background%2C%20agricultural%20business%20owner&width=150&height=150&seq=testimonial003&orientation=squarish',
    content: '価格設定に悩んでいましたが、シミュレーターを使って適正価格を見つけることができました。利益率が大幅に改善されました。',
    rating: 5
  }
];

export default function SignupTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            利用者の声
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            すでに多くの農家の方々にご利用いただいています
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location} {testimonial.crops}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-green-50 px-6 py-3 rounded-lg">
            <i className="ri-shield-check-line text-green-600 mr-2"></i>
            <span className="text-green-800 font-medium">
              30日間無料トライアル・いつでも解約可能
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
