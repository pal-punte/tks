
import React from 'react';
import { NEWS_ITEMS } from '../constants';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const News: React.FC = () => {
  return (
    <section id="news" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">お知らせ</h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            当事務所からの最新情報をお届けします。
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md border border-slate-200">
                <ul className="divide-y divide-slate-200">
                    {NEWS_ITEMS.map((item, index) => (
                        <li key={index}>
                            <a href={item.link} className="flex items-center justify-between p-6 hover:bg-slate-50 transition-colors duration-200">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full">
                                    <p className="text-slate-500 font-medium mb-2 sm:mb-0 flex-shrink-0">{item.date}</p>
                                    <div className="flex items-center gap-3 flex-grow">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.category === 'お知らせ' ? 'bg-sky-100 text-sky-800' : 'bg-emerald-100 text-emerald-800'}`}>
                                            {item.category}
                                        </span>
                                        <h3 className="font-semibold text-slate-800 flex-1">{item.title}</h3>
                                    </div>
                                </div>
                                <ChevronRightIcon className="h-5 w-5 text-slate-400 ml-4 flex-shrink-0" />
                            </a>
                        </li>
                     ))}
                </ul>
            </div>
        </div>
        <div className="mt-12 text-center">
            <a href="#" className="inline-block bg-sky-600 text-white px-8 py-3 rounded-full hover:bg-sky-700 transition-all duration-300 font-semibold shadow-md transform hover:-translate-y-0.5">
                過去のお知らせ一覧
            </a>
        </div>
      </div>
    </section>
  );
};

export default News;
