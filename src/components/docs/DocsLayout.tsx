import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BookOpen, ChevronRight, FileText } from "lucide-react";
import { DocItem } from "@/lib/docs";
import { cn } from "@/lib/utils";

interface DocsLayoutProps {
  currentDoc: DocItem;
  allDocs: DocItem[];
  children: React.ReactNode;
}

export function DocsLayout({ currentDoc, allDocs, children }: DocsLayoutProps) {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {/* Left Navigation Sidebar */}
        <aside className="md:col-span-1 lg:col-span-1">
          <div className="sticky top-20 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 px-2">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Documentation</span>
            </div>

            <nav className="space-y-1">
              {allDocs.map((doc) => {
                const isActive = doc.slug === currentDoc.slug;
                return (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors",
                      isActive
                        ? "bg-slate-900 text-white shadow-2xs"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    <span>{doc.title}</span>
                    {isActive && <ChevronRight className="h-3 w-3 text-slate-400" />}
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Center Main Documentation Column */}
        <main className="md:col-span-3 lg:col-span-3 min-w-0">
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-code:font-mono prose-code:text-[13px] text-slate-700 text-sm leading-relaxed">
            {children}
          </div>

          {/* Navigation between prev/next doc */}
          <div className="mt-16 pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-medium">
            {(() => {
              const currentIndex = allDocs.findIndex((d) => d.slug === currentDoc.slug);
              const prev = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
              const next = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

              return (
                <>
                  {prev ? (
                    <Link
                      href={`/docs/${prev.slug}`}
                      className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900"
                    >
                      <span>← {prev.title}</span>
                    </Link>
                  ) : <div />}

                  {next && (
                    <Link
                      href={`/docs/${next.slug}`}
                      className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 ml-auto"
                    >
                      <span>{next.title} →</span>
                    </Link>
                  )}
                </>
              );
            })()}
          </div>
        </main>

        {/* Right Rail: On This Page */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-20 space-y-3 border-l border-slate-200/80 pl-4 text-xs">
            <span className="font-semibold text-slate-900 tracking-wider uppercase text-[11px]">
              On this page
            </span>
            <ul className="space-y-2 text-slate-500 text-[11px]">
              <li>
                <a href="#overview" className="hover:text-slate-900 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#installation" className="hover:text-slate-900 transition-colors">
                  Installation & Setup
                </a>
              </li>
              <li>
                <a href="#verification" className="hover:text-slate-900 transition-colors">
                  Checksum Verification
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
