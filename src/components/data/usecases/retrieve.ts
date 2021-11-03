import getApi from "./get-api";

/*
  That's the function responsible for retrieving data from the localstorage, 
  but it also could retrive the data from an api or anywhere else.
*/


export async function retrieve() {
  const test:any = await getApi('https://api.github.com/repos/every-io/demo-issues/issues?state=all');
  return test;

  
}

export default retrieve;
