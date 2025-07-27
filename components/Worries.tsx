
import React from 'react';
import { WORRIES } from '../constants';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Worries: React.FC = () => {
  return (
    <section id="worries" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                こんな<span className="text-sky-700">お悩み</span>ありませんか？
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
                TKS税理士法人が、そのお悩みをすべて解決します！
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                {WORRIES.map((worry, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <CheckCircleIcon className="h-7 w-7 text-orange-500 flex-shrink-0" />
                        <span className="font-medium text-slate-700">{worry.text}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Worries;
