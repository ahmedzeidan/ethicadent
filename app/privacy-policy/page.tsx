import { CallToAction } from "@/components/CallToAction";
import { PrivacyNotice } from "@/components/PrivacyNotice";
import { TrustPageContent } from "@/components/TrustPageContent";
import { privacyPolicyPage } from "@/data/trust";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: privacyPolicyPage.title,
  description: privacyPolicyPage.metaDescription,
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <TrustPageContent page={privacyPolicyPage} />
      <PrivacyNotice />
      <CallToAction
        title="Questions about privacy?"
        text="Call Ethicadent for scheduling and general office questions. Do not send medical details by email."
      />
    </>
  );
}
