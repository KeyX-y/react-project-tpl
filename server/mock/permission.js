const  permission_list = {
	"rtn_code":"0",
	"list":[
		{
			"validateType":"regex",
			"available":true,
			"name":"设备管理权限",
			"index":0,
			"pid":22,
			"id":23,
			"url":"/webiotupgradeservice/deviceInfo.*",
			"resourceType":"button"
		},
		{
			"validateType":"regex",
			"available":true,
			"name":"设备信息管理权限",
			"index":0,
			"pid":21,
			"id":22,
			"url":"/webiotupgradeservice/deviceInfo.*",
			"resourceType":"button"
		},
		{
			"validateType":"regex",
			"available":true,
			"name":"固件上传权限",
			"index":0,
			"pid":20,
			"id":21,
			"url":"/webfileupapplication.*",
			"resourceType":"button"
		},
		{
			"validateType":"regex",
			"available":true,
			"name":"设备升级权限",
			"index":0,
			"pid":19,
			"id":20,
			"url":"/webiotupgradeservice/upgradeTask.*",
			"resourceType":"button"
		},
		{
			"validateType":"regex",
			"available":true,
			"name":"固件管理权限",
			"index":0,
			"pid":18,
			"id":19,
			"url":"/webiotupgradeservicer/package.*",
			"resourceType":"button"
		},
		{
			"validateType":"regex",
			"available":true,
			"name":"升级历史权限",
			"index":0,
			"pid":17,
			"id":18,
			"url":"/webiotupgradeservice/upgradeHistory.*",
			"resourceType":"button"
		},
		{
			"validateType":"regex",
			"available":true,
			"name":"应用管理权限",
			"index":0,
			"pid":16,
			"id":17,
			"url":"/webuser/app.*",
			"resourceType":"button"
		},
		{
			"validateType":"regex",
			"available":true,
			"name":"员工信息权限",
			"index":0,
			"pid":15,
			"id":16,
			"url":"/webuser/staffInfo.*",
			"resourceType":"button"
		},
		{
			"validateType":"regex",
			"available":true,
			"name":"控制类型权限",
			"index":0,
			"pid":14,
			"id":15,
			"url":"/webiotupgradeservice/deviceControl.*",
			"resourceType":"button"
		},
		{
			"validateType":"regex",
			"available":true,
			"name":"公司信息权限",
			"index":0,
			"pid":13,
			"id":14,
			"url":"/webuser/company.*",
			"resourceType":"button"
		}
	],
	"pageBean":{
		"total":21,
		"size":10,
		"totalPage":3,
		"page":1
	},
	"rtn_msg":"OK"
};

const  permission_tree = {
	"rtn_code":"0",
	"list":[
		{
			"validateType":"field",
			"children":[
				{
					"validateType":"regex",
					"children":[],
					"available":true,
					"name":"公司信息权限",
					"index":0,
					"pid":13,
					"id":14,
					"url":"/webuser/company.*",
					"resourceType":"button"
				}
			],
			"available":true,
			"name":"公司信息",
			"index":1,
			"pid":0,
			"id":1,
			"url":"/iot/CompanyInfo",
			"resourceType":"menu"
		},
		{
			"validateType":"field",
			"children":[
				{
					"validateType":"regex",
					"children":[],
					"available":true,
					"name":"员工信息权限",
					"index":0,
					"pid":15,
					"id":16,
					"url":"/webuser/staffInfo.*",
					"resourceType":"button"
				}
			],
			"available":true,
			"name":"员工信息",
			"index":2,
			"pid":1,
			"id":2,
			"url":"/iot/StaffInfo",
			"resourceType":"menu"
		},
		{
			"validateType":"field",
			"children":[
				{
					"validateType":"regex",
					"children":[],
					"available":true,
					"name":"应用管理权限",
					"index":0,
					"pid":16,
					"id":17,
					"url":"/webuser/app.*",
					"resourceType":"button"
				}
			],
			"available":true,
			"name":"应用管理",
			"index":3,
			"pid":2,
			"id":3,
			"url":"/iot/App",
			"resourceType":"menu"
		},
		{
			"validateType":"field",
			"children":[
				{
					"validateType":"regex",
					"children":[],
					"available":true,
					"name":"固件管理权限",
					"index":0,
					"pid":18,
					"id":19,
					"url":"/webiotupgradeservicer/package.*",
					"resourceType":"button"
				},
				{
					"validateType":"regex",
					"children":[],
					"available":true,
					"name":"固件上传权限",
					"index":0,
					"pid":20,
					"id":21,
					"url":"/webfileupapplication.*",
					"resourceType":"button"
				}
			],
			"available":true,
			"name":"固件管理",
			"index":4,
			"pid":3,
			"id":4,
			"url":"/iot/FirmwareManagement",
			"resourceType":"menu"
		},
		{
			"validateType":"field",
			"children":[
				{
					"validateType":"regex",
					"children":[],
					"available":true,
					"name":"设备管理权限",
					"index":0,
					"pid":22,
					"id":23,
					"url":"/webiotupgradeservice/deviceInfo.*",
					"resourceType":"button"
				}
			],
			"available":true,
			"name":"设备管理",
			"index":5,
			"pid":4,
			"id":5,
			"url":"/iot/EquipmentManage",
			"resourceType":"menu"
		},
		{
			"validateType":"field",
			"children":[
				{
					"validateType":"regex",
					"children":[],
					"available":true,
					"name":"设备信息管理权限",
					"index":0,
					"pid":21,
					"id":22,
					"url":"/webiotupgradeservice/deviceInfo.*",
					"resourceType":"button"
				}
			],
			"available":true,
			"name":"设备信息管理",
			"index":6,
			"pid":5,
			"id":6,
			"url":"/iot/List",
			"resourceType":"menu"
		},
		{
			"validateType":"field",
			"children":[
				{
					"validateType":"regex",
					"children":[],
					"available":true,
					"name":"设备升级权限",
					"index":0,
					"pid":19,
					"id":20,
					"url":"/webiotupgradeservice/upgradeTask.*",
					"resourceType":"button"
				}
			],
			"available":true,
			"name":"设备升级",
			"index":7,
			"pid":6,
			"id":7,
			"url":"/iot/Upgrade",
			"resourceType":"menu"
		},
		{
			"validateType":"field",
			"children":[
				{
					"validateType":"regex",
					"children":[],
					"available":true,
					"name":"升级历史权限",
					"index":0,
					"pid":17,
					"id":18,
					"url":"/webiotupgradeservice/upgradeHistory.*",
					"resourceType":"button"
				}
			],
			"available":true,
			"name":"升级历史",
			"index":8,
			"pid":7,
			"id":8,
			"url":"/iot/OperationHistroy",
			"resourceType":"menu"
		},
		{
			"validateType":"field",
			"children":[
				{
					"validateType":"regex",
					"children":[],
					"available":true,
					"name":"控制类型权限",
					"index":0,
					"pid":14,
					"id":15,
					"url":"/webiotupgradeservice/deviceControl.*",
					"resourceType":"button"
				}
			],
			"available":true,
			"name":"控制类型",
			"index":9,
			"pid":8,
			"id":9,
			"url":"/iot/ControlType",
			"resourceType":"menu"
		},
		{
			"validateType":"field",
			"children":[
				{
					"validateType":"regex",
					"children":[],
					"available":true,
					"name":"设备控制权限",
					"index":0,
					"pid":12,
					"id":13,
					"url":"/webiotupgradeservice/deviceControl.*",
					"resourceType":"button"
				}
			],
			"available":true,
			"name":"设备控制",
			"index":10,
			"pid":9,
			"id":10,
			"url":"/iot/EquipmentControl",
			"resourceType":"menu"
		}
	],
	"rtn_msg":"OK"
} ;
const permissions_by_id = {
	"data":{
		"validateType":"regex",
		"children":[],
		"available":true,
		"name":"员工信息权限",
		"index":0,
		"pid":15,
		"id":16,
		"url":"/webuser/staffInfo.*",
		"resourceType":"button"
	},
	"rtn_code":"0",
	"rtn_msg":"OK"
}
module.exports = {
	permission_list,
	permission_tree,
	permissions_by_id
}