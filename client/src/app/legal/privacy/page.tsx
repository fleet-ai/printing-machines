import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="main-content flex-1">
        <article className="content">
          <h1 className="text-3xl font-normal mb-8">Privacy Notice</h1>
          <p className="text-muted text-sm mb-8">Last updated: January 11, 2026</p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account,
            contact us, or otherwise communicate with us. This information may include your name,
            email address, and any other information you choose to provide.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services,
            to communicate with you, and to comply with legal obligations.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties
            without your consent, except as described in this policy or as required by law.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security
            of your personal information. However, no method of transmission over the Internet or
            electronic storage is completely secure.
          </p>

          <h2>5. Cookies and Tracking</h2>
          <p>
            We may use cookies and similar tracking technologies to collect information about your
            browsing activities. You can control cookies through your browser settings.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may also
            have the right to object to or restrict certain processing of your data.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect personal
            information from children under 13.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this privacy notice from time to time. We will notify you of any changes
            by posting the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this privacy notice, please contact us at
            privacy@printingmachines.ai.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
