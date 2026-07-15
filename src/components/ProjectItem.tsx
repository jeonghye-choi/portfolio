import type { Project } from "@/data/projects";
import { formatDateRange } from "@/utils/formatDate";

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="border-border grid grid-cols-1 gap-8 border-b py-10 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-10">
      {/* 왼쪽: 사실 정보 */}
      <div>
        <p className="text-text-h text-base font-medium">{project.title}</p>
        <p className="text-text mt-1 text-sm">{project.event}</p>
        {project.role && (
          <p className="text-text/80 mt-0.5 text-sm">{project.role}</p>
        )}
        <p className="text-text/70 mt-3 text-xs">
          {formatDateRange(project.startDate, project.endDate)}
        </p>

        {project.techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="border-border text-text rounded-full border px-2.5 py-0.5 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 오른쪽: 서사 */}
      <div>
        <p className="text-text-h text-base">{project.description}</p>

        <ul className="mt-4 flex flex-col gap-1.5">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="text-text text-sm leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-6 flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-secondary text-sm font-medium hover:underline"
              >
                Live demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-text-h text-sm font-medium hover:underline"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}

        {/* 썸네일 자리 - 나중에 이 아래 추가 */}
      </div>
    </div>
  );
}
