"use client"

import "./globals.css";
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>
          sofia egan
        </title>
        <link rel="icon" type="image/x-icon" href="/frog_pfp.png"></link>
        <meta name="description" content="my personal website!" />
        <meta name="keywords" content="Sofia Egan, eeriergosling, hackathons, projects, software development, boston, mit, hack club" />
        <meta name="author" content="sofia egan" />

        <meta property="og:title" content="sofia egan" />
        <meta property="og:description" content="my personal website!" />
        <meta property="og:image" content="https://eerier.dev/screenshot.png" />
        <meta property="og:type" content="website" />
      </head>
      
      <body>
        <div className="App">
          <div className="header">
            <nav>
              <div className="header-links">
                <div className="header-link"><Link href="/"><p className="header-link-text">home</p></Link></div>
                <div className="header-link"><Link href="/projects"><p className="header-link-text">projects</p></Link></div>
                <div className="header-link"><Link href="/blog"><p className="header-link-text">blog</p></Link></div>
              </div>
            </nav>
          </div>
        </div>
        <div className="page-content">
          {children}
        </div>
        <div className="footer"></div>
        <Analytics/>
      </body>
    </html>

  );
}