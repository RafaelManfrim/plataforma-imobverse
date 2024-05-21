import { Payment } from '@mercadopago/sdk-react';
import { IBrickError } from '@mercadopago/sdk-react/bricks/util/types/common';
import { useState } from 'react';

type TicketFormData = {
  transaction_amount: number
  payment_method_id: string
  payer: {
    email: string
    first_name: string
    last_name: string
    identification: {
      type: string
      number: string
    }
    address: {
      city: string
      federal_unit: string 
      neighborhood: string
      street_name: string
      street_number: string
      zip_code: string
    }
  }
  additional_info: {
    payer: {
      first_name: string
      last_name: string
      address: {
        zip_code: string
        street_name: string
        street_number: string
      }
    }
  }
}

type CardFormData = {
  installments: number
  issuer_id: string
  payment_method_id: string
  token: string
  transaction_amount: number
  payer: {
    email: string
    identification: {
      type: string
      number: string
    }
  }
}

type PixFormData = {
  transaction_amount: number
  payment_method_id: string
  payer: {
    email: string
  }
}

type SubmitData = {
  selectedPaymentMethod: string;
  formData: PixFormData | CardFormData | TicketFormData
}

export function MercadoPagoPaymentBrick() {
  const [isLoading, setIsLoading] = useState(true);

  const initialization = {
    amount: 100,
    // preferenceId: "<PREFERENCE_ID>",
  };

  const onSubmit = async (
    { selectedPaymentMethod, formData }: SubmitData
  ) => {
    console.log({ selectedPaymentMethod, formData })

    if (isLoading) {
      return;
    }

    // callback chamado ao clicar no botão de submissão dos dados
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log({ response })

          // receber o resultado do pagamento
          resolve(
            response.status === "approved"
              ? "approved"
              : "rejected" // TESTE APENAS
          );
        })
        .catch((error: string) => {
          console.log(`${error} - catch`)
          // lidar com a resposta de erro ao tentar criar o pagamento
          reject();
        });
    });
  };

  const onError = async (error: IBrickError) => {
    // callback chamado para todos os casos de erro do Brick
    console.log({ error })
  };

  const onReady = async () => {
    setIsLoading(false);
  };

  return (
    <div className='flex flex-col space-y-3'>
      <Payment
        initialization={initialization}
        customization={{
          paymentMethods: {
            // ticket: "all",
            bankTransfer: "all",
            creditCard: "all",
            // debitCard: "all",
            // mercadoPago: "all",
          },
          visual: {
            hideFormTitle: true,
          }
        }}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}
      />
    </div>
  )
}