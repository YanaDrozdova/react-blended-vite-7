import Select from 'react-select';

import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';
import { setBaseCurrency } from 'reduxState/currencySlice';
import { useDispatch } from 'react-redux';

export const SelectRates = ({ baseCurrency }) => {
  const dispatch = useDispatch();

  const handleChange = ({ value }) => {
    dispatch(setBaseCurrency(value));
  };

  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency: {baseCurrency} </p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        isSearchable
        options={symbols}
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        onChange={handleChange}
      />
    </div>
  );
};
