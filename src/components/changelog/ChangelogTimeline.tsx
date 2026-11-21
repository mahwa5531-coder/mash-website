import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { WindowMockup } from "@/components/layout/WindowMockup";

export interface ChangelogItem {
  version: string;
  date: string;
  title: string;
  description: string;
  screenshot?: string;
  tags: string[];
  highlights: {
    category: "New" | "Improved" | "Fix" | "Security" | string;
    text: string;
  }[];
}

interface ChangelogTimelineProps {
  items: ChangelogItem[];
}

export function ChangelogTimeline({ items }: ChangelogTimelineProps) {
  return (
    <div className="py-12 space-y-16">
      {items.map((release) => (
        <article
          key={release.version}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-slate-200/80 last:border-b-0"
        >
          {/* Left Sticky Rail */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-2">
              <span className="font-mono text-xs font-semibold text-slate-900 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                {release.version}
              </span>
              <div className="text-xs text-slate-500 font-medium">
                {release.date}
              </div>
            </div>
          </div>

          {/* Right Release Story */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {release.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={tag === "New" ? "new" : tag === "Improved" ? "improved" : "secondary"}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-3">
                {release.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {release.description}
              </p>
            </div>

            {/* Embedded Screenshot in Window Mockup */}
            {release.screenshot && (
              <WindowMockup
                title={`Mash ${release.version} — Release Overview`}
                badge="Production Release"
                src={release.screenshot}
                alt={`Mash ${release.version} Release screenshot`}
              />
            )}

            {/* Release Highlights */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-2xs space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                What's Changed in {release.version}
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {release.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span
                      className={`inline-block shrink-0 px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold ${
                        h.category === "New"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                          : h.category === "Improved"
                          ? "bg-blue-50 text-blue-700 border border-blue-200/60"
                          : "bg-slate-100 text-slate-700 border border-slate-200/60"
                      }`}
                    >
                      {h.category}
                    </span>
                    <span>{h.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
