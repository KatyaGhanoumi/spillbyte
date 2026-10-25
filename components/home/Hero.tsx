import Link from "next/link";
import { heroPreviewData } from "@/data/heropreview";
import HeroPreview from "@/components/home/HeroPreview";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1440px] overflow-x-clip px-6 pb-8 pt-14 sm:px-10 lg:px-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Developer Community
          </p>
          <h1 className="mt-4 max-w-2xl text-6xl font-bold leading-[1.08] tracking-tighter lg:text-7xl">
            Got something
            <br />
            to spill?
            <span
              aria-hidden="true"
              className="ml-3 inline-block h-[0.75em] w-[0.17em] rounded-[2px] bg-accent"
            />
          </h1>

          <p className="mt-5 max-w-[480px] text-[17px] leading-[27px] text-muted">
            Share your knowledge, ask questions, and connect with developers
            around the world. From quick tips to in-depth discussions, this is
            your space to learn, share and grow.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-6 text-[15px] font-semibold">
            <Link
              href="/create"
              className="rounded-lg bg-accent px-6 py-3 text-white transition-opacity hover:opacity-90"
            >
              Start a post →
            </Link>
            <Link
              href="/communities"
              className="text-foreground underline underline-offset-4"
            >
              Explore communities
            </Link>
          </div>
        </div>

        <div className="relative isolate hidden lg:ml-auto lg:mr-20 lg:block lg:w-full lg:max-w-[480px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 translate-x-6 translate-y-3 rotate-3 rounded-2xl border border-border bg-card opacity-50"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 translate-x-12 translate-y-6 rotate-6 rounded-2xl border border-border bg-card opacity-25"
          />
          <HeroPreview {...heroPreviewData[0]} />
        </div>
      </div>
    </section>
  );
}