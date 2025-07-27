import React from 'react';
import { RECRUITMENT_INFO } from '../constants';
import { UserGroupIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Recruitment: React.FC = () => {
  return (
    <section id="recruitment" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
           <div className="inline-block bg-slate-100 rounded-full p-4 mb-6">
             <UserGroupIcon className="h-10 w-10 text-slate-500" />
           </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">採用情報</h2>
          <p className="mt-8 text-xl text-sky-700 font-semibold">
            {RECRUITMENT_INFO.status}
          </p>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            {RECRUITMENT_INFO.message}
          </p>
           <div className="mt-8 p-6 bg-sky-50 border border-sky-200 rounded-lg inline-block">
            <p className="text-slate-700">ご応募は、下記メールアドレスに直接お問い合わせ下さい。</p>
            <a 
              href={`mailto:${RECRUITMENT_INFO.email}`}
              className="mt-3 inline-flex items-center gap-2 text-sky-800 bg-sky-200 hover:bg-sky-300 transition-colors px-4 py-2 rounded-full font-bold"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span>{RECRUITMENT_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
