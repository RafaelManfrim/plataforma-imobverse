import { ScrollButton } from "./template/ScrollButton"

import LogoImg from "@/assets/imobverse/imagotipo-imobverse-colorido.png"
import CapaImg from "@/assets/imobverse/imagotipo-imobverse-connection-com-fundo.png"

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
          <img src={LogoImg} className="h-11" alt="Imagotipo Imobverse" />
          <h1 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Hub, conteúdo e inteligência de mercado imobiliário
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ImobVerse tem como meta transformar vidas no mercado imobiliário, realizando ações de imersão, mentoria e podcasts para qualificar profissionais e empresas da área. 
          </p>
          <div className="mt-10">
            <ScrollButton toElementName="pricing">Garantir meu ingresso</ScrollButton>
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
