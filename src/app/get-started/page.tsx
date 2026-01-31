import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function GetStartedPage() {
  return (
    <>
      <Header />
      <main className="relative pt-20 flex flex-col min-h-[calc(100vh-64px)] justify-center">
        <Section
          id="get-started"
          title="Get Started"
          subtitle="Ready to transform your scheduling?"
          description="Create your account and start using Cal AI today."
          className="container px-10"
        >
          <div className="max-w-md mx-auto py-20 text-center space-y-8">
            <div className="space-y-4">
              <Button className="w-full h-12 rounded-full text-white flex items-center justify-center gap-2">
                <Icons.google className="w-5 h-5" />
                Continue with Google
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 rounded-full flex items-center justify-center gap-2"
              >
                <Icons.github className="w-5 h-5" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Contact sales for enterprise plans
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
