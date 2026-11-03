import {
  Brain,
  Database,
  LayoutGrid,
  Plus,
  Sparkles,
  Store,
  Target,
} from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { aboutContent, profileContent } from "@/data/profile";
import { useLocalized, useUICopy } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";
import type { AboutHighlight } from "@/types";

const highlightIcons = {
  layout: LayoutGrid,
  store: Store,
  database: Database,
  brain: Brain,
} satisfies Record<AboutHighlight["icon"], typeof LayoutGrid>;

export function About() {
  const about = useLocalized(aboutContent);
  const profile = useLocalized(profileContent);
  const copy = useUICopy();
  const hasInterests = about.interests.length > 0;
  const hasGoals = about.goals.length > 0;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-anchor relative border-t border-border py-20 md:py-28"
    >
      {/*
       * Background: neutral hairline geometry only — concentric rings drawn
       * from the portrait side, like a technical drawing. No colour and no
       * blur, so it reads as linework instead of a smudge. The wrapper owns
       * the clipping so the section keeps `overflow: visible`, which the
       * sticky portrait column below depends on.
       */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 ring-backdrop [mask-image:radial-gradient(78%_68%_at_26%_42%,black,transparent_74%)]" />
      </div>

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            id="about-title"
            index="02"
            label={copy.about.label}
            title={copy.about.title}
            description={copy.about.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-[1.5rem] border border-border/70"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[1.25rem] border border-border bg-muted">
                <img
                  src={about.portrait.src}
                  alt={about.portrait.alt}
                  width={900}
                  height={1100}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[9/11] w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <dl className="space-y-3.5">
                <div className="flex items-start justify-between gap-6">
                  <dt className="font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
                    {copy.about.basedIn}
                  </dt>
                  <dd className="text-right text-xs font-medium">
                    {profile.location}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-t border-border/70 pt-3.5">
                  <dt className="font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
                    {copy.about.focus}
                  </dt>
                  <dd className="text-right text-xs font-medium">
                    {copy.about.focusValue}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-t border-border/70 pt-3.5">
                  <dt className="font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
                    {copy.about.status}
                  </dt>
                  <dd className="flex items-center gap-1.5 text-right text-xs font-medium">
                    <span
                      className="size-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {profile.availability.label}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <div className="space-y-4 text-[0.9375rem] leading-[1.8] text-muted-foreground sm:text-base">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {about.highlights.map((highlight, index) => {
                const Icon = highlightIcons[highlight.icon];

                return (
                  <Reveal
                    key={highlight.title}
                    delay={0.12 + index * 0.06}
                    className="h-full"
                  >
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-5 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_45px_-28px_rgb(0_0_0/0.45)] motion-reduce:transform-none motion-reduce:transition-none">
                      <span
                        className="pointer-events-none absolute -top-10 -right-8 size-28 rounded-full bg-primary/[0.08] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                      <span
                        className="absolute top-5 right-5 font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground/45 transition-colors duration-300 group-hover:text-primary"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="relative flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none">
                        <Icon className="size-4" aria-hidden="true" />
                      </div>
                      <h3 className="relative mt-4 text-sm font-semibold">
                        {highlight.title}
                      </h3>
                      <p className="relative mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {highlight.description}
                      </p>
                      <span
                        className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary/70 to-transparent transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "mt-14 grid gap-8 border-t border-border pt-10 md:gap-12",
            hasInterests && hasGoals && "md:grid-cols-2",
            !hasInterests && !hasGoals && "hidden",
          )}
        >
          {/* Hidden while `about.interests` is empty. Add items back to show it again. */}
          {hasInterests ? (
            <Reveal>
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="size-4 text-primary" aria-hidden="true" />
                {copy.about.interestsTitle}
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {about.interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                  >
                    <Plus
                      className="mt-0.5 size-3 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {interest}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          <Reveal delay={0.06}>
            {/* Hidden while `about.goals` is empty. Add items back to show it again. */}
            {hasGoals ? (
              <>
                <h3 className="flex items-center gap-2 text-sm font-semibold">
                  <Target className="size-4 text-primary" aria-hidden="true" />
                  {copy.about.goalsTitle}
                </h3>
                <ol className="mt-4 space-y-3">
                  {about.goals.map((goal, index) => (
                    <li
                      key={goal}
                      className="flex gap-3 text-xs leading-relaxed text-muted-foreground"
                    >
                      <span className="font-mono text-[0.625rem] text-primary/80">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {goal}
                    </li>
                  ))}
                </ol>
              </>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
