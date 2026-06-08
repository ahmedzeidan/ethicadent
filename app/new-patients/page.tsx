import { CallToAction } from "@/components/CallToAction";
import { TrustPageContent } from "@/components/TrustPageContent";
import { newPatientsPage } from "@/data/trust";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: newPatientsPage.title,
  description: newPatientsPage.metaDescription,
  path: "/new-patients"
});

export default function NewPatientsPage() {
  return (
    <>
      <TrustPageContent page={newPatientsPage} />
      <CallToAction
        title="Ready to schedule your first visit?"
        text="Call Ethicadent to book a new patient appointment at our Belmont Ave office in Chicago."
      />
    </>
  );
}
