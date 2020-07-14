import Mock from 'mockjs'
// user初始数据
let userData = [];
for (let i = 0; i < 30; i++) {
    let template = {
        'key': i,
        'uname': 11111 + i,
        'name': '@cname',
        'post': '岗位00' + i,
        'numOffice': 5350123 + i,
        'numSmart': 1860000123 + i,
        // 'numEmail': '6768' + i+'@163.com',
        // 'mark': '有效/无效' + i,

    }
    userData.push(template)

}
Mock.mock('userData.com', 'post', userData)
