import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="main-content flex-1">
        <article className="content">
          <h1 className="text-3xl font-normal mb-8">Terms of Service</h1>
          <p className="text-muted text-sm mb-8">Last updated: January 11, 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms of Service
            and our Privacy Notice. If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            Printing Machines Lab provides artificial intelligence research, tools, and related
            services. We reserve the right to modify, suspend, or discontinue any part of our
            services at any time.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials
            and for all activities that occur under your account. You agree to notify us immediately
            of any unauthorized use of your account.
          </p>

          <h2>4. Acceptable Use</h2>
          <p>
            You agree not to use our services for any unlawful purpose or in any way that could
            damage, disable, or impair our services. You may not attempt to gain unauthorized
            access to any part of our services or systems.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our services are owned by Printing Machines Lab
            and are protected by intellectual property laws. You may not copy, modify, distribute,
            or create derivative works without our prior written consent.
          </p>

          <h2>6. User Content</h2>
          <p>
            You retain ownership of any content you submit to our services. By submitting content,
            you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and
            display such content in connection with our services.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
            either express or implied. We do not guarantee that our services will be uninterrupted,
            secure, or error-free.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Printing Machines Lab shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising out of or
            related to your use of our services.
          </p>

          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Printing Machines Lab and its affiliates from
            any claims, damages, or expenses arising from your use of our services or violation
            of these terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the
            State of California, without regard to its conflict of law provisions.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify you of any
            material changes by posting the updated terms on this page.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at
            legal@printingmachines.ai.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
