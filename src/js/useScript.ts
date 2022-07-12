export const useScript = async (f: () => void) => {
  document.addEventListener("DOMContentLoaded", f, { once: true });
};
