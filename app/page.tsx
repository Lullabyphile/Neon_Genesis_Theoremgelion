import Image from "next/image";

const researchAreas = [
  {
    label: "代数组合",
    notation: "q, KL, crystal",
    copy: "从表示论、对称函数和组合模型里找结构，也喜欢把漂亮的双射讲成剧情反转。",
  },
  {
    label: "分析与偏微分方程",
    notation: "u_t + Lu = N(u)",
    copy: "关心正则性、传播、能量估计和极限过程，黑板上常年有波、核和不等式。",
  },
  {
    label: "弦论",
    notation: "Σ → X",
    copy: "在世界面、模空间和量子场论直觉之间来回穿梭，把物理图像翻译成数学问题。",
  },
  {
    label: "拓扑量子场论",
    notation: "Z(M)",
    copy: "把低维流形、范畴和场论公理放在同一张图里，看不变量怎样从几何里长出来。",
  },
  {
    label: "辛几何",
    notation: "(M, ω)",
    copy: "研究哈密顿动力学、Lagrangian、Floer 型思想和几何中的刚性与柔性。",
  },
  {
    label: "量子代数",
    notation: "U_q(g)",
    copy: "在 Hopf 代数、张量范畴和 braid 结构里追踪量子参数带来的新对称性。",
  },
  {
    label: "低维/量子拓扑",
    notation: "K ⊂ S³",
    copy: "研究结、三维流形、skein 理论和量子不变量，把图形操作变成可计算语言。",
  },
];

const watchList = [
  "轻音少女",
  "Girls Band Cry",
  "魔法少女小圆",
  "佐贺偶像是传奇",
  "新世纪福音战士",
  "红辣椒",
  "摇曳百合",
  "攻壳机动队",
  "凉宫春日的忧郁",
  "Panty & Stocking with Garterbelt",
  "この素晴らしい世界に祝福を！",
  "深海",
  "超かぐや姫！",
  "末日后酒店"
];

const rhythms = [
  {text: "每周一次放映会，默认带零食、吐槽和第二天的余韵。"},
  {text: "有人负责找片，有人负责补设定，有人负责把剧情隐喻扯到centipede homology。"},
  {text: "讨论可以从角色弧光自然滑向 moduli space，也可以完全停留在一句“这集太强了”。"},
  {text: "这里是我们想要看或者已经看过的番", href: "https://bgm.tv/index/78961"},
];

export default function Home() {
  return (
    <main className="bg-[#f7f2e8] text-[#15120f]">
      
      <audio controls className="w-full">
        <source src="/music/Whispers of the Emerald.ogg" type="audio/ogg" />
        你的浏览器不支持音频播放。
      </audio>
      
      <nav className="fixed left-0 right-0 top-0 z-30 border-b border-white/20 bg-[#11100d]/70 px-5 py-3 text-sm text-white/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a className="font-semibold tracking-wide" href="#top">
            Neon Genesis Theoremgelions
          </a>
          <div className="hidden items-center gap-5 md:flex">
            <a href="#research">研究方向</a>
            <a href="#watch">每周观影</a>
            <a href="#join">加入讨论</a>
          </div>
        </div>
      </nav>

      <section
        id="top"
        className="relative flex min-h-[92vh] items-end overflow-hidden px-5 pb-16 pt-32"
      >
        <Image
          src="/images/math-anime-common-room.png"
          alt="ACGN-inspired math common room with chalkboards and an animation screening corner"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,9,7,0.88)_0%,rgba(10,9,7,0.62)_43%,rgba(10,9,7,0.24)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#f7f2e8] to-transparent" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.72fr] lg:items-end">
          <div className="max-w-3xl text-white">
            <p className="mb-5 w-fit border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#f5d26b] backdrop-blur">
              Mathematics / ACGN / Weekly Screening
            </p>
            <h1 className="text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
              放映室里的数学博士生
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">
              我们研究代数组合、分析与偏微分方程、弦论、拓扑量子场论、辛几何、量子代数和低维/量子拓扑。每周也固定看动画片，把黑板、论文和片尾曲放在同一个夜晚。
            </p>
          </div>

          <div className="grid gap-3 text-white/90 sm:grid-cols-3 lg:grid-cols-1">
            <div className="border border-white/18 bg-[#0f1d24]/68 p-4 backdrop-blur-md">
              <p className="text-3xl font-black text-[#78d8c4]">7</p>
              <p className="mt-1 text-sm leading-6">个互相交叉的研究方向</p>
            </div>
            <div className="border border-white/18 bg-[#331522]/68 p-4 backdrop-blur-md">
              <p className="text-3xl font-black text-[#ff9b7a]">∞</p>
              <p className="mt-1 text-sm leading-6">从 seminar 到放映后的闲聊</p>
            </div>
            <div className="border border-white/18 bg-[#2c2614]/68 p-4 backdrop-blur-md">
              <p className="text-3xl font-black text-[#f5d26b]">週</p>
              <p className="mt-1 text-sm leading-6">每周一部或一段动画</p>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#bd4c3e]">
                Research Constellation
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">
                一个研究组，七条互相串台的数学支线
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#5d554a]">
              我们喜欢严格证明，也喜欢跨领域的语言迁移：组合图像、分析估计、物理直觉、范畴结构和拓扑不变量经常在同一块黑板上相遇。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {researchAreas.map((area) => (
              <article
                className="group border border-[#d7c8ad] bg-[#fffaf0] p-5 shadow-[0_10px_30px_rgba(33,24,10,0.06)] transition hover:-translate-y-1 hover:border-[#309783]"
                key={area.label}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-black">{area.label}</h3>
                  <code className="bg-[#17252a] px-2 py-1 font-mono text-sm text-[#87ead5]">
                    {area.notation}
                  </code>
                </div>
                <p className="mt-5 text-sm leading-7 text-[#5b5146]">
                  {area.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#13110f] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#78d8c4]">
              Blackboard Mood
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              我们的日常更像一张持续更新的黑板
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              上午可能在追一个谱序列，下午讨论均匀化和estimates，晚上一起看一集动画。站点的视觉语言因此介于粉笔线、量子图、live house 灯光和深夜公共室之间。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Seminar", "定义、引理、证明、反例、重写"],
              ["Reading", "论文小组和跨方向速通"],
              ["Screening", "动画周会、补番、剧场版"],
              ["Aftertalk", "把片尾曲和数学直觉一起带走"],
            ].map(([title, body]) => (
              <div
                className="border border-white/12 bg-white/[0.055] p-5"
                key={title}
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#f5d26b]">
                  {title}
                </p>
                <p className="mt-4 text-lg font-bold">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="watch" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2d8f82]">
                Weekly Watch Party
              </p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                每周看动画片，是组会之外的另一种共识
              </h2>
              <div className="mt-7 space-y-3">
                {rhythms.map((item) => 
                  item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-l-4 border-[#ff8566] bg-white/54 py-3 pl-4 text-base leading-7 text-[#4e463e]"
                    key={item.text}
                  >
                    {item.text}
                  </a>
                  ) : (
                    <p
                      className="border-l-4 border-[#ff8566] bg-white/54 py-3 pl-4 text-base leading-7 text-[#4e463e]"
                      key={item.text}
                    >
                      {item.text}
                    </p>
                  )
                )}
              </div>
            </div>

            <div className="grid content-start gap-3 sm:grid-cols-2">
              {watchList.map((title) => (
                <div
                  className="flex min-h-20 items-center justify-between border border-[#d7c8ad] bg-[#fffaf0] px-4 py-3"
                  key={title}
                >
                  <span className="text-lg font-black">{title}</span>
                  <span className="font-mono text-sm text-[#bd4c3e]">seen</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 border border-[#241f18] bg-[#222017] p-6 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#f5d26b]">
              Next Episode
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              欢迎带着一个定理、一个问题或一部想安利的片子来坐坐
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/70">
              这里适合数学博士生、研究生朋友、访客和对这些方向好奇的人。我们相信好的讨论可以从严肃的 proof sketch 开始，也可以从一句“这段分镜太会了”开始。
            </p>
          </div>
          <a
            className="inline-flex h-12 items-center justify-center border border-[#78d8c4] bg-[#78d8c4] px-5 font-bold text-[#102019] transition hover:bg-transparent hover:text-[#78d8c4]"
            href="mailto:yuzk23@mails.tsinghua.edu.cn"
          >
            联系我们
          </a>
        </div>
      </section>
    </main>
  );
}
