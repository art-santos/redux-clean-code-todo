/*
  That's the function responsible for retrieving data from the localstorage, 
  but it also could retrive the data from an api or anywhere else.
*/

export async function retrieve(state: string) {
  const data: any = localStorage.getItem(state);
  return data;

  
}

export default retrieve;
