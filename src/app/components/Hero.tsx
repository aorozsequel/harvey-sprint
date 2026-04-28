'use client';

import { useState } from 'react';

// Desktop: wide landscape crop that bleeds past the container edges (Figma exact)
const heroImageDesktop =
  'https://www.figma.com/api/mcp/asset/1a23b1c7-37dc-4cab-aafc-31c7088a4f03';
// Mobile: portrait crop
const heroImageMobile =
  'https://www.figma.com/api/mcp/asset/b6e9f8b9-0746-44a6-be36-45fa612f310c';

const navLinks = ['About', 'Services', 'Projects', 'News', 'Contact'];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Mobile fullscreen menu overlay ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col px-4 pt-6 pb-10">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[16px] text-white tracking-[-0.04em] capitalize">
              H.Studio
            </span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col justify-center flex-1 gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white text-[40px] font-medium tracking-[-0.04em] capitalize hover:opacity-60 transition-opacity border-b border-white/10 pb-6"
              >
                {link}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center bg-white text-black text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px] w-fit"
          >
            Let&apos;s talk
          </a>
        </div>
      )}

      {/* ── Hero section ── */}
      <section className="relative overflow-hidden h-[635px] md:h-[847px]">

        {/*
          Background photo
          Mobile  (Figma 1:284): portrait crop, 847 px tall, starts at left edge,
                  overflows right by 39.47%, vertically centred in the 635 px section.
          Desktop (Figma 1:11):  landscape crop, aspect 2291/1346, overflows left &
                  right each by 34.79%, vertical centre at 50% + 88.84 px.
        */}
        {/* Mobile image — hidden on md+ */}
        <div className="absolute h-[847px] left-0 right-[-39.47%] top-1/2 -translate-y-1/2 md:hidden">
          <img
            src={heroImageMobile}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full max-w-none object-cover pointer-events-none select-none"
          />
        </div>

        {/* Desktop image — hidden below md */}
        <div className="hidden md:block absolute aspect-[2291/1346] left-[-34.79%] right-[-34.79%] top-[calc(50%+88.84px)] -translate-y-1/2">
          <img
            src={heroImageDesktop}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full max-w-none object-bottom pointer-events-none select-none"
          />
        </div>

        {/* Soft gradient fade at the bottom — no hard blur line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[420px]"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(210,213,215,0.10) 50%, rgba(205,208,212,0.22) 100%)',
          }}
        />

        {/* Content — no z-index so mix-blend-overlay works against the photo */}
        <div className="relative flex flex-col h-full px-4 md:px-8 pb-6 md:pb-0 justify-between md:justify-start md:gap-[240px]">

          {/* Nav */}
          <nav className="flex items-center justify-between py-6">
            <span className="font-semibold text-[16px] text-black tracking-[-0.04em] capitalize select-none">
              H.Studio
            </span>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-14 font-semibold text-[16px] text-black tracking-[-0.04em] capitalize">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:opacity-60 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:flex items-center justify-center bg-black text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px] hover:bg-neutral-800 transition-colors"
            >
              Let&apos;s talk
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <line x1="2" y1="6"  x2="22" y2="6"  stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="12" x2="22" y2="12" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="18" x2="22" y2="18" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </nav>

          {/* Hero content */}
          <div className="flex flex-col w-full h-[341px] md:h-auto justify-between md:justify-start">

            {/* Name block */}
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-center md:justify-start px-[18px] md:-mb-[15px]">
                <p className="font-mono text-[14px] text-white uppercase mix-blend-overlay leading-[1.1]">
                  [ Hello i&apos;m ]
                </p>
              </div>
              <h1 className="text-[clamp(96px,13.75vw,198px)] font-medium text-white text-center capitalize mix-blend-overlay leading-[0.85] md:leading-[1.1] tracking-[-0.07em] whitespace-pre-wrap w-full">
                {`Harvey   Specter`}
              </h1>
            </div>

            {/* Description + CTA — right-aligned on desktop */}
            <div className="flex flex-col md:flex-row md:justify-end w-full">
              <div className="flex flex-col gap-[17px] items-start w-[294px]">
                <p className="text-[14px] font-bold italic text-[#1f1f1f] tracking-[-0.04em] uppercase leading-[1.1]">
                  H.Studio is a{' '}
                  <span className="font-normal">full-service</span>{' '}
                  creative studio creating beautiful digital experiences and
                  products. We are an{' '}
                  <span className="font-normal">award winning</span>{' '}
                  design and art group specializing in branding, web design and
                  engineering.
                </p>
                <a
                  href="#contact"
                  className="flex items-center justify-center bg-black text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px] hover:bg-neutral-800 transition-colors"
                >
                  Let&apos;s talk
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
