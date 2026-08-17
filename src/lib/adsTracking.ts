declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const QUOTE_FORM_SEND_TO = "AW-18394361131/5Ee4CPvJgeMcEKvajsNE";
const PHONE_CALL_SEND_TO = "AW-18394361131/mNZ9CNLHgeMcEKvajsNE";

export const trackQuoteFormConversion = () => {
  window.gtag?.("event", "conversion", { send_to: QUOTE_FORM_SEND_TO });
};

export const trackPhoneCallConversion = () => {
  window.gtag?.("event", "conversion", { send_to: PHONE_CALL_SEND_TO });
};

/** Reports a conversion whenever a visitor taps any tel: link on the site. */
export const initPhoneCallTracking = () => {
  if (typeof document === "undefined") return;
  const handler = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    const link = target?.closest?.('a[href^="tel:"]');
    if (link) trackPhoneCallConversion();
  };
  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
};
