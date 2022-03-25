---
title: 家庭用ロボットの遠隔操作に基づく動作の学習と生成
author: 岩田 健輔 (Iwata Kensuke)
thumbnail: iwata_h30.jpg
mainPublications:
  - 岩田健輔, 中村友昭, 長井隆行, 持橋大地, 小林一郎, 麻生英樹, "参照点に依存したガウス過程隠れセミマルコフモデルに基づく連続動作の分節化", 第 34 回日本ロボット学会学術講演会, 山形 Sep.2016
  - 岩田健輔，宮澤和貴，池田成満，青木達哉，中村友昭，長井隆行，"ロボットの連続的な動作学習のためのフレームワーク"，第 31 回日本人工知能学会全国大会，4G1-OS-14a-1，愛知，May.2017
  - 岩田健輔，宮澤和貴，青木達哉, 中村友昭, 長井隆行, "サービスロボット用統合ビジョンシステムの開発", インテリジェントホームロボティクス研究会, 大阪, Jun.2017
  - 岩田健輔，長井隆行，中村友昭，青木達哉，"参照点と操作対象に依存した GP-HSMM によるロボットの動作学習"，情報処理学会全国大会，7N-02，Mar.2018
  - 岩田健輔, 青木達哉, 堀井隆斗, 中村友昭, 長井隆行, "家庭用ロボットの遠隔操作に基づく動作の学習と生成" 第 32 回日本人工知能学会全国大会，4L2-01，鹿児島，June.2018
  - K.Iwata, T.Nakamura, T.Nagai, "Learning of Motion Primitives Using 　 Reference-Point- Dependent GP-HSMM for Domestic Service Robots," The 15th International Conference on Intelligent Autonomous Systems, Germany, June.2018
  - K.iwata, T.Aoki, T.Horii, T.Nakamura, T.Nagai, "Learning and Generation of Actions from Teleoperation for Domestic Service Robots" 2018 IEEE/RSJ International Conference on Intelligent Robots and Systems, Spain, October, 2018
current: true
year: 2018
slideImages:
  - /assets/projects/Iwata_h30/slide1.JPG
  - /assets/projects/Iwata_h30/slide2.JPG
  - /assets/projects/Iwata_h30/slide3.JPG
  - /assets/projects/Iwata_h30/slide4.JPG
  - /assets/projects/Iwata_h30/slide5.JPG
  - /assets/projects/Iwata_h30/slide6.JPG
  - /assets/projects/Iwata_h30/slide7.JPG
  - /assets/projects/Iwata_h30/slide8.JPG
  - /assets/projects/Iwata_h30/slide9.JPG
  - /assets/projects/Iwata_h30/slide10.JPG
layout: ../../layouts/project.astro
---

## 概要

近年家庭用ロボットの開発が活発化している．しかし,いずれのロボットも一般家庭への導入はできていない．ロボットが一般家庭の中で活動するためには,その環境に適切な行動を実行できる必要がある．しかし,環境は多様であり,一意に決定することはできない．したがって,要求される行動全てを作りこむことは困難である．現在のロボットは遠隔操作で行動の実行と選択の部分を補うことで,家事を行うことが可能である．従ってこの行動とその選択を学習することが重要であると考える．本研究ではロボット自身が活動した情報から学習を行う．

家庭内における行動の中には共通した身体の動きが含まれている．この動きを基本動作と定義し,基本動作の組み合わせにより行動の表現を図る．

基本動作の学習には参照点に依存したガウス過程隠れセミマルコフモデルという手法を用いた．ガウス過程隠れセミマルコフモデルは,連続なデータを,データ内に出現する共通した系列で分節分類することが可能なモデルである．そこに,参照点という動作の基準となる座標系を加えることで,物体を基準とした動作の学習が可能となる．

実際にこの手法を用いて,4 種類の行動を含む片づけタスクを行い,行動を表現できる基本動作の学習を行った．学習された基本動作は組み合わせることで行動として実行可能なものであり,操作者の意図した機能を達成できる行動が学習された．

提案手法を用いた基本動作の学習により,片づけタスクから行動を表現できる動作の学習が可能となった．しかし,適切な状況での行動の選択や,学習した行動の定量的な評価は行えていない．今後は,行動の選択や評価が課題となる．
