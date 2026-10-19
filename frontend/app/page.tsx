import Link from "next/link";

const teamLinks = [
  {
    href: "/thanh",
    label: "Bài tập của Thành",
    description: "Khu vực thực hành và nộp bài cá nhân của Thành.",
  },
  {
    href: "/loc",
    label: "Bài tập của Lộc",
    description: "Khu vực thực hành và nộp bài cá nhân của Lộc.",
  },
];

const resourceLinks = [
  {
    href: "https://github.com/cloudflare/vinext",
    label: "vinext Docs",
  },
  {
    href: "https://developers.cloudflare.com/workers/",
    label: "Cloudflare Workers",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bg px-6 py-12 text-text">
      <section className="mx-auto flex max-w-4xl flex-col gap-10">
        
        {/* Phần tiêu đề */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Workspace nhóm • Open Source Project
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl font-heading">
            Trang nộp bài tập & Thực hành Frontend
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Chọn lối đi bên dưới để truy cập vào không gian làm bài tập riêng của từng thành viên trong nhóm.
          </p>
        </div>

        {/* Khối chọn thành viên (Thành / Lộc) */}
        <div className="grid gap-6 sm:grid-cols-2">
          {teamLinks.map((member) => (
            <Link
              key={member.href}
              href={member.href}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md"
            >
              <div>
                <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Thành viên
                </span>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-text group-hover:text-primary">
                  {member.label}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {member.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                Truy cập ngay 
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Thông tin kỹ thuật & Tài nguyên phụ */}
        <div className="rounded-xl border border-border bg-surface-2 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Tài nguyên dự án
          </h3>
          <nav className="mt-4 flex flex-wrap gap-3">
            {resourceLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text hover:bg-primary/5 hover:border-primary"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label} ↗
              </a>
            ))}
            <Link
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text hover:bg-primary/5 hover:border-primary"
              href="/api/hello"
            >
              API route test
            </Link>
          </nav>
        </div>

      </section>
    </main>
  );
}