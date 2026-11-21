import * as React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllDocs, getDocBySlug, DocItem } from "@/lib/docs";
import { renderMarkdownToHtml } from "@/lib/markdown";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { SITE_CONFIG } from "@/content/site-config";

interface DocPageProps {
  currentDoc: DocItem;
  allDocs: DocItem[];
  htmlContent: string;
}

export default function DocPage({ currentDoc, allDocs, htmlContent }: DocPageProps) {
  if (!currentDoc) return null;

  return (
    <>
      <Head>
        <title>{currentDoc.title} — {SITE_CONFIG.name} Documentation</title>
        <meta name="description" content={currentDoc.description} />
      </Head>

      <DocsLayout currentDoc={currentDoc} allDocs={allDocs}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </DocsLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = getAllDocs();
  const paths = docs.map((doc) => ({
    params: { slug: doc.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DocPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const allDocs = getAllDocs();
  const currentDoc = getDocBySlug(slug);

  if (!currentDoc) {
    return {
      notFound: true,
    };
  }

  const htmlContent = renderMarkdownToHtml(currentDoc.content);

  return {
    props: {
      currentDoc,
      allDocs,
      htmlContent,
    },
  };
};
