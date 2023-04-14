import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/filter/selectors';

export const ContactsList = ({ openModal }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              openModal={openModal}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
