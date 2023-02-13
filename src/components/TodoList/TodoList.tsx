import { useContext } from 'react'
import { Dropdown, DropdownItem } from 'components/UI'
import { TodosContext, TodosContextType } from 'provider/TodosProvider'

function TodoList() {
  const { todos } = useContext(TodosContext) as TodosContextType
  const dateArr = todos?.reduce((arr: string[], { date }: any) => {
    const createArr = arr.includes(date) ? arr : [...arr, date]
    return createArr
  }, [])
  console.log(dateArr)
  return (
    <div>
      {dateArr?.map((date: string) => (
        <Dropdown key={date} date={date}>
          {todos?.map((item: any) => {
            const dropdownItem =
              item.date === date ? (
                <DropdownItem
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  color={item.color}
                  done={item.done}
                />
              ) : null
            return dropdownItem
          })}
        </Dropdown>
      ))}
    </div>
  )
}

export default TodoList
