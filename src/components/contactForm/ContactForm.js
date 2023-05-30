import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <input type="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <input type="submit"/>
    </form>
    </>
  );
};

