# Contacts.json
A JSON format for saving all data of a contact.

This repo proposes a JSON format for saving a contact's data. This format is similar to the vCard format but is better in every way. It is more readable, more flexible, and more powerful.

The creation process is as follows:

Create the types in typescript, including details of why the type is created and how it is used.
Then, we will automatically generate a JSON schema that can be used to validate the JSON data.

## Values of this project

This project is designed for people who want to use it and should accommodate any use case. Its flexibility is a key feature, ensuring that it can be tailored to meet the needs of everyone who uses it.

Even if this leads to choices you find inexcusable, we will try to explain why we made these choices. And then it is up to you to decide whether you want to use it. You have the freedom to fork the project and create your own version, empowering you to make the best decisions for your needs.

This goes both ways, for example, this project can be used to capture the gender of a person, but aslo has a spot for the gender at birth. This is a choice we made, but you can choose to ignore this field if you want.

## General rules

- Types should both have a structured and unstructured version of them.
  - for example, an address should have a structured version with fields like street, city, and country, but also an field for a string that can be used to store the address as a single string.
- Types should link to other types if this makes sense.
  - for example, a child of a person should be a link to an other person.
- Types should have a field for a note.
  - because data is useful, but context is king.
- If a type is a list then the entries of the list should have a current / preferred field.
  - because it is important to know which entry is the current one.
