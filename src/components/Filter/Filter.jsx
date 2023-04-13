import { useDispatch, useSelector } from 'react-redux';

import { Input, Label } from './Filter.styled';
import { selectFilter } from 'redux/filter/selectors';
import { filterContacts } from 'redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          name="nameToFind"
          onChange={e => dispatch(filterContacts(e.target.value))}
          autoComplete="off"
        />
      </Label>
    </div>
  );
};
