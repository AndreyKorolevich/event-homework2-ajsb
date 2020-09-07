import Controller from './Controller';
import Model from './Model';
import View from './View';

const ViewTask = new View();
const ModelTask = new Model();
const ControollerTask = new Controller(ModelTask, ViewTask);

ControollerTask.start();
