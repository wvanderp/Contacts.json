import Address from "./Address";
import PhoneNumber from "./PhoneNumber";

export default interface Contact {
    // unique ID for each contact
    id?: number;

    // name of the contact
    name: {
        // we give you to the option to have either a full name or first, middle, and last names
        // some cultures don't have the concept of first, middle, and last names so we give you the option to use a full name
        fullname?: string;

        first?: string[];
        middle?: string[];
        last?: string[];

        // nickname or alias
        nicknames?: string[];
        aliases?: string[];
    }

    // address of the contact
    address?: Address[];

    // phone numbers of the contact
    phoneNumbers?: PhoneNumber[];

    // ideas for future expansion
    // email addresses
    // social media accounts
    // websites

    // birthday
    // anniversary
    // other important dates

    // notes about the contact
    // for example "this is my cousin on my mother's side"
    // or "this is the person who will be picking you up from the airport"

    // tags
    // catogories
    // groups

    // family relationships
    // like mother, father, children, siblings, etc.
    // relationship status
    // frindship status
    // friend groups

    // other relationships
    // like boss, coworker, employee, etc.

    // other information
    // like hobbies, interests, etc.
    // sports played
    // sports watched and teams supported
    // favorite foods
    // favorite drinks
    // favorite colors

    // other contact information
    // like emergency contacts
    // doctors
    // dentists
    // lawyers
    // accountants
    
    // numbers like
    // social security number
    // driver's license number
    // passport number
    // credit card numbers
    // bank account numbers
    // etc.

    // other personal information
    // like 
    // height
    // weight
    // hair color
    // eye color
    // skin color
    // etc.

    // other personal information
    // medical information
    // allergies
    // medications
    // medical conditions
    // etc.

    // other personal information
    // like political affiliation
    // religious affiliation
    // etc.

    // other personal information
    // like sexual orientation

    // other personal information
    // like
    // education
    // work history
    // etc.

    // work related information
    // like job title
    // company
    // department
    // manager
    // direct reports
    // etc.

    // historycal information
    // like previous addresses
    // previous phone numbers
    // previous jobs
    // etc.

    // relation history information
    // like how long you have known the person
    // how you met the person
    // etc.
}