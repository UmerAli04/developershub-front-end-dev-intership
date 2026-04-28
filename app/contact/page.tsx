"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send, Calendar, Linkedin, Twitter, Github, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@developershub.com",
    href: "mailto:hello@developershub.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Tech Street, San Francisco, CA 94105",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM PST",
    href: "#",
  },
]

const services = [
  "Software Development",
  "AI Solutions",
  "AI Content Generation",
  "Digital Marketing",
  "Post Production",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Have a project in mind? {"We'd"} love to hear from you. Send us a message and {"we'll"} respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground mb-6">
                    Reach out through any of these channels or fill out the form.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <h3 className="font-medium mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                      { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                      { icon: Github, href: "https://github.com", label: "GitHub" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-card">
                  <CardContent className="p-6 sm:p-8">
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. {"We'll"} get back to you within 24 hours.
                        </p>
                        <Button onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            firstName: "",
                            lastName: "",
                            email: "",
                            company: "",
                            service: "",
                            message: "",
                          })
                        }}>
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="firstName" className="text-sm font-medium">
                              First Name <span className="text-destructive">*</span>
                            </label>
                            <Input
                              id="firstName"
                              name="firstName"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                              className="bg-background"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="lastName" className="text-sm font-medium">
                              Last Name <span className="text-destructive">*</span>
                            </label>
                            <Input
                              id="lastName"
                              name="lastName"
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                              className="bg-background"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email <span className="text-destructive">*</span>
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="bg-background"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium">
                              Company
                            </label>
                            <Input
                              id="company"
                              name="company"
                              placeholder="Your Company"
                              value={formData.company}
                              onChange={handleChange}
                              className="bg-background"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="service" className="text-sm font-medium">
                            Service {"You're"} Interested In
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message <span className="text-destructive">*</span>
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="bg-background resize-none"
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin mr-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                              </span>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Book Meeting CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prefer a Live Conversation?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skip the back-and-forth and book a call directly with our team. {"We'll"} discuss your project in detail and provide personalized recommendations.
            </p>
            <Button size="lg" asChild>
              <Link href="/booking">
                Book a Meeting
                <Calendar className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
