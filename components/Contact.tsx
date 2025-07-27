
import React, { useState } from 'react';
import { FIRM_NAME, FIRM_ADDRESS, FIRM_PHONE, FIRM_PHONE_TEL, FIRM_EMAIL, FIRM_HOURS_DETAILED, FIRM_PHONE_MOBILE, FIRM_PHONE_MOBILE_TEL } from '../constants';
import { BuildingOffice2Icon, PhoneIcon, EnvelopeIcon, ClockIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactMethod: 'メール', // Default to 'メール'
        honeypot: '', // Honeypot field for spam protection
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({ ...prev, contactMethod: e.target.value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Honeypot check
        if (formData.honeypot) {
            console.log("Honeypot triggered. Likely a bot.");
            return;
        }
        // ここにフォーム送信処理を実装します（例: APIへのPOSTリクエスト）
        console.log('Form submitted:', { ...formData, honeypot: undefined });
        alert('お問い合わせありがとうございます。メッセージが送信されました。');
        setFormData({ name: '', email: '', phone: '', message: '', contactMethod: 'メール', honeypot: '' });
    };

    const contactInfo = [
        { icon: <BuildingOffice2Icon className="h-6 w-6 text-sky-700" />, text: FIRM_ADDRESS },
        { icon: <PhoneIcon className="h-6 w-6 text-sky-700" />, text: `TEL ${FIRM_PHONE}`, href: FIRM_PHONE_TEL },
        { icon: <DevicePhoneMobileIcon className="h-6 w-6 text-sky-700" />, text: `携帯 ${FIRM_PHONE_MOBILE}`, href: FIRM_PHONE_MOBILE_TEL },
        { icon: <EnvelopeIcon className="h-6 w-6 text-sky-700" />, text: FIRM_EMAIL, href: `mailto:${FIRM_EMAIL}` },
        { icon: <ClockIcon className="h-6 w-6 text-sky-700" />, text: FIRM_HOURS_DETAILED },
    ];


  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">お問い合わせ</h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            初回のご相談は無料です。お客様のお悩みやご希望をじっくりお伺いし、最適なサポートをご提案します。
            <br/>
            無理な勧誘は一切いたしませんので、安心してお問い合わせください。
          </p>
        </div>

        <div className="mt-16 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 shadow-lg">
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-sky-800">ご連絡先</h3>
              <p className="mt-2 text-slate-600">お電話または下記フォームよりご連絡ください。</p>
              <div className="mt-8 space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                        {item.icon}
                    </div>
                    <div>
                      {item.href ? (
                        <a href={item.href} className="text-slate-700 hover:text-sky-700 transition-colors font-medium whitespace-pre-line">{item.text}</a>
                      ) : (
                        <p className="text-slate-700 font-medium whitespace-pre-line">{item.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
             <div className="mt-8">
                <p className="text-sm text-slate-500">
                    ※入力して頂いた情報は、お問い合わせへのご返信・ご連絡の目的以外では一切使用いたしません。
                </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="hidden">
                <label htmlFor="honeypot">Leave this field blank</label>
                <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    tabIndex={-1}
                />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">お名前<span className="text-red-500">*</span></label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 bg-white text-slate-900" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">メールアドレス<span className="text-red-500">*</span></label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 bg-white text-slate-900" />
            </div>
             <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">電話番号</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} className="block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 bg-white text-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">こちらからの連絡方法<span className="text-red-500">*</span></label>
              <fieldset className="mt-1">
                <legend className="sr-only">連絡方法</legend>
                <div className="space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                  {['メール', '電話', '携帯'].map((option) => (
                    <div key={option} className="flex items-center">
                      <input
                        id={`contactMethod-${option}`}
                        name="contactMethod"
                        type="radio"
                        value={option}
                        checked={formData.contactMethod === option}
                        onChange={handleRadioChange}
                        className="h-4 w-4 border-slate-300 text-sky-600 focus:ring-sky-500"
                      />
                      <label htmlFor={`contactMethod-${option}`} className="ml-3 block text-sm font-medium leading-6 text-slate-900">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <p className="mt-2 text-xs text-slate-500">ご希望の連絡方法をお選び下さい。2日以内にご連絡させて頂きます。尚、ご希望の時間帯がある場合は、下記の「お問い合わせ内容」欄にご記入願います。</p>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">お問い合わせ内容<span className="text-red-500">*</span></label>
              <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleInputChange} className="block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 bg-white text-slate-900"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 shadow-lg">
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
