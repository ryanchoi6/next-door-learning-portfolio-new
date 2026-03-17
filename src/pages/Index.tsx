import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => {
  const featured = projects.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="container pt-20 pb-16 md:pt-32 md:pb-24">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="text-xs font-mono-ui uppercase tracking-[0.2em] text-primary mb-4">
            K–12 Educator · 11 Years
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium text-foreground leading-[1.1] mb-6">
            Building Classrooms Where{" "}
            <span className="italic text-primary">Creativity</span> and{" "}
            <span className="italic text-primary">Rigor</span> Coexist
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
            An interdisciplinary educator specializing in STEAM, Design, Engineering, and Art — 
            designing project-based learning experiences that prepare students for a future that 
            doesn't yet exist.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Explore Student Work
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className="container pb-16 md:pb-24">
        <motion.div {...fadeUp}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground">Featured Student Work</h2>
              <p className="text-sm text-muted-foreground mt-1">Evidence of learning made visible</p>
            </div>
            <Link
              to="/projects"
              className="text-xs font-mono-ui text-primary hover:underline flex items-center gap-1"
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <Link to="/projects" key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-ceramic-hover transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                    <span className="font-display text-3xl text-primary/20">{project.title[0]}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-medium text-foreground mb-1">{project.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{project.shortIntro}</p>
                    <div className="flex gap-1.5 mt-3">
                      <span className="text-[10px] font-mono-ui uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                        {project.level}
                      </span>
                      <span className="text-[10px] font-mono-ui uppercase tracking-wider text-primary/70 bg-primary/8 px-2 py-0.5 rounded">
                        {project.themeLabel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Teaching Philosophy Preview */}
      <section className="border-y border-border">
        <div className="container py-16 md:py-24">
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-mono-ui uppercase tracking-[0.2em] text-primary mb-3">Teaching Philosophy</p>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground leading-tight mb-4">
                The Classroom as a Laboratory of Intent
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Every project begins with a question worth answering. Through design thinking, 
                iterative prototyping, and authentic problem-solving, students learn that the 
                process of creation is itself a form of understanding.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Across 11 years and every grade level, the methodology remains consistent: 
                empathy first, rigor always, beauty as a standard — not a bonus.
              </p>
              <Link
                to="/about"
                className="text-xs font-mono-ui text-primary hover:underline flex items-center gap-1"
              >
                Read More <ArrowRight size={12} />
              </Link>
            </div>
            <div className="bg-secondary rounded-lg p-8 md:p-10 border border-border">
              <blockquote className="font-display text-lg md:text-xl italic text-foreground leading-relaxed">
                "I don't teach subjects — I design conditions where students discover that they are 
                capable of more than they believed."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI in Teaching Preview */}
      <section className="container py-16 md:py-24">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="text-primary" size={20} />
          </div>
          <p className="text-xs font-mono-ui uppercase tracking-[0.2em] text-primary mb-3">
            Future-Ready Pedagogy
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
            AI as a Pedagogical Partner
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Artificial intelligence isn't replacing the teacher — it's amplifying the teaching. 
            Explore how AI tools are integrated intentionally into curriculum design, student 
            creativity, and reflective practice.
          </p>
          <Link
            to="/ai-teaching"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Explore AI in Teaching
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-20 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-3">
              Let's Build Something Together
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Open to teaching roles, curriculum design collaborations, speaking engagements, 
              and educational innovation projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
