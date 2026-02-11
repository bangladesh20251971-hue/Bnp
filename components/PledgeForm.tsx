import React, { useState } from 'react';
import { CheckCircle2, User, Phone } from 'lucide-react';
import ShareButtons from './ShareButtons';

const PledgeForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // ⚠️ আপনার দেওয়া ইমেইলটি এখানে যুক্ত করা হয়েছে ⚠️
  const ADMIN_EMAIL: string = "bangladesh20251971@gmail.com"; 
  
  // ইমেইলে মেসেজ যাওয়ার জন্য এটি ফাঁকা রাখা হলো
  const ADMIN_WHATSAPP: string = ""; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      
      // ইনবক্সে পাঠানোর জন্য মেসেজ তৈরি
      const subject = "নতুন ধানের শীষ সমর্থক যুক্ত হয়েছেন";
      const messageBody = `🌾 নতুন ধানের শীষ সমর্থক যুক্ত হয়েছেন!\n\n👤 নাম: ${name}\n📱 মোবাইল: ${phone || 'দেওয়া হয়নি'}\n\nজয় ধানের শীষ!`;

      // হোয়াটসঅ্যাপ নম্বর দেওয়া থাকলে সেখানে পাঠাবে, না থাকলে ইমেইলে পাঠাবে
      if (ADMIN_WHATSAPP && ADMIN_WHATSAPP.length > 10) {
        // WhatsApp API URL with encoded message details
        const waUrl = `https://api.whatsapp.com/send?phone=${ADMIN_WHATSAPP}&text=${encodeURIComponent(messageBody)}`;
        window.open(waUrl, '_blank');
      } else {
        const mailToUrl = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;
        window.location.href = mailToUrl;
      }

      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-bnp-light border border-bnp-green p-6 rounded-xl text-center shadow-md animate-fade-in flex flex-col items-center">
        <CheckCircle2 className="w-16 h-16 text-bnp-green mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-bnp-dark mb-2">ধন্যবাদ, {name}!</h3>
        <p className="text-bnp-dark/80 font-medium mb-4">
          আপনার নিঃস্বার্থ সমর্থনের জন্য ধন্যবাদ। ১২ই ফেব্রুয়ারি ধানের শীষে ভোট দিন।
        </p>
        
        {/* Share Buttons added to success state */}
        <div className="w-full border-t border-bnp-green/20 pt-2 pb-2">
          <ShareButtons />
        </div>

        <button 
          onClick={() => {
            setIsSubmitted(false);
            setName('');
            setPhone('');
          }}
          className="mt-6 text-sm text-bnp-green underline hover:text-bnp-dark transition-colors"
        >
          নতুন সমর্থন যোগ করুন
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-bnp-green via-green-500 to-bnp-green"></div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2 font-tiro text-center">সমর্থন জানান</h3>
      <p className="text-gray-600 mb-6 text-center text-sm">
        "আমরা নিঃস্বার্থভাবে বিএনপিকে ভালোবাসি" - এই আন্দোলনে যুক্ত হোন।
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">আপনার নাম</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-bnp-green focus:border-bnp-green sm:text-sm py-3 border px-3"
              placeholder="আপনার নাম লিখুন"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">মোবাইল নম্বর (ঐচ্ছিক)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-bnp-green focus:border-bnp-green sm:text-sm py-3 border px-3"
              placeholder="01XXXXXXXXX"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-bnp-green hover:bg-bnp-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bnp-green transition-colors mt-6"
        >
          আমি ধানের শীষের সমর্থক
        </button>
      </form>
      <p className="text-xs text-gray-400 text-center mt-4">আপনার তথ্য সরাসরি অ্যাডমিনের ইনবক্সে পাঠানো হবে।</p>
    </div>
  );
};

export default PledgeForm;