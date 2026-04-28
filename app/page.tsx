import Link from "next/link"
import { ArrowRight, Code2, Brain, Sparkles, Megaphone, Film, Calendar, ChevronRight, Zap, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom web, mobile, and SaaS solutions built with cutting-edge technologies.",
    href: "/services#software",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Intelligent automation and machine learning solutions for your business.",
    href: "/services#ai",
  },
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description: "Generate high-quality content at scale with our AI-powered tools.",
    href: "/services#content",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that deliver measurable results.",
    href: "/services#marketing",
  },
  {
    icon: Film,
    title: "Post Production",
    description: "Professional video editing and post-production services.",
    href: "/services#production",
  },
  {
    icon: Calendar,
    title: "Meeting Scheduler",
    description: "Seamless appointment booking for your team and clients.",
    href: "/booking",
  },
]

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "150+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "99%", label: "Client Satisfaction" },
]

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "We deliver projects on time with agile methodologies and efficient workflows.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime for all our solutions.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled developers, designers, and strategists working together.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Development Agency</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
                Building the Future of
                <span className="text-primary"> Digital Innovation</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
                We transform ideas into powerful digital solutions. From AI-driven automation to stunning web experiences, we bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/booking">
                    Schedule a Call
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-card rounded-2xl border border-border">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link key={service.title} href={service.href}>
                  <Card className="h-full group hover:border-primary/50 transition-all duration-300 bg-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium">
                        Learn more
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Why Choose DevelopersHub?
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We combine technical expertise with creative innovation to deliver exceptional results. Our team is dedicated to understanding your unique challenges and crafting solutions that drive real business value.
                </p>
                <div className="space-y-6">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="absolute inset-4 bg-card rounded-2xl border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Code2 className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                      <p className="text-muted-foreground mb-6">{"Let's"} build something amazing together.</p>
                      <Button asChild>
                        <Link href="/contact">Get in Touch</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts and discover how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">
                  Book a Free Consultation
                  <Calendar className="w-4 h-4 ml-2" />
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
