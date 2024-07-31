/**
 * A generic type to add social media accounts as a part of a contact.
 * It includes the account name and the "Homepage" of the account.
 */
export default interface SocialMediaAccount {
    // the account name / unique identifier on the platform
    accountName?: string;

    // homepage of the platform / the domain name
    homepage?: string;

    // name of the platform
    platform?: string;

    // full URL of the account
    url?: string;

    // type of account
    type?: "personal" | "professional" | "other";

    // notes about the account
    notes?: string;
}
