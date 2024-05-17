// import { useForm } from "react-hook-form"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ContinueWithGoogleButton } from "./template/ContinueWithGoogleButton"

const products = [
  {
    id: 1,
    name: "Ingresso VIP",
    type: "VIP",
    price: 'R$ 99,99',
    // href: '#',
    // color: 'Gray',
    // size: 'S',
    // imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-05-product-01.jpg',
    // imageAlt: "Front of women's basic tee in heather gray.",
  },
]

export default function Checkout() {
  // const formCadastro = useForm({})

  // const formPagamento = useForm({})

  return (
    <div className="bg-white">
      <div className="bg-blue-300">
        Header
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Compra de ingresso</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="sr-only">Resumo do pedido</h2>

            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex space-x-6 py-6">
                    {/* <div
                      className="h-24 w-24 flex-none rounded-md bg-blue-500 object-cover object-center"
                    >
                      {product.type}
                    </div> */}
                    <div
                      className="h-24 w-24 flex flex-col gap-1 rounded-md bg-blue-500 items-center justify-center text-white font-bold text-lg"
                    >
                      <span className="text-2xl">Logo</span>
                      {product.type}
                    </div>
                    <div className="flex-auto">
                      <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                        <div className="flex-auto space-y-1 text-sm font-medium">
                          <h3 className="text-gray-900">
                            {product.name}
                            {/* <a href={product.href}>{product.name}</a> */}
                          </h3>
                          <p className="text-gray-900">{product.price}</p>
                          {/* <p className="hidden text-gray-500 sm:block">{product.color}</p>
                          <p className="hidden text-gray-500 sm:block">{product.size}</p> */}
                        </div>
                        {/* <div className="flex flex-none space-x-4">
                          <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Edit
                          </button>
                          <div className="flex border-l border-gray-300 pl-4">
                            <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              Remove
                            </button>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              {/* <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">$104.00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">$8.32</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-gray-900">$14.00</dd>
              </div> */}
              <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt className="text-base">Total</dt>
                <dd className="text-base">R$ 99,99</dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto w-full max-w-lg">
            

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Cadastro</AccordionTrigger>
                <AccordionContent>
                  <form>
                    {/* NOME COMPLETO
                    CPF
                    TELEFONE */}

                    <div className="mt-6">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        E-mail
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          id="email-address"
                          name="email-address"
                          autoComplete="email"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Senha
                      </label>
                      <div className="mt-1">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex space-x-2">
                      <div className="flex h-5 items-center">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                      </div>
                      <label htmlFor="terms" className="text-sm text-gray-500">
                        Eu concordo com os{' '}
                        <a href="#" className="font-medium text-gray-900 underline">
                          Termos de Serviço
                        </a>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled
                      className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
                    >
                      Continuar
                    </button>

                    <div className="relative mt-8 mb-4">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-200" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-white px-4 text-sm font-medium text-gray-500">ou</span>
                      </div>
                    </div>

                    <ContinueWithGoogleButton />
                  </form>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Detalhes do Pagamento</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
