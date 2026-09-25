export const lifestyle = {
  hero: "/images/lifestyle/hero.jpg",
  glass: "/images/lifestyle/glass.jpg",
  river: "/images/lifestyle/river.jpg",
  pour: "/images/lifestyle/pour.jpg",
  nature: "/images/lifestyle/nature.jpg",
  home: "/images/lifestyle/home.jpg",
} as const;

export const scenes = [
  {
    id: "home",
    src: lifestyle.glass,
    title: "For every home",
    text: "Clearer water at the tap — natural filtration that keeps flow comfortable day after day.",
    tag: "Domestic",
  },
  {
    id: "source",
    src: lifestyle.river,
    title: "From your source",
    text: "Well, river, pond or line water — systems matched to what you already use.",
    tag: "Source care",
  },
  {
    id: "daily",
    src: lifestyle.pour,
    title: "Clarity you notice",
    text: "Taste, look and feel improve — without electricity or complicated upkeep.",
    tag: "Everyday",
  },
] as const;

/** @deprecated alias for older imports */
export const products = scenes;
export const productImages = {
  homeRo: lifestyle.glass,
  towerTank: lifestyle.nature,
  commercial: lifestyle.hero,
  home: lifestyle.home,
  river: lifestyle.river,
  pour: lifestyle.pour,
};
