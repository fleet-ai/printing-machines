"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  showNavLogo?: boolean;
  showMainLogo?: boolean;
  showAnnouncement?: boolean;
}

export function Header({ 
  showNavLogo = true, 
  showMainLogo = false,
  showAnnouncement = false 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header>
        {/* Navbar */}
        <nav 
          className={`top-nav flex items-center px-6 py-4 logo-container ${
            showNavLogo ? "justify-between" : "justify-end"
          }`}
        >
          {showNavLogo && (
            <Link 
              href="/" 
              className="nav-logo text-base font-semibold tracking-[0.12em] uppercase text-foreground no-underline hover:no-underline"
              style={{ fontFamily: "var(--font-chakra), 'Chakra Petch', sans-serif" }}
            >
              Printing Machines
            </Link>
          )}
          
          <div className="flex gap-6">
            <Link href="/printers">Printers</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/team">Meet us</Link>
          </div>

          <button
            className="hamburger ml-6"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* Main Logo */}
        {showMainLogo && (
          <div className="logo-container px-6 pt-12 pb-16">
            <Link href="/" className="logo">
              Printing<br />Machines
            </Link>
            
            {showAnnouncement && (
              <div className="mt-6 !font-sans">
                <Link
                  href="/printers"
                  className="text-foreground inline-flex items-center gap-2.5 text-[15px] font-light group"
                >
                  <Badge className="text-[11px]">NEW</Badge>
                  <span className="group-hover:underline group-hover:decoration-[#c8c8c8] group-hover:underline-offset-2">Introducing our Printers</span>
                </Link>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`}>
        <button
          className="absolute top-5 right-6 text-2xl bg-transparent border-none cursor-pointer text-foreground"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav className="font-sans">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/printers" onClick={() => setMobileMenuOpen(false)}>Printers</Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link href="/team" onClick={() => setMobileMenuOpen(false)}>Meet us</Link>
        </nav>
      </div>
    </>
  );
}
