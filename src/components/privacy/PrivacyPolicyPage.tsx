import { Mail, Phone } from "lucide-react";

const PRIVACY_CONTACTS = {
  email: "info@rumanaholisticyoga.com",
  phones: ["+971502132529", "+97143967648"],
} as const;

const body = "text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7";
const sectionHeader = "font-display text-2xl font-semibold leading-tight text-forest";
const section = "mt-12 border-t border-light-sage pt-8 sm:mt-14";

export function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pb-10 pt-16 text-center lg:pb-14 lg:pt-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-forest sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-gold" aria-hidden="true" />
          <p className="mt-5 text-left text-sm leading-relaxed text-muted-foreground sm:text-base">
            Your privacy matters to us. Learn how Rumana Rab Holistic Yoga collects, uses and
            protects your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto w-full max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        {/* Introductory paragraphs */}
        <section className="space-y-4">
          <p className={body}>
            Thank you for visiting our website. This privacy policy tells you how we use personal
            information collected at this site. Please read this privacy policy before using the
            site or submitting any personal information. By using the site, you are accepting the
            practices described in this privacy policy. These practices may be changed, but any
            changes will be posted, and changes will only apply to activities and information on a
            going forward, not retroactive basis. You are encouraged to review the privacy policy
            whenever you visit the site to make sure that you understand how any personal
            information you provide will be used.
          </p>
          <p className={body}>
            Note: the privacy practices set forth in this privacy policy are for this website only.
            If you link to other websites, please review the privacy policies posted at those sites.
          </p>
        </section>

        {/* Collection of Information */}
        <section className={section}>
          <h2 className={`mb-4 ${sectionHeader}`}>Collection of Information</h2>
          <p className={body}>
            We collect personally identifiable information, like names, postal addresses, email
            addresses, etc. when voluntarily submitted by our visitors. The information you provide
            is used to fulfill your specific request. This information is only used to fulfill your
            specific request, unless you give us permission to use it in another manner, for
            example, to add you to one of our mailing lists.
          </p>
        </section>

        {/* Cookie/Tracking Technology */}
        <section className={section}>
          <h2 className={`mb-4 ${sectionHeader}`}>Cookie/Tracking Technology</h2>
          <p className={body}>
            The Site may use cookie and tracking technology depending on the features offered.
            Cookies and tracking technology are useful for gathering information such as browser
            type and operating system, tracking the number of visitors to the Site, and
            understanding how visitors use the Site. Cookies can also help customize the Site for
            visitors. Personal information cannot be collected via cookies and other tracking
            technology. However, if you previously provided personally identifiable information,
            cookies may be tied to such information. Aggregate cookies and tracking information may
            be shared with third parties.
          </p>
        </section>

        {/* Distribution of Information */}
        <section className={section}>
          <h2 className={`mb-4 ${sectionHeader}`}>Distribution of Information</h2>
          <p className={body}>
            We may share information with governmental agencies or other companies assisting us in
            fraud prevention or investigation. We may do so when:
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-muted-foreground marker:text-forest sm:pl-6 sm:text-base sm:leading-7">
            <li>permitted or required by law; or</li>
            <li>
              trying to protect against or prevent actual or potential fraud or unauthorized
              transactions; or
            </li>
            <li>investigating fraud that has already taken place.</li>
          </ol>
          <p className={`mt-4 ${body}`}>
            The information is not provided to these companies for marketing purposes.
          </p>
        </section>

        {/* Commitment to Data Security */}
        <section className={section}>
          <h2 className={`mb-4 ${sectionHeader}`}>Commitment to Data Security</h2>
          <div className="space-y-4">
            <p className={body}>
              Your personally identifiable information is kept secure. Only authorized employees,
              agents, and contractors (who have agreed to keep information secure and confidential)
              have access to this information.
            </p>
            <p className={body}>
              All emails and newsletters from this site allow you to opt out for further mailings.
            </p>
          </div>
        </section>

        {/* Privacy Contact Information */}
        <section className={section}>
          <h2 className={`mb-4 ${sectionHeader}`}>Privacy Contact Information</h2>
          <p className={body}>
            If you have any questions, concerns, or comments about our privacy policy you may
            contact us using the information below:
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div>
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-forest">
                Email
              </p>
              <a
                href={`mailto:${PRIVACY_CONTACTS.email}`}
                className="mt-1.5 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-forest hover:underline"
              >
                <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {PRIVACY_CONTACTS.email}
              </a>
            </div>

            <div>
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-forest">
                Phone
              </p>
              <span className="mt-1.5 flex flex-col items-start gap-1">
                {PRIVACY_CONTACTS.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-forest hover:underline"
                  >
                    <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
                    {phone}
                  </a>
                ))}
              </span>
            </div>
          </div>
        </section>

        {/* Final policy paragraph */}
        <section className={section}>
          <p className={body}>
            We reserve the right to make changes to this policy. Any changes to this policy will be
            posted.
          </p>
        </section>
      </div>
    </div>
  );
}
