export const getScrollTop = () => (
  Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop,
  )
);
