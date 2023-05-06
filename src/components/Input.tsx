//with input element, is common that the component will need the input value, 
//and the onCahnge handler.


type InputProps= {
  value:string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}
export const Input= ({value, handleChange}: InputProps)=>{
  return (
    <input type="text" value={value} onChange={handleChange}/>
  )
}


//if we want to defined the handle inside of the component:

// export const Input= ()=>{
//   const handleInputChange= (event: React.ChangeEvent<HTMLInputElement>)=>{
//   console.log(event)
//   }
//   return (
//     <input type="text" value='aaa' onChange={handleInputChange}/>
//   )
// }