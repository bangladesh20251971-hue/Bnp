import React from 'react';
import { Wheat, CheckCircle, Heart, Shield, TrendingUp, Download } from 'lucide-react';
import Countdown from './components/Countdown';
import PledgeForm from './components/PledgeForm';
import ShareButtons from './components/ShareButtons';

function App() {
  // ⚠️ গুগল ড্রাইভের লিংক পেলে এখানে বসাবেন। আপাতত আপনার দেওয়া ইমেইলটি রাখলাম।
  const directDownloadLink = "mailto:bangladesh20251971@gmail.com";

  return (
    <div className="min-h-screen flex flex-col font-bengali selection:bg-bnp-green selection:text-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-bnp-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-bnp-green rounded-full flex items-center justify-center text-white shadow-lg">
                <Wheat size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-bnp-dark font-tiro leading-tight">
                  বাংলাদেশ জাতীয়তাবাদী দল
                </h1>
                <p className="text-sm font-medium text-gray-500 hidden sm:block">
                  উন্নয়ন, উৎপাদন ও গণতন্ত্রের প্রতীক
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="bg-bnp-light text-bnp-dark px-4 py-2 rounded-full font-bold text-sm sm:text-base border border-bnp-green/20 hidden sm:inline-block">
                ১২ই ফেব্রুয়ারি নির্বাচন
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-bnp-dark text-white overflow-hidden pb-12">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-bnp-green rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-16 pb-12 sm:pt-24 sm:pb-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20">
                <span className="bg-bnp-red text-white text-xs font-bold px-3 py-1 rounded-full mr-2">নির্বাচনী ইশতেহার</span>
                <span className="text-sm font-medium pr-2">নিঃস্বার্থ ভালোবাসার প্রমাণ দিন</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-tiro leading-tight">
                <span className="block mb-2 text-yellow-400">১২ই ফেব্রুয়ারি সারাদিন</span>
                <span className="block">ধানের শীষে ভোট দিন</span>
              </h2>
              
              <p className="mt-6 text-xl sm:text-2xl text-green-50 font-medium max-w-3xl mx-auto leading-relaxed border-t border-b border-green-500/30 py-6">
                "আমরা শহীদ প্রেসিডেন্ট জিয়াউর রহমানের আদর্শ বুকে ধারণ করে বাংলাদেশ জাতীয়তাবাদী দল বিএনপির সমর্থন করি।"
              </p>
              
              <Countdown />

              {/* Direct Download Button in Hero */}
              <div className="mt-10 flex justify-center">
                <a
                  href={directDownloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-bnp-green hover:bg-gray-100 font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all gap-2 text-lg border-2 border-transparent hover:border-bnp-green"
                >
                  <Download size={24} />
                  সরাসরি ডাউনলোড করুন
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Message Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-8 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bnp-light text-bnp-green mb-2">
                  <Heart size={32} fill="currentColor" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-tiro">
                  আমাদের নিঃস্বার্থ ভালোবাসা
                </h3>
                
                <div className="prose prose-lg prose-green text-gray-700 leading-relaxed font-medium">
                  <p className="text-xl text-bnp-dark font-bold border-l-4 border-bnp-green pl-4">
                    আমাদের কোন ফ্যামিলি কার্ডের প্রয়োজন নেই, কোন কৃষি কার্ডের প্রয়োজন নেই। আমরা নিঃস্বার্থভাবে বিএনপিকে ভালোবাসি।
                  </p>
                  <p className="mt-6">
                    তাই ১২ই ফেব্রুয়ারি ধানের শীষে ভোট দিয়ে <span className="text-bnp-green font-bold">জনাব তারেক রহমানকে</span> জয়যুক্ত করে এই নিঃস্বার্থ ভালোবাসার প্রমাণ দিতে চাই।
                  </p>
                  <p className="mt-4">
                    তাই আসুন, কোন কিছুর আশা না করে বাংলাদেশের উন্নয়নের ধারা অব্যাহত রাখতে ১২ই ফেব্রুয়ারি সারাদিন ধানের শীষে ভোট দিন।
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-bnp-green" size={24} />
                    <span className="font-semibold text-gray-800">উন্নয়ন</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-bnp-green" size={24} />
                    <span className="font-semibold text-gray-800">গণতন্ত্র</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-bnp-green" size={24} />
                    <span className="font-semibold text-gray-800">নিঃস্বার্থ দেশপ্রেম</span>
                  </div>
                </div>
              </div>

              {/* Pledge Form & Visuals */}
              <div className="space-y-8">
                <PledgeForm />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-bnp-green to-bnp-dark p-6 rounded-xl text-white shadow-lg flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform">
                    <Shield className="w-10 h-10 mb-3 text-yellow-400" />
                    <h4 className="font-bold text-lg mb-1">জিয়ার আদর্শ</h4>
                    <p className="text-sm text-green-100">বুকে ধারণ করে এগিয়ে চলা</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl text-white shadow-lg flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform">
                    <TrendingUp className="w-10 h-10 mb-3 text-yellow-400" />
                    <h4 className="font-bold text-lg mb-1">উন্নয়নের ধারা</h4>
                    <p className="text-sm text-green-100">অব্যাহত রাখতে বদ্ধপরিকর</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="bg-bnp-light py-12 border-y border-bnp-green/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Wheat className="w-16 h-16 mx-auto text-bnp-green mb-4 opacity-50" />
            <h2 className="text-2xl sm:text-3xl font-bold text-bnp-dark mb-4 font-tiro">
              কোন কিছুর আশা না করে, শুধু দেশের স্বার্থে ভোট দিন
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              আপনার একটি ভোট নির্ধারণ করবে আগামী দিনের বাংলাদেশের ভবিষ্যৎ। তারেক রহমানের হাতকে শক্তিশালী করতে ধানের শীষে আপনার মূল্যবান রায় প্রদান করুন।
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="inline-flex items-center justify-center px-8 py-4 bg-bnp-red text-white text-xl font-bold rounded-full shadow-lg shadow-red-500/30">
                ভোটের দিন: ১২ই ফেব্রুয়ারি
              </div>
              
              {/* Highlighted Direct Download Link */}
              <a
                href={directDownloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-bnp-green text-white hover:bg-bnp-dark font-bold rounded-full shadow-lg transition-all gap-2 text-lg animate-bounce"
              >
                <Download size={24} />
                ফাইলটি ডাউনলোড করুন
              </a>
            </div>
            
            {/* Added ShareButtons here for higher visibility */}
            <ShareButtons />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bnp-dark text-center py-12 text-white border-t-8 border-bnp-red">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-bnp-green mb-6">
            <Wheat size={36} strokeWidth={2.5} />
          </div>
          <p className="text-xl font-bold mb-2 font-tiro">বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)</p>
          <p className="text-green-200 text-sm mb-6 max-w-md mx-auto">
            শহীদ প্রেসিডেন্ট জিয়াউর রহমানের আদর্শে গড়া, দেশনেত্রী বেগম খালেদা জিয়ার অনুপ্রেরণায় এবং দেশনায়ক তারেক রহমানের নেতৃত্বে।
          </p>
          <div className="w-24 h-1 bg-bnp-green rounded-full mb-6"></div>
          <p className="text-xs text-green-400/60">
            &copy; {new Date().getFullYear()} সকল সমর্থকবৃন্দ। এটি একটি প্রচারণামূলক পাতা।
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;