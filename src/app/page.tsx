"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      user: "Wonseok",
      tag: "DEV",
      time: "오늘 오후 4:20",
      avatar: "/avatar.jpg",
      text: "✨ 안녕하세요! 바이브 코딩과 Next.js로 빠르고 유려한 웹을 만드는 프론트엔드 개발자 허원석입니다. 편하게 둘러보세요!",
    },
  ]);

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        if (navigator.share) {
          await navigator.share({
            title: "허원석 | Vibe Coder & Frontend Developer",
            text: "Welcome to Wonseok's Discord-styled Portfolio & Link Platform",
            url: window.location.href,
          });
        } else {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      } catch (err) {
        console.error("공유 에러:", err);
      }
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      {
        user: "Visitor",
        tag: "GUEST",
        time: "방금 전",
        avatar: "/avatar.jpg",
        text: messageInput,
      },
    ]);
    setMessageInput("");
  };

  return (
    <div className="min-h-screen bg-[#0a0d3a] text-white font-sans antialiased selection:bg-[#ec48bd] selection:text-white relative overflow-x-hidden">
      {/* Dynamic Animated Gradient Mesh Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#5865f2]/30 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-[#ec48bd]/25 rounded-full blur-[160px]"></div>
        <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] bg-[#8b5cf6]/20 rounded-full blur-[150px]"></div>
      </div>

      {/* 1. TOP NAVIGATION (nav-bar, Deep Indigo + Electric Green CTA) */}
      <header className="sticky top-0 z-50 bg-[#0a0d3a]/90 backdrop-blur-xl border-b border-[#1e2353]/80 px-4 sm:px-8 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo / Brand Mark */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#5865f2] flex items-center justify-center shadow-[0_4px_20px_rgba(88,101,242,0.5)]">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </div>
          <span className="font-black tracking-tight text-xl sm:text-2xl text-white uppercase">
            WONSEOK<span className="text-[#35ed7e]">.GG</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-bold text-white/90">
          <a href="#about" className="hover:text-[#35ed7e] transition-colors">Profile</a>
          <a href="#projects" className="hover:text-[#35ed7e] transition-colors">Projects</a>
          <a href="#chat" className="hover:text-[#35ed7e] transition-colors">Voice & Chat</a>
          <a href="#stats" className="hover:text-[#35ed7e] transition-colors">Stats</a>
          <a href="https://velog.io" target="_blank" rel="noreferrer" className="hover:text-[#ec48bd] transition-colors">Tech Blog ↗</a>
        </nav>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="hidden sm:inline-flex px-4 py-2 rounded-full bg-[#1e2353] hover:bg-[#2e3782] text-white text-xs font-bold transition-all cursor-pointer"
          >
            {copied ? "COPIED! ✨" : "SHARE LINK"}
          </button>
          <a
            href="mailto:contact@example.com"
            className="px-5 py-2.5 rounded-full bg-[#35ed7e] hover:bg-[#2fd972] active:scale-95 text-[#000000] font-black text-xs sm:text-sm uppercase tracking-wide transition-all shadow-[0_4px_20px_rgba(53,237,126,0.4)]"
          >
            GET IN TOUCH
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION: ALL-CAPS LOUD HEADLINE & PLAYFUL 3D AVATAR */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-12 sm:pt-20 pb-16 sm:pb-28 flex flex-col items-center text-center">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ec48bd]/20 border border-[#ec48bd]/40 text-[#ec48bd] font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-6 animate-bounce">
          <span>🚀 VIBE CODING ACTIVATED</span>
        </div>

        {/* All-Caps Display-XL Headline */}
        <h1 className="text-[44px] sm:text-[68px] lg:text-[88px] font-black leading-[0.98] tracking-tight text-white uppercase max-w-5xl">
          IMAGINE A <span className="bg-gradient-to-r from-[#5865f2] via-[#ec48bd] to-[#35ed7e] bg-clip-text text-transparent">VIBE CODER.</span>
        </h1>

        <p className="mt-6 sm:mt-8 text-base sm:text-xl font-medium text-[#99aab5] max-w-2xl leading-relaxed">
          ...아이디어를 광속으로 코드로 바꾸고, 언제나 즐겁게 협업할 수 있는 곳. 프론트엔드 개발자 <strong className="text-white font-bold">허원석</strong>의 디지털 아지트에 오신 것을 환영합니다!
        </p>

        {/* Hero CTA Button Pair */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/gjdnjstjr"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl sm:rounded-full bg-[#35ed7e] hover:bg-[#2fd972] active:scale-95 text-[#000000] font-black text-base sm:text-lg uppercase tracking-wide transition-all shadow-[0_8px_30px_rgba(53,237,126,0.45)] inline-flex items-center gap-2.5"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>OPEN GITHUB REPO</span>
          </a>

          <a
            href="https://velog.io"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl sm:rounded-full bg-[#5865f2] hover:bg-[#4752c4] active:scale-95 text-white font-black text-base sm:text-lg uppercase tracking-wide transition-all shadow-[0_8px_30px_rgba(88,101,242,0.45)] inline-flex items-center gap-2"
          >
            <span>READ DEV JOURNAL</span>
            <span>↗</span>
          </a>
        </div>

        {/* 3D Character Avatar Stage with Discord VC Badge */}
        <div className="mt-14 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#5865f2] via-[#ec48bd] to-[#35ed7e] rounded-[50px] blur-2xl opacity-60 group-hover:opacity-90 transition duration-700"></div>
          
          <div className="relative bg-[#1e2353] border-4 border-[#5865f2] rounded-[40px] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#35ed7e] shrink-0 shadow-lg">
              <Image
                src="/avatar.jpg"
                alt="Wonseok Avatar"
                width={160}
                height={160}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <span className="absolute bottom-2 right-2 w-6 h-6 bg-[#35ed7e] border-3 border-[#1e2353] rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              </span>
            </div>

            <div className="text-left flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-white">허원석</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#5865f2] text-[11px] font-extrabold tracking-wider uppercase text-white">
                  BOT · VIBE CODER
                </span>
              </div>
              <p className="text-sm font-semibold text-[#35ed7e] mt-1">
                🟢 Playing Next.js 16 (App Router & Turbopack)
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="px-3 py-1 rounded-full bg-[#0a0d3a] text-xs font-bold text-white/90">#Frontend</span>
                <span className="px-3 py-1 rounded-full bg-[#0a0d3a] text-xs font-bold text-white/90">#React19</span>
                <span className="px-3 py-1 rounded-full bg-[#0a0d3a] text-xs font-bold text-white/90">#TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-[#0a0d3a] text-xs font-bold text-white/90">#TailwindCSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MARQUEE BAND (marquee-band, Blurple #5865f2) */}
      <div className="w-full bg-[#5865f2] py-4 sm:py-5 overflow-hidden shadow-lg transform -rotate-1">
        <div className="flex items-center gap-8 whitespace-nowrap font-black text-lg sm:text-2xl tracking-wider uppercase text-white animate-marquee">
          <span>🎮 BUILD HARD</span>
          <span>·</span>
          <span>⚡ SHIP FAST</span>
          <span>·</span>
          <span>🔥 VIBE CODING</span>
          <span>·</span>
          <span>💎 NEXT.JS 16</span>
          <span>·</span>
          <span>👾 LEVEL UP</span>
          <span>·</span>
          <span>🚀 REACT 19</span>
          <span>·</span>
          <span>🎮 BUILD HARD</span>
          <span>·</span>
          <span>⚡ SHIP FAST</span>
          <span>·</span>
          <span>🔥 VIBE CODING</span>
        </div>
      </div>

      {/* 4. FEATURE PANELS (feature-card-gradient & feature-card-dark) */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 sm:py-28 space-y-8">
        
        {/* Vibrant Magenta Gradient Feature Card */}
        <div className="w-full bg-gradient-to-r from-[#ec48bd] via-[#8b5cf6] to-[#5865f2] rounded-[36px] sm:rounded-[48px] p-8 sm:p-14 text-white shadow-[0_20px_60px_rgba(236,72,189,0.3)] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="px-3.5 py-1 rounded-full bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider">
              FLAGSHIP REPO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mt-4">
              MYLINK PORTFOLIO
            </h2>
            <p className="mt-4 text-base sm:text-lg font-medium text-white/90 leading-relaxed">
              모바일, 태블릿, 데스크톱 어디서나 최적의 반응성과 디스코드 스타일의 경쾌한 인터랙션을 자랑하는 개인 링크 & 포트폴리오 플랫폼.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/gjdnjstjr/mylink"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-white text-[#000000] font-black text-sm uppercase tracking-wide hover:bg-[#35ed7e] transition-all shadow-md"
              >
                VIEW ON GITHUB ↗
              </a>
            </div>
          </div>

          {/* Feature Badge Mockup Plate */}
          <div className="w-full lg:w-96 bg-[#0a0d3a]/80 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#ed4245]"></div>
              <div className="w-3 h-3 rounded-full bg-[#fee75c]"></div>
              <div className="w-3 h-3 rounded-full bg-[#57f287]"></div>
              <span className="text-xs font-mono text-white/60 ml-auto">mylink.git</span>
            </div>
            <div className="space-y-2.5 font-mono text-xs">
              <p className="text-[#35ed7e]">$ git status</p>
              <p className="text-white/80">On branch main: origin/main</p>
              <p className="text-[#ec48bd]">✨ Features: Discord Edition v2.0</p>
              <p className="text-[#5865f2]">🚀 Status: Deployed & Ready</p>
            </div>
          </div>
        </div>

        {/* 2-Column Raised Dark Feature Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Tech Blog Channel */}
          <div className="bg-[#1e2353] rounded-[36px] p-8 sm:p-10 border border-[#5865f2]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ec48bd] flex items-center justify-center text-2xl mb-6 shadow-[0_4px_20px_rgba(236,72,189,0.5)]">
                📝
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ec48bd]">
                #TECH-BLOG-CHANNEL
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                DEV LOGS & LEARNING
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#99aab5] leading-relaxed">
                새로운 웹 기술을 습득하고 실험한 결과물을 상세히 기록하는 테크 블로그입니다. 프론트엔드 최적화와 아키텍처 고민을 공유합니다.
              </p>
            </div>
            <a
              href="https://velog.io"
              target="_blank"
              rel="noreferrer"
              className="mt-8 px-6 py-3.5 rounded-2xl bg-[#5865f2] hover:bg-[#4752c4] text-white font-bold text-sm text-center uppercase tracking-wide transition-all"
            >
              VISIT TECH BLOG →
            </a>
          </div>

          {/* Card 2: Contact Direct Messages */}
          <div className="bg-[#1e2353] rounded-[36px] p-8 sm:p-10 border border-[#35ed7e]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#35ed7e] text-[#000000] flex items-center justify-center text-2xl mb-6 shadow-[0_4px_20px_rgba(53,237,126,0.5)]">
                💬
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#35ed7e]">
                #DIRECT-MESSAGES
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                COFFEE CHAT & COLLAB
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#99aab5] leading-relaxed">
                새로운 프로젝트 아이디어, 협업 제안, 커피챗 등 언제든 환영합니다. 함께 재미있고 멋진 제품을 만들어봐요!
              </p>
            </div>
            <a
              href="mailto:contact@example.com"
              className="mt-8 px-6 py-3.5 rounded-2xl bg-[#35ed7e] hover:bg-[#2fd972] text-[#000000] font-black text-sm text-center uppercase tracking-wide transition-all"
            >
              SEND DIRECT EMAIL →
            </a>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE DISCORD CHAT MOCKUP SECTION */}
      <section id="chat" className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        <div className="bg-[#23272a] rounded-[32px] border border-[#1e2353] shadow-2xl overflow-hidden">
          {/* Channel Header */}
          <div className="bg-[#1e2353] px-6 py-4 flex items-center gap-3 border-b border-[#0a0d3a]">
            <span className="text-2xl text-[#99aab5]">#</span>
            <div>
              <h4 className="font-black text-white text-base">general-wonseok</h4>
              <p className="text-xs text-[#99aab5]">허원석 개발자의 라이브 피드 & 소통 채널</p>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="p-6 space-y-6 max-h-80 overflow-y-auto">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#5865f2]">
                  <Image
                    src={msg.avatar}
                    alt={msg.user}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">{msg.user}</span>
                    <span className="px-1.5 py-0.2 rounded bg-[#5865f2] text-[10px] font-black uppercase text-white">
                      {msg.tag}
                    </span>
                    <span className="text-[11px] text-[#99aab5]">{msg.time}</span>
                  </div>
                  <p className="text-sm text-white/90 mt-1 leading-relaxed bg-[#1e2353]/50 p-3 rounded-2xl">
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Input Form */}
          <form onSubmit={handleSendMessage} className="p-4 bg-[#1e2353] border-t border-[#0a0d3a] flex gap-2">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="메시지를 입력해보세요 (예: 화이팅!)"
              className="flex-1 bg-[#23272a] text-white placeholder-[#72767d] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5865f2]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#5865f2] hover:bg-[#4752c4] text-white font-bold text-sm rounded-xl transition-colors shrink-0"
            >
              전송
            </button>
          </form>
        </div>
      </section>

      {/* 6. STAT CARDS SECTION (stat-card, Blurple #5865f2 & Black) */}
      <section id="stats" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24">
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#35ed7e]">
            DEVELOPER STATS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white mt-2">
            POWERED BY PASSION
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#5865f2] rounded-[32px] p-8 text-center text-white shadow-xl">
            <div className="text-5xl sm:text-6xl font-black tracking-tight">100%</div>
            <div className="text-sm font-extrabold uppercase tracking-wider mt-3 text-white/90">
              COMMITMENT & VIBE
            </div>
          </div>

          <div className="bg-[#ec48bd] rounded-[32px] p-8 text-center text-white shadow-xl">
            <div className="text-5xl sm:text-6xl font-black tracking-tight">24/7</div>
            <div className="text-sm font-extrabold uppercase tracking-wider mt-3 text-white/90">
              GROWTH MINDSET
            </div>
          </div>

          <div className="bg-[#35ed7e] rounded-[32px] p-8 text-center text-[#000000] shadow-xl">
            <div className="text-5xl sm:text-6xl font-black tracking-tight">LV.99</div>
            <div className="text-sm font-black uppercase tracking-wider mt-3 text-black/80">
              DEVELOPER ENTHUSIASM
            </div>
          </div>
        </div>
      </section>

      {/* 7. FULL-BLEED CTA BAND (cta-band, Blurple #5865f2) */}
      <section className="w-full bg-[#5865f2] py-20 sm:py-28 px-4 sm:px-8 text-center text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            READY TO START A NEW QUEST?
          </h2>
          <p className="mt-6 text-base sm:text-xl font-medium text-white/90 leading-relaxed">
            언제든 편하게 연락주세요. 새로운 프로젝트와 협업 기회를 환영합니다!
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contact@example.com"
              className="px-8 py-4 rounded-full bg-[#35ed7e] hover:bg-[#2fd972] active:scale-95 text-[#000000] font-black text-base sm:text-lg uppercase tracking-wide transition-all shadow-xl"
            >
              START CONVERSATION
            </a>
            <a
              href="https://github.com/gjdnjstjr"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-white text-[#5865f2] hover:bg-white/90 active:scale-95 font-black text-base sm:text-lg uppercase tracking-wide transition-all shadow-xl"
            >
              EXPLORE GITHUB
            </a>
          </div>
        </div>
      </section>

      {/* 8. FOOTER: Multi-column + Giant Discord-style Wordmark */}
      <footer className="bg-[#0a0d3a] border-t border-[#1e2353] pt-16 pb-12 px-4 sm:px-8 lg:px-16 text-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1e2353]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#5865f2] flex items-center justify-center text-white font-bold">
                W
              </div>
              <span className="font-black text-lg text-white uppercase">
                HEO WONSEOK PORTFOLIO
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm font-bold text-[#99aab5]">
              <a href="https://github.com/gjdnjstjr" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://velog.io" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Tech Blog</a>
              <a href="mailto:contact@example.com" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>

          {/* Giant Wordmark */}
          <div className="text-center overflow-hidden select-none">
            <h1 className="text-[64px] sm:text-[120px] lg:text-[160px] font-black text-white/5 uppercase tracking-tighter leading-none">
              WONSEOK.GG
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#99aab5]">
            <p>© {new Date().getFullYear()} 허원석. All rights reserved.</p>
            <p className="uppercase tracking-wider">DISCORD GAMING-NATIVE DESIGN EDITION</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
