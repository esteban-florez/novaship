type Props = React.PropsWithChildren<{
  title: string
  icon: React.ReactNode
}>

export default function Atributtes({ title, children, icon }: Props) {
  return (
    <div className="flex w-full columns-1 flex-col items-center gap-2 border-r-2 p-4 lg:flex-row lg:gap-4 lg:px-6 lg:py-4">
      <span className="h-12 w-12 text-primary lg:h-10 lg:w-10 xl:h-12 xl:w-12">{icon}</span>
      <div className="flex flex-col items-center lg:items-start">
        <h3 className="text-base md:text-lg">{title}</h3>
        <h4 className="-mt-1 text-xl font-bold md:text-2xl">{children}</h4>
        {children === null &&
          <>
            <div className="-mt-1 text-xl font-bold md:text-2xl">--</div>
            <div className="-mt-2 line-clamp-1 text-sm text-neutral-400">no especificado</div>
          </>}
      </div>
    </div>

  // <div className="stat">
  //   <div className="stat-figure text-secondary">
  //     <span className="inline-block h-10 w-10 text-primary">{icon}</span>
  //   </div>
  //   <div className="stat-title">{title}</div>
  //   <div className="stat-value">{children}</div>
  //   <div className="stat-desc">Jan 1st - Feb 1st</div>
  // </div>

  // <div className="stat flex items-center">
  //   <span className="text-primary sm:h-8 sm:w-8 lg:h-12 lg:w-12">{icon}</span>
  //   <div className="flex flex-col">
  //     <div className="stat-title">{title}</div>
  //     <div className="stat-value text-lg">{children}</div>
  //     {children === null &&
  //       <>
  //         <div className="stat-value">--</div>
  //         <div className="stat-desc">no especificado</div>
  //       </>}
  //   </div>
  // </div>
  )
}
