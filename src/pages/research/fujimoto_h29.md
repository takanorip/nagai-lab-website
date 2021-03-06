---
title: マルチモーダル深層生成モデル
subTitle: MiGAN
author: Riku Fujimoto
thumbnail: fujimoto_h29.png
year: 2017
layout: ../../layouts/project.astro
---

## Concept

人は想像する力を持っており，これによって，未知の状況に対してもある程度適切に対応することが出来る．想像力をロボットにも持たせることで，より早く未知環境に適応することが出来るようになるだろうと考えた．想像は脳内で何かを思い浮かべることであり，脳内でのマルチモーダルデータ生成であると捉えることが出来る．そこで，想像のためのマルチモーダルデータを生成する手法について研究を行っている．

## GAN を使ったマルチモーダルデータ生成モデル：MiGAN(Multimodal via image GAN)

マルチモーダルデータを生成するためのモデル，MiGAN を開発した．これは，拡張した GAN を使ってマルチモーダルデータを生成するモデルである．このモデルの特徴は入力データを画像形式に統一して入力することで，モダリティー間のネットワーク構造の差をないことである．この特徴のおかげで，ハイパーパラメータが少なくなり，学習が簡単になる．

![](/assets/projects/fujimoto_h29/MiGAN_white.JPG)
_MiGAN のネットワーク_

## MiGAN の生成データ

![](/assets/projects/fujimoto_h29/result.JPG)
_MiGAN の生成結果_

シミュレーション上でロボットを動かしたときの，視覚と関節角のデータを用いて MiGAN を学習させた．左の図は上から順に MiGAN で生成した関節角の画像，視覚の画像，シミュレーション上で再現した関節角の画像である．生成した視覚の画像と再現した関節角の画像がほぼ一致しており，MiGAN がモダリティの適切な対応関係を学習できていることがわかる．
