import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/filter/selectors';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, phone }) => (
          <li key={id}>
            <ContactItem id={id} name={name} phone={phone} />
          </li>
        ))}
      </ul>
    </>
  );
};
