import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Users, Clock, Eye, TrendingUp, Award, Play, Globe, Music, BookOpen, Star, Trophy, BarChart3, Share2, Download, Copy, Check } from 'lucide-react';

const HumanUnicornPodWrapped2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const slideRef = useRef(null);

  const stats = {
    // Core metrics
    totalFans: 56,
    topCountry: "US",
    topFans: 56,
    
    // Top content
    topEpisode: {
      title: "EP 14 Gary Vaynerchuk",
      number: 14,
      guest: "Gary Vaynerchuk"
    },
    
    // Top artist and audiobook
    topArtist: {
      name: "Taylor Swift",
      image: "https://i.scdn.co/image/ab6761610000e5ebec0dd9ebf1e64b0e2213501a" // Placeholder
    },
    topAudiobook: {
      title: "Liar's Poker",
      author: "Michael Lewis"
    },
    
    // Achievements
    achievements: [
      "A 2025 Marathon Show",
      "A 2025 Instant Hit Show",
      "A 2025 Most Shared Show"
    ],
    
    // Top countries
    topCountries: [
      { rank: 1, name: "United States" },
      { rank: 2, name: "Canada" },
      { rank: 3, name: "United Kingdom" },
      { rank: 4, name: "Australia" },
      { rank: 5, name: "France" }
    ],
    
    // Performance metrics
    performance: {
      percentile: 15,
      description: "My show was in the top 15% of videos on Spotify."
    },
    
    // Top guests
    topGuests: [
      "Gary Vaynerchuk",
      "Andrew Yang",
      "Payal Kadakia",
      "Josh Wolfe",
      "Reshma Saujani"
    ]
  };

  const slides = [
    {
      id: 'cover',
      title: "Human Unicorn Pod",
      subtitle: "2025 Wrapped",
      icon: <Sparkles className="w-16 h-16" />,
      bg: "from-gray-900 to-black",
      component: 'cover'
    },
    {
      id: 'overview',
      title: "Human Unicorn Pod",
      subtitle: `#1 show for ${stats.totalFans} fans`,
      icon: <Trophy className="w-16 h-16" />,
      bg: "from-gray-100 to-gray-200",
      textColor: "text-black",
      component: 'overview'
    },
    {
      id: 'top-country-fans',
      title: "Your Community",
      subtitle: "Top country & Top fans",
      icon: <Globe className="w-16 h-16" />,
      bg: "from-gray-100 to-gray-300",
      textColor: "text-black",
      component: 'top-country-fans'
    },
    {
      id: 'top-episode',
      title: "Top episode",
      subtitle: stats.topEpisode.title,
      icon: <Play className="w-16 h-16" />,
      bg: "from-gray-100 to-gray-200",
      textColor: "text-gray-800",
      component: 'top-episode'
    },
    {
      id: 'top-artist',
      title: "My fans' top artist was",
      subtitle: stats.topArtist.name,
      icon: <Music className="w-16 h-16" />,
      bg: "from-yellow-400 to-yellow-600",
      textColor: "text-black",
      component: 'top-artist'
    },
    {
      id: 'top-audiobook',
      title: "My fans' top audiobook was",
      subtitle: stats.topAudiobook.title,
      icon: <BookOpen className="w-16 h-16" />,
      bg: "from-purple-500 to-purple-700",
      textColor: "text-white",
      component: 'top-audiobook'
    },
    {
      id: 'achievements',
      title: "Your Achievements",
      subtitle: "2025 Highlights",
      icon: <Award className="w-16 h-16" />,
      bg: "from-gray-100 to-gray-200",
      textColor: "text-black",
      component: 'achievements'
    },
    {
      id: 'top-countries',
      title: "Top countries",
      subtitle: "Where your fans are",
      icon: <Globe className="w-16 h-16" />,
      bg: "from-black to-gray-900",
      textColor: "text-white",
      component: 'top-countries'
    },
    {
      id: 'performance',
      title: "Top 15%",
      subtitle: stats.performance.description,
      icon: <BarChart3 className="w-16 h-16" />,
      bg: "from-black to-gray-900",
      textColor: "text-white",
      component: 'performance'
    },
    {
      id: 'top-guests',
      title: "Star Guests",
      subtitle: stats.topGuests.join(" • "),
      icon: <TrendingUp className="w-16 h-16" />,
      bg: "from-indigo-600 to-purple-600",
      textColor: "text-white",
      component: 'top-guests'
    },
    {
      id: 'finale',
      title: "2026 Awaits",
      subtitle: "Keep creating, keep inspiring",
      icon: <Star className="w-16 h-16" />,
      bg: "from-pink-600 to-rose-600",
      textColor: "text-white",
      component: 'finale'
    }
  ];

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 600);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const downloadSlide = async () => {
    if (!slideRef.current) return;
    
    try {
      // Dynamic import of html2canvas
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(slideRef.current, {
        backgroundColor: null,
        scale: 2,
        logging: false,
        useCORS: true
      });
      
      const link = document.createElement('a');
      link.download = `human-unicorn-pod-wrapped-${slides[currentSlide].id}-2025.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      setShowShareMenu(false);
    } catch (error) {
      console.error('Error downloading slide:', error);
      alert('Error downloading image. Please try again.');
    }
  };

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#slide-${currentSlide}`;
    navigator.clipboard.writeText(url).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
      setShowShareMenu(false);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
      setShowShareMenu(false);
    });
  };

  const shareToTwitter = () => {
    const text = `Check out my Human Unicorn Pod 2025 Wrapped! 🎧✨`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    setShowShareMenu(false);
  };

  const shareToFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    setShowShareMenu(false);
  };

  const shareToLinkedIn = () => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    setShowShareMenu(false);
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Human Unicorn Pod - 2025 Wrapped',
          text: 'Check out my 2025 Wrapped!',
          url: window.location.href
        });
        setShowShareMenu(false);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      copyLink();
    }
  };

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const slideIndex = parseInt(hash.replace('#slide-', ''));
      if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < slides.length) {
        setCurrentSlide(slideIndex);
      }
    }
  }, []);

  // Update URL when slide changes
  useEffect(() => {
    window.history.replaceState(null, '', `#slide-${currentSlide}`);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  const renderCoverSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Podcast Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-48 h-48 bg-black rounded-lg flex flex-col items-center justify-center p-6 shadow-2xl">
          {/* Unicorn illustration placeholder - you can replace with actual SVG */}
          <div className="w-32 h-32 mb-4 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              {/* Simplified unicorn wireframe */}
              <path d="M30 70 L40 50 L50 40 L60 50 L70 70" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M50 40 L50 20" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="20" r="3" fill="currentColor"/>
              <path d="M40 50 L35 45" stroke="currentColor" strokeWidth="2"/>
              <path d="M60 50 L65 45" stroke="currentColor" strokeWidth="2"/>
              <path d="M30 70 L25 75" stroke="currentColor" strokeWidth="2"/>
              <path d="M70 70 L75 75" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="text-white text-center">
            <div className="text-2xl font-bold">HUMAN</div>
            <div className="text-2xl font-bold">UNICORN</div>
            <div className="text-2xl font-bold">POD</div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 text-center">
        <div className="inline-block bg-white px-6 py-2 rounded mb-4 border-2 border-black">
          <h1 className="text-2xl font-bold text-black">Human Unicorn Pod</h1>
        </div>
        <p className="text-white text-xl opacity-90">2025 Wrapped</p>
      </div>
    </div>
  );

  const renderOverviewSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      {/* Abstract squiggles */}
      <div className="absolute top-10 left-10 w-20 h-20 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full text-black">
          <path d="M10 50 Q30 20, 50 50 T90 50" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      
      {/* Podcast Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-48 h-48 bg-black rounded-lg flex flex-col items-center justify-center p-6 shadow-2xl">
          <div className="w-32 h-32 mb-4 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <path d="M30 70 L40 50 L50 40 L60 50 L70 70" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M50 40 L50 20" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="20" r="3" fill="currentColor"/>
              <path d="M40 50 L35 45" stroke="currentColor" strokeWidth="2"/>
              <path d="M60 50 L65 45" stroke="currentColor" strokeWidth="2"/>
              <path d="M30 70 L25 75" stroke="currentColor" strokeWidth="2"/>
              <path d="M70 70 L75 75" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="text-white text-center">
            <div className="text-xl font-bold">HUMAN</div>
            <div className="text-xl font-bold">UNICORN</div>
            <div className="text-xl font-bold">POD</div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-2 text-black">#1 show</h1>
        <h2 className="text-5xl font-bold text-black">for {stats.totalFans} fans</h2>
      </div>
    </div>
  );

  const renderTopCountryFansSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      <div className="grid grid-cols-2 gap-8 w-full max-w-md">
        <div className="text-center">
          <p className="text-lg mb-2 text-black opacity-70">Top country</p>
          <p className="text-6xl font-bold text-black">{stats.topCountry}</p>
        </div>
        <div className="text-center">
          <p className="text-lg mb-2 text-black opacity-70">Top fans</p>
          <p className="text-6xl font-bold text-black">{stats.topFans}</p>
        </div>
      </div>
    </div>
  );

  const renderTopEpisodeSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      {/* Abstract background lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path d="M50 100 Q100 50, 150 100 T250 100" stroke="black" strokeWidth="2" fill="none"/>
          <path d="M200 200 Q250 150, 300 200 T400 200" stroke="black" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      
      {/* Podcast Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-40 h-40 bg-black rounded-lg flex flex-col items-center justify-center p-4 shadow-2xl">
          <div className="w-24 h-24 mb-2 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <path d="M30 70 L40 50 L50 40 L60 50 L70 70" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M50 40 L50 20" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="20" r="3" fill="currentColor"/>
            </svg>
          </div>
          <div className="text-white text-center text-xs">
            <div className="font-bold">HUMAN</div>
            <div className="font-bold">UNICORN</div>
            <div className="font-bold">POD</div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 text-center">
        <p className="text-lg mb-4 text-gray-600">Top episode</p>
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          {stats.topEpisode.title.split(' ').slice(0, 1).join(' ')}
          <br />
          {stats.topEpisode.title.split(' ').slice(1).join(' ')}
        </h1>
      </div>
    </div>
  );

  const renderTopArtistSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-black/20 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      {/* Artist image placeholder */}
      <div className="relative z-10 mb-6 w-48 h-48 rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <Music className="w-24 h-24 text-white opacity-50" />
      </div>
      
      <div className="relative z-10 text-center">
        <p className="text-xl mb-4 text-white opacity-90">My fans' top artist was</p>
        <h1 className="text-5xl font-bold text-yellow-400">{stats.topArtist.name}</h1>
      </div>
    </div>
  );

  const renderTopAudiobookSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Book cover placeholder */}
      <div className="relative z-10 mb-6 w-40 h-56 rounded shadow-2xl bg-gradient-to-br from-green-500 to-green-700 flex flex-col items-center justify-center p-4">
        <div className="text-white text-center">
          <div className="text-xs font-bold mb-2">LIAR'S POKER</div>
          <div className="text-xs">MICHAEL LEWIS</div>
        </div>
      </div>
      
      <div className="relative z-10 text-center">
        <p className="text-xl mb-4 text-white opacity-90">My fans' top audiobook was</p>
        <h1 className="text-5xl font-bold text-purple-300">{stats.topAudiobook.title}</h1>
      </div>
    </div>
  );

  const renderAchievementsSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      {/* Abstract squiggles */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-black">
          <path d="M10 50 Q30 20, 50 50 T90 50" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      
      <div className="relative z-10 w-full max-w-sm space-y-6">
        {stats.achievements.map((achievement, idx) => {
          const colors = [
            "from-yellow-400 to-yellow-600",
            "from-blue-400 to-blue-600",
            "from-red-500 to-red-700"
          ];
          return (
            <div
              key={idx}
              className={`bg-gradient-to-r ${colors[idx]} rounded-full p-6 shadow-lg transform transition-all hover:scale-105`}
            >
              <p className="text-xl font-bold text-white text-center">{achievement}</p>
            </div>
          );
        })}
      </div>
      
      {/* Connecting lines */}
      <div className="absolute left-1/4 top-1/3 w-1/2 h-1/2 opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M50 50 Q100 30, 150 50" stroke="black" strokeWidth="2" fill="none"/>
          <path d="M50 100 Q100 80, 150 100" stroke="black" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </div>
  );

  const renderTopCountriesSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 80}
              x2="400"
              y2={i * 80}
              stroke="white"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 100}
              y1="0"
              x2={i * 100}
              y2="800"
              stroke="white"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>
      
      <div className="relative z-10 w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="inline-block bg-white px-4 py-2 rounded mb-2 border border-white">
            <h1 className="text-xl font-bold text-white">Human Unicorn Pod</h1>
          </div>
          <div className="inline-block bg-white px-4 py-2 rounded border border-white">
            <h2 className="text-2xl font-bold text-white">Top countries</h2>
          </div>
        </div>
        
        <div className="space-y-4">
          {stats.topCountries.map((country, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="bg-white px-3 py-1 rounded border border-white">
                <span className="text-sm font-bold text-white">{String(country.rank).padStart(2, '0')}</span>
              </div>
              <div className="flex-1 bg-white px-4 py-2 rounded border border-white">
                <span className="text-lg font-bold text-white">{country.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPerformanceSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      {/* Abstract background lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <path d="M50 100 Q100 50, 150 100 T250 100 T350 100" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M100 200 Q150 150, 200 200 T300 200" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      
      {/* Podcast Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-48 h-48 bg-black rounded-lg flex flex-col items-center justify-center p-6 shadow-2xl">
          <div className="w-32 h-32 mb-4 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <path d="M30 70 L40 50 L50 40 L60 50 L70 70" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M50 40 L50 20" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="20" r="3" fill="currentColor"/>
              <path d="M40 50 L35 45" stroke="currentColor" strokeWidth="2"/>
              <path d="M60 50 L65 45" stroke="currentColor" strokeWidth="2"/>
              <path d="M30 70 L25 75" stroke="currentColor" strokeWidth="2"/>
              <path d="M70 70 L75 75" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="text-white text-center">
            <div className="text-xl font-bold">HUMAN</div>
            <div className="text-xl font-bold">UNICORN</div>
            <div className="text-xl font-bold">POD</div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white leading-tight">
          My show was
          <br />
          in the top
          <br />
          <span className="text-5xl">{stats.performance.percentile}%</span> of videos on
          <br />
          Spotify.
        </h1>
      </div>
    </div>
  );

  const renderTopGuestsSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">Star Guests</h1>
        <div className="space-y-3">
          {stats.topGuests.map((guest, idx) => (
            <div key={idx} className="text-2xl text-white opacity-90">
              {guest}
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg text-white opacity-75">Conversations that matter</p>
      </div>
    </div>
  );

  const renderFinaleSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <div className="mb-8 animate-pulse">
          {slide.icon}
        </div>
        <h1 className="text-5xl font-bold mb-4 text-white">{slide.title}</h1>
        <p className="text-2xl text-white opacity-90">{slide.subtitle}</p>
        <p className="mt-6 text-lg text-white opacity-75">Your best year yet is coming</p>
      </div>
    </div>
  );

  const renderSlideContent = () => {
    switch (slide.component) {
      case 'cover':
        return renderCoverSlide();
      case 'overview':
        return renderOverviewSlide();
      case 'top-country-fans':
        return renderTopCountryFansSlide();
      case 'top-episode':
        return renderTopEpisodeSlide();
      case 'top-artist':
        return renderTopArtistSlide();
      case 'top-audiobook':
        return renderTopAudiobookSlide();
      case 'achievements':
        return renderAchievementsSlide();
      case 'top-countries':
        return renderTopCountriesSlide();
      case 'performance':
        return renderPerformanceSlide();
      case 'top-guests':
        return renderTopGuestsSlide();
      case 'finale':
        return renderFinaleSlide();
      default:
        return (
          <div className="relative h-full flex flex-col items-center justify-center p-8">
            <div className={`transform transition-all duration-500 ${animate ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
              <div className="mb-8 animate-pulse">
                {slide.icon}
              </div>
              <h1 className={`text-5xl font-bold mb-4 text-center leading-tight ${slide.textColor || 'text-white'}`}>
                {slide.title}
              </h1>
              <p className={`text-xl text-center mb-6 opacity-90 ${slide.textColor || 'text-white'}`}>
                {slide.subtitle}
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div 
          ref={slideRef}
          className={`relative bg-gradient-to-br ${slide.bg} rounded-3xl overflow-hidden shadow-2xl aspect-[9/16]`}
        >
          {/* Content */}
          <div className={`relative h-full ${slide.textColor || 'text-white'}`}>
            {renderSlideContent()}
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4 px-8">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`px-6 py-2 rounded-full backdrop-blur disabled:opacity-30 hover:opacity-80 transition ${
                slide.textColor === 'text-black' 
                  ? 'bg-black/20 text-black' 
                  : 'bg-white/20 text-white'
              }`}
            >
              ←
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide 
                      ? `w-8 ${slide.textColor === 'text-black' ? 'bg-black' : 'bg-white'}` 
                      : `${slide.textColor === 'text-black' ? 'bg-black/40' : 'bg-white/40'} w-2`
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`px-6 py-2 rounded-full backdrop-blur disabled:opacity-30 hover:opacity-80 transition ${
                slide.textColor === 'text-black' 
                  ? 'bg-black/20 text-black' 
                  : 'bg-white/20 text-white'
              }`}
            >
              →
            </button>
          </div>

          {/* Progress indicator */}
          <div className={`absolute top-4 right-4 text-sm opacity-60 ${slide.textColor || 'text-white'}`}>
            {currentSlide + 1} / {slides.length}
          </div>

          {/* Share button */}
          <div className="absolute top-4 left-4">
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className={`p-3 rounded-full backdrop-blur transition-all hover:scale-110 ${
                  slide.textColor === 'text-black' 
                    ? 'bg-black/20 text-black hover:bg-black/30' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Share2 className="w-5 h-5" />
              </button>

              {/* Share menu */}
              {showShareMenu && (
                <div className="absolute left-0 top-14 bg-gray-900 rounded-2xl shadow-2xl p-2 min-w-[200px] z-50 border border-gray-700">
                  <button
                    onClick={shareNative}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 transition text-white text-left"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button
                    onClick={downloadSlide}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 transition text-white text-left"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Image</span>
                  </button>
                  <button
                    onClick={copyLink}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 transition text-white text-left"
                  >
                    {linkCopied ? (
                      <>
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                  <div className="border-t border-gray-700 my-2"></div>
                  <button
                    onClick={shareToTwitter}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 transition text-white text-left"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span>Share on Twitter</span>
                  </button>
                  <button
                    onClick={shareToFacebook}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 transition text-white text-left"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Share on Facebook</span>
                  </button>
                  <button
                    onClick={shareToLinkedIn}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 transition text-white text-left"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>Share on LinkedIn</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Spotify branding */}
          <div className={`absolute bottom-20 left-4 flex items-center gap-2 text-sm opacity-70 ${slide.textColor || 'text-white'}`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span>for Creators</span>
          </div>
          <div className={`absolute bottom-20 right-4 text-sm opacity-70 ${slide.textColor || 'text-white'}`}>
            WRAPPED
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6 text-gray-400">
          <p className="text-sm">Human Unicorn Pod • 2025 Wrapped</p>
          <p className="text-xs mt-2 opacity-60">Click the share button to download or share your wrapped!</p>
        </div>
      </div>

      {/* Click outside to close share menu */}
      {showShareMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowShareMenu(false)}
        />
      )}
    </div>
  );
};

export default HumanUnicornPodWrapped2025;

