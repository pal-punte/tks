
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Flow: React.FC = () => {
  return (
    <section id="flow" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">ご契約までの流れ</h2>
          <p className="mt-4 text-slate-600 text-lg">
            お問い合わせから業務開始まで、簡単4ステップでスムーズにご案内します。
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step) => (
                  <div key={step.step} className="relative text-center">
                      <div className="flex-shrink-0 w-16 h-16 mx-auto mb-4 rounded-full bg-sky-700 text-white flex items-center justify-center font-black text-2xl">
                          {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                      <p className="mt-2 text-slate-600 text-sm">{step.description}</p>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flow;
