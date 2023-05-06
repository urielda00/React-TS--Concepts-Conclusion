//simple types props
type GreetProps= {
  name: string
  messageCount?: number //this is an optional type!
  isLoggedIn: boolean
}


export const Greet = (props: GreetProps)=>{
  return(
    <div>
      <h2>
      {
        props.isLoggedIn?  `welcome ${props.name} !! you have new ${props.messageCount} messages!` 
        :'Welcome Guess'
      }
      </h2>
    </div>
  );
};