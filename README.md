![Snow-covered mountain ridges above a sea of clouds at sunrise](assets/header.jpg)

# GeneLab

**Generative AI, in Japanese, on your own machine.**

[![Hugging Face](https://img.shields.io/badge/Hugging%20Face-GeneLab-FFD21E?logo=huggingface&logoColor=black)](https://huggingface.co/GeneLab)
[![PyPI](https://img.shields.io/pypi/v/sokudan?logo=pypi&logoColor=white&label=PyPI%20sokudan)](https://pypi.org/project/sokudan/)
[![Qiita](https://img.shields.io/badge/Qiita-GeneLab__999-55C500?logo=qiita&logoColor=white)](https://qiita.com/GeneLab_999)
[![Zenn](https://img.shields.io/badge/Zenn-genelab__999-3EA8FF?logo=zenn&logoColor=white)](https://zenn.dev/genelab_999)
[![note](https://img.shields.io/badge/note-genelab__999-41C9B4)](https://note.com/genelab_999)
[![Medium](https://img.shields.io/badge/Medium-@genelab__999-000000?logo=medium&logoColor=white)](https://medium.com/@genelab_999)
[![dev.to](https://img.shields.io/badge/dev.to-genelab__999-0A0A0A?logo=devdotto&logoColor=white)](https://dev.to/genelab_999)
[![X](https://img.shields.io/badge/X-@geneLab__999-000000?logo=x&logoColor=white)](https://x.com/geneLab_999)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-genelab-FFDD00?logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/genelab)

<a href="https://www.buymeacoffee.com/genelab"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="40"></a>

## About me

- I build generative AI tools that run on your own hardware: Japanese text-to-speech, ComfyUI nodes, and Windows setups for RTX 5090 (Blackwell) GPUs and Apple Silicon Macs.
- I also train small Japanese language models from scratch on one machine (an M1 Max, then an RTX 5090), changing one thing at a time and measuring what each change costs.
- I measure before I claim. The numbers in my READMEs are the output of code I ran, and what I have not measured is marked as not measured.
- Based in Tokyo. I write in Japanese and English on Zenn, Qiita, note and dev.to.

## Featured: Japanese language models, trained from scratch

**1LM → 2LM → 3LM** is a series of Japanese GPT-style chat models built from zero: no pretrained base and no fine-tune of an existing LLM. Each repo ships the training code, a CLI and a web GUI. Each step changes one variable and measures it. The code is MIT, and the training data was chosen so that no ShareAlike license applies.

| Step | What changes | Params | Result | Apple Silicon (MLX, M1 Max) | RTX 5090 (Windows native, PyTorch) |
|---|---|---|---|---|---|
| **1LM** | Character-level mini-GPT, 28,616 oasst1-ja conversations | 11.5M | best val loss 1.857 in 32 min | [1LM](https://github.com/hiroki-abe-58/1LM) | [1LM-Blackwell](https://github.com/hiroki-abe-58/1LM-Blackwell): 61.3 s, val loss 1.8677 (Mac 1.8571) |
| **2LM** | SentencePiece subwords (vocab 8,000), 4 Apache-2.0 dialogue sets, a fixed 4-metric eval | 13.81M | bits/char 2.584 (char-level baselines: 3.282 and 2.809) | [2LM-MLX](https://github.com/hiroki-abe-58/2LM-MLX) | [2LM-Blackwell](https://github.com/hiroki-abe-58/2LM-Blackwell): 78.5 s, bits/char 2.586 |
| **3LM** | RoPE / RMSNorm / SwiGLU, 1.2B characters of FineWeb2-ja + Aozora, crash-safe overnight pretraining | 35.66M | val loss 6.554 → 4.306 in 8.03 h, 0 restarts | [3LM-MLX](https://github.com/hiroki-abe-58/3LM-MLX) ([weights](https://huggingface.co/GeneLab/3LM-MLX)) | |

3LM did not simply beat 2LM. On 2LM's own eval set it lost (bits/char 2.801 vs 2.540), and on web and Aozora text it won (3.680 vs 6.481). The README reports both results.

**GAL variants** fine-tune each base model on a fictional gyaru-style chat dataset that a local Apache-2.0 LLM generated, then measure what the persona costs in general ability:

- **[2LM-MLX-GAL](https://github.com/hiroki-abe-58/2LM-MLX-GAL)**: 2,610 conversations and a 40 s fine-tune. bits/char goes from 2.584 to 3.550, and topic retention from 0.733 to 0.267.
- **[2LM-Blackwell-GAL](https://github.com/hiroki-abe-58/2LM-Blackwell-GAL)**: 6,879 conversations generated in 36.7 min, then a 7.0 s fine-tune: gal rate 0.74, keigo 0.00. A 20-condition sweep shows the breakdown boundary is a surface over conversation count × learning rate, not a single count.
- **[3LM-MLX-GAL](https://github.com/hiroki-abe-58/3LM-MLX-GAL)**: the same 2,610 conversations in 48 s. The bits/char cost is +0.353, compared with +0.970 for 2LM. ([weights](https://huggingface.co/GeneLab/3LM-MLX-GAL))

## Featured: generative AI tooling

- **[Qwen3-TTS-JP](https://github.com/hiroki-abe-58/Qwen3-TTS-JP)**: A Windows-native fork of Qwen3-TTS that runs without WSL2, Docker or FlashAttention 2. It adds a 10-language Web UI (Custom Voice, Voice Design, Voice Clone) and Whisper auto-transcription for voice-clone reference audio, with setup notes for RTX 50-series (Blackwell) GPUs.
- **[Qwen3-TTS-Mac-GeneLab](https://github.com/hiroki-abe-58/Qwen3-TTS-Mac-GeneLab)**: Qwen3-TTS for Apple Silicon Macs. It uses an MLX + PyTorch dual engine: MLX with 8-bit/4-bit quantization for speed, and PyTorch for voice cloning. The Web UI is in 10 languages, with Whisper auto-transcription.
- **[ComfyUI-AceMusic](https://github.com/hiroki-abe-58/ComfyUI-AceMusic)**: 15 ComfyUI custom nodes for ACE-Step music generation. They make full songs with lyrics in 19 languages, up to 240 seconds long, with cover, repaint, extend, edit and retake, and LoRA loading.
- **[Style-BERT-VITS2-GeneLab-Blackwell](https://github.com/hiroki-abe-58/Style-BERT-VITS2-GeneLab-Blackwell)**: A fork of Style-Bert-VITS2 that runs on the GPU of an RTX 5090 (Blackwell, sm_120) natively on Windows. It uses PyTorch nightly cu128 and triton-windows, with automatic CPU/GPU fallback.
- **[ComfyUI-Win-Blackwell](https://github.com/hiroki-abe-58/ComfyUI-Win-Blackwell)**: A one-click setup (.bat / .ps1) for Windows-native ComfyUI on RTX 50-series (sm_120) GPUs. It uses CUDA 13.0, PyTorch nightly cu130, Python 3.13 and triton-windows. It comes with 28 custom nodes and 5 image-to-video pipelines verified on an RTX 5090. The README is in 4 languages.
- **[ComfyUI-NVIDIA-CMD](https://github.com/hiroki-abe-58/ComfyUI-NVIDIA-CMD)**: Unofficial ComfyUI nodes that run NVIDIA CMD on Windows native, with PyTorch SDPA and no flash-attn or WSL. CMD is a few-step causal image-to-video model distilled from Cosmos-Predict2.5-2B. The nodes cover short I2V, long rollout and camera control. The KV cache is capped at the local attention window, so long rollouts fit in 32 GB: the measured peak is 23,852 MiB and a long run takes about 267 s on an RTX 5090.

## Featured: decision models and measurement

- **[sokudan](https://github.com/hiroki-abe-58/sokudan)**: `pip install sokudan` (v0.3.0, Python 3.11–3.13). A Japanese System One decision model (314.6M, ModernBERT-ja, Apache-2.0). It returns typed choice, score and bool answers with probabilities in one forward pass, with no generated text. The weights are v0.2's, a weight average of eight seeds, and one run of it on its own 300-item `bench_ja` gives choice accuracy 0.880, score RPS 0.075 and bool AUROC 0.844. `bool` answers are calibrated by default with one temperature shipped with the weights, and `choice` and `score` stay raw. `sokudan serve` runs a `/v1/systemone`-compatible server. v0.3.0: MLX backend for Apple Silicon (auto-selected on macOS 14+ arm64), torch on CUDA / CPU. ([model](https://huggingface.co/GeneLab/sokudan-ja-310m), [PyPI](https://pypi.org/project/sokudan/))
- **Contributions to other open decision models**, measured rather than argued:
  - [Laya](https://github.com/NandhaKishorM/laya): reported the score position bias of the multilingual checkpoint ([#131](https://github.com/NandhaKishorM/laya/issues/131)), added a label-free regression check for it ([#259](https://github.com/NandhaKishorM/laya/pull/259)), extended that check to non-English inputs ([#650](https://github.com/NandhaKishorM/laya/pull/650)) and to choice questions ([#753](https://github.com/NandhaKishorM/laya/pull/753)); #259, #650 and #753 merged.
  - [kev](https://github.com/jaredpalmer/kev) and [lev](https://github.com/Abhinavexists/lev): measured score-question order sensitivity with the same checks ([kev#161](https://github.com/jaredpalmer/kev/issues/161), [lev#1](https://github.com/Abhinavexists/lev/issues/1)).
  - [Lev PR #2](https://github.com/Abhinavexists/lev/pull/2) (open): presentation checks and opt-in order averaging for Score; reversed order raises Score accuracy by 6.9 points on bench_en.


## Stack

Python, PyTorch, Hugging Face Transformers, MLX, SentencePiece, ComfyUI, Gradio. RTX 5090 (Blackwell) on Windows, and Apple Silicon.

## Support my work

If these tools save you time, a coffee helps me keep them running.

<a href="https://www.buymeacoffee.com/genelab"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="40"></a>

-- GeneLab (Hiroki Abe), Tokyo
