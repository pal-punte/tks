
import React from 'react';
import { FIRM_PHONE, FIRM_PHONE_TEL, NEW_CLIENT_NOTICE, FIRM_HOURS_DETAILED } from '../constants';
import { PhoneIcon, InformationCircleIcon, AcademicCapIcon, DocumentTextIcon, ArrowRightCircleIcon, SparklesIcon } from '@heroicons/react/24/solid';

interface HeroProps {
  onChatOpen: () => void;
}

const Hero: React.FC<HeroProps> = ({ onChatOpen }) => {

  const infoCards = [
    {
      title: "税理士が教える相続対策",
      description: "申告は誰に頼むかで納税額が変わります。専門家によるポイント解説。",
      href: "#inheritance-guide",
      icon: <AcademicCapIcon className="h-8 w-8 text-emerald-500" />
    },
    {
      title: "お任せください確定申告",
      description: "個人事業主・不動産所得の面倒な申告を丸ごとサポートします。",
      href: "#tax-return-guide",
      icon: <DocumentTextIcon className="h-8 w-8 text-indigo-500" />
    }
  ];

  return (
    <section className="relative bg-grid-pattern pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-lg font-bold text-sky-700">『親しみやすく・依頼しやすい』所沢の税理士事務所</p>
        <h1 className="mt-2 text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          クラウド会計・創業融資・
          <br className="md:hidden" />
          相続税申告に強い
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
          【相談は無料】安心・格安の顧問料で専属税理士になります！
          <br />
          お客様のビジネスの成長を全力でサポートする所沢の会計事務所です。
        </p>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {infoCards.map(card => (
            <a key={card.title} href={card.href} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border border-slate-200/50 hover:border-sky-500/50 flex items-center text-left transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex-shrink-0 mr-5">{card.icon}</div>
              <div>
                <h3 className="font-bold text-sky-800 text-lg">{card.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{card.description}</p>
              </div>
              <ArrowRightCircleIcon className="h-6 w-6 text-slate-300 ml-auto flex-shrink-0" />
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={FIRM_PHONE_TEL}
            className="bg-orange-500 text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg w-full sm:w-auto inline-flex items-center justify-center gap-3"
          >
            <PhoneIcon className="h-6 w-6"/>
            <span>{FIRM_PHONE}</span>
          </a>
          <a
            href="#contact"
            className="bg-white text-sky-700 border border-sky-200 text-lg font-semibold px-8 py-4 rounded-full hover:bg-sky-50 transition-all duration-300 w-full sm:w-auto"
          >
            メールでお問い合わせ
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-500 whitespace-pre-line">{FIRM_HOURS_DETAILED}</p>

        {/* AI Chat CTA */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-sky-50 border-l-4 border-sky-400 p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-center md:text-left">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <SparklesIcon className="h-12 w-12 text-sky-500 mx-auto" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-sky-800">税務相談AIチャット、試してみませんか？</h3>
                <p className="mt-2 text-slate-600">
                  「これって経費になる？」 「相続税って、いくらかかる？」
                  <br/>
                  そんな税金の「ちょっとした疑問」にAIが24時間お答えします。
                </p>
              </div>
              <div className="flex-shrink-0 mt-5 md:mt-0">
                <button
                  onClick={onChatOpen}
                  className="bg-sky-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-sky-800 transition-colors duration-300 shadow-md transform hover:scale-105"
                  aria-label="AIチャットを開始する"
                >
                  AIに質問する
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="max-w-3xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700 whitespace-pre-line">
                {NEW_CLIENT_NOTICE}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;