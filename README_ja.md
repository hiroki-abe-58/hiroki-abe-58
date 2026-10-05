![朝日に照らされた雲海の上の雪の稜線](assets/header.jpg)

# GeneLab

*[English README](README.md)*

**日本語の生成 AI を、自分のマシンで。**

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

## 自己紹介

- 自分のハードウェアで動く生成 AI ツールを作っています。日本語の音声合成、高速な動画生成と音楽生成のための ComfyUI ノード、RTX 5090（Blackwell）の Windows 環境と Apple Silicon Mac 向けのセットアップなどです。
- 小さな日本語言語モデルを、1 台のマシン（M1 Max、のちに RTX 5090）でゼロから学習しています。一度に変えるのは 1 つだけにして、その変更にどれだけのコストがかかるかを測ります。
- 主張する前に測ります。README の数値は自分で実行したコードの出力で、測っていないものは「測定していない」と書きます。
- 東京在住。Zenn、Qiita、note、dev.to に日本語と英語で書いています。

## ゼロから学習した日本語言語モデル

**1LM → 2LM → 3LM** は、ゼロから作った日本語の GPT 系チャットモデルのシリーズです。事前学習済みのベースモデルも、既存 LLM のファインチューニングも使っていません。各リポジトリに学習コード、CLI、Web GUI が入っています。段階ごとに変数を 1 つだけ変えて測っています。コードは MIT で、学習データは ShareAlike ライセンスがかからないものを選びました。

| 段階 | 変えたこと | パラメータ数 | 結果 | Apple Silicon（MLX、M1 Max） | RTX 5090（Windows ネイティブ、PyTorch） |
|---|---|---|---|---|---|
| **1LM** | 文字単位の mini-GPT、oasst1-ja の 28,616 会話 | 11.5M | 32 分で best val loss 1.857 | [1LM](https://github.com/hiroki-abe-58/1LM) | [1LM-Blackwell](https://github.com/hiroki-abe-58/1LM-Blackwell): 61.3 秒、val loss 1.8677（Mac は 1.8571） |
| **2LM** | SentencePiece のサブワード（語彙 8,000）、Apache-2.0 の対話データ 4 種、4 指標の固定評価 | 13.81M | bits/char 2.584（文字単位のベースラインは 3.282 と 2.809） | [2LM-MLX](https://github.com/hiroki-abe-58/2LM-MLX) | [2LM-Blackwell](https://github.com/hiroki-abe-58/2LM-Blackwell): 78.5 秒、bits/char 2.586 |
| **3LM** | RoPE / RMSNorm / SwiGLU、FineWeb2-ja + 青空文庫の 12 億文字、クラッシュしても再開できる一晩がかりの事前学習 | 35.66M | 8.03 時間で val loss 6.554 → 4.306、再起動 0 回 | [3LM-MLX](https://github.com/hiroki-abe-58/3LM-MLX)（[重み](https://huggingface.co/GeneLab/3LM-MLX)） | |

3LM は 2LM に単純に勝ったわけではありません。2LM 自身の評価セットでは負け（bits/char 2.801 対 2.540）、Web テキストと青空文庫では勝ちました（3.680 対 6.481）。README には両方の結果を載せています。

**GAL 派生版**は、ローカルの Apache-2.0 LLM で生成した架空のギャル口調チャットデータで各ベースモデルをファインチューニングし、そのキャラ付けで一般的な能力がどれだけ落ちるかを測っています。

- **[2LM-MLX-GAL](https://github.com/hiroki-abe-58/2LM-MLX-GAL)**: 2,610 会話、ファインチューニング 40 秒。bits/char は 2.584 から 3.550 に、話題の保持率は 0.733 から 0.267 に変わりました。
- **[2LM-Blackwell-GAL](https://github.com/hiroki-abe-58/2LM-Blackwell-GAL)**: 6,879 会話を 36.7 分で生成し、7.0 秒でファインチューニング。ギャル率 0.74、敬語率 0.00。20 条件のスイープから、崩壊の境界は会話数だけで決まる 1 点ではなく、会話数 × 学習率の面になることがわかりました。
- **[3LM-MLX-GAL](https://github.com/hiroki-abe-58/3LM-MLX-GAL)**: 同じ 2,610 会話で 48 秒。bits/char の悪化は +0.353 で、2LM の +0.970 より小さく済みました。（[重み](https://huggingface.co/GeneLab/3LM-MLX-GAL)）

## 音声合成

- **[Qwen3-TTS-JP](https://github.com/hiroki-abe-58/Qwen3-TTS-JP)**: Qwen3-TTS を Windows ネイティブで動かすフォークです。WSL2、Docker、FlashAttention 2 なしで動きます。10 言語の Web UI（Custom Voice、Voice Design、Voice Clone）と、ボイスクローン用の参照音声を Whisper で自動文字起こしする機能を加え、RTX 50 シリーズ（Blackwell）向けのセットアップ手順も付けています。
- **[Qwen3-TTS-Mac-GeneLab](https://github.com/hiroki-abe-58/Qwen3-TTS-Mac-GeneLab)**: Apple Silicon Mac 向けの Qwen3-TTS です。MLX + PyTorch のデュアルエンジン構成で、速度を出す処理は 8bit/4bit 量子化した MLX、ボイスクローンは PyTorch が担当します。Web UI は 10 言語対応で、Whisper の自動文字起こし付きです。
- **[Style-BERT-VITS2-GeneLab-Blackwell](https://github.com/hiroki-abe-58/Style-BERT-VITS2-GeneLab-Blackwell)**: RTX 5090（Blackwell、sm_120）の GPU で、Windows ネイティブに動く Style-Bert-VITS2 のフォークです。PyTorch nightly cu128 と triton-windows を使い、CPU/GPU の自動フォールバックを備えています。

## ComfyUI カスタムノード

### 最新論文の高速動画生成

最近の論文は、少ステップ蒸留と疎な attention で動画拡散モデルを高速化しています。ここに挙げるノードパックは、それらの手法を RTX 5090（32 GB）1 枚の ComfyUI から動かします。どの README も、実際の重みでテストした範囲とそうでない範囲を分けて書いています。いずれも非公式の統合で、upstream のコードと重みはそれぞれのライセンスに従います。

- **[ComfyUI-SparkDiffusion](https://github.com/hiroki-abe-58/ComfyUI-SparkDiffusion)**: AlibabaResearch の [SparkDiffusion](https://github.com/AlibabaResearch/SparkDiffusion) を Wan2.1 / Wan2.2 で動かします。90〜97 % スパースの RoLA 疎 attention、3 または 4 ステップの CrossDistill サンプリング、FP8 W8A8 の組み合わせです。公式の推論コードを無改変のまま専用の runtime（WSL2、Linux、または実験的に Windows ネイティブ）で実行します。毎回の実行で、全ブロックで RoLA が使われたことと、DiT に CrossDistill のタイムステップが正確に渡ったことを検証し、検証に通らなかった実行は結果ではなくエラーとして報告します。warm 状態の denoise は、14B 720P 3 ステップで 20.0 秒、1.3B 480P 4 ステップで 1.78 秒です。アロケータを調整しないと、同じ 14B の実行に 39〜48 秒かかりました。VRAM が 32 GB を超え、Windows のドライバが警告なしにシステムメモリへ退避させていたためです。論文の最大 265 倍の高速化は再現していません。50 ステップの dense ベースラインを実行していないためです。[Comfy Registry](https://registry.comfy.org/nodes/sparkdiffusion) に `sparkdiffusion` として公開しています。
- **[ComfyUI-LongLive-Plug](https://github.com/hiroki-abe-58/ComfyUI-LongLive-Plug)**: NVlabs の [LongLive-Plug](https://github.com/NVlabs/LongLive/tree/main/LongLive-Plug) の少ステップ用・CFG 用 LoRA アダプタを、ComfyUI 標準の Wan2.1-T2V-14B に適用します。LoRA を 2 つ読み込んで `steps=4` にするだけでは足りません。片方のノードは 2 つのアダプタを upstream の重み（1.0 / 0.5）で適用し、適用範囲をレポートします（アダプタごとに 400/400 ターゲット）。もう片方のノードはサンプリングのレシピを出力し、その 4 ステップ FlowUniPC のスケジュールは CPU 上で upstream のスケジューラとビット単位で一致します。832×480・81 フレームで、4 ステップの実行は end to end で 59.0 秒、公式の 50 ステップ CFG 5 のベースラインは 943.5 秒でした。アダプタなしで単に 4 ステップにすると、ぼやけて残像が出ます。量子化されたベースモデルは、推測で処理せずに拒否します。[Comfy Registry](https://registry.comfy.org/publishers/hiroki-abe-58/nodes/longlive-plug) に `longlive-plug` として公開しています。
- **[ComfyUI-MonarchRT](https://github.com/hiroki-abe-58/ComfyUI-MonarchRT)**: [MonarchRT](https://github.com/Infini-AI-Lab/MonarchRT) の Monarch 行列 attention を、公開されている Self-Forcing の重み（Wan2.1-T2V-1.3B）に training-free で適用し、同じ重み・プロンプト・seed・ノイズの dense ベースラインと並べて実行します。self-attention の呼び出しはすべて数えています。1 本あたり 1,050 回すべてが Monarch の Triton カーネルで実行され、dense は 0 回、フォールバックも 0 回でした。別の経路を通った呼び出しが 1 回でもあれば、ジョブは失敗します。WSL2 の runtime で、generator は約 90 % スパースで 6.60 秒から 4.91 秒（1.34 倍）、約 95 % で 4.17 秒（1.58 倍）になりました。生成結果はピクセル単位で見ると dense の結果から離れていき（PSNR 12.9 dB、SSIM 0.41）、95 % のプロファイルは見てわかるほど品質が落ちます。そのため README では dense と同等の品質だとは主張していません。
- **[ComfyUI-CausalForcing](https://github.com/hiroki-abe-58/ComfyUI-CausalForcing)**: 公式の [Causal Forcing](https://github.com/thu-ml/Causal-Forcing) チェックポイントを動かします。Causal Forcing は Wan2.1-T2V-1.3B を、latent フレームを 1 枚ずつ少ないステップ数で生成する自己回帰モデルに蒸留したものです。Causal Forcing++ の frame-wise 2 ステップと、ベースラインの Causal Forcing frame-wise 4 ステップを並べて実行でき、text-to-video に加えて、2 ステップモデルでは image-to-video にも対応します。同じプロンプトと seed で、公式の `inference.py` とこのパッケージのノイズ・latent・8bit フレームは、両モデルとも一致しました。runner は generator の呼び出し回数（1 本あたり 2 ステップで 65 回、4 ステップで 105 回）を数え、一致しなければジョブを失敗させます。upstream が `strict=False` にフォールバックする場面でも、チェックポイントの部分読み込みは拒否します。WSL2 の runtime で、generator は 2 ステップで 7.05 秒、4 ステップで 10.97 秒でした（1.56 倍、end to end では 1.32 倍）。これはリアルタイム性能や論文のレイテンシの数値ではありません。1 ステップ版と chunk-wise 版のモデルは受け付けますが、まだ実行していません。
- **[ComfyUI-NVIDIA-CMD](https://github.com/hiroki-abe-58/ComfyUI-NVIDIA-CMD)**: NVIDIA CMD を Windows ネイティブで動かす非公式の ComfyUI ノードです。PyTorch SDPA を使い、flash-attn も WSL も使いません。CMD は Cosmos-Predict2.5-2B から蒸留した、少ステップの因果的な image-to-video モデルです。ノードは短い I2V、長尺のロールアウト、カメラ制御に対応しています。KV キャッシュをローカル attention のウィンドウ幅に制限しているので、長尺のロールアウトも 32 GB に収まります。RTX 5090 での実測ピークは 23,852 MiB、長尺の実行 1 回は約 267 秒でした。

### トーキングヘッドと吹き替え

最近の論文による、音声で駆動する顔の動画生成です。どちらのパックも、公式の重みを別の runtime で動かします。どちらも同じ RTX 5090 の Windows ネイティブ環境です。

- **[ComfyUI-LeapTalk](https://github.com/hiroki-abe-58/ComfyUI-LeapTalk)**: 肖像画像 1 枚と音声 1 本から、512×512・25 fps のトーキングヘッド動画を作ります。[SoulX-FlashHead](https://github.com/Soul-AILab/SoulX-FlashHead) をベースにした [LeapTalk](https://github.com/zhangrongxiang/LeapTalk) の、公式の重みと 1 ステップのレシピ（チャンクごとにソルバー 1 ステップ）を使います。同じ肖像と音声で、LeapTalk 自身の `inference.py` とこのノードの 8bit フレームは一致し（234/234 と 850/850）、LoRA の 480 テンソルがすべて適用されたことをジョブごとに検証します。runtime は PyTorch SDPA を使い、Windows ネイティブで動きます。モデルの読み込み後は 28 フレームのチャンクが約 0.45 秒で、25 fps の再生に対して約 62 フレーム/秒の速さです。one-shot モードでは、1 ジョブにつき約 23 秒が起動にかかります。選択式の persistent worker（v0.2）を使うと、9.4 秒の音声で 2 回目以降のジョブが 6.2 秒になりました（one-shot では 36.1 秒）。これらは 1 台のマシンでの数値です。Windows のコミットチャージが高い状態では、クリーンインストールでの確認時に persistent のジョブ 7 件中 5 件がメモリガードに拒否されました。ベンチマークには全試行を載せています。
- **[ComfyUI-TBDub](https://github.com/hiroki-abe-58/ComfyUI-TBDub)**: [TBDub](https://github.com/TaoLiveAIGC/TBDub) の公式 V1.1 Student レシピ（2 ステップ、512×512、25 fps）で、既存の動画を新しい音声で吹き替えます。口元を新しい音声に合わせて再生成し、人物・姿勢・背景はそのまま残します。`full_frame` モードでは MediaPipe が顔を検出し、吹き替えたクロップを元のフレームに貼り戻します。翻訳や音声合成はしません。テスト機では、Windows のコミット上限 93 GiB のうち約 70 GiB を他のアプリが使っていたため、upstream 既定の配置も `--cpu-offload` も、このパックのメモリガードに収まりませんでした。そこで upstream のチェックアウトは書き換えずに実行時パッチを加え、すべてのジョブレポートに記録しています。DiT の重みを層ごとにストリーミングした場合、DiT の 1 回の呼び出しは独立した評価とビット単位で一致しました。フレーム単位の VAE デコードはビット一致せず、公式のデコードとの差は最大 4/255 です。両側に同じパッチを当てると、ラッパーは公式の `inference.py` の出力を、デモの貼り戻し済み 1280×720 フレーム 126 枚まで完全に再現しました。このデモ（音声 5.06 秒）は runtime 内で 98 秒、CUDA メモリの予約ピークは 7.8 GiB でした。これは 1 台のマシン・1 つの入力での数値で、ベンチマークではありません。

### 画像生成と復元

- **[ComfyUI-LoopedDiT](https://github.com/hiroki-abe-58/ComfyUI-LoopedDiT)**: [Looped-DiT](https://github.com/OpenSenseNova/Looped-DiT) を動かします。ピクセル空間で動く text-to-image の拡散 Transformer で、各 denoising ステップの中で共有ブロックのグループを何回か繰り返し実行します。ループ深度はサンプリングのステップ数ではありません。どの画像も公式の Euler 100 ステップ・CFG 6（モデル計算 200 回）で生成し、ループ深度 N は 1 回の計算の中で中間の共有ブロックを何回実行するかだけを変えます。B/16 では N = 1、2、4 で 17、22、32 ブロックです。B/16 の EMA チェックポイントでは、RTX 5090 で比較した 27 枚すべてについて、ノードの出力が 8bit 画像としても float32 の結果としても公式コードとビット単位で一致しました。Loop Sweep ノードは、同じプロンプト・seed・初期ノイズで複数のループ深度を生成し、ラベル付きのグリッドを返します。upstream は `transformers < 5` に固定しています。5.x は末尾の空白を違う形で分割するためですが、ComfyUI は 5.x を入れます。そこでノードはモデル自身の `tokenizer.json` でトークン化し、テスト用の 317 プロンプトすべてで 4.x と一致させました（transformers 5.18 では 301 件が食い違います）。denoising は loops 1 で 7.98 秒、loops 4 で 14.69 秒です。ループ深度を上げれば必ず良くなるわけではありません。あるグリッドでは、プロンプトが提灯 1 つを指定しているのに、loops 2 で 2 つ描かれました。これは目で見た所感で、ベンチマークではありません。
- **[ComfyUI-PixRestore](https://github.com/hiroki-abe-58/ComfyUI-PixRestore)**: [PixRestore](https://github.com/csslc/PixRestore)（arXiv:2608.16793）の公開 1 ステップモデル PixRestore-S を動かします。ノイズ・ぼけ・JPEG 劣化を受けた 512×512 の RGB 画像を、DINOv2 特徴を条件にしたデノイザー 1 回の呼び出しで復元します。公式の 1 ステップ経路はビット単位で再現しています。テスト画像 16 枚すべてで、ノードの 8bit 出力と記録した途中のテンソルが、未改変の公式 `inference.py` を eager モードで実行した結果と一致しました。upstream はいくつかの関数に `@torch.compile` を付けていますが、これには Triton が必要なので、ノードは eager で動かします。compile した経路では、デモ入力 12 枚の 8bit 値の 11 % が最大 5/255 ずれます。RTX 5090 では、初回以降の復元が 1 回あたり約 0.11 秒、CUDA メモリの最大割り当ては 342 MiB でした。合成画像のデモ 12 件では PSNR がすべて上がりましたが、JPEG では +0.3〜0.8 dB にとどまります。この復元は生成的です。ノイズと一緒に細かい質感も消え、ぼけたエッジは、元画像に似ているものの同一ではない細部を作り直して戻ります。upstream の issue には実際に使うと結果が悪いという報告があり、このリポジトリではそれを評価していません。

### 音楽とセットアップ

- **[ComfyUI-AceMusic](https://github.com/hiroki-abe-58/ComfyUI-AceMusic)**: ACE-Step で音楽を生成する 15 個の ComfyUI カスタムノードです。19 言語の歌詞付きで、最長 240 秒のフル楽曲を作れます。カバー、リペイント、延長、編集、リテイク、LoRA の読み込みに対応しています。
- **[ComfyUI-Win-Blackwell](https://github.com/hiroki-abe-58/ComfyUI-Win-Blackwell)**: RTX 50 シリーズ（sm_120）向けに、Windows ネイティブの ComfyUI をワンクリック（.bat / .ps1）で構築するセットアップです。CUDA 13.0、PyTorch nightly cu130、Python 3.13、triton-windows を使います。RTX 5090 で動作確認した 28 個のカスタムノードと、5 つの image-to-video パイプラインが付属します。README は 4 言語です。

## 意思決定モデルと測定

- **[sokudan](https://github.com/hiroki-abe-58/sokudan)**: `pip install sokudan`（v0.3.0、Python 3.11〜3.13）。日本語の System One 意思決定モデルです（314.6M、ModernBERT-ja、Apache-2.0）。テキストを生成せず、1 回のフォワードパスで choice・score・bool の型付き回答を確率付きで返します。重みは v0.2 のもので、8 シードの重み平均です。付属の 300 問の `bench_ja` で 1 回測ると、choice 正解率 0.880、score RPS 0.075、bool AUROC 0.844 でした。`bool` の回答は重みと一緒に配布する 1 つの温度で既定で較正し、`choice` と `score` は較正しません。`sokudan serve` で `/v1/systemone` 互換のサーバーが立ちます。v0.3.0 では Apple Silicon 向けに MLX バックエンドを追加し（macOS 14 以降の arm64 で自動選択）、CUDA / CPU では torch を使います。（[モデル](https://huggingface.co/GeneLab/sokudan-ja-310m)、[PyPI](https://pypi.org/project/sokudan/)）
- **他のオープンな意思決定モデルへの貢献**。議論ではなく、測定で示しています。
  - [Laya](https://github.com/NandhaKishorM/laya): 多言語チェックポイントの score の位置バイアスを報告し（[#131](https://github.com/NandhaKishorM/laya/issues/131)）、それを検出するラベル不要の回帰チェックを追加し（[#259](https://github.com/NandhaKishorM/laya/pull/259)）、そのチェックを英語以外の入力（[#650](https://github.com/NandhaKishorM/laya/pull/650)）と choice の質問（[#753](https://github.com/NandhaKishorM/laya/pull/753)）に広げました。#259、#650、#753 はマージ済みです。
  - [kev](https://github.com/jaredpalmer/kev) と [lev](https://github.com/Abhinavexists/lev): 同じチェックで、score の質問の順序への感度を測りました（[kev#161](https://github.com/jaredpalmer/kev/issues/161)、[lev#1](https://github.com/Abhinavexists/lev/issues/1)）。
  - [Lev PR #2](https://github.com/Abhinavexists/lev/pull/2)（オープン中）: Score 向けの提示チェックと、オプトインの順序平均化。順序を反転すると、bench_en での Score の正解率が 6.9 ポイント上がります。

## 研究

**DiM-2 / SSD シリーズ: 効率的な画像・動画生成の探求。**

Mamba-2 と Structured State Space Duality（SSD）についての個人研究です。
これらのプレプリントはアーキテクチャの提案と研究の方向性を述べたもので、
上に挙げた測定済みの OSS 実装とは別物です。

### DiM-2: 画像と動画を統合した拡散モデル

**[DiM-2](https://doi.org/10.5281/zenodo.18689888)** は、空間と時間のモデリングを分け、
SSD ベースの条件付けを行う、Mamba-2 ベースの画像・動画拡散アーキテクチャを提案しています。

レポートでは、アーキテクチャ、その理論的な動機、
提案する実験プロトコルを扱っています。

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.18689888.svg)](https://doi.org/10.5281/zenodo.18689888)

<details>
<summary>関連プレプリント: DiM-2 / SSD の研究方向を広げた 6 本</summary>

| プレプリント | 研究の方向 |
|---|---|
| **[SSD-CM](https://doi.org/10.5281/zenodo.18690580)** | consistency distillation による少ステップ生成。 |
| **[SSD-Control](https://doi.org/10.5281/zenodo.18690631)** | 深度・ポーズ・エッジを条件とする生成。 |
| **[SSD-Portrait](https://doi.org/10.5281/zenodo.18690678)** | 音声駆動のポートレートアニメーションとリップシンク。 |
| **[SSD-SR](https://doi.org/10.5281/zenodo.18697475)** | Mamba-2 による画像・動画の超解像。 |
| **[SSD-Flow](https://doi.org/10.5281/zenodo.18697643)** | Mamba-2 と flow matching による画像生成。 |
| **[SSD-Edit](https://doi.org/10.5281/zenodo.18697566)** | 指示に基づく画像・動画編集。 |

</details>

## 技術スタック

Python、PyTorch、Triton、Hugging Face Transformers、MLX、SentencePiece、ComfyUI、Gradio。RTX 5090（Blackwell）の Windows と WSL2、Apple Silicon。

## 支援のお願い

これらのツールで時間が浮いたら、コーヒー 1 杯分の支援をいただけると、メンテナンスを続ける助けになります。

<a href="https://www.buymeacoffee.com/genelab"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="40"></a>

-- GeneLab（Hiroki Abe）、東京
