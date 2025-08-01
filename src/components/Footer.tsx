'use client';

import Link from 'next/link';
import { globalConfig } from '@/config/global';

export default function Footer() {
  return (
    <section className="text-gray-700 bg-white border-t dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800">
      <div className="container flex flex-col items-center justify-center min-h-[40px] mx-auto px-7 max-w-7xl sm:flex-row sm:min-h-[50px]">
        <Link href="/" className="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold">
          <span className="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">✦</span>
          <span className="-translate-y-0.5">{globalConfig.site.author}</span>
        </Link>
        <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0">
          {globalConfig.footer.copyright}
        </p>
        <span className="inline-flex justify-center mt-2 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <a href={globalConfig.footer.social.twitter} target="_blank" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
            <span className="sr-only">𝕏</span>
            <svg className="w-5 h-5 dark:stroke-black stroke-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M95 50c0 24.853-20.147 45-45 45S5 74.853 5 50 25.147 5 50 5s45 20.147 45 45Zm-51.21 2.688-21.51-28.76h16.578l14.1 18.855 17.453-18.855h4.872L55.135 45.694l22.72 30.377H61.279L45.967 55.598l-18.95 20.473h-4.873L43.79 52.688Zm-6.73-25.172h-7.616l33.63 44.967h7.616L37.06 27.516Z" fill="currentColor"></path>
              <path d="M22.28 23.928v-.5h-.998l.597.8.4-.3Zm21.51 28.76.366.34.283-.306-.25-.334-.4.3Zm-4.932-28.76.4-.3-.15-.2h-.25v.5Zm14.1 18.855-.4.3.36.48.408-.44-.367-.34Zm17.453-18.855v-.5h-.219l-.148.16.367.34Zm4.872 0 .367.34.777-.84h-1.144v.5ZM55.135 45.694l-.367-.34-.282.306.249.333.4-.3Zm22.72 30.377v.5h.999l-.598-.8-.4.3Zm-16.577 0-.4.3.15.2h.25v-.5ZM45.967 55.598l.4-.3-.36-.48-.407.44.367.34Zm-18.95 20.473v.5h.218l.148-.16-.367-.34Zm-4.873 0-.367-.34-.777.84h1.144v-.5Zm7.3-48.554v-.5h-.998l.598.799.4-.3Zm7.616 0 .4-.3-.15-.2h-.25v.5Zm26.015 44.966-.4.3.15.2h.25v-.5Zm7.615 0v.5h.999l-.598-.8-.4.3ZM50 95.5c25.129 0 45.5-20.371 45.5-45.5h-1c0 24.577-19.923 44.5-44.5 44.5v1ZM4.5 50c0 25.129 20.371 45.5 45.5 45.5v-1C25.423 94.5 5.5 74.577 5.5 50h-1ZM50 4.5C24.871 4.5 4.5 24.871 4.5 50h1C5.5 25.423 25.423 5.5 50 5.5v-1ZM95.5 50C95.5 24.871 75.129 4.5 50 4.5v1c24.577 0 44.5 19.923 44.5 44.5h1ZM21.88 24.228l21.509 28.76.8-.6-21.509-28.76-.8.6Zm16.978-.8H22.28v1h16.578v-1Zm14.501 19.055L39.258 23.63l-.8.599 14.1 18.854.801-.599ZM70.044 23.59 52.592 42.443l.734.68 17.452-18.855-.734-.68Zm5.239-.16H70.41v1h4.872v-1Zm-19.78 22.605L75.65 24.268l-.734-.68-20.148 21.766.734.68Zm22.753 29.738-22.72-30.378-.801.6 22.72 30.377.8-.6Zm-16.978.799h16.578v-1H61.278v1ZM45.566 55.898 60.877 76.37l.801-.599L46.368 55.3l-.802.599ZM27.383 76.41l18.95-20.473-.733-.68-18.95 20.473.733.68Zm-5.239.16h4.872v-1h-4.872v1Zm21.278-24.223L21.777 75.731l.734.68 21.645-23.383-.734-.68ZM29.444 28.017h7.616v-1h-7.616v1Zm34.031 44.166-33.63-44.966-.801.599 33.63 44.966.801-.599Zm7.215-.2h-7.615v1h7.615v-1ZM36.66 27.816l33.63 44.966.8-.599-33.63-44.966-.8.599Z" fill="currentStroke"></path>
            </svg>
          </a>
          <a href={globalConfig.footer.social.github} target="_blank" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
            <span className="sr-only">GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href={`mailto:${globalConfig.footer.social.email}`} className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
            <span className="sr-only">Email</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </span>
      </div>
    </section>
  );
} 