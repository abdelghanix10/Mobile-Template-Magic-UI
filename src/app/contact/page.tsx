import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="relative pt-20 flex flex-col min-h-[calc(100vh-64px)] justify-center">
        <Section
          id="contact"
          title="Contact Us"
          subtitle="Get in touch"
          description="Have questions or feedback? We'd love to hear from you."
          className="container px-10"
        >
          <div className="max-w-xl mx-auto py-10">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message"
                />
              </div>
              <Button type="submit" className="w-full rounded-full text-white">
                Send Message
              </Button>
            </form>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
