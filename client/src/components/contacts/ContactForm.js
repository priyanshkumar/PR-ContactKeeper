import React, { useState } from 'react';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;
  return (
    <form>
      <h2 className="text-primary">Add Contact</h2>
      <input
        type="text"
        placeholder="name"
        name="name"
        vlaue={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        vlaue={email}
        onChange={onChange}
      />
    </form>
  );
};

export default ContactForm;
