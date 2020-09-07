export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.addTask = this.addTask.bind(this);
    this.pinTask = this.pinTask.bind(this);
    this.filterTask = this.filterTask.bind(this);
  }

  start() {
    this.view.showTopTask();
    this.view.addListener(this.addTask);
    this.view.pinTask(this.pinTask);
    this.view.filterTask(this.filterTask);
  }
  /* eslint-disable */
  addTask(event) {
    event.preventDefault();
    this.model.createTask(event.target.text.value);
    this.view.clearTask();
    this.view.showTask(this.model.getTasks());
    event.target.text.value = '';
  }

  pinTask(event) {
    event.preventDefault();
    if (event.target.classList.contains('label')) {
      this.model.changeTask(event.target.id);
      this.view.clearTask();
      this.view.showTask(this.model.getTasks());
    }
  }

  filterTask(event) {
    event.preventDefault();
    const text = event.target.value.trim().toLowerCase();
    const filterTasks = this.model.filterTask(text);
    this.view.clearTask();
    this.view.showTask(filterTasks);
  }
}
