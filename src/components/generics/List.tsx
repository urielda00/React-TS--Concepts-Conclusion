//using generic types:
type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}
//if we want  array of any type: <T extends {}>
//if we want only array of strings/ numbers so:  <T extends number|string>
//and now we want that the aaray will have to include object with id- number:
export const List = <T extends { id: number }>({items,onClick}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map(item => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        )
      })}
    </div>
  )
}