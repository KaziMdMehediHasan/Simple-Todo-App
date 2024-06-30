import { FormEvent, useState } from "react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle, DialogDescription, DialogClose } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useAppDispatch } from "../../redux/hooks"
import { addTodo } from "../../redux/features/todoSlice"
import { useAddTodoMutation } from "../../redux/api/api"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"

const AddTodoModal = () => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    //! for local state management
    // const dispatch = useAppDispatch();
    //? for server: [actualFunctionForPost, {data,isLoading, isError}]
    const [addTodo, { data, isError, isLoading, isSuccess }] = useAddTodoMutation();
    console.log({ data, isLoading, isError, isSuccess });
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        // const id = Math.random().toString(36).substring(2);
        const taskDetails = {
            title: task,
            isCompleted: false,
            description: description,
            priority: priority
        }
        console.log("Inside Modal", taskDetails);
        //! for local state management
        // dispatch(addTodo(taskDetails));

        //* for server
        addTodo(taskDetails);
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-primary-gradient text-xl font-semibold'>Add Todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Add your tasks tha you want to keep track of
                    </DialogDescription>
                </DialogHeader>
                {/* //& dialog body starts */}
                <form onSubmit={onSubmit}>
                    <div className="grid gap-4 py-4">
                        {/* //& task title */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="task" className="text-right">
                                Task
                            </Label>
                            <Input
                                onBlur={(e) => setTask(e.target.value)}
                                id="task"
                                className="col-span-3"
                            />
                        </div>
                        {/* //& task description field */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                onBlur={(e) => setDescription(e.target.value)}
                                id="description"
                                className="col-span-3"
                            />
                        </div>
                        {/* //& priority field */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Priority</Label>
                            <Select onValueChange={(value) => setPriority(value)}>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Select priority level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Priority</SelectLabel>
                                        <SelectItem value="high">High</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="low">Low</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {/* //& dialog body ends */}
                    <div className="flex justify-end">
                        <DialogClose asChild>
                            <Button type="submit">Submit</Button>
                        </DialogClose>
                    </div>
                </form>

            </DialogContent>
        </Dialog >
    )
}

export default AddTodoModal