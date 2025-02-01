import { useTaskBoardContext } from "@/concepts/board/contexts/TaskBoardContext";
import { Input } from "@/ui/components/atoms/Input";

export const ModalMain = () => {
  const { taskName, setTaskName, taskDescription, setTaskDescription } =
    useTaskBoardContext();
  return (
    <div className="h-full flex flex-col gap-2">
      <Input
        label="Task name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTaskName(e.target.value)
        }
        placeholder="Task name"
        value={taskName}
        type="text"
      />
      <Input
        label="Description"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTaskDescription(e.target.value)
        }
        placeholder="Enter a short description"
        value={taskDescription}
        type="textarea"
      />
      <input type="radio" name="foo" id="foo1" />
      <label htmlFor="foo1">foo1</label>
      <input type="radio" name="foo" id="foo2" />
      <label htmlFor="foo2">foo2</label>
      <label
        htmlFor="foo3"
        className="has-[:checked]:text-[#4E80EE] outline outline-transparent has-[:checked]:outline-[#4E80EE] group"
      >
        foo3
        <input type="radio" name="foo" id="foo3" className="hidden" />
        <div className="w-4 h-4 rounded-full bg-transparent group-has-[:checked]:bg-[#4E80EE]"></div>
      </label>
    </div>
  );
};

function makeRadioboxGroupUnCheckable(groupSelector) {
  let currentId;

  document.querySelectorAll(groupSelector).forEach((elem) => {
    elem.addEventListener("click", allowUncheck);
    // only needed if can be pre-checked
    if (elem.checked) {
      currentId = elem.id;
    }
  });

  function allowUncheck(e) {
    if (this.id === currentId) {
      this.checked = false;
      currentId = undefined;
    } else {
      currentId = this.id;
    }
  }
}

makeRadioboxGroupUnCheckable("input[type=radio][name=foo]");
