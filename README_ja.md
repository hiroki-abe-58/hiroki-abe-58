![雲海と朝日に照らされた雪山の稜線](assets/header.jpg)

# GeneLab · Hiroki Abe

**日本語の生成AIを、自分のマシンで。**

東京を拠点に活動するAIエンジニア・技術コンサルタントです。ローカルAIツール、日本語言語モデルの学習、研究実装のアプリケーション化に取り組んでいます。Windows・Linux・Apple Siliconで実際に使えるところまで整え、コードと検証結果を公開しています。

[English](README.md) · [Hugging Face](https://huggingface.co/GeneLab) · [Zenn](https://zenn.dev/genelab_999) · [X](https://x.com/geneLab_999)

## 最近の公開成果

### [sokudan](https://github.com/hiroki-abe-58/sokudan) — 文章を生成せず、日本語で判断するモデル

ModernBERT-jaをベースにした314.6Mパラメータの意思決定モデルです。**1回のフォワードパスで、choice・score・boolの型付き回答と確率を返します。** HTTPサーバー、TypeScript SDK、CLIを提供し、対応するApple Silicon MacではMLX、CUDA / CPUではPyTorchで推論します。

**v0.3.0を5つの経路で公開：** [PyPI](https://pypi.org/project/sokudan/) · [npm](https://www.npmjs.com/package/sokudan) · [Homebrew tap](https://github.com/hiroki-abe-58/sokudan/blob/main/Formula/sokudan.rb) · [Scoop bucket](https://github.com/hiroki-abe-58/sokudan/blob/main/bucket/sokudan.json) · [GHCR](https://github.com/hiroki-abe-58/sokudan/pkgs/container/sokudan)。

npm版はCLIラッパーと型付きHTTP SDKを同梱。HomebrewとScoopはランチャー形式、コンテナはLinux amd64 CPU向けです。CIでは導入確認、SDKとサーバーの連携、コンテナでの実モデル推論を検証しています。[導入ガイド](https://github.com/hiroki-abe-58/sokudan/blob/main/docs/distribution.md) · [モデルの重み](https://huggingface.co/GeneLab/sokudan-ja-310m)

### [ComfyUI-JoyAI-Video-Edit](https://github.com/hiroki-abe-58/ComfyUI-JoyAI-Video-Edit) — テキスト指示で動画を編集

JoyAI-Video-Editの非公式ComfyUI統合です。WSL2の常駐ワーカー、モデルのロード・アンロード、キャンセル、メモリ使用量の監視を実装しました。**v0.1.0プレリリース**として、Windows 11・RTX 5090で検証。横長840×480出力、2ステップ推論、入力は最大600フレームに対応します。

検証対象は同じ省メモリ配置パッチを適用した参照実装です。未改変の公式実装によるエンドツーエンド実行はリソース不足で未実施で、通常実行の出力もビット単位では再現しません。[セットアップと検証範囲](https://github.com/hiroki-abe-58/ComfyUI-JoyAI-Video-Edit#readme)

## プロジェクト

コード・導入手順・測定結果をセットで公開しています。使用ハードウェア、入力条件、上流との差分、未検証の経路は各リポジトリに記載しています。ComfyUI統合はコミュニティによる非公式実装で、上流のコードと重みにはそれぞれのライセンスが適用されます。

### 日本語言語モデル · ゼロからの学習

**1LM → 2LM → 3LM**では、1台のマシンで文字単位のトークン化、サブワード、現代的なデコーダー構造を順に検証。ベースモデルはゼロから学習し、GAL派生版ではキャラ付けと一般的な能力のトレードオフを測っています。

| シリーズ | テーマ | リポジトリ |
|---|---|---|
| 1LM · 11.5M | 文字単位のmini-GPT | [MLX](https://github.com/hiroki-abe-58/1LM) · [Blackwell](https://github.com/hiroki-abe-58/1LM-Blackwell) |
| 2LM · 13.81M | SentencePiece・対話データ・固定評価 | [MLX](https://github.com/hiroki-abe-58/2LM-MLX) · [Blackwell](https://github.com/hiroki-abe-58/2LM-Blackwell) |
| 3LM · 35.66M | RoPE・RMSNorm・SwiGLU・夜間事前学習 | [MLX](https://github.com/hiroki-abe-58/3LM-MLX) · [重み](https://huggingface.co/GeneLab/3LM-MLX) |
| GAL派生版 | ペルソナデータ・追加学習・能力の変化 | [2LM MLX](https://github.com/hiroki-abe-58/2LM-MLX-GAL) · [2LM Blackwell](https://github.com/hiroki-abe-58/2LM-Blackwell-GAL) · [3LM MLX](https://github.com/hiroki-abe-58/3LM-MLX-GAL) · [重み](https://huggingface.co/GeneLab/3LM-MLX-GAL) |

### 音声合成

| プロジェクト | 提供するもの |
|---|---|
| [Qwen3-TTS-JP](https://github.com/hiroki-abe-58/Qwen3-TTS-JP) | Windowsネイティブの音声合成・Voice Design・Voice Clone、多言語Web UI、Whisper文字起こし。 |
| [Qwen3-TTS-Mac-GeneLab](https://github.com/hiroki-abe-58/Qwen3-TTS-Mac-GeneLab) | Apple Silicon向けMLX / PyTorch構成、量子化、ボイスクローン。 |
| [Style-BERT-VITS2-GeneLab-Blackwell](https://github.com/hiroki-abe-58/Style-BERT-VITS2-GeneLab-Blackwell) | WindowsネイティブのBlackwell対応、CPU/GPUフォールバック。 |

### ComfyUI · 動画・画像・音楽

| 分野 | プロジェクト | テーマ |
|---|---|---|
| 動画編集 | [JoyAI-Video-Edit](https://github.com/hiroki-abe-58/ComfyUI-JoyAI-Video-Edit) | テキスト指示による編集と常駐ワーカー。 |
| 動画の高速生成 | [SparkDiffusion](https://github.com/hiroki-abe-58/ComfyUI-SparkDiffusion) · [LongLive-Plug](https://github.com/hiroki-abe-58/ComfyUI-LongLive-Plug) | 疎な注意機構、少ステップ推論、アダプターとスケジューラーの検証。 |
| 動画の注意機構 | [MonarchRT](https://github.com/hiroki-abe-58/ComfyUI-MonarchRT) | 同じ重みのdense基準とMonarch行列の注意機構を比較。 |
| 因果的な動画生成 | [CausalForcing](https://github.com/hiroki-abe-58/ComfyUI-CausalForcing) · [NVIDIA-CMD](https://github.com/hiroki-abe-58/ComfyUI-NVIDIA-CMD) | 自己回帰生成、画像からの動画生成、長尺ロールアウト。 |
| 顔動画・吹き替え | [LeapTalk](https://github.com/hiroki-abe-58/ComfyUI-LeapTalk) · [TBDub](https://github.com/hiroki-abe-58/ComfyUI-TBDub) | 音声駆動のポートレートと動画のリダビング。 |
| 画像生成 | [LoopedDiT](https://github.com/hiroki-abe-58/ComfyUI-LoopedDiT) | ピクセル空間の拡散モデルとループ深度の比較。 |
| 画像復元 | [PixRestore](https://github.com/hiroki-abe-58/ComfyUI-PixRestore) · [MiRipple](https://github.com/hiroki-abe-58/ComfyUI-MiRipple) | 1ステップ復元と、検証を伴うローカルのアーティファクト修復。 |
| 音楽 | [AceMusic](https://github.com/hiroki-abe-58/ComfyUI-AceMusic) | ACE-Stepによる楽曲生成・編集・LoRA対応。 |
| Windows環境構築 | [Win-Blackwell](https://github.com/hiroki-abe-58/ComfyUI-Win-Blackwell) | RTX 50シリーズ向けComfyUI導入と検証済みワークフロー。 |

### Web・デスクトップ・開発ツール

| プロジェクト | 提供するもの |
|---|---|
| [gassan](https://github.com/hiroki-abe-58/gassan) | ネイティブの`<dialog>`を使うReactモーダル。アクセシビリティに配慮した起動制御と、閉じた理由の明示。 |
| [lensing](https://github.com/hiroki-abe-58/lensing) | 距離場とスネルの法則を使う、依存ライブラリ不要のJavaScript/CSSガラス屈折表現。 |
| [MermGraph](https://github.com/hiroki-abe-58/MermGraph) | ライブプレビューとPNG/SVG出力を備えたTauri製Mermaidエディター。 |
| [VMagic](https://github.com/hiroki-abe-58/VMagic) | FFmpeg、RIFEフレーム補間、Real-ESRGAN超解像を統合したTauri製動画変換アプリ。 |
| [aitxt](https://github.com/hiroki-abe-58/aitxt) | OpenAI・Anthropic・Gemini APIを使う、テキスト処理・開発作業向けGo製CLI。 |
| [RustConv / dtx](https://github.com/hiroki-abe-58/RustConv) | 構造化データの変換・検索・検証・結合を行うRust製CLI。 |
| [imgai](https://github.com/hiroki-abe-58/imgai) · [ghstat](https://github.com/hiroki-abe-58/ghstat) | 画像・EXIFの一括処理とGitHub統計を扱うGo製CLI。 |

## 技術スタック

**言語・スクリプト**

![Python](https://img.shields.io/badge/Python-1F2937?style=flat-square&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-1F2937?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-1F2937?style=flat-square&logo=javascript&logoColor=white)
![Go](https://img.shields.io/badge/Go-1F2937?style=flat-square&logo=go&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-1F2937?style=flat-square&logo=rust&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-1F2937?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1F2937?style=flat-square&logo=css&logoColor=white)
![Shell](https://img.shields.io/badge/Shell-1F2937?style=flat-square&logo=gnubash&logoColor=white)
![PowerShell](https://img.shields.io/badge/PowerShell-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)

**AI・モデル実行**

![PyTorch](https://img.shields.io/badge/PyTorch-1F2937?style=flat-square&logo=pytorch&logoColor=white)
![MLX](https://img.shields.io/badge/MLX-1F2937?style=flat-square&logo=apple&logoColor=white)
![Transformers](https://img.shields.io/badge/Transformers-1F2937?style=flat-square&logo=huggingface&logoColor=white)
![Diffusers](https://img.shields.io/badge/Diffusers-1F2937?style=flat-square&logo=huggingface&logoColor=white)
![ComfyUI](https://img.shields.io/badge/ComfyUI-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![Gradio](https://img.shields.io/badge/Gradio-1F2937?style=flat-square&logo=gradio&logoColor=white)
![CUDA](https://img.shields.io/badge/CUDA-1F2937?style=flat-square&logo=nvidia&logoColor=white)
![Triton](https://img.shields.io/badge/Triton-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)

**Web・デスクトップ**

![React](https://img.shields.io/badge/React-1F2937?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-1F2937?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-1F2937?style=flat-square&logo=tailwindcss&logoColor=white)
![Tauri](https://img.shields.io/badge/Tauri-1F2937?style=flat-square&logo=tauri&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-1F2937?style=flat-square&logo=nodedotjs&logoColor=white)
![Deno](https://img.shields.io/badge/Deno-1F2937?style=flat-square&logo=deno&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-1F2937?style=flat-square&logo=hono&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-1F2937?style=flat-square&logo=fastapi&logoColor=white)

**ビルド・配信・実行環境**

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
<summary>ライブラリ・API・開発ツールの一覧</summary>

**モデル周辺**

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

**数値計算・画像・音声**

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

**UI・グラフィックス・サービス**

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

**CLI・API・ネイティブ実装**

![Cobra](https://img.shields.io/badge/Cobra-1F2937?style=flat-square&logo=go&logoColor=white)
![Clap](https://img.shields.io/badge/Clap-1F2937?style=flat-square&logo=rust&logoColor=white)
![Tokio](https://img.shields.io/badge/Tokio-1F2937?style=flat-square&logo=rust&logoColor=white)
![Serde](https://img.shields.io/badge/Serde-1F2937?style=flat-square&logo=rust&logoColor=white)
![OpenAI API](https://img.shields.io/badge/OpenAI%20API-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![Anthropic API](https://img.shields.io/badge/Anthropic%20API-1F2937?style=flat-square&logo=anthropic&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini%20API-1F2937?style=flat-square&logo=googlegemini&logoColor=white)

**テスト・パッケージング**

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

**OS**

![Windows](https://img.shields.io/badge/Windows-1F2937?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNOCA2bC02IDYgNiA2bTgtMTJsNiA2LTYgNk0xNCAzbC00IDE4Ii8%2BPC9zdmc%2B&logoColor=white)
![WSL2](https://img.shields.io/badge/WSL2-1F2937?style=flat-square&logo=linux&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-1F2937?style=flat-square&logo=linux&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-1F2937?style=flat-square&logo=ubuntu&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-1F2937?style=flat-square&logo=macos&logoColor=white)

</details>

[MLプロジェクト](https://github.com/hiroki-abe-58/sokudan)、[Reactライブラリ](https://github.com/hiroki-abe-58/gassan)、[デスクトップアプリ](https://github.com/hiroki-abe-58/VMagic)、[Webツール](https://github.com/hiroki-abe-58/MermGraph)、[Go製CLI](https://github.com/hiroki-abe-58/aitxt)で使用している技術です。Docker Composeも普段の開発で使用しています。主な検証環境はRTX 5090（Blackwell）とApple Silicon。ブランドロゴがないバッジには共通のコードアイコンを使っています。

## オープンソースへの貢献

オープンな意思決定モデルの回答順序への依存を、再現可能なチェックで検証しています。

- **Laya：** [スコアの位置バイアス報告](https://github.com/NandhaKishorM/laya/issues/131)、[回帰チェック](https://github.com/NandhaKishorM/laya/pull/259)、[非英語入力](https://github.com/NandhaKishorM/laya/pull/650)、[選択問題](https://github.com/NandhaKishorM/laya/pull/753)。
- **kev / lev：** [kevでの測定](https://github.com/jaredpalmer/kev/issues/161)、[levでの測定](https://github.com/Abhinavexists/lev/issues/1)、[提示順のチェックと順序平均](https://github.com/Abhinavexists/lev/pull/2)。
- **Mi-Ripple：** ComfyUI統合の検証中に見つけた[OpenCV実行時の問題への修正提案](https://github.com/miyang-ai/Mi-Ripple/pull/2)。

## 研究

**[DiM-2](https://doi.org/10.5281/zenodo.18689888)**では、Mamba-2 / Structured State Space Dualityによる画像・動画の拡散モデルを探求しています。プレプリントではアーキテクチャの提案と実験方針を扱い、実装による検証結果は上記OSSのリポジトリで別途報告しています。

<details>
<summary>DiM-2 / SSDシリーズの関連プレプリント</summary>

| プレプリント | 研究の方向 |
|---|---|
| [SSD-CM](https://doi.org/10.5281/zenodo.18690580) | 少ステップの整合性蒸留 |
| [SSD-Control](https://doi.org/10.5281/zenodo.18690631) | 深度・ポーズ・エッジによる条件付け |
| [SSD-Portrait](https://doi.org/10.5281/zenodo.18690678) | 音声駆動ポートレートとリップシンク |
| [SSD-SR](https://doi.org/10.5281/zenodo.18697475) | 画像・動画の超解像 |
| [SSD-Flow](https://doi.org/10.5281/zenodo.18697643) | Mamba-2によるフローマッチング |
| [SSD-Edit](https://doi.org/10.5281/zenodo.18697566) | 指示に基づく画像・動画編集 |

</details>

## 発信・支援

実装や実験の記録を、日本語と英語で発信しています。

[Zenn](https://zenn.dev/genelab_999) · [Qiita](https://qiita.com/GeneLab_999) · [note](https://note.com/genelab_999) · [Medium](https://medium.com/@genelab_999) · [dev.to](https://dev.to/genelab_999) · [X](https://x.com/geneLab_999)

ツールが役立ったら、[コーヒーで開発を応援](https://www.buymeacoffee.com/genelab)してもらえるとうれしいです。

<details>
<summary>GitHubの活動状況</summary>

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
