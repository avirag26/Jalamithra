import type { GalleryVideo } from "@/lib/gallery";

type Props = {
  video: GalleryVideo;
  /** "dark" for use on the navy feature band, "light" on white/soft sections. */
  tone?: "light" | "dark";
};

/** Portrait (9:16) video with native controls. Nothing downloads until the visitor presses play. */
export default function VideoCard({ video, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <figure
      className={`overflow-hidden rounded-2xl border ${
        dark ? "border-white/15 bg-white/5" : "border-line bg-white"
      }`}
    >
      <div className="relative aspect-[9/16] bg-[#02101c]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={video.src}
          poster={video.poster}
          controls
          playsInline
          preload="none"
          aria-label={video.title}
        />
      </div>
      <figcaption className="p-5">
        <p className={`display text-lg ${dark ? "text-white" : "text-brand-deep"}`}>
          {video.title}
        </p>
        <p
          className={`mt-1.5 text-sm leading-relaxed ${
            dark ? "text-sky-50/80" : "text-foreground/70"
          }`}
        >
          {video.description}
        </p>
      </figcaption>
    </figure>
  );
}
