import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, inquiryType, message } = body;

    // Send payload to CRM API (e.g., SendGrid, HubSpot, or Webhook)
    console.log('New Lead Captured:', { fullName, email, inquiryType, message });

    return NextResponse.json({ success: true, message: 'Lead received successfully.' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to process request.' }, { status: 500 });
  }
}