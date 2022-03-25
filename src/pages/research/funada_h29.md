---
title: 概念と言語の相互学習において育児語が与える影響の解析
mainVisualUrl: /assets/projects/funada_h29/haikei.jpg
author: 船田 美雪 (Miyuki Funada)
thumbnail: funada_h29.jpg
mainPublications:
  - 船田美雪，中村友昭，長井隆行，金子正秀，"マルチモーダルLDAに基づく概念学習における概念と言語の相互作用の解析"，メディア工学研究会 学生研究発表会，pp. 13-16，Feb. 2016
  - 船田美雪，中村友昭，長井隆行，金子正秀，"マルチモーダル概念形成における概念と言語の相互作用の解析"，人工知能学会全国大会，1O2-5，Jun. 2016
  - 船田美雪, 中村友昭, 長井隆行, 金子正秀，"MLDAと教示なし単語分割に基づく概念と言語モデルの学習過程の解析"，計測自動制御学会 システム・情報部門学術講演会，GS13-5，Dec. 2016
  - 船田美雪，中村友昭，長井隆行，金子正秀，"概念と言語の相互学習における育児語の影響の解析"，情報処理学会全国大会，3M-09，Mar. 2017
  - 船田美雪，中村友昭，長井隆行，金子正秀，"MLDAと教師なし単語分割に基づく概念と言語の相互学習"，人工知能学会全国大会, 3D1-OS-37a-3，May 2017
  - 'Miyuki Funada, Tomoaki Nakamura, Takayuki Nagai and Masahide Kaneko, "Analysis of the Effect of Infant-Directed Speech on Mutual Learning of Concepts and Language Based on MLDA and Unsupervised Word Segmentation", IROS2017: Workshop on Machine Learning Methods for High-Level Cognitive Capabilities in Robotics, Sep. 2017'
year: 2017
layout: ../../layouts/project.astro
---

## 研究概要

人は外界から得られる知覚情報や知覚情報や養育者からの語りかけによって文化毎に異なる言語や概念を獲得する．このとき，教示される言語の特徴が母語の獲得に影響を与え，言語や文化毎に異なる概念が構築されると考えられる．養育者は幼児の成長に合わせて育児語と成人語を用いる傾向があり，このような変化の中で，人は育児語と成人語の双方を学習する．これまで，概念と言語の相互学習による，ロボットの概念獲得手法が提案されてきた．本稿では，このような相互学習モデルにおける育児語と成人語の学習の過程と，教示言語が概念形成に及ぼす影響を検証する．

## 研究背景・目的

人は知覚情報と言語情報から概念を獲得する

- 概念：知覚情報と言語情報を分類したカテゴリ
- 知覚情報のボトムアップな分類だけでなく，言語情報のトップダウンな制約も受けながら形成される

![](/assets/projects/funada_h29/funada_1.png)

養育者は幼児に対して，育児語(infant-directed speech)で語りかける傾向がある

- 育児語：一般的な成人語(adult-directed speech)とは形態的特徴が異なる
- 日本語の育児語の例：”ぶーぶー”(くるま)，”わんわん”(いぬ)などの音韻反復語

言語情報と色情報を用いた色概念形成のシミュレーションにより，

- 育児語による教示発話が概念形成に及ぼす影響を検証する
- 人が幼児に対して育児語を用いる動機の工学的裏付けを目指す

## 概念形成のシミュレーション実験

![](/assets/projects/funada_h29/funada_2.png)

色概念形成のグラフィカルモデル

### 概念と言語モデルの相互学習

色概念を対象として，知覚情報(色情報)と言語情報(教示発話)からカテゴリ分類を行う

#### 実験設定

- 学習データセット：単色画像とその特徴を表す教示文の組
- 教示発話
  - 成人語には，”あお”，”あか”などの色語を使用
  - 人育児語には，”ぐるぐる”，”とんとん”などの音韻反復語を疑似的に使用

#### 学習データ数の増加に伴うモデルの対数尤度の変化

- 学習モデルの対数尤度: 対数尤度の合計を最大化するために，言語情報と色情報がどの程度寄与しているかを表す

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtable columnalign=left><mtr><mtd><mi>log</mi><mi mathvariant="normal">P</mi><mo>(</mo><msup><mi>W</mi><mi>c</mi></msup><mo>,</mo><msup><mi>W</mi><mi>w</mi></msup><mo>|</mo><mi mathvariant="normal">Θ</mi><mo>)</mo><mo>=</mo><mi>log</mi><mi mathvariant="normal">P</mi><mo>(</mo><msup><mi>W</mi><mi>c</mi></msup><mo>|</mo><mi mathvariant="normal">Θ</mi><mo>)</mo><mo>+</mo><mi>log</mi><mi mathvariant="normal">P</mi><mo>(</mo><msup><mi>W</mi><mi>w</mi></msup><mo>|</mo><mi mathvariant="normal">Θ</mi><mo>)</mo></mtd></mtr></mtable></math>

![](/assets/projects/funada_h29/funada_3.png)

どちらの場合も言語の学習が進むにつれて言語情報優位に変化しているが，育児語の方が学習早期に言語情報優位になった

#### 学習データ数に対する音声認識一致率の変化

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtable columnalign=left><mtr><mtd><mi mathvariant="normal">音</mi><mi mathvariant="normal">声</mi><mi mathvariant="normal">認</mi><mi mathvariant="normal">識</mi><mi mathvariant="normal">一</mi><mi mathvariant="normal">致</mi><mi mathvariant="normal">率</mi><mo>=</mo><mn>1</mn><mo>-</mo><mtext>[PARSE ERROR: Undefined("Command(\"displaystyle\")")]</mtext><mfrac><mrow><mi mathvariant="normal">編</mi><mi mathvariant="normal">集</mi><mi mathvariant="normal">距</mi><mi mathvariant="normal">離</mi><mo>(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub><mo>)</mo></mrow><mrow><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">x</mi></mrow><mo>(</mo><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub><mo>)</mo></mrow></mfrac></mtd></mtr></mtable><mtable columnalign=left><mtr><mtd><mrow><mo stretchy="true" form="prefix">[</mo><mtable><mtr><mtd><msub><mi>S</mi><mn>1</mn></msub><mi mathvariant="normal">：</mi><mi mathvariant="normal">正</mi><mi mathvariant="normal">解</mi><mi mathvariant="normal">文</mi><mi mathvariant="normal">字</mi><mi mathvariant="normal">列</mi></mtd></mtr><mtr><mtd><msub><mi>S</mi><mn>2</mn></msub><mi mathvariant="normal">：</mi><mi mathvariant="normal">認</mi><mi mathvariant="normal">識</mi><mi mathvariant="normal">文</mi><mi mathvariant="normal">字</mi><mi mathvariant="normal">列</mi></mtd></mtr></mtable><mo stretchy="true" form="postfix">]</mo></mrow></mtd></mtr></mtable></math>

![](/assets/projects/funada_h29/funada_4.png)

学習が進むにつれて，成人語よりも育児語の方がより正解に近い音声認識ができている

## まとめ

- MLDA と教師なし単語分割に基づいて色情報と教示発話から色概念形成のシミュレーション実験を行う
- 日本語の育児語の例：”ぶーぶー”(くるま)，”わんわん”(いぬ)などの音韻反復語
- 今後の課題
  - M 育児語の持つ特徴が概念学習に与える影響とその要因の解析
