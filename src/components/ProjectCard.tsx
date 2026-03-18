import { motion } from "framer-motion";
import { GraduationCap, Video } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const themeColor: Record<string, string> = {
  engineering: "bg-primary",
  environmental: "bg-accent",
  community: "bg-sky",
  "digital-media": "bg-primary",
};

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const isDigitalMedia = project.theme === "digital-media";

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
      <div className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02]">
        {/* Thumbnail */}
        <div className={`${isDigitalMedia ? "aspect-square" : "aspect-[4/3]"} bg-secondary relative overflow-hidden`}>
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          ) : isDigitalMedia && project.videoUrls && project.videoUrls.length > 0 ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Video size={24} className="text-primary/60" />
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-primary/40">{project.title[0]}</span>
              </div>
            </div>
          )}

          {/* Overlay badges for digital media */}
          {isDigitalMedia && (
            <div className="absolute bottom-2 left-2 flex flex-wrap items-center gap-1.5">
              <span className="flex items-center gap-1 text-[10px] font-medium text-foreground bg-background/90 backdrop-blur-sm border border-border px-2 py-0.5 rounded-full">
                <GraduationCap size={12} className="text-primary" />
                {project.level}
              </span>
              <span className="text-[10px] font-medium text-primary bg-primary/10 backdrop-blur-sm border border-primary/20 px-2 py-0.5 rounded-full">
                {project.themeLabel}
              </span>
            </div>
          )}
        </div>

        {/* Content - hidden for digital media */}
        {!isDigitalMedia && (
          <div className="p-4">
            <h3 className="font-display text-base font-semibold text-foreground mb-1 leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2 font-body">
              {project.shortIntro}
            </p>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
              <span>{project.level}</span>
              <span className="text-border">·</span>
              <span>{project.subject}</span>
            </div>

            {/* Accent bar */}
            <div className={`h-1 w-12 rounded-full mt-3 ${themeColor[project.theme] || "bg-primary"}`} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
