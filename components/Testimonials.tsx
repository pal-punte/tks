
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">お客様の声</h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            当事務所をご利用いただいているお客様から、嬉しいお言葉を頂戴しております。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col">
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-sky-300 mb-4" />
              <blockquote className="flex-grow text-slate-700">
                <p className="leading-relaxed">「{testimonial.text}」</p>
              </blockquote>
              <footer className="mt-6 font-semibold text-slate-800 text-right">
                - {testimonial.author}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
