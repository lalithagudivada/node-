const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let arr = [];
    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == yesterday) {
        arr.push(all[i]);
      }
    }
    return arr;
  };

  const dueToday = () => {
    let arr = [];

    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == today) {
        arr.push(all[i]);
      }
    }
    return arr;
  };

  const dueLater = () => {
    let arr = [];

    for (let i = 0; i < all.length; i++) {
      if (all[i].dueDate == tomorrow) {
        arr.push(all[i]);
      }
    }
    return arr;
  };

  const toDisplayableList = (list) => {
    let str = "";
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i].completed == false) {
        str = str + "[" + " ] ";
      } else {
        str = str + "[" + "x] ";
      }
      if (list[i].dueDate == today) {
        str += list[i].title + " " + "\n";
      } else {
        if (i == list.length - 1 && tomorrow == list[i].dueDate) {
          str += list[i].title + ". " + list[i].dueDate + "\n";
        } else {
          str += list[i].title + " " + list[i].dueDate + "\n";
        }
      }
    }
    return str;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
