import { ScrollButton } from "./template/ScrollButton"

import CapaImg from "@/assets/imobverse/imagotipo-imobverse-connection-sem-fundo.png"

export default function HeroV2() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-mainColor-800 to-mainColor-600 py-56">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center">
        <img
          src={CapaImg}
          alt="Capa evento com o trio Imobverse"
          className="max-w-xs sm:max-w-md"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mt-16">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Hub, conteúdo e inteligência de mercado imobiliário
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          ImobVerse tem como meta transformar vidas no mercado imobiliário, realizando ações de imersão, mentoria e podcasts para qualificar profissionais e empresas da área. 
        </p>
        <div className="mt-24">
          <ScrollButton toElementName="pricing">Garantir meu ingresso</ScrollButton>
        </div>
      </div>
    </div>
  )
}
