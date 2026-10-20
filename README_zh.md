![日出时云海之上覆雪的山脊](assets/header.jpg)

# GeneLab · Hiroki Abe

**日语生成式 AI，在你自己的机器上。**

常驻东京的 AI 工程师、技术顾问。我开发本地 AI 工具，训练小型日语语言模型，并把研究实现打磨成可在 Windows、Linux 和 Apple Silicon 上实际使用的软件。[LongLive-Plug](https://github.com/NVlabs/LongLive/tree/main/LongLive-Plug)（NVlabs）、[SparkDiffusion](https://github.com/AlibabaResearch/SparkDiffusion)（AlibabaResearch）、[LeapTalk](https://github.com/zhangrongxiang/LeapTalk) 和 [Causal Forcing](https://github.com/thu-ml/Causal-Forcing) 的官方 README 都链接了我开发的 ComfyUI 集成。

[English](README.md) · [日本語](README_ja.md) · [Hugging Face](https://huggingface.co/GeneLab) · [Zenn](https://zenn.dev/genelab_999) · [X](https://x.com/geneLab_999)

## 近期发布

### 新的 ComfyUI 工具 — 分割、音频处理与3D

- **[XiaomiLens](https://github.com/hiroki-abe-58/ComfyUI-XiaomiLens)：** 用自然语言指定目标，输出原图尺寸的实例掩码和边界框。[SDPA 回退修复](https://github.com/SeerRay-Lab/Xiaomi-Lens-0/pull/3)已合并到上游，降低了无法使用 flash-attn 时掩码解码器的显存占用。
- **[DBS](https://github.com/hiroki-abe-58/ComfyUI-DBS) · [VoxLock](https://github.com/hiroki-abe-58/ComfyUI-VoxLock) · [MimeticA0](https://github.com/hiroki-abe-58/ComfyUI-MimeticA0)：** 分离音乐、音效和对话，提取目标说话人的声音，以及从文本生成48 kHz立体声音乐。
- **[S2Tok](https://github.com/hiroki-abe-58/ComfyUI-S2Tok) · [EmbeddingGemma2](https://github.com/hiroki-abe-58/ComfyUI-EmbeddingGemma2) · [SyncReward](https://github.com/hiroki-abe-58/ComfyUI-SyncReward)：** 静态场景的3D Gaussian重建、文本/图像/视频/音频嵌入比较，以及音视频一致性评分。

### [sokudan](https://github.com/hiroki-abe-58/sokudan) — 不生成文本的日语判断模型

一个 314.6M 参数的 ModernBERT-ja 模型，**一次前向传播即可返回带概率的 choice、score 和 bool 类型化答案**。附带 HTTP 服务器、TypeScript SDK 和 CLI；在受支持的 Apple Silicon Mac 上使用 MLX 推理，在 CUDA / CPU 上使用 PyTorch 推理。

**v0.3.0 通过五个渠道发布：** [PyPI](https://pypi.org/project/sokudan/) · [npm](https://www.npmjs.com/package/sokudan) · [Homebrew tap](https://github.com/hiroki-abe-58/sokudan/blob/main/Formula/sokudan.rb) · [Scoop bucket](https://github.com/hiroki-abe-58/sokudan/blob/main/bucket/sokudan.json) · [GHCR](https://github.com/hiroki-abe-58/sokudan/pkgs/container/sokudan)。

npm 包同时包含 CLI 封装和类型化 HTTP SDK。Homebrew 和 Scoop 安装的是启动器；容器面向 Linux amd64 CPU。CI 覆盖安装、SDK 与服务器的集成，以及在容器中运行模型推理。[安装指南](https://github.com/hiroki-abe-58/sokudan/blob/main/docs/distribution.md) · [模型权重](https://huggingface.co/GeneLab/sokudan-ja-310m)

### [ComfyUI-JoyAI-Video-Edit](https://github.com/hiroki-abe-58/ComfyUI-JoyAI-Video-Edit) — 用文本指令编辑视频

JoyAI-Video-Edit 的非官方集成，带有常驻的 WSL2 worker、模型加载/卸载控制、取消功能和内存保护。**v0.1.0 预发布版**，在 Windows 11 + RTX 5090 上测试：840×480 横屏输出，两步推理，最多 600 帧输入。

验证的对照对象是应用了相同低内存放置补丁的参考实现；未经修改的上游端到端运行因资源不足而未能完成。正式运行的输出无法逐位复现。[安装与验证范围](https://github.com/hiroki-abe-58/ComfyUI-JoyAI-Video-Edit#readme)

## 项目

我会把代码、安装说明和实测结果一起公开。硬件、输入、与上游的差异以及未测试的路径，都写在各项目的 README 中。ComfyUI 集成属于社区项目；上游的代码和权重沿用各自的许可证。

### 日语语言模型 · 从零训练

**1LM → 2LM → 3LM** 在单台机器上依次探索字符级分词、子词和现代解码器架构。基础模型从零训练；GAL 变体研究角色（persona）微调与通用能力之间的权衡。

| 系列 | 重点 | 仓库 |
|---|---|---|
| 1LM · 11.5M | 字符级 mini-GPT | [MLX](https://github.com/hiroki-abe-58/1LM) · [Blackwell](https://github.com/hiroki-abe-58/1LM-Blackwell) |
| 2LM · 13.81M | SentencePiece、对话数据与固定评测 | [MLX](https://github.com/hiroki-abe-58/2LM-MLX) · [Blackwell](https://github.com/hiroki-abe-58/2LM-Blackwell) |
| 3LM · 35.66M | RoPE、RMSNorm、SwiGLU 与通宵预训练 | [MLX](https://github.com/hiroki-abe-58/3LM-MLX) · [权重](https://huggingface.co/GeneLab/3LM-MLX) |
| GAL 变体 | 角色数据、微调与能力退化测量 | [2LM MLX](https://github.com/hiroki-abe-58/2LM-MLX-GAL) · [2LM Blackwell](https://github.com/hiroki-abe-58/2LM-Blackwell-GAL) · [3LM MLX](https://github.com/hiroki-abe-58/3LM-MLX-GAL) · [权重](https://huggingface.co/GeneLab/3LM-MLX-GAL) |

### 语音

| 项目 | 提供的功能 |
|---|---|
| [Qwen3-TTS-JP](https://github.com/hiroki-abe-58/Qwen3-TTS-JP) | Windows 原生 TTS、声音设计与声音克隆；多语言 Web UI 和 Whisper 转写。 |
| [Qwen3-TTS-Mac-GeneLab](https://github.com/hiroki-abe-58/Qwen3-TTS-Mac-GeneLab) | 面向 Apple Silicon 的 TTS，支持 MLX / PyTorch、量化与声音克隆。 |
| [Style-BERT-VITS2-GeneLab-Blackwell](https://github.com/hiroki-abe-58/Style-BERT-VITS2-GeneLab-Blackwell) | Windows 原生的 Blackwell 支持，带 CPU/GPU 回退。 |

### ComfyUI · 视频、图像、音频与3D

**已在 [ComfyUI Registry](https://registry.comfy.org/) 发布21个节点包**（截至2026年10月20日，发布者：`hiroki-abe-58`）。项目涵盖生成、编辑、分析和3D重建，以下列出主要项目。

“上游”栏区分已合并的代码修复、官方README收录和集成所基于的项目。

| 领域 | 项目 | 重点 | 上游 |
|---|---|---|---|
| 实例分割 | [XiaomiLens](https://github.com/hiroki-abe-58/ComfyUI-XiaomiLens) | 自然语言指定目标，输出原图尺寸的掩码和边界框。 | 代码修复已合并：[Xiaomi-Lens-0 #3](https://github.com/SeerRay-Lab/Xiaomi-Lens-0/pull/3) |
| 音源分离与说话人提取 | [DBS](https://github.com/hiroki-abe-58/ComfyUI-DBS) · [VoxLock](https://github.com/hiroki-abe-58/ComfyUI-VoxLock) | 分离音乐、音效和对话，以及提取目标说话人的声音。 |  |
| 多模态嵌入 | [EmbeddingGemma2](https://github.com/hiroki-abe-58/ComfyUI-EmbeddingGemma2) | 将文本、图像、视频和音频嵌入同一空间，进行相似度比较和候选选择。 |  |
| 流式视频 | [DuoMatching](https://github.com/hiroki-abe-58/ComfyUI-DuoMatching) · [SGFPlus](https://github.com/hiroki-abe-58/ComfyUI-SGFPlus) | 蒸馏模型的逐帧生成，以及使用滚动缓存的自回归视频生成。 |  |
| 3D重建 | [S2Tok](https://github.com/hiroki-abe-58/ComfyUI-S2Tok) | 从视频帧重建静态场景的3D Gaussians；标准SPLAT输出。 |  |
| 音视频评估 | [SyncReward](https://github.com/hiroki-abe-58/ComfyUI-SyncReward) | 一致性评分与候选选择；复现官方1,000片段基准。 |  |
| 土耳其语语音 | [EMALightning](https://github.com/hiroki-abe-58/ComfyUI-EMALightning) · [Antalia](https://github.com/hiroki-abe-58/ComfyUI-Antalia) | 带文本规范化的48 kHz TTS；EMA Lightning还提供单词时间戳。 |  |
| 语音与歌声 | [SemBridge](https://github.com/hiroki-abe-58/ComfyUI-SemBridge) | 中英文语音、乐谱驱动的歌唱与混合音频；标准 AUDIO 输出。 | 可复现性修复已合并：[SemBridge #2](https://github.com/ASLP-lab/SemBridge/pull/2) |
| 表现力语音 | [drama3-small](https://github.com/hiroki-abe-58/ComfyUI-drama3-small) | 日英双语声音生成与克隆、语气控制和长文本生成。 | 基于 [pentaCoxian/ComfyUI-drama3-small](https://github.com/pentaCoxian/ComfyUI-drama3-small) |
| 图像编辑 | [EditUtils](https://github.com/hiroki-abe-58/ComfyUI-EditUtils) | 多模型编辑工具，包括 Qwen-Image 2.1、FLUX.3 Klein 布局编辑与 alpha 清理。 | 基于 [lrzjason/ComfyUI-EditUtils](https://github.com/lrzjason/ComfyUI-EditUtils) |
| 布局互操作 | [FLUX 3 LayoutKit](https://github.com/hiroki-abe-58/ComfyUI-Flux3-LayoutKit) | FLUX 3 Image Klein 的坐标转换、严格的布局表验证与预览。 | |
| 视频编辑 | [JoyAI-Video-Edit](https://github.com/hiroki-abe-58/ComfyUI-JoyAI-Video-Edit) | 基于指令的编辑与常驻 worker。 | |
| 快速视频生成 | [SparkDiffusion](https://github.com/hiroki-abe-58/ComfyUI-SparkDiffusion) · [LongLive-Plug](https://github.com/hiroki-abe-58/ComfyUI-LongLive-Plug) | 稀疏注意力、少步采样，以及适配器/调度器的验证。 | 已合并：[SparkDiffusion #17](https://github.com/AlibabaResearch/SparkDiffusion/pull/17) · [LongLive #107](https://github.com/NVlabs/LongLive/pull/107) |
| 视频注意力 | [MonarchRT](https://github.com/hiroki-abe-58/ComfyUI-MonarchRT) | Monarch 矩阵注意力与相同权重的稠密基线对比。 | |
| 因果视频生成 | [CausalForcing](https://github.com/hiroki-abe-58/ComfyUI-CausalForcing) · [NVIDIA-CMD](https://github.com/hiroki-abe-58/ComfyUI-NVIDIA-CMD) | 自回归生成、图生视频与长序列 rollout。 | 在 [Causal Forcing](https://github.com/thu-ml/Causal-Forcing) 的 News 中介绍 |
| 说话人头像 | [LeapTalk](https://github.com/hiroki-abe-58/ComfyUI-LeapTalk) · [TBDub](https://github.com/hiroki-abe-58/ComfyUI-TBDub) | 语音驱动的人像视频与视频重新配音。 | 已合并：[LeapTalk #6](https://github.com/zhangrongxiang/LeapTalk/pull/6) |
| 图像生成 | [LoopedDiT](https://github.com/hiroki-abe-58/ComfyUI-LoopedDiT) · [ScaleRAE](https://github.com/hiroki-abe-58/ComfyUI-ScaleRAE) | LoopedDiT的像素空间扩散，以及ScaleRAE基于WebSSL的文生图。 | |
| 图像修复 | [PixRestore](https://github.com/hiroki-abe-58/ComfyUI-PixRestore) · [MiRipple](https://github.com/hiroki-abe-58/ComfyUI-MiRipple) | 单步修复，以及经过验证的本地伪影修复。 | |
| 音乐 | [AceMusic](https://github.com/hiroki-abe-58/ComfyUI-AceMusic) · [MimeticA0](https://github.com/hiroki-abe-58/ComfyUI-MimeticA0) | ACE-Step歌曲生成与编辑，以及mimetic-a0的48 kHz立体声音乐生成。 | |
| Windows 环境搭建 | [Win-Blackwell](https://github.com/hiroki-abe-58/ComfyUI-Win-Blackwell) | 面向 RTX 50 系列 GPU 的 ComfyUI 安装与经过测试的工作流。 | |

### Web、桌面与开发者工具

| 项目 | 提供的功能 |
|---|---|
| [gassan](https://github.com/hiroki-abe-58/gassan) | 基于原生 `<dialog>` 的 React 模态框组件，提供无障碍的激活门控和明确的关闭原因。 |
| [lensing](https://github.com/hiroki-abe-58/lensing) | 无依赖的 JavaScript/CSS 玻璃折射效果，基于有符号距离场和斯涅尔定律。 |
| [MermGraph](https://github.com/hiroki-abe-58/MermGraph) | 基于 Tauri 的 Mermaid 编辑器，支持实时预览和 PNG/SVG 导出。 |
| [VMagic](https://github.com/hiroki-abe-58/VMagic) | 基于 Tauri 的视频转换工具，集成 FFmpeg、RIFE 插帧和 Real-ESRGAN 超分辨率。 |
| [aitxt](https://github.com/hiroki-abe-58/aitxt) | 通过 OpenAI、Anthropic 和 Gemini API 进行文本处理、辅助开发工作的 Go CLI。 |
| [RustConv / dtx](https://github.com/hiroki-abe-58/RustConv) | 用于转换、查询、校验和合并结构化数据的 Rust CLI。 |
| [imgai](https://github.com/hiroki-abe-58/imgai) · [ghstat](https://github.com/hiroki-abe-58/ghstat) | 用于批量图像/EXIF 处理和 GitHub 统计的 Go CLI。 |

## 技术栈

**语言与脚本**

![Python](https://img.shields.io/badge/Python-1F2937?style=flat-square&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-1F2937?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-1F2937?style=flat-square&logo=javascript&logoColor=white)
![Go](https://img.shields.io/badge/Go-1F2937?style=flat-square&logo=go&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-1F2937?style=flat-square&logo=rust&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-1F2937?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1F2937?style=flat-square&logo=css&logoColor=white)
![Shell](https://img.shields.io/badge/Shell-1F2937?style=flat-square&logo=gnubash&logoColor=white)
![PowerShell](https://img.shields.io/badge/PowerShell-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)

**AI 与模型运行时**

![PyTorch](https://img.shields.io/badge/PyTorch-1F2937?style=flat-square&logo=pytorch&logoColor=white)
![MLX](https://img.shields.io/badge/MLX-1F2937?style=flat-square&logo=apple&logoColor=white)
![Transformers](https://img.shields.io/badge/Transformers-1F2937?style=flat-square&logo=huggingface&logoColor=white)
![Diffusers](https://img.shields.io/badge/Diffusers-1F2937?style=flat-square&logo=huggingface&logoColor=white)
![ComfyUI](https://img.shields.io/badge/ComfyUI-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![Gradio](https://img.shields.io/badge/Gradio-1F2937?style=flat-square&logo=gradio&logoColor=white)
![CUDA](https://img.shields.io/badge/CUDA-1F2937?style=flat-square&logo=nvidia&logoColor=white)
![Triton](https://img.shields.io/badge/Triton-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)

**Web 与桌面**

![React](https://img.shields.io/badge/React-1F2937?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-1F2937?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-1F2937?style=flat-square&logo=tailwindcss&logoColor=white)
![Tauri](https://img.shields.io/badge/Tauri-1F2937?style=flat-square&logo=tauri&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-1F2937?style=flat-square&logo=nodedotjs&logoColor=white)
![Deno](https://img.shields.io/badge/Deno-1F2937?style=flat-square&logo=deno&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-1F2937?style=flat-square&logo=hono&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-1F2937?style=flat-square&logo=fastapi&logoColor=white)

**构建、分发与平台**

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
<summary>更多库、API 与开发工具</summary>

**模型工具**

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

**科学计算与媒体**

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

**UI、图形与服务**

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

**CLI、API 与原生代码**

![Cobra](https://img.shields.io/badge/Cobra-1F2937?style=flat-square&logo=go&logoColor=white)
![Clap](https://img.shields.io/badge/Clap-1F2937?style=flat-square&logo=rust&logoColor=white)
![Tokio](https://img.shields.io/badge/Tokio-1F2937?style=flat-square&logo=rust&logoColor=white)
![Serde](https://img.shields.io/badge/Serde-1F2937?style=flat-square&logo=rust&logoColor=white)
![OpenAI API](https://img.shields.io/badge/OpenAI%20API-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![Anthropic API](https://img.shields.io/badge/Anthropic%20API-1F2937?style=flat-square&logo=anthropic&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini%20API-1F2937?style=flat-square&logo=googlegemini&logoColor=white)

**测试与打包**

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

**操作系统**

![Windows](https://img.shields.io/badge/Windows-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![WSL2](https://img.shields.io/badge/WSL2-1F2937?style=flat-square&logo=linux&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-1F2937?style=flat-square&logo=linux&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-1F2937?style=flat-square&logo=ubuntu&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-1F2937?style=flat-square&logo=macos&logoColor=white)

</details>

以上技术用于我的 [ML 项目](https://github.com/hiroki-abe-58/sokudan)、[React 库](https://github.com/hiroki-abe-58/gassan)、[桌面应用](https://github.com/hiroki-abe-58/VMagic)、[Web 工具](https://github.com/hiroki-abe-58/MermGraph) 和 [Go CLI](https://github.com/hiroki-abe-58/aitxt)。Docker Compose 也是我日常开发流程的一部分。主要硬件：RTX 5090（Blackwell）和 Apple Silicon。没有品牌图标的徽章使用通用的代码图标。

## 开源贡献

**已合并到上游的推理修复**

- **Xiaomi-Lens-0：** [在 flash-attn 不可用时回退到 SDPA](https://github.com/SeerRay-Lab/Xiaomi-Lens-0/pull/3)，避免掩码解码器中注意力权重导致的二次方内存增长。在 Windows / RTX 5090 上，3 MP掩码处理新增的峰值显存从18.02 GB降至2.28 GB；token和边界框保持一致，掩码边缘存在细微差异。
- **SemBridge：** [移除编解码器 Snake 激活函数的 TorchScript 装饰器](https://github.com/ASLP-lab/SemBridge/pull/2)，修复相同输入和seed在加载后首次生成与后续调用之间音频不一致的问题。在测试环境中验证了重复输出一致。

**LLM 推理与可复现性**

- **Project Maya：** [编写了启用 CPU lane 时跨重启复现贪心输出的配置文档](https://github.com/mw00/project-maya/pull/224)，已合并。研究了 CPU/GPU 舍入差异与专家分配的影响，并在 RTX 5090 上验证了使全部 70/70 组 token 序列一致的配置。[实验与测量结果](https://github.com/hiroki-abe-58/moe-tiering-lab/tree/main/results/phase4)。

**图像与视频生成**

- **DMAD**（用于快速图像与视频生成的蒸馏方法）：[让 `--low-vram` 可在 Windows 上使用](https://github.com/Yzmblog/DMAD/pull/6)，已合并，并在 README 的 News 中致谢。
- **SparkDiffusion、LongLive 和 LeapTalk：** 为我的 ComfyUI 集成添加的 README 条目已合并（见上方 ComfyUI 表格）。
- **Mi-Ripple：** 在验证 ComfyUI 集成时发现问题，提交了 [OpenCV 运行时处理](https://github.com/miyang-ai/Mi-Ripple/pull/2) 的修复（待合并）。

**决策模型**

针对回答顺序敏感性的可复现检查：

- **Laya：** [score 位置偏差报告](https://github.com/NandhaKishorM/laya/issues/131)、[回归检查](https://github.com/NandhaKishorM/laya/pull/259)、[非英语输入](https://github.com/NandhaKishorM/laya/pull/650) 和 [choice 问题](https://github.com/NandhaKishorM/laya/pull/753)。
- **kev / lev：** [kev 的测量](https://github.com/jaredpalmer/kev/issues/161)、[lev 的测量](https://github.com/Abhinavexists/lev/issues/1) 和 [呈现检查 / 顺序平均](https://github.com/Abhinavexists/lev/pull/2)。

## 研究

**[DiM-2](https://doi.org/10.5281/zenodo.18689888)** 探索将 Mamba-2 / Structured State Space Duality 用于图像和视频扩散模型。这些预印本提出的是架构方案和实验方向；实现结果另行在上述开源仓库中报告。

<details>
<summary>DiM-2 / SSD 相关预印本</summary>

| 预印本 | 方向 |
|---|---|
| [SSD-CM](https://doi.org/10.5281/zenodo.18690580) | 少步一致性蒸馏 |
| [SSD-Control](https://doi.org/10.5281/zenodo.18690631) | 深度、姿态与边缘条件控制 |
| [SSD-Portrait](https://doi.org/10.5281/zenodo.18690678) | 音频驱动人像与口型同步 |
| [SSD-SR](https://doi.org/10.5281/zenodo.18697475) | 图像与视频超分辨率 |
| [SSD-Flow](https://doi.org/10.5281/zenodo.18697643) | 基于 Mamba-2 的流匹配 |
| [SSD-Edit](https://doi.org/10.5281/zenodo.18697566) | 指令引导的图像与视频编辑 |

</details>

## 写作与支持

我用日语和英语撰写关于实现与实验的文章。

[Zenn](https://zenn.dev/genelab_999) · [Qiita](https://qiita.com/GeneLab_999) · [note](https://note.com/genelab_999) · [Medium](https://medium.com/@genelab_999) · [dev.to](https://dev.to/genelab_999) · [X](https://x.com/geneLab_999)

如果这些工具为你节省了时间，[请我喝杯咖啡，支持我持续维护它们](https://www.buymeacoffee.com/genelab)。

<details>
<summary>GitHub 动态</summary>

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
