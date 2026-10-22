"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add loaded class after page loads
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${loaded ? 'loaded' : ''}`}>
      <style jsx global>{`
        .page-loader {
          position: fixed;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 999999;
          background-color: white;
        }

        .page-loader.loaded {
          width: 0;
          left: 0;
          -moz-transition: all 1s cubic-bezier(0.8, 0.2, 0.2, 0.9);
          -o-transition: all 1s cubic-bezier(0.8, 0.2, 0.2, 0.9);
          -webkit-transition: all 1s cubic-bezier(0.8, 0.2, 0.2, 0.9);
          transition: all 1s cubic-bezier(0.8, 0.2, 0.2, 0.9);
        }
      `}</style>
    </div>
  );
}
