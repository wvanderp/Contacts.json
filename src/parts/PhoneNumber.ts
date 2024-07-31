export default interface PhoneNumber {
    // the full phone number
    fullNumber?: string;

    // the parts of the phone number
    countryCode?: string;
    areaCode?: string;
    exchangeCode?: string;
    lineNumber?: string;

    // the type of phone number
    type?: "home" | "work" | "cell" | "fax" | "pager" | "other";

    // notes about the phone number
    notes?: string;

    // validitiy of the phone number
    // is the number still in use or is it just here for historical purposes
    valid?: boolean;
    current?: boolean;
    preferred?: boolean;
}