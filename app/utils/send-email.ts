import { FormData } from "@/app/components/StoryblokComponents/Contact/Contact";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/mail";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.message);
    })
    .catch((err) => {
      console.log(err);
    });
}
