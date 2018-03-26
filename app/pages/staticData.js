var staticData = {};
staticData.bookTitleName = [
    {
        name: "newest",
        value: "最新上架",
        type: "0",
        "more": "&gt;"
    },
    {
        name: "recommend",
        value: "精品推荐",
        type: "1",
        "more": "&gt;"
    }
];

//首页数据(书包),clickable 是否可点击,0:可点击,1:不可点击
staticData.HomeBagData = [
    {name: "规划教材", iconname: "teachingMaterial", clickable: "0", code: "5350ea440970ee45991c2c25",},
    {name: "教材套餐", iconname: "bookPackage", clickable: "0", type: "0", code: "",},
    {name: "西医图书", iconname: "westernMedicineBooks", clickable: "0", code: "56989e3b7c1f11d1c30614e5",},
    {name: "中医图书", iconname: "chineseMedicineBooks", clickable: "0", code: "56989e3b7c1f11d1c30614e6",},
    {name: "免费专区", iconname: "freeZone", clickable: "0", type: "1", code: "",},
];

//首页PC数据(书包)
staticData.HomePcBagData = [
    {name: "规划教材", iconname: "teachingMaterial", clickable: "0", code: "5350ea440970ee45991c2c25",},
    {name: "教材套餐", type: "0", iconname: "bookPackage", clickable: "0", code: "",},
    {name: "西医图书", iconname: "westernGrayMedicineBooks", clickable: "1", code: "56989e3b7c1f11d1c30614e5",},
    {name: "中医图书", iconname: "chineseGrayMedicineBooks", clickable: "1", code: "56989e3b7c1f11d1c30614e6",},
    {name: "免费专区", type: "1", iconname: "freeGrayZone", clickable: "1", code: "",}
];

staticData.HomeBagDataNew = [
    {name: "规划教材", iconname: "teachingMaterial", clickable: "0", code: "5350ea440970ee45991c2c25",},
    {name: "教材套餐", type: "0", iconname: "bookPackage", clickable: "0", code: "",},
    {name: "西医图书", iconname: "westernMedicineBooks", clickable: "0"},
    {name: "中医图书", iconname: "chineseMedicineBooks", clickable: "0", code: "56989e3b7c1f11d1c30614e6",},
    {name: "免费专区", type: "1", iconname: "freeZone", clickable: "0", code: "",},
    {name: "经典手术", type: "2", iconname: "surgery", clickable: "0", code: "",},
    {name: "杂志期刊", type: "3", iconname: "magazine", clickable: "0", code: "",},
    {name: "结业考核", type: "4", iconname: "exam-pack", clickable: "0", code: "",},
];

//图书类型
staticData.bookType = [{code: "0", name: "教材"}, {code: "1", name: "非教材"}, {code: "", name: "教材"}];

/*
var categorys = [{"id": "1", "name": "中医"}, {"id": "2", "name": "西医"}, {"id": "3", "name": "专业"}, {
    "id": "4",
    "name": "科普"
}];
 */

var neweastInfor = {"name": "newest", "value": "最新上架", "more": "更多&gt;&gt;"};
var suggestInfor = {"name": "recommend", "value": "精品推荐", "more": "更多&gt;&gt;"};
