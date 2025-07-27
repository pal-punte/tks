import React from 'react';
import { FIRM_NAME, REPRESENTATIVE_NAME, GREETING_TEXT, PROFILE_DETAILS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            <div className="text-center">
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900">代表挨拶</h2>
                 <p className="mt-4 text-sky-700 font-semibold text-lg">〜私たちはカジュアルな税理士事務所です〜</p>
            </div>
          <div className="mt-12 md:flex md:items-start md:gap-12">
            <div className="md:w-2/3 text-slate-600 space-y-6 leading-relaxed">
              {GREETING_TEXT.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 text-center flex-shrink-0">
                <img
                    src="https://pbs.twimg.com/profile_images/3568788073/18c5f8bc68dd200216f81de01a8ffd4d_400x400.jpeg"
                    alt={`代表税理士 ${REPRESENTATIVE_NAME}`}
                    className="w-48 h-48 bg-slate-200 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                />
                <h4 className="font-bold text-slate-800">代表税理士</h4>
                <p className="text-lg font-bold text-slate-900">{REPRESENTATIVE_NAME}</p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="https://www.facebook.com/227953713881456?ref=embed_page" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors" aria-label="Facebook">
                       <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="https://x.com/smzkaikei/photo" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-black transition-colors" aria-label="X">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                </div>
            </div>
          </div>
          <div className="mt-16 border-t border-slate-200 pt-12">
              <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">詳しいプロフィール</h3>
              <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200 shadow-sm max-w-3xl mx-auto">
                  <dl className="divide-y divide-slate-200">
                      {PROFILE_DETAILS.details.map((item, index) => (
                          <div key={index} className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                              <dt className="text-sm font-medium text-slate-600">{item.label}</dt>
                              <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2">{item.value}</dd>
                          </div>
                      ))}
                  </dl>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                      <h4 className="text-sm font-medium text-slate-600 mb-4">略歴</h4>
                      <ul className="space-y-4">
                          {PROFILE_DETAILS.history.map((item, index) => (
                              <li key={index} className="sm:grid sm:grid-cols-3 sm:gap-4">
                                  <div className="text-sm font-semibold text-slate-700">{item.year}</div>
                                  <div className="mt-1 sm:mt-0 sm:col-span-2 text-sm text-slate-800 leading-relaxed">{item.description}</div>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;