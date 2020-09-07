import { v4 as uuidv4 } from 'uuid';
import Task from './Task';

export default class Model {
  constructor() {
    this.tasks = [];
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  /* eslint-disable */
  changeTask(id) {
    this.tasks.forEach((elem) => {
      if (elem.id === id) {
        elem.pin = !elem.pin;
      }
    });
  }

  createTask(text) {
    const id = uuidv4();
    const task = new Task(text, id);
    this.addTask(task);
  }

  filterTask(text) {
    return this.tasks.filter((elem) => {
      const elemText = elem.text.trim().toLowerCase();
      return elemText.startsWith(text) || elem.pin;
    });
  }
}
