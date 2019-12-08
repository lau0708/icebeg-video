
export let checkNull = (val)=>{
  if(val !== 0 && val !== '0' && !val){
    return '--'
  }
  return val
};

let formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n
};
export let dateTime=(val)=>{
  if(!val){
    return "--"
  }
  let date=new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('-')+' ' + [hour, minute, second].map(formatNumber).join(':')

}


