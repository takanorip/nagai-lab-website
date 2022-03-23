export type Contents = {
  title: string;
  items: string[];
};

export type Publication = {
  year: number;
  contents: Contents[];
};

export const publications = [
  {
    year: 2022,
    contents: [],
  },
  {
    year: 2021,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: 'Ryo Kuniyasu, Tomoaki Nakamura, Tadahiro Taniguchi, Takayuki Nagai, "Robot Concept Acquisition Based on Interaction Between Probabilistic and Deep Generative Models", Frontiers in Computer Science, Vol.3, 2021',
          },
          {
            url: "",
            text: 'Taiga Sano, Takato Horii, Kasumi Abe & Takayuki Nagai, "Temperament estimation of toddlers from child–robot interaction with explainable artificial intelligence", Advanced Robotics, Volume 35, Issue 17, pp.1068-1077, September 2021',
          },
          {
            url: "",
            text: 'Tatsuya Sakai, Kazuki Miyazawa, Takato Horii & Takayuki Nagai, "A framework of explanation generation toward reliable autonomous robots", Advanced Robotics, Volume 35, Issue 17, pp.1054-1067, September 2021',
          },
          {
            url: "",
            text: '阿部 香澄, 塩見 昌裕, 粕谷 美里, 長井 隆行, "未就学児育児におけるロボット・AIの社会受容性と期待", 日本ロボット学会誌, 39巻, 4号, pp.371-374, 2021',
          },
          {
            url: "",
            text: '三木 晴子, 阿部 香澄, 堀井 隆斗, 長井 隆行, "遠隔保育ロボットを用いた Toddler層乳幼児の言語発達支援システムの提案", 日本ロボット学会誌, 39巻, 2号, pp.185-188, 2021',
          },
          {
            url: "",
            text: 'Ichikawa J, Fujii K, Nagai T, Omori T, Oka N, "Quantitative analysis of spontaneous sociality in children’s group behavior during nursery activity", PLOS ONE 16(2): e0246041.',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: "長井 隆行, 記号創発ロボティクスによる人間機械コラボレーション基盤創成, 人間と調和した創造的協働を実現する知的情報処理システムの構築2020年度成果報告公開シンポジウム, 2021.3.24",
          },
          {
            url: "",
            text: "長井 隆行, インタラクションの計算モデルを目指して, ソニー先端研究部主催特別講演「現代認知科学の潮流」, 2021.03.05",
          },
          {
            url: "",
            text: "長井 隆行, ロボットは幼稚園に入れるか？ ～AIロボティクスで人間のような知能をもったロボットを創る試み～, JST公開シンポジウム ～高校生を対象とした人とAIの未来スクール2021～, 2021.1.10",
          },
        ],
      },
      {
        title: "International conference",
        items: [],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '平井 優芽, 堀井 隆斗, 長井 隆行, "予測的符号化を用いた内受容感覚・外受容感覚・固有感覚の統合モデル", 人工知能学会全国大会, 4D3-OS-4b-03, 2021.6.11, オンライン',
          },
          {
            url: "",
            text: '大森 一祥, 宮澤 和貴, 青木 達哉, 堀井 隆斗, 長井 隆行, "生体信号を用いたマルチモーダル概念形成", 人工知能学会全国大会, 4D3-OS-4b-02, 2021.6.11, オンライン',
          },
          {
            url: "",
            text: '境 辰也, 波田 侑大, 宮澤 和貴, 堀井 隆斗, 長井 隆行, "重要状態抽出による自律エージェントの説明性：連続状態空間への拡張", 人工知能学会全国大会, 4H2-GS-11c-01, 2021.6.11, オンライン',
          },
          {
            url: "",
            text: '本間 大貴, 青木 達哉, 堀井 隆斗, 長井 隆行, "確率モデルを用いた曖昧な言語命令の理解", 人工知能学会全国大会, 3J2-GS-6b-03, 2021.6.10, オンライン',
          },
          {
            url: "",
            text: '宮澤 和貴, 井上 輝也, 長井 隆行, "GPT-2を用いた人の動作予測", 人工知能学会全国大会, 2G3-GS-2e-05, 2021.6.09, オンライン',
          },
          {
            url: "",
            text: '川崎 光一朗, 宮澤 和貴, 堀井 隆斗, 長井 隆行, "VQ-VAEとGPT-2による予測制御を用いたロボットのリアルタイム動作模倣", 人工知能学会全国大会, 2J1-GS-8a-01, 2021.6.09, オンライン',
          },
          {
            url: "",
            text: '原田 悠斗, 青木 達哉, 堀井 隆斗, 長井 隆行, "仮想空間内での多視点観測による物体の6次元姿勢推定", 人工知能学会全国大会,2J1-GS-8a-04 , 2021.6.09, オンライン',
          },
        ],
      },
      {
        title: "特許",
        items: [],
      },
      {
        title: "受賞等",
        items: [],
      },
      {
        title: "Media",
        items: [],
      },
    ],
  },
  {
    year: 2020,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: 'Shota Hamaguchi, Takumi Kawasetsu, Takato Horii, Hisashi Ishihara, Ryuma Niiyama, Koh Hosoda, Minoru Asada, "Soft Inductive Tactile Sensor Using Flow-Channel Enclosing Liquid Metal," IEEE Robotics and Automation Letters, vol.5, no.3, pp.4028 – 4034, April 2020',
          },
          {
            url: "",
            text: 'Kasumi Abe, Takayuki Nagai, Chie Hieida, Takashi Omori, Masahiro Shiomi, "Estimating Children\'s Personalities through Their Interaction Activities with a Tele-Operated Robot," Journal of Robotics and Mechatronics, Vol.32, No.1, pp.21-31, Febrary 2020',
          },
          {
            url: "",
            text: 'Chie Hieida, Kasumi Abe, Takayuki Nagai, Takashi Omori, "Walking Hand-in-Hand Helps Relationship Building Between Child and Robot," Journal of Robotics and Mechatronics, Vol.32 No.1, pp.8-20, Febrary 2020',
          },
          {
            url: "",
            text: 'Tadahiro Taniguchi, Tomoaki Nakamura, Masahiro Suzuki, Ryo Kuniyasu, Kaede Hayashi, Akira Taniguchi, Takato Horii, Takayuki Nagai, "Neuro-SERKET: development of integrative cognitive system through the composition of deep probabilistic generative models", New Generation Computing, 1-26, 22 January 2020',
          },
          {
            url: "",
            text: 'Akihiro Eguchi, Takato Horii, Takayuki Nagai, Ryota Kanai, Masafumi Oizumi, "An Information Theoretic Approach to Reveal the Formation of Shared Representations", Frontiers in Computational Neuroscience, 14, 1, 2020, 29 January 2020',
          },
          {
            url: "",
            text: "濵園 侑美, 小林 一郎, 麻生 英樹, 中村 友昭, 長井 隆行, 持橋 大地, “ヒューマノイドロボットを用いた言語理解による動作生成”, 知能と情報, Vol. 32, No. 1, pp. 632-642, Febrary. 2020",
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: "阿部 香澄, テレ保育ロボットChiCaRoによる遠隔共同子育てと発達支援システム, 日本発達神経科学会第9回学術集会, シンポジウム1 ウィズコロナ時代の子どもの発達とAI・IoT技術の役割, 2020.11.28",
          },
          {
            url: "",
            text: "阿部 香澄, テレ保育ロボットChiCaRoと遠隔保育技術を活用したリモート調査, 日本赤ちゃん学会第20回学術集会, ラウンドテーブル1「新型コロナ時代の」発達研究法について考える, 2020.09.19",
          },
          {
            url: "",
            text: "Takato Horii, Towards co-creation of game in HRI\u000b-an example of creative model through physical interaction-, Workshop on Socialware in Human-Robot Collaboration and Physical Interaction @RO-MAN2020, 2020.09.1",
          },
          {
            url: "",
            text: "堀井 隆斗, ヒトと共に学ぶロボットの知能, 第1回 大阪大学共生知能システム研究センター【おウチで】サイエンスカフェ, 2020.08.10",
          },
          {
            url: "",
            text: "長井 隆行, 原田 研介, 石黒 浩, 細田 耕, ロボティクスと人工知能, 人工知能 35巻4号, pp.558-567, 2020.07.01",
          },
          {
            url: "",
            text: "長井 隆行, 認知的インタラクションデザインA02班の成果, HAIシンポジウム2020 新学術パネル, 2020.03.06",
          },
          {
            url: "",
            text: "長井 隆行, マルチモーダル確率的生成モデルと汎用知能, CRDSワークショップ 深層学習と知識・記号推論の融合によるAI基盤技術の発展, 2020.01.30",
          },
          {
            url: "",
            text: "長井 隆行, マルチモーダル情報処理と知能 ～マルチモーダルカテゴリゼーション再訪～, 電子情報通信学会MVE研究会 (招待講演), 2020.01.22",
          },
        ],
      },
      {
        title: "International conference",
        items: [
          {
            url: "",
            text: 'Taiga Sano, Takato Horii, Kasumi Abe and Takayuki Nagai, "Explainable Temperament Estimation of Toddlers by a Childcare Robot," The 29th IEEE International Conference on Robot and Human Interactive Communication (RO-MAN), MoPlP.5, 31 August 2020',
          },
          {
            url: "",
            text: 'Yoshiki Higuchi, Kasumi Abe, Masatoshi Nagano, Rena Kanai, Masahiro Shiomi, Takayuki Nagai and Tomoaki Nakamura, "HSMM-SA-based Analysis of ChildcareWorker\'s Interaction Strategy," RISP International Workshop on Nonlinear Circuits, Communications and Signal Processing, 29AM1-1-1, pp.1-4, 29 Febrary 2020',
          },
          {
            url: "",
            text: "Ryo Matsumoto, Zhang Bin, Tomoaki Nakamura, Takayuki Nagai, Takashi Omori and Natsuki Oka, “Robust Human Trajectory Estimation Using Hidden Markov Models”, RISP International Workshop on Nonlinear Circuits, Communications and Signal Processing, pp. 13-16, Feb. 2020",
          },
          {
            url: "",
            text: 'Kazuki Miyazawa, Takato Horii, Tatsuya Aoki and Takayuki Nagai, "Integration of multiple probabilistic generative models for robot learning", The 2nd International Symposium on Symbiotic Intelligent System, 31 January 2020',
          },
          {
            url: "",
            text: 'Tatsuya Aoki, Takato Horii and Takayuki Nagai, "Towards continuous robot learning in a real environment: Probabilistic generative model based on nonparametric Bayes and auto-encoding variational inference", The 2nd International Symposium on Symbiotic Intelligent System, 31 January 2020',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '阿部 香澄, 塩見 昌裕, 粕谷 美里, 長井 隆行, "未就学児育児におけるロボット・AIの社会受容性と期待", 第38回日本ロボット学会学術講演会, 2K3-03, 2020.10.10, オンライン',
          },
          {
            url: "",
            text: '境 辰也, 宮澤 和貴, 青木 達哉, 堀井 隆斗, 長井 隆行, "家庭用サービスロボットの説明性-人間のパートナーとなるロボットの実現に向けて-", 第38回日本ロボット学会学術講演会, 2E3-01, 2020.10.10, オンライン',
          },
          {
            url: "",
            text: '三木 晴子, 阿部 香澄, 堀井 隆斗, 長井 隆行, "遠隔保育ロボットを用いたToddler 層乳幼児の言語発達支援システムの提案", 第38回日本ロボット学会学術講演会, 2I2-04, 2020.10.10, オンライン',
          },
          {
            url: "",
            text: '宮澤 和貴, 青木 達哉, 堀井 隆斗, 長井 隆行, "マルチモーダル世界モデルを用いた実ロボットによる言語的思考の実現", 第38回日本ロボット学会学術講演会, 1C3-03, 2020.10.9, オンライン',
          },
          {
            url: "",
            text: '大森 一祥, 宮澤 和貴, 堀井 隆斗, 長井 隆行, "人の身体を基盤とした認知モデル構築の試み", 第38回日本ロボット学会学術講演会, 1C3-02, 2020.10.9, オンライン',
          },
          {
            url: "",
            text: '宮澤 和貴, 青木 達哉, 堀井 隆斗, 長井 隆行, "Self-Attentionによる物体概念の形成", 第38回日本ロボット学会学術講演会, 1C2-05, 2020.10.9, オンライン',
          },
          {
            url: "",
            text: '三木 晴子, 阿部 香澄, 堀井 隆斗, 長井 隆行, "遠隔保育ロボットを用いた乳幼児の言語発達評価システム～言語聴覚士による巡回支援の補助を目的として～", 日本赤ちゃん学会第20回学術集会, P1-05, 2020.9.19, オンライン Young Investigator\'s Award',
          },
          {
            url: "",
            text: '弓場 亮介, 堀井 隆斗, 長井 隆行, "タスク補助報酬を付加した敵対的逆強化学習による集団行動下エージェントの役割分担", 人工知能学会全国大会, 4G3-GS-7-05, 2020.6.12, オンライン',
          },
          {
            url: "",
            text: '于 楊, 日永田 智絵, 堀井 隆斗, 長井 隆行, "マルチモーダル感情喚起推定とASMR動画解析への応用", 人工知能学会全国大会, 4F2-OS-25a-03, 2020.6.12, オンライン',
          },
          {
            url: "",
            text: '増井 哲史, 宮澤 和貴, 堀井 隆斗, 長井 隆行, "因果効果を用いた不確実環境下における能動的行動選択の効率化", 人工知能学会全国大会, 2M5-OS-3b-01, 2020.6.10, オンライン',
          },
          {
            url: "",
            text: '境 辰也, 宮澤 和貴, 青木 達哉, 堀井 隆斗, 長井 隆行, "人間の受容を考慮した自律エージェントへの説明性付与", 人工知能学会全国大会, 2D5-OS-18b-05, 2020.6.10, オンライン',
          },
          {
            url: "",
            text: '久良木 優太, 宮澤 和貴, 青木 達哉, 堀井 隆斗, 長井 隆行, "Cross-modal BERT : Self-Attentionによるマルチモーダル情報表現の獲得と相互予測", 人工知能学会全国大会, 1Q3-GS-11-04, 2020.6.9, オンライン',
          },
          {
            url: "",
            text: '水野 海渡, 川節 拓実, 堀井 隆斗, 矢野 順彦, 石原 尚, "触覚を備える子供アンドロイド用小型ハンドの骨格の改良と表面張力層の実装", ロボティクス・メカトロニクス講演会2020, 2A2-N12, 2020.5.27, オンライン',
          },
          {
            url: "",
            text: '弓場 亮介, 堀井 隆斗, 長井 隆行, "教示者と身体性が異なる学習者集団の模倣学習を通じた役割分担", HAIシンポジウム2020, P-51, 2020.03.06, オンライン 学生奨励賞',
          },
        ],
      },
      {
        title: "特許",
        items: [
          {
            url: "",
            text: "長井隆行, 阿部香澄, 裴雅超, 張亭芸, 日永田智絵, ビデオチャットロボットシステム、手渡し遊び制御方法および手渡し遊び制御プログラム, 特許第6647711号, 2020.01.17",
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: "赤ちゃん学会第20回学術集会Young Investigator's Award, 三木 晴子, 阿部 香澄, 堀井 隆斗, 長井 隆行, 2020.09.20",
          },
          {
            url: "",
            text: "HAIシンポジウム2020学生奨励賞(Student Encouragement Award), 弓場 亮介, 堀井 隆斗, 長井 隆行, 2020.03.06",
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "https://www4.nhk.or.jp/taihentokoro/x/2020-02-27/21/7642/2121194/",
            text: "所さん！大変ですよ「朗報！？謎の“お助けグッズ”登場」, NHK総合, 2020.2.27",
          },
        ],
      },
    ],
  },
  {
    year: 2019,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: 'Kazuki Miyazawa, Takato Horii, Tatsuya Aoki, Takayuki Nagai, "Integrated Cognitive Architecture for Robot Learning of Action and Language", Frontiers in Robotics and AI, vol.6, 2019',
          },
          {
            url: "",
            text: 'Masatoshi Nagano, Tomoaki Nakamura, Takayuki Nagai, Daichi Mochihashi, Ichiro Kobayashi, Wataru Takano, "HVGH: Unsupervised Segmentation for High-Dimensional Time Series Using Deep Neural Compression and Statistical Generative Model", Frontiers in Robotics and AI, vol.6, 2019',
          },
          {
            url: "",
            text: 'T.Tangiuchi, D.Mochihashi, T.Nagai, S.Uchida, N.Inoue, I.Kobayashi, T.Nakamura, Y.Hagiwara, N.Iwahashi, T.Inamura, "Survey on frontiers of language and robotics", Advanced Robotics,1-31,2019,DOI: 10.1080/01691864.2019.1632223',
          },
          {
            url: "",
            text: 'T.Taniguchi, E.Ugur, M.Hoffmann, L.Jamone, T.Nagai, B.Rosman, T.Matsuka, N.iwahashi, E.Oztop, J.Piater, F.Worgotter, "Symbol Emergence in Cognitive Developmental Systems: a Survey", IEEE Trans. on Cognitive Developmental Systems, vol.11, no.4, pp.494-516, 2019',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: "Takayuki Nagai, AI x Robotics: Towards Human-like General Intelligence, 第4回JST-NFS国際連携シンポジウム, 2019.12.19",
          },
          {
            url: "",
            text: "長井隆行, AI x ロボティクスと人の未来, ソフトバンク・ネットワンシステムズ共催「AI×Co-creation in 日吉キャンパス」, 2019.12.06",
          },
          {
            url: "",
            text: "長井隆行, 確率的生成モデルに基づくロボット学習, 予測的符号化の原理による心性の創発と共有研究集会, 2019.12.07",
          },
          {
            url: "",
            text: "Takayuki Nagai, Building a Robot with Human-like Intelligence: An AI Odyssey, TSC Summit2019, 2019.11.26",
          },
          {
            url: "",
            text: "日永田智絵, 堀井隆斗, 長井隆行, 感情とAI, 人工知能 34巻6号, pp.881-887, 2019年11月",
          },
          {
            url: "",
            text: "長井隆行, サービスロボットの説明性, サービスロボット展2019 サービスロボットに必要な技術まるわかり ～SLAM、ロボット学習そしてAIの説明性～, 2019.10.18",
          },
          {
            url: "",
            text: 'Tomoaki Nakamura, "A Framework for Construction of Multimodal Learning Models SERKET," Workshop on Deep Probabilistic Generative Models for Cognitive Architecture in Robotics @IROS2019',
          },
          {
            url: "",
            text: 'Takayuki Nagai, "Welcome and introduction," Workshop on Deep Probabilistic Generative Models for Cognitive Architecture in Robotics @IROS2019',
          },
          {
            url: "",
            text: 'Taniguchi Tadahiro, Ugur Emre, Ogata Tetsuya, Nagai Takayuki, Demiris Yiannis, "Editorial: Machine Learning Methods for High-Level Cognitive Capabilities in Robotics," Frontiers in Neurorobotics, vo.13, p.83, 2019',
          },
          {
            url: "",
            text: '長井 隆行, "HSRを用いた動作学習 -家庭用サービスロボットの学習に基づく自律化の試み-", 日本ロボット学会第37回学術講演会OSインテリジェントホームロボティクス基調講演, 2019.09.06',
          },
          {
            url: "",
            text: "長井隆行, 確率的生成モデルに基づくロボット学習, 産業技術総合研究所人工知能研究センター第35回AIセミナー「ロボットラーニング」, 2019.07.16",
          },
          {
            url: "",
            text: "長井隆行, 原豪紀, 表現する人工知能 ―表現AI―, 人と共生するAI革命 ～活用事例からみる生活・産業・社会の未来展望～, ㈱エヌ・ティー・エス, 2019.06, ISBN 978-4-86043-608-7",
          },
          {
            url: "",
            text: "Takayuki Nagai, Symbol Emergence in Robotics for Future Human-Machine Collaboration, ビッグデータ合同領域会議, 国立京都国際会館, 2019.03.13 (Invited)",
          },
          {
            url: "",
            text: "長井隆行，岩田健輔, 参照点と操作対象を考慮したガウス過程に基づくロボットの動作学習, センサフュージョン技術の開発と応用事例～自動運転車、協働ロボットへ向けて～, 第８章 自動運転、外界センシング、制御に向けたAI、ディープラーニング技術, 技術情報協会, pp.348-355, ISBN：978-4-86104-736-7, 2019.01.31",
          },
          {
            url: "",
            text: "阿部香澄, ChiCaRo, ものづくり×ロボットコラボフェア, 2019.2.27",
          },
          {
            url: "",
            text: "Takayuki Nagai, Robot Learning of Concepts, Actions, and Language, Shonan meeting invited talk, 2019.02.18",
          },
          {
            url: "",
            text: "長井隆行, AIとロボットの未来, 杉並区和田中学校よのなか科, 2019.02.16",
          },
          {
            url: "",
            text: "アンジェロ カンジェロシ, マシュー シュレシンジャー (著), 岡田 浩之, 谷口 忠大 (翻訳), 萩原良信, 荒川直哉, 長井隆行, 尾形哲也, 稲邑哲也, 岩橋直人, 杉浦孔明, 牧野武文 (翻訳), 発達ロボティクスハンドブック ロボットで探る認知発達の仕組み, 福村出版, 2019.01.17",
          },
        ],
      },
      {
        title: "International conference",
        items: [
          {
            url: "",
            text: 'Masatoshi Nagano, Tomoaki Nakamura, Takayuki Nagai, Daichi Mochihashi, Ichiro Kobayashi, Wataru Takano, "High-dimensional Motion Segmentation by Variational Autoencoder and Gaussian Processes," IROS2019, pp.105-111, Nov. 2019',
          },
          {
            url: "",
            text: 'Yusuke Kato, Tomoaki Nakamura, Takayuki Nagai, Natsuki Yamanobe, Kazuyuki Nagata, Jun Ozawa, "Adjusting Weight of Action Decision in Exploration for Logistics Warehouse Picking Learning," IROS2019, pp. 3557-3564, Nov. 2019',
          },
          {
            url: "",
            text: 'Kazuki Miyazawa, Tatsuya Aoki, Takato Horii, Takayuki Nagai, "Integration of Multiple Generative Modules for Robot Learning", Deep Probabilistic Generative Models for Cognitive Architecture in Robotics@IROS2019 Workshop, 8 November 2019',
          },
          {
            url: "",
            text: 'Ryo Kuniyasu, Tomoaki Nakamura, Takayuki Nagai, and Tadahiro Taniguchi, "Construction of a Multimodal Learning Model Based on Integrating Stochastic Models", Deep Probabilistic Generative Models for Cognitive Architecture in Robotics@IROS2019 Workshop, 8 November 2019',
          },
          {
            url: "",
            text: 'Kohei Fukuda, Takumi Kawasetsu, Hisashi Ishihara, Takato Horii, Ryoichi Nakamura, Hiroshi Kawahira, Minoru Asada, "Measurement of Three-Dimensional Force Applied to Elastic Suture Training Pads for Laparoscopic Suturing", 41st Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC), p.7140-7144, 2019',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '松本 凌, 張 斌, 中村 友昭, 長井 隆行, 大森 隆司, 岡 夏樹, "HMMを用いたロバストな人物の移動軌跡の推定", 第20回計測自動制御学会システムインテグレーション部門講演会, 2C2-07, 2019.12.13, 香川',
          },
          {
            url: "",
            text: '越出 和磨, 小嶋 勝, 前 泰志, 堀井 隆斗, 長井 隆行, 新井 健生, "デュアルピペットを用いた局所化学環境制御システムの定量的評価", 第20回計測自動制御学会システムインテグレーション部門講演会, 2D4-08, 2019.12.13, 香川',
          },
          {
            url: "",
            text: '長野 匡隼, 中村 友昭, 長井 隆行,持橋 大地, 小林 一郎, 高野渉, "Slice Samplingに基づく教師なし分節化における推論の高速化", IBISML2020, 1-053, 2019.11.20, 愛知',
          },
          {
            url: "",
            text: '宮澤 和貴, 青木 達哉, 堀井 隆斗, 長井 隆行, "統合認知モデルによるロボットの概念・行動・言語の同時学習", 第17回ECSRA研究会, 2019.9.14, 大阪',
          },
          {
            url: "",
            text: '阿部 香澄, 長井 隆行, 日永田 智絵, 大森 隆司, 塩見 昌裕, "子どもの振る舞いに基づく遠隔操作型ロボットを用いたパーソナリティ推定手法の提案", 赤ちゃん学会若手部会第7回研究合宿, P-12, 2019.9.8, 神奈川',
          },
          {
            url: "",
            text: '樋口 由樹,阿部 香澄, 植村 優里, 塩見 昌裕, 金井 玲奈, 中村 友昭, 長井 隆行, "ロボットでの幼児の気質推定に基づく遊び提案システムに向けた分析", 赤ちゃん学会若手部会第7回研究合宿, P-8, 2018.9.8, 神奈川',
          },
          {
            url: "",
            text: '阿部 香澄, 植村 優里, 樋口 由樹, 塩見 昌裕, 金井 玲奈, 中村 友昭, 長井 隆行, "ロボットでの幼児の気質推定に基づく遊び提案システムに向けた分析", 日本ロボット学会第37回学術講演会, 3F1-05，2019.9.6，東京',
          },
          {
            url: "",
            text: '阿部 香澄, 長井 隆行, 大森 隆司, 塩見 昌裕, "子どもと遠隔操作型ロボットのインタラクション観察に基づく性格推定手法の提案", 日本ロボット学会第37回学術講演会, 3F2-04，2019.9.6，東京',
          },
          {
            url: "",
            text: '嘉藤 佑亮, 中村 友昭, 長井 隆行, 山野辺 夏樹, 永田 和之, 小澤 順 "シミュレーション上での学習モデルに基づくロボットによる商品整列の強化学習", 日本ロボット学会第37回学術講演会, 3A2-02, 2019.9.6, 東京',
          },
          {
            url: "",
            text: '國安 瞭, 中村 友昭, 長井 隆行, 谷口 忠大, "確率モデルとニューラルネットワークの相互作用による教師なしマルチモーダル学習", 日本ロボット学会第37回学術講演会, 3A2-04，2019.9.6，東京',
          },
          {
            url: "",
            text: '布川 遼太郎, 中村 友昭, 長井 隆行, "HSMMを用いた物体と動作の時間的分節化によるロボットの統合概念学習" 日本ロボット学会第37回学術講演会, 3A3-01，2019.9.6，東京',
          },
          {
            url: "",
            text: '越出 和磨, 小嶋 勝, 前 泰志, 長井 隆行, 堀井 隆斗, 新井 健生, "局所化学環境制御を目的としたデュアルピペットシステムの機能性向上", 日本ロボット学会第37回学術講演会, 1K2-05，2019.9.4，東京',
          },
          {
            url: "",
            text: '長野 匡隼, 中村 友昭, 長井 隆行, 持橋 大地, 小林 一郎, 高野 渉, "HVGH: 高次元時系列データの深層圧縮と教師なし分節化", 人工知能学会全国大会, 1L3-J-11-01, 2019.6.6, 新潟',
          },
          {
            url: "",
            text: '藤元 陸, 堀井 隆斗, 青木 達哉, 長井 隆行, "敵対的生成ネットワークを利用した創造的データ生成の枠組み", 人工知能学会全国大会, 3E4-OS-12b-03, 2019.6.6, 新潟',
          },
          {
            url: "",
            text: '李 為達, 日永田 智絵, 長井 隆行, "文章中の潜在要素を考慮した対話システム", 人工知能学会全国大会, 3K4-J-2-03, 2019.6.6, 新潟',
          },
          {
            url: "",
            text: '日永田 智絵, 堀井 隆斗, 長井 隆行, "ソマティック・マーカー仮説に基づく行動選択", 人工知能学会全国大会, 3G3-OS-18a-02, 2019.6.6, 新潟',
          },
          {
            url: "",
            text: '堀井 隆斗, 長井 隆行, "制限ボルツマンマシンによる自由エネルギー最小化に基づく能動的知覚", 人工知能学会全国大会, 3G3-OS-18a-03, 2019.6.6, 新潟',
          },
          {
            url: "",
            text: '長井 隆行, "感情と記号創発ロボティクス", 人工知能学会全国大会, 2D1-J-11-05, 2019.6.5, 新潟',
          },
          {
            url: "",
            text: '青木 達哉, 南坂 雅人, 長井 隆行, "マルチモーダル学習のための階層ニューラルトピックモデル", 人工知能学会全国大会, 1I4-J-2-04, 2019.6.4, 新潟',
          },
          {
            url: "",
            text: '國安 瞭, 中村 友昭, 長井 隆行, 谷口 忠大, "確率モデルの統合によるマルチモーダル学習モデルの構築", 人工知能学会全国大会, 1L4-J-11-02, 2019.6.4, 新潟',
          },
          {
            url: "",
            text: '宮澤 和貴, 青木 達哉, 堀井 隆斗, 長井 隆行, "統合認知モデルによるロボットの概念・行動・言語の同時学習", 人工知能学会全国大会, 1L4-J-11-03, 2019.6.4, 新潟',
          },
          {
            url: "",
            text: '水野 海渡, 川節 拓実, 石原 尚, 堀井 隆斗, 浅田 稔, "子供アンドロイドの接触反応実験に向けた骨格と触覚を備える小型手部の開発", ロボティクス・メカトロニクス講演会2019, 1P1-T07, 2019.6.5, 広島',
          },
          {
            url: "",
            text: '久米 弘祐, 川節 拓実, 堀井 隆斗, 石原 尚, 浅田 稔, "三角格子状に配置したコイルと磁性マーカを用いた柔軟触覚センサの基礎特性評価", ロボティクス・メカトロニクス講演会2019, 1P1-T06, 2019.6.5, 広島',
          },
        ],
      },
      {
        title: "特許",
        items: [
          {
            url: "",
            text: "中村友昭, 長井隆行, 観測値の予測装置及び観測値の予測方法, 特許第6464447, 2019.01.18",
          },
        ],
      },
      {
        title: "受賞等",
        items: [],
      },
      {
        title: "Media",
        items: [
          {
            url: "",
            text: "ひるまえほっと「テクノロジーで子育てにゆとりを」, NHK総合, 2019.11.22",
          },
          {
            url: "",
            text: "森山和道の「未来の断片」:行動を学習するロボットの知能をどうやって設計するか, HuaWave, 2019.07.31",
          },
          {
            url: "",
            text: "日刊工業新聞, 育児支援ロボなど紹介 さいたま市でイベント, 2019.3.1",
          },
          {
            url: "",
            text: "テレビ埼玉、電気通信大学のロボット技術発表 ／埼玉県、2019.2.27",
          },
          {
            url: "",
            text: "ロボットと友だちになれるかな, AIの進化で「人間らしさ」,八重山毎日新聞, 2019.01.14",
          },
          {
            url: "",
            text: "AI進化ロボットに「人間らしさ」, ロボットの発達研究を紹介, 岩手日日新聞,2019.01.13",
          },
          {
            url: "",
            text: "ロボットと友だちになれるかな, AIの進化で「人間らしさ」, 長野日報, 2019.01.05",
          },
          {
            url: "",
            text: "AI進化ロボットがトモダチに, ロボットの発達研究を紹介, 熊本日日新聞, 2019.01.01",
          },
          {
            url: "",
            text: "ロボットと友だちになれるかな, AIの進化で「人間らしさ」, 南海日日新聞, 2019.01.01",
          },
        ],
      },
      {
        title: "アウトリーチ",
        items: [
          {
            url: "",
            text: "「離れていても一緒に子育て！遠隔協同子育てロボットChiCaRo」（展示）, GUGEN2019, 2019.12.8",
          },
          {
            url: "",
            text: "「遠隔育児支援ロボットChiCaRo」（展示）, 2020年、渋谷。超福祉の日常を体験しよう展, 2019.9.3～9.9",
          },
          {
            url: "",
            text: "「遠隔育児支援ロボットChiCaRo」（展示）, イノベーションジャパン2019, 2019.8.29～8.30",
          },
        ],
      },
    ],
  },
  {
    year: 2018,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: 'T.Taniguchi, E.Ugur, M.Hoffmann, L.Jamone, T.Nagai, B.Rosman, T.Matsuka, N.iwahashi, E.Oztop, J.Piater, F.Worgotter, "Symbol Emergence in Cognitive Developmental Systems: a Survey," IEEE Trans. on Cognitive Developmental Systems, 10.1109/TCDS.2018.2867772, to appear',
          },
          {
            url: "",
            text: 'Kaori Kumagai, Ichiro Kobayashi, Daichi Mochihashi, Hideki Asoh, Tomoaki Nakamura, Takayuki Nagai, "Natural Language Generation using Monte Carlo Tree Search, " Journal of Advanced Computational Intelligence & Intelligent Informatics, to appear',
          },
          {
            url: "",
            text: 'T.Nakamura, T.Nagai, T.Taniguchi, "SERKET: An Architecture For Connecting Stochastic Models to Realize a Large-Scale Cognitive Model," Frontiers in Neurorobotics, doi: 10.3389/fnbot.2018.00025, 2018',
          },
          {
            url: "https://www.tandfonline.com/doi/abs/10.1080/01691864.2018.1434014?needAccess=true&journalCode=tadr20",
            text: 'Kasumi Abe, Masahiro Shiomi, Yachao Pei, Tingyi Zhang, Narumitsu Ikeda, Takayuki Nagai, "ChiCaRo: tele-presence robot for interacting with babies and toddlers", Advanced Robotics, 2018',
          },
          {
            url: "",
            text: 'Chie Hieida, Takato Horii and Takayuki Nagai, "Deep Emotion: A Computational Model of Emotion Using Deep Neural Networks," arXiv:1808.08447v1, 2018',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: "長井隆行, 人と共存するこれからのAI×ロボティクス, 平成30年度基礎工学部談話会, 2018.12.11",
          },
          {
            url: "",
            text: "阿部香澄, AI・ロボットを利用した「ふれあい」の育児支援, さばえものづくり博覧会2018 基調講演, 2018.10.26（招待講演）",
          },
          {
            url: "",
            text: "Takayuki Nagai, Tatsuya Aoki, Multimodal Categorization via Deep Learning, Symposium on Symbol Emergence in Robotics @JNNS 2018, 2018.10.25 (invited talk)",
          },
          {
            url: "",
            text: "長井隆行, ロボットとAI, 第９回横幹連合コンファレンス, OS超スマート社会とAI, 2018.10.06",
          },
          {
            url: "",
            text: "阿部香澄, 子育てのあり方を変える遠隔育児支援ロボットChiCaRo, ダイバーシティ・セミナー＆女性研究者によるシーズ発表会, 首都圏産業活性化協会, 2018.10.5（招待講演）",
          },
          {
            url: "",
            text: "長井隆行, AI×ロボットの目指すものとは？, 西美濃創生広域連携推進協議会広域合同研修, 2018.09.25（招待講演）",
          },
          {
            url: "",
            text: "長井隆行, 人と共存するこれからの AI × ロボティクス, GTC JAPAN2018, 2018.09.13（招待講演）",
          },
          {
            url: "",
            text: "長井隆行, 自分・環境そして他者：マニピュレーションとコミュニケーションのあいだ, SI部門ワークショップ, AI・ロボット研究における領域融合　～マニピューレーションとコミュニケーション～, 2018.09.12（招待講演）",
          },
          {
            url: "",
            text: "長井隆行, 確率ロボティクスとデータ工学ロボティクスのこれまでとこれから, 日本ロボット学会第36回学術講演会, OS基調講演, 2018.09.05",
          },
          {
            url: "",
            text: "長井隆行, AI研究の最近の動向について, 杉並区立中学校副校長会研修, 2018.8.21",
          },
          {
            url: "",
            text: "長井隆行，記号創発ロボティクス：人と共存するこれからのAI・ロボティクス，関西大学先端科学技術推進機構研究部門別発表会，2018.8.1 (招待講演)",
          },
          {
            url: "",
            text: "長井隆行, 人工知能は感情をもつか？, 第4回人工知能先端研究センターセミナー, 2018.07.27",
          },
          {
            url: "",
            text: "Takayuki Nagai, Integrated Cognitive Model for Robots to Learn Concepts, Actions, and Language, ALIFE2018: Workshop on the emergence and evolution of social learning, communication, language and culture in natural and artificial agents, July. 27, 2018, Tokyo (invited talk)",
          },
          {
            url: "",
            text: "長井隆行, 人工知能先端研究センターの紹介, 産学官連携DAY100周年記念シンポジウム, 2018.06.20",
          },
          {
            url: "",
            text: "栗原聡, 長井隆行, 小泉憲裕, 坂本真樹, 内海彰, 人工知能と社会：2025年の未来予想, オーム社, 2018.02",
          },
          {
            url: "http://www.crc.uec.ac.jp/pickup/seminar/113.html",
            text: "宮澤和貴, 「AI、それを作る人たち」, データサイエンティストを目指す学生,電気通信大学産学官連携センター 第113回研究開発セミナー，電気通信大学 創立80周年記念会館3階フォーラム，2018.03.09",
          },
        ],
      },
      {
        title: "International conference",
        items: [
          {
            url: "",
            text: 'Kensuke Iwata, Tatsuya Aoki, Takato Horii, Tomoaki Nakamura, Takayuki Nagai, "Learning and Generation of Actions from Teleoperation for Domestic Service Robots," 2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), pp.4067-4074, Madrid, Spain, October 1-5, 2018',
          },
          {
            url: "",
            text: 'Masatoshi Nagano, Tomoaki Nakamura, Takayuki Nagai, Daichi Mochihashi, Ichiro Kobayashi, Masahide Kaneko, "Sequence Pattern Extraction by Segmenting Time Series Data Using GP-HSMM with Hierarchical Dirichlet Process," 2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), pp.4067-4074, Madrid, Spain, October 1-5, 2018',
          },
          {
            url: "",
            text: 'J.Ichikawa, K.Fujii, T.Nagai, T.Omori, N.Oka, "Quantitative Analysis and Visualization of Children\'s Group Behavior from the Perspective of Development of Spontaneity and Sociality," in Rodrigues A., Fonseca B., Preguiça N. (eds) Collaboration and Technology. CRIWG 2018, Lecture Notes in Computer Science, vol 11001. pp. 169–176, Springer, Cham',
          },
          {
            url: "",
            text: 'Chie Hieida, Takato Horii and Takayuki Nagai, "Toward Empathic Communication: Emotion Differentiation Via Face-To-Face Interaction in Generative Model of Emotion," The 8th Joint IEEE International Conference on Development and Learning and on Epigenetic Robotics 2018, ICDL2018',
          },
          {
            url: "",
            text: 'Satoru Oshikawa, Tomoaki Nakamura, Takayuki Nagai, Kotaro Funakoshi, Naoto Iwahashi, Mikio Nakano, and Masahide Kaneko, "Interaction Modeling Based on Segmenting Two Persons Motions Using Coupled GP-HSMM," IEEE International Conference on Robot and Human Interactive Communication, pp.288-293, Nanjing, China, August 27-31, 2018v',
          },
          {
            url: "",
            text: 'Chie Hieida, Takato Horii, and Takayuki Nagai, "Emotion Differentiation based on Decision-Making in Emotion Model," IEEE International Conference on Robot and Human Interactive Communication, pp.659-665, Nanjing, China, August 27-31, 2018',
          },
          {
            url: "",
            text: 'Akihito Shimazu, Chie Hieida1, Takayuki Nagai1,2, Tomoaki Nakamura1,2,Yuki Takeda3, Takenori Hara3, Osamu Nakagawa3, Tsuyoshi Maeda, "Generation of Gestures During Presentation for Humanoid Robots," IEEE International Conference on Robot and Human Interactive Communication, pp.961-968, Nanjing, China, August 27-31, 2018',
          },
          {
            url: "",
            text: 'Anh-Tuan Nguyen, Chie Hieida, and Takayuki Nagai, "A Model of Generating and Predicting Intentiontoward Human-Robot Cooperation," IEEE International Conference on Robot and Human Interactive Communication, pp.113-120, Nanjing, China, August 27-31, 2018',
          },
          {
            url: "",
            text: 'Kazuki Miyazawa, Tatsuya Aoki, Takato Horii, Tomoaki Nakamura, and Takayuki Nagai, "Online Language Learning by Integrated Cognitive Architecture", ALIFE2018: Workshop on the emergence and evolution of social learning, communication, language and culture in natural and artificial agents, July. 2018, Tokyo',
          },
          {
            url: "",
            text: 'Kensuke Iwata, Tomoaki Nakamura, Takayuki Nagai, "Learning of Motion Primitives Using Reference-Point-Dependent GP-HSMM for Domestic Service Robots," the 15th International Conference on Intelligent Autonomous Systems, pp.1-12, June 2018, BadenBaden, Germany',
          },
          {
            url: "http://delivery.acm.org/10.1145/3180000/3177048/p127-hieida.pdf?ip=130.153.154.69&id=3177048&acc=OPENTOC&key=D2341B890AD12BFE%2E9E58D7C9B063293D%2E4D4702B0C3E38B35%2E9F04A3A78F7D3B8D&__acm__=1522667251_69fcd6adb2b07d347178115557d5413b",
            text: 'Chie Hieida, Takato Horii, Takayuki Nagai, "Decision-Making in Emotion Model", HRI 2018, pp.127-128, March 5-8, 2018, Chicago, IL, USA',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '嘉藤 佑亮, 中村 友昭, 長井 隆行, 永田 和之, 山野辺 夏樹, 小澤 順, "柔軟物の形状変化を考慮した折り畳み動作の獲得", 2C1-04,2018.09.06, 名古屋',
          },
          {
            url: "",
            text: '畝本 涼, 小林 航平, Zhang Xi, 岩田 健輔, 青木 達哉, 日永田 智絵, 長井 隆行, "ロボットによる家庭内タスク実行のためのword2vecを用いた物体学習", 3D2-05, 2018.09.07, 名古屋',
          },
          {
            url: "",
            text: '宮澤和貴, 岩田健輔, 勝又勇貴, 黄瀬輝, 田渕義基, 水地良明, 坂戸達陽, 相良陸成, 谷口忠大, 長井隆行, "複数の概念形成モデルの統合によるロボットの家事タスクの実現", 日本ロボット学会第36回学術講演会, 1C2-04, 2018.09.05, 名古屋',
          },
          {
            url: "",
            text: '山下舜人，堀井隆斗，北園淳，大泉匡史，長井隆行, "統合情報理論を用いた子どもの行動解析―年齢の変化に伴う集団形成の変化と一体感の定量化に向けて―", 日本赤ちゃん学会第18回学術集会, P-110, 2018.7.7, 東京',
          },
          {
            url: "",
            text: '阿部香澄, 塩見昌裕, 日永田智絵, 長井隆行, "乳幼児と祖父母の交流を増やす遠隔共同育児の試み―核家族社会におけるテレプレゼンスロボットを介した育児スタイルの提案―", 日本赤ちゃん学会第18回学術集会, P-207, 2018.7.7, 東京',
          },
          {
            url: "",
            text: '宮澤和貴, 青木達哉, 堀井隆斗, 日永田智絵, 中村友昭, 長井隆行, "統合モデルを用いた行動・言語・プランニングの学習", 人工知能学会全国大会, 1G3-04, Jun.2018',
          },
          {
            url: "",
            text: '阿部佑香, 武長智子, 大野真梨奈, 薮ノ内伸晃, 阿部香澄, 長井隆行, "幼児の生活習慣行動における音楽の行動着手誘引効果の検証", こども環境学会2018年大会, A10-48, ポスター, 2018.5.20, 埼玉',
          },
          {
            url: "",
            text: '青木達哉, 長井隆行, "Variational Autoencoderを用いたマルチモーダル情報の統合", 情報処理学会第80回全国大会, 1C-03, Mar.2018',
          },
          {
            url: "",
            text: '宮澤和貴, 堀井隆斗, 日永田智絵, 青木達哉, 中村友昭, 長井隆行, "統合認知モデルによるロボットの概念・行動・言語の学習", 情報処理学会第80回全国大会, N5-06, 2018.03.14 学生奨励賞',
          },
          {
            url: "",
            text: '長野匡隼，中村友昭，長井隆行，持橋大地，小林一郎，金子正秀，"階層ディリクレ過程による動作クラス数推定を導入したGP-HSMMによる連続動作からの基本動作抽出"，情報処理学会全国大会，6M-03，Mar. 2018 学生奨励賞',
          },
          {
            url: "",
            text: '船田美雪，中村友昭，長井隆行，金子正秀，"概念・言語獲得モデルに対する構成論的解析 -概念形成過程における育児語の影響-"，情報処理学会全国大会，5N-03，Mar. 2018',
          },
          {
            url: "",
            text: '布川遼太郎，宮澤和貴，中村友昭，長井隆行，金子正秀，"時系列マルチモーダル情報の分節・分類に基づくロボットによる概念の学習"，情報処理学会全国大会，5N-05，Mar. 2018',
          },
          {
            url: "",
            text: '押川慧，中村友昭，長井隆行，船越孝太郎，岩橋直人，金子正秀，"分節化による行動の抽出とその相互関係の推定に基づくインタラクションのモデル化"，情報処理学会全国大会，5N-08，Mar.2018',
          },
          {
            url: "",
            text: '岩田健輔，長井隆行，中村友昭，青木達哉，"参照点と操作対象に依存したGP-HSMMによるロボットの動作学習"，情報処理学会全国大会，7N-02，Mar.2018 学生奨励賞',
          },
          {
            url: "",
            text: '藤元陸, 日永田智絵, 堀井隆斗, 宮澤和貴, 長井隆行, "GANを用いたマルチモーダル情報の生成", 情報処理学会全国大会，6N-05, Mar. 2018 学生奨励賞',
          },
          {
            url: "",
            text: '佐々木友弥，岩橋直人，船越孝太郎，押川慧，中村友昭，長井隆行，"MDL Coupled HMM によるマルチモーダルな協調行為の学習"，情報処理学会全国大会，2Q-09，Mar.2018 学生奨励賞',
          },
        ],
      },
      {
        title: "特許",
        items: [
          {
            url: "",
            text: '長井隆行, 阿部香澄, 濱田侑輝, 日永田智絵, "遠隔遊び支援システム、心的状態・性格推定システム、遊び推定システム、方法およびプログラム",特開2018-081631',
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: "ロボカップジャパンオープン2018 おおがき @ホーム Domestic Standard Platform League (DSPL) 優勝，ロボット学会賞受賞，2018.05",
          },
          {
            url: "",
            text: '情報処理学会全国大会学生奨励賞, 宮澤和貴, 堀井隆斗, 日永田智絵, 青木達哉, 中村友昭, 長井隆行, "統合認知モデルによるロボットの概念・行動・言語の学習", 情報処理学会第80回全国大会, N5-06, 2018.03.14',
          },
          {
            url: "",
            text: '情報処理学会全国大会学生奨励賞, 長野匡隼, 中村友昭, 長井隆行, 持橋大地, 小林一郎, 金子正秀, "階層ディリクレ過程による動作クラス数推定を導入したGP-HSMMによる連続動作からの基本動作抽出"，情報処理学会全国大会，6M-03，Mar.2018',
          },
          {
            url: "",
            text: '情報処理学会全国大会学生奨励賞, 岩田健輔, 長井隆行, 中村友昭, 青木達哉, "参照点と操作対象に依存したGP-HSMMによるロボットの動作学習"，情報処理学会全国大会, 7N-02, Mar.2018',
          },
          {
            url: "",
            text: '情報処理学会全国大会学生奨励賞, 藤元陸, 日永田智絵, 堀井隆斗, 宮澤和貴, 長井隆行, "GANを用いたマルチモーダル情報の生成", 情報処理学会全国大会，6N-05, Mar. 2018',
          },
          {
            url: "",
            text: '情報処理学会全国大会学生奨励賞, 佐々木友弥，岩橋直人，船越孝太郎，押川慧，中村友昭，長井隆行，"MDL Coupled HMM によるマルチモーダルな協調行為の学習"，情報処理学会全国大会，2Q-09，Mar.2018',
          },
          {
            url: "",
            text: "第3回HSRユーザ会優秀成果賞, 岩田健輔, 堀井隆斗, 青木達哉, 宮澤和貴, 長井隆行, 2018.3",
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "",
            text: "プライムニュース, さばえものづくり博 開幕　家庭用遠隔保育ロボット「チカロ」, 福井テレビ, 2018.10.26",
          },
          {
            url: "",
            text: "PC Watch 森山和道の「ヒトと機械の境界面」, ロボットやAIなどの人工エージェントが人間社会を向上させるためには?, AIXシンポジウムの紹介, 2018,09,12",
          },
          {
            url: "",
            text: "解剖先端拠点, 電気通信大学人工知能先端研究センター「AIに社会性, 幅広く」, 日経産業新聞, 2018.09.05",
          },
          {
            url: "",
            text: "日経ビジネスAssocie, 2025年、AIは「心」を持つ？ロボットと人間が協働する世界に, 長井のコメントを掲載, 2018.08.10",
          },
          {
            url: "https://robotstart.info/2018/06/21/moriyama_mikata-no53.html",
            text: "ロボスタ, 概念や言語を学習し家庭内作業をこなせる汎用ロボットへの道　電通大 長井研究室の取り組み 産学官連携DAYから",
          },
          {
            url: "",
            text: "読売中高生新聞, 講義の鉄人：構成的人間科学, 2018.05.04",
          },
          {
            url: "",
            text: "Newton 2018年6月号, 人工知能は人より賢くなれるか「汎用AI」の実現をめざす人工知能研究の最前線, 2018.4.26",
          },
          {
            url: "",
            text: "TV東京, ミライダネ, AIが人間になっちゃう! で仕事もサボれちゃうかも!?(長井研の研究を紹介), 2018.03.31",
          },
          {
            url: "",
            text: "日刊工業新聞, 上級者の言葉や動作映す (DNPとの共同研究), 2018.02.12",
          },
          {
            url: "",
            text: "日刊工業新聞, ロボ動作を最適化 (DNPとの共同研究), 2018.02.09",
          },
          {
            url: "",
            text: "高校生新聞1・2月号, 最先端ロボット何ができる？遠隔保育ロボット「ChiCaRo」子育てをサポート, 2018.1.16",
          },
        ],
      },
    ],
  },
  {
    year: 2017,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: 'Andres Hernandez-Matamoros, Takayuki Nagai, Muhammad Attamimi, Mariko Nakano and Hector Perez-Meana, "Facial expression recogntion in unconstrained environment," Frontiers in Artificial Intelligence and Applications, pp.525-538, 2017.01 (10.3233/978-1-61499-800-6-525)',
          },
          {
            url: "",
            text: 'Joe Nishihara, Tomoaki Nakamura, Takayuki Nagai, "Online Algorithm for Robots to Learn Object Concepts and Language Model", IEEE Transactions on Cognitive and Developmental Systems, vol.9, No.3, pp.255-268, 2017.09',
          },
          {
            url: "",
            text: 'Tomoaki Nakamura, and Takayuki Nagai, "Ensemble-of-Concept Models for Unsupervised Formation of Multiple Categories," IEEE Transactions on Cognitive and Developmental Systems, 2017.09 DOI:10.1109/TCDS.2017.2745502',
          },
          {
            url: "https://www.frontiersin.org/articles/10.3389/fnbot.2017.00067/full",
            text: 'Tomoaki Nakamura, Takayuki Nagai, Daichi Mochihashi, Ichiro Kobayashi, Hideki Asoh and Masahide Kaneko, "Segmenting Continuous Motions with Hidden Semi-Markov Models and Gaussian Processes", Frontiers in Neurorobotics, Article67, vol.11, 2017.12',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: "長井隆行, 岩田健輔, 中村友昭, 記号創発ロボティクスによる人間機械コラボレーション基盤創成, 人工知能学会誌, Vol. 32 No. 5, pp.730-738, 2017.09",
          },
          {
            url: "",
            text: "長井隆行(分担執筆), 正直シグナル, 人工知能学大事典, 共立出版, p.859, 2017.07",
          },
          {
            url: "",
            text: "長井隆行, 他者を「理解」するロボットが人と共存する社会をつくり上げる, NTTファシリティーズジャーナル, No.321, pp.2-5, 2017.05",
          },
          {
            url: "",
            text: "長井隆行, 巻頭言：知能と多様性, 知能と情報vol.29, no.2, p.41, 2017.04",
          },
          {
            url: "",
            text: "Takayuki Nagai, Symbol Emergence in Robotics for future human-machine collaboration, UCB-UEC workshop, 2017.03.27",
          },
          {
            url: "",
            text: "長井隆行, ロボットのためのAI? AIのためのロボット?, 人工知能先端研究センターキックオフシンポジウム, パナソニックセンター東京 2017.03.16",
          },
          {
            url: "",
            text: '長井隆行, Dusk of Robocup@Home and Dawn of "Real" Collaboration, 第2回HSRユーザー会 トヨタ産業技術記念館 大ホール, 2017.02.28',
          },
          {
            url: "",
            text: "長井隆行, 記号創発ロボティクス　～人とロボットの真なるコミュニケーション～, 自律分散システムシンポジウム2017, 特別講演, 2017.01.30",
          },
          {
            url: "",
            text: '中村友昭, 長井隆行, "確率モデルに基づくロボットによる概念・言語獲得", 認知科学, Vol.24, No.1, pp.23-32, 2017.03',
          },
        ],
      },
      {
        title: "International conference",
        items: [
          {
            url: "",
            text: 'Kazuki Miyazawa, Tatsuya Aoki, Chie Hieida, Kensuke Iwata, Tomoaki Nakamura, and Takayuki Nagai, "Integration of Multimodal Categorization and Reinforcement Learning for Robot Decision-Making", IROS2017: Workshop on Machine Learning Methods for High-Level Cognitive Capabilities in Robotics, Sep. 2017',
          },
          {
            url: "",
            text: 'Miyuki Funada, Tomoaki Nakamura, Takayuki Nagai and Masahide Kaneko, "Analysis of the Effect of Infant-Directed Speech on Mutual Learning of Concepts and Language Based on MLDA and Unsupervised Word Segmentation", IROS2017: Workshop on Machine Learning Methods for High-Level Cognitive Capabilities in Robotics, Sep. 2017',
          },
          {
            url: "",
            text: 'Ye Kyaw Thu, Takuya Ishida, Naoto Iwahashi, Tomoaki Nakamura and Takayuki Nagai, "Symbol Grounding from Natural Conversation for Human-Robot Communication", HAI2017, Oct. 2017',
          },
          {
            url: "",
            text: 'Takayuki.Nagai, "Analysis of Children\'s Motion in Eurhythmics," International Workshop on Smart Info-Media Systems in Asia (SISA2017), pp.162-167, Fukuoka, Japan, Sep. 2017',
          },
          {
            url: "",
            text: 'Kasumi.Abe, Yuki.Hamada, Takayuki.Nagai, Masahiro.Shiomi, Takashi.Omori, "Estimation of Child\'s Personality for Child-Robot Interaction," IEEE International Symposium on Robot and Human Interactive Communication(RO-MAN2017), Lisbon, Portugal, 2017',
          },
          {
            url: "",
            text: 'Chie Hieida,Takayuki Nagai, "A Model of Emotion for Empathic Communication", The 12th ACM/IEEE International Conference on Human-Robot Interaction (HRI2017), pp.133-134, March 6-9, 2017',
          },
          {
            url: "",
            text: 'Tatsuya Aoki, Tomoaki Nakamura and Takayuki Nagai, "Online Joint Learning of Object Concepts and Language", IEEE ICDL-EPIROB2017 Workshop Second Workshop on Language Learning, Lisbon, Portugal, Sep. 2017',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '宮澤 和貴，日永田 智絵，堀井 隆斗，長井 隆行，"Sensoroid：人の身体性を利用した知能"，P-41，HAIシンポジウム2017，2017.12',
          },
          {
            url: "",
            text: '日永田智絵，長井隆行，"HRIにおける共感コミュニケーション実現のための感情モデルの提案"，OS11-3，日本認知科学会第34回大会，2017.09',
          },
          {
            url: "",
            text: '阿部香澄, 濱田侑輝, 長井隆行, 塩見昌裕, 大森隆司, "ロボットとの遊び行動分析に基づく子どもの性格推定", 3D3-04, 第35回日本ロボット学会学術講演会, 2016.09',
          },
          {
            url: "",
            text: '宮澤 和貴，青木 達哉, 日永田 智絵, 岩田 健輔, 中村 友昭, 長井 隆行, "多層マルチモーダルLDAと強化学習を用いた概念と語彙の学習", IC2-4, 第29回計測自動制御学会 自律分散システム・シンポジウム, Jan.2017',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2017/pdf/647.pdf",
            text: '日永田智絵, 長井隆行, "人－ロボットコミュニケーションのための感情生成モデルの提案", 3D2-OS-37b-1, 第31回人工知能学会全国大会, 2017.05',
          },
        ],
      },
      {
        title: "特許",
        items: [
          {
            url: "",
            text: "中村友昭, 長井隆行, 岩田健輔, 情報処理装置、情報処理方法およびプログラム, PCT/JP2017/032109 (2017/09/06)",
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: "HAIシンポジウム2017 優秀ポスター発表賞（Impressive Poster Award）, 2017.12.12, 「Sensoroid：人の身体性を利用した知能」宮澤 和貴，日永田 智絵，堀井 隆斗，長井 隆行",
          },
          {
            url: "",
            text: "ロボカップジャパンオープン2017人工知能学会賞, 2017.05, 人とロボットの協調に向けた学習フレームワーク, 岩田健輔, 宮澤和貴, 南坂雅人, Nguyen A. Tuan, 嶋津章仁, Barry Mamadou Telli, 山下舜人, 畝本涼, 青木達哉, 日永田智絵, 中村友昭, 長井隆行",
          },
          {
            url: "",
            text: 'ロボカップジャパンオープン2017 ロボカップ研究賞, 2017.05 (受賞論文：Takahiro Kobori, Tomoaki Nakamura, Mikio Nakano, Takayuki Nagai, Naoto Iwahashi, Kotaro Funakoshi, and Masahide Kaneko, "Robust Comprehension of Natural Language Instructions by a Domestic Service Robot", Advanced Robotics. pp. 1530-1543, Nov. 2016',
          },
          {
            url: "",
            text: "ロボカップジャパンオープン2017@ホーム Domestic Standard Platform League (DSPL) 優勝，2017.05",
          },
          {
            url: "",
            text: "ロボカップジャパンオープン2017@ホーム Open Platform League (OPL) 優勝，2017.05",
          },
          {
            url: "",
            text: "HSRコミュニティー貢献賞, 2017.02",
          },
          {
            url: "",
            text: "HAI-2016 Impressive Poster Award, 日永田智絵, 長井隆行, 共感コミュニケーションに向けた感情モデルの提案, 2017.01",
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "",
            text: 'NHKシブ5時, "目指すはアトム！最先端AI研究所に潜入", 2017.12.21',
          },
          {
            url: "http://www4.nhk.or.jp/bakumon/x/2017-11-22/21/8285/1665222/",
            text: 'NHK探検バクモン, "ＡＩ？人工知能先端研究センター", 2017.11.12',
          },
          {
            url: "https://www.jetro.go.jp/tv/internet/2017/11/96862150d3d5a8dc.html",
            text: "日経CNBC 世界は今－JETRO Global Eye, 中国のイノベーションがもたらす新たな商機, パンゴリンとの共同研究を紹介,2017.11.15",
          },
          {
            url: "",
            text: "AERA，シニアこそネットに集え（ChiCaRoを紹介），No.48，2017.10.30",
          },
          {
            url: "",
            text: '読売テレビ関西情報ネットten"日本の救世主は人型ロボット!?",2017.06.08',
          },
          {
            url: "http://www.nikkan.co.jp/articles/view/00426562?gnr_footer=0007702",
            text: "日刊工業新聞, ＡＩで日常生活の先回り提案－電通大、作業判定システム開発, 2017.05.01",
          },
          {
            url: "http://pc.watch.impress.co.jp/docs/column/kyokai/1050334.html",
            text: "PC Watch, 理解とは予測、ロボットはAIの単なる身体ではない, AIXキックオフシンポの紹介, 2017.03.21",
          },
          {
            url: "",
            text: "日経ロボティクス, 中国で急速に普及するレストラン向けサービスロボ, pp.10-12, 2017.01",
          },
        ],
      },
    ],
  },
  {
    year: 2016,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: 'Joe Nishihara, Tomoaki Nakamura, Takayuki Nagai, "Online Algorithm for Robots to Learn Object Concepts and Language Model," IEEE Transactions on Cognitive and Developmental Systems, accepted',
          },
          {
            url: "",
            text: 'Muhammad Attamimi, Yuji Ando, Tomoaki Nakamura, Takayuki Nagai, Daichi Mochihashi, Ichiro Kobayashi, and Hideki Asoh, "Learning Word Meanings and Grammar for Verbalization of Daily Life Activities Using Multilayered Multimodal Latent Dirichlet Allocation and Bayesian Hidden Markov Models," Advanced Robotics, accepted',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: "長井隆行、記号創発ロボティクスによる人間機械コラボレーション基盤の創成、情報処理学会第78回全国大会「知のコンピューティング、次の一手」, 11 Mar. 2016 (招待講演)",
          },
          {
            url: "",
            text: 'Takayuki Nagai, "Symbol Emergence in Robotics: Toward Robots that Learn Language", International Workshop on Cognitive Neuroscience Robotics, 21 Feb. 2016 (invited talk)',
          },
          {
            url: "",
            text: '長井隆行，中村友昭，"記号創発ロボティクス ─マルチモーダルカテゴリゼーションから言語に至る構成の道筋─", 人工知能 Vol. 31, No.1, pp.59-66, 2016',
          },
          {
            url: "",
            text: '長井隆行, 中村友昭, 岡夏樹, 大森隆司, "子供─大人インタラクションの認知科学的分析とモデル化", 人工知能 Vol. 31, No.1, pp.19-26, 2016',
          },
          {
            url: "",
            text: '植田一博, 小野哲雄, 今井倫太, 長井隆行, 竹内勇剛, 鮫島和行, 大本義正, "意思疎通のモデル論的理解と人工物設計への応用", 人工知能 Vol. 31, No. 1, pp3-10, 2016',
          },
        ],
      },
      {
        title: "International conference",
        items: [
          {
            url: "",
            text: 'Muhammad Attamimi, Yusuke Katakami, Kasumi Abe, Takayuki Nagai, Tomoaki Nakamura, "Modeling of Honest Signals for Human Robot Interaction," ACM/IEEE International Conference on Human-Robot Interaction (HRI2016), pp.415-416, 2016',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '濱園侑美, 小林一郎, 麻生英樹, 持橋大地, Muhammad Attamimi, 中村友昭, 長井隆行, "語彙の分散意味に基づくヒューマノイドロボットの動作生成に向けた基礎的検討", 言語処理学会第22回年次大会, P1-4, 2016',
          },
          {
            url: "",
            text: '樺山絵里, 麻生英樹, 小林一郎, 持橋大地, Muhammad Attamimi, 中村友昭, 長井隆行, "言語モデルを用いた人の動作を説明するテキスト生成およびその評価", 言語処理学会第22回年次大会, P1-5, 2016',
          },
          {
            url: "",
            text: '熊谷香織, 持橋大地, 小林一郎, 麻生英樹, Muhammad Attamimi, 中村友昭, 長井隆行, "モンテカルロ木探索を用いた統語情報を考慮した文生成", 言語処理学会第22回年次大会, P9-3, 2016',
          },
          {
            url: "",
            text: '恒川英里，Attamimi Muhammad，小林一郎，長井隆行，中村友昭，麻生英樹，持橋大地，"強化学習を用いた物体の片付けに関する概念獲得への取り組み"，情報処理学会全国大会，3P-07，Mar. 2016',
          },
          {
            url: "",
            text: '船田美雪，中村友昭，長井隆行，金子正秀，"マルチモーダルLDAに基づく概念学習における概念と言語の相互作用の解析"，メディア工学研究会 学生研究発表会，Feb. 2016',
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: "RoboCupジャパンオープン2016 愛知 @Homeオープンプラットフォーム第3位 2016.03.27",
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "http://www.sankei.com/premium/news/160321/prm1603210019-n1.html",
            text: "産経ニュース（WEB）：「試作ロボット展示会にみるニッポンの未来　「次」を担う研究…介護、子育て、福祉の現場に福音は届くか」, 2016.03.25",
          },
          {
            url: "",
            text: "フジテレビWebニュース「ホウドウキョク」：JST STARTの採択課題のひとつとしてChiCaRoを紹介, 2016.03.08",
          },
          {
            url: "http://newswitch.jp/p/3562",
            text: "ニュースイッチ（日刊工業新聞社）：若手研究者発のロボットに出会える！「RoboticsXFuture 2016」テレプレゼンス育児支援ロボット, 2016.02.22",
          },
          {
            url: "",
            text: "日本経済新聞：ロボットとヒト寄り添う関係へ, 2016.01.01",
          },
        ],
      },
    ],
  },
  {
    year: 2015,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: 'Tadahiro Taniguchi, Takayuki Nagai, Tomoaki Nakamura, Naoto Iwahashi, Tetsuya Ogata, and Hideki Asoh, "Symbol Emergence in Robotics: A Survey", Advanced Robotics to appear',
          },
          {
            url: "",
            text: '中村友昭，長井隆行，船越孝太郎，谷口忠大，岩橋直 人，金子正秀，"マルチモーダルLDAとNPYLMを用いたロボットによる物体概念と言語モ デルの相互学習"，人工知能学会誌，Vol.30，No.3, pp.498-509, 2015',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: "長井隆行, トモダチの創り方, ニコニコ学会β「第9回研究100連発」, 19 Dec. 2015 (招待講演)",
          },
          {
            url: "",
            text: "長井隆行, 確率モデルの基礎と応用, 勉強会合宿（機械学習）, 30 Aug. 2015",
          },
          {
            url: "",
            text: 'Takayuki Nagai, "Toward robots that learn concepts and words through experience," ICAR 2015 Workshop on Robot Learning Bottom-up and top-down development of robot skills, Istanbul, July 31st, 2015 (invited talk)',
          },
          {
            url: "",
            text: "長井隆行, 人と家庭用ロボットが共生する社会に向けて, 人に可愛がられる見守りロボット デモ体験セミナー, 7 Mar. 2015 (招待講演)",
          },
        ],
      },
      {
        title: "International conference",
        items: [
          {
            url: "",
            text: 'Tatsuya Aoki, Takayuki Nagai, Joe Nishihara, Tomoaki Nakamura, and Muhammad Attamimi, "Multimodal Learning of Object Concepts and Word Meanings by Robots," NIPS 2015 Workshop Multimodal Machine Learning, Dec. 2015',
          },
          {
            url: "",
            text: 'Kasumi Abe, Yachao Pei, Zhang Tingyi, Chie Hieida Takayuki Nagai, and Masahiro Shiomi, "Telepresence Childcare Robot for Playing with Children from a Remote Location," The 6th JSME/RMD International Conference on Advanced Mechatronics (ICAM 2015) , 1P1-11, Dec.2015',
          },
          {
            url: "",
            text: 'Takashi Omori, Kasumi Abe, Takayuki Nagai, "Modeling of Stress/Interest State Controlling in Robot-Child Play Situation," BICA 2015, pp.119-124, 2015',
          },
          {
            url: "",
            text: 'Hirofumi Hayakawa, Misa Yoshizaki, Natsuki Oka, Takayuki Nagai, Takeshi Omori, "A Computational Model of Children\'s Imitation Behavior During the Eurythmics," Cognitive Interaction Design Workshop on HAI2015',
          },
          {
            url: "",
            text: 'Muhammad Attamimi, Yuji Ando, Tomoaki Nakamura, Takayuki Nagai, Daichi Mochihashi, Ichiro Kobayashi, Hideki Asoh, "Learning Word Meanings and Grammar for Describing Everyday Activities in Smart Environments," EMNLP 2015, pp.2249-2254, 2015',
          },
          {
            url: "",
            text: 'Tomoaki Nakamura, Yoshiki Ando, Takayuki Nagai, Masahide Kaneko, "Concept Formation by Robots Using an Infinite Mixture of Models," IROS 2015, pp.4593-4599, 2015',
          },
          {
            url: "",
            text: 'Takayuki Nagai, Kasumi Abe, Tomoaki Nakamura, Natsuki Oka, Takashi Omori, "Probabilistic Modeling of Mental Models of Others," in Proc. of 24th IEEE International Symposium on Robot and Human Interactive Communication (Ro-Man2015), pp.89-94, 2015',
          },
          {
            url: "",
            text: 'Takashi Omori, Takayuki Shimotomai, Kasumi Abe, Takayuki Nagai, "Model of Strategic Behavior for Interaction That Guide Others Internal State," in Proc. of 24th IEEE International Symposium on Robot and Human Interactive Communication (Ro-Man2015), pp.101-105, 2015',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '早川博章, 吉崎美紗, 岡夏樹, 長井隆行, 大森隆司, "リトミック中における子どもの歩行運動と模倣", HAIシンポジウム2015, 63-68, Dec.2015',
          },
          {
            url: "",
            text: '大塚朔甫，阿部香澄，アッタミミ ムハンマド，中村友昭，長井隆行，早川博章，深田智，岡夏樹，潮木玲奈，岩田恵子，大森隆司，"リトミックの場の計測と解析－摸倣関係に見る社会性の発達－"，HAIシンポジウム，pp.225-230, Dec. 2015',
          },
          {
            url: "",
            text: '片上祐介，阿部香澄，Attamimi Muhammad，長井隆行，中村友昭，"階層ディリクレ過程隠れマルコフモデルを用いた正直シグナルのモデル化"，HAIシンポジウム, pp.177-184, Dec. 2015',
          },
          {
            url: "",
            text: '牧野知也，岩橋直人，國島丈夫，中村友昭，長井隆行，"強化学習と期待効用最大化と階層ディリクレ過程に基づくロボットによる最適支援行動選択と場所の分節化"，HAIシンポジウム，pp.80-85, Dec. 2015',
          },
          {
            url: "",
            text: '西原成, 青木達哉, 中村友昭, 長井隆行, "ロボットによる概念と語意の長期期間学習", 信学技報, vol.115, CNR.2015, pp.29-33, Dec.2015',
          },
          {
            url: "",
            text: '長井隆行, 谷口忠大, 尾形哲也, 岩橋直人, 杉浦孔明, 稲邑哲也, 岡田浩之, "記号創発ロボティクスによる人間機械コラボレーション基盤創成," 信学技報, vol.115, CNR.2015, pp.23-27, Dec.2015',
          },
          {
            url: "",
            text: '長井隆行, "インテリジェントホームロボティクスと記号創発ロボティクス," インテリジェントホームロボティクス研究専門委員会, Nov.2015',
          },
          {
            url: "",
            text: 'アッタミミムハンマド，安東裕司，中村友昭，長井隆行，持橋大地，小林一郎，麻生英樹，"人の活動の言語化のための語意と文法の学習"，計測自動制御学会 システム・情報部門 学術講演会，Nov. 2015',
          },
          {
            url: "",
            text: '小堀嵩博，中村友昭，長井隆行，岩橋直人，船越孝太郎，中野幹夫，金子正秀，"マルチモーダル情報を利用したロボットによるロバストな命令理解"，計測自動制御学会 システム・情報部門 学術講演会，Nov. 2015',
          },
          {
            url: "",
            text: '中村友昭，アッタミミムハンマド，長井隆行，持橋大地，小林一郎，麻生英樹，金子正秀，"ガウス過程の隠れマルコフモデルによる時系列データ分節化"，計測自動制御学会 システム・情報部門 学術講演会，Nov. 2015',
          },
          {
            url: "",
            text: '張斌，中村友昭，阿部香澄，アッタミミムハンマド，潮木玲奈，長井隆行，大森隆司，岡夏樹，金子正秀，"保育支援システムのためのKinect を用いた子どもの行動追跡"，計測自動制御学会 システム・情報部門 学術講演会，Nov. 2015',
          },
          {
            url: "",
            text: '青木達哉，西原成，アッタミミムハンマド，中村友昭，長井隆行，"隠れマルコフモデルを用いたロボットの身体制御則の獲得"，計測自動制御学会 システム・情報部門 学術講演会，Nov. 2015',
          },
          {
            url: "",
            text: '岩田健輔，池田成満，青木達哉，西原成，中村友昭，長井隆行，"HSR(Human Support Robot) による家事タスクの実現"，計測自動制御学会 システム・情報部門 学術講演会，Nov. 2015',
          },
          {
            url: "",
            text: '塩見昌裕, 阿部香澄, 裴雅超, 張亭芸, 池田成満, 長井隆行, "テレ保育ロボットChiCaRoと環境センサを利用した保育支援の試み", 信学技報, Vol.115, No.283, CNR2015-14, pp.37-40, Oct.2015',
          },
          {
            url: "",
            text: '小堀嵩博，中村友昭，長井隆行，岩橋直人，船越孝太郎，中野幹生，金子正秀，"物体情報と言語情報を統合したロボットによる命令理解"，日本ロボット学会学術講演会，3F2-01，Sep.2015',
          },
          {
            url: "",
            text: '西原成，中村友昭，青木達哉，長井隆行，"oMHDP を用いた言語モデルと概念のオンライン相互学習"，日本ロボット学会学術講演会，1B3-04，Sep.2015',
          },
          {
            url: "",
            text: '池田成満，中村友昭，長井隆行，"MLDAとBINGを用いた複雑なシーンからの物体学習"，日本ロボット学会学術講演会，1B2-02，Sep.2015',
          },
          {
            url: "",
            text: '阿部香澄, 裴雅超, 張亭芸, 日永田智絵, 長井隆行, "幼児と祖父母をつなぐテレプレゼンス子育て支援ロボット", 人工知能学会全国大会, 3J3-OS-23-5, 2015.06',
          },
          {
            url: "",
            text: '青木達哉，中村友昭，長井隆行，"オンラインマルチモーダルHDPによる物体概念の獲得"，人工知能学会全国大会，2D5-1，Jun. 2015 人工知能学会全国大会学生奨励賞',
          },
          {
            url: "",
            text: '安東裕司，Muhammad Attamimi，中村友昭，長井隆行，持橋大地，小林一郎，麻生英樹，"多層マルチモーダルLDAとHMMを用いた文法の学習"，人工知能学会全国大会，2F4-OS-01a-6，Jun. 2015',
          },
          {
            url: "",
            text: '恒川英里，小林一郎，麻生英樹，持橋大地，Attamimi Muhammad，中村友昭，長井隆行，"ヒューマノイドロボットの画像認識に基づく行動知識の獲得への取組み"，人工知能学会全国大会，2D4-1，Jun. 2015',
          },
          {
            url: "",
            text: '小堀嵩博，中村友昭，長井隆行，岩橋直人，中野幹生，船越孝太郎，金子正秀，"行動識別，スロット抽出および音声認識の統合によるノイズに頑健な命令理解"，人工知能学会全国大会，2L3-5，Jun. 2015',
          },
          {
            url: "",
            text: '熊谷香織，持橋大地，小林一郎，麻生英樹，AttamimiMuhammad，中村友昭，長井隆行，"モンテカルロ木探索を用いた確率文脈自由文法に基つ?くテキスト生成"，人工知能学会全国大会，2F3-3，Jun. 2015',
          },
          {
            url: "",
            text: '樺山絵里，麻生英樹，Attamimi Muhammad，小林一郎，持橋大地，中村友昭，長井隆行，"現象の意味的構造に基づく言語モデルのzero-shot学習の試み"，人工知能学会全国大会，2F3-2，Jun. 2015',
          },
          {
            url: "",
            text: '辻勇一朗，岡夏樹，尾関基行，荒木雅弘，深田智，長井隆行，中村友昭，大森隆司，"発話における応答部・主導部の推定とそれらを構成する単語の推定"，人工知能学会全国大会，2D3-OS-12b-5，Jun. 2015',
          },
          {
            url: "",
            text: '濱園侑美，小林一郎，麻生英樹，持橋大地，Attamimi Muhammad，中村友昭，長井隆行，"ヒューマノイドロボットの動作生成に向けた基礎的検討"，人工知能学会全国大会，2D1-OS-12a-1，Jun. 2015',
          },
          {
            url: "",
            text: '長井隆行，中村友昭，Attamimi Muhammad，持橋大地，小林一郎，麻生英樹，"多層マルチモーダルLDAと強化学習による意味理解に基づく行動決定"，人工知能学会全国大会，2F4-OS-01a-7，Jun. 2015',
          },
          {
            url: "",
            text: '中村友昭，安藤義記，長井隆行，"混合マルチモーダルHDPによる多様な概念の形成"，人工知能学会全国大会，2D3-OS-12b-1，Jun. 2015',
          },
          {
            url: "",
            text: '樺山 絵里, 麻生 英樹, 小林 一郎, 持橋 大地, Muhammad Attamimi, 中村友昭, 長井隆行, "Zero-shot 学習した言語モデルによるテキスト生成結果の評価", 言語処理学会 第21回年次大会 発表論文集, pp.996-999, Mar.2015',
          },
          {
            url: "",
            text: '濵園侑美，小林一郎，麻生英樹，長井隆行，持橋大地，中村友昭，"ロボットの調理動作学習へ向けた取り組み，情報処理学会全国大会"，5T-02，Mar. 2015',
          },
          {
            url: "",
            text: '恒川英里，小林一郎，長井隆行，中村友昭，麻生英樹，持橋大地，"画像認識に基づくロボットの行動を制御する強化学習の取り組み"，情報処理学会全国大会，6R-08，Mar. 2015',
          },
          {
            url: "",
            text: '小堀嵩博，中村友昭，長井隆行，中野幹生，船越孝太郎，金子正秀，"SVMとCRFを用いたロボットによるロバストな命令理解"，情報処理学会全国大会，6P-06，Mar. 2015',
          },
          {
            url: "",
            text: '石田卓也，高渕健太，秋山俊介，岩橋直人，國島丈生，中村友昭，長井隆行，船越孝太郎，中野幹生，"ロボットの行動命令発話理解における不足情報の処理", 情報処理学会全国大会，6P-05，Mar. 2015',
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: "NEDO TCP最終発表会 審査員特別賞（ChiCaRoチーム）2015.12.15",
          },
          {
            url: "",
            text: "Intelligent Home Robotics Challenge2015, ロボット聴覚部門第1位, 2015.11.28",
          },
          {
            url: "",
            text: "人工知能学会全国大会学生奨励賞, 青木達哉、中村友昭、長井隆行, オンラインマルチモーダルHDPによる物体概念の獲得, 2015.07.17",
          },
          {
            url: "",
            text: "人工知能学会賞（Sigverseによる実機のシミュレーション環境の構築）, RoboCupジャパンオープン2015, 2015.05.04",
          },
          {
            url: "",
            text: "RoboCupジャパンオープン2015 福井 @Homeシミュレーションリーグ準優勝 2015.05.04",
          },
          {
            url: "",
            text: "RoboCupジャパンオープン2015 福井 @Homeリーグ準優勝 2015.05.04",
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "https://www.youtube.com/watch?v=StVbw-18t-I&list=PLTAEo6YE1xZmWHsOMjjfnw8-7RSdoxnM_&index=63",
            text: "タイのテレビ番組Modernine TV「ANOVATION」でChiCaRoを紹介 2015.12.05",
          },
          {
            url: "",
            text: "毎日新聞：電通大子育て支援ロボ開発, 2015.10.19",
          },
          {
            url: "",
            text: "日経産業新聞：記号創発ロボティクスを紹介, 2015.09.04",
          },
          {
            url: "",
            text: "読売新聞：「五輪おもてなしロボ 大学・企業 開発競う ガイド、撮影・・・ボランティア役」で長井教授がコメント, 2015.05.25",
          },
          {
            url: "http://apple.ee.uec.ac.jp/isyslab/images/2015Mar22.JPG",
            text: "読売新聞：「探訪ラボ」で長井研究室とChiCaRoが紹介, 2015.03.22",
          },
        ],
      },
    ],
  },
  {
    year: 2014,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: '阿部香澄, 日永田智絵, アッタミミ ムハンマド, 長井隆行, 岩崎安希子, 下斗米貴之, 大森隆司, 岡夏樹, "人見知りの子どもとロボットの良好な関係構築に向けた遊び行動の分析", 情報処理学会論文誌, vol.55, no.12, pp.2524-2536, 2014',
          },
          {
            url: "",
            text: 'ムハンマドアッタミミ, ファドリルムハンマド, 阿部香澄, 中村友昭, 船越孝太郎, 長井隆行, "多層マルチモーダルLDAを用いた人の動きと物体の統合概念の形成", 日本ロボット学会誌，vol.32, no.8, pp.89-100, 2014',
          },
          {
            url: "",
            text: '稲邑哲也, タン ジェフリー, 萩原良信, 杉浦孔明, 長井隆行, 岡田浩之, "大規模長時間のインタラクションを可能にするロボカップ＠ホームシミュレーションの構想とその基盤技術", 知能と情報, Vol.26, No.3, pp.698-709, 2014',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: '長井隆行, "A02班の研究計画", HAIシンポジウム2014, 13 Dec. 2014',
          },
          {
            url: "",
            text: "Takayuki Nagai, CID in Human-Human (child) Interaction (A02), Workshop on Cognitive Interaction Design in HAI2014@Tsukuba, 28 Oct. 2014 (invited talk)",
          },
          {
            url: "",
            text: '谷口 忠大, 長井 隆行, 中村 友昭, "二重分節解析とマルチモーダルカテゴリ形成による相互分節化仮説の構成論", 計測と制御 53(9), 815-820, Sep. 2014',
          },
          {
            url: "",
            text: '長井隆行, "高次感情の発達モデル ～記号創発ロボティクスの視点～," 発達過程の計算モデル ―記号創発アプローチの視点から―, 日本発達心理学会・日本赤ちゃん学会共催シンポジウム, Mar.2014',
          },
        ],
      },
      {
        title: "International conference",
        items: [
          {
            url: "",
            text: 'Kasumi Abe, Chie Hieida, Muhammad Attamimi, Takayuki Nagai, Takayuki Shimotomai, Takashi Omori and Natsuki Oka, "Toward Playmate Robots That Can Play with Children Considering Personality," in Proc. of International Conference on Human-Agent Interaction, pp.165-168, Oct.2014',
          },
          {
            url: "",
            text: 'Yuichiro Tsuji, Ami Tsukamoto, Takashi Uchida, Yusuke Hattori, Ryosuke Nishida, Chie Fukada, Motoyuki Ozeki, Takashi Omori, Takayuki Nagai and Natsuki Oka, "Experimental Study of Empathy and Its Behavioral Indices in Human-Robot Interaction," in Proc. of International Conference on Human-Agent Interaction, pp.245-248, Oct.2014',
          },
          {
            url: "",
            text: 'Chie Hieida, Muhammad Attamimi, Takayuki Shimotomai, Takayuki Nagai, Takashi Omori, "Physical Embodied Communication between Robots and Children: An Approach for Relationship Building by Holding Hands," in Proc. of IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.600-607, Sep.2014',
          },
          {
            url: "",
            text: 'Tomoaki Nakamura, Takayuki Nagai, Kotaro Funakoshi, Shogo Nagasaka, Tadahiro Taniguchi, Naoto Iwahashi, "Mutual Learning of an Object Concept and Language Model Based on MLDA and NPYLM," in Proc. of IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.600-607, Sep.2014',
          },
          {
            url: "",
            text: 'Muhammad Attamimi, Muhammad Fadlil, Kasumi Abe, Tomoaki Nakamura, Kotaro Funakoshi, Takayuki Nagai, "Integration of Various Concepts and Grounding of Word Meanings Using Multi-layered Multimodal LDA for Sentence Generation," in Proc. of IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.3005-3011, Sep. 2014',
          },
          {
            url: "",
            text: 'Jeffrey Too Chuan Tan, Tetsunari Inamura, Yosinobu Hagiwara, Komei Sugiura, Takayuki Nagai and Hiroyuki Okada, "A New Dimension for RoboCup @Home: Human-Robot Interaction between Virtual and Real Worlds," in Proc. of the Int\'l Conf. on Human-Robot Interaction, p.332, 2014',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '鴫原宏明, アッタミミ ムハンマド, 阿部香澄, 長井隆行, 大森隆司, 岡夏樹, "確率モデルに基づく他者モデル相互適応のモデル化", HAI2014, pp.129-135, 2014',
          },
          {
            url: "",
            text: '西田亮輔, 長井 隆行, 大森隆司, 尾関基行, 岡夏樹, "共感するロボットの実現に向けての模倣機能と共感度に関する検討", HAIシンポジウム2014, pp.124-128, 2014',
          },
          {
            url: "",
            text: '塚本亜美, 尾関基行, 深田智, 長井隆行, 大森隆司, 岡夏樹, "注意喚起に対する反応を学習するロボット," HAIシンポジウム2014, pp.119-123, 2014',
          },
          {
            url: "",
            text: '安東裕司，アッタミミムハンマド，中村友昭，長井隆行，持橋大地，小林一郎，麻生英樹，"日常生活言語化のためのデータ取得システム"，計測自動制御学会システムインテグレーション部門講演会，3J4-5，Dec. 2014',
          },
          {
            url: "",
            text: '山口拓郎，アッタミミムハンマド，中村友昭，長井隆行，池原雅章，"マルチモーダルLDAを用いたロボットによる感情語彙の獲得"，計測自動制御学会システムインテグレーション部門講演会，1M4-5，Dec. 2014',
          },
          {
            url: "",
            text: "中村友昭，小堀嵩博，西原成，長井隆行，金子正秀，”CRFとSVMを用いた家庭用ロボットのための命令理解“，インテリジェントホームロボティクス研究会，Dec. 2014",
          },
          {
            url: "",
            text: 'Bin Zhang，Tomoaki Nakamura，Masahide Kaneko，"Robust Tracking of Multiple Particular Users for Group Guiding Robot", 日本ロボット学会学術講演会，3I3-03，Sep.2014',
          },
          {
            url: "",
            text: '青木達哉，中村友昭，長井隆行，"階層ディリクレ過程を用いたロボットによる物体概念のオンライン学習", 日本ロボット学会学術講演会，3I3-05，Sep.2014',
          },
          {
            url: "",
            text: '中村友昭，小堀嵩博，長井隆行，中野幹生，船越孝太郎，金子正秀，"SVMとCRFに基づくロボットによる自然言語理解", 日本ロボット学会学術講演会，3I2-04，Sep.2014',
          },
          {
            url: "",
            text: 'Muhammad Attamimi，中村友昭，長井隆行，持橋大地，小林一郎，麻生英樹，，"獲得した階層的概念・語意・文法に基づく文生成", 日本ロボット学会学術講演会，3I1-04，Sep.2014',
          },
          {
            url: "",
            text: '西原成，中村友昭，アッタミミムハンマド，長井隆行，"物体概念と言語モデルのオンライン相互学習", 日本ロボット学会学術講演会，2I1-03，Sep.2014',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2014/pdf/294.pdf",
            text: '中村友昭, 西原成, 長井隆行, 船越孝太郎, 長坂翔吾, 谷口忠大, 岩橋直人, "マルチモーダルLDAとベイズ階層言語モデルを用いた物体概念と言語モデルの相互学習", 人工知能学会全国大会, 1I5-OS-09b-3, May 2014',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2014/pdf/531.pdf",
            text: 'Attamimi Muhammad, 中村友昭, 長井隆行, 岩橋直人, 奥乃博, "ユーザ行動の予測と命令解釈の統合に基づくロボットの行動決定手法", 人工知能学会全国大会, 1I4-OS-09a-1, May 2014',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2014/pdf/530.pdf",
            text: '阿部香澄, 日永田智絵, 鴫原宏明, 長井隆行, 下斗米貴之, 大森隆司, "子どもの性格を考慮して遊ぶロボットの実現に向けた基礎的検討", 人工知能学会全国大会, 1E4-OS-23a-5, May 2014',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2014/pdf/802.pdf",
            text: 'Muhammad Fadlil, Attamimi Muhammad, 阿部香澄, 中村友昭, 長井隆行, "多層マルチモーダルLDAを用いた多様な概念の統合と語意の獲得", 人工知能学会全国大会, 1I3-3, May 2014',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2014/pdf/600.pdf",
            text: '安藤義記, 中村友昭, 長井隆行, "マルチモーダルLDAを用いたロボットによる多様な概念の形成", 人工知能学会全国大会, 1I3-2, May 2014',
          },
          {
            url: "",
            text: '日永田智絵, 阿部香澄, 長井隆行, "ロボットと子どもの身体的コミュニケーション～手をつなぐことによる関係性の構築～", 第76回情報処理学会全国大会, 2S-2, Mar.2014 全国大会学生奨励賞受賞',
          },
        ],
      },
      {
        title: "特許",
        items: [
          {
            url: "",
            text: "中村友昭, 長井隆行, 観測値の予測装置及び観測値の予測方法，特願2013-181269　(出願2013年9月2日)",
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: "HAI-2013 Outstanding Research Award, 日永田智絵, 阿部香澄, 長井隆行, 下斗米貴之, 大森隆司, ロボット‐子ども間の関係構築における手つなぎの影響, 2014.12.14",
          },
          {
            url: "",
            text: "Intelligent Home Robotics Challenge 2014, 移動ロボット部門1位, 知能ロボティクス部門2位, 総合優勝, 2014.12.06",
          },
          {
            url: "",
            text: 'IROS2014IEEE Robotics and Automation Society Japan Chapter Young Award, Chie Hieida, Muhammad Attamimi, Takayuki Shimotomai, Takayuki Nagai, Takashi Omori, "Physical Embodied Communication between Robots and Children: An Approach for Relationship Building by Holding Hands," , 2014.09.16',
          },
          {
            url: "",
            text: "人工知能学会全国大会優秀賞（JSAI Annual Conference Award）, 安藤義記, 中村友昭, 長井隆行, マルチモーダルLDA を用いたロボットによる多様な概念の形成",
          },
          {
            url: "",
            text: "RoboCupジャパンオープン2014 九州 @Homeリーグ優勝 2014.05.06",
          },
          {
            url: "",
            text: "情報処理学会全国大会学生奨励賞, 日永田智絵, 阿部香澄, 長井隆行, ロボットと子どもの身体的コミュニケーション～手をつなぐことによる関係性の構築～, 第76回情報処理学会全国大会, 2014.03",
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "",
            text: "テレビ東京WBS「トレンドたまご」子守ロボット2014.11.18 放送",
          },
          {
            url: "",
            text: "日刊工業新聞：「電通大、テレビ電話型の子守ロボ「ＣｈｉＣａＲｏ」開発－遠隔操作で子育て支援」, 2014.11.17",
          },
          {
            url: "",
            text: 'The Wall Street Journal (web版)： "1 The child care robot, ChiCaRo", 5 Robots from Tokyo Robot Week, 2014.10.16',
          },
          {
            url: "http://apple.ee.uec.ac.jp/isyslab/images/robi61.pdf",
            text: "週刊「Robi」61号, 「ロビのロボット見聞録：ロボカップに参加し、研究でも活躍するリプロ」, デアゴスティーニ, 2014.05.06",
          },
          {
            url: "http://apple.ee.uec.ac.jp/isyslab/images/robi60.pdf",
            text: "週刊「Robi」60号, 「ロビのロボット見聞録：国内外のロボカップで活躍したダイゴロウ」, デアゴスティーニ, 2014.04.29",
          },
        ],
      },
    ],
  },
  {
    year: 2013,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: 'Miriam Lopez-de-la-Calleja, Tayuki Nagai, Muhammad Attamimi, Mariko Nakano-Miyatake, Hector Perez-Meana, "Object Detection Using SURF and Superpixels", Journal of Software Engineering and Applications, pp.511-518, Sep.2013',
          },
          {
            url: "",
            text: 'Muhammad Attamimi, Takaya Araki, Tomoaki Nakamura, Takayuki Nagai, "Visual Recognition System for the Cleaning Task by Humanoid Robots", International Journal of Advanced Robotic Systems: Humanoid, 10:384. doi: 10.5772/56629, Nov.2013',
          },
          {
            url: "",
            text: '安藤義記，中村友昭，荒木孝弥，長井隆行，"階層マルチモーダルLDAを用いたロボットによる階層的概念の形成"，日本ロボット学会誌，Vol.31, No7, pp.2-12, sep.2013',
          },
          {
            url: "",
            text: '岩崎安希子, 下斗米貴之，阿部香澄，中村友昭, 長井隆行，大森隆司, "遊びロボットによる子どもの性格傾向の推定に関する研究", 日本感性工学会論文誌, no.12, vol.1, pp.219-228, 2013',
          },
          {
            url: "",
            text: '阿部香澄，岩崎安希子，中村友昭，長井隆行，横山絢美，下斗米貴之，岡田浩之，大森隆司， "子供と遊ぶロボット：心的状態の推定に基づいた行動決定モデルの適用"，日本ロボット学会誌，Vol.31，No.3, pp.263-274, 2013',
          },
          {
            url: "",
            text: '中村友昭, 荒木孝弥, 長井隆行, 岩橋直人, "階層ディリクレ過程に基づくロボットによる物体のマルチモーダルカテゴリゼーション", 計測自動制御学会論文集, Vol.49　No.4, Apr.2013',
          },
          {
            url: "",
            text: 'Takaya Araki, Tomoaki Nakamura, Takayuki Nagai, Kotaro Funakoshi, Mikio Nakano, Naoto Iwahashi, "Online Object Categorization Using Multimodal Information Autonomously Acquired by a Mobile Robot", Advanced Robotics, 26(17), pp.1995-2020, 2012 　 2013 Advanced Robotics Best Paper Award',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: '長井隆行, "概念や語彙を獲得するロボット実現へのデータ工学ロボティクス的アプローチ", データ工学ロボティクス講演会 －大規模・マルチなデータからの知のモデリング－, 招待講演, Dec.2013',
          },
          {
            url: "",
            text: '長井隆行, "自身の経験が生み出すロボットの知性と感性", 第15回感性工学会大会, 企画：感性ロボティクスの未来(感性ロボティクス部会), 招待講演, D71, Sep.2013',
          },
          {
            url: "",
            text: '杉浦孔明, 長井隆行, "ロボカップ＠ホームにおける日用品マニピュレーション", 日本ロボット学会誌, Vol. 31, No. 4, pp.52-57, May 2013',
          },
        ],
      },
      {
        title: "International conference",
        items: [
          {
            url: "",
            text: 'Muhammad Attamimi, Kasumi Abe, Akiko Iwasaki, Takayuki Nagai, Takayuki Shimotomai, Takashi Omori," Robots That Can Play with Children: What Makes a Robot Be a Friend," Neural Information Processing, Lecture Notes in Computer Science Volume 8226, pp.377-386, Daegu, Korea, Nov.2013',
          },
          {
            url: "",
            text: 'Yoshiki Ando, Tomoaki Nakamura, Takaya Araki, and Takayuki Nagai, "Formation of Hierarchical Object Concept Using Hierarchical Latent Dirichlet Allocation," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.2272-2279, Tokyo, Nov.2013.',
          },
          {
            url: "",
            text: 'Takaya Araki, Tomoaki Nakamura, and Takayuki Nagai, "Long-term Learning of Concept and Word by Robots: Interactive Learning Framework and Preliminary Results," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.2280-2287, Tokyo, Nov.2013.',
          },
          {
            url: "",
            text: 'Muhammad Fadlil, Keisuke Ikeda, Kasumi Abe, Tomoaki Nakamura, and Takayuki Nagai, "Integrated Concept of Objects and Human Motions Based on Multi-layered Multimodal LDA," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.2256-2263, Tokyo, Nov.2013. IROS 2013 Cognitive Best Paper Award Finalist',
          },
          {
            url: "",
            text: 'Tomoaki Nakamura, Takaya Araki, Takayuki Nagai, Shogo Nagasaka, Tadahiro Taniguchi, and Naoto Iwahashi, "Multimodal Concept and Word Learning Using Phoneme Sequences with Errors," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.157-162, Tokyo, Nov.2013.',
          },
          {
            url: "",
            text: 'Jeffrey Too Chuan Tan, Tetsunari Inamura, Komei Sugiura, Takayuki Nagai and Hiroyuki Okada, "Human-Robot Interaction between Virtual and Real Worlds: Motivation from RoboCup@Home," International Conference on Social Robotics, Bristol, UK, Oct.2013',
          },
          {
            url: "",
            text: 'Tetsunari Inamura, Jeffrey Too Chuan Tan, Komei Sugiura, Takayuki Nagai and Hiroyuki Okada, "Development of RoboCup@Home Simulation towards Long-term Large Scale HRI," Proc. of the RoboCup International Symposium 2013, Jul.2013',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '鴫原宏明, 藤岡直幹, 安東裕司, 日永田智絵, Muhammad Attamimi, 長井隆行, 岩崎安希子, 下斗米貴之, 大森隆司, "サービスロボットのための遠隔操作システムの開発", 第14回 計測自動制御学会 システムインテグレーション部門講演会SI2013, 3A4-6, Dec.2013',
          },
          {
            url: "",
            text: 'Muhammad Attamimi，長井隆行, 岩橋直人, 奥乃博, "音声命令と行動予測に基づく文脈を考慮したロボットの行動決定", 第14回 計測自動制御学会 システムインテグレーション部門講演会SI2013, 3K3-6, Dec.2013 優秀講演賞受賞',
          },
          {
            url: "",
            text: '岡田浩之, 稲邑哲也，Jeffrey Tan, 萩原良信, 杉浦孔明, 長井隆行, 横山裕樹, 下斗米貴之, "RoboCup@Homeにおけるソフトウェアプラットフォーム", 第14回 計測自動制御学会 システムインテグレーション部門講演会SI2013,2G2-2 (Keynote), Dec.2013',
          },
          {
            url: "",
            text: 'Muhammad Attamimi，中村友昭, 長井隆行, "移動ロボット知覚制御用RTC 群の開発と学生実験での利用", 第14回 計測自動制御学会 システムインテグレーション部門講演会SI2013, 1B4-5, Dec.2013 RTC再利用賞, ヴィストンロボットショップ賞受賞',
          },
          {
            url: "",
            text: 'Bui Thanh Tung, Muhammad Attamimi，中村友昭, 長井隆行, 稲邑哲也, "曖昧性や身体的制約をベイジアンネットワークで統合するコミュニカティブモバイルマニピュレーション", 第14回 計測自動制御学会 システムインテグレーション部門講演会SI2013, 1K3-2, Dec.2013 優秀講演賞受賞',
          },
          {
            url: "",
            text: '日永田智絵, アッタミミ ムハンマド, 長井隆行, 下斗米貴之, 大森隆司, "人とロボットのフィジカルコミュニケーション：手をつないで一緒に散歩するロボットの実現", 第14回 計測自動制御学会 システムインテグレーション部門講演会SI2013, 1J2-2, Dec.2013',
          },
          {
            url: "http://hai-conference.net/hai2013/proceedings/pdf/P4.pdf",
            text: '岩崎安希子, 下斗米貴之, 鴫原宏明, 藤岡直幹, 安東裕司, 日永田智絵, アッタミミ ムハンマド, 長井隆行, 大森隆司, "生体指標によるロボット‐子供遊び戦略の妥当性の評価", HAI シンポジウム 2013, P4, pp.55-58, Nov.2013',
          },
          {
            url: "http://hai-conference.net/hai2013/proceedings/pdf/P17.pdf",
            text: '西田亮輔, 長井隆行, 大森隆司, 尾関基行, 岡夏樹, "共感するロボットとのインタラクション", HAI シンポジウム 2013, P17, pp.117-119, Nov.2013',
          },
          {
            url: "http://hai-conference.net/hai2013/proceedings/pdf/S-3.pdf",
            text: '日永田智絵, 阿部香澄, 長井隆行, 下斗米貴之, 大森隆司, "ロボット‐子ども間の関係構築における手つなぎの影響", HAI シンポジウム 2013, S-3, pp.206-213, Nov.2013',
          },
          {
            url: "",
            text: '中村友昭, 船越孝太郎, 長井隆行, 長坂翔吾, 谷口忠大, 岩橋直人, "認識誤りを含む音節列からのロボットによる概念形成と語意獲得", 計測自動制御学会 システム・情報部門 学術講演会 SSI2013, SS1-13, Dec.2013',
          },
          {
            url: "",
            text: 'Fadlil Muhammad, Muhammad Attamimi, 長井隆行, 中村友昭, 船越孝太郎, "多層マルチモーダルLDAによる動きと物体の統合的概念の形成と語意獲得", 計測自動制御学会 システム・情報部門 学術講演会 SSI2013, SS1-9, Dec.2013',
          },
          {
            url: "",
            text: 'Muhammad Attamimi, 中村友昭, 長井隆行, "生活支援ロボットの遠隔操作からの自律化", 計測自動制御学会 システム・情報部門 学術講演会 SSI2013, SS1-8, Dec.2013',
          },
          {
            url: "",
            text: '長井隆行, 中村友昭, "概念と単語をオンラインで学習するロボットの実現", 計測自動制御学会 システム・情報部門 学術講演会 SSI2013, SS1-7, Dec.2013',
          },
          {
            url: "",
            text: '稲邑哲也, 萩原良信, TAN Jeffrey, 杉浦孔明, 長井隆行, 岡田浩之, "大規模長時間HRIを指向するロボカップ＠ホームシミュレーションの展開", 計測自動制御学会 システム・情報部門 学術講演会 SSI2013, SS1-5, Dec.2013',
          },
          {
            url: "",
            text: '中村友昭, 船越孝太郎, 長井隆行, "HDP-HMMを用いたロボットによる物体軌道の学習と予測", 日本ロボット学会学術講演会, 2C1-05, Sep. 2013',
          },
          {
            url: "",
            text: 'Muhammad Attamimi, 中村友昭, 長井隆行, "サービスロボットの遠隔操作からの自律化"，日本ロボット学会学術講演会，2C2-04, Sep. 2013',
          },
          {
            url: "",
            text: 'Muhammad Fadlil，Muhammad Attamimi，長井隆行，中村友昭，船越孝太郎, "多層マルチモーダルLDAと相互情報量による語意の獲得", 日本ロボット学会学術講演会, 2C2-06, Sep. 2013',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2013/pdf/703.pdf",
            text: '荒木孝弥，中村友昭，長井 隆行，"ロボットによるオンライン語彙学習"，人工知能学会全国大会，2G4-OS-19a-1，Jun.2013',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2013/pdf/685.pdf",
            text: 'Muhammad Fadlil，池田圭佑，阿部香澄，中村友昭，長井隆行，"多層マルチモーダルLDAを用いた人の動きと物体の統合的概念の形成"，人工知能学会全国大会，2G4-OS-19a-3，Jun.2013',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2013/pdf/654.pdf",
            text: '安藤義記，中村友昭，荒木孝弥，長井隆行，"階層マルチモーダルカテゴリゼーションによる多様な概念と語意の学習"，人工知能学会全国大会，2G5-OS-19b-1，Jun.2013',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2013/pdf/719.pdf",
            text: '中村友昭，荒木孝弥，長井隆行，長坂翔吾，谷口忠大，岩橋直人，"マルチモーダルLDAと教師なし形態素解析による認識誤りを含む文章からの概念・語意獲得" ，人工知能学会全国大会，2G5-OS-19b-7，Jun.2013',
          },
          {
            url: "",
            text: '下斗米貴之, 岩崎安希子, 阿部香澄, 中村友昭, 長井隆行, 大森隆司, "性格を読み取るロボットシステム", 研究報告知能システム（ICS）, 2013-ICS-171, 16, pp.1-3, 2013.03.11',
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: 'IEEE/RSJ IROS 2013 Cognitive Best Paper Award Finalist, M.Fadlil, K.Ikeda, K.Abe, T.Nakamura, T.Nagai, "Integrated Concept of Objects and Human Motions Based on Multi-layered Multimodal LDA", IROS 2013, Nov. 2013',
          },
          {
            url: "",
            text: "人工知能学会賞 (＠ホームリーグにおいてSIGVerseを用いた＠ホームシミュレーション競技を企画し認識や学習、計画など高次レベルの研究に集中できるような環境を提供した), RoboCupジャパンオープン2013東京, 2013.05.06",
          },
          {
            url: "",
            text: "RoboCupジャパンオープ ン 2013東京 @Homeリーグ第3位 2013.05.06",
          },
          {
            url: "",
            text: "日本機械学会三浦賞, 荒木孝弥, 2013.03.25",
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "http://apple.ee.uec.ac.jp/isyslab/images/robocon2013.pdf",
            text: "ロボコンマガジン ：「ロボカップジャパンオープン2013東京レポート」, 7月号, p.31, 2013.06.19",
          },
        ],
      },
    ],
  },
  {
    year: 2012,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: '中村 友昭, アッタミミムハンマド, 杉浦孔明, 長井隆行, 岩橋直人, 戸田智基, 岡田浩之, 大森隆司, "拡張モバイルマニピュレーションのための新規物体の学習", ロボット学会論文誌, Vol.30, No.2, pp.97-108, 2012',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: '長井隆行, 中村友昭, "マルチモーダルカテゴリゼーション 経験を通して概念を形成し言葉の意味を理解するロボットの実現に向けて", 人工知能学会誌，Vol.27，No.6，pp.555-562, Nov.2012',
          },
          {
            url: "",
            text: "Takayuki Shimotomai, Kasumi Abe, Ayami Yokoyama, Takayuki Nagai, Takashi Omori, Estimation of children's interest dynamics while communicating with robots, Advances in Cognitive Neurodynamics (III), Sep.2012",
          },
          {
            url: "",
            text: '長井隆行, "ロボットによる概念形成・実世界理解", 日本赤ちゃん学会第12回学術集会ラウンドテーブル(記号を用いたコミュニケーションを実現するために何が必要か？創発ロボティクスの視点から), 2012.06',
          },
        ],
      },
      {
        title: "International conference",
        items: [
          {
            url: "",
            text: 'Escoto Sotelo E. A., Tomoaki Nakamura, Takayuki Nagai, Escamilla Hernandez E., "Who Said That? The Crossmodal Matching Identity for Inferring Unfamiliar Faces from Voices," IEEE International Conference on Signal Image Technology and Internet Based Systems, SITIS 2012, pp.97-104, Sorrento, Naples, Italy, Nov.25-29, 2012',
          },
          {
            url: "",
            text: 'Muhammad Attamimi, Tomoaki Nakamura, Takayuki Nagai, "Hierarchical Multilevel Object Recognition Using Markov Model," International Conference on Pattern Recognition 2012, pp.2963-2966, Nov.2012',
          },
          {
            url: "",
            text: 'Takaya Araki, Tomoaki Nakamura, Takayuki Nagai, Shogo Nagasaka, Tadahiro Taniguchi, Naoto Iwahashi, "Online Learning of Concepts and Words Using Multimodal LDA and Hierarchical Pitman-Yor Language Model," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.1623-1630, Portugal, Oct.2012 Best Student Paper Award Finalist',
          },
          {
            url: "",
            text: 'Tomoaki Nakamura, Takayuki Nagai, Naoto Iwahashi, "Bag of Multimodal Hierarchical Dirichlet Processes: Model of Complex Conceptual Structure for Intelligent Robots," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.3818-3823, Portugal, Oct.2012',
          },
          {
            url: "",
            text: 'Muhammad Attamimi, Keisuke Ito, Tomoaki Nakamura, Takayuki Nagai, "A Planning Method for Efficient Mobile Manipulation Considering Ambiguity," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.965-972, Portugal, Oct.2012',
          },
          {
            url: "",
            text: 'Kasumi Abe, Iwasaki Akiko, Tomoaki Nakamura, Takayuki Nagai, Ayami Yokoyama, Takayuki Shimotomai, Hiroyuki Okada, Takashi Omori, "Playmate Robots That Can Act According to Child’s Mental State," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.4660-4667, Portugal, Oct.2012',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "http://www.jcss.gr.jp/meetings/JCSS2012/proceedings/pdf/JCSS2012_P1-10.pdf",
            text: '岩崎安希子, 下斗米貴之, 阿部香澄, 中村友昭, 長井隆行, 大森隆司, "遊びロボットによる子供の性格推定に関する基礎的研究", 2012年度日本認知科学会第29回大会発表論文集, P1-10, pp.224-233, 2012.12.13',
          },
          {
            url: "",
            text: '安藤義記, 中村友昭, 荒木孝弥, 長井隆行, "hLDAに基づくロボットによる階層的概念の獲得", 第13回計測自動制御学会システムインテグレーション部門講演会,3H2-6, pp.2347-2350, 2012 優秀講演賞受賞',
          },
          {
            url: "",
            text: '日南雄貴, 中村 友昭, 荒木孝弥, 丸山恭平, 長井隆行, 大木宗一, "マルチモーダル情報の取得と語意獲得をオンラインで人と協調しながら長期的に行うロボットプラットフォーム", 第13回計測自動制御学会システムインテグレーション部門講演会,3H2-4, pp.2336-2340, 2012',
          },
          {
            url: "",
            text: '丸山恭平, 中村友昭, 長井隆行, "低コストな家庭用ヒューマノイドロボットの開発:ロボカップ＠ホームから記号創発研究まで", 第13回計測自動制御学会システムインテグレーション部門講演会, 3H2-2, pp.2330-2333, 2012',
          },
          {
            url: "",
            text: '荒木孝弥, 中村友昭, 長井隆行, 長坂翔吾, 谷口忠大, 岩橋直人, "ロボットによるマルチモーダル物体概念を用いた物体特徴を表現する単語の獲得", 第13回計測自動制御学会システムインテグレーション部門講演会, 3H1-6, pp.2319-2324, 2012',
          },
          {
            url: "",
            text: '中村友昭, 荒木孝弥, 長井隆行, 長坂翔吾, 谷口忠大, 岩橋直人, "物体概念を手がかりとした教師なし形態素解析の誤り訂正", 第13回計測自動制御学会システムインテグレーション部門講演会, 3H1-4, pp.2307-2312, 2012',
          },
          {
            url: "",
            text: '藤岡直幹, 阿部香澄, 中村友昭, 荒木孝弥, 丸山恭平, 長井隆行, "遊び相手ロボット実現のためのヒューマノイドロボット遠隔操作インターフェース", 電気学会計測研究会, IM-12-073, 2012',
          },
          {
            url: "",
            text: '安藤義記, 中村友昭, 荒木孝弥, 長井隆行, "マルチモーダル情報を用いたhLDAに基づく階層的概念の獲得", 電気学会計測研究会, IM-12-072, 2012',
          },
          {
            url: "",
            text: '池田圭佑, 阿部香澄, 中村友昭, 荒木孝弥, 長井隆行, "多層マルチモーダルLDAに基づく物体と動作の統合モデル", 電気学会計測研究会, IM-12-071, 2012',
          },
          {
            url: "",
            text: '日南雄貴, 中村友昭, 荒木孝弥, 丸山恭平, 高木洋利, 長井隆行, 大木宗一, "マルチモーダル情報の取得と概念・語意獲得を長期的に人と協調しながら行うロボットプラットフォーム", 電気学会計測研究会, IM-12-070, 2012',
          },
          {
            url: "",
            text: '下斗米貴之, 中村友昭, 長井隆行, 大森隆司, 岡田浩之, "RTミドルウェアを用いたRobocup@HOMEにおける開発", 日本ロボット学会学術講演会, 2B1-6, Sep.2012',
          },
          {
            url: "",
            text: 'Attamimi Muhammad, 中村友昭, 長井隆行, "マルコフモデルを用いた階層物体認識", 日本ロボット学会学術講演会, 2J1-5, Sep.2012',
          },
          {
            url: "",
            text: 'Fadlil Muhammad, 中村友昭, 長井隆行, "HDP-HMMを用いたロボットによる物理的知識の獲得", 日本ロボット学会学術講演会, 3N1-5, Sep.2012',
          },
          {
            url: "",
            text: '中村友昭, 荒木孝弥, 長井隆行, 長坂翔吾, 谷口忠大, 岩橋直人, "教師なし形態素解析による物体概念を手がかりとした単語切り出しの高精度化", 日本ロボット学会学術講演会, 3N1-6, Sep.2012',
          },
          {
            url: "",
            text: '小篠裕子, 中野幹生, 長谷川雄二, 中村友昭, 長井隆行, 岩橋直人, 有木康雄, "マルチモーダル情報を用いた未知物体学習のための未知物体判別手法", 日本ロボット学会学術講演会, 4N1-2, Sep.2012',
          },
          {
            url: "",
            text: '荒木孝弥, 中村友昭, 長井隆行, 長坂翔吾, 谷口忠大, 岩橋直人, "マルチモーダルLDAと階層ベイズ言語モデルに基づく物体概念・語意のオンライン学習", 日本ロボット学会学術講演会, 4N1-4, Sep.2012',
          },
          {
            url: "",
            text: '安藤義記, 荒木孝弥, 中村友昭, 長井隆行, "Hierarchical Latent Dirichlet Allocationを用いたロボットによる階層的概念の形成"， 日本ロボット学会学術講演会，4N1-6, Sep.2012',
          },
          {
            url: "",
            text: 'Si Chenm, Kasumi Abe, Tomoaki Nakamura, Takayuki Nagai, Hongsheng He, Shuzhi Sam Ge, "Engagement Estimation Using Gaussian Mixture Engagement Models for a Playmate Robot", 日本ロボット学会学術講演会, Sep.2012',
          },
          {
            url: "",
            text: 'Attamimi Muhammad, 中村友昭, 長井隆行, "マルコフモデルに基づく階層物体認識"， 創発システムシンポジウム ポスター発表，Sep.2012',
          },
          {
            url: "",
            text: '荒木孝弥, 中村友昭, 長井隆行, 長坂翔吾, 谷口忠大, 岩橋直人, "マルチモーダル概念形成と教師なし形態素解析に基づく語意のオンライン学習"， 創発システムシンポジウム ポスター発表，Sep.2012 最優秀ポスター賞受賞',
          },
          {
            url: "",
            text: '安藤義記, 荒木孝弥, 中村友昭, 長井隆行, "hLDAを用いた階層的概念の獲得", 創発システムシンポジウム ポスター発表, Sep.2012 優秀ポスター賞受賞',
          },
          {
            url: "",
            text: 'Fadlil Muhammad, 中村友昭, 長井隆行, "階層ディリクレ過程隠れマルコフモデルを用いたロボットによる物理的知識の獲得", 創発システムシンポジウム ポスター発表, Sep.2012 >優秀ポスター賞受賞',
          },
          {
            url: "",
            text: '中村友昭, 荒木孝弥, 長井隆行, 谷口忠大, 岩橋直人, "統計モデルによる基礎レベルカテゴリの学習と語彙獲得", 日本赤ちゃん学会第12回学術集会要旨集, P-53, p.93, 2012.06',
          },
          {
            url: "",
            text: '阿部香澄, 岩崎安希子, 横山絢美, 下斗米貴之,中村友昭, 長井隆行, 岡田浩之, 大森隆司, "子供と遊べるロボットとは？：心的状態推定と保育士の行動戦略に基づく行動決定モデルの適用", 日本赤ちゃん学会第12回学術集会要旨集, P-43, p.83, 2012.06',
          },
          {
            url: "",
            text: 'FADLIL MUHAMMAD, 中村友昭, 長井隆行, "HDP-HMMを用いた物理的知識のモデル化", 情報処理学会第74回全国大会,6R-3,2012.03',
          },
          {
            url: "",
            text: '洪　東光, 長井隆行, "POSシステムのための非包装食品画像認識", 情報処理学会第74回全国大会,5S-2,2012.03',
          },
          {
            url: "",
            text: '板谷純希, 伊東慶輔, 荒木孝弥, 中村友昭, 長井隆行, 船越孝太郎, 長谷川雄二, 中野幹生, 岩橋直人, "ロボットによる環境の自律的探索と言語命令解釈の相互作用", 情報処理学会第74回全国大会,5Q-5,2012.03 学生奨励賞受賞',
          },
          {
            url: "",
            text: '阿部香澄, 岩崎安希子, 中村友昭, 長井隆行, 横山絢美, 下斗米貴之, 岡田浩之, 大森隆司, "子供の内部状態を推定しながら遊ぶPlaymate Robotの実現", 情報処理学会第74回全国大会,1D-5,2012.03',
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: 'SI2012優秀講演賞 安藤義記, 荒木孝弥, 中村友昭, 長井隆行, "hLDAに基づくロボットによる階層的概念の獲得", 2012.12.20',
          },
          {
            url: "",
            text: 'Advanced Robotics Best Paper Award, Sep. 2013 Araki.T, Nakamura.T, Nagai.T, Funakoshi.K, Nakano.M, and Iwahashi.N, "Online Object Categorization Using Multimodal Information Autonomously Acquired by a Mobile Robot", Advanced Robotics, Vol.26, Oct.2012',
          },
          {
            url: "",
            text: 'IROS 2012 Best Student Paper Award Finalist, Takaya Araki et al., "Online Learning of Concepts and Words Using Multimodal LDA and Hierarchical Pitman-Yor Language Model", 2012.10.11',
          },
          {
            url: "",
            text: '第18回創発システムシンポジ ウム 最優秀ポスター賞, 荒木孝弥, 中村友昭, 長井隆行, 長坂翔吾, 谷口忠大, 岩橋直人, "マルチモーダル概念形成と教師なし形態素解析に基づく語意のオンライン学習"， 2012.09.03',
          },
          {
            url: "",
            text: '第18回創発システムシンポジ ウム 優秀ポスター賞, 安藤義記, 荒木孝弥, 中村友昭, 長井隆行, "hLDAを用いた階層的概念の獲得", 2012.09.03',
          },
          {
            url: "",
            text: '第18回創発システムシンポジ ウム 優秀ポスター賞, Fadlil Muhammad, 中村友昭, 長井隆行, "階層ディリクレ過程隠れマルコフモデルを用いたロボットによる物理的知識の獲得", 2012.09.03',
          },
          {
            url: "",
            text: "RoboCup世界大会 2012 メキシコ @Homeリーグ準優勝 2012.06.24",
          },
          {
            url: "",
            text: "RoboCupジャパンオープン2012 大阪 @Homeリーグ優勝 2012.05.05",
          },
          {
            url: "",
            text: '情報処理学会全国大会学生奨励賞 板谷純希, 伊東慶輔，荒木孝弥，中村友昭, 長井隆行, 船越孝太郎，長谷川雄二，中野幹生, 岩橋直人 "ロボットによる環境の自律的探索と言語命令解釈の相互作用 ",2012.03.08',
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "http://www.bs-j.co.jp/asuteku/vol51.html",
            text: "BS ジャパン「地球★アステク」 :知能派ロボットDiGORO, 2012.03.22 放送",
          },
          {
            url: "http://apple.ee.uec.ac.jp/isyslab/images/roboconMag20120822.pdf",
            text: "ロボコンマガジン ：「ロボカップ2012メキシコシティ世界大会レポート」, 9月号, p.35, 2012.08.11",
          },
          {
            url: "http://apple.ee.uec.ac.jp/isyslab/images/robocon20120615.pdf",
            text: "ロボコンマガジン ：「ロボカップジャパンオープン2012大阪レポート」, 7月号, p.28-29, 2012.06.15",
          },
          {
            url: "",
            text: "ロボナブル(日 刊工業新聞社) ：「NII と電通大など、ロボカップにホームシミュレーションリーグを提案へ」：NIIと電通大の共同研究プロジェクトを紹介, 2012.05.07",
          },
        ],
      },
    ],
  },
  {
    year: 2011,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: 'Tomoaki Nakamura, Takaya Araki, Takayuki Nagai, Naoto Iwahashi, "Grounding of Word Meanings in LDA-Based Multimodal Concepts ", Advanced Robotics, 25, pp.2189-2206, 2011',
          },
          {
            url: "",
            text: 'Karina Ruby Perez Daniel, Enrique Escamilla Hernandez, Takayuki Nagai, Mariko Nakano Miyatake, "Unknown Objects Drawing Using Image Retrieval", Rev. Fac. Ing. Antioquita, no.61, pp.146-157, Dec.2011',
          },
          {
            url: "",
            text: 'Tomoaki Nakamura, Komei Sugiura, Takayuki Nagai, Naoto Iwahashi, Tomoki Toda, Hiroyuki Okada, and Takashi Omori，"Learning Novel Objects for Extended Mobile Manipulation", Journal of Intelligent and Robotic Systems, pp.1-18, Jul. 2011',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: '長井隆行, "ロボットによる概念形成・実世界理解と家庭用ロボットにおける有用性", 第17回創発システムシンポジウム（招待講演）,2011.09',
          },
          {
            url: "http://www.intechopen.com/articles/show/title/learning-novel-objects-for-domestic-service-robots",
            text: "Muhammad Attamimi, Tomoaki Nakamura, Komei Sugiura, Takayuki Nagai, Naoto Iwahashi, Learning Novel Objects for Domestic Service Robots, The Future of Humanoid Robots - Research and Applications, Riadh Zaier (Ed.), ISBN: 978-953-307-951-6, InTech, Available from: here",
          },
          {
            url: "",
            text: '長井隆行, "画像特徴量抽出のための基礎理論と画像認識への応用", R&D支援センター（セミナー）, 2011.04',
          },
        ],
      },
      {
        title: "International conference",
        items: [
          {
            url: "",
            text: 'Tomoaki Nakamura, Takayuki Nagai, Naoto Iwahashi, "Multimodal Categorization by Hierarchical Dirichlet Process," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.1520-1525, California, Sep.2011',
          },
          {
            url: "",
            text: 'Takaya Araki, Tomoaki Nakamura, Takayuki Nagai, Kotaro Funakoshi, Mikio Nakano, Naoto Iwahashi, "Autonomous Acquisition of Multimodal Information for On-line Object Concept Formation by Robots," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.1540-1547, California, Sep.2011 Best Paper Award Finalist, Best Student Paper Award Finalist',
          },
          {
            url: "",
            text: 'Tomoaki Nakamura, Takayuki Nagai, and Naoto Iwahashi, "Bag of Multimodal LDA Models for Concept Formation," IEEE International Conference on Robotics and Automation, pp.6233-6238, Shanghai, May2011',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '中村友昭, 長井隆行, 岩橋直人, "Bag of Multimodal HDPを用いたロボットによる概念・語意の獲得", 第12回計測自動制御学会システムインテグレーション部門講演会SI2011, 2L2-5, pp.1639-1642, 2011.12 SI2011優秀講演受賞',
          },
          {
            url: "",
            text: '荒木孝弥, 中村友昭, 長井隆行, 岩橋直人, "自律移動ロボットによるオンラインマルチモーダルカテゴリゼーション", 第12回計測自動制御学会システムインテグレーション部門講演会SI2011, 2L1-5, pp.1621-1624, 2011.12 SI2011優秀講演受賞',
          },
          {
            url: "",
            text: '岩崎安希子, 阿部香澄, 中村友昭, 長井隆行, 下斗米貴之, 大森隆司, "子供の好む遊びの傾向を推定する遊び相手ロボット実現のための基礎的検討", 電気学会研究会資料, IM-11-052～060, pp.43-48, 2011.12',
          },
          {
            url: "http://www.ii.is.kit.ac.jp/hai2011/proceedings/pdf/I-2B-3.pdf",
            text: '阿部香澄, 岩崎安希子, 中村友昭, 長井隆行, 横山絢美, 下斗米貴之, 岡田浩之, 大森隆司, "子供と遊ぶロボット：他者の状態推定に基づく行動決定モデルの適用", HAIシンポジウム2011, I-2B-3, 2011.12',
          },
          {
            url: "",
            text: 'Muhammad Attamimi, 中村友昭, 長井隆行, "近赤外線反射強度を用いた材質の認識とその応用", 信学技報, vol.111, no.257, SIP2011-69, pp.43-48, 2011.10',
          },
          {
            url: "http://www.jcss.gr.jp/meetings/JCSS2011/proceedings/pdf/JCSS2011_P2-17.pdf",
            text: '横山絢美, 大森隆司, 阿部香澄, 長井隆行, "他者の状態推定に基づく対人インタラクションロボットの行動戦略", 2011年度日本認知科学会第28回大会発表論文集, pp.468-471, 2011.09',
          },
          {
            url: "",
            text: '中村友昭, 長井隆行, 岩橋直人，"複数の階層ディリクレ過程を用いた物体のマルチモーダルカテゴリゼーション", 創発システム・シンポジウム，pp.79-82, 2011.09 最優秀ポスター賞受賞',
          },
          {
            url: "",
            text: '荒木孝弥, 中村友昭, 長井隆行, "オンラインマルチモーダルLDAに基づく物体概念形成", 創発システム・シンポジウム, ポスター発表, pp.71-74, 2011.09 優秀ポスター賞受賞',
          },
          {
            url: "",
            text: 'Muhammad Attamimi, 中村友昭, 長井隆行, "ロボットによる掃除タスクのための視覚認識システム", 創発システム・シンポジウム ポスター発表, pp.67-70, 2011.09',
          },
          {
            url: "",
            text: '荒木孝弥, 中村友昭，長井隆行, "パーティクルフィルタを用いたオンラインLDAによる概念形成", 日本ロボット学会学術講演会, 2J1-4, 2011.09',
          },
          {
            url: "",
            text: '中村友昭, 長井隆行，岩橋直人, "複数のマルチモーダルHDPを用いた複雑な概念構造の形成", 日本ロボット学会学術講演会, 1O1-6, 2011.09',
          },
          {
            url: "",
            text: '伊東慶輔, 中村友昭，長井隆行, "アームの可動領域とロボットの移動を考慮したモバイルマニピュレーションのための把持位置決定", 日本ロボット学会学術講演会, 3N2-2, 2011.09',
          },
          {
            url: "",
            text: '阿部香澄, 岩崎安希子, 中村友昭, 長井隆行, 横山絢美, 下斗米貴之, 岡田浩之, 大森隆司, "推定した子供の状態に基づいて行動を選択する遊び相手ロボット" 日本ロボット学会学術講演会, 3N2-3, 2011.09',
          },
          {
            url: "",
            text: "Muhammad Attamimi, 丸山恭平, 前田泰斗, 中村友昭, 長井隆行, ”物体認識と材質認識を用いた掃除タスクの実現, 日本ロボット学会学術講演会, 2J1-2, 2011.09",
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2011/pdf/6.pdf",
            text: '横山絢美, 阿部香澄, 長井隆行, 大森隆司, "子供と遊ぶ：飽きやすい相手の意欲を維持するメタ戦略のモデル化", 人工知能学会全国大会, 2D1-OS5a-1, 2011.06',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2011/pdf/395.pdf",
            text: '谷口忠大, 岩橋直人, 新田恒雄, 岡田浩之, 長井隆行, "記号創発ロボティクスとマルチモーダルセマンティックインタラクション～実世界認知・運動・言語を統べる知能構成への挑戦～", 人工知能学会全国大会, 2B2-OS22a-1, 2011.06',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2011/pdf/265.pdf",
            text: '荒木孝弥, 中村友昭, 長井隆行, 船越孝太郎, 中野幹生, 岩橋直人, "移動ロボットによるマルチモーダル情報の自律的取得と概念・語意獲得", 人工知能学会全国大会, 2B2-OS22a-6, 2011.06',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2011/pdf/307.pdf",
            text: '板谷純希, 中村友昭, 長井隆行, "ユーザとのインタラクションに基づく学習を利用したロボットのタスクプログラミング", 人工知能学会全国大会, 3B1-OS22c-9, 2011.06',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2011/pdf/264.pdf",
            text: '中村友昭，長井隆行, 岩橋直人, "階層ディリクレ過程を用いたマルチモーダル物体概念の形成", 人工知能学会全国大会, 3B1-OS22c-7, 2011.06',
          },
          {
            url: "",
            text: '阿部香澄, 中村友昭, 長井隆行, 横山絢美, 下斗米貴之, 岡田浩之, 大森隆司, "子供や高齢者と遊ぶロボット実現のための基礎的検討", 電子情報通信学会総合大会，D-12-46, 2011.03',
          },
          {
            url: "",
            text: '中村友昭, 荒木孝弥, 長井隆行, 岩橋直人, "マルチモーダルな概念形成に基づく対話ロボットの実現", 電子情報通信学会総合大会，D-8-6, 2011.03',
          },
        ],
      },
      {
        title: "特許",
        items: [
          {
            url: "",
            text: "中野幹生, 長井隆行, 水谷了, 中村友昭, 船越孝太郎, 撮像装置、 オクルージョン領域の探索方法、及びプログラム, 特願2010-275199, 2010.12.10, 特開2011-123071（公開日2011/06/23）",
          },
          {
            url: "",
            text: "木村一人, 田中葉, 長井隆行, 光学的情報読取装置及び光学的情報読取方法, 特願2010-105482, 2010.04.30, 特開2011-233099（公開日2011/11/17）",
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: 'SI2011優秀講演賞 荒木孝弥, 中村友昭, 長井隆行, 岩橋直人, "自律移動ロボットによるオンラインマルチモーダルカテゴリゼーション", 2011.12.25',
          },
          {
            url: "",
            text: 'SI2011優秀講演賞 中村友昭, 長井隆行, 岩橋直人, "Bag of Multimodal HDPを用いたロボットによる概念・語意の獲得", 2011.12.25',
          },
          {
            url: "",
            text: 'IROS 2011 Best Paper Award Finalist,Takaya Araki et al., "Autonomous Acquisition of Multimodal Information for On-line Object Concept Formation by Robots", 2011.09.29',
          },
          {
            url: "",
            text: 'IROS 2011 Best Student Paper Award Finalist,Takaya Araki et al., "Autonomous Acquisition of Multimodal Information for On-line Object Concept Formation by Robots", 2011.09.29',
          },
          {
            url: "",
            text: '第17回創発システム・シンポ ジウム 優秀ポスター賞, 荒木孝弥, 中村友昭, 長井隆行, "オンラインマルチモーダルLDAに基づく物体概念形成", 2011.09.05',
          },
          {
            url: "",
            text: '第17回創発システム・シンポ ジウム 最優秀ポスター賞, 中村友昭, 長井隆行, 岩橋直人，"複数の階層ディリクレ過程を用いた物体のマルチモーダルカテゴリゼーション", 2011.09.05',
          },
          {
            url: "",
            text: "人工知能学会賞 RoboCupジャパンオープン2011大阪 2011.05.05",
          },
          {
            url: "",
            text: "ロボカップ研究賞 2011.05.05",
          },
          {
            url: "",
            text: "RoboCupジャパンオープ ン2011 大阪 @Homeリーグ優勝 2011.05.05",
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "http://apple.ee.uec.ac.jp/isyslab/images/nikkankougyou20111110.pdf",
            text: "日刊工業新聞 ：「2011 国際ロボット展開幕」：DiGOROが開会式に登場, 2011.11.10",
          },
          {
            url: "http://apple.ee.uec.ac.jp/isyslab/images/nikkankougyou20111028.pdf",
            text: "日刊工業新聞 ：「2011 国際ロボット展紙上プレビュー」：家庭用自律ロボ、物・動きを学習, 2011.10.28",
          },
          {
            url: "",
            text: "ロボコンマガジン ：「ロボカップジャパンオープン2011大阪レポート」, 7月号, p.34, 2011.07.01",
          },
          {
            url: "http://chofu.keizai.biz/headline/716/",
            text: "調布経済新聞 ：「調布・電通大、「ロボコン」で世界狙う－5月の 「ロボカップ」では優勝も」, 2011.06.08",
          },
        ],
      },
    ],
  },
  {
    year: 2010,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: '中村友昭, 長井隆行, "機能と視覚的情報の関係性に基づく物体の概念モデル", 情報処理学会論文誌, vol.51, no.8, pp.1413-1427, 2010.08',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: '長井隆行, "家庭用サービスロボットの実現を目指したRoboCup@Homeリーグの試み", 塑性加工学会シンポジウム（招待講演）, 2010.12',
          },
          {
            url: "",
            text: '長井隆行, "マルチモーダルカテゴリゼーションに基づく概念形成と語意の獲得", ロボット工学セミナ―：記号・言語を基盤としたロボットの知能化技術（招待講演）, 2010.11',
          },
          {
            url: "",
            text: "Tomoaki Nakamura and Takayuki Nagai. Forming Object Concept Using Bayesian Network, Bayesian Network, Ahmed Rebai (Ed.), ISBN: 978-953-307-124-4, Sciyo, 2010.08",
          },
          {
            url: "",
            text: '長井隆行, "マルチモーダルカテゴリゼーションに基づくロボットの概念形成と実世界理解", 電子情報通信学会ソサエティ大会招待講演（マルチモーダル信号処理とその応用）, 2010.09',
          },
        ],
      },
      {
        title: "International conference",
        items: [
          {
            url: "",
            text: 'Mikio Nakano, Naoto Iwahashi, Takayuki Nagai, Taisuke Sumii, Xiang Zuo, Ryo Taguchi, Takashi Nose, Akira Mizutani, Tomoaki Nakamura, Muhanmad Attamim, Hiromi Narimatsu, Kotaro Funakoshi, Yuji Hasegawa, "Grounding New Words on the Physical World in Multi-Domain Human-Robot Dialogues," 2010 AAAI Fall Symposium, Dialog with Robots(FS-10-05), pp.74-79, Nov.2010',
          },
          {
            url: "",
            text: 'Naoto Iwahashi, Komei Sugiura, Ryo Taguchi, Takayuki Nagai, Tadahiro Taniguchi, "Robots That Learn to Communicate: A Developmental Approach to Personally and Physically Situated Human-Robot Conversations," 2010 AAAI Fall Symposium, Dialog with Robots(FS-10-05), pp.38-43, Nov.2010',
          },
          {
            url: "",
            text: 'Tomoaki Nakamura, Takayuki Nagai, "Object Concept Modeling Based on the Relationship among Appearance, Usage and Functions," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.5410-5415, Oct.2010',
          },
          {
            url: "",
            text: 'Muhammad Attamimi, Akira Mizutani, Tomoaki Nakamura, Takayuki Nagai, Kotaro, Funakoshi, Mikio Nakano, "Real-Time 3D Visual Sensor for Robust Object Recognition," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.4560-4565, Oct.2010',
          },
          {
            url: "",
            text: 'Muhammad Attamimi, Akira Mizutani, Tomoaki Nakamura, Komei Sugiura, Takayuki Nagai, Naoto Iwahashi, Hiroyuki Okada, Takashi Omori, "Learning Novel Objects Using Out-of-Vocabulary Word Segmentation and Object Extraction for Home Assistant Robots," IEEE International Conference on Robotics and Automation 2010, pp.745-750, May2010',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '荒木孝弥, 中村友昭, 長井隆行, 船越孝太郎, 中野幹生, "概念形成のためのロボットによる自律的なマルチモーダル情報の取得", 電気学会計測研究会, 2010.12',
          },
          {
            url: "",
            text: '阿部香澄, 中村友昭, 長井隆行, 横山絢美, 下斗米貴之, 岡田浩之, 大森隆司, "子供や高齢者の遊び相手をする Playmate robot の実現と課題", 電気学会計測研究会, IM-10-081, 2010.12',
          },
          {
            url: "",
            text: '森泰裕, 中村友昭, 長井隆行, 船越孝太郎, 中野幹生, "奥行と近赤外線反射強度を利用した物体認識手法の検討", 電気学会計測研究会, 2010.12',
          },
          {
            url: "",
            text: '大森隆司，岡田浩之，中村友 昭，長井隆行，杉浦孔明，岩橋直人，"RoboCup@home : 生活支援ベンチマークとしてのロボット競技", 日本ロボット学会学術講演会, 3B3-1, 2010.09',
          },
          {
            url: "",
            text: '中村友昭, 長井隆行, 岩橋直人, "Gibbs Samplingによる物体のマルチモーダルカテゴリゼーション", 日本ロボット学会学術講演会, 2I1-3, 2010.09',
          },
          {
            url: "",
            text: '伊東慶輔, 中村友昭, 長井隆行, "RRTを用いたコンフィギュレーション空間における双腕同時経路計画", 日本ロボット学会学術講演会, 1M2-2, 2010.09',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2010/pdf/376.pdf",
            text: '板谷純希, 中村友昭, 長井隆行, "自律移動ロボットのための自然言語タスクプログラミング", 人工知能学会全国大会2010, 2E3-3, 2010.05',
          },
          {
            url: "https://kaigi.org/jsai/webprogram/2010/pdf/366.pdf",
            text: '中村友昭, 長井隆行, 岩橋直人, "複数のマルチモーダルLDA を用いた抽象的概念の形成", 人工知能学会全国大会2010, 1J1-OS13-3, 2010.05',
          },
          {
            url: "",
            text: '板谷純希，中村友昭，長井隆 行, "自然言語によるロボットの行動プログラミング", 情報処理学会全国大会, 5V-1, 2010.3',
          },
          {
            url: "",
            text: '中村友昭，西田匡志，長井隆 行, "把持動作による物体カテゴリの形成と認識", 情報処理学会全国大会, 5V-3, 2010.03 学生奨励賞受賞',
          },
          {
            url: "",
            text: '水谷了, 中村友昭, アッタミミムハンマド, 長井隆行, 船越孝太郎, 中野幹生, "距離情報を用いた3次元物体認識", 情報処理学会全国大会, 3X-9, 2010.03',
          },
          {
            url: "",
            text: 'アッタミミムハンマド, 水谷了, 中村友昭, 長井隆行, 船越孝太郎, 中野幹生, "複数特徴量を統合したパーティクルフィルタによる物体の検出と追跡", 情報処理学会全国大会, 5Y-1, 2010.03',
          },
          {
            url: "",
            text: '中村友昭, 長井隆行, 岩橋直人, "マルチモーダル情報に基づく物体概念の形成", 信学技報, PRMU2009-157,pp.7-12, 2010.01',
          },
        ],
      },
      {
        title: "特許",
        items: [
          {
            url: "",
            text: "長井隆行, 米澤淳一, 画像処理装置、画像処理方法、及び、撮像システム, 特願2008-236485, 特開2010-072700（公開日2010/04/02）",
          },
          {
            url: "",
            text: "長井隆行, 中村友昭, 石井香澄, 触覚情報検出装置、及び、触覚情報検出方法, 特願2008-210075, 2008.8.18, 特開2010-044028（公開日2010/02/25）",
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: "RoboCup世界大会 2010シンガポール @Homeリーグ優勝 2010.06.24",
          },
          {
            url: "",
            text: "ロボット学会賞 RoboCupジャパンオープン2010大阪 2010.05.04",
          },
          {
            url: "",
            text: "RoboCupジャパンオープン 2010大阪 @Homeリーグ優勝 2010.05.04",
          },
          {
            url: "",
            text: '情報処理学会全国大会学生奨励賞 中村友昭, 西田匡志, 長井隆行, "把持動作による物体カテゴリの形成と認識", 2010.03',
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "",
            text: "TBS「ひるおび！」 :DiGOROのROBOTECH(ビッグサイト)でのデモを紹介, 2010.07.29 放送",
          },
          {
            url: "",
            text: "itv 「itv news」(UK) :Robots for elderly 2010.07.29",
          },
          {
            url: "",
            text: "Australian News Channel Pty Ltd「skyNEWS」 : DiGORO the new robot nanny, 2010.07.29",
          },
          {
            url: "",
            text: "New Tang Dynasty Television (台湾) :Robots to Care for the Elderly in Japan, 2010.07.28",
          },
          {
            url: "",
            text: "NHK「まいど 238号」:DiGOROがおばはんロボット役で出演, 2010.03.20",
          },
          {
            url: "",
            text: "ロボコンマガジ ン :「ロボカップ2010シンガポール世界大会レポート」, 9月号, p.29, 2010.09.01",
          },
          {
            url: "",
            text: "日刊工業新聞 :「ロボット交差点　絶妙な曲線描く　自律移動ロボ　電気通信大」, 2010.08.06",
          },
        ],
      },
    ],
  },
  {
    year: 2009,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: '中村慎也, 岩橋直人, 長井隆行, "実世界における人とロボットの共有信念の推定に基づいた適応的な発話生成", 知能と情報, Vol.16, No.5, pp.663-682, 2009.10',
          },
          {
            url: "",
            text: '中村慎也, 長井隆行, 岩橋直人, 佐藤健, 麻生英樹, "変分ベイズ法を用いたモデル構造探索に基づく抽象的単語の学習", 電子情報通信学会論文誌D, vol.J92-D, no.4, pp.467-479, 2009.04',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: '中村友昭, 長井隆行,岩橋直人, "ビジョンロボットによる物体のマルチモーダルカテゴリゼーション", 画像ラボ, vol.20, no.5, pp.31-36, 2009.05',
          },
          {
            url: "",
            text: '岡田浩之, 長井隆行, "ロボカップ世界大会優勝とその技術",inrevium研究インフォメーション[3], pp.9-12, 2009.04',
          },
          {
            url: "",
            text: '長井隆行, "音声・画像処理（認識）における信号処理の使われ方", NEC技術セミナー, 2009.02',
          },
          {
            url: "",
            text: '長井隆行, "デジタル信号処理の基礎", NEC技術講座, 2009.01',
          },
        ],
      },
      {
        title: "International conference",
        items: [
          {
            url: "",
            text: 'Tomoaki Nakamura, Takayuki Nagai, Naoto Iwahashi, "Grounding of word meanings in multimodal concepts using LDA," in Proc. IEEE/RSJ International Conference on Robotics and Automation 2009, pp.3943-3948, 2009.10',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "http://kaigi.org/jsai/webprogram/2009/pdf/156.pdf",
            text: '岩橋直人, 中村慎也, 長井隆行, "人間とロボットの共有信念の推定に基づいた相互適応的な発話生成手法", 人工知能学会全国大会2009, 1F2-OS7-8, 2009.06',
          },
          {
            url: "http://kaigi.org/jsai/webprogram/2009/pdf/150.pdf",
            text: '中野幹生, 能勢隆, 田口亮, 水谷了, 中村 友昭, 船越孝太郎, 長谷川雄二, 鳥井豊隆, 岩橋直人, 長井隆行, "自然な対話の中で物体の名前を覚えるロボット", 人工知能学会全国大会2009, 1F2-OS7-3, 2009.06',
          },
          {
            url: "",
            text: '岩橋直人, 中村慎也, 長井隆行, "人とロボットの共有信念の推定に基づいた相互適応的な発話生成", ファジィシステムシンポジウムFSS2009, 2A2-01, 2009.09',
          },
          {
            url: "",
            text: '中村友昭, 長井隆行, 岩橋直人, "マルチモーダルな物体概念に基づく語彙の理解", 日本ロボット学会学術講演会, 3G1-08, 2009.09',
          },
          {
            url: "",
            text: '水谷了, アッタミミムハンマド, 中村友昭, 長井隆行, 船越孝太郎, 中野幹夫, "赤外線TOFカメラとCCDカメラのキャリブレーションによる3次元センサの実現と画像処理への応用", 電気学会研究会資料, pp.69-74, 2009.12',
          },
          {
            url: "",
            text: '森泰裕, 中村友昭, 長井隆行, "画像のカテゴリゼーションに基づく感情の推定", 電気学会研究会資料,pp.75-80, 2009.12',
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: "RoboCup世界大会 2009オーストリア @Homeリーグ準優勝 2009.07.05",
          },
          {
            url: "",
            text: "人工知能学会賞 RoboCupジャパンオープン2009大阪 2009.05.10",
          },
          {
            url: "",
            text: "RoboCupジャパンオープ ン2009大阪 @Homeリーグ優勝 2009.05.10",
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "",
            text: "NHK「ニュー ステラス関西」 :RoboCup@HomeリーグとDiGOROの紹介,2009.05.08",
          },
          {
            url: "",
            text: "日経新聞 :「ふく・運ぶ・捨てる…　家事の動きをまねるロボット」, 2009.08.24",
          },
          {
            url: "",
            text: "ロボコンマガジ ン :「ロボカップ2009グラーツ世界大会レポート」, 9月号, p.35, 2009.08.17",
          },
          {
            url: "",
            text: "日刊工業新聞 :「家庭用準優勝」, 2009.08.05",
          },
          {
            url: "",
            text: "東京新聞 :「ロボカップ世界大会 2度目の快挙」, 2009.07.10",
          },
          {
            url: "",
            text: "産経新聞 :「玉川大・電通大チームが準優勝　ロボカップ世界大会」, 2009.07.07",
          },
          {
            url: "",
            text: "ロボットウォッ チ :「「ロボカップジャパンオープン2009大阪」レポート」, 2009.05.27",
          },
        ],
      },
    ],
  },
  {
    year: 2008,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: '中村友昭，長井隆行，岩橋直 人, "ロボットによる物体のマルチモーダルカテゴリゼーション", 電子情報通信学会論文誌D, vol.J92-D, no.10, pp.2507-2518,2008.10',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '中村友昭，長井隆行，岩橋直 人, "マルチモーダルＬＤＡを用いたロボットによる物体のカテゴリゼーション", 第26回日本ロボット学会学術講演会予稿集,1N1-03, 2008.09',
          },
          {
            url: "",
            text: '杉浦孔明, 水谷了, 中村友昭, 長井隆行, 岩橋直人, 岡田浩之, 大森隆司, "音声からの未登録語切り出しと画像からの物体抽出の統合による新規物体の学習", 第26回日本ロボット学会学術講演会予稿集, 1N1-05, 2008.09',
          },
          {
            url: "",
            text: '大部恵子, 柴一樹, 長井 隆行, 岡田浩之, "自律移動ロボットによるロボカップ@ホームへの参加", 第26回日本ロボット学会学術講演会予稿集, 3A1-07, 2008.09',
          },
          {
            url: "",
            text: '中村友昭,長井隆行,岩橋直 人, "LDAを用いたマルチモーダル物体概念に基づく語意獲得", 電子情報通信学会2009総合大会講演論文集, D-8-3, 2008.03',
          },
          {
            url: "",
            text: '中村慎也, 岩橋直人, 長井隆行, "人とロボットの共有信念に基づいた発話の生成", 電子情報通信学会2009総合大会講演論文集, D-8-16, 2008.03',
          },
        ],
      },
      {
        title: "特許",
        items: [
          {
            url: "",
            text: "長井隆行, 米澤淳一, 多視点画像情報と知識を併用した３次元情報の復元方法, 特願2008-236485, 2008.9.16",
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: "RoboCup世界大会 2008蘇州 @Homeリーグ優勝 2008.07.20",
          },
          {
            url: "",
            text: "RoboCupジャパンオープ ン2008沼津 @Homeリーグ優勝 2008.05.05",
          },
          {
            url: "",
            text: '電子情報通信学会優秀発表賞 新地康人,長井隆行, "道具の概念モデル－計算機による道具の理解を目指して－", 2008.03',
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "",
            text: "NHK「いっと ６けん」 : ロボカップ＠ホーム優勝ロボットeR@serの紹介, 2008.09.19 放送",
          },
          {
            url: "",
            text: "ロボコンマガジン :「ロボカップ2008蘇州大会・@Homeリーグ優勝ロボット「eR@ser」優勝報告会」, No.60, p.62, 2008.10.15",
          },
          {
            url: "",
            text: "読売新聞 :「ロボカップ世界大会 合同チームV 家庭用部門で(東京多摩)」, 2008.08.11",
          },
          {
            url: "http://robot.watch.impress.co.jp/cda/news/2008/08/11/1239.html",
            text: "ロボットウォッチ :「eR@sers ロボカップ2008蘇州世界大会で優勝」, 2008.08.11",
          },
          {
            url: "",
            text: "朝日新聞 :「世界ロボカップで優勝」, 2008.08.01",
          },
          {
            url: "",
            text: "ロボコンマガジン :「ロボカップジャパンオープン　＠ホームリーグ」, No.58, pp.21-23, 2008.06.13",
          },
          {
            url: "",
            text: "読売新聞 :「ロボカップV合同チーム、世界大会へ(東京多摩)」, 2008.05.28",
          },
          {
            url: "http://robot.watch.impress.co.jp/cda/news/2008/05/19/1056.html",
            text: "ロボットウォッチ :「ロボカップジャパンオープン2008沼津@ホームリーグ」, 2008.05.19",
          },
        ],
      },
    ],
  },
  {
    year: 2007,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: 'Takayuki Nagai, Masaaki Ikehara, and Akira Kurematsu, "HMM-based Surface Reconstruction from Single Images", Systems and Computers in Japan, vol.38, no.11, pp.80-89, 2007.11',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: 'Yasuhito Shinchi, Yosuke Sato, Takayuki Nagai, "Bayesian Network Model for Object Concept," IEEE International Conference on Acoustics, Speech and Signal Processing, Vol.2, pp.473-476, Apr.2007',
          },
          {
            url: "",
            text: 'Kazuto Kimura, Takayuki Nagai, Hiroto Nagayoshi, Hiroshi Sako, "Simultaneous Estimation of Super-resolved Image and 3D Information Using Multiple Stereo-Pair Images," IEEE International Conference on Image Processing 2007,Vol.V, pp.417-420, Sep.2007',
          },
          {
            url: "",
            text: 'Tomoaki Nakamura, Takayuki Nagai, Naoto Iwahashi, "Multimodal Categorization by a Robot," IEEE/RSJ International Conference on Intelligent Robots and Systems, pp.2415-2420, Oct.2007',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '木村一人, 長井隆行, 永吉洋登, 酒匂裕, "複数ステレオ画像を用いた画像と3次元情報の同時高解像度化", 情報処理学会第69回全国大会講演論文集, 6P-5, vol.2, pp.339-340, 2007.03',
          },
          {
            url: "",
            text: '中村慎也, 長井隆行, 岩橋直人, 麻生英樹, 佐藤健, "動作とオブジェクトの関係に基づく機能カテゴリーを表す単語のオンライン学習, "情報処理学会第69回全国大会講演論文, 4Q-7, vol.2, pp.403-404, 2007.03 学生奨励賞受賞',
          },
          {
            url: "",
            text: '佐藤陽介, 長井隆行, "ベイジアンネットワークによる物体の概念モデル", 2007年電子情報通信学会総合大会講演論文集(情報・システム), D-12-77, p.193, 2007.03',
          },
        ],
      },
      {
        title: "特許",
        items: [
          {
            url: "",
            text: "長井隆行, 細井一邦, 光学的情報読取装置、光学的情報読取方法、光学的情報読取プログラム及び記録媒体, 特願2007-192329, 2007.7.24",
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: '情報処理学会全国大会学生奨励 賞 中村慎也, 長井隆行, 岩橋直人, 麻生英樹, 佐藤健, "動作とオブジェクトの関係に基づく機能カテゴリーを表す単語のオンライン学習", 2007.03',
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "",
            text: "日本経済新聞 :「解像度16倍に向上・電通大と日立」, 2007.04.23",
          },
        ],
      },
    ],
  },
  {
    year: 2006,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: '長井隆行, 岩橋直人, "物体のマルチモーダルカテゴリゼーション", 情報科学技術レターズ2006, vol.5, pp.183-186, 2006.08',
          },
          {
            url: "",
            text: 'Takehiro Ihara, Takayuki Nagai, Kazuhiko Ozeki, Akira Kurematsu, "Noise Reduction in Time Domain Using Referential Reconstruction", IEICE Trans. Inf. & syst., vol.E89-D, no.3, pp.1203-1213, 2006.03',
          },
        ],
      },
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: 'Takayuki Nagai, Naoto Iwahashi, "Object Categorization Using Multimodal Information," in Proc of IEEE Ten Region Conference (TENCON2006), C10.2,TEN-334, Nov.2006.',
          },
          {
            url: "",
            text: 'Yosuke Sato, Takayuki Nagai, "Learning of Object Concept Through Function and Shape," in Proc of IEEE Ten Region Conference (TENCON2006), C10.3,TEN-477, Nov.2006.',
          },
          {
            url: "",
            text: 'Rintaro Sukegawa, Shinya Uchida, Takayuki Nagai, Masaaki Ikehara, "Blind Source Separation Using Correlation at Neighboring Frequencies," in Proc of 2006 International Symposium on Intelligent Signal Processing and Communication Systems, TAM1-2-1, pp.451-454, Dec.2006.',
          },
        ],
      },
      {
        title: "国内学会",
        items: [
          {
            url: "",
            text: '安居健, 長井隆行, "人間の行動モデルの生成と行動予測への応用", 第21回信号処理シンポジウム講演論文集CD-ROM, Ba-2, 2006.11',
          },
          {
            url: "",
            text: '木村一人, 長井隆行, 永吉洋登, 酒匂裕, "複数のステレオペアを用いた高解像度画像と高精度三次元情報の同時推定", 第21回信号処理シンポジウム講演論文集CD-ROM, B8-3, 2006.11',
          },
        ],
      },
      {
        title: "特許",
        items: [
          {
            url: "http://apple.ee.uec.ac.jp/isyslab/publication/publications/06-044JP00.pdf",
            text: "長井隆行, 佐藤陽介, 細井一邦, 物体認識システム、物体認識方法及び物体認識ロボット, 特願 2006-308237, 2006.11.14, 登録番号：4771543（登録日2011/07/01） 特許証, 特許公報",
          },
          {
            url: "http://apple.ee.uec.ac.jp/isyslab/publication/publications/06-008JP00.pdf",
            text: "長井隆行, 木村一人, 細井一邦, 光学的情報読取装置及び光学的情報読取方法, 特願2006-318834, 2006.11.27, 特許第5028582号（登録日2012/07/06） 特許証, 特許公報",
          },
        ],
      },
      {
        title: "受賞等",
        items: [
          {
            url: "",
            text: "日経産業新聞 :「視覚障害者 杖が色識別、誘導」, 2006.06.06",
          },
          {
            url: "",
            text: "日刊工業新聞 :「視覚障害者を安全誘導 白杖でテープの色識別」, 2006.06.01",
          },
        ],
      },
    ],
  },
  {
    year: 2005,
    contents: [
      {
        title: "Journal",
        items: [
          {
            url: "",
            text: '張曉輝, 長井隆行, 榑松明, "ユーザの簡易指定に基づく情景中の文字抽出と認識", 情報処理学会論文誌, vol.46, no.10,　pp.2556-2565, 2005.10',
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            url: "",
            text: "TV東京「ワー ルドビジネスサテライト」 :学習ロボットDiGOROの紹介, 2005.07.13",
          },
          {
            url: "",
            text: "日経産業新聞 :「ロボ君これはなんだろう？みて、つかんで、覚える。電気通信大で試作。」, 2005.06.23",
          },
        ],
      },
    ],
  },
  {
    year: 2004,
    contents: [
      {
        title: "Tutorial/Invited/Book chapter",
        items: [
          {
            url: "",
            text: '長井隆行, 榑松 明, "領域拡張に基づく情景画像中の文字の抽出と認識", 画像ラボ, vol.5, no.9,pp.11-16, 2004.09',
          },
        ],
      },
    ],
  },
];
