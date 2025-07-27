
import React from 'react';
import { PRICING_INFO } from '../constants';
import { InformationCircleIcon } from '@heroicons/react/24/solid';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{PRICING_INFO.title}</h2>
          <p className="mt-4 text-slate-600 text-lg font-semibold">
            {PRICING_INFO.subtitle}
          </p>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <div className="text-sm text-blue-700 space-y-1">
                {PRICING_INFO.notice.map((line, index) => <p key={index}>{line}</p>)}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-sky-700 text-center mb-4">{PRICING_INFO.annualFeeTitle}<span className="text-base font-normal text-slate-600"> ※税抜</span></h3>
             <div className="bg-slate-50 p-6 md:p-8 rounded-xl shadow-lg border border-slate-200">
               <div className="flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead>
                        <tr>
                          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-0">コース / 年間売上</th>
                           {PRICING_INFO.tiers.map(tier => (
                             <th key={tier.revenue} scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-slate-900">{tier.revenue}</th>
                           ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        <tr>
                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-0">法人<br/><span className="text-xs font-normal text-slate-500">(税理士変更のみ)</span></td>
                           {PRICING_INFO.tiers.map(tier => (
                             <td key={tier.revenue + '-corp'} className="whitespace-nowrap px-3 py-4 text-sm text-center text-slate-600">{tier.corporateFee}</td>
                           ))}
                        </tr>
                        <tr>
                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-0">個人<br/><span className="text-xs font-normal text-red-500">(新規受付停止中)</span></td>
                           {PRICING_INFO.tiers.map(tier => (
                             <td key={tier.revenue + '-ind'} className="whitespace-nowrap px-3 py-4 text-sm text-center text-slate-400 line-through">{tier.individualFee}</td>
                           ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                 </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                    {PRICING_INFO.annualFeeNotes}
                </div>
             </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">{PRICING_INFO.otherFeesTitle}</h3>
            <div className="space-y-8">
                {PRICING_INFO.otherFees.map((fee, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                        <h4 className="text-xl font-bold text-sky-800 mb-3">{fee.title}</h4>
                        <div className="text-slate-600 leading-relaxed">
                          {fee.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
