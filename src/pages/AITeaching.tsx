import { motion } from "framer-motion";
import { Sparkles, Brain, Palette, MessageSquare, Lightbulb, Shield } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const useCases = [
  {
    icon: <Brain size={20} />,
    title: "Curriculum Design & Planning",
    description: "Using AI to accelerate lesson planning, differentiate instruction, and create adaptive learning pathways that respond to student needs in real time.",
  },
  {
    icon: <Palette size={20} />,
    title: "Student Creative Exploration",
    description: "AI as a creative collaborator — helping students brainstorm, visualize concepts, generate reference imagery, and push past creative blocks during the design process.",
  },
  {
    icon: <MessageSquare size={20} />,
    title: "Reflective Practice & Critique",
    description: "AI-facilitated reflection prompts that help students articulate their design decisions, evaluate their process, and develop metacognitive awareness.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Design Thinking Acceleration",
    description: "Using AI to rapidly prototype ideas, test assumptions, and generate multiple solution paths — teaching students that iteration is faster when you have a thinking partner.",
  },
  {
    icon: <Sparkles size={20} />,
    title: "Cross-Disciplinary Connections",
    description: "AI helps surface unexpected connections between disciplines — linking a physics concept to an artistic technique, or an environmental dataset to a community design challenge.",
  },
  {
    icon: <Shield size={20} />,
    title: "Responsible & Critical AI Use",
    description: "Teaching students to evaluate AI outputs critically, understand bias and limitations, and develop an ethical framework for using AI as a tool — not a replacement for thinking.",
  },
];

const AITeaching = () => {
  return (
    <div>
      <section className="container pt-16 pb-8 md:pt-24 md:pb-12">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-xs font-mono-ui uppercase tracking-[0.2em] text-primary mb-4">AI in Teaching</p>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-3 leading-tight">
            Intentional AI Integration in the Classroom
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            AI is not a trend to follow — it's a pedagogical tool to wield with purpose. 
            Here's how artificial intelligence is integrated into curriculum, creativity, and 
            critical thinking across every grade level.
          </p>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="container pb-12">
        <motion.div {...fadeUp} className="bg-card border border-border rounded-lg p-6 md:p-10 max-w-3xl">
          <h2 className="font-display text-xl font-medium text-foreground mb-3">The Approach</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            AI in the classroom isn't about automation — it's about amplification. The goal is never to 
            have AI do the thinking for students, but to use AI as a tool that makes student thinking 
            more visible, more iterative, and more ambitious.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every AI integration follows three principles: it must deepen understanding (not shortcut it), 
            it must be transparent (students know when and why AI is being used), and it must develop 
            critical judgment (students evaluate and refine AI outputs, never accept them uncritically).
          </p>
        </motion.div>
      </section>

      {/* Use Cases Grid */}
      <section className="container pb-16 md:pb-24">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-2xl font-medium text-foreground mb-8">How AI Shows Up in Practice</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-ceramic transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display text-base font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Note */}
      <section className="border-t border-border">
        <div className="container py-16 md:py-20">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <p className="font-display text-lg md:text-xl italic text-foreground leading-relaxed mb-4">
              "The question isn't whether AI belongs in education. The question is whether we'll teach students 
              to use it with the same intentionality we bring to every other tool in the studio."
            </p>
            <p className="text-xs font-mono-ui text-muted-foreground uppercase tracking-wider">
              Specific AI tools and detailed case studies will be shared upon request
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AITeaching;
