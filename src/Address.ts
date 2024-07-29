export default interface Address {
    // the full address for if you dont want to break it down into parts
    fullAddress?: string;

    // notes about the address for example "this will bring you to the front of the house but the entrance is in the back"
    notes?: string;

    // the parts of the address
    street?: string;
    houseNumber?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;

    // the type of address
    type?: "home" | "work" | "school" | "other";

    // validitiy of the address
    // is the address still in use or is it just here for historical purposes
    valid?: boolean;
    current?: boolean;
    preferred?: boolean;
}