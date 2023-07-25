import { useEffect, useMemo } from 'react';

const VerifyPaystackTransaction = () => {
  const location = window.location;
  const params = useMemo(() => new URLSearchParams(location.search), [location]);
  const ref = params.get('reference');
  console.log(ref);

  useEffect(() => {
    // const response = 
  }, [ref])

  return (
    <main>
        Verification Successful
    </main>
  )
}

export default VerifyPaystackTransaction;