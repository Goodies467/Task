let p = new Promise((resolve,reject)=>{
  setTimeout(()=> {
      console.log('定时器代码执行')
      resolve('执行成功')
  },2000)
})
p.then(res=>{
  console.log(res)  //执行成功
})

function timeout(delay = 100) {
  return new Promise(resolve => {
      setTimeout(resolve, delay)
  })
};
timeout(2000).then(() => {//每隔两秒打印一个数字
  console.log('1');
  timeout(2000).then(() => {
      console.log('2');
      timeout(2000).then(() => {
          console.log('3');
      })
  })
})