"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Calendar, 
  Clock, 
  Video, 
  Phone, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight,
  User,
  Mail,
  Building,
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

const meetingTypes = [
  {
    id: "discovery",
    title: "Discovery Call",
    duration: "30 min",
    description: "Quick intro call to discuss your needs and see if we are a good fit.",
    icon: Phone,
  },
  {
    id: "consultation",
    title: "Project Consultation",
    duration: "60 min",
    description: "In-depth discussion about your project requirements and solutions.",
    icon: Video,
  },
  {
    id: "demo",
    title: "Product Demo",
    duration: "45 min",
    description: "See our solutions in action with a personalized demonstration.",
    icon: Video,
  },
]

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
]

// Generate calendar days for current month view
function generateCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startingDay = firstDay.getDay()
  const totalDays = lastDay.getDate()
  
  const days: (number | null)[] = []
  
  // Add empty slots for days before the first day of the month
  for (let i = 0; i < startingDay; i++) {
    days.push(null)
  }
  
  // Add all days of the month
  for (let i = 1; i <= totalDays; i++) {
    days.push(i)
  }
  
  return days
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState("")
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const calendarDays = generateCalendarDays(currentYear, currentMonth)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const isDateSelectable = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    const dayOfWeek = date.getDay()
    return date >= today && dayOfWeek !== 0 && dayOfWeek !== 6
  }

  const handleDateSelect = (day: number) => {
    if (isDateSelectable(day)) {
      setSelectedDate(new Date(currentYear, currentMonth, day))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate booking submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsBooked(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const selectedMeetingType = meetingTypes.find(t => t.id === selectedType)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Book a <span className="text-primary">Meeting</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Schedule a call with our team to discuss your project. Choose a time that works best for you.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Interface */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {isBooked ? (
              /* Success State */
              <Card className="bg-card">
                <CardContent className="p-8 sm:p-12 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Meeting Booked!</h2>
                  <p className="text-muted-foreground mb-2">
                    Your {selectedMeetingType?.title} has been scheduled for:
                  </p>
                  <p className="text-xl font-semibold text-primary mb-6">
                    {selectedDate?.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })} at {selectedTime}
                  </p>
                  <p className="text-muted-foreground mb-8">
                    {"We've"} sent a confirmation email to {formData.email} with all the details and a calendar invite.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={() => {
                      setIsBooked(false)
                      setStep(1)
                      setSelectedType("")
                      setSelectedDate(null)
                      setSelectedTime("")
                      setFormData({ name: "", email: "", company: "", notes: "" })
                    }}>
                      Book Another Meeting
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/">Return to Home</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                          step >= s 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary text-muted-foreground"
                        )}>
                          {s}
                        </div>
                        {s < 3 && (
                          <div className={cn(
                            "w-12 sm:w-20 h-1 mx-2 rounded transition-colors",
                            step > s ? "bg-primary" : "bg-secondary"
                          )} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 1: Select Meeting Type */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-center mb-8">Select Meeting Type</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {meetingTypes.map((type) => (
                        <Card 
                          key={type.id}
                          className={cn(
                            "cursor-pointer transition-all hover:border-primary/50",
                            selectedType === type.id && "border-primary bg-primary/5"
                          )}
                          onClick={() => setSelectedType(type.id)}
                        >
                          <CardContent className="p-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                              <type.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-1">{type.title}</h3>
                            <p className="text-primary text-sm mb-2">{type.duration}</p>
                            <p className="text-muted-foreground text-sm">{type.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <div className="flex justify-center mt-8">
                      <Button 
                        size="lg" 
                        onClick={() => setStep(2)}
                        disabled={!selectedType}
                      >
                        Continue
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Select Date & Time */}
                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-center mb-8">Select Date & Time</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Calendar */}
                      <Card className="bg-card">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <button 
                              onClick={prevMonth}
                              className="p-2 hover:bg-secondary rounded-lg transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <h3 className="font-semibold">
                              {monthNames[currentMonth]} {currentYear}
                            </h3>
                            <button 
                              onClick={nextMonth}
                              className="p-2 hover:bg-secondary rounded-lg transition-colors"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="grid grid-cols-7 gap-1 mb-2">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                              <div key={day} className="text-center text-xs text-muted-foreground py-2">
                                {day}
                              </div>
                            ))}
                          </div>

                          <div className="grid grid-cols-7 gap-1">
                            {calendarDays.map((day, index) => (
                              <button
                                key={index}
                                disabled={day === null || !isDateSelectable(day)}
                                onClick={() => day && handleDateSelect(day)}
                                className={cn(
                                  "aspect-square flex items-center justify-center text-sm rounded-lg transition-colors",
                                  day === null && "invisible",
                                  day && !isDateSelectable(day) && "text-muted-foreground/50 cursor-not-allowed",
                                  day && isDateSelectable(day) && "hover:bg-secondary cursor-pointer",
                                  selectedDate?.getDate() === day && 
                                  selectedDate?.getMonth() === currentMonth && 
                                  selectedDate?.getFullYear() === currentYear && 
                                  "bg-primary text-primary-foreground hover:bg-primary"
                                )}
                              >
                                {day}
                              </button>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Time Slots */}
                      <Card className="bg-card">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <Clock className="w-5 h-5 text-primary" />
                            <h3 className="font-semibold">
                              {selectedDate 
                                ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
                                : "Select a date"
                              }
                            </h3>
                          </div>

                          {selectedDate ? (
                            <div className="grid grid-cols-2 gap-2">
                              {timeSlots.map((time) => (
                                <button
                                  key={time}
                                  onClick={() => setSelectedTime(time)}
                                  className={cn(
                                    "py-3 px-4 rounded-lg text-sm font-medium transition-colors",
                                    selectedTime === time
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                                  )}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <div className="flex items-center justify-center h-48 text-muted-foreground">
                              <div className="text-center">
                                <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                <p>Please select a date first</p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                      <Button variant="outline" onClick={() => setStep(1)}>
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                      <Button 
                        size="lg" 
                        onClick={() => setStep(3)}
                        disabled={!selectedDate || !selectedTime}
                      >
                        Continue
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Enter Details */}
                {step === 3 && (
                  <div className="max-w-xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">Enter Your Details</h2>
                    
                    {/* Summary */}
                    <Card className="bg-primary/5 border-primary/20 mb-6">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            {selectedMeetingType && <selectedMeetingType.icon className="w-6 h-6 text-primary" />}
                          </div>
                          <div>
                            <h3 className="font-semibold">{selectedMeetingType?.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {selectedDate?.toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                month: 'long', 
                                day: 'numeric' 
                              })} at {selectedTime}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card">
                      <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Full Name <span className="text-destructive">*</span>
                            </label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="bg-background"
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                              <Mail className="w-4 h-4" />
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
                            <label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                              <Building className="w-4 h-4" />
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

                          <div className="space-y-2">
                            <label htmlFor="notes" className="text-sm font-medium flex items-center gap-2">
                              <MessageSquare className="w-4 h-4" />
                              Additional Notes
                            </label>
                            <Textarea
                              id="notes"
                              name="notes"
                              placeholder="Anything you'd like us to know before the meeting..."
                              value={formData.notes}
                              onChange={handleChange}
                              rows={3}
                              className="bg-background resize-none"
                            />
                          </div>

                          <div className="flex gap-4 pt-4">
                            <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                              <ChevronLeft className="w-4 h-4 mr-2" />
                              Back
                            </Button>
                            <Button type="submit" className="flex-1" disabled={isSubmitting}>
                              {isSubmitting ? (
                                <>
                                  <span className="animate-spin mr-2">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                  </span>
                                  Booking...
                                </>
                              ) : (
                                <>
                                  Book Meeting
                                  <CheckCircle className="w-4 h-4 ml-2" />
                                </>
                              )}
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
