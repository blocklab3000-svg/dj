import React, { useState, useEffect } from 'react';
import { EventType } from '../types';
import { Menu, X, ChevronDown, Instagram, Mail, Facebook } from 'lucide-react';
import BeamButton from './BeamButton';

interface LayoutProps {
  children: React.ReactNode;
  currentType: EventType;
  onTypeChange: (type: EventType) => void;
  themeColor: string;
}

const TikTokIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Layout: React.FC<LayoutProps> = ({ children, currentType, onTypeChange, themeColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Corporate', value: EventType.CORPORATE },
    { label: 'Private', value: EventType.PRIVATE },
    { label: 'Wedding', value: EventType.WEDDING },
    { label: 'Other', value: EventType.OTHER },
  ];

  const handleTypeSelect = (type: EventType) => {
    onTypeChange(type);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-white/10 py-3' 
            : 'bg-transparent border-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 mr-2 md:mr-8 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <span className="font-display font-black text-lg md:text-xl tracking-tighter uppercase whitespace-nowrap">
              DJ Miss Haze
            </span>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3 md:gap-8 flex-1 justify-end">
            
            {/* Social Icons - Visible on Mobile */}
            <div className="flex items-center gap-2 md:gap-4 border-r border-zinc-800 pr-3 md:pr-8">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Instagram size={18} /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><TikTokIcon size={18} /></a>
            </div>

            {/* Dropdown - Visible on Mobile */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide uppercase hover:text-gray-300 transition-colors"
              >
                <span style={{ color: themeColor }}>{currentType}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                    <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl z-20 py-1 overflow-hidden">
                        {navItems.map((item) => (
                        <button
                            key={item.value}
                            onClick={() => handleTypeSelect(item.value)}
                            className={`block w-full text-left px-4 py-3 text-sm hover:bg-zinc-800 transition-colors ${currentType === item.value ? 'text-white font-bold bg-white/5' : 'text-zinc-400'}`}
                        >
                            {item.label} Events
                        </button>
                        ))}
                    </div>
                </>
              )}
            </div>

            {/* Desktop Only Navigation */}
            <div className="hidden md:flex items-center gap-8">
                <a href="#contact" className="text-sm font-semibold uppercase hover:text-gray-300 transition-colors">
                Contact
                </a>
                
                <BeamButton themeColor={themeColor} className="scale-90" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                Book Now
                </BeamButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden z-20 p-1 text-white hover:text-zinc-300 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col gap-8 text-center w-full px-8">
          
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-bold uppercase hover:text-zinc-300 transition-colors">
            Contact
          </a>

          <div className="w-full max-w-xs mx-auto">
             <BeamButton themeColor={themeColor} fullWidth onClick={() => {
                 document.getElementById('contact')?.scrollIntoView();
                 setIsMenuOpen(false);
             }}>
                Book Now
             </BeamButton>
          </div>
        </nav>
      </div>

      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display font-black text-2xl uppercase mb-4">DJ Miss Haze</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Premium DJ & MC services tailored for modern events. Creating unforgettable atmospheres through curated sound.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-4 text-sm tracking-wider">Hub Locations</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>Chicago, Illinois</li>
              <li>Dallas Fort Worth, Texas</li>
              <li>Denver, Colorado</li>
              <li className="text-zinc-600 mt-2 text-xs">Available Worldwide</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-4 text-sm tracking-wider">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://instagram.com" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"><Instagram size={20} /></a>
              <a href="https://facebook.com" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"><Facebook size={20} /></a>
               <a href="https://tiktok.com" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"><TikTokIcon size={20} /></a>
              <a href="mailto:booking@djmisshaze.com" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"><Mail size={20} /></a>
            </div>
            <p className="text-zinc-600 text-xs">
              © {new Date().getFullYear()} DJ Miss Haze. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;