import Link from "next/link"
import { 
  ArrowRight, 
  Code2, 
  Brain, 
  Sparkles, 
  Megaphone, 
  Film, 
  Calendar,
  Check,
  Smartphone,
  Globe,
  Database,
  Bot,
  Workflow,
  LineChart,
  Palette,
  Video,
  Mic,
  Share2,
  Search,
  Mail,
  BarChart3
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    id: "software",
    icon: Code2,
    title: "Software Development",
    description: "We build custom software solutions that transform your business operations and drive growth.",
    features: [
      { icon: Globe, title: "Web Applications", description: "Responsive, scalable web apps built with modern frameworks" },
      { icon: Smartphone, title: "Mobile Development", description: "Native and cross-platform mobile applications" },
      { icon: Database, title: "SaaS Products", description: "End-to-end SaaS development and deployment" },
    ],
    benefits: [
      "Custom solutions tailored to your needs",
      "Scalable architecture for future growth",
      "Modern tech stack and best practices",
      "Ongoing support and maintenance",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Solutions & Automation",
    description: "Harness the power of artificial intelligence to automate processes and gain competitive advantages.",
    features: [
      { icon: Bot, title: "AI Integration", description: "Integrate AI capabilities into your existing systems" },
      { icon: Workflow, title: "Process Automation", description: "Automate repetitive tasks and workflows" },
      { icon: LineChart, title: "Predictive Analytics", description: "Data-driven insights and forecasting" },
    ],
    benefits: [
      "Reduce operational costs by up to 60%",
      "Improve decision-making with AI insights",
      "Scale operations without scaling headcount",
      "Stay ahead of the competition",
    ],
  },
  {
    id: "content",
    icon: Sparkles,
    title: "AI Content Generation",
    description: "Generate high-quality content at scale with our advanced AI-powered content solutions.",
    features: [
      { icon: Palette, title: "Visual Content", description: "AI-generated images, graphics, and designs" },
      { icon: Mail, title: "Written Content", description: "Blog posts, marketing copy, and documentation" },
      { icon: Video, title: "Video Production", description: "AI-assisted video creation and editing" },
    ],
    benefits: [
      "10x your content output",
      "Maintain brand consistency",
      "Reduce content creation costs",
      "Quick turnaround times",
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility, engagement, and conversions.",
    features: [
      { icon: Search, title: "SEO Optimization", description: "Improve search rankings and organic traffic" },
      { icon: Share2, title: "Social Media", description: "Strategic social media management" },
      { icon: BarChart3, title: "Analytics & Reporting", description: "Track and optimize campaign performance" },
    ],
    benefits: [
      "Increase organic traffic by 200%+",
      "Higher conversion rates",
      "Measurable ROI on every campaign",
      "Comprehensive analytics dashboard",
    ],
  },
  {
    id: "production",
    icon: Film,
    title: "Post Production Services",
    description: "Professional video editing and post-production services to bring your vision to life.",
    features: [
      { icon: Video, title: "Video Editing", description: "Professional editing for all video formats" },
      { icon: Mic, title: "Audio Production", description: "Sound design, mixing, and mastering" },
      { icon: Palette, title: "Motion Graphics", description: "Animated graphics and visual effects" },
    ],
    benefits: [
      "Broadcast-quality output",
      "Fast turnaround times",
      "Experienced production team",
      "Flexible revision process",
    ],
  },
  {
    id: "scheduler",
    icon: Calendar,
    title: "Meeting Scheduler",
    description: "Streamline your appointment booking with our intelligent scheduling solutions.",
    features: [
      { icon: Calendar, title: "Smart Scheduling", description: "Automated scheduling and calendar sync" },
      { icon: Globe, title: "Time Zone Support", description: "Seamless global scheduling" },
      { icon: Mail, title: "Notifications", description: "Automated reminders and confirmations" },
    ],
    benefits: [
      "Reduce no-shows by 50%",
      "Save hours on scheduling",
      "Improve client experience",
      "Integrate with your existing tools",
    ],
  },
]

export default function ServicesPage() {
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
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Comprehensive digital solutions designed to help your business thrive in the modern landscape. From development to marketing, we have got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? '' : ''}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-8">
                      {service.features.map((feature) => (
                        <Card key={feature.title} className="bg-card">
                          <CardContent className="p-4">
                            <feature.icon className="w-6 h-6 text-primary mb-3" />
                            <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Button asChild>
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  {/* Benefits Card */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card className="bg-card border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-xl">What You Get</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3">
                              <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {index < services.length - 1 && (
                  <div className="mt-24 border-t border-border" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5 mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts. {"We'll"} analyze your requirements and recommend the best solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">
                  Book Free Consultation
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
