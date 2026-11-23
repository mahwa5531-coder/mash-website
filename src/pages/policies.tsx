import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SITE_CONFIG } from "@/content/site-config";
import { ArrowLeft, FileText, Shield, ArrowRight } from "lucide-react";

export default function PoliciesOverviewPage() {
  const policies = [
    {
      title: "Terms of Use",
      href: "/terms",
      badge: "Commercial License",
      description: "Governs software licensing, autonomous local tool execution, Pro monthly subscriptions, and statutory auditor responsibility under ICAI standards.",
      icon: <FileText className="h-5 w-5 text-slate-800" />,
      updated: "November 23, 2026",
    },
    {
      title: "Privacy Policy",
      href: "/privacy",
      badge: "DPDPA 2023 Compliant",
      description: "Details our strict local-first data isolation architecture, ephemeral inference routing, zero-training covenant, and sub-processor directory.",
      icon: <Shield className="h-5 w-5 text-emerald-600" />,
      updated: "November 23, 2026",
    },
  ];

  return (
    <>
      <Head>
        <title>{`Terms & Policies — ${SITE_CONFIG.name}`}</title>
        <meta
          name="description"
          content="Official legal terms and data privacy governance for Mash desktop AI workbench."
        />
        <meta property="og:title" content="Terms & Policies — Mash" />
        <meta property="og:description" content="Official legal terms and privacy governance for Mash." />
      </Head>

      <main className="pt-28 pb-20 md:pt-36 md:pb-28 bg-[#FAF9F6]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Header */}
          <div className="mb-10 text-center sm:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors mb-6 font-sans font-medium"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Overview</span>
            </Link>

            <div className="space-y-3">
              <Badge variant="secondary" className="text-[11px] font-mono uppercase tracking-wider font-semibold">
                GOVERNANCE &amp; LEGAL
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
                Terms &amp; Policies
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-xl">
                Simple, transparent governance documents for practicing Chartered Accountants, CPAs, and audit firms.
              </p>
            </div>
          </div>

          {/* 2 Core Policy Cards */}
          <div className="space-y-4">
            {policies.map((p, idx) => (
              <Link key={idx} href={p.href} className="block group">
                <Card className="rounded-2xl border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 shrink-0 group-hover:scale-105 transition-transform">
                        {p.icon}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h2 className="text-base font-bold text-slate-900 font-sans group-hover:text-slate-950 transition-colors">
                            {p.title}
                          </h2>
                          <Badge variant="outline" className="text-[10px] font-mono text-slate-600 bg-slate-50">
                            {p.badge}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-sans max-w-xl">
                          {p.description}
                        </p>
                        <div className="text-[10px] font-mono text-slate-400 pt-1">
                          Last updated: {p.updated}
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Contact Footer */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200/80 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-sans">
            <div>
              Have statutory compliance or licensing questions?
            </div>
            <a href="mailto:legal@mash.ai" className="font-semibold text-slate-900 underline hover:text-slate-700">
              legal@mash.ai
            </a>
          </div>

        </div>
      </main>
    </>
  );
}
