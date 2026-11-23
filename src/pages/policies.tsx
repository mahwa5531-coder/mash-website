import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/content/site-config";
import { ArrowLeft, FileText, Shield, Database, Lock, Scale, ArrowRight, ExternalLink } from "lucide-react";

export default function PoliciesOverviewPage() {
  const policies = [
    {
      title: "Terms of Use",
      href: "/terms",
      badge: "Mandatory Agreement",
      description: "Governs software licensing, commercial practice usage, autonomous agent tool authority, and statutory audit responsibility.",
      icon: <FileText className="h-5 w-5 text-slate-800" />,
      updated: "November 23, 2026",
    },
    {
      title: "Privacy Policy",
      href: "/privacy",
      badge: "DPDPA 2023 Compliant",
      description: "Details our Local-First Data Isolation covenant, ephemeral inference routing, and legally binding zero-training guarantee.",
      icon: <Shield className="h-5 w-5 text-emerald-600" />,
      updated: "November 23, 2026",
    },
    {
      title: "AI Sub-processor Directory",
      href: "/privacy#sub-processors",
      badge: "Enterprise Transparency",
      description: "Official listing of upstream inference gateways, Indian data residency commitments, and commercial zero-training agreements.",
      icon: <Database className="h-5 w-5 text-slate-800" />,
      updated: "November 23, 2026",
    },
    {
      title: "Security Safeguards & DPAPI Architecture",
      href: "/privacy#security",
      badge: "Technical Security",
      description: "Cryptographic breakdown of local Windows DPAPI vault storage, localhost sandboxing, and TLS 1.3 encrypted transmission.",
      icon: <Lock className="h-5 w-5 text-slate-800" />,
      updated: "November 23, 2026",
    },
    {
      title: "ICAI Confidentiality & Legal Compliance",
      href: "/privacy#local-first-architecture",
      badge: "Chartered Accountants",
      description: "Guidance on how Mash preserves client privilege under Clause (1) of the Second Schedule to the Chartered Accountants Act, 1949.",
      icon: <Scale className="h-5 w-5 text-slate-800" />,
      updated: "November 23, 2026",
    },
  ];

  return (
    <>
      <Head>
        <title>{`Terms & Policies — ${SITE_CONFIG.name}`}</title>
        <meta
          name="description"
          content="Centralized legal, privacy, security, and statutory compliance directory for Mash."
        />
        <meta property="og:title" content="Terms & Policies — Mash" />
        <meta property="og:description" content="Centralized legal, privacy, and compliance directory for Mash." />
      </Head>

      <main className="pt-28 pb-20 md:pt-36 md:pb-28 bg-[#FAF9F6]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors mb-6 font-sans font-medium"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Overview</span>
            </Link>

            <div className="space-y-3">
              <Badge variant="secondary" className="text-[11px] font-mono uppercase tracking-wider font-semibold">
                GOVERNANCE &amp; COMPLIANCE
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-sans">
                Terms &amp; Policies
              </h1>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed font-sans">
                Explore our legal frameworks, data protection covenants, and architectural security standards designed for practicing Chartered Accountants and financial enterprises.
              </p>
            </div>
          </div>

          {/* Policy Cards Grid */}
          <div className="space-y-4">
            {policies.map((p, idx) => (
              <Link key={idx} href={p.href} className="block group">
                <Card className="rounded-2xl border-slate-200/90 bg-white p-6 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 shrink-0 group-hover:scale-105 transition-transform">
                        {p.icon}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <h2 className="text-base font-bold text-slate-900 font-sans group-hover:text-slate-950">
                            {p.title}
                          </h2>
                          <Badge variant="secondary" className="text-[10px] font-mono py-0 px-2 font-medium">
                            {p.badge}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-xl">
                          {p.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 sm:self-center shrink-0 group-hover:text-slate-950 font-sans">
                      <span>View</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Statutory Grievance Card */}
          <div className="mt-12 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-2xs text-xs font-sans text-slate-600 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Statutory Legal &amp; Grievance Contact</h3>
            <p className="leading-relaxed">
              For regulatory filings, statutory auditor inquiries, or compliance notices under the Digital Personal Data Protection Act, 2023 (DPDPA), please reach our compliance directorate directly at{" "}
              <a href="mailto:privacy@mash.ai" className="font-semibold text-slate-900 underline">
                privacy@mash.ai
              </a>{" "}
              or{" "}
              <a href="mailto:legal@mash.ai" className="font-semibold text-slate-900 underline">
                legal@mash.ai
              </a>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
