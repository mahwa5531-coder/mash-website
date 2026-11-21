---
title: "Local Models & Privacy"
slug: "local-models-and-privacy"
description: "Configuring LLM providers, offline privacy guarantees, and token consumption."
order: 5
---

# Local Models & Privacy

Mash is engineered around a strict local-first philosophy. Your financial data, proprietary codebases, and company ledgers remain on your hardware.

## Supported Providers

Mash supports multiple model providers:
- **Sarvam AI (glm5.3-flash):** Fast reasoning and tool-calling capabilities with multilingual support.
- **Local Ollama / Llama.cpp:** 100% offline air-gapped reasoning on local Nvidia GPUs or Apple Silicon.
- **OpenAI / Anthropic / Google Gemini:** Connect via standard API keys stored in your local `.env`.

## Zero-Retention Policy

- API keys are stored exclusively in your local machine's encrypted keychain or `.env`.
- No telemetry or telemetry logs containing prompt tokens or spreadsheet data are broadcast to external telemetry services.
