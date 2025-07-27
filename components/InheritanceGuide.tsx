
import React from 'react';
import { INHERITANCE_GUIDE_CONTENT as content } from '../constants';

const InheritanceGuide: React.FC = () => {
  return (
    <section id={content.id} className="py-20 md:py-28 bg-emerald-50/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 rounded-full p-4 mb-6">
            {content.mainIcon}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{content.title}</h2>
          <p className="mt-4 text-slate-600 text-lg">{content.subtitle}</p>
        </div>
        
        <div className="space-y-8">
          {content.sections.map((section, index) => (
            <div key={index} className="p-8 bg-white rounded-xl border border-slate-200 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">{section.title}</h3>
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

export default InheritanceGuide;
