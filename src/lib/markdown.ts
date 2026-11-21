export function renderMarkdownToHtml(markdown: string): string {
  let html = markdown;

  // Escape special HTML chars except inside code blocks
  // Code blocks: ```lang\ncode\n```
  html = html.replace(/```([a-z0-9_-]*)\r?\n([\s\S]*?)```/g, (match, lang, code) => {
    const escapedCode = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<div class="my-4 rounded-lg bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto border border-slate-800"><div class="text-[10px] text-slate-400 mb-2 uppercase tracking-wider">${lang || "code"}</div><pre><code>${escapedCode}</code></pre></div>`;
  });

  // Inline code: `code`
  html = html.replace(/`([^`]+)`/g, '<code class="rounded bg-slate-100 border border-slate-200/80 px-1.5 py-0.5 font-mono text-xs text-slate-800">$1</code>');

  // Headings
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-base font-bold text-slate-900 mt-6 mb-2 tracking-tight">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold text-slate-900 mt-8 mb-3 tracking-tight border-b border-slate-100 pb-1">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">$1</h1>');

  // Bold & Italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline underline-offset-2 font-medium">$1</a>');

  // Blockquotes
  html = html.replace(/^\> (.*$)/gim, '<blockquote class="border-l-2 border-slate-300 pl-3 italic text-slate-600 my-3">$1</blockquote>');

  // Unordered lists
  html = html.replace(/^\- (.*$)/gim, '<li class="flex items-start gap-2 my-1"><span class="text-slate-400 mt-1 select-none">•</span><span>$1</span></li>');
  // Ordered lists
  html = html.replace(/^(\d+)\. (.*$)/gim, '<li class="flex items-start gap-2 my-1"><span class="font-mono text-xs text-slate-400 mt-0.5 select-none">$1.</span><span>$2</span></li>');

  // Paragraphs
  html = html.split(/\n{2,}/).map(para => {
    para = para.trim();
    if (!para) return "";
    if (para.startsWith("<h") || para.startsWith("<div") || para.startsWith("<li") || para.startsWith("<blockquote") || para.startsWith("<table")) {
      return para;
    }
    return `<p class="my-3 leading-relaxed text-slate-700">${para}</p>`;
  }).join("\n");

  return html;
}
