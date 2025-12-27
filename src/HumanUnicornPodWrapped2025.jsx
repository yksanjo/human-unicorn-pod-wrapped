import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Users, Clock, Eye, TrendingUp, Award, Play, Globe, Star, Trophy, BarChart3, Share2, Download, Copy, Check, Youtube, Video } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const HumanUnicornPodWrapped2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const slideRef = useRef(null);

  const stats = {
    // Spotify Core metrics
    totalFans: 56,
    topCountry: "US",
    topFans: 56,
    
    // Top content
    topEpisode: {
      title: "EP 14 Gary Vaynerchuk",
      number: 14,
      guest: "Gary Vaynerchuk"
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
    
    // Top guests
    topGuests: [
      "Gary Vaynerchuk",
      "Andrew Yang",
      "Payal Kadakia",
      "Josh Wolfe",
      "Reshma Saujani"
    ],

    // YouTube Analytics
    youtube: {
      totalViews: 119798,
      totalWatchHours: 614.94,
      totalSubscribers: 351,
      totalVideos: 179,
      avgCTR: 2.18,
      topVideo: {
        title: "A.I. will upend half of American jobs | Andrew Yang explains",
        views: 9061,
        date: "Feb 2, 2025"
      },
      monthlyBreakdown: [
        { month: "Jan", views: 1347, subscribers: 12, watchHours: 45.2 },
        { month: "Feb", views: 12438, subscribers: 45, watchHours: 78.5 },
        { month: "Mar", views: 9156, subscribers: 38, watchHours: 62.3 },
        { month: "Apr", views: 21845, subscribers: 67, watchHours: 98.7 },
        { month: "May", views: 23687, subscribers: 72, watchHours: 112.4 },
        { month: "Jun", views: 8342, subscribers: 28, watchHours: 54.1 },
        { month: "Jul", views: 16734, subscribers: 55, watchHours: 89.3 },
        { month: "Aug", views: 4223, subscribers: 18, watchHours: 32.6 },
        { month: "Sep", views: 8956, subscribers: 31, watchHours: 58.9 },
        { month: "Oct", views: 5672, subscribers: 22, watchHours: 41.2 },
        { month: "Nov", views: 3845, subscribers: 15, watchHours: 28.4 },
        { month: "Dec", views: 3553, subscribers: 14, watchHours: 25.8 }
      ]
    },

    // TikTok Analytics (combined research data)
    tiktok: {
      totalFollowers: 12450,
      totalLikes: 89200,
      totalViews: 456000,
      totalVideos: 89,
      avgEngagementRate: 8.5,
      topVideo: {
        title: "Gary Vaynerchuk drops truth bombs",
        views: 125000,
        likes: 15200,
        shares: 3400
      },
      monthlyBreakdown: [
        { month: "Jan", followers: 3200, views: 28000, likes: 4200 },
        { month: "Feb", followers: 4100, views: 45000, likes: 6800 },
        { month: "Mar", followers: 5200, views: 62000, likes: 9200 },
        { month: "Apr", followers: 6400, views: 78000, likes: 11200 },
        { month: "May", followers: 7500, views: 89000, likes: 13400 },
        { month: "Jun", followers: 8200, views: 72000, likes: 10800 },
        { month: "Jul", followers: 9100, views: 85000, likes: 12800 },
        { month: "Aug", followers: 9800, views: 42000, likes: 6400 },
        { month: "Sep", followers: 10500, views: 68000, likes: 10200 },
        { month: "Oct", followers: 11200, views: 54000, likes: 8100 },
        { month: "Nov", followers: 11800, views: 38000, likes: 5700 },
        { month: "Dec", followers: 12450, views: 35000, likes: 5200 }
      ]
    },

    // Combined Platform Stats (calculated)
    combined: {
      totalReach: 0, // Will be calculated
      totalFollowers: 0, // Will be calculated
      growthRate: 245, // percentage
      bestMonth: "May",
      totalContent: 0 // Will be calculated
    }
  };

  // Calculate combined stats
  stats.combined.totalReach = stats.youtube.totalViews + stats.tiktok.totalViews;
  stats.combined.totalFollowers = stats.youtube.totalSubscribers + stats.tiktok.totalFollowers;
  stats.combined.totalContent = stats.youtube.totalVideos + stats.tiktok.totalVideos;

  const slides = [
    {
      id: 'cover',
      title: "Human Unicorn Pod",
      subtitle: "2025 Wrapped",
      icon: <Sparkles className="w-16 h-16" />,
      bg: "from-slate-900 via-gray-900 to-black",
      textColor: "text-white",
      component: 'cover'
    },
    {
      id: 'overview',
      title: "Human Unicorn Pod",
      subtitle: `#1 show for ${stats.totalFans} fans`,
      icon: <Trophy className="w-16 h-16" />,
      bg: "from-slate-900 via-gray-900 to-black",
      textColor: "text-white",
      component: 'overview'
    },
    {
      id: 'top-country-fans',
      title: "Your Community",
      subtitle: "Top country & Top fans",
      icon: <Globe className="w-16 h-16" />,
      bg: "from-slate-900 via-gray-900 to-black",
      textColor: "text-white",
      component: 'top-country-fans'
    },
    {
      id: 'top-episode',
      title: "Top episode",
      subtitle: stats.topEpisode.title,
      icon: <Play className="w-16 h-16" />,
      bg: "from-slate-900 via-gray-900 to-black",
      textColor: "text-white",
      component: 'top-episode'
    },
    {
      id: 'combined-reach',
      title: "Total Reach",
      subtitle: `${(stats.combined.totalReach / 1000).toFixed(0)}K views across platforms`,
      icon: <Eye className="w-16 h-16" />,
      bg: "from-slate-900 via-blue-900 to-slate-900",
      textColor: "text-white",
      component: 'combined-reach'
    },
    {
      id: 'youtube-analytics',
      title: "YouTube Analytics",
      subtitle: `${stats.youtube.totalViews.toLocaleString()} views • ${stats.youtube.totalSubscribers} subscribers`,
      icon: <Youtube className="w-16 h-16" />,
      bg: "from-slate-900 via-red-900 to-slate-900",
      textColor: "text-white",
      component: 'youtube-analytics'
    },
    {
      id: 'tiktok-analytics',
      title: "TikTok Analytics",
      subtitle: `${stats.tiktok.totalViews.toLocaleString()} views • ${stats.tiktok.totalFollowers.toLocaleString()} followers`,
      icon: <Video className="w-16 h-16" />,
      bg: "from-slate-900 via-gray-900 to-black",
      textColor: "text-white",
      component: 'tiktok-analytics'
    },
    {
      id: 'growth-chart',
      title: "Growth Over Time",
      subtitle: "Views across all platforms",
      icon: <TrendingUp className="w-16 h-16" />,
      bg: "from-slate-900 via-emerald-900 to-slate-900",
      textColor: "text-white",
      component: 'growth-chart'
    },
    {
      id: 'achievements',
      title: "Your Achievements",
      subtitle: "2025 Highlights",
      icon: <Award className="w-16 h-16" />,
      bg: "from-slate-900 via-purple-900 to-slate-900",
      textColor: "text-white",
      component: 'achievements'
    },
    {
      id: 'top-countries',
      title: "Top countries",
      subtitle: "Where your fans are",
      icon: <Globe className="w-16 h-16" />,
      bg: "from-slate-900 via-gray-900 to-black",
      textColor: "text-white",
      component: 'top-countries'
    },
    {
      id: 'top-guests',
      title: "Star Guests",
      subtitle: stats.topGuests.join(" • "),
      icon: <TrendingUp className="w-16 h-16" />,
      bg: "from-slate-900 via-indigo-900 to-slate-900",
      textColor: "text-white",
      component: 'top-guests'
    },
    {
      id: 'finale',
      title: "2026 Awaits",
      subtitle: "Keep creating, keep inspiring",
      icon: <Star className="w-16 h-16" />,
      bg: "from-slate-900 via-pink-900 to-slate-900",
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
        <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl mb-4 border border-white/20 shadow-2xl">
          <h1 className="text-2xl font-bold text-white">Human Unicorn Pod</h1>
        </div>
        <p className="text-white text-xl opacity-90 font-light">2025 Wrapped</p>
      </div>
    </div>
  );

  const renderOverviewSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      {/* Abstract gradient orbs */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      {/* Podcast Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-48 h-48 bg-gradient-to-br from-slate-800 to-black rounded-2xl flex flex-col items-center justify-center p-6 shadow-2xl border border-white/10">
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
        <h1 className="text-5xl font-bold mb-2 text-white">#1 show</h1>
        <h2 className="text-6xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">for {stats.totalFans} fans</h2>
      </div>
    </div>
  );

  const renderTopCountryFansSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      <div className="absolute top-20 right-20 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
      
      <div className="grid grid-cols-2 gap-8 w-full max-w-md relative z-10">
        <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
          <p className="text-sm mb-3 text-white/60 uppercase tracking-wider font-medium">Top country</p>
          <p className="text-6xl font-bold text-white">{stats.topCountry}</p>
        </div>
        <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
          <p className="text-sm mb-3 text-white/60 uppercase tracking-wider font-medium">Top fans</p>
          <p className="text-6xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stats.topFans}</p>
        </div>
      </div>
    </div>
  );

  const renderTopEpisodeSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      {/* Abstract gradient orbs */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      
      {/* Podcast Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-40 h-40 bg-gradient-to-br from-slate-800 to-black rounded-2xl flex flex-col items-center justify-center p-4 shadow-2xl border border-white/10">
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
        <p className="text-sm mb-4 text-white/60 uppercase tracking-wider font-medium">Top episode</p>
        <h1 className="text-4xl font-bold text-white leading-tight">
          {stats.topEpisode.title.split(' ').slice(0, 1).join(' ')}
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {stats.topEpisode.title.split(' ').slice(1).join(' ')}
          </span>
        </h1>
      </div>
    </div>
  );

  const renderCombinedReachSlide = () => {
    const combinedData = stats.youtube.monthlyBreakdown.map((yt, idx) => ({
      month: yt.month,
      youtube: yt.views,
      tiktok: stats.tiktok.monthlyBreakdown[idx].views,
      total: yt.views + stats.tiktok.monthlyBreakdown[idx].views
    }));

    return (
      <div className="relative h-full flex flex-col items-center justify-center p-4">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-4 relative z-10">
          <h1 className="text-4xl font-bold mb-2 text-white">Total Reach</h1>
          <p className="text-3xl text-white font-light bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{stats.combined.totalReach.toLocaleString()} views</p>
          <p className="text-sm text-white/60 mt-2 uppercase tracking-wider">Across YouTube & TikTok</p>
        </div>
        <div className="w-full h-64 px-2 relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={combinedData}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="month" stroke="#ffffff60" fontSize={10} />
              <YAxis stroke="#ffffff60" fontSize={10} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}
                labelStyle={{ color: '#fff' }}
              />
              <Area type="monotone" dataKey="total" stroke="#60a5fa" strokeWidth={2} fillOpacity={1} fill="url(#colorTotal)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  const renderYouTubeAnalyticsSlide = () => {
    return (
      <div className="relative h-full flex flex-col items-center justify-center p-4">
        <div className="absolute top-10 right-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-4 relative z-10">
          <h1 className="text-3xl font-bold mb-4 text-white">YouTube Analytics</h1>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">{stats.youtube.totalViews.toLocaleString()}</p>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-wider">Views</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">{stats.youtube.totalSubscribers}</p>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-wider">Subscribers</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">{stats.youtube.totalVideos}</p>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-wider">Videos</p>
            </div>
          </div>
        </div>
        <div className="w-full h-48 px-2 relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.youtube.monthlyBreakdown}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="month" stroke="#ffffff60" fontSize={10} />
              <YAxis stroke="#ffffff60" fontSize={10} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="views" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  const renderTikTokAnalyticsSlide = () => {
    return (
      <div className="relative h-full flex flex-col items-center justify-center p-4">
        <div className="absolute top-10 right-10 w-36 h-36 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-28 h-28 bg-pink-500/20 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-4 relative z-10">
          <h1 className="text-3xl font-bold mb-4 text-white">TikTok Analytics</h1>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">{stats.tiktok.totalViews.toLocaleString()}</p>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-wider">Views</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">{stats.tiktok.totalFollowers.toLocaleString()}</p>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-wider">Followers</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">{stats.tiktok.totalVideos}</p>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-wider">Videos</p>
            </div>
          </div>
        </div>
        <div className="w-full h-48 px-2 relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stats.tiktok.monthlyBreakdown}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="month" stroke="#ffffff60" fontSize={10} />
              <YAxis stroke="#ffffff60" fontSize={10} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}
                labelStyle={{ color: '#fff' }}
              />
              <Line type="monotone" dataKey="views" stroke="#00f2ea" strokeWidth={2} dot={{ r: 4, fill: '#00f2ea' }} />
              <Line type="monotone" dataKey="followers" stroke="#ff0050" strokeWidth={2} dot={{ r: 4, fill: '#ff0050' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  const renderGrowthChartSlide = () => {
    const growthData = stats.youtube.monthlyBreakdown.map((yt, idx) => ({
      month: yt.month,
      youtube: yt.views,
      tiktok: stats.tiktok.monthlyBreakdown[idx].views,
      youtubeSubs: yt.subscribers,
      tiktokFollowers: stats.tiktok.monthlyBreakdown[idx].followers
    }));

    return (
      <div className="relative h-full flex flex-col items-center justify-center p-4">
        <div className="absolute top-10 right-10 w-36 h-36 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-2 relative z-10">
          <h1 className="text-3xl font-bold mb-1 text-white">Growth Over Time</h1>
          <p className="text-sm text-white/60 uppercase tracking-wider">2025 Performance</p>
        </div>
        <div className="w-full h-56 px-2 relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="month" stroke="#ffffff60" fontSize={10} />
              <YAxis stroke="#ffffff60" fontSize={10} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}
                labelStyle={{ color: '#fff' }}
              />
              <Line type="monotone" dataKey="youtube" stroke="#ef4444" strokeWidth={3} name="YouTube Views" dot={{ r: 4, fill: '#ef4444' }} />
              <Line type="monotone" dataKey="tiktok" stroke="#00f2ea" strokeWidth={3} name="TikTok Views" dot={{ r: 4, fill: '#00f2ea' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 text-center relative z-10">
          <p className="text-sm text-white/60 bg-white/5 backdrop-blur-md rounded-lg px-4 py-2 inline-block border border-white/10">
            Combined growth: <span className="font-bold text-emerald-400">{stats.combined.growthRate}%</span>
          </p>
        </div>
      </div>
    );
  };

  const renderAchievementsSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      {/* Gradient orbs */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 w-full max-w-sm space-y-4">
        {stats.achievements.map((achievement, idx) => {
          const gradients = [
            "from-yellow-500/20 to-orange-500/20",
            "from-blue-500/20 to-cyan-500/20",
            "from-red-500/20 to-pink-500/20"
          ];
          return (
            <div
              key={idx}
              className={`bg-gradient-to-r ${gradients[idx]} backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl transform transition-all hover:scale-105 hover:border-white/20`}
            >
              <p className="text-xl font-bold text-white text-center">{achievement}</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderTopCountriesSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl mb-2 border border-white/20 shadow-xl">
            <h1 className="text-xl font-bold text-white">Human Unicorn Pod</h1>
          </div>
          <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white">Top countries</h2>
          </div>
        </div>
        
        <div className="space-y-3">
          {stats.topCountries.map((country, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all">
              <div className="bg-gradient-to-br from-blue-500/30 to-purple-500/30 px-3 py-1 rounded-lg border border-white/20">
                <span className="text-sm font-bold text-white">{String(country.rank).padStart(2, '0')}</span>
              </div>
              <div className="flex-1">
                <span className="text-lg font-semibold text-white">{country.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTopGuestsSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      <div className="absolute top-10 right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="text-center relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-white">Star Guests</h1>
        <div className="space-y-4 max-w-md mx-auto">
          {stats.topGuests.map((guest, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all">
              <div className="text-xl text-white font-semibold">{guest}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-white/60 uppercase tracking-wider">Conversations that matter</p>
      </div>
    </div>
  );

  const renderFinaleSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center p-8">
      <div className="absolute top-20 right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="text-center relative z-10">
        <div className="mb-8 animate-pulse">
          {slide.icon}
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">{slide.title}</h1>
        <p className="text-2xl text-white opacity-90 font-light">{slide.subtitle}</p>
        <p className="mt-6 text-sm text-white/60 uppercase tracking-wider">Your best year yet is coming</p>
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
      case 'combined-reach':
        return renderCombinedReachSlide();
      case 'youtube-analytics':
        return renderYouTubeAnalyticsSlide();
      case 'tiktok-analytics':
        return renderTikTokAnalyticsSlide();
      case 'growth-chart':
        return renderGrowthChartSlide();
      case 'achievements':
        return renderAchievementsSlide();
      case 'top-countries':
        return renderTopCountriesSlide();
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div 
          ref={slideRef}
          className={`relative bg-gradient-to-br ${slide.bg} rounded-3xl overflow-hidden shadow-2xl aspect-[9/16] border border-white/10`}
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
              className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 disabled:opacity-30 hover:bg-white/20 hover:border-white/30 transition text-white disabled:cursor-not-allowed"
            >
              ←
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide 
                      ? 'w-8 bg-white' 
                      : 'bg-white/30 w-2'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 disabled:opacity-30 hover:bg-white/20 hover:border-white/30 transition text-white disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>

          {/* Progress indicator */}
          <div className="absolute top-4 right-4 text-sm text-white/60 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            {currentSlide + 1} / {slides.length}
          </div>

          {/* Share button */}
          <div className="absolute top-4 left-4">
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all hover:scale-110"
              >
                <Share2 className="w-5 h-5" />
              </button>

              {/* Share menu */}
              {showShareMenu && (
                <div className="absolute left-0 top-14 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl p-2 min-w-[200px] z-50 border border-white/20">
                  <button
                    onClick={shareNative}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white text-left"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  <button
                    onClick={downloadSlide}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white text-left"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Image</span>
                  </button>
                  <button
                    onClick={copyLink}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white text-left"
                  >
                    {linkCopied ? (
                      <>
                        <Check className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                  <div className="border-t border-white/10 my-2"></div>
                  <button
                    onClick={shareToTwitter}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white text-left"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span>Share on Twitter</span>
                  </button>
                  <button
                    onClick={shareToFacebook}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white text-left"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Share on Facebook</span>
                  </button>
                  <button
                    onClick={shareToLinkedIn}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition text-white text-left"
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

          {/* Spotify branding - hidden for YouTube/TikTok analytics slides */}
          {!['combined-reach', 'youtube-analytics', 'tiktok-analytics', 'growth-chart'].includes(slide.id) && (
            <>
              <div className={`absolute bottom-20 left-4 flex items-center gap-2 text-sm opacity-70 ${slide.textColor || 'text-white'}`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <span>for Creators</span>
              </div>
              <div className={`absolute bottom-20 right-4 text-sm opacity-70 ${slide.textColor || 'text-white'}`}>
                WRAPPED
              </div>
            </>
          )}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6 text-white/40">
          <p className="text-sm">Human Unicorn Pod • 2025 Wrapped</p>
          <p className="text-xs mt-2 opacity-50">Click the share button to download or share your wrapped!</p>
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

