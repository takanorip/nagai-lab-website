---
title: 家庭用ロボットの自律化に向けた動作の学習
subTitle: 遠隔操作から動作を学習するロボット
mainVisualUrl: /assets/projects/minamisaka_h29/haikei.jpg
author: 南坂 雅人 (Masato Minamisaka)
year: 2017
thumbnail: minamisaka_h29.jpg
layout: ../../layouts/project.astro
---

## 概要

現在、自動車は我々の生活にとって必要不可欠なものとなっている。自動車の機能の 1 つとして各メーカー先進運転支援システム(ADAS)の開発に力を入れている。本研究では PredNet をマルチモーダル化することにより、自動車における自然画像と車両に取り付けられた様々な車両情報を統合することで自動車の動作を予測を行う。このモデルの解明、開発で ADAS の発展、さらには人間の予測のメカニズムの解明の一助になることを目指している。  
また各ドライバーごとに適した学習を行うことで、アシスト機能の一環として自動車がパートナーとなり楽しい運転ができるようになることを考えている。

## 背景

近年、自動車は ADAS の開発が盛んである。ADAS は運転時における負担や事故軽減を目的として開発されている。ADAS の効果によりドライバーのうっかりミスなどによる事故の減少は顕著である。しかし現状の ADAS が操作、警告を出す際は、その事象が発生してから警告を出しているため、どうしてもドライバーの判断が間に合わない場合が発生してしまう。今では逆に装備されていない自動車の方が少ない感がする自動ブレーキ（プリクラッシュブレーキ）を例に挙げる。  
人が運転しているとき歩行者の動きなどを見て飛び出しそうかなどを判断して減速などをするが自動ブレーキの場合、歩行者が実際に自動車の目の前に飛び出さないと反応することがない。  
そこで自動車の行動を予測することで現状の ADAS よりも早いタイミングで警告、操作をすることができるようになり、さらなる負担、事故軽減が可能になると考えられる。

![](/assets/projects/minamisaka_h29/toyota_safety_sense.png)
_交通事故総合分析センター(ITARDA)の事故データをもとにトヨタが独自に算出(2017)_

## PredNet とは

PredNet とは神経科学で大脳皮質における予測符号化の概念に触発された予測ニューラルネットワークである。入力画像に対して 1 フレーム先の画像を出力するように学習されている。ネットワークは画像特徴抽出に適した畳み込みニューラルネットワーク(CNN)と系列データに適した長短期記憶(LSTM)を結合した畳み込み LSTM(Convolutional LSTM)が主に用いられている。

### 予測符号化とは

予測符号化(predictive coding)とは人間の脳における 1 つの仮定で、脳に入ってくる感覚刺激の近い将来の予測を絶えず行っているというものである。神経科学分野においても一定の支持を得ている。

![](/assets/projects/minamisaka_h29/predict_coding_image.png)
_予測符号化_

![](/assets/projects/minamisaka_h29/prednet.png)
_PredNet_

## 提案モデル

画像、センサが個々に LSTM を持ち、LSTM 内部のメモリセルでマルチモーダル情報を統合する。動画像には潜在的に速度、操舵角などの情報が含まれており動画像からそれらの値を推定することが可能である。しかし、明確にそれらの情報を与えることで動画像の予測精度が上げれるものと考えられる。

### モデル詳細

準備中

![](/assets/projects/minamisaka_h29/MPN.png)
_提案モデル_

## データセット

学習に必要となるデータは自動車の走行画像及び走行中のセンサ情報（速度や操舵角など）である。これらのデータは取得時間が同期されたものを使用する。

![](/assets/projects/minamisaka_h29/dataset_ex1.png)
![](/assets/projects/minamisaka_h29/dataset_ex2.png)
![](/assets/projects/minamisaka_h29/dataset_ex3.png)
_動画像例_

![](/assets/projects/minamisaka_h29/sensor.svg)
_センサ例_

### データセット詳細

- 動画像(10fps): 元動画(640×480)(15fps)をアップサンプリングしたのちにダウンサンプリングし中央付近をトリミングした静止画像(160×128)(10fps)へ変更
- センサ(10Hz)

## 実験

### 実験条件

- 正解データである 1 フレーム先の画像の各ピクセルの平均二乗誤差(MSE)の 10 フレームの合計値を最小化
- 最適化アルゴリズム：Adaptive Moment Estimation(Adam)
- chainer=1.24.0

### 実験結果

実験中

## これから

- ネットワーク内部の解析
- 画像とセンサの結合部分のモデル構造の検討、改良
- 実際に ADAS への応用

## 参考文献

1. ["Deep Predictive Coding Networks for Video Prediction and Unsupervised Learning"](https://coxlab.github.io/prednet/), 2016
2. ["Brain4cars: Car That Knows Before You Do via Sensory-Fusion Deep Learning Architecture"](https://arxiv.org/abs/1601.00740), 2016
3. ["Convolution LSTM Network: A Machine Learning Approach for Precitation Nowcasting"](https://arxiv.org/abs/1506.04214), 2015
4. [「大脳皮質における予測符号化を模した動画像予測モデルと脳活動の相関に関する考察」](https://kaigi.org/jsai/webprogram/2017/pdf/262.pdf), 2017
5. [https://github.com/quadjr/PredNet](https://github.com/quadjr/PredNet)
