/***
 * A type to add to objects like addresses and phone numbers to indicate if they are the current address or phone number
 * 
 * this is not a standallone object but rather a type to add to other objects
 */
export default interface CurrentIndicator {
    // is this the current address or phone number
    current?: boolean;
    // is this the preferred address or phone number
    preferred?: boolean;
}