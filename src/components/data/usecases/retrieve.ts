export async function retrieve(state: string) {
  const data: any = localStorage.getItem(state);
  return data;
}

export default retrieve;
