---
title: 子ども達の行動解析
subTitle: 他者との関わり方
mainVisualUrl: /assets/projects/yamashita_h29/haikei.jpeg
author: 山下 舜人 (Shunto Yamashita)
thumbnail: yamashita_h29.jpg
year: 2017
mainPublications:
layout: ../../layouts/project.astro
---

## 概要

人が誰かとインタラクションを行う際、相手の心的状態を予測しながら自分の行動を決定しているとされている。これにより、円滑なインタラクションを行うことができる。この相手を予測しながら自分の行動を決定するモデルを明らかにすることにより、ロボットと人間とのインタラクションをよりよくすることが可能と考えている。  
本研究では、保育園児の活動を加速度センサを用いて計測し、その結果を解析して他者の心的状態推定のモデルを明らかにすることを目的としている。

## 計測・解析方法

![](/assets/projects/yamashita_h29/kankyo.jpeg)

### 計測方法

子ども・インストラクターに加速度センサを取り付け、30 分間のリトミック活動を計測する。2015 年から 2 ヶ月に 1 度の計測を行い、長期にわたる計測を行っている

#### リトミック活動とは

リトミック活動とは、情操教育・音感教育・生活習慣の 3 つを学習する活動とされている。この活動では、子ども達が自由に活動を行うため、子どもの素直な行動を観察できる。

### 解析方法

子ども・インストラクターの加速度波形の相互相関係数をもとに、誰が誰の動きを模倣しているのかを計算する。

## 解析結果

加速度の類似度を解析した結果、25 ～ 43 ヶ月にかけては類似度が上昇し、43 ～ 60 ヶ月にかけては類似度が下降する結果が得られた。この加速度の変化は、それぞれがバラバラの動きをしている過程から模倣の過程、その後、個人個人が周りの状況を考えながら自分自身で行動を決定して活動する過程への変化ではないかと思われる。

![](/assets/projects/yamashita_h29/result.png)

## 今後の展開

加速度の波形から、以下の図のような成長の過程を捉えることができないかと考えている。5 歳児以降の集団での活動におては、加速度の相関だけでは捉えることが難しいと思われるため、類似度以外での解析方法を行いたいと考えている。

![](/assets/projects/yamashita_h29/katei.png)