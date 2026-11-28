import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/content/site-config";
import { ArrowLeft, ShieldCheck, Lock, Database, Cpu, ExternalLink } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "November 23, 2026";

  const subProcessors = [
    {
      name: "Commercial AI Inference Gateways (OpenRouter / Frontier Model APIs)",
      location: "Global / Cloud (TLS 1.3 Encrypted)",
      role: "Ephemeral In-Flight Prompt Evaluation & Token Metering",
      dataResidency: "Zero Cloud File Storage by Mash; Ephemeral API Transit",
      training: "Commercial No-Training API Tiers",
      link: "https://openrouter.ai/privacy",
    },
    {
      name: "Regional AI Token Providers (e.g., Sarvam AI)",
      location: "India / Cloud (TLS 1.3 Encrypted)",
      role: "Low-Latency AI Reasoning APIs (When Enabled)",
      dataResidency: "Zero Data Retention / Opt-Out Configured on Model APIs",
      training: "Model-Training Opt-Out Enforced Prior to Production Use",
      link: "https://www.sarvam.ai/privacy-policy",
    },
    {
      name: "Razorpay Software Pvt. Ltd.",
      location: "Bengaluru, India",
      role: "RBI-Authorized Payment Aggregator, PCI-DSS Level 1, UPI & Cards",
      dataResidency: "India (RBI Regulated)",
      training: "Not Applicable (Financial Transactions Only)",
      link: "https://razorpay.com/privacy/",
    },
    {
      name: "Google LLC",
      location: "Global",
      role: "User Authentication & Identity Token Verification (Google OAuth 2.0)",
      dataResidency: "Global Infrastructure (Encrypted in Transit)",
      training: "Not Applicable",
      link: "https://policies.google.com/privacy",
    },
  ];

  const sections = [
    {
      id: "personal-data-we-collect",
      title: "1. Personal Data We Collect",
      content: `At Mash, we adhere strictly to the principle of data minimization under the Digital Personal Data Protection Act, 2023 (DPDPA). We collect only the minimum personal information required to authenticate your software license and deliver computational agent services:

(a) Account Information: When you register or sign in via Google OAuth, we receive your name, email address, profile identifier, and active subscription tier (Free or Pro).
(b) Transaction & Billing Data: Subscription tier, payment order reference, Razorpay payment identifier, and transaction timestamps processed through our authorized payment gateway. We never collect or store credit card, debit card, or UPI credentials on our servers.
(c) Usage Metadata & In-Flight Inference: We log aggregate token counts, model identifiers, and latency for rate-limiting and quota enforcement — never prompt text, completions, or spreadsheets. During active AI prompts, minimal cell context snippets extracted locally transit encrypted in-flight for reasoning.

WHAT WE DO NOT COLLECT OR STORE:
Mash does NOT collect, upload, or store your raw client spreadsheets (.xlsx, .csv), complete general ledgers, banking login credentials, client tax documents, or company accounting databases on any cloud server.`,
    },
    {
      id: "how-we-use-personal-data",
      title: "2. How We Use Personal Data",
      content: `We use your personal information solely for the following legitimate business purposes:
(a) To authenticate your identity and verify your active Pro or Free license entitlement;
(b) To process, route, and stream real-time computational reasoning responses from authorized inference gateways to your desktop application;
(c) To track rolling daily token quota windows and prevent service abuse;
(d) To process pass purchases, issue digital payment receipts, and handle customer support inquiries;
(e) To comply with applicable statutory, tax, and regulatory obligations under Indian law.`,
    },
    {
      id: "local-first-architecture",
      title: "3. Local-First Architecture & Data Isolation Covenant",
      content: `Unlike conventional cloud AI platforms that ingest, parse, and store entire files on remote servers, Mash is engineered with a strict Local-First Data Isolation architecture:

1. Local File Confinement: 100% of your financial workbooks, formulas, DuckDB SQL tables, and file modifications remain stored exclusively on your local computer's physical drive and in system RAM.
2. In-Flight Token Minimization: When you ask a question, the local engine extracts only the specific cell values or summary rows necessary to answer your prompt. Only these minimal extracted snippets—never the raw 50MB workbook—are transmitted in-flight over TLS 1.3 to compute the analytical answer.
3. Ephemeral Cloud Transit: Mash cloud servers act as a pass-through tunnel for metering and do not store prompts, completions, or workbooks in any database.
4. ICAI & Fiduciary Responsibility: Keeping raw client files local helps practicing Chartered Accountants uphold client confidentiality under Clause (1) of Part I of the Second Schedule to the Chartered Accountants Act, 1949. Under the DPDP Act, 2023, your firm remains the Data Fiduciary and is responsible for client authorization and redacting sensitive identifiers where required before querying cloud AI models.`,
    },
    {
      id: "zero-training-guarantee",
      title: "4. AI Model Training & Data Retention Posture",
      content: `MASH DOES NOT TRAIN MODELS ON YOUR DATA:
Mash does not collect, retain, or use your spreadsheets, prompts, cell snippets, or generated outputs to train, fine-tune, or improve any AI model.

Our cloud gateway stores only operational quota/token usage counters and routes inference strictly through commercial API endpoints configured with no-training and zero-data-retention policies where supported by the upstream provider.`,
    },
    {
      id: "sub-processors",
      title: "5. Disclosure of Personal Data & AI Sub-processors",
      content: `We do not sell, rent, or trade your personal information. We disclose personal data only to authorized sub-processors necessary to deliver our services, under strict commercial data protection agreements:`,
    },
    {
      id: "data-retention-and-deletion",
      title: "6. Data Retention & Deletion",
      content: `(a) Account & Usage Metadata: We retain your Google account identifier, subscription history, and aggregate token-usage records (not prompt content) for as long as your account remains active or as required for accounting and statutory compliance under Indian law.

(b) Spreadsheets and Financial Content: Because raw spreadsheets and audit files are never uploaded to Mash cloud servers, deleting the file on your local computer immediately purges all copies.

(c) Account Erasure: You may request the permanent deletion of your account and identity record at any time by emailing ${SITE_CONFIG.contact.privacyEmail}. We will process your deletion request within thirty (30) days, subject to mandatory statutory tax retention requirements.`,
    },
    {
      id: "security",
      title: "7. Security Safeguards (Windows DPAPI & TLS 1.3)",
      content: `We maintain industry-standard administrative, technical, and physical safeguards:
(a) Encryption in Transit: All communications between the Mash desktop application, our cloud gateway, and inference providers are encrypted using Transport Layer Security (TLS 1.3 / HTTPS).
(b) Local Credential Vault (Windows DPAPI): Authentication tokens, refresh credentials, and user preferences are encrypted on your local hard drive using Windows Data Protection API (DPAPI). Your encryption key is cryptographically tied to your Windows user logon session.
(c) Localhost Sandboxing: The local connector communicates with the desktop user interface over secure localhost loopback bindings, preventing unauthorized network access from other devices on your local network.`,
    },
    {
      id: "your-rights",
      title: "8. Your Rights Under Indian DPDPA 2023 & Global Laws",
      content: `Under the Digital Personal Data Protection Act, 2023 (DPDPA) and applicable international privacy frameworks, you hold the following rights regarding your personal data:
- Right to Access: Request a summary of your personal data processed by us.
- Right to Correction: Request correction or updating of inaccurate personal data.
- Right to Erasure: Request deletion of your personal data that is no longer necessary for the purpose for which it was processed.
- Right of Grievance Redressal: Access a designated mechanism to resolve privacy grievances.
- Right to Nominate: Designate an individual to exercise your privacy rights in the event of death or incapacity.

To exercise any of these statutory rights, please contact our Grievance Officer at ${SITE_CONFIG.contact.privacyEmail}.`,
    },
    {
      id: "children",
      title: "9. Children's Privacy",
      content: `Mash is designed exclusively for commercial accounting, corporate finance, and statutory audit professionals. We do not knowingly solicit or collect personal information from individuals under the age of eighteen (18).`,
    },
    {
      id: "grievance-officer",
      title: "10. Statutory Grievance Officer & Contact Information",
      content: `In compliance with the Information Technology Act, 2000, the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023, the details of our designated Grievance Officer are set forth below:

Grievance Officer: Legal & Compliance Directorate
Entity: Mash AI Technologies
Email: ${SITE_CONFIG.contact.privacyEmail}
Subject Line: "Statutory Privacy Grievance"
Location: India

We will acknowledge receipt of any privacy grievance within 24 hours and resolve it within statutory timeframes.`,
    },
  ];

  return (
    <>
      <Head>
        <title>{`Privacy Policy — ${SITE_CONFIG.name}`}</title>
        <meta
          name="description"
          content="Official Privacy Policy and Data Isolation Covenant for Mash desktop AI workbench."
        />
        <meta property="og:title" content="Privacy Policy — Mash" />
        <meta property="og:description" content="Official Privacy Policy for Mash desktop AI workbench." />
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
                PRIVACY &amp; DATA ISOLATION
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-sans">
                Privacy Policy
              </h1>
              <p className="text-xs text-slate-500 font-mono">
                Effective Date: {lastUpdated} · Compliant with Indian DPDPA 2023
              </p>
            </div>
          </div>

          {/* Core Architectural Pillars Callout */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-2">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 w-fit">
                <Database className="h-4 w-4 text-slate-800" />
              </div>
              <h3 className="text-xs font-bold text-slate-900 font-sans">Zero Cloud File Storage</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                Raw client workbooks (.xlsx) never leave your physical device. Parsing and SQL execute locally.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-2">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 w-fit">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
              </div>
              <h3 className="text-xs font-bold text-slate-900 font-sans">No-Training API Routing</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                Prompts are never saved by Mash servers and are routed via non-training commercial API tiers.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200/90 bg-white shadow-2xs space-y-2">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 w-fit">
                <Lock className="h-4 w-4 text-slate-800" />
              </div>
              <h3 className="text-xs font-bold text-slate-900 font-sans">DPDPA 2023 Compliant</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                Statutory privacy protection aligned with Indian data protection laws and ICAI client privilege.
              </p>
            </div>
          </div>

          {/* Legal Sections Card */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-xs space-y-12">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                  {s.title}
                </h2>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans whitespace-pre-line space-y-2">
                  {s.content}
                </div>

                {/* Sub-processor table insertion at section 5 */}
                {s.id === "sub-processors" && (
                  <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200/90">
                    <table className="w-full text-left text-xs font-sans">
                      <thead className="bg-slate-50 border-b border-slate-200/90 text-slate-700 font-semibold">
                        <tr>
                          <th className="py-3 px-4">Sub-Processor</th>
                          <th className="py-3 px-4">Role</th>
                          <th className="py-3 px-4">Data Residency</th>
                          <th className="py-3 px-4">Model Training</th>
                          <th className="py-3 px-4">Terms</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
                        {subProcessors.map((sp, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-3.5 px-4 font-semibold text-slate-900">
                              {sp.name}
                              <div className="text-[10px] text-slate-400 font-normal">{sp.location}</div>
                            </td>
                            <td className="py-3.5 px-4 text-[11px]">{sp.role}</td>
                            <td className="py-3.5 px-4 text-[11px]">{sp.dataResidency}</td>
                            <td className="py-3.5 px-4 text-[11px] font-medium text-emerald-700">{sp.training}</td>
                            <td className="py-3.5 px-4">
                              <a
                                href={sp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-900 hover:text-slate-700 underline"
                              >
                                <span>Policy</span>
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 font-sans">
              <div>
                Have privacy inquiries or statutory requests? Contact{" "}
                <a href={`mailto:${SITE_CONFIG.contact.privacyEmail}`} className="font-semibold text-slate-900 underline">
                  {SITE_CONFIG.contact.privacyEmail}
                </a>
              </div>
              <div>
                <Link href="/terms" className="hover:text-slate-900 transition-colors underline">
                  View Terms of Use →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
