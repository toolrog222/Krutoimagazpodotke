const DELAY_MS = 800;

export function withDelay(callback, delay = DELAY_MS) {
  return (...args) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(callback?.(...args)), delay);
    });
}

export function delayNavigate(navigate, to, options, delay = DELAY_MS) {
  setTimeout(() => navigate(to, options), delay);
}

export default delayNavigate;