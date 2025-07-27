
import React from 'react';
import { TAX_RETURN_GUIDE_CONTENT as content } from '../constants';

const TaxReturnGuide: React.FC = () => {
  return (
    <section id={content.id} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-indigo-100 rounded-full p-4 mb-6">
            {content.mainIcon}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{content.title}</h2>
          <p className="mt-4 text-slate-600 text-lg">{content.subtitle}</p>
        </div>
        
        {content.notice && (
            <div className="mb-12">
                {content.notice}
            </div>
        )}

        <div className="space-y-8">
          {content.sections.map((section, index) => (
            <div key={index} className="p-8 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">{section.title}</h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaxReturnGuide;
