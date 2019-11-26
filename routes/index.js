var express = require('express');
var router = express.Router();


var data = {
  "data": [{
    "expire_date": "2016-05-02 15:35",
    "username": "王小虎1",
    "email": "1218392210@qq.com",
    "phone": "18435189212",
    "dateflag":false,
    "usernameflag":false,
    "emailflag":false,
    "phoneflag":false,
  },
  {
    "expire_date": "2016-05-02 15:35",
    "username": "王小虎2",
    "email": "1218392210@qq.com",
    "phone": "18435189212",
    "dateflag":false,
    "usernameflag":false,
    "emailflag":false,
    "phoneflag":false,
  },
  {
    "expire_date": "2016-05-02 15:35",
    "username": "王小虎3",
    "email": "1218392210@qq.com",
    "phone": "18435189212",
    "dateflag":false,
    "usernameflag":false,
    "emailflag":false,
    "phoneflag":false,
  },
 
  ]
}

var data2 = {
  "data": [{
    "date": "2016-05-02 15:35",
    "name": "王小虎3",
    "email": "1218392210@qq.com",
    "phone": "184351892dsadadaa12"
  },
  {
    "date": "2016-05-02 15:35",
    "name": "赵小虎",
    "email": "1218392210@qq.com",
    "phone": "18435189212"
  },
  {
    "date": "2016-05-02 15:35",
    "name": "张小虎",
    "email": "1218392210@qq.com",
    "phone": "18435189212"
  },
  {
    "date": "2016-05-02 15:35",
    "name": "刘某",
    "email": "1218392210@qq.com",
    "phone": "18435189212"
  },
  {
    "date": "2016-05-02 15:35",
    "name": "赵小虎",
    "email": "1218392210@qq.com",
    "phone": "18435189212"
  }
  ]
}


var data3 = {
  "data": [{
    "date": "2016-05-02 15:35",
    "name": "王小虎3",
    "email": "1218392210@qq.com",
    "phone": "184351892dsadadaa12"
  },
  {
    "date": "2016-05-02 15:35",
    "name": "赵小虎",
    "email": "1218392210@qq.com",
    "phone": "18435189212"
  }

  ]
}
var option = {
  "option": [
    {
      "name": "张三",
      "permissionList": [
        {
          "menuName": "安全服务器配置",
          "flag": false,
          "children": ["配置1", "配置2"]
        },
        {
          "menuName": "数据来源可视化",
          "flag": false,
          "children": ["可视化1", "可视化2"]
        }
      ]
    },
    {
      "name": "李四",
      "permissionList": [
        {
          "menuName": "安全服务器配置",
          "flag": false,
          "children": ["配置1", "配置2"]
        }
      ]
    },
    {
      "name": "王五",
      "permissionList": [
        {
          "menuName": "安全服务器配置",
          "flag": false,
          "children": ["配置1", "配置2"]
        },
        {
          "menuName": "安全服务器配置2",
          "flag": false,
          "children": ["配置1", "配置2"]
        },
        {
          "menuName": "安全服务器配置3",
          "flag": false,
          "children": ["配置1", "配置2"]
        }, {
          "menuName": "安全服务器配置4",
          "flag": false,
          "children": ["配置1", "配置2"]
        }
      ]
    }
  ]
}

option2 = [
  {
    "name": "安全服务配置0",
    "flag": false,
    children: [
      {
        "instanceName": "子项01",
        "instanceID": 1
      }, {
        "instanceName": "子项02",
        "instanceID": 2
      }

    ]
  },
  {
    "name": "数据来源可视化",
    "flag": false,
    children: [
      {
        "instanceName": "子项03",
        "instanceID": 3
      }, {
        "instanceName": "子项04",
        "instanceID": 4
      }

    ]
  },


]


var tableData= [
  {
    groupname: "group1",
    config: [
      {
        inatance: "instance1",
        ip: "192.168.1.1",
        port: "3000",
        connect: "连接",
        init_status: "已初始化",
        value: ""
      },
      {
        inatance: "instance2",
        ip: "192.168.1.1",
        port: "3000",
        connect: "连接",
        init_status: "已初始化",
        value: ""
      }
    ]
  },
  {
    groupname: "group2",
    config: [
      {
        inatance: "instance1",
        ip: "192.168.1.1",
        port: "3000",
        connect: "连接",
        init_status: "已初始化",
        value: ""
      },
      {
        inatance: "instance2",
        ip: "192.168.1.1",
        port: "3000",
        connect: "连接",
        init_status: "已初始化",
        value: ""
      }
    ]
  }
]
/* GET home page. */
router.get('/data', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.json(data);
});

//这里是用户关联的 group
router.get('/permission', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.json(option);
});


//这里是 权限列表
router.get('/permission2', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.json(option2);
});



//登录
router.post('/auth/login', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  res.send("logged_in");
});



//获取用户权限设置列表

const user1 = {
  "username": "张三",
  "安全服务器配置": [1, 4, 3],
  "数据来源可视化": [1, 4]
}

const user2 = {
  "username": "李四",
  "安全服务器配置": [1, 4, 3]
}

const user3 = {
  "username": "王五",
  "安全服务器配置": [1, 4, 3],
  "安全服务器配置2": [1, 4, 3],
  "安全服务器配置3": [1, 4, 3],
  "安全服务器配置4": [1, 2, 3],

}
router.post('/getUserPermission', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body.username);
  switch (req.body.username) {
    case "张三":
      res.send(user1);
      break;
    case "李四":
      res.send(user2);
      break;
    case "王五":
      res.send(user3);
      break;

  }

});

//获取 用户信息
// router.get('/user/info', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send({"code":200,"status":"success","data":{"roles":["Admin"]}});
// });



// 登出
// router.post('/user/logout', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send({"code":200,"status":"success","data":"sucess"});
// });



router.post('/editPerson', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.query)
  res.json(data2);
});

router.post('/delPerson', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.query)
  res.json(data3);
});



//instance实例 信息获取
router.get('/auth/instance', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.json(tableData);
});
module.exports = router;
