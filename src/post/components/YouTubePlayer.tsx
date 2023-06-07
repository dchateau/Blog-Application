import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  videoId: string;
  title: string;
};

const YouTubePlayer = ({ title, videoId }: Props) => {
  console.log("video id: ", videoId)
  const videoUrl: string = `https://www.youtube.com/embed/${videoId}`;
  const iframeRef: RefObject<HTMLIFrameElement> =
    useRef<HTMLIFrameElement>(null);
  const defaultHeight: number = 495;

  const [videoHeight, setVideoHeight] = useState<number>(
    iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight
  );

  const handleVideoWidth = useCallback(() => {
    const ratio: number =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 400
        ? 1.45
        : 1.85;

    const height: number = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;

    return setVideoHeight(Math.floor(height * ratio));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleVideoWidth);
    const ratio: number =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 400
        ? 1.45
        : 1.85;

    const height: number = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;

    setVideoHeight(Math.floor(height * ratio));

    return () => window.removeEventListener("resize", handleVideoWidth);
  }, [videoHeight, handleVideoWidth]);

  return (
    <iframe
      ref={iframeRef}
      title={title}
      width="100%"
      height={`${videoHeight}px`}
      src={videoUrl}
      allow="accelerometer; encrypted-media; picture-in-picture"
      allowFullScreen
      style={{marginTop: "2rem"}}
    />
  );
};

export default YouTubePlayer;
