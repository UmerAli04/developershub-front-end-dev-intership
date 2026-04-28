"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink, Code2, Brain, Megaphone, Film, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Projects" },
  { id: "software", label: "Software", icon: Code2 },
  { id: "ai", label: "AI Solutions", icon: Brain },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "production", label: "Production", icon: Film },
]

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "software",
    description: "A comprehensive financial analytics platform with real-time data visualization and reporting.",
    tags: ["React", "Node.js", "PostgreSQL", "D3.js"],
    stats: { metric: "40%", label: "Faster reporting" },
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "AI Customer Service Bot",
    category: "ai",
    description: "Intelligent chatbot handling 10,000+ customer queries daily with 95% resolution rate.",
    tags: ["Python", "OpenAI", "NLP", "FastAPI"],
    stats: { metric: "95%", label: "Resolution rate" },
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "E-commerce Growth Campaign",
    category: "marketing",
    description: "Multi-channel digital marketing campaign that tripled online sales in 6 months.",
    tags: ["SEO", "PPC", "Social Media", "Analytics"],
    stats: { metric: "300%", label: "Sales increase" },
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: 4,
    title: "Healthcare Mobile App",
    category: "software",
    description: "Patient management app with telemedicine features serving 50,000+ users.",
    tags: ["React Native", "Firebase", "HIPAA", "WebRTC"],
    stats: { metric: "50K+", label: "Active users" },
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 5,
    title: "Predictive Maintenance System",
    category: "ai",
    description: "ML-powered system predicting equipment failures with 92% accuracy.",
    tags: ["TensorFlow", "IoT", "AWS", "Time Series"],
    stats: { metric: "92%", label: "Prediction accuracy" },
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: 6,
    title: "Brand Documentary Series",
    category: "production",
    description: "Award-winning documentary series showcasing company culture and values.",
    tags: ["4K Production", "Color Grading", "Sound Design"],
    stats: { metric: "2M+", label: "Views" },
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    id: 7,
    title: "SaaS Analytics Platform",
    category: "software",
    description: "Business intelligence platform processing 1TB+ data daily for enterprise clients.",
    tags: ["Next.js", "GraphQL", "Snowflake", "Redis"],
    stats: { metric: "1TB+", label: "Daily data" },
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 8,
    title: "Content Generation Engine",
    category: "ai",
    description: "AI system generating 10,000+ pieces of marketing content monthly.",
    tags: ["GPT-4", "Fine-tuning", "Content API"],
    stats: { metric: "10K+", label: "Monthly content" },
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 9,
    title: "Product Launch Campaign",
    category: "marketing",
    description: "Viral product launch campaign achieving 5M impressions in first week.",
    tags: ["Influencer", "PR", "Social", "Video"],
    stats: { metric: "5M+", label: "First week impressions" },
    color: "from-amber-500/20 to-orange-500/20",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Our <span className="text-primary">Portfolio</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Explore our collection of successful projects across industries. Each project represents our commitment to excellence and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id} 
                  className="group bg-card overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    {/* Project Image Placeholder */}
                    <div className={cn(
                      "aspect-video bg-gradient-to-br relative overflow-hidden",
                      project.color
                    )}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-background/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          {project.category === "software" && <Code2 className="w-8 h-8 text-foreground/80" />}
                          {project.category === "ai" && <Brain className="w-8 h-8 text-foreground/80" />}
                          {project.category === "marketing" && <Megaphone className="w-8 h-8 text-foreground/80" />}
                          {project.category === "production" && <Film className="w-8 h-8 text-foreground/80" />}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {categories.find(c => c.id === project.category)?.label}
                        </span>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{project.stats.metric}</div>
                          <div className="text-xs text-muted-foreground">{project.stats.label}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {"Let's"} discuss how we can help bring your vision to life. Our team is ready to tackle your next big challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">
                  Schedule a Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
