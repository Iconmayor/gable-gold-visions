import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const serviceOptions = [
  "Building Construction",
  "Roofing Services",
  "Interior Design",
  "Custom Furniture",
  "Building Materials Supply",
  "Other",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container text-center">
          <h1 className="font-heading text-3xl font-bold md:text-5xl">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="mt-4 text-base opacity-80">Get in touch for a free consultation or quote.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Send Us a Message</h2>
              {submitted ? (
                <div className="rounded-lg border border-accent bg-accent/10 p-8 text-center">
                  <Send className="mx-auto mb-4 h-10 w-10 text-accent" />
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/iconmayor1@gmail.com"
                  method="POST"
                  onSubmit={() => setSubmitted(true)}
                  className="space-y-4"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New enquiry from GOD IS ABLE website" />
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="+234..."
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1 block text-sm font-medium text-foreground">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Address</h3>
                    <p className="text-sm text-muted-foreground">Sanyo Area, Ibadan, Nigeria<br />Serving Lagos & Ibadan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground">+2348060731865<br />+2349167587995</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      adebayooluwasegungideon@gmail.com<br />iconmayor1@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
