---
title: 多層マルチモーダルニューラルトピックモデルの推論に関する研究
author: 南坂 雅人 (Masato Minamisaka)
thumbnail: minamisaka_h30.jpg
current: true
year: 2018
slideImages:
  - /assets/projects/Minamisaka_h30/slide1.JPG
  - /assets/projects/Minamisaka_h30/slide2.JPG
  - /assets/projects/Minamisaka_h30/slide3.JPG
  - /assets/projects/Minamisaka_h30/slide4.JPG
  - /assets/projects/Minamisaka_h30/slide5.JPG
  - /assets/projects/Minamisaka_h30/slide6.JPG
  - /assets/projects/Minamisaka_h30/slide7.JPG
  - /assets/projects/Minamisaka_h30/slide8.JPG
  - /assets/projects/Minamisaka_h30/slide9.JPG
  - /assets/projects/Minamisaka_h30/slide10.JPG
  - /assets/projects/Minamisaka_h30/slide11.JPG
  - /assets/projects/Minamisaka_h30/slide12.JPG
  - /assets/projects/Minamisaka_h30/slide13.JPG
  - /assets/projects/Minamisaka_h30/slide14.JPG
  - /assets/projects/Minamisaka_h30/slide15.JPG
  - /assets/projects/Minamisaka_h30/slide16.JPG
  - /assets/projects/Minamisaka_h30/slide17.JPG
  - /assets/projects/Minamisaka_h30/slide18.JPG
layout: ../../layouts/project.astro
---

## 概要

本研究ではロボットへの応用も視野に深層学習によるマルチモーダルな生成モデルを提案する。データマイニング、情報検索など様々な分野においてデータから潜在的構造を捉えるため、教師有り学習が用いられている。しかし、教師有り学習では学習データに対して、正解（ラベル）が必要であり、ビックデータのように大量にデータが存在する場合、すべてに人手でラベルを付与することは困難である。

さらに実世界情報は画像、音、文字といったように一般的にマルチモーダルな情報であり、このことがよりラベル付けを困難にしている。 そこで、ラベル付けの必要がない確率的生成モデルに基づく教師なし学習が注目されている。マルチモーダルな生成モデルとして階層ベイズに基づく確率モデルがいくつか提案されているが、計算コストが高く、時系列情報といった大量のデータにはあまり適していない。

本研究のようにロボットへの応用を考えた場合、ロボットの発達モデルといった長期に渡って取得される大量のデータの学習の障壁となってしまう。そこで本稿の提案手法ではこのような階層ベイズに基づくマルチモーダルな確率的生成モデルをニューラルネットワークへ置き換える。ニューラルネットワークに置き換えたモデルが確率モデルと同程度の性能を出すことが可能となれば、深層学習の特徴から、並列化が容易となり近年成長が目覚ましい GPU などの計算資源を活用し、計算コストを大幅に減少させることができる。

計算コストが抑えることができれば、ロボットの発達モデルなどのより大きな実世界データへの適用が可能となる。本件研究では、マルチモーダルニューラルトピックモデルを提案し、提案モデルに相当する確率モデルとの性能を比較するとこによって提案モデルの有効性を示す。
