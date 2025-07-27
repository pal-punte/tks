import React, { useState } from 'react';
import { TAX_TOPICS_CONTENT } from '../constants';
import { TaxTopicItem } from '../types';
import { ChevronRightIcon, PlusIcon, MinusIcon, FolderIcon, DocumentTextIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

interface TopicItemProps {
  item: TaxTopicItem;
  level: number;
  onToggle: (key: string) => void;
  isOpen: (key: string) => boolean;
  itemKey: string;
}

// A map to avoid dynamic class name generation which doesn't work with Tailwind's JIT compiler.
const levelMarginClasses: { [key: number]: string } = {
  0: 'ml-0',
  1: 'ml-4',
  2: 'ml-8',
  3: 'ml-12',
  4: 'ml-16',
};

const TopicItemComponent: React.FC<TopicItemProps> = ({ item, level, onToggle, isOpen, itemKey }) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isLink = !!item.link;
    const marginClass = levelMarginClasses[level] || 'ml-0';

    if (isLink) {
        return (
            <li className={marginClass}>
                <a href={item.link} className="group flex items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:border-sky-400 hover:shadow-md transition-all duration-200">
                    <PencilSquareIcon className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                    <span className="font-semibold text-slate-700 flex-1 group-hover:text-sky-800">{item.title}</span>
                    <ChevronRightIcon className="h-5 w-5 text-slate-400 group-hover:text-sky-600 transition-colors" />
                </a>
            </li>
        );
    }

    return (
        <li className={`${marginClass} bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden`}>
            <button
                onClick={() => onToggle(itemKey)}
                className="flex w-full items-center justify-between text-left p-4 hover:bg-slate-50 transition-colors"
            >
                <div className="flex items-center">
                    {hasSubItems ? <FolderIcon className="h-6 w-6 text-sky-700 mr-4 flex-shrink-0" /> : <DocumentTextIcon className="h-6 w-6 text-sky-700 mr-4 flex-shrink-0" />}
                    <span className="font-semibold text-slate-700">{item.title}</span>
                </div>
                <span className="ml-6 flex h-7 items-center">
                    {isOpen(itemKey) ? <MinusIcon className="h-6 w-6 text-sky-700" /> : <PlusIcon className="h-6 w-6 text-slate-500" />}
                </span>
            </button>
            {isOpen(itemKey) && (
                <div className="p-4 border-t border-slate-200 bg-slate-50/80 text-slate-600 leading-relaxed">
                    {item.content}
                    {hasSubItems && (
                        <ul className="space-y-3 mt-3">
                            {item.subItems?.map((subItem, index) => (
                                <TopicItemComponent
                                    key={index}
                                    item={subItem}
                                    level={level + 1}
                                    onToggle={onToggle}
                                    isOpen={isOpen}
                                    itemKey={`${itemKey}-${index}`}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </li>
    );
};


const TaxTopics: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleToggle = (key: string) => {
    setOpenKeys(prevKeys => 
      prevKeys.includes(key) ? prevKeys.filter(k => k !== key) : [...prevKeys, key]
    );
  };
  
  const isOpen = (key: string) => openKeys.includes(key);

  return (
    <section id="tax-topics" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{TAX_TOPICS_CONTENT.title}</h2>
          <p className="mt-4 text-slate-600 text-lg whitespace-pre-line">{TAX_TOPICS_CONTENT.subtitle}</p>
        </div>
        
        {TAX_TOPICS_CONTENT.categories.map((category) => (
          <div key={category.categoryTitle} className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">{category.categoryTitle}</h3>
            <ul className="space-y-4">
              {category.items.map((item, index) => (
                 <TopicItemComponent
                    key={index}
                    item={item}
                    level={0}
                    onToggle={handleToggle}
                    isOpen={isOpen}
                    itemKey={`${category.categoryTitle}-${index}`}
                 />
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-20 pt-16 border-t border-slate-200">
             <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-slate-800">{TAX_TOPICS_CONTENT.other.title}</h3>
                <p className="mt-2 text-slate-600">{TAX_TOPICS_CONTENT.other.subtitle}</p>
             </div>
             <ul className="space-y-4">
                {TAX_TOPICS_CONTENT.other.items.map((item, index) => (
                    <TopicItemComponent
                        key={index}
                        item={item}
                        level={0}
                        onToggle={handleToggle}
                        isOpen={isOpen}
                        itemKey={`other-${index}`}
                    />
                ))}
             </ul>
        </div>
      </div>
    </section>
  );
};

export default TaxTopics;