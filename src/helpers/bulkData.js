const board = require("../models/board");
const user = require("../models/user");
const task = require("../models/task");
const tareas = [
  { name: "ir a comprar", detail: "cosas", boarid: 1 },
  { name: "gym", detail: "anda a entrenar", boardid: 1 },
  { name: "estudiar ", detail: " c#", boardid: 1 },
  { name: "dormir", detail: "+3hs", boardid: 1 }
];

async function load(req,res) {
  const us = await user.create({ name: "pablo" });
  const bo = await board.create({ name: "otra lista" });
  const tsk = await task.bulkCreate(tareas);
  await us.addBoard(bo);
  await bo.addTasks(tsk);
  res.send('done')
}
module.exports = load
