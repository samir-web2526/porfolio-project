import NextLink from "next/link";

// Custom SVG Icons for brands since they are missing in this Lucide version
const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FacebookIcon size={20} />, href: "#" },
    { name: "Instagram", icon: <InstagramIcon size={20} />, href: "#" },
    { name: "Twitter", icon: <TwitterIcon size={20} />, href: "#" },
    { name: "LinkedIn", icon: <LinkedinIcon size={20} />, href: "#" },
  ];

  return (
    <footer className="w-full bg-background border-t border-white/10 relative z-10 lg:pl-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-16 max-w-7xl mx-auto w-full font-headline-xl text-sm tracking-wide">
        {/* Column 1: Identity */}
        <div className="flex flex-col space-y-6 w-full">
          <div className="text-2xl font-black text-secondary tracking-tighter">
            SAMIR BAISHNAB
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed w-full">
            Fullstack engineer specializing in architectural depth and digital clarity. Crafting performant systems within the midnight void of modern technology.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-on-surface font-bold uppercase tracking-widest text-xs">Quick Links</h3>
          <nav className="flex flex-col space-y-3">
            {quickLinks.map((link) => (
              <NextLink
                key={link.name}
                href={link.href}
                className="text-on-surface-variant hover:text-secondary hover:drop-shadow-[0_0_5px_rgba(65,228,192,0.5)] transition-all duration-300 font-body-md"
              >
                {link.name}
              </NextLink>
            ))}
          </nav>
        </div>

        {/* Column 3: Social & Interaction */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-on-surface font-bold uppercase tracking-widest text-xs">Connect</h3>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <NextLink
                key={link.name}
                aria-label={link.name}
                href={link.href}
                className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/10 hover:shadow-[0_0_15px_rgba(65,228,192,0.4)] hover:-translate-y-[2px] transition-all duration-300 bg-surface-container-low"
              >
                {link.icon}
              </NextLink>
            ))}
          </div>
          <div className="mt-4">
            <div className="h-1 w-24 bg-gradient-to-r from-secondary to-transparent rounded-full opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="w-full border-t border-outline-variant py-8">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-body-md text-xs w-full text-center text-on-surface-variant/60 tracking-wider">
            © {new Date().getFullYear()} Samir Baishnab. Architect of the Digital Void.
          </p>
        </div>
      </div>
    </footer>
  );
}
