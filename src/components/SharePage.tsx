import { useState } from "react";
import { Check, Share2 } from "lucide-react";

type Props = {
  title: string;
  text?: string;
};

/** Opens the device share sheet, falling back to copying the URL. */
export function SharePage({ title, text }: Props) {
  const [done, setDone] = useState(false);

  async function share() {
    const url = typeof window === "undefined" ? "" : window.location.href;
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title, text: text ?? title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      /* user dismissed the share sheet */
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      aria-label="Share this conversion"
      className="inline-flex items-center gap-1.5 border border-line bg-panel px-2 py-1 text-[10px] tracking-[0.14em] text-mute uppercase hover:border-ox hover:text-ox"
    >
      {done ? <Check size={12} /> : <Share2 size={12} />}
      {done ? "Copied" : "Share"}
    </button>
  );
}
