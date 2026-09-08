import Image from "next/image";

export default function Home() {
  const hashtags = [
    "#허원석",
    "#웹개발자",
    "#Frontend",
    "#React",
    "#NextJS",
    "#성장하는개발자🌱",
  ];

  const links = [
    {
      title: "GitHub",
      description: "프로젝트와 코드가 모여있는 저장소",
      href: "https://github.com/gjdnjstjr",
      iconBg: "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950",
      badge: "Projects",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
      description: "배운 것을 기록하고 나누는 공간",
      href: "https://velog.io",
      iconBg: "bg-emerald-500 text-white shadow-emerald-500/20",
      badge: "Blog",
      icon: (
        <svg
          className="w-5 h-5"
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
      description: "contact@example.com",
      href: "mailto:contact@example.com",
      iconBg: "bg-blue-500 text-white shadow-blue-500/20",
      badge: "Email",
      icon: (
        <svg
          className="w-5 h-5"
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
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-sky-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 px-4 py-16 selection:bg-indigo-500 selection:text-white">
      {/* Decorative background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-indigo-200/40 dark:bg-indigo-900/15 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-lg bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-zinc-200/50 dark:shadow-black/40 border border-white/60 dark:border-zinc-800/80 p-8 sm:p-10 flex flex-col items-center text-center transition-all">
        {/* Character Avatar Section */}
        <div className="relative mb-5 group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-md">
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
          <span className="absolute bottom-1 right-2 w-5 h-5 bg-emerald-500 border-2 border-white dark:border-zinc-900 rounded-full shadow-sm flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full animate-ping opacity-75"></span>
          </span>
        </div>

        {/* Name & Title */}
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
          허원석
        </h1>
        <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          Frontend & Web Developer
        </p>

        {/* Hashtags Section */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 max-w-sm">
          {hashtags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/50 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bio */}
        <div className="mt-6 px-4 py-3.5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 w-full">
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            💡 아이디어를 코드로 실현하고 더 나은 사용자 경험을 고민하는 <strong className="font-semibold text-zinc-900 dark:text-zinc-100">개발자</strong>입니다. 새로운 기술을 탐구하고 꾸준히 성장하는 과정을 즐깁니다.
          </p>
        </div>

        {/* Rich Link Cards Section */}
        <div className="mt-7 w-full flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200/70 dark:border-zinc-700/60 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200 text-left"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-sm shrink-0 ${link.iconBg} group-hover:scale-105 transition-transform`}
                >
                  {link.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
                      {link.title}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-300">
                      {link.badge}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {link.description}
                  </p>
                </div>
              </div>

              {/* Arrow icon */}
              <div className="text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all pl-2 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} 허원석 · All rights reserved.
        </p>
      </div>
    </main>
  );
}
