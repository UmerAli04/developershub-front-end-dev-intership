import Link from "next/link"
import { ArrowRight, Target, Eye, Heart, Users, Award, TrendingUp, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We build trust through transparency, honesty, and ethical business practices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership with our clients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering quality that exceeds expectations.",
  },
]

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in tech innovation.",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Full-stack expert passionate about scalable architecture.",
  },
  {
    name: "Michael Park",
    role: "Head of AI",
    bio: "Machine learning specialist driving AI innovation.",
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    bio: "Award-winning designer crafting memorable experiences.",
  },
  {
    name: "David Kim",
    role: "Head of Marketing",
    bio: "Data-driven marketer with global campaign expertise.",
  },
  {
    name: "Lisa Wang",
    role: "Project Manager",
    bio: "Agile expert ensuring seamless project delivery.",
  },
]

const milestones = [
  { year: "2018", title: "Founded", description: "DevelopersHub was born with a vision to transform digital experiences." },
  { year: "2019", title: "First Major Client", description: "Secured our first Fortune 500 client project." },
  { year: "2020", title: "AI Division Launch", description: "Expanded into AI solutions and automation services." },
  { year: "2022", title: "Global Expansion", description: "Opened offices in three new countries." },
  { year: "2024", title: "500+ Projects", description: "Reached milestone of 500+ successfully delivered projects." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                About <span className="text-primary">DevelopersHub</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                We are a team of passionate technologists, designers, and strategists dedicated to transforming businesses through innovative digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-primary/20">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses of all sizes with cutting-edge technology solutions that drive growth, efficiency, and innovation. We bridge the gap between complex technology and real-world business needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-primary/20">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the global leader in digital transformation, recognized for our innovative solutions, exceptional talent, and unwavering commitment to client success. We envision a future where technology amplifies human potential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    DevelopersHub Corporation was founded in 2018 by a group of passionate technologists who believed that every business deserves access to world-class digital solutions.
                  </p>
                  <p>
                    What started as a small software development studio has grown into a full-service digital agency serving clients across the globe. Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to excellence.
                  </p>
                  <p>
                    Today, we combine deep technical expertise with creative innovation to help businesses navigate the digital landscape. From startups to Fortune 500 companies, we partner with organizations to build solutions that make a real impact.
                  </p>
                </div>
                <Button className="mt-6" asChild>
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl">
                  <div className="absolute inset-4 bg-card rounded-2xl border border-border p-8 flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">7+</div>
                        <div className="text-sm text-muted-foreground">Years of Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">500+</div>
                        <div className="text-sm text-muted-foreground">Projects Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">50+</div>
                        <div className="text-sm text-muted-foreground">Team Members</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">30+</div>
                        <div className="text-sm text-muted-foreground">Countries Served</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="bg-card text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground">Key milestones in our growth story</p>
            </div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1.5" />
                    <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                      <Card className="bg-card inline-block">
                        <CardContent className="p-4">
                          <div className="text-primary font-bold text-lg mb-1">{milestone.year}</div>
                          <h3 className="font-semibold mb-1">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Talented individuals dedicated to delivering excellence
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member) => (
                <Card key={member.name} className="bg-card overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-primary text-sm mb-2">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Grow Together?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their digital presence with DevelopersHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/booking">
                  Schedule a Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
