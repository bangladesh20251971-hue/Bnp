import React, { useEffect } from 'react';

const ShareButtons: React.FC = () => {
  // The specific URL provided by the user
  const targetUrl = 'https://cdanews2024.blogspot.com/?m=1';
  
  // The relevant campaign slogan to pre-fill
  const text = "আমরা শহীদ প্রেসিডেন্ট জিয়াউর রহমানের আদর্শ বুকে ধারণ করে বাংলাদেশ জাতীয়তাবাদী দল বিএনপির সমর্থন করি। আসুন কোন কিছুর আশা না করে বাংলাদেশের উন্নয়নের ধারা অব্যাহত রাখতে ১২ই ফেব্রুয়ারি সারাদিন ধানের শীষে ভোট দিন।";

  useEffect(() => {
    // Initialize Facebook SDK
    (window as any).fbAsyncInit = function() {
      (window as any).FB.init({
        appId            : 'YOUR_FACEBOOK_APP_ID', // ⚠️ আপনার Facebook App ID এখানে দিন
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v19.0'
      });
    };

    // Load the SDK script asynchronously
    (function(d, s, id) {
      var js: any, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/bn_IN/sdk.js"; // Using Bengali locale
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const encodedUrl = encodeURIComponent(targetUrl);
  const encodedText = encodeURIComponent(text);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`
  };

  const handleFacebookShare = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Check if Facebook SDK is loaded and available
    if ((window as any).FB) {
      (window as any).FB.ui({
        method: 'share',
        href: targetUrl,
        quote: text, // Pre-fills the text in the FB share dialog
      }, function(response: any) {
        // Optional: Do something with the share response
        console.log('Facebook share response:', response);
      });
    } else {
      // Fallback to sharer.php if SDK fails or is blocked by adblockers
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`, '_blank');
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <p className="text-gray-700 font-bold text-lg font-tiro">ক্যাম্পেইনটি শেয়ার করুন:</p>
      <div className="flex gap-4">
        {/* Facebook */}
        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} 
          onClick={handleFacebookShare}
          className="flex items-center justify-center w-12 h-12 bg-[#1877F2] text-white rounded-full hover:bg-[#166fe5] hover:scale-110 transition-all shadow-md cursor-pointer"
          aria-label="Share on Facebook"
          title="ফেসবুকে শেয়ার করুন"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
        </a>
        {/* Twitter */}
        <a 
          href={shareLinks.twitter} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center w-12 h-12 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1a91da] hover:scale-110 transition-all shadow-md"
          aria-label="Share on Twitter"
          title="এক্সে (টুইটার) শেয়ার করুন"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
        </a>
        {/* WhatsApp */}
        <a 
          href={shareLinks.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full hover:bg-[#20bd5a] hover:scale-110 transition-all shadow-md"
          aria-label="Share on WhatsApp"
          title="হোয়াটসঅ্যাপে শেয়ার করুন"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.031 2.016c-5.503 0-9.974 4.47-9.974 9.973 0 1.761.458 3.479 1.328 4.998L2.016 22l5.132-1.345a9.92 9.92 0 004.883 1.28h.004c5.503 0 9.974-4.471 9.974-9.974 0-2.67-1.04-5.18-2.934-7.072a9.932 9.932 0 00-7.044-2.873zm.004 16.792a8.214 8.214 0 01-4.187-1.144l-.3-.178-3.111.815.83-3.033-.196-.312a8.2 8.2 0 01-1.258-4.385c0-4.542 3.696-8.238 8.24-8.238 2.2 0 4.267.857 5.82 2.41a8.214 8.214 0 012.41 5.82c0 4.542-3.696 8.238-8.238 8.238zm4.516-6.17c-.247-.124-1.465-.724-1.692-.808-.228-.084-.393-.124-.559.124-.165.248-.64 .808-.784.973-.145.165-.29.186-.537.062-.248-.124-1.045-.385-1.99-1.235-.735-.66-1.23-1.476-1.375-1.724-.145-.248-.015-.382.108-.506.111-.112.248-.29.372-.435.124-.144.165-.248.248-.413.083-.165.042-.31-.02-.434-.062-.124-.559-1.35-.765-1.848-.2-.486-.404-.42-.559-.427-.144-.007-.31-.007-.476-.007a.91.91 0 00-.66.31c-.228.248-.868.848-.868 2.067 0 1.22.888 2.4 1.012 2.566.124.165 1.748 2.67 4.234 3.743 1.056.456 1.603.666 2.072.805 1.063.315 2.03.27 2.793.164.85-.118 2.614-1.068 2.983-2.099.369-1.031.369-1.916.258-2.099-.111-.184-.404-.29-.652-.414z" clipRule="evenodd" /></svg>
        </a>
      </div>
    </div>
  );
};

export default ShareButtons;