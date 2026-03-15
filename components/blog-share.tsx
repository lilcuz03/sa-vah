"use client";
import React, { useEffect, useState } from "react";

interface BlogShareProps {
  title: string;
}

export default function BlogShare({ title }: BlogShareProps) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    function handleLoad() {
      setCurrentUrl(window.location.href);
    }

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="flex gap-4 flex-wrap">
      {currentUrl && (
        <>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            LinkedIn
          </a>
        </>
      )}
    </div>
  );
}
