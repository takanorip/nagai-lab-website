---
title: テレプレゼンスロボットを用いた乳幼児の振る舞いによる気質推定
subTitle:
mainVisualUrl: /assets/projects/Uemura_h30/haikei.jpg
author: 植村 優里 (Yuri Uemura)
thumbnail: uemura_h30.jpg
mainPublications:
current: true
year: 2018
slideImages:
  - /assets/projects/Uemura_h30/slide1.JPG
  - /assets/projects/Uemura_h30/slide2.JPG
  - /assets/projects/Uemura_h30/slide3.JPG
  - /assets/projects/Uemura_h30/slide4.JPG
  - /assets/projects/Uemura_h30/slide5.JPG
  - /assets/projects/Uemura_h30/slide6.JPG
  - /assets/projects/Uemura_h30/slide7.JPG
  - /assets/projects/Uemura_h30/slide8.JPG
  - /assets/projects/Uemura_h30/slide9.JPG
  - /assets/projects/Uemura_h30/slide10.JPG
  - /assets/projects/Uemura_h30/slide11.JPG
  - /assets/projects/Uemura_h30/slide12.JPG
  - /assets/projects/Uemura_h30/slide13.JPG
  - /assets/projects/Uemura_h30/slide14.JPG
  - /assets/projects/Uemura_h30/slide15.JPG
  - /assets/projects/Uemura_h30/slide16.JPG
  - /assets/projects/Uemura_h30/slide17.JPG
  - /assets/projects/Uemura_h30/slide18.JPG
  - /assets/projects/Uemura_h30/slide19.JPG
  - /assets/projects/Uemura_h30/slide20.JPG
layout: ../../layouts/project.astro
---

## 概要

近年, 核家族化により子育て世代の育児の負担が増えている. 特に子どもが幼い場合は, 養育者が家事をする少しの間でも子どもからなかなか目が離せなかったり, 子どもが離れたがらなかったりする. そこで養育者の代わりに, 遠隔から祖父母等の第三者が子どもを見守ることのできるロボットの開発がなされている. ロボットを介して, 乳幼児と第三者が持続的にインタラクションするための必要条件として, 子どもの気質に合わせて柔軟に遊び方を変えるロボットの実現があげられる. 本研究ではその中間目標として, 子どもの振る舞いを遊び実験にて観測し, 気質を分析的に推定する手法を確立する.  

ロボットとのインタラクション中, 子どもごとにその振る舞いは異なる. 先行研究をもとに, 振る舞いの特徴が数値で現れる項目3つ"子どもとロボットの距離"、"表情(の確率)"、"子どもがロボットを見ていた頻度"に注目し, 画像処理により振る舞い特徴量を抽出する. 一方, 気質自体も先行研究で報告された気質質問紙を用いることで, 6つの尺度の点数の組み合わせによって表現できる. 実際の気質を表すと言われる6つの尺度の得点傾向と, 振る舞いから得られた特徴量に何等かの相関があれば, 新たな振る舞い特徴量からおおまかな気質を推定することができる. SVM(support vector machine)を用いて分類を行い, k-folds交差検証により気質推定精度を評価する.