fetch("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => console.log(data[0].name));
