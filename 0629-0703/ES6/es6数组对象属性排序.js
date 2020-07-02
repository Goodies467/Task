let obj = [
    { id: 1, role: 8 },
    { id: 2, role: 2 },
    { id: 3, role: 6 },
    { id: 4, role: 4 }
]
//对obj的role属性进行升序排列
obj1 = obj.sort((a, b) => a.role - b.role);
console.log(obj1);
//对obj的id属性进行降序排列
obj2 = obj.sort((a, b) => b.id - a.id);
console.log(obj2);