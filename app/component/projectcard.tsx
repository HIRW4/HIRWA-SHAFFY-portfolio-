type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400 motion-reduce:transform-none">
      <div
        aria-hidden="true"
        className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 font-mono text-xl font-bold text-blue-400"
      >
        {"</>"}
      </div>

      <h3 className="text-xl font-bold text-white">{title}</h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}