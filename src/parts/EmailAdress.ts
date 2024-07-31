/**
 * EmailAdress is a interface for email addresses.
 * 
 */
export default interface EmailAdress {
    // the email address
    email?: string;
    // the type of email address
    type?: "home" | "work" | "school" | "other";

    // notes about the email address
    notes?: string;
}