import style from "./styles.module.css";
import { ChangeEvent, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Task } from "../../data/Task";

import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import { ListItem } from "../ListItem";
import { ClipboardText, Trash } from "@phosphor-icons/react";

export function List() {
  const [task, setTask] = useState<Task[]>([]);

  const [inputTask, setInputTask] = useState<string>("");

  function getDataStored() {
    const dataStoraged = JSON.parse(localStorage.getItem("tasks")!);

    if (dataStoraged.length > 0) {
      setTask(dataStoraged);
    }
  }

  useEffect(() => {
    getDataStored();
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

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
    const newTaskList = [...task, newTask];

    setTask(newTaskList);
    setInputTask("");
  }

  function handleRemoveTask(id: string) {
    const newList = task.filter((taskItem) => {
      return taskItem.id !== id;
    });
    setTask(newList);
  }

  const taskLengthHasDone = task.filter((teste) => {
    return teste.done === true;
  });

  function handleDeleteAllTasks() {
    setTask([]);
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
              {taskLengthHasDone.length > 0
                ? `${taskLengthHasDone.length} de ${task.length}`
                : 0}
            </span>
          </div>
        </header>

        {task.length > 0 ? (
          <>
            <div className={style.stepBar}>
              <div
                style={{
                  width: `${(taskLengthHasDone.length / task.length) * 100}%`,
                }}
                className={style.stepBarStatus}
              ></div>
            </div>
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

            <button
              className={style.deleteAllTasks}
              onClick={handleDeleteAllTasks}
            >
              Apagar todas as tarefas <Trash size={24} />
            </button>
          </>
        ) : (
          <div className={style.emptyList}>
            <div className={style.divider}></div>
            <ClipboardText
              className={style.emptyListIcon}
              size={62}
              color="#808080"
            />

            <h3 className={style.emptyListTitle}>
              Você ainda não tem tarefas cadastradas
            </h3>
            <p className={style.emptyListDescription}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
