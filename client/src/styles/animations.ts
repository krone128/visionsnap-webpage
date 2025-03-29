export const pageTransitionVariant = {
  initial: { opacity: 0, y: 20, transform: 'translate3d(0, 20px, 0)' },
  animate: { opacity: 1, y: 0, transform: 'translate3d(0, 0, 0)' },
  exit: { opacity: 0, y: -20, transform: 'translate3d(0, -20px, 0)' },
  transition: { duration: 0.25 }
};

export const contentTransitionVariant = {
  initial: { opacity: 0, y: 20, transform: 'translate3d(0, 20px, 0)' },
  animate: { opacity: 1, y: 0, transform: 'translate3d(0, 0, 0)' },
  transition: { duration: 0.25 }
};

export const cardTransitionVariant = {
  initial: { opacity: 0, y: 30, transform: 'translate3d(0, 30px, 0)' },
  animate: { opacity: 1, y: 0, transform: 'translate3d(0, 0, 0)' },
  transition: { duration: 0.25 }
};

export const headerTransitionVariant = {
  initial: { opacity: 0, y: 20, transform: 'translate3d(0, 20px, 0)' },
  animate: { opacity: 1, y: 0, transform: 'translate3d(0, 0, 0)' },
  transition: { duration: 0.25 }
};

export const descriptionTransitionVariant = {
  initial: { opacity: 0, y: 20, transform: 'translate3d(0, 20px, 0)' },
  animate: { opacity: 1, y: 0, transform: 'translate3d(0, 0, 0)' },
  transition: { duration: 0.25, delay: 0.1 }
};

export const staggerContainerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const blogPostContentVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}; 