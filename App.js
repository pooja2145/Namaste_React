const heading = React.createElement(
  "h1",
  {
    id: "heading",
    name: "xyz", //attributes
  },
  "Hello World"
);

const elem = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(elem);
