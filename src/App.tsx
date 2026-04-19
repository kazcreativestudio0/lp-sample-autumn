/** フルブリード背景（Unsplash · 表示時のみネットワーク利用） */
const IMG_HOME =
  'https://images.unsplash.com/photo-1533134242443-c4fac4d384f7?auto=format&fit=crop&w=1920&q=80';
const IMG_PARK =
  'https://images.unsplash.com/photo-1528696897294-496848998806?auto=format&fit=crop&w=1920&q=80';

/** セクション用ストック写真（layout='lazy' で読み込み） */
const IMG_PHOTO_GRID = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=960&q=82',
    alt: '湯気の立つエスプレッソカップ',
    caption: '一杯の温度',
  },
  {
    src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=960&q=82',
    alt: '焙煎豆のクローズアップ',
    caption: '焙煎後の香ばしさ',
  },
  {
    src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=960&q=82',
    alt: 'ポットからカップへ注がれるコーヒー',
    caption: '抽出のリズム',
  },
] as const;

const IMG_EXPERT =
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=480&h=480&q=82';

const IMG_ORIGIN_BAND =
  'https://images.unsplash.com/photo-1447933601403-0c6688ce94d7?auto=format&fit=crop&w=1800&q=82';

const IMG_ROAST_WIDE =
  'https://images.unsplash.com/photo-1514432327600-9014cba3b693?auto=format&fit=crop&w=1400&q=82';

export default function App() {
  return (
    <div className="lp">
      <a href="#main" className="lp-skip">
        本文へスキップ
      </a>

      <header className="lp-topbar">
        <div className="lp-inner lp-topbar__row">
          <a className="lp-mark" href="#top">
            <span className="lp-mark__line1">SAMPLE</span>
            <span className="lp-mark__line2">coffee</span>
          </a>
          <nav className="lp-topnav" aria-label="ページ内">
            <a href="#top">秋の2シーン</a>
            <a href="#types">2種の一杯</a>
            <a href="#sourcing">豆のルーツ</a>
            <a href="#roast">焙煎</a>
            <a href="#tips">用語</a>
          </nav>
        </div>
      </header>

      <nav className="lp-scene-dock" aria-label="シーンへジャンプ">
        <a className="lp-scene-dock__btn" href="#top" aria-label="家でのアップルパイのシーンへ">
          ↑
        </a>
        <a className="lp-scene-dock__btn" href="#scene-park" aria-label="公園シーンへ">
          ↓
        </a>
      </nav>

      <main id="main">
        <section
          className="lp-scene lp-scene--home"
          id="top"
          aria-labelledby="lp-scene-home-title"
          style={{ backgroundImage: `url(${IMG_HOME})` }}
        >
          <div className="lp-scene__overlay" aria-hidden="true" />
          <div className="lp-scene__leaves" aria-hidden="true" />
          <div className="lp-scene__social" aria-label="シェア（デモ・リンクなし）">
            <a href="#top" className="lp-scene__icon" aria-label="X（デモ）">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#top" className="lp-scene__icon" aria-label="Facebook（デモ）">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          <div className="lp-inner lp-scene__grid lp-scene__grid--home">
            <div className="lp-scene__titles" id="lp-scene-home-title">
              <p className="lp-scene__script lp-scene__script--lg">
                Autumn&apos;s
                <br />
                Tasty Moments
              </p>
              <p className="lp-scene__script lp-scene__script--aside">at Home</p>
            </div>
            <div className="lp-scene__column">
              <p className="lp-scene__tag">秋のスイーツをもっとおいしくするコーヒー</p>
              <p className="lp-scene__text">
                夕方の光が短くなる頃、キッチンからはバターとシナモンの香り。炭酸のきいたコーヒーが、さくっと焼けたアップルパイの甘みをすっと拾います。平日の自分へのごほうびに、カップひとつで秋をすくいあげる時間。
              </p>
              <p className="lp-scene__more">
                <span className="lp-scene__chev">&gt;</span> 焼きたてアップルパイ
              </p>
            </div>
          </div>
        </section>

        <section
          className="lp-scene lp-scene--park"
          id="scene-park"
          aria-labelledby="lp-scene-park-title"
          style={{ backgroundImage: `url(${IMG_PARK})` }}
        >
          <div className="lp-scene__overlay lp-scene__overlay--park" aria-hidden="true" />
          <div className="lp-scene__leaves lp-scene__leaves--flip" aria-hidden="true" />

          <div className="lp-inner lp-scene__grid lp-scene__grid--park">
            <div className="lp-scene__column lp-scene__column--park">
              <p className="lp-scene__script lp-scene__script--park" id="lp-scene-park-title">
                to the Park
              </p>
              <p className="lp-scene__text">
                澄んだ空気の休日、ブランケットを広げてパークへ。テイクアウトのコーヒーと、かぼちゃとエスプレッソをきかせたケーキを並べれば、ピクニックがひとあし早く秋の味に片寄ります。
              </p>
              <p className="lp-scene__more">
                <span className="lp-scene__chev">&gt;</span> エスプレッショパンプキンケーキ
              </p>
            </div>
          </div>
        </section>

        <section className="lp-bridge" aria-label="ストーリーへの導線">
          <div className="lp-inner lp-bridge__inner">
            <p className="lp-bridge__text">
              シーズンのあとには、定番の一杯へ。スペシャルティの2ラインと、豆が辿ってきた道をご紹介します。
            </p>
            <a className="lp-btn lp-btn--solid" href="#types">
              2種の一杯を見る
            </a>
          </div>
        </section>

        <section className="lp-section" id="types" aria-labelledby="lp-h2-types">
          <div className="lp-inner">
            <header className="lp-sechead">
              <h2 className="lp-h2" id="lp-h2-types">
                選べる2種類の
                <wbr />
                スペシャルティコーヒー
              </h2>
              <p className="lp-prose">
                大きく分けて2系統。どちらも、自社基準の生豆を、自社のローストで。同じ席で、違う顔の「いい一杯」に出会えるようにしました。
              </p>
            </header>

            <p className="lp-prompt">個性派？　ベーシック派？</p>

            <div className="lp-photo-grid" aria-label="コーヒーの写真ギャラリー">
              {IMG_PHOTO_GRID.map(({ src, alt, caption }) => (
                <figure key={src} className="lp-photo-grid__card">
                  <div className="lp-photo-grid__frame">
                    <img src={src} alt={alt} loading="lazy" decoding="async" sizes="(max-width: 820px) 100vw, 33vw" />
                  </div>
                  <figcaption className="lp-photo-grid__cap">{caption}</figcaption>
                </figure>
              ))}
            </div>

            <div className="lp-twocol">
              <article className="lp-panel lp-panel--accent">
                <p className="lp-panel__tag">個性派</p>
                <h3 className="lp-panel__h">シングルオリジン</h3>
                <p className="lp-panel__lead">季節で変わる、産地の表情。</p>
                <p className="lp-prose lp-prose--tight">
                  ひとつの産地だけを使った一杯。時期ごとに銘柄が入れ替わる「旬」のコーヒーとして楽しめます。生豆の個性が立つよう、焙煎は浅め〜中浅めで香りを逃さない設計が多いです。
                </p>
                <ul className="lp-mini-list" aria-label="ラインナップ例">
                  <li>
                    <span className="lp-faux-link">ホット（シングル）</span>
                  </li>
                  <li>
                    <span className="lp-faux-link">アイス（シングル）</span>
                  </li>
                </ul>
              </article>

              <article className="lp-panel">
                <p className="lp-panel__tag lp-panel__tag--muted">ベーシック派</p>
                <h3 className="lp-panel__h">ブレンド</h3>
                <p className="lp-panel__lead">いつでも同じ安心のバランス。</p>
                <p className="lp-prose lp-prose--tight">
                  年やロットでブレンド比率を微調整し、味の芯はブレない一杯に。香ばしさと甘みのバランスを得意とし、食事のシメにも相性がいい焙煎設計です。
                </p>
                <ul className="lp-mini-list" aria-label="ラインナップ例">
                  <li>
                    <span className="lp-faux-link">ホット（ブレンド）</span>
                  </li>
                  <li>
                    <span className="lp-faux-link">アイス（ブレンド）</span>
                  </li>
                </ul>
              </article>
            </div>

            <div className="lp-expert">
              <div className="lp-expert__photo">
                <img
                  src={IMG_EXPERT}
                  alt="カウンターでセラミックドリッパーを扱う様子（ストック写真）"
                  loading="lazy"
                  decoding="async"
                  width={132}
                  height={132}
                />
              </div>
              <div className="lp-expert__body">
                <h3 className="lp-expert__q">シングルとブレンド、どっちがオススメ？</h3>
                <p className="lp-prose">
                  そこはお好みで、が前提です。サンプル焙煎の個人的には、
                  <strong>「食前はシングル」「食後はブレンド」</strong>
                  を試してみてください。澄んだ酸味は最初のひと口を軽やかに、焙煎がしっかりめのブレンドは口の中をさっぱり仕上げやすいです。
                </p>
                <p className="lp-caption">架空の焙煎担当コメント · LPデモ</p>
              </div>
            </div>
          </div>
        </section>

        <aside className="lp-campaign" aria-label="キャンペーン告知（デモ）">
          <div className="lp-inner lp-campaign__inner">
            <p className="lp-campaign__title">ほっと一息　珈琲キャンペーン（架空）</p>
            <p className="lp-campaign__meta">
              期間イメージ：6月1日（月）〜6月30日（火）／応募はサンプルのため無効です
            </p>
          </div>
        </aside>

        <section className="lp-section lp-section--dark" id="sourcing">
          <div className="lp-inner">
            <header className="lp-sechead lp-sechead--on-dark">
              <h2 className="lp-h2 lp-h2--light">コーヒー豆は、まずルーツから。</h2>
              <p className="lp-prose lp-prose--on-dark">
                一般的には商社などを経由して届く生豆。ここではデモとして、産地との距離を短くする前提のストーリーを置いています（実在の取引・店舗ではありません）。
              </p>
            </header>

            <div
              className="lp-photo-band"
              role="img"
              aria-label="コーヒーチェリーが枝に実る様子のストック写真"
              style={{ backgroundImage: `url(${IMG_ORIGIN_BAND})` }}
            />

            <article className="lp-article-block">
              <h3 className="lp-h3">商社を通さず、直接取引を想定した設計</h3>
              <p className="lp-prose lp-prose--on-dark">
                温暖な高地で育つコーヒーチェリー。赤道付近に産地が集中するなか、品質はロットごとに揺れます。デモの「サンプル珈琲堂」では、選定〜焙煎までの前提をひとつの線で語れるようにするため、産地との対話とサンプルの評価を繰り返す──という見せ方を採用しました。
              </p>
              <p className="lp-prose lp-prose--on-dark">
                取引が育ってきた産地もあれば、新しい畑との出会いもある、という語り口は、長く読ませるLPに向きます。
              </p>
            </article>

            <article className="lp-article-block">
              <h3 className="lp-h3">地球の裏側へも、自分たちの足で（ストーリー例）</h3>
              <p className="lp-prose lp-prose--on-dark">
                サンプルをカッピングし、焙煎の方向性を決める。開拓では現地を訪ね、栽培の様子や処理を確認する──といった長文ブロックは、スクロールに沿って「読み物」として成立させられます。
              </p>

              <details className="lp-details lp-details--dark">
                <summary>カッピングって何をするの？</summary>
                <p>
                  液体をすすって香り・酸味・ボディなどを評価する工程です。デモでは月次のレビューや、出荷前ロットの確認など、現場の安心材料として説明することが多いです。
                </p>
              </details>
            </article>

            <article className="lp-callout lp-callout--glass">
              <p className="lp-callout__lead">提供するのはスペシャルティだけ、という一文の置き方</p>
              <p className="lp-prose lp-prose--on-dark lp-prose--tight">
                From seed to cup の思想を短くまとめるブロックです。栽培から抽出までの品質管理が前提で、世界中でも割合は限られる──という説明は、ブランドの芯を伝えやすいです。
              </p>
              <details className="lp-details lp-details--dark lp-details--inline">
                <summary>スペシャルティコーヒーって？</summary>
                <p>
                  定義や格付けは団体や基準によります。LPでは「選び抜いた豆」「透明なルーツ」「焙煎と抽出の設計」の3点セットで読者に伝えるのが無難です。
                </p>
              </details>
            </article>
          </div>
        </section>

        <section className="lp-section" id="roast">
          <div className="lp-inner">
            <header className="lp-sechead">
              <h2 className="lp-h2">焙煎は、自分たちで。</h2>
              <p className="lp-prose">
                仕入れた生豆はまだ「生豆」。熱を通して初めて、カップに乗る味が立ち上がります。デモでは「自社工場へ入り、ローストを設計する」という縦長のレイアウトで、工程の温度感を出します。
              </p>
            </header>

            <div className="lp-roast-visual">
              <div className="lp-roast-visual__pic">
                <img
                  src={IMG_ROAST_WIDE}
                  alt="ロースターと豆のクローズアップ（ストック写真）"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 820px) 100vw, 46vw"
                />
              </div>
              <p className="lp-roast-visual__tag">自社焙煎 · デモ構成</p>
            </div>

            <div className="lp-split-note">
              <div>
                <h3 className="lp-h3">だって、自分たちで選んだ豆だから。</h3>
                <p className="lp-prose">
                  個性が強い豆は浅煎りで香りを、食事と並べるなら焙煎を深めてボディを。メニューが肉料理中心でも、コクで押し切らずにキレを残す──など、店の文脈に合わせた一文が刺さります。
                </p>
              </div>
              <aside className="lp-aside-tip">
                <p className="lp-aside-tip__q">肉料理にはコーヒーが合う？</p>
                <p className="lp-prose lp-prose--tight">
                  濃い味の皿のあとに、焙煎の香ばしさで締める。スイーツ前提のコーヒー像とは違う「食事のコーヒー」を提案する段落に使えます。
                </p>
              </aside>
            </div>

            <div className="lp-fresh">
              <div className="lp-fresh__col">
                <h3 className="lp-h3">焙煎後の鮮度も、工程のひとつ</h3>
                <p className="lp-prose">
                  注文に合わせて焙煎し、店舗へ。作り置きではなく、注文から抽出へ、というストーリーはフレッシュ感の訴求に効きます（デモのため実装はありません）。
                </p>
              </div>
              <div className="lp-fresh__col lp-fresh__col--emph">
                <p className="lp-fresh__big">
                  焙煎から
                  <br />
                  店舗まで短く。
                </p>
                <p className="lp-prose lp-prose--tight">
                  ロットと配送の設計は実案件で詰めますが、LPでは「香りのピークが続く理由」を短く宣言するのがポイントです。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="lp-section lp-section--muted" id="tips">
          <div className="lp-inner lp-narrow">
            <header className="lp-sechead">
              <h2 className="lp-h2">よくある質問（サンプル）</h2>
            </header>
            <details className="lp-details">
              <summary>デカフェはありますか？</summary>
              <p>実案件ではメニューとリンク。ここではプレースホルダーです。</p>
            </details>
            <details className="lp-details">
              <summary>豆の販売は？</summary>
              <p>テイクアウトやECの導線は、コンバージョン設計と合わせて別LPに逃がすと管理しやすいです。</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="lp-inner">
          <p className="lp-footer__brand">SAMPLE coffee · LP構成デモ</p>
          <p className="lp-footer__note">
            冒頭は「秋のコーヒー×スイーツ」のフルブリード2シーン構成のデモです。写真は{' '}
            <a href="https://unsplash.com" rel="noopener noreferrer">
              Unsplash
            </a>
            のストック、ロゴ・実在キャンペーンとの関係はありません。下層はスペシャルティ紹介の長文LPサンプルです。
          </p>
        </div>
      </footer>
    </div>
  );
}
