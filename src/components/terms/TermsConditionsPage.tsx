import { Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";

const BODY = "text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7";
const SECTION_HEADER = "font-display text-2xl font-semibold leading-tight text-forest mb-4";
const SUB_HEADER = "text-base font-semibold text-forest";
const SECTION = "mt-12 border-t border-light-sage pt-8 sm:mt-14";
const LIST =
  "mt-4 space-y-2 pl-5 text-sm leading-6 text-muted-foreground marker:text-forest sm:pl-6 sm:text-base sm:leading-7";

const CONTACTS = {
  email: "info@rumanaholisticyoga.com",
  phones: ["+971502132529", "+97143967648"],
} as const;

function Paragraph({ children }: { children: ReactNode }) {
  return <p className={BODY}>{children}</p>;
}

function SubSection({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className={SUB_HEADER}>{id}</h3>
      <div className="mt-2 space-y-3">{children}</div>
    </div>
  );
}

function SubSectionGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={SECTION}>
      <h2 className={SECTION_HEADER}>{title}</h2>
      {children}
    </section>
  );
}

export function TermsConditionsPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pb-10 pt-16 text-center lg:pb-14 lg:pt-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-forest sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-gold" aria-hidden="true" />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Please read these terms carefully before using our studio, classes, and services.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto w-full max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="space-y-4">
          <Paragraph>
            The following Terms and Conditions have been prepared for membership and classes at
            Suite #103, Office Court Building, Next to Oud Metha Metro Station, Dubai, U.A.E P.O Box
            – 128614.
          </Paragraph>
        </section>

        {/* 1. Interpretation and Variation */}
        <SubSectionGroup title="1. Interpretation and Variation">
          <SubSection id="1.1">
            <Paragraph>
              In the Terms &amp; Conditions, the following definitions apply:
              <br />
              Company means Rumana Rab Holistic Yoga. User means any person that has signed a
              Registration Form online which has been accepted by the Company. Registration Form
              means the registration and application form signed by each Member. Terms &amp;
              Conditions are as defined here.
              <br />
              Website means www.rumanaholisticyoga.com 
            </Paragraph>
          </SubSection>
          <SubSection id="1.2">
            <Paragraph>
              The Terms &amp; Conditions shall be governed by the laws of Dubai and subject to the
              exclusive jurisdiction of the Dubai courts.
            </Paragraph>
          </SubSection>
          <SubSection id="1.3">
            <Paragraph>
              The Company reserves the right to vary or revoke any of the Terms &amp; Conditions
              from time to time, which it may consider necessary or suitable for the regulation of
              the governance of the Studio &amp; the conduct of Members. Any such changes will be
              published on our websites &amp;, until revoked, are binding on Members.
            </Paragraph>
          </SubSection>
        </SubSectionGroup>

        {/* 2. Membership */}
        <SubSectionGroup title="2. Membership">
          <SubSection id="2.1">
            <Paragraph>
              Subject to condition 2.2, when a person has signed a Registration Form or ticked the
              terms &amp; conditions online, they shall become a Member of the Studio or a studio
              user.
            </Paragraph>
          </SubSection>
          <SubSection id="2.2">
            <Paragraph>
              Acceptance of a person as a member or a studio user is at the discretion of the
              Company.
            </Paragraph>
          </SubSection>
          <SubSection id="2.3">
            <Paragraph>
              The Company reserves the right to withdraw, suspend or refuse to renew the membership
              of any Member or User whose conduct is, or may be deemed to be in the Company’s
              reasonable opinion, injurious to the character of the Studio or amounts to a breach of
              the Terms &amp; Conditions or where such expulsion is otherwise to be in the interests
              of the other members of the Studio. Any Member so expelled shall forfeit all
              privileges to membership &amp; shall not be entitled to any refund for any period
              during which his membership is suspended.
            </Paragraph>
          </SubSection>
          <SubSection id="2.4">
            <Paragraph>
              The Studio may run promotional introductory offers from time to time. These offers are
              exclusively for new students who are not already registered (Members/Users) with the
              Studio &amp; are not for repeat use.
            </Paragraph>
          </SubSection>
          <SubSection id="2.5">
            <ul className={`list-disc ${LIST}`}>
              <li>Fee Paid is nonrefundable.</li>
              <li>
                Classes Should be available within the stipulated timeframe of the opted package
                missed classes are not adjustable.
              </li>
              <li>No additional discounts on discounted offers/packages.</li>
            </ul>
          </SubSection>
        </SubSectionGroup>

        {/* 3. Use of Facilities */}
        <SubSectionGroup title="3. Use of Facilities">
          <SubSection id="3.1">
            <Paragraph>
              A Member is entitled to use the company facilities during scheduled class times
              providing always that the Studio may at any time withdraw all or part of its
              facilities for any period or periods &amp; with notice, where practicable, in
              connection with any leaning, repair, alteration or maintenance work or for reasons
              beyond the control of the Studio or the Company.
            </Paragraph>
          </SubSection>
        </SubSectionGroup>

        {/* 4. Fitness & Health */}
        <SubSectionGroup title="4. Fitness & Health">
          <SubSection id="4.1">
            <Paragraph>
              Members are advised not to undertake strenuous physical activities without first
              seeking medical advice if they have concerns over their physical condition. The
              company reserves the right to refuse access to any Member if, in its absolute
              discretion, it considers that the health of the individual concerned may be endangered
              by the use of such facilities.
            </Paragraph>
          </SubSection>
          <SubSection id="4.2">
            <Paragraph>
              Members with the following conditions should consult a doctor: low/high blood pressure
              &amp; cardiac irregularities. If there is any doubt, the Member should consult his
              doctor. Members &amp; their guests must notify the Studio of any circumstances
              affecting their health which may be exacerbated through continued use of the Studio.
            </Paragraph>
          </SubSection>
          <SubSection id="4.3">
            <Paragraph>Members are required to follow the instructions of the teacher.</Paragraph>
          </SubSection>
        </SubSectionGroup>

        {/* 5. Safety & Hygiene */}
        <SubSectionGroup title="5. Safety & Hygiene">
          <SubSection id="5.1">
            <Paragraph>
              Smoking is not allowed anywhere in the studio of the lounge. Please avoid using spray
              deodorants, hairsprays, etc. to avoid bothering fellow students.
            </Paragraph>
          </SubSection>
          <SubSection id="5.2">
            <Paragraph>
              In the event of a fire, Members are asked to make their way to the nearest available
              exit.
            </Paragraph>
          </SubSection>
        </SubSectionGroup>

        {/* 6. General Guidelines */}
        <SubSectionGroup title="6. General Guidelines">
          <SubSection id="6.1">
            <Paragraph>
              Members must at all times observe the company guidelines which may be notified to them
              from time to time &amp; are requested to comply with any reasonable directions which
              the management of the Studio may issue to ensure the smooth operation of the Studio
              for the convenience of all Members.
            </Paragraph>
          </SubSection>
          <SubSection id="6.2">
            <Paragraph>The Company reserves the right to refuse admission to the Studio.</Paragraph>
          </SubSection>
          <SubSection id="6.3">
            <Paragraph>
              The Company may, if a member so wishes, communicate with the Member by email. By
              providing an email address to the Company to the Member consents to receive email
              communications from the Company, including notices pursuant to the Terms &amp;
              Conditions. The Member also accepts any risk that email may not be a fully secure
              &amp; confidential means of communication. The Company will not be liable for any loss
              or damage suffered as a result of communicating with a Member in this manner.
            </Paragraph>
          </SubSection>
        </SubSectionGroup>

        {/* 7. Limitation of Liability */}
        <SubSectionGroup title="7. Limitation of Liability">
          <SubSection id="7.1">
            <Paragraph>
              The Company cannot be held responsible for any service or equipment not being
              available for whatever reason. The Company reserves the right to make alterations to
              the types of facilities provided, without notice &amp; in its absolute discretion. The
              Company shall not be liable for any loss occasioned by such alterations except in so
              far as loss is by law incapable of exclusion.
            </Paragraph>
          </SubSection>
          <SubSection id="7.2">
            <Paragraph>
              It is the Member’s responsibility to ensure that they are capable of undergoing a
              routine of exercises provided by any program that they follow or class that they
              attend. Members accept the risk of injury from performing exercises &amp; are advised
              to consult their doctor prior to beginning any program or class. The Company accepts
              no liability for loss or damage to property or injury of Members or their guests to
              them on the Studio premises or outside the Studio except in so far as such loss,
              damage, or injury is by law incapable of exclusion.
            </Paragraph>
          </SubSection>
        </SubSectionGroup>

        {/* 8. Website Terms & Conditions */}
        <SubSectionGroup title="8. Website Terms & Conditions">
          <Paragraph>
            Information published on the Company’s website is provided for the use of its visitors
            &amp; you are advised that, although care has been taken to ensure technical &amp;
            factual accuracy, some errors may occur. No guarantee is given of the accuracy or
            completeness of information on these pages. Please be aware that P may alter the
            information on its website from time to time. Rumana Rab Holistic yoga shall have no
            liability arising from the use by any party of the information on this website. Rumana
            Rab Holistic yoga does not warrant the information on this website in any way &amp; in
            particular, no warranty is given that the website or its contents or hypertext links are
            virus-free or uncontaminated. You are advised to make your own virus checks &amp; to
            implement your own precautions in this respect. Rumana Rab Holistic yoga excludes all
            liability for contamination or damage caused by any virus or electronic transmission.
          </Paragraph>
        </SubSectionGroup>

        {/* 9. Liability */}
        <SubSectionGroup title="9. Liability">
          <SubSection id="9.1">
            <Paragraph>
              Rumana Rab Holistic yoga shall not be liable for any injury, loss, or damages in
              connection with, or resulting from, participation in the Training.
            </Paragraph>
          </SubSection>
          <SubSection id="9.2">
            <Paragraph>
              The Student will never engage Rumana Rab Holistic yoga, the Teachers, or any of the
              supporting staff, in legal proceedings relating to possible damages in whatever form,
              that may be the result of participation in the Training.
            </Paragraph>
          </SubSection>
          <SubSection id="9.3">
            <Paragraph>
              Rumana Rab Holistic yoga only works with qualified yoga teachers and will always offer
              yoga classes of the highest quality, nonetheless, there is always a risk of injury
              involved when taking a yoga class. By participating in the Training, as the case may
              be, the Student accepts such risk of injury. Rumana Rab Holistic yoga offers the
              following guidelines to diminish the risk of injury:
            </Paragraph>
            <ol className={`list-decimal ${LIST}`}>
              <li>
                Consult with a physician when you are not sure you are completely healthy, or have a
                condition, before starting to take yoga classes.
              </li>
              <li>
                If you have an injury, or other physical issues, inform the yoga teacher thereof
                before you start your yoga class.
              </li>
              <li>Listen to and follow the instructions of the yoga teacher.</li>
              <li>Be conservative when exercising yoga and listen to your physical limitations.</li>
            </ol>
            <Paragraph>Don’t do any exercises that are painful.</Paragraph>
            <Paragraph>Ask questions when you do not understand an exercise.</Paragraph>
          </SubSection>
        </SubSectionGroup>

        {/* Final contact */}
        <section className={SECTION}>
          <p className={BODY}>
            If you have any doubts or need any clarifications, email us at{" "}
            <a
              href={`mailto:${CONTACTS.email}`}
              className="font-medium text-forest underline underline-offset-4 transition-colors hover:text-sage-deep"
            >
              {CONTACTS.email}
            </a>{" "}
            or call us at{" "}
            <a
              href={`tel:${CONTACTS.phones[0]}`}
              className="font-medium text-forest underline underline-offset-4 transition-colors hover:text-sage-deep"
            >
              {CONTACTS.phones[0]}
            </a>{" "}
            <a
              href={`tel:${CONTACTS.phones[1]}`}
              className="font-medium text-forest underline underline-offset-4 transition-colors hover:text-sage-deep"
            >
              {CONTACTS.phones[1]}
            </a>
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div>
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-forest">
                Email
              </p>
              <a
                href={`mailto:${CONTACTS.email}`}
                className="mt-1.5 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-forest hover:underline"
              >
                <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {CONTACTS.email}
              </a>
            </div>

            <div>
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-forest">
                Phone
              </p>
              <span className="mt-1.5 flex flex-col items-start gap-1">
                {CONTACTS.phones.map((phone) => (
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
      </div>
    </div>
  );
}
