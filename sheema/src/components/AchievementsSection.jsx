import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { 
  Trophy, 
  Users, 
  Code, 
  Mic,
  Award,
  Target
} from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      title: "Hackathon Participation",
      description: "Participated in multiple hackathons including HacktoberFest and local coding competitions",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      title: "GSSoC Contributor",
      description: "Active contributor to Girl Script Summer of Code - open source program",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    
    {
      title: "Speaking & Anchoring",
      description: "Experience in public speaking and event anchoring at technical conferences and college events",
      icon: Mic,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Technical Leadership",
      description: "Led development teams in various projects and mentored junior developers",
      icon: Award,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      title: "Problem Solver",
      description: "Solved  algorithmic problems across various competitive programming platforms",
      icon: Target,
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Milestones and accomplishments in my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="card-elegant p-6 h-full hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`${achievement.bgColor} p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "2", label: "Hackathons" },
            
      
            { number: "5+", label: "Speaking Events" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}