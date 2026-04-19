/** フルブリード背景（Unsplash · 表示時のみネットワーク利用） */
const IMG_HOME =
  'https://images.unsplash.com/photo-1533134242443-c4fac4d384f7?auto=format&fit=crop&w=1920&q=80';
const IMG_PARK =
  'https://images.unsplash.com/photo-1528696897294-496848998806?auto=format&fit=crop&w=1920&q=80';

/** セクション用ストック写真（layout='lazy' で読み込み） */
const IMG_PHOTO_GRID = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=960&q=82',
    alt: 'エスプレッソカップ',
    caption: '一杯',
  },
  {
    src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=960&q=82',
    alt: '焙煎豆',
    caption: '焙煎',
  },
  {
    src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=960&q=82',
    alt: 'ドリップ',
    caption: '抽出',
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
            <a href="#top">シーン</a>
            <a href="#types">2種</a>
            <a href="#sourcing">ルーツ</a>
            <a href="#roast">焙煎</a>
            <a href="#tips">FAQ</a>
          </nav>
        </div>
      </header>

      <nav className="lp-scene-dock" aria-label="シーンへジャンプ">
        <a className="lp-scene-dock__btn" href="#top" aria-label="上のシーンへ">
          ↑
        </a>
        <a className="lp-scene-dock__btn" href="#scene-park" aria-label="下のシーンへ">
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
          <div className="lp-scene__wash lp-scene__wash--home" aria-hidden="true" />
          <div className="lp-scene__leaves" aria-hidden="true" />
          <div className="lp-scene__social" aria-label="シェア（デモ）">
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
              <p className="lp-scene__tag">秋のスイーツ × コーヒー</p>
              <p className="lp-scene__text">
                アップルパイと、きいたコーヒー。晩ごはん前の一杯に。
              </p>
              <p className="lp-scene__more">
                <span className="lp-scene__chev">&gt;</span> アップルパイ
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
          <div className="lp-scene__wash lp-scene__wash--park" aria-hidden="true" />
          <div className="lp-scene__leaves lp-scene__leaves--flip" aria-hidden="true" />

          <div className="lp-inner lp-scene__grid lp-scene__grid--park">
            <div className="lp-scene__column lp-scene__column--park">
              <p className="lp-scene__script lp-scene__script--park" id="lp-scene-park-title">
                to the Park
              </p>
              <p className="lp-scene__text">
                ピクニックにコーヒーとパンプキンケーキ。
              </p>
              <p className="lp-scene__more">
                <span className="lp-scene__chev">&gt;</span> パンプキンケーキ
              </p>
            </div>
          </div>
        </section>

        <section className="lp-bridge" aria-label="導線">
          <div className="lp-inner lp-bridge__inner">
            <p className="lp-bridge__text">定番の2ラインと、豆の話。</p>
            <a className="lp-btn lp-btn--solid" href="#types">
              見る
            </a>
          </div>
        </section>

        <section className="lp-section" id="types" aria-labelledby="lp-h2-types">
          <div className="lp-inner">
            <header className="lp-sechead">
              <h2 className="lp-h2" id="lp-h2-types">
                スペシャルティ
                <wbr />
                2種
              </h2>
              <p className="lp-prose">シングルとブレンド。同じ席で、違う一杯。</p>
            </header>

            <p className="lp-prompt">どっち派？</p>

            <div className="lp-photo-grid" aria-label="写真">
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
                <h3 className="lp-panel__h">シングル</h3>
                <p className="lp-panel__lead">産地はそのとき々。</p>
                <p className="lp-prose lp-prose--tight">ひと産地だけ。旬が変われば銘柄も変わる。</p>
                <ul className="lp-mini-list" aria-label="例">
                  <li>
                    <span className="lp-faux-link">ホット</span>
                  </li>
                  <li>
                    <span className="lp-faux-link">アイス</span>
                  </li>
                </ul>
              </article>

              <article className="lp-panel">
                <p className="lp-panel__tag lp-panel__tag--muted">ベーシック</p>
                <h3 className="lp-panel__h">ブレンド</h3>
                <p className="lp-panel__lead">いつもの味。</p>
                <p className="lp-prose lp-prose--tight">比率は微調整、軸はブレない。</p>
                <ul className="lp-mini-list" aria-label="例">
                  <li>
                    <span className="lp-faux-link">ホット</span>
                  </li>
                  <li>
                    <span className="lp-faux-link">アイス</span>
                  </li>
                </ul>
              </article>
            </div>

            <div className="lp-expert">
              <div className="lp-expert__photo">
                <img
                  src={IMG_EXPERT}
                  alt="ドリップ（ストック）"
                  loading="lazy"
                  decoding="async"
                  width={132}
                  height={132}
                />
              </div>
              <div className="lp-expert__body">
                <h3 className="lp-expert__q">どっち？</h3>
                <p className="lp-prose">
                  好み次第。<strong>食前はシングル、食後はブレンド</strong>が試しやすい。
                </p>
                <p className="lp-caption">デモ</p>
              </div>
            </div>
          </div>
        </section>

        <aside className="lp-campaign" aria-label="キャンペーン（架空）">
          <div className="lp-inner lp-campaign__inner">
            <p className="lp-campaign__title">珈琲キャンペーン（架空）</p>
            <p className="lp-campaign__meta">応募なし · デモ</p>
          </div>
        </aside>

        <section className="lp-section lp-section--dark" id="sourcing">
          <div className="lp-inner">
            <header className="lp-sechead lp-sechead--on-dark">
              <h2 className="lp-h2 lp-h2--light">豆のルーツ</h2>
              <p className="lp-prose lp-prose--on-dark">産地と近い前提のストーリー（架空）。</p>
            </header>

            <div
              className="lp-photo-band"
              role="img"
              aria-label="チェリー（ストック）"
              style={{ backgroundImage: `url(${IMG_ORIGIN_BAND})` }}
            />

            <article className="lp-article-block">
              <h3 className="lp-h3">直接取引のイメージ</h3>
              <p className="lp-prose lp-prose--on-dark">
                ロットごとに味は違う。産地とサンプルで選ぶ。
              </p>
            </article>

            <article className="lp-article-block">
              <h3 className="lp-h3">現地・カッピング</h3>
              <p className="lp-prose lp-prose--on-dark">焙煎の方向を決めてから煎る。</p>

              <details className="lp-details lp-details--dark">
                <summary>カッピング？</summary>
                <p>すすって香りと味を見る工程。</p>
              </details>
            </article>

            <article className="lp-callout lp-callout--glass">
              <p className="lp-callout__lead">スペシャルティ</p>
              <p className="lp-prose lp-prose--on-dark lp-prose--tight">選豆・ルーツ・焙煎をセットで。</p>
              <details className="lp-details lp-details--dark lp-details--inline">
                <summary>とは</summary>
                <p>団体により定義は異なる。LPでは「選び抜き」の一言で十分なことが多い。</p>
              </details>
            </article>
          </div>
        </section>

        <section className="lp-section" id="roast">
          <div className="lp-inner">
            <header className="lp-sechead">
              <h2 className="lp-h2">自社焙煎</h2>
              <p className="lp-prose">熱で味を立ち上げる。工場でロースト設計（デモ）。</p>
            </header>

            <div className="lp-roast-visual">
              <div className="lp-roast-visual__pic">
                <img
                  src={IMG_ROAST_WIDE}
                  alt="焙煎（ストック）"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 820px) 100vw, 46vw"
                />
              </div>
              <p className="lp-roast-visual__tag">自社焙煎 · デモ</p>
            </div>

            <div className="lp-split-note">
              <div>
                <h3 className="lp-h3">自分たちで選んだ豆</h3>
                <p className="lp-prose">浅めは香り、深めはボディ。メニューに合わせて。</p>
              </div>
              <aside className="lp-aside-tip">
                <p className="lp-aside-tip__q">食事と？</p>
                <p className="lp-prose lp-prose--tight">濃い皿のあとに香ばしさで締める、もアリ。</p>
              </aside>
            </div>

            <div className="lp-fresh">
              <div className="lp-fresh__col">
                <h3 className="lp-h3">鮮度</h3>
                <p className="lp-prose">焙煎してから店へ。作り置き前提の文案用（実装なし）。</p>
              </div>
              <div className="lp-fresh__col lp-fresh__col--emph">
                <p className="lp-fresh__big">
                  煎れてから
                  <br />
                  早く。
                </p>
                <p className="lp-prose lp-prose--tight">香りのピークを短く届ける、と一言で。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="lp-section lp-section--muted" id="tips">
          <div className="lp-inner lp-narrow">
            <header className="lp-sechead">
              <h2 className="lp-h2">FAQ</h2>
            </header>
            <details className="lp-details">
              <summary>デカフェは？</summary>
              <p>本番はメニューへ。ここはデモ。</p>
            </details>
            <details className="lp-details">
              <summary>豆の販売は？</summary>
              <p>別ページにまとめると運用が楽。</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="lp-inner">
          <p className="lp-footer__brand">SAMPLE coffee · デモ</p>
          <p className="lp-footer__note">
            写真は{' '}
            <a href="https://unsplash.com" rel="noopener noreferrer">
              Unsplash
            </a>
            。架空のキャンペーンです。
          </p>
        </div>
      </footer>
    </div>
  );
}
