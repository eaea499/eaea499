"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Project = {
  number: string;
  title: string;
  kind: string;
  summary: string;
  parts: string[];
  stack: string[];
  group: "iot" | "vision";
  href?: string;
};

const filters = [
  { id: "all", label: "全部" },
  { id: "iot", label: "物联网" },
  { id: "vision", label: "视觉" },
] as const;

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["id"]>("all");
  const visibleProjects = activeFilter === "all" ? projects : projects.filter((project) => project.group === activeFilter);

  return <>
    <div className="project-filter" aria-label="筛选项目方向">
      {filters.map((filter) => <button className={activeFilter === filter.id ? "is-active" : ""} key={filter.id} onClick={() => setActiveFilter(filter.id)} type="button">{filter.label}</button>)}
      <span className="project-filter-count">{visibleProjects.length} 个项目</span>
    </div>
    <section className="project-detail-list">
      {visibleProjects.map((project) => <article key={project.number} className="project-detail"><div className="project-number">{project.number}</div><div className="project-main"><p className="detail-kind">{project.kind}</p><h2>{project.href ? <Link href={project.href}>{project.title}</Link> : project.title}</h2><p className="detail-summary">{project.summary}</p><ul>{project.parts.map((part) => <li key={part}><CheckCircle2 size={17} />{part}</li>)}</ul></div><div className="detail-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></article>)}
    </section>
  </>;
}
