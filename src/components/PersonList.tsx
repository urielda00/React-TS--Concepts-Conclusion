//array type props
//for an array of objects:

//instead of:
// type PersonListProps={
// names: {
//   first: string
//   last: string
// }[]
// };
 

//we can:
import { Name } from "./Person.types";
type PersonListProps={
names: Name[]
};



export const PersonList=(props: PersonListProps)=>{
  return(
    <div>
     {props.names.map(name=>{
       return (
        <h2 key={name.first}>{name.first} {name.last}</h2>
       )
     })}
    </div>
  );
}