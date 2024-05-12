const username = "coalition"
const password = "skills-test"
const auth = btoa(`${username}:${password}`)
 const apiUrl ="https://fedskillstest.coalitiontechnologies.workers.dev"

export async function getPatients(){
 const res = await fetch(apiUrl,{
  method:"GET",
  headers:{"Authorization":`Basic ${auth}`}
 });
 const data = await res.json()
 console.log(data)
 return data
}
getPatients()
