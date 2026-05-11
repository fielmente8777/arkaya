"use client";
import { PlayIcon } from "@/utils/landingPageIcons";
import { useEffect, useRef, useState } from "react";

interface SEOVideoProps {
  src: string;
  poster?: string;

  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;

  pauseOnScroll?: boolean;
  threshold?: number;
}

const SEOVideo: React.FC<SEOVideoProps> = ({
  src,
  poster,

  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,

  pauseOnScroll = true,
  threshold = 0.35,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  /* ---------------- Intersection Observer ---------------- */
  useEffect(() => {
    if (!pauseOnScroll) return; // ✅ no state update

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= threshold);
      },
      { threshold: [0, threshold, 0.6] }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [pauseOnScroll, threshold]);

  /* ---------------- Play / Pause + Unload ---------------- */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const shouldPlay = pauseOnScroll ? isVisible : true;

    if (shouldPlay && autoPlay) {
      if (!video.src) {
        video.src = src;
        video.load();
      }
      video.play().catch(() => {});
    } else {
      video.pause();
      if (video.src) {
        video.removeAttribute("src");
        video.load();
      }
    }
  }, [isVisible, pauseOnScroll, autoPlay, src]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative group overflow-hidden"
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <video
        ref={videoRef}
        poster={poster}
        muted={muted}
        loop={loop}
        controls={false}
        playsInline
        preload="metadata"
        controlsList="nodownload"
        className="w-full h-full object-cover"
      />
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/10" />

      {/* PLAY ICON */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
        <PlayIcon />
      </div>
    </div>
  );
};

export default SEOVideo;
