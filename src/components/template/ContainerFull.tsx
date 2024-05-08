import clsx from "clsx";

interface ContainerFullProps extends React.HTMLAttributes<HTMLDivElement>{}

export function ContainerFull({ children, className, ...rest }: ContainerFullProps) {
  return (
    <div {...rest} className={clsx("w-full", className)}>
      {children}
    </div>
  )
}