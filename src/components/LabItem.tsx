import type { Lab } from "@/data/labs";
import { Code2, ExternalLink } from "lucide-react";

export default function LabItem({ lab }: { lab: Lab }) {
  return (
    <div className="border-border border-b py-10 last:border-b-0">
      <div className="border-border aspect-21/9 w-full overflow-hidden rounded-md border">
        <img
          src={lab.demoUrl}
          alt={lab.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <p className="text-text-h font-serif text-2xl font-medium">
          {lab.title}
        </p>
        <div className="flex items-center gap-2">
          {lab.liveUrl && (
            <a
              href={lab.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/60 hover:text-accent-secondary transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
          {lab.githubUrl && (
            <a
              href={lab.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/60 hover:text-accent-secondary transition-colors"
            >
              <Code2 size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="text-text mt-3 text-sm leading-relaxed">
        {lab.description}
      </p>

      {lab.inspiration && (
        <div className="text-text/80 mt-3 flex gap-2 text-sm leading-relaxed">
          <span className="text-text-h">•</span>
          <p>
            <span className="text-text-h font-medium">Inspired by</span>{" "}
            {lab.inspiration}
          </p>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {lab.tools.map((tool) => (
          <span
            key={tool}
            className="border-border text-text rounded-full border px-2.5 py-0.5 text-xs"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
