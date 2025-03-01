"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, FileText, Eye, RefreshCw } from "lucide-react"
import { Button } from "./components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { fadeIn, staggerContainer } from "./lib/animation"
import { ProjectCard } from "./components/project-card"
import { ServiceCard } from "./components/service-card"
import { BlogPreview } from "./components/blog-preview"
import { Testimonial } from "./components/testimonial"
import { StatsCard } from "./components/stats-card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.jpg" alt="Construction site" fill className="object-cover opacity-40" priority />
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="container relative z-10 py-24 md:py-32"
        >
          <motion.h1 variants={fadeIn("up", 0.3)} className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            Building Excellence Through Quality Construction
          </motion.h1>
          <motion.p variants={fadeIn("up", 0.5)} className="text-lg md:text-xl mb-8 max-w-2xl">
            Cipta Mandiri Perkasa is your trusted partner for construction projects, delivering exceptional quality and
            reliability since 2010.
          </motion.p>
          <motion.div variants={fadeIn("up", 0.7)} className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">
                View Our Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              icon={<FileText className="h-8 w-8 text-primary" />}
              title="Articles"
              value="120+"
              description="Published articles"
            />
            <StatsCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Visitors"
              value="25K+"
              description="Monthly visitors"
            />
            <StatsCard
              icon={<Eye className="h-8 w-8 text-primary" />}
              title="Page Views"
              value="75K+"
              description="Monthly page views"
            />
            <StatsCard
              icon={<RefreshCw className="h-8 w-8 text-primary" />}
              title="Updates"
              value="Weekly"
              description="Fresh content"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Cipta Mandiri Perkasa</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2010, Cipta Mandiri Perkasa has established itself as a leading general contractor and
                supplier in Indonesia. We specialize in delivering high-quality construction services and materials to
                both public and private sector clients.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Professional team with 10+ years experience",
                  "High-quality materials and workmanship",
                  "On-time project completion",
                  "Competitive pricing",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/about-image.jpg" alt="Cipta Mandiri Perkasa team" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive construction services to meet all your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="General Construction"
              description="Complete construction services from planning to execution for residential and commercial projects."
              icon="/icons/construction.svg"
            />
            <ServiceCard
              title="Building Materials Supply"
              description="High-quality building materials including cement, steel, wood, and finishing materials."
              icon="/icons/materials.svg"
            />
            <ServiceCard
              title="Project Management"
              description="Professional project management to ensure your project is completed on time and within budget."
              icon="/icons/management.svg"
            />
            <ServiceCard
              title="Renovation"
              description="Expert renovation services to transform your existing space into something new and improved."
              icon="/icons/renovation.svg"
            />
            <ServiceCard
              title="Interior Design"
              description="Creative interior design solutions to make your space functional and aesthetically pleasing."
              icon="/icons/interior.svg"
            />
            <ServiceCard
              title="Consultation"
              description="Expert advice on construction planning, material selection, and project feasibility."
              icon="/icons/consultation.svg"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore our portfolio of successful projects across various sectors
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="industrial">Industrial</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Modern Office Complex"
                category="Commercial"
                image="/images/project1.jpg"
                slug="modern-office-complex"
              />
              <ProjectCard
                title="Luxury Apartment Building"
                category="Residential"
                image="/images/project2.jpg"
                slug="luxury-apartment-building"
              />
              <ProjectCard
                title="Manufacturing Facility"
                category="Industrial"
                image="/images/project3.jpg"
                slug="manufacturing-facility"
              />
              <ProjectCard
                title="Shopping Mall Renovation"
                category="Commercial"
                image="/images/project4.jpg"
                slug="shopping-mall-renovation"
              />
              <ProjectCard
                title="Residential Housing Complex"
                category="Residential"
                image="/images/project5.jpg"
                slug="residential-housing-complex"
              />
              <ProjectCard
                title="Warehouse Expansion"
                category="Industrial"
                image="/images/project6.jpg"
                slug="warehouse-expansion"
              />
            </TabsContent>
            <TabsContent value="residential" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Luxury Apartment Building"
                category="Residential"
                image="/images/project2.jpg"
                slug="luxury-apartment-building"
              />
              <ProjectCard
                title="Residential Housing Complex"
                category="Residential"
                image="/images/project5.jpg"
                slug="residential-housing-complex"
              />
            </TabsContent>
            <TabsContent value="commercial" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Modern Office Complex"
                category="Commercial"
                image="/images/project1.jpg"
                slug="modern-office-complex"
              />
              <ProjectCard
                title="Shopping Mall Renovation"
                category="Commercial"
                image="/images/project4.jpg"
                slug="shopping-mall-renovation"
              />
            </TabsContent>
            <TabsContent value="industrial" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Manufacturing Facility"
                category="Industrial"
                image="/images/project3.jpg"
                slug="manufacturing-facility"
              />
              <ProjectCard
                title="Warehouse Expansion"
                category="Industrial"
                image="/images/project6.jpg"
                slug="warehouse-expansion"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="Cipta Mandiri Perkasa delivered our office building project on time and within budget. Their attention to detail and quality workmanship exceeded our expectations."
              name="Budi Santoso"
              company="PT Global Innovations"
              image="/images/testimonial1.jpg"
            />
            <Testimonial
              quote="We've worked with many contractors, but Cipta Mandiri Perkasa stands out for their professionalism and commitment to quality. Highly recommended!"
              name="Siti Rahayu"
              company="Rahayu Properties"
              image="/images/testimonial2.jpg"
            />
            <Testimonial
              quote="The team at Cipta Mandiri Perkasa was responsive, professional, and delivered exceptional results for our warehouse expansion project."
              name="Hendro Wijaya"
              company="Wijaya Logistics"
              image="/images/testimonial3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Stay updated with the latest news and insights from the construction industry
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogPreview
              title="5 Trends Shaping the Future of Construction"
              excerpt="Explore the latest trends and innovations that are transforming the construction industry in 2023."
              date="March 15, 2023"
              author="Ahmad Rizki"
              category="Industry Trends"
              image="/images/blog1.jpg"
              slug="trends-shaping-construction"
            />
            <BlogPreview
              title="Sustainable Building Materials for Eco-Friendly Construction"
              excerpt="Discover sustainable building materials that reduce environmental impact without compromising quality."
              date="February 28, 2023"
              author="Dewi Putri"
              category="Sustainability"
              image="/images/blog2.jpg"
              slug="sustainable-building-materials"
            />
            <BlogPreview
              title="How to Choose the Right Contractor for Your Project"
              excerpt="Essential tips for selecting a reliable and qualified contractor for your construction project."
              date="January 20, 2023"
              author="Rudi Hartono"
              category="Tips & Advice"
              image="/images/blog3.jpg"
              slug="choosing-right-contractor"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8">Contact us today to discuss your construction needs and get a free quote.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

