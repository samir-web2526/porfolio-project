import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-24 lg:pb-12 border-t border-white/5 bg-surface-container-lowest relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 max-w-[1280px] mx-auto text-center md:text-left gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="text-white font-bold font-label-caps tracking-widest text-xs">SAMIR BAISHNAB</span>
          <span className="hidden md:block w-[1px] h-4 bg-white/20"></span>
          <span className="text-on-surface/50 font-headline-md text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Built with Technical Precision.
          </span>
        </div>
        <div className="flex gap-8">
          <Link
            href="#"
            className="font-headline-md text-[10px] uppercase tracking-widest text-on-surface/50 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="font-headline-md text-[10px] uppercase tracking-widest text-on-surface/50 hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
