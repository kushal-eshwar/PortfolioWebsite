"use client"
import { usePathname } from "next/navigation"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const pathname = usePathname()
  return (
    <footer className="border-t border-border bg-card/50 px-4 py-12 sm:px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold tracking-wider text-primary">K</span>
              <span className="text-xl font-semibold tracking-wide text-foreground">KUSHAL</span>
            </div>
            <p className="text-xm text-muted-foreground max-w-md leading-relaxed">
             Software Engineer focused on AI, building scalable LLM-powered systems and production-grade applications to solve real-world problems.
            </p>
            <p className="text-xm text-muted-foreground mt-2">
              United States • kushalgudibandi@gmail.com • +1 850-980-1485
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xm font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {/* <li>
                <Link href="/experience" className="hover:text-foreground transition-colors text-xm">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors text-xm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-foreground transition-colors text-xm">
                  Skills
                </Link>
              </li> */}

<li>
  <Link
    href="/experience"
    className={`transition-colors text-sm ${
      pathname === "/experience"
        ? "text-foreground font-semibold"
        : "text-muted-foreground hover:text-foreground"
    }`}
  >
    Experience
  </Link>
</li>

<li>
  <Link
    href="/projects"
    className={`transition-colors text-sm ${
      pathname === "/projects"
        ? "text-foreground font-semibold"
        : "text-muted-foreground hover:text-foreground"
    }`}
  >
    Projects
  </Link>
</li>

<li>
  <Link
    href="/skills"
    className={`transition-colors text-sm ${
      pathname === "/skills"
        ? "text-foreground font-semibold"
        : "text-muted-foreground hover:text-foreground"
    }`}
  >
    Skills
  </Link>
</li>

            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xm font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com/kushal-eshwar"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kushal-eshwar-reddy-gudibandi-b92420167/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:kushalgudibandi@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xm text-muted-foreground">© 2026 Kushal Eshwar Reddy Gudibandi. All rights reserved.</p>
          <p className="text-xm text-muted-foreground">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
