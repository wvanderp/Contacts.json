import Address from "./parts/Address";
import EmailAdress from "./parts/EmailAdress";
import PhoneNumber from "./parts/PhoneNumber";
import CurrentIndicator from "./utils/CurrentIndicator";
import SocialMediaAccount from "./parts/SocialMediaAccount";
import PersonLink from "./links/PersonLink";

export default interface Contact {
    // unique ID for each contact
    id?: number;

    // name of the contact
    name?: {
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
    address?: (Address & CurrentIndicator)[];

    // phone numbers of the contact
    phoneNumbers?: (PhoneNumber & CurrentIndicator)[];

    // email addresses of the contact
    emailAddresses?: (EmailAdress & CurrentIndicator)[];

    socialMedia?: (SocialMediaAccount & CurrentIndicator)[];

    // websites

    // birthday
    // anniversary
    // other important dates

    // notes about the contact
    // for example "this is my cousin on my mother's side"
    // or "this is the person who will be picking you up from the airport"


    tags?: string[];
    catogories?: string[];
    groups?: string[];

    // family relationships
    // like mother, father, children, siblings, etc.
    // relationship status
    // frindship status
    // friend groups

    family?: (PersonLink & {relationship: string})[];
    relationships?: (
        PersonLink &
        {relationshipType: 'marriage' | 'engagement' | 'dating' | 'friends' | 'coworkers' | 'boss' | 'employee' | 'other'} &
        {notes?: string}
    )[];

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

    // information about sex and gender
    // like
    // gender at birth
    // gender expression
    // transgender status

    // member of any organizations
    // like
    // clubs
    // churches
    // political parties
    // etc.

    // work schedule
    // like work hours
    // work days
    // shift
    // vol continue schema (like 2 weeks on, 2 weeks off)
    // etc.

    // dietary restrictions and preferences
    // like
    // vegetarian
    // vegan
    // gluten free
    // lactose intolerant
    // allergies
    // etc.
    
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
    // blood type
    // menstrual cycle
    // vaccination status
    // medical history

    // other personal information
    // like political affiliation
    // religious affiliation
    // etc.

    // other personal information
    // like sexual orientation

    // information about the person's pets
    // like number of pets
    // type of pets
    // names of pets
    // etc.

    // information about the person's education
    // like schools attended
    // degrees earned
    // graduation dates
    // certificates earned
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
    // how you became friends
    // who introduced you to the person
    // etc.

    // other information
    // like how you feel about the person
    // what others think about the person
    // who hates the person

    // other information
    // like
    // languages spoken

    // information about previous places lived
    // like
    // previous addresses
    // place of birth

    // stuff owned by the person
    // like
    // cars
    // houses
    // boats
    // planes
    

    // technology used by the person
    // like
    // operating systems
    // programming languages
    // software used
    // hardware used
    // phone platform
    // etc.

}