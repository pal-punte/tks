
import React from 'react';
import { PRIVACY_POLICY_CONTENT } from '../constants';

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy-policy" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">{PRIVACY_POLICY_CONTENT.title}</h2>
        <div className="space-y-6 text-slate-600 text-sm leading-relaxed bg-white p-8 rounded-lg border border-slate-200">
            <div className="space-y-4">{PRIVACY_POLICY_CONTENT.content}</div>
            <div className="pt-4 mt-6 border-t border-slate-200 text-center">
              <p className="font-semibold">{PRIVACY_POLICY_CONTENT.contact.line1}</p>
              <p>{PRIVACY_POLICY_CONTENT.contact.line2}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;