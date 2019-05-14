const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Please go to /api/customers to see data");
});

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, name: "Phong khoang", age: 22 },
    { id: 2, name: "Thai Hoang", age: 25 },
    { id: 3, name: "Nhat Nam", age: 23 },
    { id: 4, name: "Bich Phuong", age: 22 }
  ];

  res.json(customers);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
