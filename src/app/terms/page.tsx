"use client";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50/30 via-white to-orange-50/20">
      <Navigation />

      <main className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: October 22, 2025
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 rounded-4xl p-12 space-y-10">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                By accessing and using SSPPOS services ("Services"), you accept
                and agree to be bound by these Terms and Conditions ("Terms").
                If you do not agree to these Terms, please do not use our
                Services. These Terms apply to all users, including restaurants,
                customers, and visitors.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                2. Description of Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                SSPPOS provides a comprehensive restaurant management platform
                including:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li>QR code menu scanning and ordering (Scan, Split, Pay)</li>
                <li>Restaurant management dashboard (SSP Manager)</li>
                <li>Mobile order taking system (SSP Waiter)</li>
                <li>Kitchen display system (SSP Kitchen - Coming Soon)</li>
                <li>Payment processing and bill splitting</li>
                <li>Analytics and reporting tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                3. User Accounts and Registration
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                To use certain features of our Services, you must create an
                account:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining account security</li>
                <li>You must be at least 18 years old to create an account</li>
                <li>You may not share your account credentials</li>
                <li>
                  You must notify us immediately of any unauthorized access
                </li>
                <li>One account per restaurant/business entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                4. Subscription and Payments
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Our Services operate on a subscription basis:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li>
                  Subscription fees are billed in advance on a monthly or annual
                  basis
                </li>
                <li>Prices are subject to change with 30 days' notice</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>You authorize us to charge your payment method on file</li>
                <li>Failed payments may result in service suspension</li>
                <li>Transaction fees may apply to payment processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                5. Acceptable Use Policy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit malicious code or viruses</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the Services for fraudulent purposes</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Reverse engineer or copy our software</li>
                <li>Resell or redistribute our Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                6. Intellectual Property Rights
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                All content, features, and functionality of our Services,
                including but not limited to text, graphics, logos, icons,
                images, audio clips, and software, are the exclusive property of
                SSPPOS and are protected by international copyright, trademark,
                and other intellectual property laws. You may not copy, modify,
                distribute, or create derivative works without our express
                written permission.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                7. User Content and Data
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Regarding content and data you provide:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li>You retain ownership of your content and data</li>
                <li>
                  You grant us a license to use your data to provide Services
                </li>
                <li>You are responsible for the accuracy of your data</li>
                <li>We may use aggregated, anonymized data for analytics</li>
                <li>You must comply with all data protection regulations</li>
                <li>Regular backups are your responsibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                8. Service Availability and Support
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We strive to provide 99.9% uptime but cannot guarantee
                uninterrupted service. We may perform scheduled maintenance with
                advance notice. Technical support is available through our
                designated support channels. Response times may vary based on
                your subscription tier and issue severity.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li>Services are provided "as is" without warranties</li>
                <li>We are not liable for indirect or consequential damages</li>
                <li>
                  Our total liability is limited to fees paid in the last 12
                  months
                </li>
                <li>
                  We are not responsible for third-party services or content
                </li>
                <li>You use the Services at your own risk</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                10. Indemnification
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                You agree to indemnify and hold harmless SSPPOS, its affiliates,
                and their respective officers, directors, employees, and agents
                from any claims, damages, losses, liabilities, and expenses
                (including legal fees) arising from your use of the Services,
                violation of these Terms, or infringement of any third-party
                rights.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                11. Termination
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Either party may terminate the agreement:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li>You may cancel your subscription at any time</li>
                <li>We may suspend or terminate for Terms violations</li>
                <li>We may discontinue Services with 90 days' notice</li>
                <li>
                  Upon termination, your access will be immediately revoked
                </li>
                <li>You may export your data within 30 days of termination</li>
                <li>Certain provisions survive termination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                12. Dispute Resolution
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Any disputes arising from these Terms or use of Services shall
                first be attempted to be resolved through good faith
                negotiations. If negotiations fail, disputes shall be resolved
                through binding arbitration in accordance with applicable
                arbitration rules, except where prohibited by law. Class action
                lawsuits and class-wide arbitration are waived.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                13. Governing Law
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Jurisdiction], without regard to its
                conflict of law provisions. You agree to submit to the exclusive
                jurisdiction of the courts located in [Your Jurisdiction].
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                14. Changes to Terms
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                provide notice of material changes via email or through the
                Services. Your continued use of the Services after changes
                become effective constitutes acceptance of the revised Terms. If
                you do not agree to the changes, you must stop using the
                Services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                15. Miscellaneous
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Additional provisions:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2 ml-4">
                <li>
                  These Terms constitute the entire agreement between parties
                </li>
                <li>
                  If any provision is invalid, the remainder remains in effect
                </li>
                <li>Failure to enforce a right does not waive that right</li>
                <li>You may not assign these Terms without our consent</li>
                <li>Notices must be sent to designated contact addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                16. Contact Information
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-orange-50/50 border-2 border-orange-100 rounded-2xl p-6">
                <p className="text-lg text-gray-700 font-medium">
                  Email: hello@ssppos.com
                </p>
                <p className="text-lg text-gray-700 font-medium">
                  Address: ON, Canada
                </p>
              </div>
            </section>

            <section className="border-t-2 border-gray-200 pt-8">
              <p className="text-lg text-gray-600 leading-relaxed italic">
                By using SSPPOS services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and Conditions.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
