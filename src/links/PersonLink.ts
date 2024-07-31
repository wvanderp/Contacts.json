/**
 * this is object that is used to link to a person. It contains just enough information to link to a person.
 * but if you need any more information about the person, you should look up the person by the id in this object.
 */
export default interface PersonLink {
    // the unique ID of the person
    id?: number;

    // the name of the person
    name?: string;
}