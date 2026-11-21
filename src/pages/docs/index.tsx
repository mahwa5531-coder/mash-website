import * as React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { getAllDocs, DocItem } from "@/lib/docs";
import { renderMarkdownToHtml } from "@/lib/markdown";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { SITE_CONFIG } from "@/content/site-config";

interface DocsIndexProps {
  currentDoc: DocItem;
  allDocs: DocItem[];
  htmlContent: string;
}

export default function DocsIndex({ currentDoc, allDocs, htmlContent }: DocsIndexProps) {
  return (
    <>
      <Head>
        <title>{currentDoc.title} — {SITE_CONFIG.name} Documentation</title>
        <meta name="description" content={currentDoc.description} />
        <link rel="canonical" href="https://mash.ai/docs/" />
        <meta property="og:title" content={`${currentDoc.title} — Mash Docs`} />
        <meta property="og:description" content={currentDoc.description} />
        <meta property="og:url" content="https://mash.ai/docs/" />
      </Head>

      <DocsLayout currentDoc={currentDoc} allDocs={allDocs}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </DocsLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<DocsIndexProps> = async () => {
  const allDocs = getAllDocs();
  const currentDoc = allDocs[0] || {
    title: "Documentation",
    slug: "getting-started",
    description: "Welcome to Mash documentation",
    order: 1,
    content: "# Documentation\n\nWelcome to Mash documentation."
  };

  const htmlContent = renderMarkdownToHtml(currentDoc.content);

  return {
    props: {
      currentDoc,
      allDocs,
      htmlContent,
    },
  };
};
