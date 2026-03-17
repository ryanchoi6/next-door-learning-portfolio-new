import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import ThemeFilter from "@/components/ThemeFilter";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects, type Project } from "@/data/projects";

const Projects = () => {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (activeTheme && p.theme !== activeTheme) return false;
      if (activeLevel && p.level !== activeLevel) return false;
      return true;
    });
  }, [activeTheme, activeLevel]);

  const levels = ["Elementary", "Middle School", "High School"];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="container pt-16 pb-8 md:pt-24 md:pb-12">
        <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-3">
          Student Work
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed">
          A curated collection of student projects spanning elementary through high school — each designed to develop creativity, critical thinking, and real-world problem solving.
        </p>
      </section>

      {/* Filters */}
      <section className="container pb-8 space-y-4">
        <ThemeFilter activeTheme={activeTheme} onThemeChange={setActiveTheme} />
        
        {/* Level filter */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono-ui uppercase tracking-wider text-muted-foreground mr-1">Level:</span>
          <button
            onClick={() => setActiveLevel(null)}
            className={`px-3 py-1 rounded text-[11px] font-mono-ui transition-colors ${
              activeLevel === null
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(activeLevel === level ? null : level)}
              className={`px-3 py-1 rounded text-[11px] font-mono-ui transition-colors ${
                activeLevel === level
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-sm">No projects match the current filters.</p>
          </div>
        )}
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Projects;
