import style from "./styles.module.css";
import { ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { Task } from "../../data/Task";

import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import { ListItem } from "../ListItem";

export function List() {
  const [task, setTask] = useState<Task[]>([
    {
      id: uuidv4(),
      text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      done: false,
    },
    {
      id: uuidv4(),
      text: "Integer urna interdum massa libero ",
      done: false,
    },
  ]);

  const [inputTask, setInputTask] = useState("");

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setInputTask(event.target.value);
  }

  function handleCheckTask(id: string) {
    const newList = task.map((taskItem) => {
      if (taskItem.id === id) {
        taskItem.done = !taskItem.done;
      }
      return taskItem;
    });

    setTask([...newList]);
  }

  function handleCreateTask() {
    const newTask = {
      id: uuidv4(),
      text: inputTask,
      done: false,
    };

    setTask([...task, newTask]);
    setInputTask("");
  }

  function handleRemoveTask(id: string) {
    const newList = task.filter((taskItem) => {
      return taskItem.id !== id;
    });

    setTask(newList);
  }

  return (
    <main className={style.main}>
      <header className={style.header}>
        <Input value={inputTask} onChange={(e) => handleNewTask(e)} />
        <Button onClick={handleCreateTask} />
      </header>

      <div className={style.containerList}>
        <header>
          <div className={style.headerContent}>
            <h3 className={style.titleHeaderContent}>Tarefas criadas</h3>
            <span className={style.counterHeaderContent}>{task.length}</span>
          </div>
          <div className={style.headerContent}>
            <h3 className={style.titleHeaderContent}>Concluídas</h3>
            <span className={style.counterHeaderContent}>
              {
                task.filter((teste) => {
                  return teste.done === true;
                }).length
              }{" "}
              de {task.length}
            </span>
          </div>
        </header>
        <div className={style.list}>
          {task.map((taskItem) => (
            <ListItem
              key={taskItem.id}
              id={taskItem.id}
              done={taskItem.done}
              text={taskItem.text}
              onRemoveTask={handleRemoveTask}
              onChecked={handleCheckTask}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
