const TOTAL_LEVELS = 12;
const LEVEL_CONFIG = {
  1: {
    stage: 1,
    theme: "基础问候",
    merchantLine: "哟，来逛菜场啊？早啊！",
    targetWords: ["你好", "再见", "早上好", "下午好"],
  },
  2: {
    stage: 2,
    theme: "招呼老板",
    merchantLine: "哎！想买点什么？随便挑。",
    targetWords: ["老板", "这个多少钱", "便宜点", "我要这个", "谢谢"],
  },
  3: {
    stage: 3,
    theme: "数词 (1-10)",
    merchantLine: "这些刚好是一捆，你想要几捆？",
    targetWords: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
  },
  4: {
    stage: 4,
    theme: "数词 (进阶)",
    merchantLine: "这些可要不少钱，你看看你要多少钱的？",
    targetWords: ["十一", "二十", "一百", "一千", "一万"],
  },
  5: {
    stage: 5,
    theme: "量词 (1)",
    merchantLine: "这个怎么拿？是买一整块还是买一点？",
    targetWords: ["一杯", "一串", "一次", "一点", "一个", "一块", "一片"],
  },
  6: {
    stage: 6,
    theme: "量词 (2)",
    merchantLine: "这些都是新鲜分装的，你要多少？",
    targetWords: ["一条", "一碗", "一张", "一只", "一种"],
  },
  7: {
    stage: 7,
    theme: "调料储备",
    merchantLine: "做菜没调料可不行，要带点什么吗？",
    targetWords: ["盐", "油", "酱油", "醋", "蚝油", "料酒", "豆瓣酱"],
  },
  8: {
    stage: 8,
    theme: "食材选购 (1)",
    merchantLine: "今天的番茄和牛肉都很正，要不要？",
    targetWords: ["番茄", "鸡蛋", "黄瓜", "牛肉", "河粉"],
  },
  9: {
    stage: 9,
    theme: "食材选购 (2)",
    merchantLine: "这活虾和活鱼可是刚送到的，看看？",
    targetWords: ["茄子", "胡萝卜", "排骨", "虾", "鱼"],
  },
  10: {
    stage: 10,
    theme: "食材选购 (3)",
    merchantLine: "炖汤的话，姜和葱得来一点吧？",
    targetWords: ["鸡", "姜", "水", "葱", "玉米"],
  },
  11: {
    stage: 11,
    theme: "食材选购 (4)",
    merchantLine: "你要什么？",
    targetWords: ["粉丝", "肉沫", "豆芽", "五花肉"],
  },
  12: {
    stage: 12,
    theme: "结账道别",
    merchantLine: "一共三块一斤，送你根葱，下次再来！",
    targetWords: ["看看要什么", "三块一斤", "送你", "下次再来"],
  },
};

const WORD_CATEGORY_INDEX = {
  SOCIAL: new Set(["你好", "再见", "早上好", "下午好", "老板", "谢谢", "下次再来"]),
  QUANTITY: new Set([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "20",
    "100",
    "1000",
    "10000",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "二十",
    "一百",
    "一千",
    "一万",
    "一杯",
    "一串",
    "一次",
    "一点",
    "一个",
    "一块",
    "一片",
    "一条",
    "一碗",
    "一张",
    "一只",
    "一种",
    "一斤",
  ]),
  INGREDIENT: new Set([
    "番茄",
    "鸡蛋",
    "黄瓜",
    "牛肉",
    "河粉",
    "茄子",
    "胡萝卜",
    "排骨",
    "虾",
    "鱼",
    "鸡",
    "姜",
    "水",
    "葱",
    "玉米",
    "扇贝",
    "粉丝",
    "肉沫",
    "豆芽",
    "五花肉",
    "盐",
    "油",
    "酱油",
    "醋",
    "蚝油",
    "料酒",
    "豆瓣酱",
  ]),
  MERCHANT_ROLE: new Set(["看看要什么", "三块一斤", "送你", "下次再来"]),
};

const SOCIAL_FEEDBACK_LINES = ["好嘞！", "中意你这个讲法！", "靓仔/靓女识讲喔！", "收到！"];
const INGREDIENT_IMAGE_MAP = {
  盐: "./assets/ingredients/level-01-01.jpg",
  油: "./assets/ingredients/level-07-01.jpg",
  酱油: "./assets/ingredients/level-07-02.jpg",
  醋: "./assets/ingredients/level-07-03.jpg",
  蚝油: "./assets/ingredients/level-07-04.jpg",
  料酒: "./assets/ingredients/level-07-02.jpg",
  豆瓣酱: "./assets/ingredients/level-07-03.jpg",
  番茄: "./assets/ingredients/level-03-01.jpg",
  鸡蛋: "./assets/ingredients/level-03-02.jpg",
  黄瓜: "./assets/ingredients/level-02-01.jpg",
  牛肉: "./assets/ingredients/level-05-02.jpg",
  河粉: "./assets/ingredients/level-05-04.jpg",
  茄子: "./assets/ingredients/level-09-01.jpg",
  胡萝卜: "./assets/ingredients/level-07-01.jpg",
  排骨: "./assets/ingredients/level-07-03.jpg",
  虾: "./assets/ingredients/level-10-02.jpg",
  鱼: "./assets/ingredients/level-12-01.jpg",
  鸡: "./assets/ingredients/level-06-02.jpg",
  姜: "./assets/ingredients/level-06-01.jpg",
  水: "./assets/ingredients/level-07-04.jpg",
  葱: "./assets/ingredients/level-04-05.jpg",
  玉米: "./assets/ingredients/level-07-02.jpg",
  扇贝: "./assets/ingredients/level-11-01.jpg",
  粉丝: "./assets/ingredients/level-11-02.jpg",
  肉沫: "./assets/ingredients/level-04-04.jpg",
  豆芽: "./assets/ingredients/level-05-01.png",
  五花肉: "./assets/ingredients/level-09-01.jpg",
};

const levelData = 
[
  {
    id: 1,
    title: "第1关:打招呼",
    lesson: "前置学习：你好=nei5 hou2;早晨=zou2 san4。先学会基础问候。",
    lessonAudios: [
      { src: "./assets/audio/level-01-01.mp3", text: "你好", jyutping: "nei5 hou2", meaning: "你好" },
      { src: "./assets/audio/level-01-02.mp3", text: "再见", jyutping: "zoi3 gin3", meaning: "再见" },
      { src: "./assets/audio/level-01-03.mp3", text: "早晨", jyutping: "zou2 san4", meaning: "早上好" },
      { src: "./assets/audio/level-01-04.mp3", text: "下午好", jyutping: "haa6 zau3 hou2", meaning: "下午好" },
    ],
    speechTests: [
      { testMeaning: "你好", speechTarget: "你好", speechAlternatives: ["您好"] },
      { testMeaning: "再见", speechTarget: "再见", speechAlternatives: ["再見"] },
      { testMeaning: "早上好", speechTarget: "早晨", speechAlternatives: ["早上好"] },
      { testMeaning: "下午好", speechTarget: "下午好", speechAlternatives: ["下午好"] },
    ],
    quiz: [
      {
        q: "“你好”对应哪句粤语？",
        options: ["nei5 hou2", "m4 goi1", "do1 ze6"],
        answer: "nei5 hou2",
      },
    ],
    reward: {
      name: "调料",
      desc: "通关奖励：各种调料，可用于烹饪。",
      image: "./assets/ingredients/level-01-01.jpg",
      images: ["./assets/ingredients/level-01-01.jpg"],
    },
  },
  {
    id: 2,
    title: "第2关:礼貌表达",
    lesson: "前置学习：老板=lou5 bo2,谢谢=do1 ze6(多谢)",
    lessonAudios: [
      { src: "./assets/audio/level-02-01.mp3", text:"老板", jyutping: "[lou5 bo2]", meaning: "老板" },
      { src: "./assets/audio/level-02-02.mp3", text:"这些多少钱", jyutping: "[zé5 sé1 do1 xiu2 qin2]", meaning: "这些多少钱" },
      { src: "./assets/audio/level-02-03.mp3", text:"老板 便宜点嘛", jyutping: "[lou5 ban2 pin4 yi4 dim2 ma3]", meaning: "老板，便宜点嘛" },
      { src: "./assets/audio/level-02-04.mp3", text:"我要这个", jyutping: "[ngo5 yiu3 zé5 go3]", meaning: "我要这个" },
      { src: "./assets/audio/level-02-05.mp3", text:"谢谢", jyutping: "[do1 ze6]", meaning: "谢谢" },
    ],
    speechTests: [
      { testMeaning: "老板", speechTarget: "老板", speechAlternatives: ["老板"] },
      { testMeaning: "这些多少钱", speechTarget: "这些多少钱", speechAlternatives: ["这些多少钱"] },
      { testMeaning: "老板 便宜点嘛", speechTarget: "老板 便宜点嘛", speechAlternatives: ["老板 便宜点嘛"] },
      { testMeaning: "我要这个", speechTarget: "我要这个", speechAlternatives: ["我要这个"] },
      { testMeaning: "谢谢", speechTarget: "谢谢", speechAlternatives: ["谢谢"] },
    ],
    quiz: [
      {
        q: "你要什么？",
        options: ["lou5 bo2","zé5 sé1 do1 xiu2 qin2","lou5 ban2 pin4 yi4 dim2 ma3","ngo5 yiu3 zé5 go3","do1 ze6"],
        answer: "ngo5 yiu3 zé5 go3",
      },
    ],
    reward: { 
      name: "黄瓜",
      desc: "通关奖励：恭喜你，你获得食材“黄瓜”，现在你可以制作“拌黄瓜”了。", 
      image: "./assets/ingredients/level-02-01.jpg",
      images: ["./assets/ingredients/level-02-01.jpg"],
    },
  },
  {
    id: 3,
    title: "第3关:数词练习1",
    lesson: "前置学习:1=yed1",
    lessonAudios: [
      { src: "./assets/audio/level-03-01.mp3", text: "一", jyutping: "[yed1]", meaning: "一" },
      { src: "./assets/audio/level-03-02.mp3", text: "二", jyutping: "[yi6]", meaning: "二" },
      { src: "./assets/audio/level-03-03.mp3", text: "三", jyutping: "[sam1]", meaning: "三" },
      { src: "./assets/audio/level-03-04.mp3", text: "四", jyutping: "[séi3]", meaning: "四" },
      { src: "./assets/audio/level-03-05.mp3", text: "五", jyutping: "[ng5]", meaning: "五" },
      { src: "./assets/audio/level-03-06.mp3", text: "六", jyutping: "[luk6]", meaning: "六" },
      { src: "./assets/audio/level-03-07.mp3", text: "七", jyutping: "[cat1]", meaning: "七" },
      { src: "./assets/audio/level-03-08.mp3", text: "八", jyutping: "[baat3]", meaning: "八" },
      { src: "./assets/audio/level-03-09.mp3", text: "九", jyutping: "[gau2]", meaning: "九" },
      { src: "./assets/audio/level-03-10.mp3", text: "十", jyutping: "[sap6]", meaning: "十" },
    ],
    speechTests: [
      { testMeaning: "一", speechTarget: "一", speechAlternatives: ["一"] },
      { testMeaning: "二", speechTarget: "二", speechAlternatives: ["二"] },
      { testMeaning: "三", speechTarget: "三", speechAlternatives: ["三"] },
      { testMeaning: "四", speechTarget: "四", speechAlternatives: ["四"] },
      { testMeaning: "五", speechTarget: "五", speechAlternatives: ["五"] },
      { testMeaning: "六", speechTarget: "六", speechAlternatives: ["六"] },
      { testMeaning: "七", speechTarget: "七", speechAlternatives: ["七"] },
      { testMeaning: "八", speechTarget: "八", speechAlternatives: ["八"] },
      { testMeaning: "九", speechTarget: "九", speechAlternatives: ["九"] }, 
      { testMeaning: "十", speechTarget: "十", speechAlternatives: ["十"] },
    ],      
    quiz: [
      {
        q: "你要多少个？",
        options: ["yed1", "yi6", "sam1","séi3","ng5","luk6","cat1","baat3","gau2","[sap6]"],
        answer: "yed1",
      },
    ],
    reward: { 
      name: "番茄炒蛋", 
      desc: "通关奖励：恭喜你，你获得食材“番茄”；“鸡蛋”，现在你可以制作“番茄炒蛋”了", 
      image: "./assets/ingredients/level-03-01.jpg",
      images: [
        "./assets/ingredients/level-03-01.jpg",
        "./assets/ingredients/level-03-02.jpg",
      ],
    },
  },
  {
    id: 4,
    title: "第4关:数词练习2",
    lesson: "前置学习: 11=seb6 yed1",
    lessonAudios: [
      { src: "./assets/audio/level-04-01.mp3", text: "11", jyutping: "[seb6 yed1]", meaning: "十一" },
      { src: "./assets/audio/level-04-02.mp3", text: "20", jyutping: "[yi6 seb6] ", meaning: "二十" },
      { src: "./assets/audio/level-04-03.mp3", text: "100", jyutping: "[yed1 bag3]", meaning: "一百" },
      { src: "./assets/audio/level-04-04.mp3", text: "1000", jyutping: "[yed1 qin1]", meaning: "一千" },
      { src: "./assets/audio/level-04-05.mp3", text: "10000", jyutping: "[yed1 man6]", meaning: "一万·" },
    ],
    speechTests: [
      { testMeaning: "十一", speechTarget: "十一", speechAlternatives: ["十一"] },
      { testMeaning: "二十", speechTarget: "二十", speechAlternatives: ["二十"] },
      { testMeaning: "一百", speechTarget: "一百", speechAlternatives: ["一百"] },
      { testMeaning: "一千", speechTarget: "一千", speechAlternatives: ["一千"] },
      { testMeaning: "一万", speechTarget: "一万", speechAlternatives: ["一万"] },
    ],
    quiz: [
      {
        q: "你要多少？",
        options: ["seb6 yed1", "yi6 seb6", "yed1 bag3","yed1 qin1","yed1 man6"],
        answer: "yi6 seb6",
      },
    ],
    reward: { 
      name: "肠粉", 
      desc: "通关奖励：恭喜你，你获得食材“小麦淀粉”；“玉米淀粉”；“粘米粉”；“肉沫”；“葱”，现在你可以制作“番茄炒蛋”了", 
      image: "./assets/ingredients/level-04-01.jpg",
      images: [
        "./assets/ingredients/level-04-01.jpg",
        "./assets/ingredients/level-04-02.jpg",
        "./assets/ingredients/level-04-03.jpg",
        "./assets/ingredients/level-04-04.jpg",
        "./assets/ingredients/level-04-05.jpg",
      ],
    },
  },
  {
    id: 5,
    title: "第5关:量词练习1",
    lesson: "前置学习: 一杯=yed1 bui1",
    lessonAudios: [
      { src: "./assets/audio/level-05-01.mp3", text: "一杯", jyutping: "[yed1 bui1]", meaning: "一杯" },
      { src: "./assets/audio/level-05-02.mp3", text: "一串", jyutping: "[yed1 qun3]", meaning: "一串" },
      { src: "./assets/audio/level-05-03.mp3", text: "一次", jyutping: "[yed1 qi3]", meaning: "一次" },
      { src: "./assets/audio/level-05-04.mp3", text: "一点", jyutping: "[[yed1 dim2]", meaning: "一点" },
      { src: "./assets/audio/level-05-05.mp3", text: "一个", jyutping: "[yed1 go3]", meaning: "一个" },
      { src: "./assets/audio/level-05-06.mp3", text: "一块", jyutping: "[yed1 fai3]", meaning: "一块" },
      { src: "./assets/audio/level-05-07.mp3", text: "一片", jyutping: "[yed1 pin3]", meaning: "一片" },
    ],
    speechTests: [
      { testMeaning: "一杯", speechTarget: "一杯", speechAlternatives: ["一杯"] },
      { testMeaning: "一串", speechTarget: "一串", speechAlternatives: ["一串"] },
      { testMeaning: "一次", speechTarget: "一次", speechAlternatives: ["一次"] },
      { testMeaning: "一点", speechTarget: "一点", speechAlternatives: ["一点"] },
      { testMeaning: "一个", speechTarget: "一个", speechAlternatives: ["一个"] },
      { testMeaning: "一块", speechTarget: "一块", speechAlternatives: ["一块"] },
      { testMeaning: "一片", speechTarget: "一片", speechAlternatives: ["一片"] },
    ],
    quiz: [
      {
        q: "一杯的粤语是什么",
        options: ["yed1 bui1", "yed1 qun3", "yed1 qi3","yed1 dim2","yed1 go3","[yed1 fai3","yed1 pin3"],
        answer: "yed1 bui1",
      },
    ],
    reward: { 
      name: "干炒牛河", 
      desc: "通关奖励：恭喜你，你获得食材“豆芽”；“牛肉”；“洋葱”；“河粉”；现在你可以制作“干炒牛河”了。",
      image: "./assets/ingredients/level-05-01.png",
      images: [
        "./assets/ingredients/level-05-01.png",
        "./assets/ingredients/level-05-02.jpg",
        "./assets/ingredients/level-05-03.jpg",
        "./assets/ingredients/level-05-04.jpg",
      ],
    },
  },
  {
    id: 6,
    title: "第6关:量词练习2",
    lesson: "前置学习：一条=yed1 tiu4。",
    lessonAudios: [
      { src: "./assets/audio/level-06-01.mp3", text: "一条", jyutping: "[yed1 tiu4]", meaning: "一条" },
      { src: "./assets/audio/level-06-02.mp3", text: "一碗", jyutping: "[yed1 wun2]", meaning: "一碗" },
      { src: "./assets/audio/level-06-03.mp3", text: "一张", jyutping: "[yed1 zêng1]", meaning: "一张" },
      { src: "./assets/audio/level-06-05.mp3", text: "一只", jyutping: "[yed1 ji2]", meaning: "一只" },
      { src: "./assets/audio/level-06-06.mp3", text: "一种", jyutping: "[yed1 zung2]", meaning: "一种" },
    ],
    speechTests: [
      { testMeaning: "一条", speechTarget: "一条", speechAlternatives: ["一条"] },
      { testMeaning: "一碗", speechTarget: "一碗", speechAlternatives: ["一碗"] },
      { testMeaning: "一张", speechTarget: "一张", speechAlternatives: ["一张"] },
      { testMeaning: "一只", speechTarget: "一只", speechAlternatives: ["一只"] },
      { testMeaning: "一种", speechTarget: "一种", speechAlternatives: ["一种"] },
    ],
    quiz: [
      {
        q: "一只的粤语是什么？",
        options: ["yed1 tiu4", "yed1 wun2", "yed1 zêng1","yed1 ji1","yed1 ji2","yed1 zung2"],
        answer: "yed1 ji2",
      },
    ],
    reward: { 
      name: "白切鸡", 
      desc:  "通关奖励：恭喜你，你获得食材“姜”；“三黄鸡”；现在你可以制作“白切鸡”了", 
      image: "./assets/ingredients/level-06-01.jpg",
      images: [
        "./assets/ingredients/level-06-01.jpg",
        "./assets/ingredients/level-06-02.jpg",
      ],
    },
  },
  {
    id: 7,
    title: "第7关:常见调料",
    lesson: "前置学习：盐=yim4。",
    lessonAudios: [
      { src: "./assets/audio/level-07-01.mp3", text: "盐", jyutping: "[yim4]", meaning: "盐" },
      { src: "./assets/audio/level-07-02.mp3", text: "油", jyutping: "[yeo4]", meaning: "油" },
      { src: "./assets/audio/level-07-03.mp3", text: "酱油", jyutping: "[zêng3 yeo4]", meaning: "酱油" },
      { src: "./assets/audio/level-07-04.mp3", text: "醋", jyutping: "[cou3]", meaning: "醋" },
      { src: "./assets/audio/level-07-05.mp3", text: "蚝油", jyutping: "[hou4 yeo4]", meaning: "耗油" },
      { src: "./assets/audio/level-07-06.mp3", text: "料酒", jyutping: "[liu2 zeo2]", meaning: "料酒" },
      { src: "./assets/audio/level-07-07.mp3", text: "豆瓣酱", jyutping: "[deo6 ban2 zêng3]", meaning: "豆瓣酱" },
    ],
    speechTests: [
      { testMeaning: "盐", speechTarget: "盐", speechAlternatives: ["盐"] },
      { testMeaning: "油", speechTarget: "油", speechAlternatives: ["油"] },
      { testMeaning: "酱油", speechTarget: "酱油", speechAlternatives: ["酱油"] },
      { testMeaning: "醋", speechTarget: "醋", speechAlternatives: ["醋"] },
      { testMeaning: "耗油", speechTarget: "耗油", speechAlternatives: ["耗油"] },
      { testMeaning: "料酒", speechTarget: "料酒", speechAlternatives: ["料酒"] },
      { testMeaning: "豆瓣酱", speechTarget: "豆瓣酱", speechAlternatives: ["豆瓣酱"] },
    ],
    quiz: [
      {
        q: "盐的粤语是什么",
        options: ["yim4","yeo4","zêng3 yeo4","cou3","hou4 yeo4","liu2 zeo2","deo6 ban2 zêng3"],
        answer: "下车",
      },
    ],
    reward: { 
      name: "玉米排骨汤", 
      desc:  "通关奖励：恭喜你，你获得食材“胡萝卜”；“玉米”；“排骨”；“水”，现在你可以制作“玉米排骨汤”了" ,
      image: "./assets/ingredients/level-07-01.jpg",
      images: [
        "./assets/ingredients/level-07-01.jpg",
        "./assets/ingredients/level-07-02.jpg",
        "./assets/ingredients/level-07-03.jpg",
        "./assets/ingredients/level-07-04.jpg",
      ],
    },
  },
  {
    id: 8,
    title: "第8关:常见食材1",
    lesson: "前置学习：番茄=fan1 ké2。",
    lessonAudios: [
      { src: "./assets/audio/level-08-01.mp3", text: "番茄", jyutping: "[fan1 ké2]", meaning: "番茄" },
      { src: "./assets/audio/level-08-02.mp3", text: "鸡蛋", jyutping: "[gei1 dan2]", meaning: "鸡蛋" },
      { src: "./assets/audio/level-08-03.mp3", text: "黄瓜", jyutping: "[wong4 gua1]", meaning: "黄瓜" },
      { src: "./assets/audio/level-08-04.mp3", text: "牛肉", jyutping: "[ngeo4 yug6", meaning: "牛肉" },
      { src: "./assets/audio/level-08-05.mp3", text: "河粉", jyutping: "[ho2 fen2]", meaning: "河粉" },
    ],
    speechTests: [
      { testMeaning: "番茄", speechTarget: "番茄", speechAlternatives: ["番茄"] },
      { testMeaning: "鸡蛋", speechTarget: "鸡蛋", speechAlternatives: ["鸡蛋"] },
      { testMeaning: "黄瓜", speechTarget: "黄瓜", speechAlternatives: ["黄瓜"] },
      { testMeaning: "牛肉", speechTarget: "牛肉", speechAlternatives: ["牛肉"] },
      { testMeaning: "河粉", speechTarget: "河粉", speechAlternatives: ["河粉"] },
    ],
    quiz: [
      {
        q: "你想要什么",
        options: ["fan1 ké2", "gei1 dan2", "wong4 gua1","ngeo4 yug6","ho2 fen2"],
        answer: "gei1 dan2",
      },
    ],
    reward: { 
      name: "肉沫茄子", 
      desc:  "通关奖励：恭喜你，你获得食材“茄子”；“干辣椒”，现在你可以制作“肉末茄子”了", 
      image: "./assets/ingredients/level-08-01.jpg",
      images: [
        "./assets/ingredients/level-08-01.jpg",
        "./assets/ingredients/level-08-02.jpg",
      ],
    },
  },
  {
    id: 9,
    title: "第9关:常见食物2",
    lesson: "前置学习：茄子=ké2 ji2。",
    lessonAudios: [
      { src: "./assets/audio/level-09-01.mp3", text: "茄子", jyutping: "[ké2 ji2]", meaning: "茄子" },
      { src: "./assets/audio/level-09-02.mp3", text: "胡萝卜", jyutping: "[wu4 lo4 bag6]", meaning: "胡萝卜" },
      { src: "./assets/audio/level-09-03.mp3", text: "排骨", jyutping: "[pai4 gued1]", meaning: "排骨" },
      { src: "./assets/audio/level-09-04.mp3", text: "虾", jyutping: "[ha1]", meaning: "虾" },
      { src: "./assets/audio/level-09-05.mp3", text: "鱼", jyutping: "[yu2]", meaning: "鱼" },
    ],
    speechTests: [
      { testMeaning: "茄子", speechTarget: "茄子", speechAlternatives: ["茄子"] },
      { testMeaning: "胡萝卜", speechTarget: "胡萝卜", speechAlternatives: ["胡萝卜"] },
      { testMeaning: "排骨", speechTarget: "排骨", speechAlternatives: ["排骨"] },
      { testMeaning: "虾", speechTarget: "虾", speechAlternatives: ["虾"] },
      { testMeaning: "鱼", speechTarget: "鱼", speechAlternatives: ["鱼"] },
    ],
    quiz: [
      {
        q: "你要什么",
        options: ["ké2 ji2", "wu4 lo4 bag6", "pai4 gued1]","ha1","yu2"],
        answer: "ké2 ji2",
      },
    ],
    reward: { 
      name: "蜜汁叉烧", 
      desc: "通关奖励：恭喜你，你获得食材“五花肉”，现在你可以制作“蜜汁叉烧”了", 
      image: "./assets/ingredients/level-09-01.jpg",
      images: ["./assets/ingredients/level-09-01.jpg"],
    },
  },
  {
    id: 10,
    title: "第10关:常见食物3",
    lesson: "前置学习：鸡=gei1。",
    lessonAudios: [
      { src: "./assets/audio/level-10-01.mp3", text: "鸡", jyutping: "[gei1]", meaning: "鸡" },
      { src: "./assets/audio/level-10-02.mp3", text: "姜", jyutping: "[gêng1]", meaning: "姜" },
      { src: "./assets/audio/level-10-03.mp3", text: "水", jyutping: "[sêü2]", meaning: "水" },
      { src: "./assets/audio/level-10-04.mp3", text: "葱", jyutping: "[cung1]", meaning: "葱" },
      { src: "./assets/audio/level-10-05.mp3", text: "玉米", jyutping: "[yug6 mei5]", meaning: "玉米" },
    ],
    speechTests: [
      { testMeaning: "鸡", speechTarget: "鸡", speechAlternatives: ["鸡"] },
      { testMeaning: "姜", speechTarget: "姜", speechAlternatives: ["姜"] },
      { testMeaning: "水", speechTarget: "水", speechAlternatives: ["水"] },
      { testMeaning: "葱", speechTarget: "葱", speechAlternatives: ["葱"] },
      { testMeaning: "玉米", speechTarget: "玉米", speechAlternatives: ["玉米"] },
    ],
    quiz: [
      {
        q: "你要什么",
        options: ["gei1", "gêng1", "sêü2","cung1","yug6 mei5"],
        answer: "gei1",
      },
    ],
    reward: {
       name: "白灼虾", 
       desc:  "通关奖励：恭喜你，你获得食材“鲜虾”；“小米辣”，现在你可以制作“白灼虾”了", 
       image: "./assets/ingredients/level-10-01.jpg",
       images: [
        "./assets/ingredients/level-10-01.jpg",
        "./assets/ingredients/level-10-02.jpg",
       ],
      },
  },
  {
    id: 11,
    title: "第11关:常见食物4",
    lesson: "前置学习：粉丝=fen2 xi1。",
    lessonAudios: [
      { src: "./assets/audio/level-11-02.mp3", text: "粉丝", jyutping: "[fen2 xi1]", meaning: "粉丝" },
      { src: "./assets/audio/level-11-03.mp3", text: "肉沫", jyutping: "[yug6 mud6]", meaning: "肉沫" },
      { src: "./assets/audio/level-11-04.mp3", text: "豆芽", jyutping: "[deo2 nga4]", meaning: "豆芽" },
      { src: "./assets/audio/level-11-05.mp3", text: "五花肉", jyutping: "[ng5 fa1 yug6]", meaning: "五花肉" },
    ],
    speechTests: [
      { testMeaning: "粉丝", speechTarget: "粉丝", speechAlternatives: ["粉丝"] },
      { testMeaning: "肉沫", speechTarget: "肉沫", speechAlternatives: ["肉沫"] },
      { testMeaning: "豆芽", speechTarget: "豆芽", speechAlternatives: ["豆芽"] },
      { testMeaning: "五花肉", speechTarget: "五花肉", speechAlternatives: ["五花肉"] },
    ],
    quiz: [
      {
        q: "你要什么？",
        options: ["fen2 xi1","yug6 mud6","deo2 nga4","ng5 fa1 yug6"],
        answer: "fen2 xi1",
      },
    ],
    reward: { 
      name: "粉丝扇贝", 
      desc:  "通关奖励：恭喜你，你获得食材“扇贝”；“粉丝”，现在你可以制作“扇贝粉丝”了", 
      image: "./assets/ingredients/level-11-01.jpg",
      images: [
        "./assets/ingredients/level-11-01.jpg",
        "./assets/ingredients/level-11-02.jpg",
      ],
    },
  },
  {
    id: 12,
    title: "第12关:商家回答",
    lesson: "前置学习：你看看要什么=néi5 hon1 yiu3 sem6 mo1。",
    lessonAudios: [
      { src: "./assets/audio/level-12-01.mp3", text: "你看看要什么", jyutping: "[néi5 hon1 yiu3 sem6 mo1]", meaning: "你看看要什么" },
      { src: "./assets/audio/level-12-02.mp3", text: "这个三块一斤", jyutping: "[zé5 go3 sam1 fai3 yed1 gen1]", meaning: "这个三块一斤" },
      { src: "./assets/audio/level-12-03.mp3", text: "一共", jyutping: "[yed1 gung6]", meaning: "一共" },
      { src: "./assets/audio/level-12-04.mp3", text: "送你根葱", jyutping: "[sung3 néi5 gen1 cung1]", meaning: "送你根葱" },
      { src: "./assets/audio/level-12-05.mp3", text: "下次再來", jyutping: "[ha6 qi3 zoi3 loi4]", meaning: "下次再來" },
    ],
    speechTests: [
      { testMeaning: "你看看要什么", speechTarget: "你看看要什么", speechAlternatives: ["你看看要什么"] },
      { testMeaning: "这个三块一斤", speechTarget: "这个三块一斤", speechAlternatives: ["这个三块一斤"] },
      { testMeaning: "一共", speechTarget: "一共", speechAlternatives: ["一共"] },
      { testMeaning: "送你根葱", speechTarget: "送你根葱", speechAlternatives: ["送你根葱"] },
      { testMeaning: "下次再來", speechTarget: "下次再來", speechAlternatives: ["下次再來"] },
    ],
    quiz: [
      {
        q: "如果商家要送你葱，会怎么说",
        options: ["néi5 hon1 yiu3 sem6 mo1","zé5 go3 sam1 fai3 yed1 gen1","yed1 gung6,sung3 néi5 gen1 cung1","ha6 qi3 zoi3 loi4"],
        answer: "sung3 néi5 gen1 cung1",
      },
    ],
    reward: { 
      name: "清蒸鱼", 
      desc:  "通关奖励：恭喜你，你获得食材“鱼”，现在你可以制作“清蒸鱼”了", 
      image: "./assets/ingredients/level-12-01.jpg",
      images: ["./assets/ingredients/level-12-01.jpg"],
    },
  },
];

const recipeBook = [
  { id: 1, name: "各种调料", ingredients: ["盐", "醋","油","酱油","耗油","料酒","豆瓣酱"], desc: "调料齐全，百味交融，成就一道好菜。", unlockLevel: 1, image: "./assets/recipes/recipe-01.jpg" },
  { id: 2, name: "拌黄瓜", ingredients: ["黄瓜"], desc: "脆爽入味，一口解腻。", unlockLevel: 2, image: "./assets/recipes/recipe-02.jpg" },
  { id: 3, name: "番茄炒蛋", ingredients: ["番茄", "鸡蛋"], desc: "酸甜开胃，最经典搭配。", unlockLevel: 3, image: "./assets/recipes/recipe-03.jpg" },
  { id: 3, name: "肠粉", ingredients: ["小麦淀粉","玉米淀粉","粘米粉","肉沫","葱"], desc: "软滑入味，广式经典。", unlockLevel: 4, image: "./assets/recipes/recipe-04.jpg" },
  { id: 4, name: "干炒牛河", ingredients: ["豆芽", "牛肉","洋葱","河粉"], desc: "牛肉鲜嫩，河粉焦香入味。。", unlockLevel: 5, image: "./assets/recipes/recipe-05.jpg" },
  { id: 5, name: "白切鸡", ingredients: ["三黄鸡", "姜"], desc: "鲜嫩原味，粤式经典。", unlockLevel: 6, image: "./assets/recipes/recipe-06.jpg" },
  { id: 6, name: "玉米排骨汤", ingredients: ["玉米", "排骨", "水","胡萝卜"], desc: "清甜顺口，营养满满。", unlockLevel: 7, image: "./assets/recipes/recipe-07.jpg" },
  { id: 7, name: "肉沫茄子", ingredients: ["茄子", "干辣椒"], desc: "浓香下饭，软糯入味。", unlockLevel: 8, image: "./assets/recipes/recipe-08.jpg" },
  { id: 8, name: "蜜汁叉燒", ingredients: ["五花肉"], desc: "香甜多汁，经典烧味。", unlockLevel: 9, image: "./assets/recipes/recipe-09.jpg" },
  { id: 9, name: "白灼虾", ingredients: ["鲜虾", "小米椒"], desc: "肉质紧实，鲜甜弹牙", unlockLevel: 10, image: "./assets/recipes/recipe-10.jpg" },
  { id: 10, name: "粉丝扇贝", ingredients: ["白糖", "粉丝", "扇贝"], desc: "蒜香入味，鲜嫩多汁。", unlockLevel: 11, image: "./assets/recipes/recipe-11.jpg" },
  { id: 11, name: "清蒸鱼", ingredients: ["鱼"], desc: "鲜嫩清香，入口即化。", unlockLevel: 12, image: "./assets/recipes/recipe-12.jpg" },
];

const storageKey = "cantonese-level-progress-v1";
const SPEECH_AUTO_STOP_MS = 15000;
const SPEECH_MAX_SESSION_MS = 30000;
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition || null;
const rewardImageManifest = {
  1: ["./assets/ingredients/level-01-01.jpg"],
  2: ["./assets/ingredients/level-02-01.jpg"],
  3: ["./assets/ingredients/level-03-01.jpg", "./assets/ingredients/level-03-02.jpg"],
  4: [
    "./assets/ingredients/level-04-01.jpg",
    "./assets/ingredients/level-04-02.jpg",
    "./assets/ingredients/level-04-03.jpg",
    "./assets/ingredients/level-04-04.jpg",
    "./assets/ingredients/level-04-05.jpg",
  ],
  5: [
    "./assets/ingredients/level-05-01.png",
    "./assets/ingredients/level-05-02.jpg",
    "./assets/ingredients/level-05-03.jpg",
    "./assets/ingredients/level-05-04.jpg",
  ],
  6: ["./assets/ingredients/level-06-01.jpg", "./assets/ingredients/level-06-02.jpg"],
  7: [
    "./assets/ingredients/level-07-01.jpg",
    "./assets/ingredients/level-07-02.jpg",
    "./assets/ingredients/level-07-03.jpg",
    "./assets/ingredients/level-07-04.jpg",
  ],
  8: ["./assets/ingredients/level-08-01.jpg", "./assets/ingredients/level-08-02.jpg"],
  9: ["./assets/ingredients/level-09-01.jpg"],
  10: ["./assets/ingredients/level-10-01.jpg", "./assets/ingredients/level-10-02.jpg"],
  11: ["./assets/ingredients/level-11-01.jpg", "./assets/ingredients/level-11-02.jpg"],
  12: ["./assets/ingredients/level-12-01.jpg"],
};

const LEVEL_UNLOCK_INGREDIENTS = {
  1: ["盐", "醋", "油", "酱油", "蚝油", "料酒", "豆瓣酱"],
  2: ["黄瓜"],
  3: ["番茄", "鸡蛋"],
  4: ["小麦淀粉", "玉米淀粉", "粘米粉", "肉沫", "葱"],
  5: ["豆芽", "牛肉", "洋葱", "河粉"],
  6: ["姜", "三黄鸡"],
  7: ["胡萝卜", "玉米", "排骨", "水"],
  8: ["茄子", "干辣椒"],
  9: ["五花肉"],
  10: ["鲜虾", "小米椒"],
  11: ["白糖", "粉丝", "扇贝"],
  12: ["鱼"],
};

function getOwnedIngredientsFromRewards() {
  const set = new Set();
  state.unlockedRewards.forEach((reward) => {
    const levelId = Number(reward?.levelId || 0);
    const unlocked = LEVEL_UNLOCK_INGREDIENTS[levelId] || [];
    unlocked.forEach((ing) => set.add(ing));
  });
  return Array.from(set);
}

let state = {
  currentLevel: 1,
  clearedLevels: 0,
  unlockedRewards: [],
};

let speechState = {
  passed: false,
  transcript: "",
  isListening: false,
  currentSpeechStep: 0,
  speechStepsPassed: [],
  activatedWords: [],
  overrideMerchantMessage: "",
};

/** 当前进行中的识别实例，用于「再次点击停止」 */
let activeSpeechRecognition = null;
/** 用户上传的参考音频与文本（会话级，刷新页面后失效） */
const customSpeechReferences = {};

function stopSpeechRecognitionIfAny() {
  const rec = activeSpeechRecognition;
  if (!rec) return;
  try {
    rec.abort();
  } catch (_e) {
    try {
      rec.stop();
    } catch (_e2) {
      /* ignore */
    }
  }
  speechState.isListening = false;
}

let lessonAudioState = {
  listened: false,
  speaking: false,
  currentIndex: -1,
  listenedMap: [],
  /** 单段播放时：{ index, replay }；连播时为 null */
  singleClipMode: null,
};

const levelSection = document.getElementById("level-section");
const rewardSection = document.getElementById("reward-section");
const cookingSection = document.getElementById("cooking-section");
const rewardName = document.getElementById("reward-name");
const rewardDesc = document.getElementById("reward-desc");
const rewardImageSlot = document.getElementById("reward-image-slot");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const nextLevelBtn = document.getElementById("next-level-btn");
const toCookingBtn = document.getElementById("to-cooking-btn");
const backToLevelBtn = document.getElementById("back-to-level-btn");
const resetBtn = document.getElementById("reset-btn");
const inventoryList = document.getElementById("inventory-list");
const recipeBoard = document.getElementById("recipe-board");
const dishResult = document.getElementById("dish-result");
const homeSection = document.getElementById("home-section");
const levelPage = document.getElementById("level-page");
const backHomeBtn = document.getElementById("back-home-btn");
const cookingModal = document.getElementById("cooking-modal");
const cookingIcon = document.getElementById("cooking-icon");
const cookingTitle = document.getElementById("cooking-title");
const cookingProgressFill = document.getElementById("cooking-progress-fill");
const cookingProgressText = document.getElementById("cooking-progress-text");
const cookingTip = document.getElementById("cooking-tip");
const recipePopupModal = document.getElementById("recipe-popup-modal");
const recipePopupIcon = document.getElementById("recipe-popup-icon");
const recipePopupTitle = document.getElementById("recipe-popup-title");
const recipePopupImage = document.getElementById("recipe-popup-image");
const recipePopupDesc = document.getElementById("recipe-popup-desc");
const recipePopupCloseBtn = document.getElementById("recipe-popup-close-btn");
const foodShowcase = document.getElementById("food-showcase");
const shoppingBasket = document.getElementById("shopping-basket");
const basketCountBadge = document.getElementById("basket-count-badge");

const BOSS_POLITE_LINES = ["看看要什么？", "新鲜得很！", "手快有手慢无啊。"];

const cookingTips = [
  "🔥 大火爆炒，镬气十足...",
  "🥢 轻轻翻动，均匀受热...",
  "🧂 少许调料，点睛之笔...",
  "💨 香气四溢，马上出锅...",
  "✨ 秘制配方，独门手艺...",
];

const cookingIcons = ["🍳", "🥘", "🍲", "🔥", "👨‍🍳", "🥢"];
let cookingProgressTimer = null;
let cookingIconTimer = null;
let cookingTipTimer = null;
const recipeIconMap = {
  "各种调料": "🧂",
  "拌黄瓜": "🥒",
  "番茄炒蛋": "🍅",
  肠粉: "🍜",
  "干炒牛河": "🍲",
  "白切鸡": "🐔",
  "玉米排骨汤": "🌽",
  "肉沫茄子": "🍆",
  "蜜汁叉燒": "🍖",
  "白灼虾": "🦐",
  "粉丝扇贝": "🐚",
  "清蒸鱼": "🐟",
};

let currentLessonAudio = null;
let bossFeedbackTimer = null;

function generateCleanMessage(targetWord) {
  const word = (targetWord || "").trim();
  return word ? `瞧瞧这${word}，要点不？` : BOSS_POLITE_LINES[Math.floor(Math.random() * BOSS_POLITE_LINES.length)];
}

function setBossText(text) {
  speechState.overrideMerchantMessage = String(text || "");
}

function resolveTargetWordForStep(level, stepIndex) {
  const levelCfg = LEVEL_CONFIG[level?.id];
  if (levelCfg?.targetWords?.length) {
    return (levelCfg.targetWords[stepIndex] || "").trim();
  }
  const tests = Array.isArray(level?.speechTests) ? level.speechTests : [];
  const stepTest = tests[stepIndex] || {};
  const stepCfg = getSpeechStepConfig(level, stepIndex);
  const effectiveTarget = getEffectiveSpeechTarget(level, stepIndex, stepCfg.speechTarget || "");
  return (stepTest.targetWord || effectiveTarget || "").trim();
}

function getBossLineForStep(level, stepIndex) {
  const cfg = LEVEL_CONFIG[level?.id];
  if (cfg?.merchantLine) return cfg.merchantLine;
  const targetWord = resolveTargetWordForStep(level, stepIndex);
  return generateCleanMessage(targetWord);
}

function getWordCategory(word) {
  const normalized = String(word || "").trim();
  if (!normalized) return "";
  if (WORD_CATEGORY_INDEX.SOCIAL.has(normalized)) return "SOCIAL";
  if (WORD_CATEGORY_INDEX.QUANTITY.has(normalized)) return "QUANTITY";
  if (WORD_CATEGORY_INDEX.INGREDIENT.has(normalized)) return "INGREDIENT";
  if (WORD_CATEGORY_INDEX.MERCHANT_ROLE.has(normalized)) return "MERCHANT_ROLE";
  return "";
}

function getScenarioWordList(level) {
  const cfg = LEVEL_CONFIG[level?.id];
  if (cfg?.targetWords?.length) return cfg.targetWords;
  return getLessonAudioItems(level).map((item) => item.text).filter(Boolean);
}

function clearScenarioRuntimeUi() {
  const speechPrompt = document.getElementById("speech-test-prompt");
  const taskPanel = document.getElementById("challenge-target-list");
  const board = document.getElementById("quantity-board");
  if (speechPrompt) speechPrompt.classList.remove("merchant-role-active");
  if (taskPanel) taskPanel.innerHTML = "";
  if (board) board.remove();
  if (foodShowcase) foodShowcase.innerHTML = "";
}

function renderTargetWords(level) {
  const panel = document.getElementById("challenge-target-list");
  if (!panel) return;
  const words = getScenarioWordList(level);
  panel.innerHTML = words
    .map((word, idx) => {
      const done = !!speechState.activatedWords[idx];
      return `<li class="${done ? "done" : ""}" data-word-index="${idx}">${word}</li>`;
    })
    .join("");
}

function setWordActivated(level, stepIndex) {
  const words = getScenarioWordList(level);
  if (!words.length) return;
  speechState.activatedWords[stepIndex] = true;
  renderTargetWords(level);
  syncScenarioCookingButton(level);
}

function showQuantityBoard(word) {
  let board = document.getElementById("quantity-board");
  if (!board) {
    board = document.createElement("div");
    board.id = "quantity-board";
    document.body.appendChild(board);
  }
  board.innerHTML = `<div class="quantity-board-icon">⚖️</div><div class="quantity-board-word">${word}</div>`;
  board.classList.add("show");
  setTimeout(() => board.classList.remove("show"), 850);
}

function resolveFeedbackImage(word, levelId, stepIndex) {
  const manifest = Array.isArray(rewardImageManifest[levelId]) ? rewardImageManifest[levelId] : [];
  if (manifest.length > 0) {
    // 关卡图片少于单词时，按步数循环播放一轮后继续循环
    const safeIndex = Math.max(0, Number(stepIndex) || 0) % manifest.length;
    return manifest[safeIndex];
  }
  if (INGREDIENT_IMAGE_MAP[word]) return INGREDIENT_IMAGE_MAP[word];
  return `./assets/ingredients/${encodeURIComponent(word)}.jpg`;
}

function flyIngredientWordToBasket(word, levelId, stepIndex) {
  return new Promise((resolve) => {
    if (!shoppingBasket) {
      resolve();
      return;
    }
    const src = resolveFeedbackImage(word, levelId, stepIndex);
    const token = document.createElement("img");
    const tokenSize = 112;
    token.src = src;
    token.className = "flying-ingredient";
    token.alt = word;
    token.style.width = `${tokenSize}px`;
    token.style.height = `${tokenSize}px`;
    token.onerror = () => {
      token.remove();
      resolve();
    };
    // 每次反馈只创建并飞入一张图片
    document.body.appendChild(token);
    const basketRect = shoppingBasket.getBoundingClientRect();
    const startX = window.innerWidth / 2 - tokenSize / 2;
    const startY = window.innerHeight / 2 - tokenSize / 2;
    const endX = basketRect.left + basketRect.width / 2 - 24;
    const endY = basketRect.top + basketRect.height / 2 - 24;
    token.animate(
      [
        { transform: `translate(${startX}px, ${startY}px) scale(0.88)`, opacity: 0 },
        { transform: `translate(${startX}px, ${startY - 24}px) scale(1.1)`, opacity: 1, offset: 0.28 },
        { transform: `translate(${startX}px, ${startY}px) scale(1)`, opacity: 1, offset: 0.48 },
        { transform: `translate(${(startX + endX) / 2}px, ${Math.min(startY, endY) - 120}px) scale(0.9)`, opacity: 1 },
        { transform: `translate(${endX}px, ${endY}px) scale(0.45)`, opacity: 0.25 },
      ],
      { duration: 2100, easing: "cubic-bezier(.3,.7,.15,1)", fill: "forwards" }
    ).onfinish = () => {
      token.remove();
      resolve();
    };
  });
}

async function executeFeedback(word, levelId, stepIndex) {
  const bossBubble = document.getElementById("merchant-bubble");
  if (bossBubble) bossBubble.innerText = "";
  await flyIngredientWordToBasket(word, levelId, stepIndex);
  speechState.collectedIngredients = (speechState.collectedIngredients || 0) + 1;
  updateBasketUi();
}

function buildIngredientDropSchedule(questionCount, ingredientList) {
  const schedule = Array.from({ length: Math.max(questionCount, 0) }, () => []);
  if (questionCount <= 0 || ingredientList.length === 0) return schedule;
  const denominator = Math.max(ingredientList.length - 1, 1);
  ingredientList.forEach((src, idx) => {
    const stepIndex =
      questionCount === 1 ? 0 : Math.round((idx * (questionCount - 1)) / denominator);
    schedule[stepIndex].push(src);
  });
  return schedule;
}

function updateBasketUi() {
  if (!basketCountBadge) return;
  basketCountBadge.textContent = String(speechState.collectedIngredients || 0);
}

function hasAllIngredientsCollected() {
  const total = speechState.totalIngredients || 0;
  return (speechState.collectedIngredients || 0) >= total;
}

function setFloatingUiVisible(visible) {
  if (foodShowcase) {
    foodShowcase.classList.toggle("hidden", !visible);
    if (!visible) foodShowcase.innerHTML = "";
  }
  if (shoppingBasket) {
    shoppingBasket.classList.toggle("hidden", !visible);
  }
}

function setScenarioChallengeUiVisible(visible) {
  setFloatingUiVisible(visible);
}

function showIngredientInCenter(src) {
  if (!foodShowcase) return null;
  foodShowcase.innerHTML = "";
  const img = document.createElement("img");
  img.src = src;
  img.className = "showcase-food";
  img.style.filter = "grayscale(1) brightness(0.8)";
  img.style.opacity = "0";
  img.style.transform = "scale(0.88)";
  img.style.transition = "all 360ms ease";
  foodShowcase.appendChild(img);
  requestAnimationFrame(() => {
    img.style.filter = "grayscale(0) brightness(1)";
    img.style.opacity = "1";
    img.style.transform = "scale(1.05)";
  });
  return img;
}

function flyIngredientToBasket(src) {
  return new Promise((resolve) => {
    const preview = showIngredientInCenter(src);
    if (!preview || !shoppingBasket) {
      resolve();
      return;
    }
    setTimeout(() => {
      const fromRect = preview.getBoundingClientRect();
      const toRect = shoppingBasket.getBoundingClientRect();
      const flying = preview.cloneNode(true);
      flying.style.position = "fixed";
      flying.style.left = `${fromRect.left}px`;
      flying.style.top = `${fromRect.top}px`;
      flying.style.width = `${fromRect.width}px`;
      flying.style.height = `${fromRect.height}px`;
      flying.style.margin = "0";
      flying.style.zIndex = "1004";
      flying.style.transition = "all 850ms cubic-bezier(.2,.8,.2,1)";
      document.body.appendChild(flying);
      foodShowcase.innerHTML = "";
      requestAnimationFrame(() => {
        flying.style.left = `${toRect.left + toRect.width / 2 - 24}px`;
        flying.style.top = `${toRect.top + toRect.height / 2 - 24}px`;
        flying.style.width = "48px";
        flying.style.height = "48px";
        flying.style.opacity = "0.25";
        flying.style.transform = "scale(0.55)";
      });
      setTimeout(() => {
        flying.remove();
        speechState.collectedIngredients = (speechState.collectedIngredients || 0) + 1;
        updateBasketUi();
        resolve();
      }, 900);
    }, 1000);
  });
}

function syncChallengeSubmitState(level) {
  const submitBtn = document.getElementById("submit-level-btn");
  if (!submitBtn) return;
  const ready = !!lessonAudioState.listened && isSpeechAllComplete(level) && isScenarioAllActivated(level);
  submitBtn.disabled = !ready;
}

function isScenarioAllActivated(level) {
  const words = getScenarioWordList(level);
  if (!words.length) return false;
  return words.every((_word, idx) => !!speechState.activatedWords[idx]);
}

function syncScenarioCookingButton(level) {
  const btn = document.getElementById("scenario-go-cooking-btn");
  if (!btn) return;
  btn.disabled = !isScenarioAllActivated(level);
}

function updateChallengeCompletionState(level, speechStatusEl) {
  const allSpeech = isSpeechAllComplete(level);
  const allActivated = isScenarioAllActivated(level);
  if (allSpeech && allActivated) {
    speechState.passed = true;
    speechStatusEl.className = "ok-msg";
    speechStatusEl.textContent = "好嘞！情景挑战已完成，点击下方按钮即可获得食材。";
  } else if (allSpeech) {
    speechState.passed = false;
    speechStatusEl.className = "err-msg";
    speechStatusEl.textContent = "口语已完成，还需激活本关全部目标词。";
  }
  syncChallengeSubmitState(level);
}

async function handleIngredientDropsForStep(level, stepIndex, speechStatusEl) {
  const schedule = Array.isArray(speechState.dropSchedule) ? speechState.dropSchedule : [];
  const drops = schedule[stepIndex] || [];
  for (const src of drops) {
    await flyIngredientToBasket(src);
  }
  updateChallengeCompletionState(level, speechStatusEl);
}

function safeStopSpeech() {
  if (currentLessonAudio) {
    currentLessonAudio.pause();
    currentLessonAudio.src = "";
    currentLessonAudio = null;
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.currentLevel === "number") {
      state = {
        currentLevel: parsed.currentLevel,
        clearedLevels: parsed.clearedLevels,
        unlockedRewards: parsed.unlockedRewards || [],
      };
    }
  } catch (_error) {
    localStorage.removeItem(storageKey);
  }
}

function updateProgressUI() {
  progressText.textContent = `关卡进度：${state.clearedLevels} / ${TOTAL_LEVELS}`;
  const pct = (state.clearedLevels / TOTAL_LEVELS) * 100;
  progressBar.style.width = `${pct}%`;
}

function getLevelById(levelId) {
  return levelData.find((item) => item.id === levelId);
}

function normalizeSpeech(text) {
  const basic = (text || "")
    .trim()
    .toLowerCase()
    .replace(/[\s\u3000\u200b\ufeff]+/g, "")
    .replace(/[.,!?，。！？；;:"'`~\-_/\\()（）[\]{}]/g, "");
  const normalizedNumeral = normalizeNumeralSpeech(basic);
  const normalizedHomophone = normalizeHomophoneSpeech(normalizedNumeral);
  // 统一常见普通话/粤语表达，降低写法差异影响
  return normalizedHomophone
    .replace(/不/g, "唔")
    .replace(/在/g, "喺");
}

const HOMOPHONE_CHAR_NORMALIZATION_MAP = {
  // you4 / jau4
  由: "油",
  尤: "油",
  犹: "油",
  猶: "油",
  邮: "油",
  郵: "油",
  鱿: "油",
  魷: "油",
  游: "油",
  遊: "油",
  // yan4
  言: "盐",
  鹽: "盐",
  // hao2 / hou4
  蚝: "耗",
  蠔: "耗",
  豪: "耗",
  // cong1
  聪: "葱",
  蔥: "葱",
  匆: "葱",
  // jiang4
  将: "酱",
  醬: "酱",
};

function normalizeHomophoneSpeech(text) {
  if (!text) return "";
  return Array.from(text)
    .map((char) => HOMOPHONE_CHAR_NORMALIZATION_MAP[char] || char)
    .join("");
}

function normalizeNumeralSpeech(text) {
  const numeralAliasMap = {
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    7: "七",
    8: "八",
    9: "九",
    10: "十",
    11: "十一",
    20: "二十",
    100: "一百",
    1000: "一千",
    10000: "一万",
    壹: "一",
    贰: "二",
    貳: "二",
    叁: "三",
    參: "三",
    肆: "四",
    伍: "五",
    陆: "六",
    陸: "六",
    柒: "七",
    捌: "八",
    玖: "九",
    拾: "十",
    拾壹: "十一",
    贰拾: "二十",
    貳拾: "二十",
    壹佰: "一百",
    壹仟: "一千",
    壹萬: "一万",
    兩: "二",
    两: "二",
  };
  return numeralAliasMap[text] || text;
}

function levenshteinDistance(a, b) {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

function speechSimilarity(a, b) {
  const x = normalizeSpeech(a);
  const y = normalizeSpeech(b);
  if (!x || !y) return 0;
  const maxLen = Math.max(x.length, y.length);
  if (maxLen === 0) return 1;
  const dist = levenshteinDistance(x, y);
  return 1 - dist / maxLen;
}

function getSpeechStepsCount(level) {
  if (!level) return 1;
  const audioItems = getLessonAudioItems(level);
  if (audioItems.length > 0) return audioItems.length;
  if (Array.isArray(level.speechTests) && level.speechTests.length > 0) {
    return level.speechTests.length;
  }
  return 1;
}

function getSpeechStepConfig(level, stepIndex) {
  if (!level) {
    return {
      testMeaning: "",
      speechTarget: "",
      speechAlternatives: [],
      testAnswers: [],
      playerLine: "",
      isTemplateConfigured: false,
    };
  }
  const audioItems = getLessonAudioItems(level);
  const levelCfg = LEVEL_CONFIG[level?.id];
  if (audioItems.length > 0) {
    const safeIndex = Math.min(Math.max(stepIndex, 0), audioItems.length - 1);
    const item = audioItems[safeIndex] || {};
    const tests = Array.isArray(level.speechTests) ? level.speechTests : [];
    const s = tests[safeIndex] || {};
    const configuredTarget = levelCfg?.targetWords?.[safeIndex] || "";
    const target = configuredTarget || item.text || "";
    const meaning = item.meaning || s.testMeaning || "";
    const playerLine = target || meaning || "（本步词条未配置）";
    return {
      testMeaning: meaning || target || "（本步词条未配置）",
      speechTarget: target,
      speechAlternatives: [],
      testAnswers: [],
      hint: target || meaning || s.hint || "本步未配置词条",
      playerLine,
      isTemplateConfigured: !!target,
    };
  }
  const tests = level.speechTests;
  if (Array.isArray(tests) && tests.length > 0) {
    const s = tests[stepIndex];
    if (s) {
      return {
        testMeaning: s.testMeaning ?? s.speechTarget ?? "",
        speechTarget: s.speechTarget ?? "",
        speechAlternatives: s.speechAlternatives || [],
        testAnswers: s.testAnswers || [],
        hint: s.hint || s.testMeaning || s.speechTarget || "",
        playerLine: s.speechTarget || s.hint || "",
        isTemplateConfigured: !!(s.speechTarget || "").trim(),
      };
    }
  }
  return {
    testMeaning: level.testMeaning,
    speechTarget: level.speechTarget,
    speechAlternatives: level.speechAlternatives || [],
    testAnswers: level.testAnswers || [],
    hint: level.speechTarget || level.testMeaning || "",
    playerLine: level.speechTarget || level.testMeaning || "",
    isTemplateConfigured: !!(level.speechTarget || "").trim(),
  };
}

function getSpeechMeaningForDisplay(level, stepIndex) {
  const cfg = getSpeechStepConfig(level, stepIndex);
  return cfg.testMeaning || cfg.speechTarget || "";
}

function getCustomSpeechTarget(levelId, stepIndex) {
  const ref = customSpeechReferences[levelId];
  if (!ref || !Array.isArray(ref.targets) || ref.targets.length === 0) return "";
  const safeIndex = Math.min(Math.max(stepIndex, 0), ref.targets.length - 1);
  return (ref.targets[safeIndex] || "").trim();
}

function getEffectiveSpeechTarget(level, stepIndex, fallbackTarget = "") {
  if (!level?.id) return fallbackTarget || "";
  return getCustomSpeechTarget(level.id, stepIndex) || fallbackTarget || "";
}

function matchSpeechForStep(level, stepIndex, transcript) {
  const normalized = normalizeSpeech(transcript);
  if (!normalized) return false;
  const cfg = getSpeechStepConfig(level, stepIndex);
  const primaryTarget = getEffectiveSpeechTarget(level, stepIndex, cfg.speechTarget || "");
  const acceptableTargets = [primaryTarget, ...(cfg.speechAlternatives || [])]
    .map((item) => normalizeSpeech(item))
    .filter(Boolean);
  if (!acceptableTargets.length) return false;
  // 允许命中同音归一化后的目标或配置中的备选词
  return acceptableTargets.includes(normalized);
}

function matchSpeech(level, transcript) {
  return matchSpeechForStep(level, 0, transcript);
}

/** 从一次识别结果中提取展示用全文，并对所有候选文案做命中判定 */
function evaluateSpeechMatch(level, stepIndex, event) {
  let display = "";
  let hasInterim = false;
  const cfg = getSpeechStepConfig(level, stepIndex);
  const targetText = getEffectiveSpeechTarget(level, stepIndex, cfg.speechTarget || "");

  // 构建显示文本
  for (let i = 0; i < event.results.length; i++) {
    const chunk = event.results[i];
    display += chunk[0].transcript;
    if (!chunk.isFinal) hasInterim = true;
  }

  // 如果没有目标文本，直接返回失败
  if (!targetText) {
    return { passed: false, display, hasInterim, templateMissing: true };
  }

  const acceptableTargets = [targetText, ...(cfg.speechAlternatives || [])]
    .map((item) => normalizeSpeech(item))
    .filter(Boolean);
  if (!acceptableTargets.length) {
    return { passed: false, display, hasInterim, templateMissing: true };
  }

  // 命中判定：优先接受最终结果；对短词（如数字“一”）也接受中间结果命中，
  // 避免浏览器未及时产出 final 时出现“明明说对却判失败”。
  let interimMatched = false;
  for (let i = 0; i < event.results.length; i++) {
    const chunk = event.results[i];
    for (let j = 0; j < chunk.length; j++) {
      const candidate = chunk[j].transcript;
      const normCandidate = normalizeSpeech(candidate);
      if (acceptableTargets.includes(normCandidate) && chunk.isFinal) {
        return { passed: true, display, hasInterim };
      }
      if (acceptableTargets.includes(normCandidate) && !chunk.isFinal) {
        interimMatched = true;
      }
    }
  }

  if (interimMatched) {
    return { passed: true, display, hasInterim };
  }

  return { passed: false, display, hasInterim, templateMissing: false };
}

function getTestMeaning(level) {
  if (level.testMeaning) return level.testMeaning;
  if (level.speechTests?.length) {
    return getSpeechMeaningForDisplay(level, 0);
  }
  const audioItem = getLessonAudioItems(level).find((item) => item.meaning);
  return audioItem?.meaning || "请说出本关目标粤语";
}

function updateSpeechTestUI(level) {
  const prog = document.getElementById("speech-test-progress");
  const prompt = document.getElementById("speech-test-prompt");
  const n = getSpeechStepsCount(level);
  const step = speechState.currentSpeechStep;
  const meaning = getSpeechMeaningForDisplay(level, step);
  const cfg = getSpeechStepConfig(level, step);
  if (prog) {
    if (n > 1) {
      prog.style.display = "block";
      prog.textContent = `口语第 ${step + 1} / ${n} 题`;
    } else {
      prog.style.display = "none";
      prog.textContent = "";
    }
  }
  if (prompt) {
    const stageConfig = LEVEL_CONFIG[level?.id];
    const merchantLine = speechState.overrideMerchantMessage || stageConfig?.merchantLine || getBossLineForStep(level, step);
    const hint = cfg.hint || meaning || "无";
    const effectiveTarget = getEffectiveSpeechTarget(level, step, cfg.speechTarget || "");
    const playerLine = cfg.playerLine || effectiveTarget || hint || "（本步词条未配置）";
    const targetLine = effectiveTarget || "（未配置）";
    const targetTag =
      effectiveTarget && effectiveTarget !== (cfg.speechTarget || "") ? "（来自上传参考）" : "";
    prompt.innerHTML = `
      <div data-chat-key="${level?.id || 0}-${step}" style="display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:flex-start;">
          <div style="max-width:96%;display:flex;flex-direction:column;gap:6px;">
            <div class="chat-role-row" style="font-size:15px;color:#475569;">
              <span class="chat-avatar chat-avatar-merchant" aria-hidden="true">🥬</span>
              <span>商贩</span>
            </div>
            <div id="merchant-bubble" class="merchant-bubble">
              ${merchantLine}
            </div>
          </div>
        </div>
        <div style="display:flex;justify-content:flex-end;">
          <div style="max-width:96%;display:flex;flex-direction:column;gap:6px;align-items:flex-end;">
            <div class="chat-role-row" style="font-size:15px;color:#475569;">
              <span class="chat-avatar chat-avatar-user" aria-hidden="true">🪙</span>
              <span>我</span>
            </div>
            <div class="user-bubble">
              ${playerLine}
            </div>
          </div>
        </div>
        <div style="font-size:14px;color:#334155;font-weight:600;">提示词：${hint} ｜ 目标语音：${targetLine}${targetTag}</div>
      </div>
    `;
  }
  renderTargetWords(level);
}

function syncSpeechStartButtonState(level) {
  const btn = document.getElementById("start-speech-btn");
  if (!btn || !lessonAudioState.listened) return;
  const n = getSpeechStepsCount(level);
  if (n > 1 && isSpeechAllComplete(level)) {
    btn.disabled = true;
    btn.textContent = "本关口语已完成";
  } else if (!speechState.isListening) {
    btn.disabled = false;
    btn.textContent = "开始语音作答";
  }
}

function isSpeechAllComplete(level) {
  const n = getSpeechStepsCount(level);
  if (n <= 1) return !!speechState.passed;
  return (
    speechState.speechStepsPassed.length >= n &&
    speechState.speechStepsPassed.slice(0, n).every(Boolean)
  );
}

async function applySpeechStepPass(level, speechStatusEl, transcriptEl) {
  const n = getSpeechStepsCount(level);
  const i = speechState.currentSpeechStep;
  const passedWord = resolveTargetWordForStep(level, i);
  speechState.speechStepsPassed[i] = true;
  setWordActivated(level, i);
  await executeFeedback(passedWord, level?.id, i);
  updateSpeechTestUI(level);
  speechStatusEl.className = "ok-msg";
  speechStatusEl.textContent = "好嘞，收好了您嘞。";

  if (bossFeedbackTimer) {
    clearTimeout(bossFeedbackTimer);
    bossFeedbackTimer = null;
  }

  function handleNext() {
    if (i < n - 1) {
      speechState.currentSpeechStep = i + 1;
      speechState.passed = false;
      transcriptEl.textContent = "识别文本：暂无";
        setBossText(getBossLineForStep(level, speechState.currentSpeechStep));
      updateSpeechTestUI(level);
      speechStatusEl.className = "ok-msg";
      speechStatusEl.textContent = `第 ${i + 1} / ${n} 句已通过，请点击「开始语音作答」继续下一题。`;
    } else {
      speechState.passed = false;
        setBossText(getBossLineForStep(level, speechState.currentSpeechStep));
      updateSpeechTestUI(level);
      speechStatusEl.className = "ok-msg";
      speechStatusEl.textContent = "口语部分已完成，正在结算食材...";
      syncSpeechStartButtonState(level);
    }
      updateChallengeCompletionState(level, speechStatusEl);
      syncScenarioCookingButton(level);
  }

  bossFeedbackTimer = setTimeout(() => {
    bossFeedbackTimer = null;
    handleNext();
  }, 1500);
}

function getLessonAudioItems(level) {
  if (!Array.isArray(level.lessonAudios)) return [];
  return level.lessonAudios
    .map((item) => {
      if (typeof item === "string") {
        return { src: item, text: "", jyutping: "", meaning: "" };
      }
      return {
        src: item?.src || "",
        text: item?.text || "",
        jyutping: item?.jyutping || "",
        meaning: item?.meaning || "",
      };
    })
    .filter((item) => item.src);
}

function renderLevel() {
  stopSpeechRecognitionIfAny();
  const level = getLevelById(state.currentLevel);
  const nSpeech = getSpeechStepsCount(level);
  const stageWords = getScenarioWordList(level);
  speechState = {
    passed: false,
    transcript: "",
    isListening: false,
    currentSpeechStep: 0,
    speechStepsPassed: Array(nSpeech).fill(false),
    activatedWords: Array(stageWords.length || nSpeech).fill(false),
    totalIngredients: 0,
    collectedIngredients: 0,
    dropSchedule: [],
    overrideMerchantMessage: "",
  };
  lessonAudioState = {
    listened: false,
    speaking: false,
    currentIndex: -1,
    listenedMap: Array(getLessonAudioItems(level).length).fill(false),
    singleClipMode: null,
  };
  safeStopSpeech();
  clearScenarioRuntimeUi();
  if (!level) {
    levelSection.innerHTML = `
      <h2>恭喜通关全部关卡！</h2>
      <p>你已完成 12 个粤语关卡，可继续在烹饪界面自由组合奖品。</p>
      <button id="finish-go-cooking">前往烹饪界面</button>
    `;
    document.getElementById("finish-go-cooking").addEventListener("click", () => {
      showCookingSection();
    });
    return;
  }

  levelSection.innerHTML = `
    <h2 class="level-title">${level.title}</h2>
    <div id="lesson-page">
      <div class="quiz-item market-note">
        <p>学习页面：请先完成本关语音学习（每段至少听 1 遍）。</p>
        <div class="action-row">
          <button id="play-lesson-audio-btn" type="button">播放标准发音</button>
          <button id="replay-lesson-audio-btn" type="button" class="secondary-btn" disabled>再播一遍</button>
        </div>
        <div id="lesson-audio-status" class="err-msg">尚未播放完成，情景挑战已锁定。</div>
        <div id="lesson-audio-meta" class="dish-result">当前语音信息：暂无</div>
        <div id="lesson-audio-list" class="dish-result">语音列表：暂无</div>
      </div>
      <div class="action-row">
        <button id="go-challenge-btn" type="button" disabled>情景挑战</button>
        <button id="quick-cooking-btn" class="secondary-btn">先去烹饪界面</button>
      </div>
    </div>

    <div id="challenge-page" class="hidden">
      <div class="quiz-item scenario-layout">
        <div class="scenario-main">
        <p>情景挑战页面：现在你在需要完成跟商家的对话才能获得所需的食材，请按提示词进行回答。</p>
        <div id="speech-test-progress" class="speech-test-progress"></div>
        <div id="speech-test-prompt" class="dish-result"></div>
        <div class="action-row">
          <button id="start-speech-btn" type="button" disabled>开始语音作答</button>
        </div>
        <div id="speech-status" class="err-msg">尚未完成情景挑战</div>
        <div id="speech-transcript" class="dish-result">识别文本：暂无</div>
        </div>
        <aside class="scenario-tasks">
          <div class="scenario-tasks-title">本关目标词</div>
          <ol id="challenge-target-list" class="scenario-task-list"></ol>
        </aside>
      </div>
      <div class="action-row">
        <button id="submit-level-btn" disabled>完成挑战，获得食材</button>
        <button id="scenario-go-cooking-btn" class="secondary-btn" type="button" disabled>去烹饪</button>
        <button id="back-to-lesson-btn" class="secondary-btn" type="button">返回学习页面</button>
      </div>
      <div id="level-msg"></div>
    </div>
  `;

  const speechStatusEl = document.getElementById("speech-status");
  const lessonStatusEl = document.getElementById("lesson-audio-status");
  const playLessonAudioBtn = document.getElementById("play-lesson-audio-btn");
  const speechBtn = document.getElementById("start-speech-btn");
  const submitBtn = document.getElementById("submit-level-btn");
  const goChallengeBtn = document.getElementById("go-challenge-btn");
  const lessonPageEl = document.getElementById("lesson-page");
  const challengePageEl = document.getElementById("challenge-page");
  const backToLessonBtn = document.getElementById("back-to-lesson-btn");
  const scenarioGoCookingBtn = document.getElementById("scenario-go-cooking-btn");
  const ingredientList = getRewardImageList(level.reward || {}, level.id || 0);
  speechState.totalIngredients = ingredientList.length;
  speechState.collectedIngredients = 0;
  speechState.dropSchedule = buildIngredientDropSchedule(nSpeech, ingredientList);
  updateBasketUi();
  setScenarioChallengeUiVisible(false);
  renderTargetWords(level);

  function switchToChallengePage() {
    if (!lessonAudioState.listened) return;
    lessonPageEl.classList.add("hidden");
    challengePageEl.classList.remove("hidden");
    setScenarioChallengeUiVisible(true);
  }
  function switchToLessonPage() {
    challengePageEl.classList.add("hidden");
    lessonPageEl.classList.remove("hidden");
    setScenarioChallengeUiVisible(false);
  }

  playLessonAudioBtn.addEventListener("click", () => {
    playLessonAudio(level);
  });

  const replayLessonAudioBtn = document.getElementById("replay-lesson-audio-btn");
  replayLessonAudioBtn.addEventListener("click", () => {
    playLessonAudio(level, { keepListenProgress: true });
  });

  const audioItems = getLessonAudioItems(level);
  const lessonAudioListEl = document.getElementById("lesson-audio-list");
  if (audioItems.length > 0) {
    lessonAudioListEl.innerHTML = audioItems
      .map((item, idx) => {
        const text = item.text || "（未填写原文）";
        const jp = item.jyutping || "（未填写音标）";
        const meaning = item.meaning || "（未填写释义）";
        return `
      <div class="lesson-audio-item" data-clip-index="${idx}">
        <div class="lesson-audio-item-main">
          <span class="lesson-audio-item-no">${idx + 1}.</span>
          <span class="lesson-audio-item-text">${text} ｜ ${jp} ｜ ${meaning}</span>
        </div>
        <div class="lesson-audio-item-actions">
          <button type="button" class="clip-play-btn" data-clip-index="${idx}">播放本段</button>
          <button type="button" class="clip-replay-btn secondary-btn" data-clip-index="${idx}" disabled>再播一遍</button>
        </div>
      </div>`;
      })
      .join("");

    lessonAudioListEl.addEventListener("click", (e) => {
      const playEl = e.target.closest(".clip-play-btn");
      if (playEl) {
        const idx = Number(playEl.dataset.clipIndex);
        playLessonAudioClip(level, idx, { keepListenProgress: false });
        return;
      }
      const repEl = e.target.closest(".clip-replay-btn");
      if (repEl) {
        const idx = Number(repEl.dataset.clipIndex);
        playLessonAudioClip(level, idx, { keepListenProgress: true });
      }
    });
  }

  if (audioItems.length === 0) {
    lessonStatusEl.className = "err-msg";
    lessonStatusEl.textContent =
      "当前关卡未配置音频文件，请在 script.js 中补充 lessonAudios。";
  } else {
    lessonStatusEl.className = "err-msg";
    lessonStatusEl.textContent = `本关共 ${audioItems.length} 段语音，每段至少听 1 遍后才可测试。`;
  }

  if (!SpeechRecognition) {
    speechStatusEl.className = "err-msg";
    speechStatusEl.textContent =
      "当前浏览器不支持语音识别，请使用最新版 Chrome/Edge 后重试。";
  }

  document.getElementById("start-speech-btn").addEventListener("click", () => {
    startSpeechCheck(level);
  });

  setBossText(getBossLineForStep(level, speechState.currentSpeechStep));
  updateSpeechTestUI(level);

  document.getElementById("submit-level-btn").addEventListener("click", () => {
    checkCurrentLevel(level);
  });
  goChallengeBtn.addEventListener("click", () => {
    switchToChallengePage();
  });
  backToLessonBtn.addEventListener("click", () => {
    switchToLessonPage();
  });
  document.getElementById("quick-cooking-btn").addEventListener("click", () => {
    showCookingSection();
  });
  scenarioGoCookingBtn.addEventListener("click", () => {
    showCookingSection();
  });

  function unlockTestingArea() {
    speechBtn.disabled = false;
    syncChallengeSubmitState(level);
    goChallengeBtn.disabled = false;
    goChallengeBtn.textContent = "情景挑战";
    syncSpeechStartButtonState(level);
  }

  function lockTestingArea() {
    speechBtn.disabled = true;
    submitBtn.disabled = true;
    goChallengeBtn.disabled = true;
    goChallengeBtn.textContent = "情景挑战（先完成学习）";
  }

  if (lessonAudioState.listened) {
    unlockTestingArea();
  } else {
    lockTestingArea();
  }

  refreshLessonAudioProgress(audioItems.length);
  syncLessonAudioUi();
  syncChallengeSubmitState(level);
  syncScenarioCookingButton(level);
}

function checkCurrentLevel(level) {
  const msgEl = document.getElementById("level-msg");

  if (!lessonAudioState.listened) {
    msgEl.className = "err-msg";
    msgEl.textContent = "请先完整播放并听完前置学习发音。";
    return;
  }

  if (!SpeechRecognition) {
    msgEl.className = "err-msg";
    msgEl.textContent =
      "当前浏览器不支持语音识别，无法完成本关。请切换到支持语音识别的浏览器。";
    return;
  }

  if (!speechState.passed) {
    msgEl.className = "err-msg";
    msgEl.textContent = "请先完成情景挑战，并根据提示词回答后再提交。";
    return;
  }

  msgEl.className = "ok-msg";
  msgEl.textContent = "通关成功！请领取奖励。";
  grantReward(level);
}

function syncReplayLessonButton() {
  const replayBtn = document.getElementById("replay-lesson-audio-btn");
  if (!replayBtn) return;
  const busy = lessonAudioState.speaking;
  const canReplay = lessonAudioState.listened;
  replayBtn.disabled = !canReplay || busy;
  replayBtn.textContent = busy && canReplay ? "再播一遍中..." : "再播一遍";
}

function syncSegmentButtons() {
  const listEl = document.getElementById("lesson-audio-list");
  if (!listEl) return;
  const speaking = lessonAudioState.speaking;
  const listened = lessonAudioState.listened;
  const sm = lessonAudioState.singleClipMode;

  listEl.querySelectorAll(".clip-play-btn").forEach((btn) => {
    const idx = Number(btn.dataset.clipIndex);
    const isThisRow =
      speaking && sm && sm.index === idx && !sm.replay;
    btn.disabled = speaking;
    btn.textContent = isThisRow ? "播放中..." : "播放本段";
  });

  listEl.querySelectorAll(".clip-replay-btn").forEach((btn) => {
    const idx = Number(btn.dataset.clipIndex);
    const isThisRow =
      speaking && sm && sm.index === idx && sm.replay;
    btn.disabled = !listened || speaking;
    btn.textContent = isThisRow ? "再播中..." : "再播一遍";
  });
}

function syncLessonAudioUi() {
  syncReplayLessonButton();
  syncSegmentButtons();
}

function refreshLessonAudioProgress(total) {
  const lessonStatusEl = document.getElementById("lesson-audio-status");
  const goChallengeBtn = document.getElementById("go-challenge-btn");
  const speechBtn = document.getElementById("start-speech-btn");
  const submitBtn = document.getElementById("submit-level-btn");
  if (!lessonStatusEl || total <= 0) return;
  const listenedCount = lessonAudioState.listenedMap.filter(Boolean).length;
  const unlocked = lessonAudioState.listened;
  if (goChallengeBtn) {
    goChallengeBtn.disabled = !unlocked;
    goChallengeBtn.textContent = unlocked
      ? "情景挑战"
      : "情景挑战（先完成学习）";
  }
  if (speechBtn) speechBtn.disabled = !unlocked;
  if (submitBtn) {
    if (!unlocked) {
      submitBtn.disabled = true;
    } else {
      const currentLevel = getLevelById(state.currentLevel);
      if (currentLevel) {
        syncChallengeSubmitState(currentLevel);
      }
    }
  }
  if (lessonAudioState.listened) {
    lessonStatusEl.className = "ok-msg";
    lessonStatusEl.textContent = `学习完成：${listenedCount}/${total} 段已听，点击「情景挑战」进入商贩对话。`;
    return;
  }
  lessonStatusEl.className = "err-msg";
  lessonStatusEl.textContent = `学习进行中：${listenedCount}/${total} 段已听，每段至少 1 遍后才能进入情景挑战。`;
}

function playLessonAudio(level, options = {}) {
  const keepListenProgress = Boolean(options.keepListenProgress);
  stopSpeechRecognitionIfAny();
  const lessonStatusEl = document.getElementById("lesson-audio-status");
  const playBtn = document.getElementById("play-lesson-audio-btn");
  const speechBtn = document.getElementById("start-speech-btn");
  const submitBtn = document.getElementById("submit-level-btn");

  const audioItems = getLessonAudioItems(level);
  if (audioItems.length === 0) {
    lessonStatusEl.className = "err-msg";
    lessonStatusEl.textContent = "本关未配置音频，无法开始测试。";
    return;
  }
  if (lessonAudioState.speaking) return;

  lessonAudioState.singleClipMode = null;
  lessonAudioState.speaking = true;
  if (!keepListenProgress) {
    lessonAudioState.listened = false;
  }
  speechBtn.disabled = true;
  submitBtn.disabled = true;
  playBtn.textContent = "播放中...";
  syncLessonAudioUi();
  lessonStatusEl.className = "err-msg";
  const lessonMetaEl = document.getElementById("lesson-audio-meta");
  lessonStatusEl.textContent = `正在准备播放(1/${audioItems.length})...`;

  const playAt = (idx) => {
    lessonAudioState.currentIndex = idx;
    const item = audioItems[idx];
    lessonStatusEl.className = "err-msg";
    lessonStatusEl.textContent = `正在播放标准发音（${idx + 1}/${audioItems.length})`;
    lessonMetaEl.textContent = `当前语音：原文 ${item.text || "（未填写）"} ｜ 音标 ${item.jyutping || "（未填写）"} ｜ 释义 ${item.meaning || "（未填写）"}`;

    safeStopSpeech();
    const player = new Audio(item.src);
    currentLessonAudio = player;

    player.onended = () => {
      lessonAudioState.listenedMap[idx] = true;
      if (idx < audioItems.length - 1) {
        playAt(idx + 1);
        return;
      }

      lessonAudioState.speaking = false;
      lessonAudioState.listened = lessonAudioState.listenedMap.every(Boolean);
      lessonAudioState.currentIndex = audioItems.length - 1;
      playBtn.textContent = "重新播放标准发音";
      lessonMetaEl.textContent = "当前语音信息：已全部播放完成。";
      speechBtn.disabled = !lessonAudioState.listened;
      submitBtn.disabled = !lessonAudioState.listened;
      refreshLessonAudioProgress(audioItems.length);
      syncLessonAudioUi();
      currentLessonAudio = null;
    };

    player.onerror = () => {
      lessonAudioState.speaking = false;
      if (!keepListenProgress) {
        lessonAudioState.listened = false;
      }
      lessonAudioState.currentIndex = -1;
      playBtn.textContent = lessonAudioState.listened
        ? "重新播放标准发音"
        : "播放标准发音";
      speechBtn.disabled = !lessonAudioState.listened;
      submitBtn.disabled = !lessonAudioState.listened;
      syncLessonAudioUi();
      lessonStatusEl.className = "err-msg";
      lessonStatusEl.textContent = `第 ${idx + 1} 段音频播放失败，请检查文件路径：${item.src}`;
      currentLessonAudio = null;
    };

    player.play().catch(() => {
      lessonAudioState.speaking = false;
      if (!keepListenProgress) {
        lessonAudioState.listened = false;
      }
      lessonAudioState.currentIndex = -1;
      playBtn.textContent = lessonAudioState.listened
        ? "重新播放标准发音"
        : "播放标准发音";
      speechBtn.disabled = !lessonAudioState.listened;
      submitBtn.disabled = !lessonAudioState.listened;
      syncLessonAudioUi();
      lessonStatusEl.className = "err-msg";
      lessonStatusEl.textContent = `第 ${idx + 1} 段音频无法播放，可能是浏览器拦截或文件不存在：${item.src}`;
      currentLessonAudio = null;
    });
  };

  playAt(0);
}

function playLessonAudioClip(level, clipIndex, options = {}) {
  const keepListenProgress = Boolean(options.keepListenProgress);
  const audioItems = getLessonAudioItems(level);
  if (clipIndex < 0 || clipIndex >= audioItems.length) return;
  if (lessonAudioState.speaking) return;
  if (keepListenProgress && !lessonAudioState.listened) return;

  stopSpeechRecognitionIfAny();

  const lessonStatusEl = document.getElementById("lesson-audio-status");
  const playBtn = document.getElementById("play-lesson-audio-btn");
  const speechBtn = document.getElementById("start-speech-btn");
  const submitBtn = document.getElementById("submit-level-btn");
  const lessonMetaEl = document.getElementById("lesson-audio-meta");

  lessonAudioState.speaking = true;
  lessonAudioState.singleClipMode = { index: clipIndex, replay: keepListenProgress };
  lessonAudioState.currentIndex = clipIndex;

  speechBtn.disabled = true;
  submitBtn.disabled = true;
  playBtn.textContent = "播放中...";
  syncLessonAudioUi();

  const item = audioItems[clipIndex];
  lessonStatusEl.className = "err-msg";
  lessonStatusEl.textContent = keepListenProgress
    ? `正在再听第 ${clipIndex + 1}/${audioItems.length} 段`
    : `正在试听第 ${clipIndex + 1}/${audioItems.length} 段`;
  lessonMetaEl.textContent = `当前语音：原文 ${item.text || "（未填写）"} ｜ 音标 ${item.jyutping || "（未填写）"} ｜ 释义 ${item.meaning || "（未填写）"}`;

  safeStopSpeech();
  const player = new Audio(item.src);
  currentLessonAudio = player;

  const restoreAfterClip = () => {
    lessonAudioState.speaking = false;
    lessonAudioState.singleClipMode = null;
    speechBtn.disabled = !lessonAudioState.listened;
    submitBtn.disabled = !lessonAudioState.listened;
    playBtn.textContent = lessonAudioState.listened
      ? "重新播放标准发音"
      : "播放标准发音";
    syncLessonAudioUi();
    currentLessonAudio = null;
  };

  player.onended = () => {
    lessonAudioState.listenedMap[clipIndex] = true;
    lessonAudioState.listened = lessonAudioState.listenedMap.every(Boolean);
    if (keepListenProgress) {
      lessonStatusEl.className = "ok-msg";
      lessonStatusEl.textContent = `已再听第 ${clipIndex + 1} 段（共 ${audioItems.length} 段），可继续练习或进入情景挑战。`;
    } else {
      lessonStatusEl.className = "ok-msg";
      lessonStatusEl.textContent = `已试听第 ${clipIndex + 1} 段；继续把其余语音都至少听 1 遍即可解锁测试。`;
    }
    lessonMetaEl.textContent = "当前语音信息：本段播放结束。";
    refreshLessonAudioProgress(audioItems.length);
    restoreAfterClip();
  };

  player.onerror = () => {
    restoreAfterClip();
    lessonStatusEl.className = "err-msg";
    lessonStatusEl.textContent = `第 ${clipIndex + 1} 段音频播放失败，请检查文件路径：${item.src}`;
  };

  player.play().catch(() => {
    restoreAfterClip();
    lessonStatusEl.className = "err-msg";
    lessonStatusEl.textContent = `第 ${clipIndex + 1} 段音频无法播放，可能是浏览器拦截或文件不存在：${item.src}`;
  });
}

function speechErrorMessage(code) {
  switch (code) {
    case "not-allowed":
      return "麦克风权限未允许。请点击地址栏左侧的锁图标，将麦克风权限改为「允许」。";
    case "no-speech":
      return "未检测到语音，请靠近麦克风、提高音量后再次点击开始。";
    case "audio-capture":
      return "无法访问麦克风，请确认设备已连接且未被其他应用占用。";
    case "network":
      return "语音识别需要网络（在线识别服务），请检查网络连接后重试。";
    case "aborted":
      return "";
    case "service-not-allowed":
      return "当前环境不允许使用语音识别（例如部分无痕模式或策略限制）。";
    default:
      return `语音识别出错（${code}），请稍后重试。`;
  }
}

function startSpeechCheck(level) {
  if (!SpeechRecognition) return;
  const speechStatusEl = document.getElementById("speech-status");
  const transcriptEl = document.getElementById("speech-transcript");
  const startBtn = document.getElementById("start-speech-btn");

  // 如果已经在监听，则停止（与原来一致）
  if (speechState.isListening && activeSpeechRecognition) {
    try {
      activeSpeechRecognition.stop();
    } catch (_e) {
      /* ignore */
    }
    return;
  }

  const recognition = new SpeechRecognition();
  activeSpeechRecognition = recognition;

  // 使用中文识别引擎，兼容普通话/粤语输入；最终仍做模板文本严格比对
  recognition.lang = "zh-CN";
  recognition.interimResults = true;
  recognition.continuous = true;
  recognition.maxAlternatives = 5;

  speechState.isListening = true;
  startBtn.textContent = "停止识别";
  speechStatusEl.className = "err-msg";
  const stepIdx = speechState.currentSpeechStep;
  const meaningHint = getSpeechMeaningForDisplay(level, stepIdx);
  speechStatusEl.textContent =
    window.location.protocol === "file:"
      ? `当前为本地文件模式，浏览器可能限制语音识别；若识别失败可改用 Chrome/Edge 或通过 http 访问。请根据提示词「${meaningHint}」作答。`
      : `请根据提示词「${meaningHint}」清晰作答；可再次点击按钮提前结束。`;

  let finalChecked = false;
  let autoStopTimer = null;
  let maxSessionTimer = null;

  function clearAutoStop() {
    if (!autoStopTimer) return;
    clearTimeout(autoStopTimer);
    autoStopTimer = null;
  }

  function clearMaxSession() {
    if (!maxSessionTimer) return;
    clearTimeout(maxSessionTimer);
    maxSessionTimer = null;
  }

  function scheduleAutoStop() {
    clearAutoStop();
    autoStopTimer = setTimeout(() => {
      if (activeSpeechRecognition === recognition && speechState.isListening) {
        try {
          recognition.stop();
        } catch (_e) {
          /* ignore */
        }
      }
    }, SPEECH_AUTO_STOP_MS);
  }

  scheduleAutoStop();
  maxSessionTimer = setTimeout(() => {
    if (activeSpeechRecognition === recognition && speechState.isListening) {
      try {
        recognition.stop();
      } catch (_e) {
        /* ignore */
      }
    }
  }, SPEECH_MAX_SESSION_MS);

  recognition.onresult = (event) => {
    if (activeSpeechRecognition !== recognition) return;
    scheduleAutoStop();
    const step = speechState.currentSpeechStep;
    const evalResult = evaluateSpeechMatch(level, step, event);
    speechState.transcript = evalResult.display || "";
    transcriptEl.textContent = `识别文本：${speechState.transcript || "暂无"}`;

    if (evalResult.templateMissing) {
      speechState.passed = false;
      speechStatusEl.className = "err-msg";
      speechStatusEl.textContent = "本步目标语音未配置，请联系维护者。";
      return;
    }

    if (evalResult.passed) {
      finalChecked = true;
      void applySpeechStepPass(level, speechStatusEl, transcriptEl);
      try {
        recognition.stop();
      } catch (_e) {
        /* ignore */
      }
    } else if (!evalResult.hasInterim) {
      finalChecked = true;
      speechState.passed = false;
      speechStatusEl.className = "err-msg";
      const cfg = getSpeechStepConfig(level, step);
      const targetLine = getEffectiveSpeechTarget(level, step, cfg.speechTarget || "");
      speechStatusEl.textContent = `识别未命中目标，请严格说出模板原文：${targetLine || "（未配置）"}`;
    }
  };

  recognition.onerror = (errEv) => {
    if (activeSpeechRecognition !== recognition) return;
    clearAutoStop();
    clearMaxSession();
    const code = errEv.error || "";
    if (code === "aborted") {
      speechStatusEl.className = "err-msg";
      speechStatusEl.textContent = "已停止识别。如需重试请点击「开始语音作答」。";
      return;
    }
    if (!isSpeechAllComplete(level)) {
      speechState.passed = false;
    }
    if (code === "not-allowed" || code === "service-not-allowed") {
      speechStatusEl.className = "err-msg";
      speechStatusEl.textContent = "麦克风权限未允许，请在浏览器地址栏左侧点击锁图标，允许使用麦克风后重试。";
    } else {
      const msg = speechErrorMessage(code);
      speechStatusEl.className = "err-msg";
      speechStatusEl.textContent = msg || "语音识别失败，请检查麦克风权限或网络后重试。";
    }
  };

  recognition.onend = () => {
    if (activeSpeechRecognition !== recognition) return;
    clearAutoStop();
    clearMaxSession();
    speechState.isListening = false;
    activeSpeechRecognition = null;
    if (!finalChecked && !isSpeechAllComplete(level)) {
      speechState.passed = false;
      speechStatusEl.className = "err-msg";
      speechStatusEl.textContent = "本次识别未得到有效结果，请靠近麦克风并重试。";
    }
    syncSpeechStartButtonState(level);
  };

  try {
    recognition.start();
  } catch (_e) {
    speechState.isListening = false;
    activeSpeechRecognition = null;
    syncSpeechStartButtonState(level);
    speechStatusEl.className = "err-msg";
    speechStatusEl.textContent = "无法启动语音识别，请刷新页面后重试。";
  }
}

function grantReward(level) {
  if (!state.unlockedRewards.some((r) => r.levelId === level.id)) {
    state.unlockedRewards.push({
      levelId: level.id,
      name: level.reward.name,
      image: level.reward.image || "",
    });
  }

  state.clearedLevels = Math.max(state.clearedLevels, level.id);
  if (state.currentLevel <= TOTAL_LEVELS) {
    state.currentLevel = Math.min(level.id + 1, TOTAL_LEVELS + 1);
  }

  saveState();
  updateProgressUI();
  showReward(level.reward);
  refreshInventory();
}

function showReward(reward) {
  enterLevelPage();
  setFloatingUiVisible(false);
  rewardName.textContent = reward.name;
  rewardDesc.textContent = reward.desc;
  const level = getLevelById(state.clearedLevels);
  const levelId = level?.id || 0;
  const rewardImages = getRewardImageList(reward, levelId);

  if (rewardImages.length > 0) {
    rewardImageSlot.innerHTML = `
      <div class="reward-image-grid reward-image-grid-square">
        ${rewardImages
          .map(
            (src, idx) =>
              `<div class="reward-image-item reward-image-item-square"><img src="${src}" alt="${reward.name}-${idx + 1}" /></div>`
          )
          .join("")}
      </div>
    `;
  } else {
    rewardImageSlot.innerHTML = `
      <span>奖品图片占位区<br />可在 script.js 的 reward.image 填入图片 URL</span>
    `;
  }

  rewardSection.classList.remove("hidden");
  levelSection.classList.add("hidden");
  cookingSection.classList.add("hidden");
}

function showLevelSection() {
  enterLevelPage();
  setScenarioChallengeUiVisible(false);
  rewardSection.classList.add("hidden");
  levelSection.classList.remove("hidden");
  cookingSection.classList.add("hidden");
  renderLevel();
}

function showCookingSection() {
  enterLevelPage();
  setFloatingUiVisible(false);
  safeStopSpeech();
  rewardSection.classList.add("hidden");
  levelSection.classList.add("hidden");
  cookingSection.classList.remove("hidden");
  refreshInventory();
}

function enterLevelPage() {
  homeSection?.classList.add("hidden");
  levelPage?.classList.remove("hidden");
}

function enterHomePage() {
  stopSpeechRecognitionIfAny();
  safeStopSpeech();
  setFloatingUiVisible(false);
  levelPage?.classList.add("hidden");
  homeSection?.classList.remove("hidden");
}

function refreshInventory() {
  const ingredients = getOwnedIngredientsFromRewards();
  inventoryList.innerHTML = "";

  if (ingredients.length === 0) {
    inventoryList.innerHTML = `<span class="chip">暂无奖品，先去闯关解锁食材</span>`;
  } else {
    ingredients.forEach((name) => {
      const span = document.createElement("span");
      span.className = "chip";
      span.textContent = name;
      inventoryList.appendChild(span);
    });
  }

  renderRecipeBoard(ingredients);
}

function getRecipeImage(recipe) {
  return recipe.image || "";
}

function getRewardImageList(reward, levelId) {
  const direct = Array.isArray(reward?.images)
    ? reward.images.filter((item) => typeof item === "string" && item.trim())
    : [];
  if (direct.length > 0) return Array.from(new Set(direct));
  const fromManifest = Array.isArray(rewardImageManifest[levelId])
    ? rewardImageManifest[levelId]
    : [];
  if (fromManifest.length > 0) return fromManifest;
  return reward?.image ? [reward.image] : [];
}

function renderRecipeBoard(ownedIngredients) {
  if (!recipeBoard) return;

  if (ownedIngredients.length === 0) {
    recipeBoard.innerHTML = `<div class="recipe-card locked recipe-empty">暂无食材，先去闯关拿奖励再来开火。</div>`;
    return;
  }

  recipeBoard.innerHTML = recipeBook
    .map((recipe) => {
      const canCook = recipe.ingredients.every((ing) => ownedIngredients.includes(ing));
      const recipeImage = getRecipeImage(recipe);
      const needTags = recipe.ingredients
        .map((ing) => {
          const hasOne = ownedIngredients.includes(ing);
          return `<span class="chip ${hasOne ? "chip-have" : "chip-miss"}">${ing}</span>`;
        })
        .join("");

      return `
      <article class="recipe-card ${canCook ? "" : "locked"}">
        <div class="recipe-image-slot">
          ${
            recipeImage
              ? `<img src="${recipeImage}" alt="${recipe.name}" />`
              : `<span>暂无图片</span>`
          }
        </div>
        <h4>${recipe.name}</h4>
        <p>${recipe.desc}</p>
        <div class="recipe-needs">${needTags}</div>
        <button class="cook-recipe-btn" data-recipe-id="${recipe.id}" ${canCook ? "" : "disabled"}>
          ${canCook ? "按菜谱烹饪" : `需通关到第 ${recipe.unlockLevel} 关附近`}
        </button>
      </article>
    `;
    })
    .join("");

  const btns = recipeBoard.querySelectorAll(".cook-recipe-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.recipeId);
      cookByRecipe(id, ownedIngredients);
    });
  });
}

function cookByRecipe(recipeId, ownedIngredients) {
  const recipe = recipeBook.find((item) => item.id === recipeId);
  if (!recipe) return;

  const canCook = recipe.ingredients.every((ing) => ownedIngredients.includes(ing));
  if (!canCook) {
    dishResult.textContent = `食材不足：${recipe.name} 还不能做，继续闯关解锁更多奖励。`;
    return;
  }

  startCookingAnimation(recipe.name, () => {
    dishResult.textContent = `烹饪成功：${recipe.name}。使用食材：${recipe.ingredients.join("、")}。${recipe.desc}`;
  });
}

function clearCookingAnimationTimers() {
  if (cookingProgressTimer) {
    clearInterval(cookingProgressTimer);
    cookingProgressTimer = null;
  }
  if (cookingIconTimer) {
    clearInterval(cookingIconTimer);
    cookingIconTimer = null;
  }
  if (cookingTipTimer) {
    clearInterval(cookingTipTimer);
    cookingTipTimer = null;
  }
}

function createConfetti() {
  const colors = ["#d6a269", "#c48a4d", "#e8c49a", "#b47b4c", "#f0d5b0", "#a06b3f"];
  for (let i = 0; i < 28; i++) {
    setTimeout(() => {
      const particle = document.createElement("div");
      particle.className = "confetti-particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.animationDelay = `${Math.random() * 0.4}s`;
      const size = Math.random() * 8 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      document.body.appendChild(particle);
      setTimeout(() => {
        particle.remove();
      }, 2200);
    }, i * 30);
  }
}

function showRecipePopup(recipe) {
  if (!recipePopupModal) return;
  if (recipePopupIcon) recipePopupIcon.textContent = "✨";
  if (recipePopupTitle) recipePopupTitle.textContent = recipe.name || "菜品完成！";
  if (recipePopupImage) {
    if (recipe.image) {
      recipePopupImage.innerHTML = `<img src="${recipe.image}" alt="${recipe.name || "菜谱图片"}" />`;
    } else {
      recipePopupImage.textContent = recipeIconMap[recipe.name] || "🍲";
    }
  }
  if (recipePopupDesc) recipePopupDesc.textContent = recipe.desc || "美味佳肴，新鲜出炉！";
  recipePopupModal.classList.remove("hidden");
  createConfetti();
}

function startCookingAnimation(recipeName, onComplete) {
  if (!cookingModal || !cookingProgressFill || !cookingProgressText) {
    onComplete?.();
    return;
  }

  clearCookingAnimationTimers();
  let progress = 0;
  cookingProgressFill.style.width = "0%";
  cookingProgressText.textContent = "0%";
  if (cookingTitle) cookingTitle.textContent = `正在烹饪 ${recipeName}`;
  if (cookingTip) cookingTip.textContent = cookingTips[0];
  if (cookingIcon) cookingIcon.textContent = cookingIcons[0];
  cookingModal.classList.remove("hidden");

  cookingIconTimer = setInterval(() => {
    if (cookingIcon) {
      cookingIcon.textContent = cookingIcons[Math.floor(Math.random() * cookingIcons.length)];
    }
  }, 450);

  cookingTipTimer = setInterval(() => {
    if (cookingTip) {
      cookingTip.textContent = cookingTips[Math.floor(Math.random() * cookingTips.length)];
    }
  }, 1400);

  cookingProgressTimer = setInterval(() => {
    progress += Math.random() * 9 + 2;
    if (progress >= 100) progress = 100;
    cookingProgressFill.style.width = `${progress}%`;
    cookingProgressText.textContent = `${Math.floor(progress)}%`;

    if (progress >= 100) {
      clearCookingAnimationTimers();
      if (cookingIcon) cookingIcon.textContent = "✅";
      if (cookingTitle) cookingTitle.textContent = "烹饪完成！";
      if (cookingTip) cookingTip.textContent = `🎉 ${recipeName} 做好啦！`;
      setTimeout(() => {
        cookingModal.classList.add("hidden");
        const recipe = recipeBook.find((item) => item.name === recipeName) || {
          name: recipeName,
          desc: "美味佳肴，新鲜出炉！",
        };
        showRecipePopup(recipe);
        onComplete?.();
      }, 1200);
    }
  }, 120);
}

function resetProgress() {
  safeStopSpeech();
  state = {
    currentLevel: 1,
    clearedLevels: 0,
    unlockedRewards: [],
  };
  saveState();
  updateProgressUI();
  refreshInventory();
  showLevelSection();
}

nextLevelBtn.addEventListener("click", () => {
  showLevelSection();
});

toCookingBtn.addEventListener("click", () => {
  showCookingSection();
});

backToLevelBtn.addEventListener("click", () => {
  showLevelSection();
});

resetBtn.addEventListener("click", () => {
  resetProgress();
});

const homeStartBtn = document.getElementById("home-start-btn");
const homeRecipeBtn = document.getElementById("home-recipe-btn");
const resetLevelBtn = document.getElementById("reset-level-btn");

if (homeStartBtn) {
  homeStartBtn.addEventListener("click", () => {
    showLevelSection();
  });
}

if (homeRecipeBtn) {
  homeRecipeBtn.addEventListener("click", () => {
    showCookingSection();
  });
}

if (resetLevelBtn) {
  resetLevelBtn.addEventListener("click", () => {
    resetProgress();
  });
}

if (backHomeBtn) {
  backHomeBtn.addEventListener("click", () => {
    enterHomePage();
  });
}

if (cookingModal) {
  cookingModal.addEventListener("click", (e) => {
    if (e.target === cookingModal) {
      // 烹饪中不允许点击遮罩关闭
    }
  });
}

if (recipePopupCloseBtn) {
  recipePopupCloseBtn.addEventListener("click", () => {
    recipePopupModal?.classList.add("hidden");
  });
}

if (recipePopupModal) {
  recipePopupModal.addEventListener("click", (e) => {
    if (e.target === recipePopupModal) {
      recipePopupModal.classList.add("hidden");
    }
  });
}

loadState();
updateProgressUI();
renderLevel();
refreshInventory();
