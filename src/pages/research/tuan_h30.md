---
title: 自己意図の発達から他者意図の推定へ
subTitle: 他者との協調を学ぶ4段階モデル
mainVisualUrl: /assets/projects/tuan_h30/tuan_haikei.jpg
author: トゥアングエン (Tuan Anh Nguyen)
thumbnail: tuan_h30.jpg
mainPublications:
current: true
year: 2018
slideImages:
  - /assets/projects/Tuan_h30/slide1.JPG
  - /assets/projects/Tuan_h30/slide2.JPG
  - /assets/projects/Tuan_h30/slide3.JPG
  - /assets/projects/Tuan_h30/slide4.JPG
  - /assets/projects/Tuan_h30/slide5.JPG
  - /assets/projects/Tuan_h30/slide6.JPG
  - /assets/projects/Tuan_h30/slide7.JPG
  - /assets/projects/Tuan_h30/slide8.JPG
  - /assets/projects/Tuan_h30/slide9.JPG
  - /assets/projects/Tuan_h30/slide10.JPG
  - /assets/projects/Tuan_h30/slide11.JPG
  - /assets/projects/Tuan_h30/slide12.JPG
  - /assets/projects/Tuan_h30/slide13.JPG
  - /assets/projects/Tuan_h30/slide14.JPG
  - /assets/projects/Tuan_h30/slide15.JPG
  - /assets/projects/Tuan_h30/slide16.JPG
  - /assets/projects/Tuan_h30/slide17.JPG
  - /assets/projects/Tuan_h30/slide18.JPG
  - /assets/projects/Tuan_h30/slide19.JPG
  - /assets/projects/Tuan_h30/slide20.JPG
  - /assets/projects/Tuan_h30/slide21.JPG
  - /assets/projects/Tuan_h30/slide22.JPG
  - /assets/projects/Tuan_h30/slide23.JPG
  - /assets/projects/Tuan_h30/slide24.JPG
  - /assets/projects/Tuan_h30/slide25.JPG
  - /assets/projects/Tuan_h30/slide26.JPG
  - /assets/projects/Tuan_h30/slide27.JPG
  - /assets/projects/Tuan_h30/slide28.JPG
  - /assets/projects/Tuan_h30/slide29.JPG
  - /assets/projects/Tuan_h30/slide30.JPG
  - /assets/projects/Tuan_h30/slide31.JPG
  - /assets/projects/Tuan_h30/slide32.JPG
  - /assets/projects/Tuan_h30/slide33.JPG
  - /assets/projects/Tuan_h30/slide34.JPG
  - /assets/projects/Tuan_h30/slide35.JPG
  - /assets/projects/Tuan_h30/slide36.JPG
  - /assets/projects/Tuan_h30/slide37.JPG
  - /assets/projects/Tuan_h30/slide38.JPG
  - /assets/projects/Tuan_h30/slide39.JPG
  - /assets/projects/Tuan_h30/slide40.JPG
  - /assets/projects/Tuan_h30/slide41.JPG
layout: ../../layouts/project.astro
---

## 概要

人間の生活を支援する自律ロボットには， 人と協調してタスクを実行する機能が不可欠である．人間同士の協調はそれぞれが相手の行動を観察し，その行動の意図を推定することによって他者意図を考慮した行動選択を行うことで円滑に実現される．同様にロボットが人間と円滑に協調するには，相手の意図を推定し自身の行動を調整するメカニズムが必要である．

ロボティクスや人工知能の分野において，行動するエージェントに意図を実装する様々な手法が提案されている．多くの先行研究は事前に設計された行動プランを利用し，行動プランに沿った行動を意図的な行動，行動プランと実行している行動を比較することを意図認識と扱う． しかし，そのようなアプローチは多くの行動プランを手動で設計するのに非常に手間がかかるため， 複雑でダイナミックな環境に適用することが困難である． また，エージェント自体がそもそもどのように意図を獲得し，お互いの意図をどのようなメカニズムで推定するのかについて明らかにしていない．そのような問題に対して，行動するエージェントが環境や他のエージェントとのインタラクションを通じ，得た自身の経験に基づいて自己意図を獲得し， それを利用することで他者意図を推定できる仕組みを考える必要がある．その方向への第一歩として本研究では自己意図を自ら獲得した上で他者意図の推定や他者との協調を学ぶエージェントモデルを提案する．

提案モデルの学習は四段階に分けられ，上の段階は下の段階で獲得した能力を拡張するものとなる．第一段階は環境とのインタラクションを通じ，ゴールを達成することを自ら学ぶ段階である．第二段階は得た経験から時系列情報をモデル化し，自己意図を生成する段階である．第三段階は意図と行動決定を繋ぐことで意図的な行動を獲得する段階である．第四段階は第三段階の意図的な行動決定モデルを用いて他者意図の推定が可能になる段階である．各段階の学習モデルを深層学習と強化学習の手法の組み合わせによってコンピュータ上に実装し、子供の積み木タスクを題材とする自己意図の生成から他者意図の推定能力の獲得までの段階的な発達に関するシミュレーション実験を行った．その結果，エージェントは自ら行動決定を学び、意図を自動的に内部表現として獲得できることを示した．