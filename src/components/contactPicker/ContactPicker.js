import React from "react";

export const ContactPicker = ({ contacts = [], value, onChange }) => {

  console.log("ContactPicker contacts:", contacts);

  return (
    <>
      <select value={value} onChange={onChange}>
        <option value="">No Contact Selected</option>
        {contacts.map((contact, i) => (
          <option key={i} value={contact.name}>{contact.name}</option>
        ))}
      </select>
    </>
  );
};
