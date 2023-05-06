//this page is about type click event as a props

// type ButtonProps={
//   handleClick: ()=>void
// }

type ButtonProps={
  handleClick: (event:React.MouseEvent<HTMLButtonElement>, id:number)=>void //and now we can use the event
  //parameter on this function
}


export const Button= (props:ButtonProps)=>{
  return(
    <div>
      <button onClick={ event=>props.handleClick(event,1)}>click</button>
    </div>
  )
}