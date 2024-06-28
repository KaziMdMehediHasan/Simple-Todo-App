import TodoCard from "./TodoCard"

const TodoContainer = () => {
    return (
        <div>
            <div>
                <button>Add Todo</button>
                <button>Filter</button>
            </div>
            <div className="bg-red-300 w-full h-full rounded-xl p-5 space-y-5">
                {/* <div className="bg-slate-100 p-3 flex text-2xl justify-center items-center font-semibold rounded-xl">
                    <p>There is no task Pending</p>{''}
                </div> */}
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
            </div>
        </div>
    )
}

export default TodoContainer