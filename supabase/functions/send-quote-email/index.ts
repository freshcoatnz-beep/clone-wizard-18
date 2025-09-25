import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteEmailRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, address, serviceType, message }: QuoteEmailRequest = await req.json();

    console.log("Processing quote request for:", name, email);

    // Send email to business owner
    const businessEmailResponse = await resend.emails.send({
      from: "Freshcoat Quotes <onboarding@resend.dev>",
      to: ["michael@freshcoat.co.nz"],
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address || 'Not provided'}</p>
        <p><strong>Service Type:</strong> ${serviceType || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No additional details'}</p>
        
        <hr>
        <p>Contact the customer directly at ${email} or ${phone}</p>
      `,
    });

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Freshcoat Painters <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your quote request!",
      html: `
        <h1>Thank you for contacting Freshcoat Painters, ${name}!</h1>
        <p>We have received your quote request and will get back to you within 24 hours with your free quote.</p>
        
        <h3>Your Request Details:</h3>
        <p><strong>Service Type:</strong> ${serviceType || 'Not specified'}</p>
        <p><strong>Property Address:</strong> ${address || 'Not provided'}</p>
        <p><strong>Additional Details:</strong> ${message || 'None'}</p>
        
        <p>If you have any urgent questions, please contact us directly:</p>
        <p><strong>Phone:</strong> 022 0366586</p>
        <p><strong>Email:</strong> michael@freshcoat.co.nz</p>
        
        <p>Best regards,<br>The Freshcoat Painters Team</p>
      `,
    });

    console.log("Business email sent:", businessEmailResponse);
    console.log("Customer email sent:", customerEmailResponse);

    return new Response(JSON.stringify({ 
      success: true,
      businessEmailId: businessEmailResponse.data?.id,
      customerEmailId: customerEmailResponse.data?.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);