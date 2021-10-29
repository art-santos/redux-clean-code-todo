/*
  This function is going to be responsible for setting the state in the localstorage, but it also could use cookies 
  or many other alternatives to persist the state.
*/

export function persist(todoState: object) {
  localStorage.setItem("todo", JSON.stringify(todoState));
}
