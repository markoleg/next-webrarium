import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request, response: Response) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const postData = await request.json();

  const { token } = postData;

  let res;

  const formData = `secret=${secretKey}&response=${token}`;

  try {
    res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  } catch (e) {
    return NextResponse.json({ success: false });
  }
  if (res && res.data?.success && res.data.score > 0.5) {
    // If the response is valid, return a JSON response with a success message
    return NextResponse.json({ success: true, score: res.data.score });
  } else {
    // If the response is invalid, return a JSON response with an error message
    return NextResponse.json({
      success: false,
      error: "Invalid reCAPTCHA response",
    });
  }
}
