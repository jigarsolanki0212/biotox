/** Enquiry form rules, shared by the browser form and the /api/contact route so both agree. */

export type EnquiryField = 'fullName' | 'emailAddress' | 'phoneNumber' | 'serviceRequired' | 'message';

export const ENQUIRY_LIMITS = { fullName: 120, emailAddress: 200, phoneNumber: 30, companyName: 200, serviceRequired: 200, message: 5000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

/** Returns the first problem as { field, message }, or null when the enquiry is valid. Expects trimmed strings. */
export function validateEnquiry(d: Record<EnquiryField, string>): { field: EnquiryField; message: string } | null {
  if (!d.fullName) return { field: 'fullName', message: 'Please enter your full name.' };
  if (!d.emailAddress) return { field: 'emailAddress', message: 'Please enter your email address.' };
  if (!EMAIL_RE.test(d.emailAddress)) return { field: 'emailAddress', message: 'Please enter a valid email address, e.g. name@company.com.' };
  if (!d.phoneNumber) return { field: 'phoneNumber', message: 'Please enter your phone number.' };
  const digits = d.phoneNumber.replace(/\D/g, '').length;
  if (!/^[+\d][\d\s().-]*$/.test(d.phoneNumber) || digits < 7 || digits > 15)
    return { field: 'phoneNumber', message: 'Please enter a valid phone number (7–15 digits, with country code if outside India).' };
  if (!d.serviceRequired) return { field: 'serviceRequired', message: 'Please select the service you need.' };
  if (!d.message) return { field: 'message', message: 'Please tell us briefly how we can help.' };
  return null;
}
