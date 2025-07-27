
import React from 'react';
import { ACCOUNTANT_CHOICE_GUIDE_CONTENT } from '../constants';
import { LightBulbIcon } from '@heroicons/react/24/outline';

const AccountantChoiceGuide: React.FC = () => {
  return (
    <section id="accountant-choice-guide" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 rounded-full p-4 mb-6">
            <LightBulbIcon className="h-10 w-10 text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{ACCOUNTANT_CHOICE_GUIDE_CONTENT.title}</h2>
          <p className="mt-4 text-slate-600 text-lg">{ACCOUNTANT_CHOICE_GUIDE_CONTENT.subtitle}</p>
        </div>
        
        <div className="space-y-8">
          {ACCOUNTANT_CHOICE_GUIDE_CONTENT.sections.map((section, index) => (
            <div key={index} className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-sky-800 mb-4">{section.title}</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default AccountantChoiceGuide;
