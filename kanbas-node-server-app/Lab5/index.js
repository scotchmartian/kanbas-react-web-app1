import PathParameters from "./PathParameters.js";
export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });

export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });  
}
export default function GetModuleName (app) {
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });
  app.get("/lab5/modle/name", (req, res) => {
    res.json(module.name);
  });  
  PathParameters(app);
  

  };
  
  