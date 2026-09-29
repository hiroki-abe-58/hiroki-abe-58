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
- I measure before I claim. The numbers in my READMEs are the output of code I ran, and what I have not measured is marked as not measured.
- Based in Tokyo. I write in Japanese and English on Zenn, Qiita, note and dev.to.

## Featured: generative AI tooling

- **[Qwen3-TTS-JP](https://github.com/hiroki-abe-58/Qwen3-TTS-JP)**: A Windows-native fork of Qwen3-TTS that runs without WSL2, Docker or FlashAttention 2. It adds a 10-language Web UI (Custom Voice, Voice Design, Voice Clone) and Whisper auto-transcription for voice-clone reference audio, with setup notes for RTX 50-series (Blackwell) GPUs.
- **[Qwen3-TTS-Mac-GeneLab](https://github.com/hiroki-abe-58/Qwen3-TTS-Mac-GeneLab)**: Qwen3-TTS for Apple Silicon Macs. It uses an MLX + PyTorch dual engine: MLX with 8-bit/4-bit quantization for speed, and PyTorch for voice cloning. The Web UI is in 10 languages, with Whisper auto-transcription.
- **[ComfyUI-AceMusic](https://github.com/hiroki-abe-58/ComfyUI-AceMusic)**: 15 ComfyUI custom nodes for ACE-Step music generation. They make full songs with lyrics in 19 languages, up to 240 seconds long, with cover, repaint, extend, edit and retake, and LoRA loading.
- **[Style-BERT-VITS2-GeneLab-Blackwell](https://github.com/hiroki-abe-58/Style-BERT-VITS2-GeneLab-Blackwell)**: A fork of Style-Bert-VITS2 that runs on the GPU of an RTX 5090 (Blackwell, sm_120) natively on Windows. It uses PyTorch nightly cu128 and triton-windows, with automatic CPU/GPU fallback.

## Featured: decision models and measurement

- **[sokudan](https://github.com/hiroki-abe-58/sokudan)**: `pip install sokudan` (v0.3.0, Python 3.11–3.13). A Japanese System One decision model (314.6M, ModernBERT-ja, Apache-2.0). It returns typed choice, score and bool answers with probabilities in one forward pass, with no generated text. The weights are v0.2's, a weight average of eight seeds, and one run of it on its own 300-item `bench_ja` gives choice accuracy 0.880, score RPS 0.075 and bool AUROC 0.844. `bool` answers are calibrated by default with one temperature shipped with the weights, and `choice` and `score` stay raw. `sokudan serve` runs a `/v1/systemone`-compatible server. v0.3.0: MLX backend for Apple Silicon (auto-selected on macOS 14+ arm64), torch on CUDA / CPU. ([model](https://huggingface.co/GeneLab/sokudan-ja-310m), [PyPI](https://pypi.org/project/sokudan/))
- **Contributions to other open decision models**, measured rather than argued:
  - [Laya](https://github.com/NandhaKishorM/laya): reported the score position bias of the multilingual checkpoint ([#131](https://github.com/NandhaKishorM/laya/issues/131)), added a label-free regression check for it ([#259](https://github.com/NandhaKishorM/laya/pull/259), merged), and extended that check to non-English inputs ([#650](https://github.com/NandhaKishorM/laya/pull/650)).
  - [kev](https://github.com/jaredpalmer/kev) and [lev](https://github.com/Abhinavexists/lev): measured score-question order sensitivity with the same checks ([kev#161](https://github.com/jaredpalmer/kev/issues/161), [lev#1](https://github.com/Abhinavexists/lev/issues/1)).
  - [Lev PR #2](https://github.com/Abhinavexists/lev/pull/2) (open): presentation checks and opt-in order averaging for Score; reversed order raises Score accuracy by 6.9 points on bench_en.


## Stack

Python, PyTorch, Hugging Face Transformers, MLX, ComfyUI, Gradio. RTX 5090 (Blackwell) on Windows, and Apple Silicon.

## Support my work

If these tools save you time, a coffee helps me keep them running.

<a href="https://www.buymeacoffee.com/genelab"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="40"></a>

-- GeneLab (Hiroki Abe), Tokyo
