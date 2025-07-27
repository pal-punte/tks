
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const FaqItem: React.FC<{ item: typeof FAQ_ITEMS[0]; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200">
      <dt>
        <button
          onClick={onClick}
          className="flex w-full items-start justify-between text-left text-slate-900 py-6"
        >
          <span className="text-base font-semibold leading-7">{item.question}</span>
          <span className="ml-6 flex h-7 items-center">
            {isOpen ? (
              <MinusIcon className="h-6 w-6 text-sky-700" aria-hidden="true" />
            ) : (
              <PlusIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="pb-6 pr-12">
          <p className="text-base leading-relaxed text-slate-600">{item.answer}</p>
        </dd>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">よくあるご質問</h2>
            <p className="mt-4 text-slate-600 text-lg">
              お問い合わせの前に、一度ご確認ください。
            </p>
          </div>
          <dl className="mt-10">
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
