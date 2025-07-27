
import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../constants';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid';

interface AccordionItemProps {
  item: typeof SERVICE_CATEGORIES[0]['items'][0];
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200">
      <dt>
        <button onClick={onClick} className="flex w-full items-start justify-between text-left text-slate-900 py-5">
          <span className="text-base font-semibold leading-7">{item.title}</span>
          <span className="ml-6 flex h-7 items-center">
            {isOpen ? (
              <MinusIcon className="h-6 w-6 text-sky-700" aria-hidden="true" />
            ) : (
              <PlusIcon className="h-6 w-6 text-slate-500" aria-hidden="true" />
            )}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="pb-6 pr-12 text-slate-600 leading-relaxed">
          {item.content}
        </dd>
      )}
    </div>
  );
};


const Services: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<{ [key: string]: number | null }>({
    '個人のお客様': 0,
    '法人のお客様': 0
  });

  const handleClick = (category: string, index: number) => {
    setOpenIndices(prev => ({
      ...prev,
      [category]: prev[category] === index ? null : index
    }));
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">業務案内</h2>
          <p className="mt-4 text-slate-600 text-lg">
            相続税対策から法人の決算・申告まで、お客様のニーズに幅広くお応えします。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {SERVICE_CATEGORIES.map(category => (
            <div key={category.categoryTitle} className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                {category.categoryTitle === '個人のお客様' ?
                    <UserIcon className="h-8 w-8 text-white bg-sky-700 p-1.5 rounded-lg" /> :
                    <BuildingOfficeIcon className="h-8 w-8 text-white bg-sky-700 p-1.5 rounded-lg" />
                }
                <h3 className="text-2xl font-bold text-slate-800">{category.categoryTitle}</h3>
              </div>
              <dl>
                {category.items.map((item, index) => (
                  <AccordionItem
                    key={item.title}
                    item={item}
                    isOpen={openIndices[category.categoryTitle] === index}
                    onClick={() => handleClick(category.categoryTitle, index)}
                  />
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
