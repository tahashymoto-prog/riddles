// クイズのデータ
const quizData = {
    "小学生": [
        { question: "日本の首都はどこでしょう？", options: ["大阪", "京都", "東京", "福岡"], answer: "東京" },
        { question: "1年は何日でしょう？（うるう年を除く）", options: ["300日", "365日", "400日", "500日"], answer: "365日" },
        { question: "信号機の色で「進め」を意味するのは何色でしょう？", options: ["赤", "黄", "青", "紫"], answer: "青" },
        { question: "童話『桃太郎』で、桃太郎のお供をしなかった動物はどれでしょう？", options: ["犬", "猿", "キジ", "猫"], answer: "猫" },
        { question: "太陽系の惑星のうち、最も大きいものはどれでしょう？", options: ["地球", "火星", "木星", "水星"], answer: "木星" },
        { question: "春、夏、秋、冬の四季のうち、次に来る季節はどれでしょう？ 夏の次は？", options: ["春", "夏", "秋", "冬"], answer: "秋" },
        { question: "鉛筆の芯の主な原料は何でしょう？", options: ["鉄", "黒鉛", "金", "アルミニウム"], answer: "黒鉛" },
        { question: "世界で最も高い山は何でしょう？", options: ["富士山", "K2", "エベレスト", "モンブラン"], answer: "エベレスト" },
        { question: "コンピュータで使う、情報を記憶する装置を何というでしょう？", options: ["マウス", "キーボード", "ディスプレイ", "ハードディスク"], answer: "ハードディスク" },
        { question: "日本のお金で、一番大きな額の硬貨はいくらでしょう？", options: ["10円", "50円", "100円", "500円"], answer: "500円" }
    ],
    "中学生": [
        { question: "日本の国会は二院制ですが、その二院の名前は何でしょう？", options: ["衆議院と参議院", "衆議院と貴族院", "上院と下院", "国民議会と元老院"], answer: "衆議院と参議院" },
        { question: "元素記号「H2O」が表す物質は何でしょう？", options: ["酸素", "二酸化炭素", "水", "水素"], answer: "水" },
        { question: "日本の歴史上、初めて武士による政権が樹立されたのは何時代でしょう？", options: ["平安時代", "鎌倉時代", "室町時代", "江戸時代"], answer: "鎌倉時代" },
        { question: "細胞のエネルギー通貨と呼ばれる物質は何でしょう？", options: ["DNA", "RNA", "ATP", "グルコース"], answer: "ATP" },
        { question: "三角形の内角の和は何度でしょう？", options: ["90度", "180度", "270度", "360度"], answer: "180度" },
        { question: "光合成を行う植物が吸収する気体は何でしょう？", options: ["酸素", "窒素", "二酸化炭素", "水蒸気"], answer: "二酸化炭素" },
        { question: "日本で最も高い山は富士山ですが、その標高は何mでしょう？", options: ["3776m", "3790m", "3800m", "3820m"], answer: "3776m" },
        { question: "小説『吾輩は猫である』の作者は誰でしょう？", options: ["夏目漱石", "森鴎外", "芥川龍之介", "太宰治"], answer: "夏目漱石" },
        { question: "地球の表面を覆うプレートが動くことによって引き起こされる現象は何でしょう？", options: ["台風", "地震", "津波", "竜巻"], answer: "地震" },
        { question: "円周率πの近似値としてよく使われる数字は何でしょう？", options: ["2.71", "3.14", "1.618", "4.13"], answer: "3.14" }
    ],
    "高校生": [
        { question: "「春はあけぼの」で始まる随筆の作者は誰でしょう？", options: ["紫式部", "清少納言", "鴨長明", "吉田兼好"], answer: "清少納言" },
        { question: "sin²θ + cos²θ の値はいくつでしょう？", options: ["0", "1", "2", "-1"], answer: "1" },
        { question: "1789年に始まり、世界の歴史に大きな影響を与えた市民革命は何でしょう？", options: ["名誉革命", "アメリカ独立革命", "フランス革命", "ロシア革命"], answer: "フランス革命" },
        { question: "日本国憲法で定められている国民の三大義務は、勤労、納税とあと一つは何でしょう？", options: ["教育を受けさせる義務", "選挙に行く義務", "兵役の義務", "健康を維持する義務"], answer: "教育を受けさせる義務" },
        { question: "慣性の法則、運動の法則、作用・反作用の法則を発見した物理学者は誰でしょう？", options: ["アインシュタイン", "ガリレオ・ガリレイ", "ニュートン", "ファラデー"], answer: "ニュートン" },
        { question: "すべての生物の遺伝情報を担う、二重らせん構造を持つ物質は何でしょう？", options: ["RNA", "ATP", "タンパク質", "DNA"], answer: "DNA" },
        { question: "鎌倉幕府を倒し、建武の新政を行った天皇は誰でしょう？", options: ["天武天皇", "後鳥羽上皇", "後醍醐天皇", "明治天皇"], answer: "後醍醐天皇" },
        { question: "溶液の酸性・アルカリ性の度合いを示す0から14までの数値は何でしょう？", options: ["pH", "mol", "hPa", "dB"], answer: "pH" },
        { question: "シェイクスピアの四大悲劇に含まれない作品はどれでしょう？", options: ["ハムレット", "オセロ", "リア王", "ロミオとジュリエット"], answer: "ロミオとジュリエット" },
        { question: "大陸プレートが他のプレートの下に沈み込む場所を何と呼ぶでしょう？", options: ["海嶺", "トランスフォーム断層", "海溝", "ホットスポット"], answer: "海溝" }
    ],
    "大学生": [
        { question: "経済学において、需要と供給が一致する点を何と呼ぶでしょう？", options: ["均衡点", "最適点", "生産点", "消費点"], answer: "均衡点" },
        { question: "哲学において、「我思う、ゆえに我あり」という言葉を残したのは誰でしょう？", options: ["プラトン", "アリストテレス", "デカルト", "カント"], answer: "デカルト" },
        { question: "量子力学の基本原理の一つで、粒子の位置と運動量を同時に正確に測定できないことを示す法則は何でしょう？", options: ["運動量保存の法則", "不確定性原理", "作用反作用の法則", "エネルギー保存の法則"], answer: "不確定性原理" },
        { question: "法学において、個人の権利や自由を国家権力から守るための法律の分野を何と呼ぶでしょう？", options: ["民法", "刑法", "憲法", "商法"], answer: "憲法" },
        { question: "統計学において、データのばらつきの度合いを示す指標の一つで、平均値からの偏差の二乗の平均を何と呼ぶでしょう？", options: ["中央値", "最頻値", "分散", "標準偏差"], answer: "分散" },
        { question: "生物学において、DNAの二重らせん構造を発見した人物として有名なのは、ワトソンともう一人は誰でしょう？", options: ["ダーウィン", "メンデル", "クリック", "パスツール"], answer: "クリック" },
        { question: "国際関係論において、国家間の権力バランスによって平和が保たれるという考え方を何と呼ぶでしょう？", options: ["集団安全保障", "パワーバランス", "国際協調", "理想主義"], answer: "パワーバランス" },
        { question: "情報科学において、アルゴリズムの計算量を示す指標の一つで、入力サイズの増大に伴う処理時間の増加率を表す記法を何と呼ぶでしょう？", options: ["O(n)", "Ω(n)", "Θ(n)", "Big O記法"], answer: "Big O記法" },
        { question: "美術史において、19世紀後半にフランスで起こった、光の印象を重視した絵画運動を何と呼ぶでしょう？", options: ["ロマン主義", "印象派", "キュビスム", "シュルレアリスム"], answer: "印象派" },
        { question: "心理学において、記憶、思考、知覚、学習などの精神活動を研究する分野を何と呼ぶでしょう？", options: ["行動主義", "精神分析", "認知心理学", "人本主義心理学"], answer: "認知心理学" }
    ],
    "大学院生": [
        { question: "科学的調査において、実験者も被験者もどちらのグループに割り当てられたかを知らないようにする手法を何と呼ぶでしょう？", options: ["横断研究", "縦断研究", "二重盲検法", "ケースコントロール研究"], answer: "二重盲検法" },
        { question: "ゲーム理論において、各プレイヤーが他のプレイヤーの戦略を所与とした上で、自身の利得を最大化する戦略を選び、その戦略の組から誰も戦略を変更する誘因を持たない状態を何と呼ぶでしょう？", options: ["囚人のジレンマ", "パレート最適", "ナッシュ均衡", "ベルトラン競争"], answer: "ナッシュ均衡" },
        { question: "現象学の創始者として知られ、「事象そのものへ」というスローガンを掲げた哲学者は誰でしょう？", options: ["ハイデガー", "サルトル", "フッサール", "メルロ＝ポンティ"], answer: "フッサール" },
        { question: "1929年の世界恐慌に対し、アメリカのルーズベルト大統領が実施した一連の経済政策を何と総称するでしょう？", options: ["マーシャル・プラン", "ニューディール政策", "大きな政府", "レーガノミクス"], answer: "ニューディール政策" },
        { question: "コンピュータ科学において、計算可能性の理論の基礎を築き、ある機械が「知的」であるかを判断するためのテストを考案した人物は誰でしょう？", options: ["ジョン・フォン・ノイマン", "アラン・チューリング", "クロード・シャノン", "グレース・ホッパー"], answer: "アラン・チューリング" },
        { question: "ミシェル・フーコーが提唱した、特定の時代の知の枠組みや認識の構造を指す概念は何でしょう？", options: ["イデア", "エピステーメー", "ア・プリオリ", "脱構築"], answer: "エピステーメー" },
        { question: "現代宇宙論において、宇宙が膨張していることを発見し、その膨張率に関する法則を提唱した天文学者は誰でしょう？", options: ["アイザック・ニュートン", "アルベルト・アインシュタイン", "エドウィン・ハッブル", "スティーヴン・ホーキング"], answer: "エドウィン・ハッブル" },
        { question: "統計的仮説検定において、本来は真である帰無仮説を誤って棄却してしまう過ちを何と呼ぶでしょう？", options: ["第一種の過誤 (αエラー)", "第二種の過誤 (βエラー)", "標準誤差", "信頼区間"], answer: "第一種の過誤 (αエラー)" },
        { question: "ポスト構造主義の代表的な思想家で、『エクリチュールと差異』や『グラマトロジーについて』などの著作で知られるのは誰でしょう？", options: ["ジル・ドゥルーズ", "ジャック・デリダ", "ジャック・ラカン", "フェリックス・ガタリ"], answer: "ジャック・デリダ" },
        { question: "分子生物学において、DNAの塩基配列からRNAを合成するプロセスを何と呼ぶでしょう？", options: ["複製", "翻訳", "転写", "修復"], answer: "転写" }
    ],
    "博士": [
        { question: "1931年にクルト・ゲーデルが証明した、いかなる無矛盾な公理体系も、その体系内で証明も反証もできない命題が存在することを示す定理は何でしょう？", options: ["不完全性定理", "不確定性原理", "不動点定理", "フェルマーの最終定理"], answer: "不完全性定理" },
        { question: "プログラミング言語LISPの設計思想に大きな影響を与え、評価のタイミングを制御する「遅延評価」の概念を導入した計算モデルは何でしょう？", options: ["チューリングマシン", "ラムダ計算", "ノイマン型アーキテクチャ", "オートマトン"], answer: "ラムダ計算" },
        { question: "美術家マルセル・デュシャンが、既製品の便器にサインをした作品『泉』。この作品が象徴する、芸術の概念そのものを問い直す態度は何でしょう？", options: ["コンセプチュアル・アート", "ポップ・アート", "ミニマリズム", "シュルレアリスム"], answer: "コンセプチュアル・アート" },
        { question: "社会学において、人々が儀礼的な相互行為を通じて「状況の定義」を共有し、維持していくプロセスを分析したアーヴィング・ゴッフマンの理論的枠組みは何でしょう？", options: ["ドラマツルギー", "構造主義", "交換理論", "エスノメソドロジー"], answer: "ドラマツルギー" },
        { question: "神経科学において、他者の行動を観察するだけで、自身がその行動を行う際と同じように活動する神経細胞を何と呼ぶでしょう？", options: ["錐体細胞", "桿体細胞", "グリア細胞", "ミラーニューロン"], answer: "ミラーニューロン" },
        { question: "トーマス・クーンが『科学革命の構造』で提唱した、ある時代の科学者たちが共有する、ものの見方や問い方の枠組みを指す言葉は何でしょう？", options: ["パラダイム", "アノマリー", "エピステーメー", "テーゼ"], answer: "パラダイム" },
        { question: "現代思想において、ジャン=フランソワ・リオタールが「大きな物語の終焉」と表現して特徴づけた時代状況を指す言葉は何でしょう？", options: ["近代", "ポストモダン", "実存主義", "全体主義"], answer: "ポストモダン" },
        { question: "経済思想史において、アダム・スミスの『国富論』で述べられた、個人の利己的な追求が結果的に社会全体の利益をもたらすというメカニズムを指す有名な比喩は何でしょう？", options: ["見えざる手", "マクロ経済", "比較優位", "合成の誤謬"], answer: "見えざる手" },
        { question: "言語学者ノーム・チョムスキーが提唱した、人間が生得的に持っている、言語を習得するための普遍的な文法知識のシステムを何と呼ぶでしょう？", options: ["変形生成文法", "普遍文法", "認知文法", "格文法"], answer: "普遍文法" },
        { question: "数学の集合論において、無限集合の濃度（大きさ）を比較するためにゲオルク・カントールが導入した数の概念は何でしょう？", options: ["自然数", "実数", "超限基数", "複素数"], answer: "超限基数" }
    ]
};

// ゲームの状態
let currentLevelIndex = 0;
const levels = ["小学生", "中学生", "高校生", "大学生", "大学院生", "博士"];
const passScore = 8; // 合格点
let levelScores = {}; // 各レベルのスコアを保存

// HTML要素を取得
const progressContainer = document.getElementById('progress-container');
const levelTitleElement = document.getElementById('level-title');
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-button');
const resultMessageElement = document.getElementById('result-message');

// クイズを表示する関数
function renderQuiz() {
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    submitButton.style.display = 'block';
    submitButton.disabled = false;
    quizContainer.innerHTML = '';
    resultMessageElement.textContent = '';

    const currentLevelName = levels[currentLevelIndex];
    levelTitleElement.textContent = currentLevelName + "レベル";
    levelTitleElement.style.borderBottom = '3px solid var(--accent-yellow)';


    const currentQuiz = quizData[currentLevelName];
    currentQuiz.forEach((q, qIndex) => {
        const questionItem = document.createElement('div');
        questionItem.classList.add('question-item');
        const questionText = document.createElement('p');
        questionText.textContent = `Q${qIndex + 1}. ${q.question}`;
        questionItem.appendChild(questionText);
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options-list');
        q.options.forEach((option, oIndex) => {
            const listItem = document.createElement('li');
            const label = document.createElement('label');
            const input = document.createElement('input');
            const customRadio = document.createElement('span');
            const optionText = document.createElement('span');
            const inputId = `q${qIndex}o${oIndex}`;
            input.type = 'radio';
            input.id = inputId;
            input.name = `question-${qIndex}`;
            input.value = option;
            optionText.textContent = option;
            label.htmlFor = inputId;
            label.appendChild(input);
            label.appendChild(customRadio);
            label.appendChild(optionText);
            listItem.appendChild(label);
            optionsList.appendChild(listItem);
        });
        questionItem.appendChild(optionsList);
        quizContainer.appendChild(questionItem);
    });
}

// 回答をチェックする関数
function checkAnswers() {
    submitButton.disabled = true;
    let score = 0;
    const currentLevelName = levels[currentLevelIndex];
    const currentQuiz = quizData[currentLevelName];

    currentQuiz.forEach((q, qIndex) => {
        const selectedOptionInput = document.querySelector(`input[name="question-${qIndex}"]:checked`);
        const allOptionInputs = document.querySelectorAll(`input[name="question-${qIndex}"]`);
        allOptionInputs.forEach(input => {
            if (input.value === q.answer) {
                input.parentElement.classList.add('correct-answer');
            }
        });
        if (selectedOptionInput) {
            if (selectedOptionInput.value === q.answer) {
                score++;
            } else {
                selectedOptionInput.parentElement.classList.add('wrong-answer');
            }
        }
    });

    levelScores[currentLevelName] = score;

    animateScore(score, currentQuiz.length, () => {
        const message = document.createElement('p');
        message.style.marginTop = '1rem';
        
        if (score >= passScore) {
            resultMessageElement.style.color = '#28a745';
            if (currentLevelIndex < levels.length - 1) {
                message.textContent = '合格！';
                const nextButton = document.createElement('button');
                nextButton.id = 'next-level-button';
                nextButton.textContent = '次のレベルへ';
                nextButton.style.marginLeft = '1rem';
                nextButton.onclick = () => {
                    currentLevelIndex++;
                    renderQuiz();
                };
                message.appendChild(nextButton);
            } else {
                message.textContent = '全レベルクリアおめでとうございます！';
                resultMessageElement.appendChild(message);
                setTimeout(showFinalResults, 1500);
            }
        } else {
            resultMessageElement.style.color = '#dc3545';
            message.textContent = '残念！合格点には届きませんでした。';
        }
        resultMessageElement.appendChild(message);
    });
}

// スコアをアニメーション表示する関数
function animateScore(finalScore, total, callback) {
    let currentAnimatedScore = 0;
    resultMessageElement.innerHTML = `あなたの正解数: <span class="score">0</span> / ${total}問`;
    const scoreSpan = resultMessageElement.querySelector('.score');

    if (finalScore === 0) {
        if (callback) setTimeout(callback, 50);
        return;
    }

    const duration = 500;
    const stepTime = Math.max(10, duration / finalScore);
    const timer = setInterval(() => {
        currentAnimatedScore++;
        scoreSpan.textContent = currentAnimatedScore;
        if (currentAnimatedScore >= finalScore) {
            clearInterval(timer);
            if (callback) setTimeout(callback, 50);
        }
    }, stepTime);
}

// 進捗バーを更新する関数
function updateProgress() {
    progressContainer.innerHTML = '';
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressContainer.appendChild(progressBar);

    levels.forEach((level, index) => {
        const step = document.createElement('div');
        step.classList.add('progress-step');
        if (index < currentLevelIndex) {
            step.classList.add('completed');
        } else if (index === currentLevelIndex) {
            step.classList.add('active');
        }
        const circle = document.createElement('div');
        circle.classList.add('step-circle');
        step.appendChild(circle);
        const label = document.createElement('div');
        label.textContent = level;
        step.appendChild(label);
        progressContainer.appendChild(step);
    });

    const progressPercentage = levels.length > 1 ? (currentLevelIndex / (levels.length - 1)) * 100 : 0;
    progressBar.style.width = `${progressPercentage}%`;
}

// 最終結果を表示する関数
function showFinalResults() {
    progressContainer.style.display = 'none';
    quizContainer.innerHTML = '';
    resultMessageElement.innerHTML = '';
    submitButton.style.display = 'none';
    
    levelTitleElement.textContent = '最終結果';
    levelTitleElement.style.borderBottom = 'none';

    const table = document.createElement('table');
    table.classList.add('results-table');
    
    let tableHTML = `
        <thead>
            <tr>
                <th>レベル</th>
                <th>スコア</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    let totalScore = 0;
    for (const level of levels) {
        const score = levelScores[level] !== undefined ? levelScores[level] : 0;
        totalScore += score;
        tableHTML += `
            <tr>
                <td>${level}</td>
                <td class="score-value">${score} / 10</td>
            </tr>
        `;
    }

    tableHTML += `
        </tbody>
        <tfoot>
            <tr>
                <th>合計スコア</th>
                <td class="score-value">${totalScore} / ${levels.length * 10}</td>
            </tr>
        </tfoot>
    `;
    
    table.innerHTML = tableHTML;
    quizContainer.appendChild(table);

    const retryButton = document.createElement('button');
    retryButton.textContent = 'もう一度挑戦する';
    retryButton.style.marginTop = '2rem';
    retryButton.onclick = () => {
        window.location.reload();
    };
    quizContainer.appendChild(retryButton);
}


// イベントリスナー
submitButton.addEventListener('click', checkAnswers);

// 最初のクイズを表示
renderQuiz();
