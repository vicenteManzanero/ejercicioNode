const Task = require("../models/task");

async function createTask(req, res) {
  const task = new Task();
  const params = req.body;
  task.tittle = params.tittle;
  task.description = params.description;
  try {
    const taskStore = await task.save();
    if (!taskStore) {
      res.status(400).send({ msg: "No se ha guardado la tarea" });
    } else {
      res.status(200).send({ task: taskStore });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getTask(req, res) {
  try {
    const tasks = await Task.find().sort({ created_at: -1 });
    if (!tasks) {
      res.status(400).send({ msg: "Error al obtener tareas" });
    } else {
      res.status(200).send(tasks);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getTaskId(req, res) {
    const idTask = req.params.id;
    try {
        const task = await Task.findById(idTask);
        if (!task) {
          res.status(400).send({ msg: "No se ha encontrado la tarea" });
        } else {
          res.status(200).send(task);
        }
      } catch (error) {
        res.status(500).send(error);
      }
}

async function updateTask(req, res) {
    const idTask = req.params.id;
    const params = req.body;
    try {
        const task = await Task.findByIdAndUpdate(idTask,params);
        if (!task) {
          res.status(400).send({ msg: "No se ha podido actualizar la tarea" });
        } else {
          res.status(200).send({ msg: "Tarea actualizada correctamente" });
        }
      } catch (error) {
        res.status(500).send(error);
      }
}


async function deleteTask(req,res) {
  const idTask = req.params.id;
  try {
      const task = await Task.findByIdAndDelete(idTask);
      if (!task) {
        res.status(400).send({ msg: "No se ha podido eliminar la tarea" });
      } else {
        res.status(200).send({ msg: "Tarea eliminada correctamente" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
}

module.exports = {
  createTask,
  getTask,
  getTaskId,
  updateTask,
  deleteTask
};
