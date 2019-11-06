import React from 'react';

const ContactItem = ({ contact }) => {
  const { name, email, phone, type, id } = contact;
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
    </div>
  );
};

export default ContactItem;
