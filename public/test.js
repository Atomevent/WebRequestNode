const input = document.getElementsByName("IP")[0];
const form = document.getElementsByName("form")[0];
const forward = document.getElementsByName("f")[0];
const left = document.getElementsByName("l")[0];
const right = document.getElementsByName("r")[0];
const stop = document.getElementsByName("s")[0];
var url;

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  url = input.value;
  console.log(url);
});

forward.addEventListener("click",(e)=>{
    fetch(`http://${url}/f`, {
        method: 'GET',
       
        headers:{
        "Accept":"text/plain,application/json,*/*",
        "Content-type":"text/plain"
        },
     
      })
      .then(response => response.text())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    console.log("clickf");
  
});
left.addEventListener("click",(e)=>{
    fetch(`http://${url}/l`, {
        method: 'GET',
    
        headers:{
        "Accept":"text/plain,application/json,*/*",
        "Content-type":"text/plain"
        },
     
      })
      .then(response => response.text())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    console.log("clickl");
});
right.addEventListener("click",(e)=>{
    fetch(`http://${url}/r`, {
        method: 'GET',
        
        headers:{
        "Accept":"text/plain,application/json,*/*",
        "Content-type":"text/plain"
        },
     
      })
      .then(response => response.text())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    console.log("clickr");
  
})
stop.addEventListener("click",(e)=>{
    fetch(`http://${url}/s`, {
        method: 'GET',
        
        headers:{
        "Accept":"text/plain,application/json,*/*",
        "Content-type":"text/plain"
        },
     
      })
      .then(response => response.text())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    console.log("clicks");
  
});
