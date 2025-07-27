
import React from 'react';
import { FIRM_NAME, FIRM_ADDRESS, NAV_LINKS } from '../constants';
import { BuildingOffice2Icon } from '@heroicons/react/24/solid';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
             <a href="#" className="flex items-center space-x-2">
              <BuildingOffice2Icon className="h-8 w-8 text-sky-400" />
              <span className="text-xl font-bold text-white">{FIRM_NAME}</span>
            </a>
            <p className="mt-4 text-sm text-slate-400">{FIRM_ADDRESS}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-slate-100 uppercase">メニュー</h2>
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                   <li key={link.href}>
                    <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h2 className="mb-6 text-sm font-semibold text-slate-100 uppercase">その他</h2>
              <ul className="space-y-4">
                <li><a href="#office" className="hover:text-white transition-colors">事務所概要</a></li>
                <li><a href="#privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-slate-600" />
        <div className="text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} {FIRM_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;