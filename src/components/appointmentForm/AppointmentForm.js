import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  
  console.log("AppointmentForm contacts:", contacts);

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required/>
        < ContactPicker contacts={contacts} value={contact} onChange={handleContactChange} />
        <input type="date" value={date} min={getTodayString()} onChange={e => setDate(e.target.value)} required />
        <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
        <input type="submit"/>
      </form>
    
    </>
  );
};
