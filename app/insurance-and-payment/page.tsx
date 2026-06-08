import { CallToAction } from "@/components/CallToAction";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { TrustPageContent } from "@/components/TrustPageContent";
import { insurancePaymentPage } from "@/data/trust";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: insurancePaymentPage.title,
  description: insurancePaymentPage.metaDescription,
  path: "/insurance-and-payment"
});

export default function InsurancePaymentPage() {
  return (
    <>
      <TrustPageContent page={insurancePaymentPage} />
      <PrivacyNotice />
      <CallToAction
        title="Verify your coverage before your visit"
        text="Call Ethicadent with your insurance card handy. The team can help confirm your plan and explain what to expect."
      />
    </>
  );
}
