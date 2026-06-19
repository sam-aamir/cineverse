'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import VideoPlayer from './video-player';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trailerUrl: string;
  title: string;
}

export default function TrailerModal({ isOpen, onClose, trailerUrl, title }: TrailerModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
        <div className="relative w-[90%] max-w-[800px]">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative rounded-lg">
            <VideoPlayer
              url={trailerUrl}
              controls={true}
              playing={true}
            />
          </div>
          <div className="mt-4 text-center text-white">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-gray-400">Trailer</p>
          </div>
        </div>
      </div>
      {/* Prevent scroll when modal is open */}
      <div className="fixed inset-0 pointer-events-none" />
    </>
  );
}