export async function generateMetadata({ params }: any) {
  return {
    metadataBase: new URL("https://webrarium.com"),
    alternates: {
      canonical: "/privacy_policy",
      languages: {
        uk: "/privacy_policy",
        en: "/en/privacy_policy",
      },
    },
  };
}

export default function PrivacyPolicy() {
  return <div>Privacy Policy</div>;
}
