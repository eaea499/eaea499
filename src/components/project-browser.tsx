import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

type Project = {
  number: string;
  title: string;
  kind: string;
  summary: string;
  parts: string[];
  stack: string[];
  href?: string;
};

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  return <section className="project-detail-list">
    {projects.map((project) => <article key={project.number} className="project-detail"><div className="project-number">{project.number}</div><div className="project-main"><p className="detail-kind">{project.kind}</p><h2>{project.href ? <Link href={project.href}>{project.title}</Link> : project.title}</h2><p className="detail-summary">{project.summary}</p><ul>{project.parts.map((part) => <li key={part}><CheckCircle2 size={17} />{part}</li>)}</ul></div><div className="detail-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></article>)}
  </section>;
}
