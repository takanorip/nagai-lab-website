---
title: ロボットによる理解に基づいた意思決定モデルの構築
subTitle: より賢いロボットを目指して
author: Kazuki Miyazawa
thumbnail: miyazawa_h29.jpg
year: 2017
mainPublications:
  - 宮澤 和貴，青木 達哉, 日永田 智絵, 岩田 健輔, 中村 友昭, 長井 隆行, "多層マルチモーダルLDAを用いた報酬のモデル化", 3D2-OS-37b-2, 第31回人工知能学会全国大会, May.2017
layout: ../../layouts/project.astro
---

## 概要

ロボットが試行錯誤の中で環境を理解し，理解に基づいた意思決定を獲得することを目的とする。ロボットは，環境との試行錯誤の中で様々なことを経験し，その経験から概念を獲得する。また，概念と単語を結びつけることによって言語を学習する．これをマルチモーダルカテゴリゼーションによる概念形成を中心としたモデルで実現することを目指す．

![](/assets/projects/miyazawa_h29/intro.png)
_試行錯誤しながら環境を理解する_

## 理解とはなにか?

![](/assets/projects/miyazawa_h29/understanding.png)
_ロボットによるマグカップの理解_

理解とは経験を通した予測であると考える．例えば，ロボットの目の前にあるマグカップを見た時のマグカップに対する理解とは，`取手をつかめそうだ`・`飲み物を注げそうだ`・`堅そうだ`などを予測することである．逆に予測できないことは理解できていないことを意味する．この予測をより精度よく効率よく行うために,分類しておいた過去の経験を用いる。この分類しておいた過去の経験を概念と呼ぶ．

## マルチモーダルカテゴリゼーション

マルチモーダルカテゴリゼーションとは，視覚，聴覚、触覚などのマルチモーダル情報を取得し，各モダリティの共起性からかカテゴリ分類することである．この分類によって概念を形成し，概念を通した予測によって物事を理解する．

![](/assets/projects/miyazawa_h29/mutimodal.png)

## ロボットでの学習

ロボットは数種類のおもちゃで遊びながら，人や物とのインタラクションを試行錯誤的に行った．その中で取得したマルチモーダル情報から概念を形成した．この形成した概念を用いることで理解に基づいた行動を行った．また，形成した概念と単語を結びつけることで言語を学習した．さらに，簡単な文法を学習し，ロボット自身が行っていることを文章としてしゃべることが可能になった．

![](/assets/projects/miyazawa_h29/exp.png)
_試行錯誤から概念を学習_
