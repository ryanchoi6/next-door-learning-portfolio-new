import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-ceramic-hover hover:scale-[1.02]">
        {/* Thumbnail */}
        <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-display text-2xl text-primary/40">{project.title[0]}</span>
              </div>
            </div>
          )}
          {/* Hover overlay with teacher note snippet */}
          <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-primary-foreground text-xs leading-relaxed line-clamp-3 font-body">
              {project.teacherNote || project.shortIntro}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display text-base font-medium text-foreground mb-1.5 leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
            {project.shortIntro}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-mono-ui uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded">
              {project.level}
            </span>
            <span className="text-[10px] font-mono-ui uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded">
              {project.subject}
            </span>
            <span className="text-[10px] font-mono-ui uppercase tracking-wider text-primary/70 bg-primary/8 px-2 py-0.5 rounded">
              {project.themeLabel}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
