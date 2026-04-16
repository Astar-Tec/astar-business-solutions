import { Link } from "@tanstack/react-router";
import { Download, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, whatsappLink } from "../lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We help African businesses grow through smart digital systems —
              websites, booking platforms, automation, and AI built for the
              real world.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                Based in {CONTACT.location}
              </p>
              <p className="text-xs">{CONTACT.serving}</p>
              <p>
                <span className="text-foreground/80">CIPC Registration:</span>{" "}
                {CONTACT.cipc}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
              <li><Link to="/work" className="text-muted-foreground hover:text-foreground">Our Work</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Mail className="h-4 w-4 text-gold" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneTel}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Phone className="h-4 w-4 text-gold" />
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <MessageCircle className="h-4 w-4 text-gold" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li>
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-4 w-4 text-gold" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Astar Technologies (Pty) Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="/astar-logo.svg"
              download="astar-technologies-logo.svg"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Download Astar Technologies logo"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download logo</span>
            </a>
            <p>Built in Africa. For the world.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
