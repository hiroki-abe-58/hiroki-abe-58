![Snow-covered mountain ridges above a sea of clouds at sunrise](assets/header.jpg)

# GeneLab · Hiroki Abe

**Generative AI, in Japanese, on your own machine.**

AI engineer and technical consultant in Tokyo. I build local AI tools, train small Japanese language models, and turn research implementations into usable software for Windows, Linux and Apple Silicon.

[日本語](README_ja.md) · [Hugging Face](https://huggingface.co/GeneLab) · [Zenn](https://zenn.dev/genelab_999) · [X](https://x.com/geneLab_999)

## Recent releases

### [sokudan](https://github.com/hiroki-abe-58/sokudan) — Japanese decisions without text generation

A 314.6M-parameter ModernBERT-ja model that returns typed **choice, score and bool answers with probabilities in one forward pass**. Includes an HTTP server, a TypeScript SDK and a CLI; inference uses MLX on supported Apple Silicon Macs or PyTorch on CUDA / CPU.

**v0.3.0 is available through five channels:** [PyPI](https://pypi.org/project/sokudan/) · [npm](https://www.npmjs.com/package/sokudan) · [Homebrew tap](https://github.com/hiroki-abe-58/sokudan/blob/main/Formula/sokudan.rb) · [Scoop bucket](https://github.com/hiroki-abe-58/sokudan/blob/main/bucket/sokudan.json) · [GHCR](https://github.com/hiroki-abe-58/sokudan/pkgs/container/sokudan).

The npm package combines a CLI wrapper and a typed HTTP SDK. Homebrew and Scoop install launchers; the container targets Linux amd64 CPU. CI covers installation, SDK/server integration and container model inference. [Installation guide](https://github.com/hiroki-abe-58/sokudan/blob/main/docs/distribution.md) · [Model weights](https://huggingface.co/GeneLab/sokudan-ja-310m)

### [ComfyUI-JoyAI-Video-Edit](https://github.com/hiroki-abe-58/ComfyUI-JoyAI-Video-Edit) — edit video with text instructions

An unofficial integration of JoyAI-Video-Edit, with a persistent WSL2 worker, model load/unload controls, cancellation and memory guards. **v0.1.0 pre-release**, tested on Windows 11 with an RTX 5090: 840×480 landscape output, two inference steps, up to 600 input frames.

Validation compares against a reference with the same low-memory placement patches; an unmodified upstream end-to-end run was resource-blocked. Production outputs are not bitwise repeatable. [Setup and validation scope](https://github.com/hiroki-abe-58/ComfyUI-JoyAI-Video-Edit#readme)

## Projects

I publish code, setup instructions and measured results together. Hardware, inputs, upstream differences and untested paths are documented in each project's README. ComfyUI integrations are community projects; upstream code and weights retain their own licenses.

### Japanese language models · from scratch

**1LM → 2LM → 3LM** explores character tokenization, subwords and modern decoder architectures on a single machine. Base models are trained from scratch; GAL variants study the trade-off between persona fine-tuning and general ability.

| Series | Focus | Repositories |
|---|---|---|
| 1LM · 11.5M | Character-level mini-GPT | [MLX](https://github.com/hiroki-abe-58/1LM) · [Blackwell](https://github.com/hiroki-abe-58/1LM-Blackwell) |
| 2LM · 13.81M | SentencePiece, dialogue data and fixed evaluation | [MLX](https://github.com/hiroki-abe-58/2LM-MLX) · [Blackwell](https://github.com/hiroki-abe-58/2LM-Blackwell) |
| 3LM · 35.66M | RoPE, RMSNorm, SwiGLU and overnight pretraining | [MLX](https://github.com/hiroki-abe-58/3LM-MLX) · [Weights](https://huggingface.co/GeneLab/3LM-MLX) |
| GAL variants | Persona data, fine-tuning and regression measurement | [2LM MLX](https://github.com/hiroki-abe-58/2LM-MLX-GAL) · [2LM Blackwell](https://github.com/hiroki-abe-58/2LM-Blackwell-GAL) · [3LM MLX](https://github.com/hiroki-abe-58/3LM-MLX-GAL) · [Weights](https://huggingface.co/GeneLab/3LM-MLX-GAL) |

### Speech

| Project | What it provides |
|---|---|
| [Qwen3-TTS-JP](https://github.com/hiroki-abe-58/Qwen3-TTS-JP) | Windows-native TTS, voice design and cloning; multilingual Web UI and Whisper transcription. |
| [Qwen3-TTS-Mac-GeneLab](https://github.com/hiroki-abe-58/Qwen3-TTS-Mac-GeneLab) | Apple Silicon TTS with MLX / PyTorch, quantization and voice cloning. |
| [Style-BERT-VITS2-GeneLab-Blackwell](https://github.com/hiroki-abe-58/Style-BERT-VITS2-GeneLab-Blackwell) | Windows-native Blackwell support, with CPU/GPU fallback. |

### ComfyUI · video, images and music

| Area | Projects | Focus |
|---|---|---|
| Video editing | [JoyAI-Video-Edit](https://github.com/hiroki-abe-58/ComfyUI-JoyAI-Video-Edit) | Instruction-based editing with a persistent worker. |
| Fast video | [SparkDiffusion](https://github.com/hiroki-abe-58/ComfyUI-SparkDiffusion) · [LongLive-Plug](https://github.com/hiroki-abe-58/ComfyUI-LongLive-Plug) | Sparse attention, few-step sampling and adapter/scheduler verification. |
| Video attention | [MonarchRT](https://github.com/hiroki-abe-58/ComfyUI-MonarchRT) | Monarch-matrix attention vs. a same-weight dense baseline. |
| Causal video | [CausalForcing](https://github.com/hiroki-abe-58/ComfyUI-CausalForcing) · [NVIDIA-CMD](https://github.com/hiroki-abe-58/ComfyUI-NVIDIA-CMD) | Autoregressive generation, image-to-video and long rollouts. |
| Talking heads | [LeapTalk](https://github.com/hiroki-abe-58/ComfyUI-LeapTalk) · [TBDub](https://github.com/hiroki-abe-58/ComfyUI-TBDub) | Speech-driven portraits and video redubbing. |
| Image generation | [LoopedDiT](https://github.com/hiroki-abe-58/ComfyUI-LoopedDiT) | Pixel-space diffusion and controlled loop-depth comparisons. |
| Image restoration | [PixRestore](https://github.com/hiroki-abe-58/ComfyUI-PixRestore) · [MiRipple](https://github.com/hiroki-abe-58/ComfyUI-MiRipple) | One-step restoration and verified local artifact repair. |
| Music | [AceMusic](https://github.com/hiroki-abe-58/ComfyUI-AceMusic) | ACE-Step song generation, editing and LoRA support. |
| Windows setup | [Win-Blackwell](https://github.com/hiroki-abe-58/ComfyUI-Win-Blackwell) | ComfyUI installation and tested workflows for RTX 50-series GPUs. |

### Web, desktop & developer tools

| Project | What it provides |
|---|---|
| [gassan](https://github.com/hiroki-abe-58/gassan) | React modal components built on native `<dialog>`, with accessible activation gates and explicit close reasons. |
| [lensing](https://github.com/hiroki-abe-58/lensing) | Dependency-free JavaScript/CSS glass refraction effects using signed distance fields and Snell's law. |
| [MermGraph](https://github.com/hiroki-abe-58/MermGraph) | A Tauri Mermaid editor with live preview and PNG/SVG export. |
| [VMagic](https://github.com/hiroki-abe-58/VMagic) | Tauri video conversion with FFmpeg, RIFE frame interpolation and Real-ESRGAN upscaling. |
| [aitxt](https://github.com/hiroki-abe-58/aitxt) | A Go CLI for text processing and developer workflows through OpenAI, Anthropic and Gemini APIs. |
| [RustConv / dtx](https://github.com/hiroki-abe-58/RustConv) | A Rust CLI for converting, querying, validating and merging structured data. |
| [imgai](https://github.com/hiroki-abe-58/imgai) · [ghstat](https://github.com/hiroki-abe-58/ghstat) | Go CLIs for batch image/EXIF processing and GitHub statistics. |

## Stack

**Languages & scripting**

![Python](https://img.shields.io/badge/Python-1F2937?style=flat-square&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-1F2937?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-1F2937?style=flat-square&logo=javascript&logoColor=white)
![Go](https://img.shields.io/badge/Go-1F2937?style=flat-square&logo=go&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-1F2937?style=flat-square&logo=rust&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-1F2937?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1F2937?style=flat-square&logo=css&logoColor=white)
![Shell](https://img.shields.io/badge/Shell-1F2937?style=flat-square&logo=gnubash&logoColor=white)
![PowerShell](https://img.shields.io/badge/PowerShell-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)

**AI & model runtimes**

![PyTorch](https://img.shields.io/badge/PyTorch-1F2937?style=flat-square&logo=pytorch&logoColor=white)
![MLX](https://img.shields.io/badge/MLX-1F2937?style=flat-square&logo=apple&logoColor=white)
![Transformers](https://img.shields.io/badge/Transformers-1F2937?style=flat-square&logo=huggingface&logoColor=white)
![Diffusers](https://img.shields.io/badge/Diffusers-1F2937?style=flat-square&logo=huggingface&logoColor=white)
![ComfyUI](https://img.shields.io/badge/ComfyUI-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![Gradio](https://img.shields.io/badge/Gradio-1F2937?style=flat-square&logo=gradio&logoColor=white)
![CUDA](https://img.shields.io/badge/CUDA-1F2937?style=flat-square&logo=nvidia&logoColor=white)
![Triton](https://img.shields.io/badge/Triton-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)

**Web & desktop**

![React](https://img.shields.io/badge/React-1F2937?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-1F2937?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-1F2937?style=flat-square&logo=tailwindcss&logoColor=white)
![Tauri](https://img.shields.io/badge/Tauri-1F2937?style=flat-square&logo=tauri&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-1F2937?style=flat-square&logo=nodedotjs&logoColor=white)
![Deno](https://img.shields.io/badge/Deno-1F2937?style=flat-square&logo=deno&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-1F2937?style=flat-square&logo=hono&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-1F2937?style=flat-square&logo=fastapi&logoColor=white)

**Build, delivery & platforms**

![Docker](https://img.shields.io/badge/Docker-1F2937?style=flat-square&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-1F2937?style=flat-square&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/Git-1F2937?style=flat-square&logo=git&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-1F2937?style=flat-square&logo=githubactions&logoColor=white)
![GHCR](https://img.shields.io/badge/GHCR-1F2937?style=flat-square&logo=github&logoColor=white)
![PyPI](https://img.shields.io/badge/PyPI-1F2937?style=flat-square&logo=pypi&logoColor=white)
![npm](https://img.shields.io/badge/npm-1F2937?style=flat-square&logo=npm&logoColor=white)
![Homebrew](https://img.shields.io/badge/Homebrew-1F2937?style=flat-square&logo=homebrew&logoColor=white)
![Scoop](https://img.shields.io/badge/Scoop-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)

<details>
<summary>More libraries, APIs and development tools</summary>

**Model tooling**

![HF Hub](https://img.shields.io/badge/HF%20Hub-1F2937?style=flat-square&logo=huggingface&logoColor=white)
![Datasets](https://img.shields.io/badge/Datasets-1F2937?style=flat-square&logo=huggingface&logoColor=white)
![Tokenizers](https://img.shields.io/badge/Tokenizers-1F2937?style=flat-square&logo=huggingface&logoColor=white)
![Safetensors](https://img.shields.io/badge/Safetensors-1F2937?style=flat-square&logo=huggingface&logoColor=white)
![Accelerate](https://img.shields.io/badge/Accelerate-1F2937?style=flat-square&logo=huggingface&logoColor=white)
![SentencePiece](https://img.shields.io/badge/SentencePiece-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![OpenCLIP](https://img.shields.io/badge/OpenCLIP-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![SageAttention](https://img.shields.io/badge/SageAttention-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![MLX Audio](https://img.shields.io/badge/MLX%20Audio-1F2937?style=flat-square&logo=apple&logoColor=white)
![Whisper](https://img.shields.io/badge/Whisper-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)

**Scientific computing & media**

![NumPy](https://img.shields.io/badge/NumPy-1F2937?style=flat-square&logo=numpy&logoColor=white)
![SciPy](https://img.shields.io/badge/SciPy-1F2937?style=flat-square&logo=scipy&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-1F2937?style=flat-square&logo=scikitlearn&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-1F2937?style=flat-square&logo=opencv&logoColor=white)
![Pillow](https://img.shields.io/badge/Pillow-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![scikit-image](https://img.shields.io/badge/scikit--image-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![timm](https://img.shields.io/badge/timm-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![torchaudio](https://img.shields.io/badge/torchaudio-1F2937?style=flat-square&logo=pytorch&logoColor=white)
![librosa](https://img.shields.io/badge/librosa-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![SoundFile](https://img.shields.io/badge/SoundFile-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![ONNX Runtime](https://img.shields.io/badge/ONNX%20Runtime-1F2937?style=flat-square&logo=onnx&logoColor=white)
![FFmpeg](https://img.shields.io/badge/FFmpeg-1F2937?style=flat-square&logo=ffmpeg&logoColor=white)
![VideoToolbox](https://img.shields.io/badge/VideoToolbox-1F2937?style=flat-square&logo=apple&logoColor=white)
![Real-ESRGAN](https://img.shields.io/badge/Real--ESRGAN-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![RIFE](https://img.shields.io/badge/RIFE-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)

**UI, graphics & services**

![PostCSS](https://img.shields.io/badge/PostCSS-1F2937?style=flat-square&logo=postcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![React Flow](https://img.shields.io/badge/React%20Flow-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![Mermaid](https://img.shields.io/badge/Mermaid-1F2937?style=flat-square&logo=mermaid&logoColor=white)
![Monaco Editor](https://img.shields.io/badge/Monaco%20Editor-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![PixiJS](https://img.shields.io/badge/PixiJS-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-1F2937?style=flat-square&logo=gsap&logoColor=white)
![SVG](https://img.shields.io/badge/SVG-1F2937?style=flat-square&logo=svg&logoColor=white)
![Puppeteer](https://img.shields.io/badge/Puppeteer-1F2937?style=flat-square&logo=puppeteer&logoColor=white)
![Uvicorn](https://img.shields.io/badge/Uvicorn-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![Pydantic](https://img.shields.io/badge/Pydantic-1F2937?style=flat-square&logo=pydantic&logoColor=white)
![HTTPX](https://img.shields.io/badge/HTTPX-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)

**CLI, APIs & native code**

![Cobra](https://img.shields.io/badge/Cobra-1F2937?style=flat-square&logo=go&logoColor=white)
![Clap](https://img.shields.io/badge/Clap-1F2937?style=flat-square&logo=rust&logoColor=white)
![Tokio](https://img.shields.io/badge/Tokio-1F2937?style=flat-square&logo=rust&logoColor=white)
![Serde](https://img.shields.io/badge/Serde-1F2937?style=flat-square&logo=rust&logoColor=white)
![OpenAI API](https://img.shields.io/badge/OpenAI%20API-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![Anthropic API](https://img.shields.io/badge/Anthropic%20API-1F2937?style=flat-square&logo=anthropic&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini%20API-1F2937?style=flat-square&logo=googlegemini&logoColor=white)

**Testing & packaging**

![pytest](https://img.shields.io/badge/pytest-1F2937?style=flat-square&logo=pytest&logoColor=white)
![Ruff](https://img.shields.io/badge/Ruff-1F2937?style=flat-square&logo=ruff&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-1F2937?style=flat-square&logo=vitest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing%20Library-1F2937?style=flat-square&logo=testinglibrary&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-1F2937?style=flat-square&logo=eslint&logoColor=white)
![tsup](https://img.shields.io/badge/tsup-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![esbuild](https://img.shields.io/badge/esbuild-1F2937?style=flat-square&logo=esbuild&logoColor=white)
![uv](https://img.shields.io/badge/uv-1F2937?style=flat-square&logo=uv&logoColor=white)
![Hatchling](https://img.shields.io/badge/Hatchling-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-1F2937?style=flat-square&logo=githubpages&logoColor=white)

**Operating systems**

![Windows](https://img.shields.io/badge/Windows-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![WSL2](https://img.shields.io/badge/WSL2-1F2937?style=flat-square&logo=linux&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-1F2937?style=flat-square&logo=linux&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-1F2937?style=flat-square&logo=ubuntu&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-1F2937?style=flat-square&logo=macos&logoColor=white)

</details>

Built across my [ML projects](https://github.com/hiroki-abe-58/sokudan), [React libraries](https://github.com/hiroki-abe-58/gassan), [desktop apps](https://github.com/hiroki-abe-58/VMagic), [web tooling](https://github.com/hiroki-abe-58/MermGraph) and [Go CLIs](https://github.com/hiroki-abe-58/aitxt). Docker Compose is also part of my everyday workflow. Main hardware: RTX 5090 (Blackwell) and Apple Silicon. Badges without a brand logo use a generic code icon.

## Open-source contributions

Reproducible checks for answer-order sensitivity in open decision models:

- **Laya:** [score-position bias report](https://github.com/NandhaKishorM/laya/issues/131), [regression checks](https://github.com/NandhaKishorM/laya/pull/259), [non-English inputs](https://github.com/NandhaKishorM/laya/pull/650) and [choice questions](https://github.com/NandhaKishorM/laya/pull/753).
- **kev / lev:** [kev measurements](https://github.com/jaredpalmer/kev/issues/161), [lev measurements](https://github.com/Abhinavexists/lev/issues/1) and [presentation checks / order averaging](https://github.com/Abhinavexists/lev/pull/2).
- **Mi-Ripple:** [OpenCV runtime handling](https://github.com/miyang-ai/Mi-Ripple/pull/2), found while validating the ComfyUI integration.

## Research

**[DiM-2](https://doi.org/10.5281/zenodo.18689888)** explores Mamba-2 / Structured State Space Duality for image and video diffusion. These preprints present architectural proposals and experimental directions; implementation results are reported separately in the OSS repositories above.

<details>
<summary>Related DiM-2 / SSD preprints</summary>

| Preprint | Direction |
|---|---|
| [SSD-CM](https://doi.org/10.5281/zenodo.18690580) | Few-step consistency distillation |
| [SSD-Control](https://doi.org/10.5281/zenodo.18690631) | Depth, pose and edge conditioning |
| [SSD-Portrait](https://doi.org/10.5281/zenodo.18690678) | Audio-driven portraits and lip synchronization |
| [SSD-SR](https://doi.org/10.5281/zenodo.18697475) | Image and video super-resolution |
| [SSD-Flow](https://doi.org/10.5281/zenodo.18697643) | Flow matching with Mamba-2 |
| [SSD-Edit](https://doi.org/10.5281/zenodo.18697566) | Instruction-guided image and video editing |

</details>

## Writing & support

I write about implementation and experiments in Japanese and English.

[Zenn](https://zenn.dev/genelab_999) · [Qiita](https://qiita.com/GeneLab_999) · [note](https://note.com/genelab_999) · [Medium](https://medium.com/@genelab_999) · [dev.to](https://dev.to/genelab_999) · [X](https://x.com/geneLab_999)

If these tools save you time, [a coffee helps me maintain them](https://www.buymeacoffee.com/genelab).

<details>
<summary>GitHub activity</summary>

<p align="center">
  <a href="https://github.com/ryo-ma/github-profile-trophy">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/hiroki-abe-58/hiroki-abe-58/output/trophy-dark.svg">
      <img src="https://raw.githubusercontent.com/hiroki-abe-58/hiroki-abe-58/output/trophy-light.svg" alt="GitHub profile trophies">
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://github.com/stats-organization/github-stats-extended">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/hiroki-abe-58/hiroki-abe-58/output/stats-dark.svg">
      <img height="180" src="https://raw.githubusercontent.com/hiroki-abe-58/hiroki-abe-58/output/stats-light.svg" alt="GitHub stats">
    </picture>
  </a>
  <a href="https://github.com/stats-organization/github-stats-extended">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/hiroki-abe-58/hiroki-abe-58/output/top-langs-dark.svg">
      <img height="180" src="https://raw.githubusercontent.com/hiroki-abe-58/hiroki-abe-58/output/top-langs-light.svg" alt="Most used languages">
    </picture>
  </a>
</p>

</details>
