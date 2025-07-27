
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">TKS税理士法人の<span className="text-sky-700">3つ</span>の特徴</h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            お客様から選ばれる理由がここにあります。
            <br/>
            親身なサポートで、お客様の事業の成長を支援します。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="inline-block bg-sky-100 rounded-full p-4 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-4 text-slate-600 text-left leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
