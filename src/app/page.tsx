"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        if (navigator.share) {
          await navigator.share({
            title: "허원석 | Frontend Developer",
            text: "허원석의 프로필 페이지입니다.",
            url: window.location.href,
          });
        } else {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      } catch (err) {
        console.error("공유 실패:", err);
      }
    }
  };

  const hashtags = [
    "#허원석",
    "#웹개발자",
    "#Frontend",
    "#React",
    "#NextJS",
    "#TypeScript",
    "#성장하는개발자🌱",
  ];

  const techStacks = [
    { name: "React", bg: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200/50 dark:border-cyan-800/40" },
    { name: "Next.js", bg: "bg-zinc-500/10 text-zinc-800 dark:text-zinc-200 border-zinc-200/60 dark:border-zinc-700/40" },
    { name: "TypeScript", bg: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-800/40" },
    { name: "Tailwind CSS", bg: "bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-200/50 dark:border-teal-800/40" },
  ];

  const links = [
    {
      title: "GitHub 저장소",
      subtitle: "@gjdnjstjr",
      description: "프로젝트 소스 코드와 커밋 기록을 확인할 수 있습니다.",
      href: "https://github.com/gjdnjstjr",
      iconBg: "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950",
      badge: "GitHub",
      badgeColor: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      title: "기술 블로그",
      subtitle: "Learning Log & Dev Notes",
      description: "배운 지식과 개발 경험을 정리하고 기록하는 공간입니다.",
      href: "https://velog.io",
      iconBg: "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-emerald-500/20",
      badge: "Blog",
      badgeColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Contact & 커피챗",
      subtitle: "contact@example.com",
      description: "프로젝트 협업 제안이나 질문은 언제든 환영합니다.",
      href: "mailto:contact@example.com",
      iconBg: "bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-blue-500/20",
      badge: "Email",
      badgeColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen min-h-dvh flex items-center justify-center bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/80 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 px-3 sm:px-6 md:px-8 py-6 sm:py-12 md:py-16 selection:bg-indigo-500 selection:text-white relative">
      {/* Decorative ambient background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[320px] sm:w-[500px] md:w-[650px] h-[320px] sm:h-[500px] md:h-[650px] bg-indigo-300/30 dark:bg-indigo-900/15 blur-[90px] sm:blur-[130px] rounded-full"></div>
        <div className="absolute -top-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-sky-300/25 dark:bg-sky-900/15 blur-[80px] rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-60 sm:w-80 h-60 sm:h-80 bg-purple-300/25 dark:bg-purple-900/15 blur-[80px] rounded-full"></div>
      </div>

      {/* Main Responsive Container */}
      <div className="w-full max-w-[440px] sm:max-w-xl md:max-w-2xl bg-white/85 dark:bg-zinc-900/85 backdrop-blur-2xl rounded-3xl sm:rounded-[2rem] shadow-xl sm:shadow-2xl shadow-indigo-100/40 dark:shadow-black/50 border border-white/80 dark:border-zinc-800/80 p-5 sm:p-8 md:p-10 flex flex-col items-center text-center transition-all">
        
        {/* Top Action Bar (Share Button) */}
        <div className="w-full flex justify-end mb-1 sm:mb-2">
          <button
            onClick={handleShare}
            aria-label="프로필 링크 공유"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100/80 dark:bg-zinc-800/80 hover:bg-zinc-200/80 dark:hover:bg-zinc-700/80 transition-colors border border-zinc-200/50 dark:border-zinc-700/40 cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>{copied ? "링크 복사됨! ✨" : "공유하기"}</span>
          </button>
        </div>

        {/* Character Avatar Section */}
        <div className="relative mb-4 sm:mb-5 group">
          <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-lg">
            <Image
              src="/avatar.jpg"
              alt="허원석 프로필 캐릭터"
              width={128}
              height={128}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          {/* Online status indicator */}
          <span className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-500 border-2 border-white dark:border-zinc-900 rounded-full shadow-sm flex items-center justify-center">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping opacity-75"></span>
          </span>
        </div>

        {/* Name & Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
          허원석
        </h1>
        <div className="mt-1 inline-flex items-center gap-2">
          <span className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Frontend & Web Developer
          </span>
          <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Heo Wonseok
          </span>
        </div>

        {/* Hashtags Section */}
        <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center gap-1.5 max-w-md">
          {hashtags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/50 hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bio Card */}
        <div className="mt-5 sm:mt-6 px-4 py-3 sm:py-4 rounded-2xl bg-zinc-50/90 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800/80 w-full text-left sm:text-center shadow-xs">
          <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed break-keep">
            💡 아이디어를 코드로 실현하고 더 나은 사용자 경험을 고민하는{" "}
            <strong className="font-semibold text-zinc-900 dark:text-zinc-100 underline decoration-indigo-400/50 decoration-2 underline-offset-2">
              개발자
            </strong>
            입니다. 새로운 기술을 탐구하고 꾸준히 성장하는 과정을 즐깁니다.
          </p>
        </div>

        {/* Tech Stacks Section */}
        <div className="mt-4 sm:mt-5 w-full flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {techStacks.map((tech) => (
            <span
              key={tech.name}
              className={`px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-semibold border ${tech.bg} transition-all hover:scale-105`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Responsive Rich Link Cards Section */}
        <div className="mt-6 sm:mt-8 w-full flex flex-col gap-2.5 sm:gap-3.5">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center justify-between p-3.5 sm:p-4 md:p-4.5 rounded-2xl bg-white/90 dark:bg-zinc-800/70 border border-zinc-200/70 dark:border-zinc-700/60 shadow-xs hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 text-left"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xs shrink-0 ${link.iconBg} group-hover:scale-105 transition-transform duration-300`}
                >
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
                      {link.title}
                    </span>
                    <span
                      className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full ${link.badgeColor}`}
                    >
                      {link.badge}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 break-keep line-clamp-1 sm:line-clamp-none">
                    {link.description}
                  </p>
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="text-zinc-300 dark:text-zinc-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-8 sm:mt-10 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-zinc-400 dark:text-zinc-500 gap-2">
          <span>© {new Date().getFullYear()} 허원석. All rights reserved.</span>
          <span className="text-[10px] sm:text-[11px] text-zinc-400/80">
            Crafted with Next.js & Tailwind CSS
          </span>
        </footer>
      </div>
    </main>
  );
}
