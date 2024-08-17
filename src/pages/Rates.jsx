import { Wave } from 'react-animated-text';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchRates } from 'reduxState/operations';
import {
  selectBaseCurrency,
  selectFilteredRates,
  selectIsError,
  selectIsLoading,
} from 'reduxState/selectors';
import { Container, Heading, Loader, RatesList, Section } from 'components';

const Rates = () => {
  const dispatch = useDispatch();
  const baseCurrency = useSelector(selectBaseCurrency);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const filteredRates = useSelector(selectFilteredRates);

  useEffect(() => {
    dispatch(fetchRates(baseCurrency));
  }, [baseCurrency, dispatch]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {filteredRates.length > 0 && <RatesList rates={filteredRates} />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default Rates;
