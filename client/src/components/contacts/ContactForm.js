import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, addContact } = contactContext;

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  };

  return (
    <form onSubmit={onSubmit}>
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
      <input
        type="text"
        placeholder="phone"
        name="phone"
        vlaue={phone}
        onChange={onChange}
      />
      <h5>Conatct Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
      />{' '}
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
      />{' '}
      Professional
      <div>
        <input
          type="submit"
          valur="Add Contact"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
