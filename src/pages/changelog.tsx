import * as React from "react";
import Head from "next/head";
import { ChangelogTimeline, ChangelogItem } from "@/components/changelog/ChangelogTimeline";
import changelogData from "@/content/changelog.json";
import { SITE_CONFIG } from "@/content/site-config";

export default function ChangelogPage() {
  const items = changelogData as ChangelogItem[];

  return (
    <>
      <Head>
        <title>Changelog — {SITE_CONFIG.name} Release History</title>
        <meta
          name="description"
          content={`Detailed release history and feature changelog for Mash version ${SITE_CONFIG.version}.`}
        />
      </Head>

      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
              Changelog
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              New features, performance enhancements, and security updates shipped in Mash.
            </p>
          </div>

          <ChangelogTimeline items={items} />
        </div>
      </main>
    </>
  );
}
