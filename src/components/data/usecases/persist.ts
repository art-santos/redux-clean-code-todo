export function persist(todoState: object) {
  localStorage.setItem("todo", JSON.stringify(todoState));
}
