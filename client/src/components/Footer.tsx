import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <div className="footer-inner">
        <span>
          <Link href="/">Printing Machines Lab</Link> © 2026
        </span>
        <span>·</span>
        <Link href="/legal/tos">Terms of service</Link>
        <span>·</span>
        <Link href="/legal/privacy">Privacy notice</Link>
      </div>
    </footer>
  );
}
