const board = require("../models/board");
const user = require("../models/user");
const task = require("../models/task");
const tareas = [
  { name: "ir a comprar", detail: "cosas"},
  { name: "gym", detail: "anda a entrenar",},
  { name: "estudiar ", detail: " c#",},
  { name: "dormir", detail: "+3hs",}
];
const tareas2 = [
  { name: "ir a comprar otras cosas", detail: "mas cosas" },
  { name: "ir al gym otra vez", detail: "entrenar mas" },
  { name: "estudiar ", detail: " node " },
  { name: "dormir", detail: "6hs" }
];

async function load(req,res) {
  const us = await user.create({ name: "pablo" });
  const bo = await board.create({ name: "una lista" });
  const tsk = await task.bulkCreate(tareas);
  const bo2 = await board.create({ name: "otra lista" });
  const tsk2 = await task.bulkCreate(tareas2);
  await us.addBoard(bo);
  await bo.addTasks(tsk);
  await us.addBoard(bo2)
  await bo2.addTasks(tsk2)
  res.send('done')
}
module.exports = load
