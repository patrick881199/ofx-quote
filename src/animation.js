export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const quoteAnim = {
  hidden: { scale: 0.1 },
  show: {
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    scale: 0.1,
    transition: {
      duration: 0.5,
    },
  },
};
