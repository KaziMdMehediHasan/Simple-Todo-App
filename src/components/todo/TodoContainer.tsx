import AddTodoModal from "./AddTodoModal"
import TodoCard from "./TodoCard"
import TodoFilter from "./TodoFilter"

const TodoContainer = () => {
    return (
        <div>
            <div className='flex justify-between mb-5'>
                <AddTodoModal />
                <TodoFilter />
            </div>
            <div className="bg-primary-gradient w-full h-full rounded-xl space-y-5 p-[5px]">
                {/* <div className="bg-slate-100 p-3 flex text-2xl justify-center items-center font-semibold rounded-xl">
                    <p>There is no task Pending</p>{''}
                </div> */}
                <div className="bg-slate-200 p-5 w-full h-full rounded-lg">
                    <TodoCard />
                    <TodoCard />
                    <TodoCard />
                    <TodoCard />
                </div>

            </div>
        </div>
    )
}

export default TodoContainer