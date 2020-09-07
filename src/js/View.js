export default class View {
  constructor() {
    this.topTask = document.createElement('div');
    this.root = document.getElementById('root');
    this.topTask.classList.add('top-task');
  }

  showTopTask() {
    this.topTask.innerHTML = `
      <form class="form" id="form">
        <input type="text" id="text" name="text" placeholder="text your task" required autocomplete="off">
        <input id="button" type="submit" class="hidden" data-action="filter"></input>
      </form>
      <div class="information">
       <h3>Pinned</h3>    
      <ul class="tasks pinned"></ul>
      <h3>All Tasks</h3>
      <ul class="tasks all"></ul>
</div>
`;
    this.root.insertAdjacentElement('beforeend', this.topTask);
  }
  /* eslint-disable */
  filterTask(callback) {
    document.getElementById('form').addEventListener('input', callback);
  }

  pinTask(callback) {
    document.querySelector('.information').addEventListener('click', callback);
  }

  addListener(callback) {
    document.getElementById('form').addEventListener('submit', callback);
  }

  clearTask() {
    document.querySelector('.pinned').innerHTML = '';
    document.querySelector('.all').innerHTML = '';
  }

  showTask(tasks) {
    tasks.forEach((elem) => {
      const newTask = document.createElement('li');
      newTask.innerHTML = `
         <div class="task" >
            <div class="text">${elem.text}</div> 
            <div id="${elem.id}" class="label"></div>
         </div>`;

      if (!elem.pin) {
        document.querySelector('.all').insertAdjacentElement('beforeend', newTask);
      } else {
        document.querySelector('.pinned').insertAdjacentElement('beforeend', newTask);
        document.getElementById(`${elem.id}`).textContent = 'V';
      }
    });

    if (document.querySelectorAll('.pinned .task').length === 0) {
      document.querySelector('.pinned').innerHTML = '<li>No pinned tasks</li>';
    }
  }
}
