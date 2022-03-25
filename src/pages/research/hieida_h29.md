---
title: 社会的感情獲得のための感情モデル
mainVisualUrl: /assets/projects/hieida_h29/haikei.jpg
author: 日永田 智絵 (Chie Hieida)
thumbnail: hieida_h29.jpg
mainPublications:
  - 日永田智絵, 長井隆行, "共感コミュニケーションに向けた感情モデルの提案", HAIシンポジウム2016, P-10, 2016.12.03 HAI-2016 Impressive Poster Award
  - 日永田智絵, 長井隆行, "人－ロボットコミュニケーションのための感情生成モデルの提案", 3D2-OS-37b-1, 第31回人工知能学会全国大会, 2017.05
  - Chie Hieida,Takayuki Nagai, "A Model of Emotion for Empathic Communication", The 12th ACM/IEEE International Conference on Human-Robot Interaction (HRI2017), pp.133-134, March 6-9, 2017
year: 2017
layout: ../../layouts/project.astro
---

## 概要

一般に「ロボット」は心つまり感情のない存在と考えられている．しかし，ロボットが人間社会に受け入れられていくためには，相手の感情を理解・共感し，行動するということが必要である．本研究では，人とロボットが共感し合う未来を目指して，高次な社会的感情をロボットが獲得するための感情モデルの研究を行っている．感情モデルを作ることを通して，人の感情のメカニズムを明らかにするとともに，ロボットに感情モデルを実装し，人を理解し自身の感情を表出する人工物を開発する．

## 感情モデル

認知科学や神経科学の文献を参考に以下のようなモデルを構築した．

#### 1 層：生得的反応層

刺激を受け，身体的反応を行う

#### 2 層：経験層

刺激を受け，経験に基づいて生得的反応を抑制・強化する

#### 3 層：予測層

次元圧縮された身体的反応（情動）と刺激に基づいて原因推論・未来予測を行っている．

### モデルの詳細

第 1 層は反射的に反応する層であり，時間的に処理が最も早いが，エラーも多くなる．それに対し，第 2 層では過去の記憶にアクセスするため，第 1 層からの遅延はあるが，経験に基づいて評価するため，エラーを減らすことができる．この 1 層 2 層から出力された一次表出を次元圧縮したものが情動と定義している．こうして得られた情動と入力信号を使って原因推論をし，未来予測を行う．未来予測の結果を使って最適な行動を出力する．このときの情報がカテゴリとして意識へと昇ったものが感情として認知される．

![提案する感情モデルの図](/assets/projects/hieida_h29/model_web_en2.png)
_提案する感情モデル_

## 一層目の実装

提案モデルの一層目の実装を，Recurrent Attention Model を用いて行った．

#### 入力

画像刺激 (International Affective Picture System)

#### 出力

情動値 ( Valence/快度・Arousal/覚醒度 )
アテンション位置

#### 学習方法

教師あり学習
Mini-batch 法，batch size 100，2000epoch，アテンション回数 10

### 学習結果

テストセットを入力とした出力は正解データとモデルデータの誤差が arousal:0.48，valence:0.46 であり，個人差程度の誤差であった． また，学習したアテンションは人の顔や黄色などの明るい色，またはエッジを良く見る傾向がみられた．

![Recurrent Attention Modelの図](/assets/projects/hieida_h29/RAM.png)
_Recurrent Attention Model_

## 情動反応の検証

一層目をロボットに実装し，人とのコミュニケーションの様子を観察した．
この際ロボットの情動値に対応した表情を作り込みで実装した．
その結果，ある特定の物体を見せた際には快，他の物体を見せた際には不快といったようなある種好みのようなものを表出したり，情動伝染のような反応を見せた．
さらに画像内のどのような特徴に反応しているのかを解析するため，色に対する反応の解析と顔表情に対する反応の解析を行った．

### 解析結果

#### 色空間に対する反応

HSV 色空間の画像を入れ，快度を出力した．その結果，黄色や赤や白に対しては快で，緑や青や紫の色画像に不快反応を示した．これは，幼児の好みと同じ結果となっている．

#### 顔表情に対する反応

表情画像を入れ，各情動値の出現頻度を解析した．その結果笑顔だと快傾向になり，怒りだと不快傾向になるという情動伝染のような現象が示された．

<iframe src="https://www.youtube.com/embed/rW_GwwUDHJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
