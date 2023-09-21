
document.querySelector('button').addEventListener('click',()=>{
    let data=document.getElementById('input').value;

    if(data===""){
        alert("Please Enter the Data");
    }else{
      try{
        let elem= document.createElement('li');
        elem.classList.add('data');
       elem.textContent=`${data}`;
       itemList.append(elem);
       let remove=document.createElement('button');
       remove.textContent="Delete";
       remove.classList.add('remove');
       elem.appendChild(remove);
       remove.addEventListener('click',()=>{
        elem.remove();
        data.value = "";
       })
      }catch(e){
        console.log(e)
  }}
})
document.querySelector('.material-symbols-outlined').addEventListener('click', () => {
  const inputElement = document.getElementById('input');
  inputElement.focus();
});
