'use client';

import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  controls?: boolean;
  playing?: boolean;
}

// Thin wrapper around react-player (v3). In v3 the source is passed via `src`
// and the player renders a standard media element, so it accepts video attributes.
export default function VideoPlayer({
  url,
  width = '100%',
  height = '100%',
  controls = true,
  playing = false,
}: VideoPlayerProps) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      <ReactPlayer
        src={url}
        controls={controls}
        autoPlay={playing}
        style={{ width, height }}
      />
    </div>
  );
}
