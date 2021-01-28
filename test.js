
const forward = document.getElementsByName("f")[0];
const left = document.getElementsByName("l")[0];
const right = document.getElementsByName("r")[0];
const stop = document.getElementsByName("s")[0];

forward.addEventListener("click",(e)=>{
    fetch('http://192.168.1.52:5500/f', {
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
    fetch('http://192.168.1.52:5500/l', {
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
    fetch('http://192.168.1.52:5500/r', {
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
    fetch('http://192.168.1.52:5500/s', {
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
