//if we want to show the chldren of some components (look at the app.tsx)
//this is prefer to the children props
type HeadingProps= {
  children: string
}


export const Heading= (props: HeadingProps)=>{
  return(
    <div>
      <h2>{props.children}</h2>
    </div>
  )
}