export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Khalid Al-Rashid",
    role: "CEO",
    company: "Al Noor Trading Group",
    content:
      "Barq Studio transformed our entire sales operation. The CRM they built didn't just replace our legacy systems — it gave our teams superpowers. Lead conversion is up 47% and our sales cycle has never been faster.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    role: "CTO",
    company: "MetricFlow Inc.",
    content:
      "We needed a platform that could process millions of events in real-time without breaking a sweat. Barq Studio delivered exactly that, plus a UI that our customers actually enjoy using. Exceptional engineering quality.",
    rating: 5,
  },
  {
    id: "3",
    name: "Omar Hassan",
    role: "Product Director",
    company: "Nova Digital Bank",
    content:
      "Launching a banking app is incredibly complex. Barq Studio navigated regulatory requirements, security standards, and tight deadlines with remarkable professionalism. Our app hit 250K downloads in 90 days.",
    rating: 5,
  },
  {
    id: "4",
    name: "Fatima Al-Zahra",
    role: "Operations Manager",
    company: "Gulf Shield Insurance",
    content:
      "The analytics dashboard Barq Studio built changed how our underwriters work. Reports that took hours now generate in seconds. The ROI was visible within the first month of deployment.",
    rating: 5,
  },
  {
    id: "5",
    name: "James Chen",
    role: "Founder",
    company: "Horizon Properties",
    content:
      "Our old website was embarrassing. Barq Studio gave us a platform that competes with international PropTech leaders. Mobile traffic tripled and our agents finally have proper lead management tools.",
    rating: 5,
  },
  {
    id: "6",
    name: "Dr. Layla Mansour",
    role: "Medical Director",
    company: "MedCare Clinics",
    content:
      "Migrating 18 clinics from paper records to a digital system seemed impossible. Barq Studio made it seamless. Our doctors now spend their time with patients, not paperwork. Truly life-changing for our practice.",
    rating: 5,
  },
];
