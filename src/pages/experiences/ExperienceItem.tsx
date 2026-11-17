import { formatDateRange } from "@/utils/formatDate";
import type { Experience } from "./experiences";

export default function ExperienceItem({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="border-border grid grid-cols-1 gap-8 border-b py-10 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-10">
      {/* 왼쪽: 메타데이터 */}
      <div>
        <p className="text-text-h text-base font-medium">{experience.role}</p>
        <p className="text-text mt-1 text-sm">{experience.company}</p>
        <p className="text-text/70 mt-3 text-xs">
          {formatDateRange(experience.startDate, experience.endDate)}
        </p>
        <p className="text-text/70 text-xs">{experience.location}</p>
      </div>

      {/* 오른쪽: 상세 */}
      <div>
        <p className="text-text-h text-base">{experience.companySummary}</p>

        <div className="mt-6 flex flex-col gap-8">
          {experience.projects.map((project) => (
            <div key={project.title}>
              <h3 className="text-accent-secondary text-sm font-semibold">
                {project.title}
              </h3>
              <ul className="mt-2 flex flex-col gap-1.5">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-text text-sm leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
              {project.techStack.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
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
          ))}
        </div>
      </div>
    </div>
  );
}
