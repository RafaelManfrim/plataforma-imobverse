import { ScrollButton } from "./template/ScrollButton"

import CapaImg from "@/assets/capa.jpg"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <img
            className="h-11"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          {/* <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just shipped v1.0</span>
                <ChevronRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </a>
          </div> */}
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hub e conteúdo e inteligência de mercado imobiliário
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ImobVerse tem como meta transformar vidas no mercado imobiliário. 
            Ações de imersão, mentoria e podcast buscam qualificar profissionais e empresas da área. Transformar vidas no mercado imobiliário é a meta do Imobverse, uma plataforma que reúne ações de imersão, mentoria e podcast para qualificar profissionais e empresas. Em apenas seis meses, a rede saltou do mundo digital para criar conexões presenciais, com dois eventos presenciais com conteúdo e palestras disponibilizados para mais de 250 pessoas que passaram pelos eventos, que contou com especialistas de renome no mercado corporativo. O Imobverse também é um espaço para networking e geração de negócios com grandes plyers do mercado imobiliário.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
          <ScrollButton toElementName="pricing">Garantir meu ingresso</ScrollButton>
            {/* <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a> */}
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Saber mais <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src={CapaImg}
                alt="Capa evento com o trio Imobverse"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
