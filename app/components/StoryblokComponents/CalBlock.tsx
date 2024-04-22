import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalBlock() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink: "webrarium/30min",
        buttonText: "Meet Online",
        buttonColor: "#507a49",
      });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
}
