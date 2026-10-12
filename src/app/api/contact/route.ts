import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, emailAddress, phoneNumber, serviceRequired, message, companyName } = data;

    if (!fullName || !emailAddress || !phoneNumber || !serviceRequired || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Log enquiry details on server
    console.log('--- NEW BIOTOX ENQUIRY RECEIVED ---');
    console.log({
      timestamp: new Date().toISOString(),
      fullName,
      emailAddress,
      phoneNumber,
      companyName: companyName || 'N/A',
      serviceRequired,
      message,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! We have received your enquiry and our toxicology team will reply within 2 hours.',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong processing your request. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
