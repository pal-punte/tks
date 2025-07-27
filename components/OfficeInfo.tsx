
import React from 'react';
import { FIRM_NAME, FIRM_ADDRESS, FIRM_PHONE, FIRM_PHONE_TEL, FIRM_FAX, FIRM_HOURS_DETAILED, FIRM_PHONE_MOBILE, FIRM_PHONE_MOBILE_TEL } from '../constants';
import { MapPinIcon, PhoneIcon, ClockIcon, PrinterIcon, UserGroupIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const OfficeInfo: React.FC = () => {
  return (
    <section id="office" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">事務所概要・アクセス</h2>
          <p className="mt-4 text-slate-600 text-lg">
            西武新宿線「所沢駅」より徒歩10分。
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">{FIRM_NAME}</h3>
            <div className="space-y-4 text-slate-700">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-6 w-6 text-sky-700 mt-1 flex-shrink-0" />
                <p>{FIRM_ADDRESS}</p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-6 w-6 text-sky-700" />
                <a href={FIRM_PHONE_TEL} className="hover:text-sky-700">{FIRM_PHONE}</a>
              </div>
              <div className="flex items-center space-x-3">
                <DevicePhoneMobileIcon className="h-6 w-6 text-sky-700" />
                <a href={FIRM_PHONE_MOBILE_TEL} className="hover:text-sky-700">{FIRM_PHONE_MOBILE}</a>
              </div>
              <div className="flex items-center space-x-3">
                <PrinterIcon className="h-6 w-6 text-sky-700" />
                <p>{FIRM_FAX}</p>
              </div>
              <div className="flex items-start space-x-3">
                <ClockIcon className="h-6 w-6 text-sky-700 mt-1 flex-shrink-0" />
                <p className="whitespace-pre-line">{FIRM_HOURS_DETAILED}</p>
              </div>
              <div className="flex items-start space-x-3 pt-4 border-t border-slate-200 mt-4">
                <UserGroupIcon className="h-6 w-6 text-sky-700 mt-1 flex-shrink-0" />
                <div>
                    <p className="font-semibold text-slate-800">社員税理士</p>
                    <p>清水 一広</p>
                    <p>久手川 工</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl border">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.433842183204!2d139.4754545763321!3d35.81577132470747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018d91544a8607d%3A0xe5a363a290d29774!2s22-14%20Kotobukich%C5%8D%2C%20Tokorozawa%2C%20Saitama%20359-1122%2C%20Japan!5e0!3m2!1sen!2s!4v1716361877864!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeInfo;