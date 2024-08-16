import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
// import { exchangeCurrency } from 'service/exchangeAPI';
import { useDispatch } from 'react-redux';
import { fetchExchangeCurrency } from 'reduxState/operations';

export const ExchangeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements.currency.value);
    const [amount, from, , to] = e.target.elements.currency.value.split(' ');
    console.log({ to, from, amount });
    // exchangeCurrency({ to, from, amount });
    dispatch(fetchExchangeCurrency({ to, from, amount }));
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        name="currency"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        title="Request format 15 USD in UAH"
        className={styles.input}
        required
        placeholder="15 USD in UAH"
      />
    </form>
  );
};
