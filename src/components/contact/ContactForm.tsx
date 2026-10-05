import { useState } from "react";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const FIELD_CLASSES =
  "h-11 rounded-md border-border bg-white px-4 text-sm shadow-sm focus-visible:ring-sage-deep/40";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzx9pfWeVb5AtXrPqDnVgevjJiA_frodn_kn-l9QPs0YAt3tTePDvIo4AzYAsFG7lbLPg/exec";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = new URLSearchParams();

    data.append(
      "fullName",
      formData.get("name")?.toString().trim() || "",
    );

    data.append(
      "email",
      formData.get("email")?.toString().trim() || "",
    );

    data.append(
      "phone",
      formData.get("phone")?.toString().trim() || "",
    );

    data.append(
      "subject",
      formData.get("subject")?.toString().trim() || "",
    );

    data.append(
      "message",
      formData.get("message")?.toString().trim() || "",
    );

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        redirect: "follow",
      });

      const result = await response.text();

      if (result.trim() !== "success") {
        throw new Error("Submission failed");
      }

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-md border border-forest/10 bg-surface p-6 shadow-soft sm:p-8 lg:p-9">
      <h2 className="font-display text-2xl font-semibold leading-tight text-forest sm:text-3xl">
        Send Us a Message
      </h2>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
        Fill in the form and we&apos;ll get back to you as soon as we can.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">

          {/* Full Name */}
          <div className="space-y-2">
            <Label
              htmlFor="contact-name"
              className="text-sm font-semibold text-forest"
            >
              Full Name <span className="text-gold">*</span>
            </Label>

            <Input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
              className={FIELD_CLASSES}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="contact-email"
              className="text-sm font-semibold text-forest"
            >
              Email Address <span className="text-gold">*</span>
            </Label>

            <Input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className={FIELD_CLASSES}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label
              htmlFor="contact-phone"
              className="text-sm font-semibold text-forest"
            >
              Phone Number <span className="text-gold">*</span>
            </Label>

            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="+971 50 000 0000"
              required
              className={FIELD_CLASSES}
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label
              htmlFor="contact-subject"
              className="text-sm font-semibold text-forest"
            >
              Subject <span className="text-gold">*</span>
            </Label>

            <Input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="How can we help you?"
              required
              className={FIELD_CLASSES}
            />
          </div>

          {/* Message */}
          <div className="space-y-2 sm:col-span-2">
            <Label
              htmlFor="contact-message"
              className="text-sm font-semibold text-forest"
            >
              Your Message <span className="text-gold">*</span>
            </Label>

            <Textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Tell us how we can help, and the best time to contact you..."
              required
              className="min-h-32 resize-y rounded-md border-border bg-white px-4 py-3 text-sm shadow-sm focus-visible:ring-sage-deep/40"
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="h-11 px-8"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}

          {!isSubmitting && (
            <Send className="size-4" aria-hidden="true" />
          )}
        </Button>

        {/* Success Message */}
        {submitStatus === "success" && (
          <p
            className="text-sm font-medium text-forest"
            role="status"
          >
            Thank you! Your message has been sent successfully.
            We&apos;ll get back to you soon.
          </p>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <p
            className="text-sm font-medium text-red-600"
            role="alert"
          >
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}