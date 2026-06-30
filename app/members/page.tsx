/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const members = [
  {
    name: "哈基0",
    area: "代数组合",
    note : "关心代数组合、表示论和漂亮的双射",
    links: [
      { label: "Homepage", href: "https://example.com" },
      { label: "Google Scholar", href: "https://scholar.google.com/" },
      { label: "GitHub", href: "https://github.com/" },
    ],
  },
  {
    name: "哈基学姐",
    area: "分析与偏微分方程",
    note: "在estimates,传播和能量方法间来回穿梭",
    links: [
      { label: "CV", href: "/cv/name.pdf" },
      { label: "Homepage", href: "https://example.com" },
    ],
  },
  {
    name: "耄耋",
    area: "弦论/量子代数",
    note: "思考Deligne conjecture在更一般homotopy algebra里的推广",
    links: [
      { label: "CV", href: "/cv/name.pdf" },
      { label: "Homepage", href: "https://example.com" },
    ],
  },
  {
    name: "哈基人",
    area: "低维/量子拓扑",
    note: "钟爱扭结不变量和Khovanov同调",
    links: [
      { label: "CV", href: "/cv/name.pdf" },
      { label: "Homepage", href: "https://example.com" },
    ],
  },
  {
    name: "几把猫",
    area: "辛几何",
    note: "在拓扑、辛几何和几把语的海洋中遨游",
    links: [
      { label: "CV", href: "/cv/name.pdf" },
      { label: "Homepage", href: "https://example.com" },
    ],
  },
  {
    name: "小男娘",
    area: "拓扑量子场论/男娘",
    note: "酷爱女装的玲珑老师",
    links: [
      { label: "CV", href: "/cv/name.pdf" },
      { label: "Homepage", href: "https://example.com" },
    ],
  },
  {
    name: "大象",
    area: "复几何",
    note: "把大象装进冰箱，需要多少大香蕉",
    links: [
      { label: "CV", href: "/cv/name.pdf" },
      { label: "Homepage", href: "https://example.com" },
    ],
  },
  {
    name: "苏轼",
    area: "AI",
    note: "快加班，不然没法跟甲方交差了！",
    links: [
      { label: "CV", href: "/cv/name.pdf" },
      { label: "Homepage", href: "https://example.com" },
    ],
  },
  {
    name: "丁峥",
    area: "数学物理/算术几何",
    note: "今天又是睡C楼的一天",
    links: [
      { label: "CV", href: "/cv/name.pdf" },
      { label: "Homepage", href: "https://example.com" },
    ],
  },
  {
    name: "哈基浩",
    area: "代数表示论/跑路",
    note: "再多发两条小红书",
    links: [
      { label: "CV", href: "/cv/name.pdf" },
      { label: "Homepage", href: "https://example.com" },
    ],
  }
];

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-[#f7f2e8] text-[#15120f]">
      <nav className="fixed left-0 right-0 top-0 z-30 border-b border-white/20 bg-[#11100d]/70 px-5 py-3 text-sm text-white/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link className="font-semibold tracking-wide" href="/">
            Neon Genesis Theoremgelions (NGTs)
          </Link>
          <div className="hidden items-center gap-5 md:flex">
            <Link href="/#research">研究方向</Link>
            <Link href="/members">成员</Link>
            <Link href="/#watch">每周观影</Link>
            <Link href="/#seminars">讨论班记录</Link>
            <Link href="/#join">加入讨论</Link>
          </div>
        </div>
      </nav>

      <section className="px-5 pb-16 pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#bd4c3e]">
            Members
          </p>
          <div className="mt-3 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-black leading-tight sm:text-7xl">
                黑板、论文和片尾曲旁边的人
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d554a]">
                个人主页、CV、论文页面和项目链接集中在这里。每一张成员卡片都可以连到新标签页。
              </p>
            </div>
            <div className="border border-[#d7c8ad] bg-[#fffaf0] p-3 shadow-[0_10px_30px_rgba(33,24,10,0.08)]">
              <img
                src="/images/cos_team.png"
                alt="cos小合照"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
          {members.map((member) => (
            <article
              className="border border-[#d7c8ad] bg-[#fffaf0] p-5 shadow-[0_10px_30px_rgba(33,24,10,0.06)] transition hover:-translate-y-1 hover:border-[#309783]"
              key={member.name}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2d8f82]">
                {member.area}
              </p>
              <h2 className="mt-3 text-2xl font-black">{member.name}</h2>
              <p className="mt-4 text-sm leading-7 text-[#5b5146]">
                {member.note}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {member.links.map((link) => (
                  <a
                    className="border border-[#d7c8ad] px-3 py-2 text-sm font-bold transition hover:border-[#bd4c3e] hover:text-[#bd4c3e]"
                    href={link.href}
                    key={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
