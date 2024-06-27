app.get("/lab5/module/name", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(module.name);
  });
