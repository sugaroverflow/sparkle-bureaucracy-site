import type { APIRoute } from "astro";

type Provider = "buttondown" | "convertkit" | "mailchimp";

const parseProvider = (value: string | undefined): Provider | null => {
  if (value === "buttondown" || value === "convertkit" || value === "mailchimp") {
    return value;
  }

  return null;
};

const subscribeWithButtondown = async (email: string) => {
  const apiKey = import.meta.env.BUTTONDOWN_API_KEY;
  const endpoint = "https://api.buttondown.email/v1/subscribers";

  if (!apiKey) {
    throw new Error("Buttondown is not configured yet.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Unable to subscribe with Buttondown.");
  }
};

const subscribeWithConvertKit = async (email: string) => {
  const apiKey = import.meta.env.CONVERTKIT_API_KEY;
  const formId = import.meta.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    throw new Error("ConvertKit is not configured yet.");
  }

  const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key: apiKey,
      email,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to subscribe with ConvertKit.");
  }
};

const subscribeWithMailchimp = async (email: string) => {
  const apiKey = import.meta.env.MAILCHIMP_API_KEY;
  const audienceId = import.meta.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = import.meta.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !audienceId || !serverPrefix) {
    throw new Error("Mailchimp is not configured yet.");
  }

  const authHeader = `Basic ${btoa(`any:${apiKey}`)}`;
  const response = await fetch(
    `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Unable to subscribe with Mailchimp.");
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, website } = await request.json();
    const normalizedEmail = String(email || "").trim().toLowerCase();
    const honeypot = String(website || "").trim();

    if (honeypot) {
      return new Response(JSON.stringify({ message: "Thanks for subscribing." }), { status: 200 });
    }

    if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return new Response(JSON.stringify({ error: "Please enter a valid email address." }), {
        status: 400,
      });
    }

    const provider = parseProvider(import.meta.env.EMAIL_PROVIDER);
    if (!provider) {
      return new Response(
        JSON.stringify({
          error:
            "Email provider is not configured. Set EMAIL_PROVIDER and provider keys in environment variables.",
        }),
        { status: 503 },
      );
    }

    if (provider === "buttondown") {
      await subscribeWithButtondown(normalizedEmail);
    } else if (provider === "convertkit") {
      await subscribeWithConvertKit(normalizedEmail);
    } else {
      await subscribeWithMailchimp(normalizedEmail);
    }

    return new Response(JSON.stringify({ message: "Subscribed. Check your inbox for confirmation." }), {
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ error: "Subscription failed. Please try again shortly." }), {
      status: 500,
    });
  }
};
