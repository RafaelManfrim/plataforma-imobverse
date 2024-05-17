
import { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
        
export function CheckoutProMercadoPago() {
  useEffect(() => {
    initMercadoPago('YOUR_PUBLIC_KEY', { locale: 'pt-BR' });
  }, []);

  return (
    <div>
      <Wallet initialization={{preferenceId: '<PREFERENCE_ID>'}} />
    </div>
  );
}