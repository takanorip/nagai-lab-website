---
title: 統合認知モデルによるロボットの・概念・行動・言語の同時学習
mainVisualUrl: /assets/projects/Miyazawa_h30/background.jpg
author: Kazuki Miyazawa
thumbnail: miyazawa_h30.jpg
mainPublications:
  - "Kazuki Miyazawa, Tatsuya Aoki, Chie Hieida, Kensuke Iwata, Tomoaki Nakamura, and Takayuki Nagai, “Integration of Multimodal Categorization and Reinforcement Learning for Robot Decision-Making,” IROS2017: Workshop on Machine Learning Methods for High-Level Cognitive Capabilities in Robotics, Vancouver, Sep. 2017【査読あり】"
  - "Kazuki Miyazawa, Tatsuya Aoki, Takato Horii, Tomoaki Nakamura, and Takayuki Nagai, “Online Language Learning by Integrated Cognitive Architecture,” ALIFE2018: Workshop on the emergence and evolution of social learning, communication, language and culture in natural and artificial agents, Tokyo, Jul. 2018【査読あり】"
  - 宮澤和貴, 青木達哉, 日永田智絵, 中村友昭, 長井隆行, "多層マルチモーダル LDA と強化学習による行動学習," 第 34 回日本ロボット学会学術講演会, 3Z1-06, 山形, Sep.2016 (口頭発表)
  - 宮澤和貴, 青木達哉, 日永田智絵, David Mata, 岩田健輔, 中村友昭, 長井隆行, "多層マルチモーダル LDA を用いた概念形成と強化学習," 計測自動制御学会 システム・情報部門 学術講演会 2016, GS13-7, 滋賀, Dec.2016 (口頭発表及びポスター発表)・【口頭発表に選出 　発表 10 件につき 1 件の選出】
  - 宮澤和貴, 青木達哉, 日永田智絵, 岩田健輔, 中村友昭, 長井隆行, "多層マルチモーダル LDA と強化学習を用いた概念と語彙の学習," 第 29 回自律分散システム・シンポジウム, IC2-4,東京,Jan.2017・(口頭発表)
  - 宮澤和貴，青木達哉，日永田智絵，岩田健輔，中村友昭，長井隆行, "多層マルチモーダル LDA を用いた報酬のモデル化," JSAI 全国大会(第 31 回), 3D2-OS-37b-2, 愛知, May.2017 (口頭発表)
  - 宮澤和貴, 日永田智絵, 堀井隆斗, 長井隆行, "Sensoroid：人の身体性を利用した知能," HAI シンポジウム 2017, P-41, 金沢, Dec.2017 (ポスター発表)【Impressive Poster Award 受賞】
  - 宮澤和貴, 堀井隆斗, 日永田智絵, 青木達哉, 中村友昭, 長井隆行, "統合認知モデルによるロボットの概念・行動・言語の学習," IPSJ 第 80 回全国大会, N5-06, 東京, Mar.2018 (口頭発表)・【学生奨励賞受賞】
  - 宮澤和貴, 青木達哉, 堀井隆斗, 日永田智絵, 中村友昭, 長井隆行, "統合モデルを用いた行動・言語・プランニングの学習," JSAI 全国大会(第 32 回), 1G3-04, 鹿児島, Jun.2018 (口頭発表)
  - 宮澤和貴, 岩田健輔, 勝又勇貴, 黄瀬輝, 田渕義基, 水地良明, 坂戸達陽, 相良陸成, 谷口忠大, 長井隆行, “複数の概念形成モデルの統合によるロボットの家事タスクの実現”, 日本ロボット学会第 36 回学術講演会, 1C2-04, 2018.09.05, 名古屋(口頭発表)
current: true
year: 2018
slideImages:
  - /assets/projects/Miyazawa_h30/slide1.JPG
  - /assets/projects/Miyazawa_h30/slide2.JPG
  - /assets/projects/Miyazawa_h30/slide3.JPG
  - /assets/projects/Miyazawa_h30/slide4.JPG
  - /assets/projects/Miyazawa_h30/slide5.JPG
  - /assets/projects/Miyazawa_h30/slide6.JPG
  - /assets/projects/Miyazawa_h30/slide7.JPG
  - /assets/projects/Miyazawa_h30/slide8.JPG
  - /assets/projects/Miyazawa_h30/slide9.JPG
  - /assets/projects/Miyazawa_h30/slide10.JPG
  - /assets/projects/Miyazawa_h30/slide11.JPG
  - /assets/projects/Miyazawa_h30/slide12.JPG
  - /assets/projects/Miyazawa_h30/slide13.JPG
  - /assets/projects/Miyazawa_h30/slide14.JPG
  - /assets/projects/Miyazawa_h30/slide15.JPG
  - /assets/projects/Miyazawa_h30/slide16.JPG
  - /assets/projects/Miyazawa_h30/slide17.JPG
  - /assets/projects/Miyazawa_h30/slide18.JPG
  - /assets/projects/Miyazawa_h30/slide19.JPG
  - /assets/projects/Miyazawa_h30/slide20.JPG
  - /assets/projects/Miyazawa_h30/slide21.JPG
layout: ../../layouts/project.astro
---

## 概要

人間と共存し生活を支援するような知的なロボットの登場が期待されている．このようなロボットを実現するには，人間が活動する実世界において，ロボットが周囲の環境や言語を理解して行動する必要がある．本研究の目的はロボットが実環境を理解するために概念・行動・言語を同時に学習可能な統合認知モデルの実現である．提案するモデルは複数のモジュールを統合することで実現する．提案する統合認知アーキテクチャはマルチモーダルカテゴリゼーションによる概念形成を中心として，即時的行動学習を行う強化学習，長期的行動のを行う隠れマルコフモデル，言語学習を行う隠れマルコフモデルを統合することで実現する．提案手法の有効性を検証するために実ロボットによる実験を行った．結果として提案モデルによりロボットは概念形成・行動決定・言語理解を同時学習可能なことを示した．
