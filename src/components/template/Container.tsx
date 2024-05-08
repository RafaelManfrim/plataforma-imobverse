import { clsx } from "clsx"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>{}

export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div {...rest} className={clsx("max-w-7xl px-6 mx-auto", className)}>
      {children}
    </div>
  )
}