import Link from "next/link";

type ArchivePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  html: string;
};

export default function ArchivePage({ eyebrow, title, description, html }: ArchivePageProps) {
  return (
    <>
      <header className="archive-header">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span><strong>BioRobotics</strong><small>Laboratory · USF</small></span>
        </Link>
        <Link href="/">Back to home</Link>
      </header>
      <main className="archive-main">
        <section className="archive-intro">
          <p className="eyebrow"><span /> {eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
        <article className="legacy-content" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <footer className="archive-footer">
        <p>Source content migrated from the public academic profile of Prof. Alfredo Weitzenfeld.</p>
        <a href="mailto:aweitzenfeld@usf.edu">aweitzenfeld@usf.edu</a>
      </footer>
    </>
  );
}
