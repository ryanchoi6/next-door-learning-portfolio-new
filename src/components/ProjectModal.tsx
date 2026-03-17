import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-foreground/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-0 bottom-0 top-12 md:top-16 z-[81] flex items-end md:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-background border border-border rounded-t-xl md:rounded-xl w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto shadow-ceramic-hover relative"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="sticky top-4 float-right mr-4 mt-4 z-10 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>

              <div className="p-6 md:p-10">
                {/* Header */}
                <div className="mb-6 md:mb-8 pr-12">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono-ui uppercase tracking-wider text-muted-foreground bg-secondary px-2.5 py-1 rounded">
                      {project.level}
                    </span>
                    <span className="text-[10px] font-mono-ui uppercase tracking-wider text-muted-foreground bg-secondary px-2.5 py-1 rounded">
                      {project.subject}
                    </span>
                    <span className="text-[10px] font-mono-ui uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded">
                      {project.themeLabel}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground leading-tight">
                    {project.title}
                  </h2>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-[1.2fr_1fr] gap-8">
                  {/* Left: Media */}
                  <div className="space-y-4">
                    {/* Main image placeholder */}
                    <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden flex items-center justify-center">
                      {project.thumbnail ? (
                        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-display text-3xl text-primary/30">{project.title[0]}</span>
                        </div>
                      )}
                    </div>

                    {/* Video embed */}
                    {project.videoUrl && (
                      <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
                        <iframe
                          src={project.videoUrl}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`${project.title} video`}
                        />
                      </div>
                    )}

                    {/* Additional images */}
                    {project.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-3">
                        {project.images.map((img, i) => (
                          <div key={i} className="aspect-square bg-secondary rounded-md overflow-hidden">
                            <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono-ui uppercase tracking-wider text-muted-foreground mb-2">Project Overview</h4>
                      <p className="text-sm text-foreground leading-relaxed">
                        {project.overview}
                      </p>
                    </div>

                    {project.teacherNote && (
                      <div className="border-l-2 border-primary/30 pl-4">
                        <h4 className="text-xs font-mono-ui uppercase tracking-wider text-primary mb-2">Teacher's Note</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed italic font-display">
                          "{project.teacherNote}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
