import React, { useState } from 'react';
import { EventType } from './types';
import { CONTENT } from './constants';
import Layout from './components/Layout';
import BeamButton from './components/BeamButton';
import ReviewCard from './components/ReviewCard';
import { ChevronDown, MapPin, CheckCircle2, Music, Mic2, Users } from 'lucide-react';

export default function App() {
  const [eventType, setEventType] = useState<EventType>(EventType.CORPORATE);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const data = CONTENT[eventType];
  const accentColor = data.themeColor;

  const toggleFaq = (question: string) => {
    setOpenFaq(openFaq === question ? null : question);
  };

  return (
    <Layout currentType={eventType} onTypeChange={setEventType} themeColor={accentColor}>
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
        {/* 1. Base Dark Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#000000]"></div>

        {/* 2. Ambient Backlight/Spotlight (Helps separate subject from dark bg) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] md:w-[60vw] h-[60vh] bg-indigo-900/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

        {/* 3. DJ Image Layer */}
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-end justify-center z-10 pointer-events-none">
             {/* 
                Updated path to relative for better compatibility. 
                Ensure 'djmisshaze-corporate-event-transparent.png' is in the public root folder.
             */}
             <img 
               src="djmisshaze-corporate-event-transparent.png" 
               alt="DJ Miss Haze" 
               className="h-[80vh] w-auto object-contain md:h-[95vh] translate-y-10 drop-shadow-2xl relative z-10"
             />
             {/* Bottom fade to integrate feet/dress with the next section smoothly */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent h-40 bottom-0 z-20"></div>
        </div>

        {/* 4. Text Content Layer */}
        <div className="relative z-30 max-w-5xl mx-auto text-center mt-auto mb-20 md:mb-32">
            {/* Locations with Icons */}
            <div 
                className="flex flex-wrap justify-center gap-6 md:gap-10 mb-6 text-sm md:text-base font-bold tracking-[0.2em] uppercase" 
                style={{ color: accentColor }}
            >
                 <div className="flex items-center gap-2">
                    <MapPin size={16} /> <span>CHICAGO</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <MapPin size={16} /> <span>DALLAS</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <MapPin size={16} /> <span>DENVER</span>
                 </div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white mb-6 tracking-tighter leading-none drop-shadow-2xl">
                {data.heroTitle}
            </h1>
            <p className="text-xl md:text-3xl text-zinc-300 font-light max-w-3xl mx-auto drop-shadow-lg">
                {data.heroSubtitle}
            </p>
        </div>
      </section>

      {/* Ticker Banner */}
      <div className="bg-white/5 border-y border-white/10 overflow-hidden py-4 relative z-20">
        <div className="whitespace-nowrap inline-block animate-[spin-slow_20s_linear_infinite] w-full text-center">
            {data.bannerTags.map((tag, i) => (
                <span key={i} className="mx-8 font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 text-xl md:text-3xl tracking-tight">
                    ★ {tag}
                </span>
            ))}
             {data.bannerTags.map((tag, i) => (
                <span key={`dup-${i}`} className="mx-8 font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 text-xl md:text-3xl tracking-tight">
                    ★ {tag}
                </span>
            ))}
        </div>
      </div>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
            <div className="w-1 h-20 mx-auto mb-10" style={{ backgroundColor: accentColor }}></div>
            <h3 className="text-2xl md:text-4xl font-light leading-snug text-white">
                "{data.quote}"
            </h3>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-6 bg-black relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: accentColor }}>Experience Excellence</h4>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                    {data.whyChoose.title}
                </h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    {data.whyChoose.description}
                </p>
                <ul className="space-y-4 mb-8">
                    {data.whyChoose.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={24} className="shrink-0" style={{ color: accentColor }} />
                            <span className="text-zinc-200 text-lg">{point}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-zinc-500 italic border-l-2 pl-4" style={{ borderColor: accentColor }}>
                    {data.whyChoose.summary}
                </p>
            </div>
            <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden relative">
                    <img 
                        src="https://picsum.photos/800/1000?grayscale" 
                        alt="Corporate Event DJ" 
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex gap-4">
                            <div className="bg-zinc-900/90 backdrop-blur p-4 rounded-lg flex-1 text-center border border-zinc-700">
                                <Music className="mx-auto mb-2 text-white" size={24} />
                                <span className="text-xs text-zinc-400 uppercase font-bold">Curated Sound</span>
                            </div>
                            <div className="bg-zinc-900/90 backdrop-blur p-4 rounded-lg flex-1 text-center border border-zinc-700">
                                <Mic2 className="mx-auto mb-2 text-white" size={24} />
                                <span className="text-xs text-zinc-400 uppercase font-bold">Pro MC</span>
                            </div>
                             <div className="bg-zinc-900/90 backdrop-blur p-4 rounded-lg flex-1 text-center border border-zinc-700">
                                <Users className="mx-auto mb-2 text-white" size={24} />
                                <span className="text-xs text-zinc-400 uppercase font-bold">Engagement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Reviews Section */}
      {data.reviews.length > 0 && (
        <section className="py-24 px-6 bg-[#0c0c0c]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">Client Love</h2>
                        <p className="text-zinc-400">Trusted by top brands and agencies.</p>
                    </div>
                    <div className="flex gap-2">
                        {/* Placeholder for carousel controls if needed later */}
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} themeColor={accentColor} />
                    ))}
                </div>
            </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-12 text-center">
                Frequently Asked <span style={{ color: accentColor }}>Questions</span>
            </h2>

            <div className="space-y-12">
                {data.faqs.map((category, catIndex) => (
                    <div key={catIndex}>
                        <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-500 mb-6 border-b border-zinc-800 pb-2">
                            {category.title}
                        </h3>
                        <div className="space-y-4">
                            {category.items.map((faq, index) => {
                                const isOpen = openFaq === faq.question;
                                return (
                                    <div key={index} className="bg-zinc-900/30 rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => toggleFaq(faq.question)}
                                            className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-900/50 transition-colors"
                                        >
                                            <span className={`font-semibold text-lg ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
                                                {faq.question}
                                            </span>
                                            <ChevronDown 
                                                className={`transition-transform duration-300 text-zinc-500 ${isOpen ? 'rotate-180' : ''}`} 
                                            />
                                        </button>
                                        <div 
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800/50 mt-2">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Booking / Contact Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-zinc-900">
            <div className="absolute inset-0 opacity-20" style={{ 
                backgroundImage: `radial-gradient(${accentColor} 1px, transparent 1px)`, 
                backgroundSize: '32px 32px' 
            }}></div>
         </div>
        
        <div className="max-w-3xl mx-auto relative z-10 bg-black border border-zinc-800 p-8 md:p-12 rounded-2xl shadow-2xl">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    Ready to Elevate Your Event?
                </h2>
                <p className="text-zinc-400">
                    Inquire today to check availability for {eventType.toLowerCase()} events in Chicago, Dallas-Fort Worth, Denver, or Worldwide.
                </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Name</label>
                        <input type="text" className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Email</label>
                        <input type="email" className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="jane@company.com" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Event Date</label>
                        <input type="date" className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Location</label>
                        <select className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors appearance-none">
                            <option>Chicago</option>
                            <option>Dallas Fort Worth</option>
                            <option>Denver</option>
                            <option>Other / Destination</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Tell us about your event</label>
                    <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="Type of event, vibe, estimated guest count..."></textarea>
                </div>

                <BeamButton themeColor={accentColor} fullWidth type="submit">
                    Send Inquiry
                </BeamButton>
                
                <p className="text-center text-xs text-zinc-600 mt-4">
                    We respect your privacy. No spam.
                </p>
            </form>
        </div>
      </section>

      {/* Map/Location Visualizer (Simple graphic representation) */}
      <section className="py-12 bg-black text-center border-t border-zinc-900">
         <div className="max-w-4xl mx-auto px-6">
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-8">Serving</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                 <div className="flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <MapPin size={20} />
                    <span className="font-bold">Chicago</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <MapPin size={20} />
                    <span className="font-bold">Dallas / Ft. Worth</span>
                 </div>
                 <div className="flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <MapPin size={20} />
                    <span className="font-bold">Denver</span>
                 </div>
            </div>
         </div>
      </section>

    </Layout>
  );
}