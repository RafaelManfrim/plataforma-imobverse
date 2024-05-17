import { Link as ScrollLink } from 'react-scroll'

interface ScrollButtonProps {
  children: React.ReactNode
  toElementName: string
}

export function ScrollButton({ children, toElementName, ...rest }: ScrollButtonProps) {
  return (
    <ScrollLink {...rest} to={toElementName} smooth offset={100} className="text-mainColor-600 text-center md:text-md px-6 py-4 rounded-full shadow-lg font-bold hover:brightness-95 transition-all duration-300 ease-in-out cursor-pointer bg-white">
      {children}
    </ScrollLink>
  )
}
