/** Photos, scans and videos supplied by Jalamithra. Files live in /public/gallery/. */

export const gallery = {
  mdPortrait: { src: "/gallery/ashraf-dosth.jpg", width: 1122, height: 1150 },
  isoCertificate: { src: "/gallery/iso-9001-certificate.jpg", width: 1056, height: 1489 },
  filterRange: { src: "/gallery/jalamithra-filter-range.jpg", width: 2560, height: 1919 },
  pressBrochure: { src: "/gallery/jalamithra-press-brochure.jpg", width: 2560, height: 1919 },
  kaumudiAward: { src: "/gallery/news-kerala-kaumudi-award-2024.jpg", width: 1190, height: 1074 },
} as const;

export type GalleryVideo = {
  src: string;
  poster: string;
  title: string;
  description: string;
};

export const videos: GalleryVideo[] = [
  {
    src: "/gallery/jalamithra-expo-stall.mp4",
    poster: "/gallery/jalamithra-expo-stall-poster.jpg",
    title: "At the Jalamithra exhibition stall",
    description:
      "Our Managing Director meets visitors at the APA Jalamithra stall and explains our filter range.",
  },
  {
    src: "/gallery/jalamithra-site-installation.mp4",
    poster: "/gallery/jalamithra-site-installation-poster.jpg",
    title: "On site with a customer",
    description:
      "A walk through an installed Jalamithra filter system beside a well, with the customer who uses it.",
  },
];
