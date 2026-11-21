import * as React from "react";
import { Lock, Cpu, BarChart3 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function ValueProps() {
  return (
    <section className="py-20 bg-[#FCFCFD] border-t border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Built from the ground up for engineering integrity.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            No cloud-dependent walled gardens. Mash combines raw workstation compute with local agent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Local Privacy */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 mb-2">
                <Lock className="h-5 w-5" />
              </div>
              <CardTitle>Strict Local Privacy</CardTitle>
              <CardDescription>
                Financial ledgers and proprietary code never leave your machine.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-600 leading-relaxed">
              All tools, workspace indexed files, and generated deliverables reside on your local storage. Mash connects to Sarvam AI or local offline Ollama models with zero training retention.
            </CardContent>
          </Card>

          {/* Card 2: Autonomous Local Tool Harness */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-800 mb-2">
                <Cpu className="h-5 w-5" />
              </div>
              <CardTitle>Local Tool Execution</CardTitle>
              <CardDescription>
                Real terminal commands and fast ripgrep searches.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-600 leading-relaxed">
              The agent doesn't simulate code — it executes real shell scripts, crawls repositories with high-performance ripgrep, and creates verified spreadsheet deliverables with formulas intact.
            </CardContent>
          </Card>

          {/* Card 3: 3D Vector Analytics */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#C8522C] mb-2">
                <BarChart3 className="h-5 w-5" />
              </div>
              <CardTitle>3D Vector Spreadsheet</CardTitle>
              <CardDescription>
                Spatial projection of financial data and audit ledgers.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-600 leading-relaxed">
              Step beyond flat 2D grids. Mash renders time-series variances and account balances in interactive 3D vector space with live formula evaluation and multi-sheet tab navigation.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
