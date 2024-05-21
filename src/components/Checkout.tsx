import clsx from "clsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"


import { TicketId, tickets } from "@/util/tickets";
import LogoImobverseConnection from "@/assets/imobverse/imagotipo-imobverse-connection-sem-fundo.png"

import { MercadoPagoPaymentBrick } from "./MercadoPagoPaymentBrick"
// import { ContinueWithGoogleButton } from "./template/ContinueWithGoogleButton"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

import { formatCel, formatCpf } from "@/util/formatCpf";
import { Checkbox } from "./ui/checkbox";

const participantSchema = zod.object({
  cpf: zod.string({ required_error: 'CPF é obrigatório.' }).refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '');
      return replacedDoc.length == 11;
    }, 'CPF deve conter 11 caracteres.')
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '');
      return !!Number(replacedDoc);
    }, 'CPF deve conter apenas números.'),
  phone: zod.string({ required_error: 'Celular é obrigatório.' }).refine((doc) => {
    const replacedDoc = doc.replace(/\D/g, '');
    return replacedDoc.length == 11;
  }, 'Celular deve conter 11 caracteres.')
  .refine((doc) => {
    const replacedDoc = doc.replace(/\D/g, '');
    return !!Number(replacedDoc);
  }, 'Celular deve conter apenas números.'),
  email: zod.string({ required_error: 'E-mail é obrigatório.' }).email({
    message: 'E-mail inválido.'
  }),
  name: zod.string({ required_error: 'Nome é obrigatório.' }).refine((doc) => {
    return doc.length >= 3;
  }, 'O nome precisa ter pelo menos 3 caracteres.'),
})

const buyerSchema = zod.object({
  cpf: zod.string({ required_error: 'CPF é obrigatório.' }).refine((doc) => {
    const replacedDoc = doc.replace(/\D/g, '');
    return replacedDoc.length == 11;
  }, 'CPF deve conter 11 caracteres.')
  .refine((doc) => {
    const replacedDoc = doc.replace(/\D/g, '');
    return !!Number(replacedDoc);
  }, 'CPF deve conter apenas números.'),
  phone: zod.string({ required_error: 'Celular é obrigatório.' }).refine((doc) => {
    const replacedDoc = doc.replace(/\D/g, '');
    return replacedDoc.length == 11;
  }, 'Celular deve conter 11 caracteres.')
  .refine((doc) => {
    const replacedDoc = doc.replace(/\D/g, '');
    return !!Number(replacedDoc);
  }, 'Celular deve conter apenas números.'),
  email: zod.string({ required_error: 'E-mail é obrigatório.' }).email({
    message: 'E-mail inválido.'
  }),
  name: zod.string({ required_error: 'Nome é obrigatório.' }).refine((doc) => {
    return doc.length >= 3;
  }, 'O nome precisa ter pelo menos 3 caracteres.'),
})

type ParticipantSchema = zod.infer<typeof participantSchema>
type BuyerSchema = zod.infer<typeof buyerSchema>

type SubmitData = {
  participant: ParticipantSchema | undefined
  buyer: BuyerSchema | undefined
}

export default function Checkout() {
  const [availabeSteps, setAvailableSteps] = useState({
    participant: true,
    buyer: false,
    payment: false,
  })

  const [activeStep, setActiveStep] = useState("item-1")

  const [isParticipantBuyer, setIsParticipantBuyer] = useState(false)

  const [submitData, setSubmitData] = useState<SubmitData>({
    participant: undefined,
    buyer: undefined,
  })

  const params = useParams()
  const ticketId: TicketId | string | undefined = params.id

  const participantForm = useForm<ParticipantSchema>({
    resolver: zodResolver(participantSchema),
    defaultValues: {
      cpf: "",
      email: "",
      phone: "",
      name: "",
    }
  })

  const buyerForm = useForm<BuyerSchema>({
    resolver: zodResolver(buyerSchema),
  })

  function handleParticipantSubmit(data: ParticipantSchema) {
    setSubmitData(oldSubmitData => ({
      ...oldSubmitData,
      participant: data,
    }))

    setAvailableSteps({
      ...availabeSteps,
      buyer: true,
    })

    setActiveStep("item-2")
  }

  function handleBuyerSubmit(data: BuyerSchema) {
    setSubmitData(oldSubmitData => ({
      ...oldSubmitData,
      buyer: data,
    }))

    setAvailableSteps({
      ...availabeSteps,
      payment: true,
    })

    setActiveStep("item-3")
  }

  useEffect(() => {
    if(isParticipantBuyer) {
      buyerForm.reset({
        name: participantForm.getValues('name'),
        cpf: participantForm.getValues('cpf'),
        email: participantForm.getValues('email'),
        phone: participantForm.getValues('phone'),
      })
    } else {
      buyerForm.reset({
        name: "",
        cpf: "",
        email: "",
        phone: "",
      })
    }
  }, [isParticipantBuyer])

  useEffect(() => {
    if (submitData) {
      console.log({submitData})
    }
  } , [submitData])

  if (!ticketId) {
    return <div>404</div>
  }

  const product = tickets[ticketId]

  return (
    <div className="bg-white">
      <div className="bg-mainColor-600 p-8">
        <a href="/">
          <img src={LogoImobverseConnection} alt="" className="max-w-48" />
        </a>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Compra de ingresso</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="sr-only">Resumo do pedido</h2>

            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                <li className="flex space-x-6 py-6">
                  <div
                    className={clsx("h-24 w-24 flex flex-col gap-1 rounded-md bg-mainColor-600 items-center justify-center font-bold text-lg", product.type === "silver" ? "text-slate-400" : "text-amber-500")}
                  >
                    <img src={LogoImobverseConnection} alt="" className="px-4" />
                    {product.type}
                  </div>
                  <div className="flex-auto">
                    <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                      <div className="flex-auto space-y-1 text-sm font-medium">
                        <h3 className="text-gray-900">
                          {product.name}
                        </h3>
                        <p className="text-gray-900">{product.price}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              {/* <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">$104.00</dd>
              </div> */}
              <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt className="text-base">Total</dt>
                <dd className="text-base">{product.price}</dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <Accordion type="single" className="w-full" value={activeStep} onValueChange={setActiveStep}>
              <AccordionItem value="item-1" disabled={!availabeSteps.participant}>
                <AccordionTrigger className={
                  clsx(
                    "px-4",
                    activeStep === "item-1" ? "bg-gray-100" : "bg-white",
                    !availabeSteps.participant && "cursor-not-allowed hover:no-underline text-slate-500"
                  )
                } onClick={() => {
                  setActiveStep("item-1")
                  setAvailableSteps({
                    ...availabeSteps,
                    buyer: false,
                    payment: false,
                  })
                }}>Detalhes do Participante</AccordionTrigger>
                <AccordionContent>
                  <Form {...participantForm}>
                    <div className="mx-4 mt-4">
                      <FormField
                        control={participantForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="mb-4">
                            <FormLabel>Nome Completo</FormLabel>
                            <FormControl>
                              <Input type="text" placeholder="Nome Completo" {...field} />
                            </FormControl>
                            <FormMessage>
                              {participantForm.formState.errors.name?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={participantForm.control}
                        name="cpf"
                        render={({ field: { onChange, ...props } }) => (
                          <FormItem className="mb-4">
                            <FormLabel>CPF</FormLabel>
                            <FormControl>
                              <Input 
                                type="text" 
                                placeholder="CPF" 
                                onChange={(e) => {
                                  const { value } = e.target;
                                  e.target.value = formatCpf(value);
                                  onChange(e);
                                }} 
                                {...props} 
                              />
                            </FormControl>
                            <FormMessage>
                              {participantForm.formState.errors.cpf?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={participantForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="mb-4">
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="E-mail" {...field} />
                            </FormControl>
                            <FormMessage>
                              {participantForm.formState.errors.email?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={participantForm.control}
                        name="phone"
                        render={({ field: { onChange, ...props } }) => (
                          <FormItem>
                            <FormLabel>Celular</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="Celular" 
                                onChange={(e) => {
                                  const { value } = e.target;
                                  e.target.value = formatCel(value);
                                  onChange(e);
                                }} 
                                {...props} 
                              />
                            </FormControl>
                            <FormMessage>
                              {participantForm.formState.errors.phone?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />
                    </div>

                    <button
                      className="mt-6 w-full rounded-md border border-transparent bg-mainColor-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-mainColor-700 focus:outline-none focus:ring-2 focus:ring-mainColor-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
                      onClick={participantForm.handleSubmit(handleParticipantSubmit)}
                    >
                      Continuar
                    </button>
                  </Form>

                  {/* <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-4 text-sm font-medium text-gray-500">ou</span>
                    </div>
                  </div>

                  <ContinueWithGoogleButton /> */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" disabled={!availabeSteps.buyer}>
                <AccordionTrigger className={
                  clsx(
                    "px-4",
                    activeStep === "item-2" ? "bg-gray-100" : "bg-white",
                    !availabeSteps.buyer && "cursor-not-allowed hover:no-underline text-slate-500"
                  )
                }onClick={
                  () => {
                    setActiveStep("item-2")
                    setAvailableSteps({
                      ...availabeSteps,
                      payment: false,
                    })
                  }
                }>
                  Detalhes do Comprador
                </AccordionTrigger>
                <AccordionContent>
                <Form {...buyerForm}>
                    <div className="mx-4 mt-4">
                      <FormItem className="mb-4 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={isParticipantBuyer}
                            onCheckedChange={
                              (checked) => {
                                if (checked !== "indeterminate") {
                                  setIsParticipantBuyer(checked)
                                }
                              }
                            }
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            O comprador é o mesmo que o participante?
                          </FormLabel>
                        </div>
                      </FormItem>

                      <FormField
                        control={buyerForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="mb-4">
                            <FormLabel>Nome Completo</FormLabel>
                            <FormControl>
                              <Input disabled={isParticipantBuyer} type="text" placeholder="Nome Completo" {...field} />
                            </FormControl>
                            <FormMessage>
                              {buyerForm.formState.errors.name?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={buyerForm.control}
                        name="cpf"
                        render={({ field: { onChange, ...props } }) => (
                          <FormItem className="mb-4">
                            <FormLabel>CPF</FormLabel>
                            <FormControl>
                              <Input 
                                disabled={isParticipantBuyer}
                                type="text" 
                                placeholder="CPF" 
                                onChange={(e) => {
                                  const { value } = e.target;
                                  e.target.value = formatCpf(value);
                                  onChange(e);
                                }} 
                                {...props} 
                              />
                            </FormControl>
                            <FormMessage>
                              {buyerForm.formState.errors.cpf?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={buyerForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="mb-4">
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input disabled={isParticipantBuyer} type="email" placeholder="E-mail" {...field} />
                            </FormControl>
                            <FormMessage>
                              {buyerForm.formState.errors.email?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={buyerForm.control}
                        name="phone"
                        render={({ field: { onChange, ...props } }) => (
                          <FormItem>
                            <FormLabel>Celular</FormLabel>
                            <FormControl>
                              <Input 
                                disabled={isParticipantBuyer}
                                type="tel" 
                                placeholder="Celular" 
                                onChange={(e) => {
                                  const { value } = e.target;
                                  e.target.value = formatCel(value);
                                  onChange(e);
                                }} 
                                {...props} 
                              />
                            </FormControl>
                            <FormMessage>
                              {buyerForm.formState.errors.phone?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />
                    </div>

                    <button
                      className="mt-6 w-full rounded-md border border-transparent bg-mainColor-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-mainColor-700 focus:outline-none focus:ring-2 focus:ring-mainColor-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
                      onClick={buyerForm.handleSubmit(handleBuyerSubmit)}
                    >
                      Continuar
                    </button>
                  </Form>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" disabled={!availabeSteps.payment}>
                <AccordionTrigger className={
                  clsx(
                    "px-4",
                    activeStep === "item-3" ? "bg-gray-100" : "bg-white",
                    !availabeSteps.payment && "cursor-not-allowed hover:no-underline text-slate-500"
                  )
                }onClick={
                  () => {
                    setActiveStep("item-3")
                  }
                }>Detalhes do Pagamento</AccordionTrigger>
                <AccordionContent>
                  <div className="mx-4 mt-4">
                    <MercadoPagoPaymentBrick />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
