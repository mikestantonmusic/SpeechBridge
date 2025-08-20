// Generated vocabulary data for client-only app
// Export Date: 2025-08-18T03:40:32.597Z
// Total Groups: 362
// Total Words: 3610

export interface VocabularyWord {
  id: string;
  english: string;
  chinese: string;
  pinyin: string;
  order: number;
}

export interface WordGroup {
  id: string;
  name: string;
  description: string | null;
  hsklevel: number;
  wordCount: number;
  words: VocabularyWord[];
}

export interface VocabularyData {
  metadata: {
    totalGroups: number;
    totalWords: number;
    exportDate: string;
    hskLevels: number[];
  };
  groups: WordGroup[];
}

export const VOCABULARY_DATA: VocabularyData = {
  "metadata": {
    "totalGroups": 362,
    "totalWords": 3610,
    "exportDate": "2025-08-18T03:40:32.597Z",
    "hskLevels": [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  },
  "groups": [
    {
      "id": "af7528d9-1da2-4b58-92da-67f95e71f4de",
      "name": "HSK 1 1",
      "description": "HSK 1 1 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "11d5fcef-9cae-4a21-9d83-66036c15762d",
          "english": "father",
          "chinese": "爸爸",
          "pinyin": "bàba",
          "order": 0
        },
        {
          "id": "3a03a305-2fd4-4e23-86fb-5967b3eb96a1",
          "english": "mother",
          "chinese": "妈妈",
          "pinyin": "māma",
          "order": 1
        },
        {
          "id": "c83f9045-1e6f-4983-8e89-ec6436b4ff2a",
          "english": "older brother",
          "chinese": "哥哥",
          "pinyin": "gēge",
          "order": 2
        },
        {
          "id": "2f0ace55-2cd8-44aa-89cc-5632702f911b",
          "english": "older sister",
          "chinese": "姐姐",
          "pinyin": "jiějie",
          "order": 3
        },
        {
          "id": "fce001be-e088-4ef4-a677-b3507a390d6f",
          "english": "younger brother",
          "chinese": "弟弟",
          "pinyin": "dìdi",
          "order": 4
        },
        {
          "id": "ea227d5b-7330-48e0-a3ae-eecda4148078",
          "english": "younger sister",
          "chinese": "妹妹",
          "pinyin": "mèimei",
          "order": 5
        },
        {
          "id": "5fd217e2-3dd6-4af1-a573-3174269f9bff",
          "english": "son",
          "chinese": "儿子",
          "pinyin": "érzi",
          "order": 6
        },
        {
          "id": "9c01664c-db4c-40e1-ada1-6398e14df5a5",
          "english": "daughter",
          "chinese": "女儿",
          "pinyin": "nǚér",
          "order": 7
        },
        {
          "id": "2be995b0-e33e-44d2-8c7f-63fedcc2f8ed",
          "english": "teacher",
          "chinese": "老师",
          "pinyin": "lǎoshī",
          "order": 8
        },
        {
          "id": "eac49ecb-e376-4431-9be3-49ad38931c81",
          "english": "student",
          "chinese": "学生",
          "pinyin": "xuéshēng",
          "order": 9
        }
      ]
    },
    {
      "id": "cf0ed0c6-fd99-424f-baa5-bc36af77ef4b",
      "name": "HSK 1 12",
      "description": "HSK 1 12 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "3b5c0290-7ae9-4556-92b1-99d5e17350ca",
          "english": "like",
          "chinese": "喜欢",
          "pinyin": "xǐhuān",
          "order": 0
        },
        {
          "id": "72d0508c-1698-4920-b567-66c59f3344b9",
          "english": "love",
          "chinese": "爱",
          "pinyin": "ài",
          "order": 1
        },
        {
          "id": "4c10edd4-8bdb-4860-86a7-f0d83c5efd9e",
          "english": "know",
          "chinese": "知道",
          "pinyin": "zhīdào",
          "order": 2
        },
        {
          "id": "0a0ad397-5863-485a-ba62-11b11b5d6373",
          "english": "think",
          "chinese": "想",
          "pinyin": "xiǎng",
          "order": 3
        },
        {
          "id": "c41e48a3-0001-4ee0-afa8-db9fb6f54c4d",
          "english": "come",
          "chinese": "来",
          "pinyin": "lái",
          "order": 4
        },
        {
          "id": "cb29ebb1-ebf5-4ef5-9a7b-55cef12a8a52",
          "english": "go",
          "chinese": "去",
          "pinyin": "qù",
          "order": 5
        },
        {
          "id": "33a92dfb-3a8f-4e9b-85f6-b421ecf54672",
          "english": "return",
          "chinese": "回",
          "pinyin": "huí",
          "order": 6
        },
        {
          "id": "77989942-923e-4b07-bebd-ef859dd5c203",
          "english": "enter",
          "chinese": "进",
          "pinyin": "jìn",
          "order": 7
        },
        {
          "id": "3788935f-e394-4b1f-a55c-1924a9891824",
          "english": "exit",
          "chinese": "出",
          "pinyin": "chū",
          "order": 8
        },
        {
          "id": "9ef2b0e7-186d-4616-bd12-68a9c7f46fe8",
          "english": "sit",
          "chinese": "坐",
          "pinyin": "zuò",
          "order": 9
        }
      ]
    },
    {
      "id": "04a24514-0d8b-4338-a082-a6cef9099668",
      "name": "HSK 1 13",
      "description": "HSK 1 13 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "ffa3d7c6-3753-4642-aacd-d1dd3a36a3ea",
          "english": "stand",
          "chinese": "站",
          "pinyin": "zhàn",
          "order": 0
        },
        {
          "id": "7fa07d0f-70de-425c-b054-a39299784c19",
          "english": "walk",
          "chinese": "走",
          "pinyin": "zǒu",
          "order": 1
        },
        {
          "id": "b08c06ae-8f81-4313-84c5-ced9bea1bb83",
          "english": "run",
          "chinese": "跑",
          "pinyin": "pǎo",
          "order": 2
        },
        {
          "id": "8237788f-95e4-4f72-8f64-8db209e597ae",
          "english": "sleep",
          "chinese": "睡觉",
          "pinyin": "shuìjiào",
          "order": 3
        },
        {
          "id": "fe291917-2b91-437b-bcf4-021a53ac5fe8",
          "english": "eat",
          "chinese": "吃",
          "pinyin": "chī",
          "order": 4
        },
        {
          "id": "5d6dfb8b-6afb-449c-a98b-6c0a1d5c09f5",
          "english": "drink",
          "chinese": "喝",
          "pinyin": "hē",
          "order": 5
        },
        {
          "id": "3146b6a5-9a2b-4d99-9fd7-9e2068a2544d",
          "english": "buy",
          "chinese": "买",
          "pinyin": "mǎi",
          "order": 6
        },
        {
          "id": "b7bd950a-ea96-4988-ae94-53bce93e9536",
          "english": "sell",
          "chinese": "卖",
          "pinyin": "mài",
          "order": 7
        },
        {
          "id": "e689dea0-7987-4a12-bd16-ec43bee45ce8",
          "english": "see",
          "chinese": "看",
          "pinyin": "kàn",
          "order": 8
        },
        {
          "id": "02599676-2d34-4fbb-8d46-86f587fe1c10",
          "english": "listen",
          "chinese": "听",
          "pinyin": "tīng",
          "order": 9
        }
      ]
    },
    {
      "id": "68d08ba5-9603-4068-aab1-02e40aac5f54",
      "name": "HSK 1 14",
      "description": "HSK 1 14 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "cfd34698-f0f8-46ae-877c-04ef99e0a044",
          "english": "speak",
          "chinese": "说",
          "pinyin": "shuō",
          "order": 0
        },
        {
          "id": "e7165012-9a26-4faf-9e3e-084eda15e9b8",
          "english": "read",
          "chinese": "读",
          "pinyin": "dú",
          "order": 1
        },
        {
          "id": "83e852dc-f0d7-4211-8316-3ac22c1f009d",
          "english": "write",
          "chinese": "写",
          "pinyin": "xiě",
          "order": 2
        },
        {
          "id": "b3fee28b-8231-4409-b8cb-8bafee683649",
          "english": "study",
          "chinese": "学习",
          "pinyin": "xuéxí",
          "order": 3
        },
        {
          "id": "79f5be93-98e4-4077-bf6b-d4d19e4ec19b",
          "english": "work",
          "chinese": "工作",
          "pinyin": "gōngzuò",
          "order": 4
        },
        {
          "id": "b14e17ff-d2b5-4f53-9e4d-0223a3fc0707",
          "english": "rest",
          "chinese": "休息",
          "pinyin": "xiūxi",
          "order": 5
        },
        {
          "id": "d2a4a151-a5e7-44e8-b46c-3e0ccc5f2580",
          "english": "play",
          "chinese": "玩",
          "pinyin": "wán",
          "order": 6
        },
        {
          "id": "b085098f-5a80-4811-83da-651556110577",
          "english": "watch TV",
          "chinese": "看电视",
          "pinyin": "kàn diànshì",
          "order": 7
        },
        {
          "id": "504dbdc5-add0-4440-b750-c345255f57be",
          "english": "make phone call",
          "chinese": "打电话",
          "pinyin": "dǎ diànhuà",
          "order": 8
        },
        {
          "id": "195fef5e-ee11-466e-9e02-1144b011ae19",
          "english": "get up",
          "chinese": "起床",
          "pinyin": "qǐchuáng",
          "order": 9
        }
      ]
    },
    {
      "id": "ee8ee91d-c282-4342-beae-1afad03df4a4",
      "name": "HSK 1 15",
      "description": "HSK 1 15 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "10673408-cec7-430c-87dc-33dea2990b59",
          "english": "wash",
          "chinese": "洗",
          "pinyin": "xǐ",
          "order": 0
        },
        {
          "id": "2102500b-cbcd-4210-a32a-f8ece2b79336",
          "english": "cook",
          "chinese": "做饭",
          "pinyin": "zuòfàn",
          "order": 1
        },
        {
          "id": "c164ce84-0c46-486e-9b5e-a600bde77820",
          "english": "drive",
          "chinese": "开车",
          "pinyin": "kāichē",
          "order": 2
        },
        {
          "id": "1ea5c049-4828-4fe8-94bb-b0f3032f09ce",
          "english": "rain",
          "chinese": "下雨",
          "pinyin": "xiàyǔ",
          "order": 3
        },
        {
          "id": "d7d9ce15-1907-47bb-8993-d8cadf102994",
          "english": "snow",
          "chinese": "下雪",
          "pinyin": "xiàxuě",
          "order": 4
        },
        {
          "id": "9ba4c4d4-213c-4da8-b27c-96e747b06409",
          "english": "wind",
          "chinese": "风",
          "pinyin": "fēng",
          "order": 5
        },
        {
          "id": "7e972f9f-619d-4853-9d71-240d002604d7",
          "english": "sun",
          "chinese": "太阳",
          "pinyin": "tàiyáng",
          "order": 6
        },
        {
          "id": "1e5dc059-5972-4485-b1af-79d2d6bced0d",
          "english": "moon",
          "chinese": "月亮",
          "pinyin": "yuèliang",
          "order": 7
        },
        {
          "id": "02313d94-8f14-4eaf-86b2-80ef7c57047c",
          "english": "water",
          "chinese": "水",
          "pinyin": "shuǐ",
          "order": 8
        },
        {
          "id": "474d7caa-d630-4230-9d02-56fd52e5d68d",
          "english": "fire",
          "chinese": "火",
          "pinyin": "huǒ",
          "order": 9
        }
      ]
    },
    {
      "id": "915d6658-dc5d-4b6c-b176-8c05e29abd11",
      "name": "HSK 1 16",
      "description": "HSK 1 16 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "86ecaec7-a63d-4759-accd-9c294b75e80a",
          "english": "rice",
          "chinese": "米饭",
          "pinyin": "mǐfàn",
          "order": 0
        },
        {
          "id": "88a4755c-f3a2-4f14-8b94-19f7d1277634",
          "english": "noodles",
          "chinese": "面条",
          "pinyin": "miàntiáo",
          "order": 1
        },
        {
          "id": "c6b214d9-4b78-476c-893d-7b2f713fa2db",
          "english": "bread",
          "chinese": "面包",
          "pinyin": "miànbāo",
          "order": 2
        },
        {
          "id": "e098545a-5688-45f5-a7d2-602ade321513",
          "english": "meat",
          "chinese": "肉",
          "pinyin": "ròu",
          "order": 3
        },
        {
          "id": "4c5f7855-934a-48d6-845f-1723f33511ba",
          "english": "fish",
          "chinese": "鱼",
          "pinyin": "yú",
          "order": 4
        },
        {
          "id": "0f46b6ef-9a43-49d7-b994-17fbfe3b18ce",
          "english": "egg",
          "chinese": "鸡蛋",
          "pinyin": "jīdàn",
          "order": 5
        },
        {
          "id": "ea52d0b5-7f66-4336-90fd-0e74240c4ed9",
          "english": "vegetable",
          "chinese": "菜",
          "pinyin": "cài",
          "order": 6
        },
        {
          "id": "e1971cdf-35db-4437-870d-de0037e9a3d6",
          "english": "fruit",
          "chinese": "水果",
          "pinyin": "shuǐguǒ",
          "order": 7
        },
        {
          "id": "5a640722-12e1-4ccf-906f-dfc024f2685c",
          "english": "apple",
          "chinese": "苹果",
          "pinyin": "píngguǒ",
          "order": 8
        },
        {
          "id": "438166b5-7d28-4f9d-85ab-b1215cd0e2d4",
          "english": "banana",
          "chinese": "香蕉",
          "pinyin": "xiāngjiāo",
          "order": 9
        }
      ]
    },
    {
      "id": "db67c0a7-8b51-4e72-860f-932ca1376f0c",
      "name": "HSK 1 17",
      "description": "HSK 1 17 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "7f372d61-3afd-4ed0-9b2f-a655f66625f8",
          "english": "tea",
          "chinese": "茶",
          "pinyin": "chá",
          "order": 0
        },
        {
          "id": "23049a41-cff5-4141-b254-2bd8d0d90903",
          "english": "coffee",
          "chinese": "咖啡",
          "pinyin": "kāfēi",
          "order": 1
        },
        {
          "id": "16412d39-dac3-43ce-8aee-c5ee7c60f0ae",
          "english": "milk",
          "chinese": "牛奶",
          "pinyin": "niúnǎi",
          "order": 2
        },
        {
          "id": "fa1546ac-04e0-4b0b-a051-9f26648c9293",
          "english": "juice",
          "chinese": "果汁",
          "pinyin": "guǒzhī",
          "order": 3
        },
        {
          "id": "1baf5e90-0898-488a-a758-5a562e795aa6",
          "english": "beer",
          "chinese": "啤酒",
          "pinyin": "píjiǔ",
          "order": 4
        },
        {
          "id": "ae737fbb-6675-4812-9d4c-0f76a9335c91",
          "english": "money",
          "chinese": "钱",
          "pinyin": "qián",
          "order": 5
        },
        {
          "id": "3941862f-4df2-4989-8a6c-136606e49179",
          "english": "clothes",
          "chinese": "衣服",
          "pinyin": "yīfu",
          "order": 6
        },
        {
          "id": "8e6ea4be-f8ba-4aa7-a84e-078a91d54b2e",
          "english": "shoes",
          "chinese": "鞋",
          "pinyin": "xié",
          "order": 7
        },
        {
          "id": "9f2c322c-0c24-4a85-83f3-ab235a9e7f75",
          "english": "hat",
          "chinese": "帽子",
          "pinyin": "màozi",
          "order": 8
        },
        {
          "id": "7be9537e-8eac-40d9-a18d-30219b401d14",
          "english": "bag",
          "chinese": "包",
          "pinyin": "bāo",
          "order": 9
        }
      ]
    },
    {
      "id": "62be5a5a-7318-41c4-b8c1-28fa64aa26e5",
      "name": "HSK 1 18",
      "description": "HSK 1 18 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "51417ed8-55d9-4b50-98e5-3fbc29af9ad5",
          "english": "phone",
          "chinese": "电话",
          "pinyin": "diànhuà",
          "order": 0
        },
        {
          "id": "869cf09e-47c4-46c7-94dd-b248c42f5071",
          "english": "computer",
          "chinese": "电脑",
          "pinyin": "diànnǎo",
          "order": 1
        },
        {
          "id": "e54a8b8e-3d3e-4a01-82fd-089a1ed6a8bb",
          "english": "TV",
          "chinese": "电视",
          "pinyin": "diànshì",
          "order": 2
        },
        {
          "id": "bf5f6e51-10f9-4d20-97fb-4fd4c2c3905b",
          "english": "car",
          "chinese": "汽车",
          "pinyin": "qìchē",
          "order": 3
        },
        {
          "id": "c8c3b339-9262-4303-90d7-c218adb417a8",
          "english": "bus",
          "chinese": "公共汽车",
          "pinyin": "gōnggòng qìchē",
          "order": 4
        },
        {
          "id": "4a35e8c8-dab0-4c26-a870-488bc44c2067",
          "english": "taxi",
          "chinese": "出租车",
          "pinyin": "chūzūchē",
          "order": 5
        },
        {
          "id": "a31bd292-add4-43a0-ab91-d889f2bbece7",
          "english": "train",
          "chinese": "火车",
          "pinyin": "huǒchē",
          "order": 6
        },
        {
          "id": "0009e377-78ec-4129-97af-1cdb33175521",
          "english": "airplane",
          "chinese": "飞机",
          "pinyin": "fēijī",
          "order": 7
        },
        {
          "id": "6af5edba-5e32-4d6a-a460-d393824cf0a2",
          "english": "bicycle",
          "chinese": "自行车",
          "pinyin": "zìxíngchē",
          "order": 8
        },
        {
          "id": "04348e7c-b3da-47f2-bb7d-7e172b8660c7",
          "english": "hotel",
          "chinese": "宾馆",
          "pinyin": "bīnguǎn",
          "order": 9
        }
      ]
    },
    {
      "id": "8fa60595-8980-49fb-9823-ab6e1a348284",
      "name": "HSK 1 19",
      "description": "HSK 1 19 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordcount": 5,
      "words": [
        {
          "id": "bbb0ce66-963a-407e-8091-60582914471d",
          "english": "bank",
          "chinese": "银行",
          "pinyin": "yínháng",
          "order": 0
        },
        {
          "id": "a9af2bd3-e084-4e5a-999f-cdc299b34f25",
          "english": "post office",
          "chinese": "邮局",
          "pinyin": "yóujú",
          "order": 1
        },
        {
          "id": "001a1797-0e68-465d-a374-122bd4dcae7b",
          "english": "market",
          "chinese": "市场",
          "pinyin": "shìchǎng",
          "order": 2
        },
        {
          "id": "d604f593-97be-41ab-9e9b-3425987100e5",
          "english": "park",
          "chinese": "公园",
          "pinyin": "gōngyuán",
          "order": 3
        },
        {
          "id": "302d0867-bec1-49bf-b22d-eab377080baf",
          "english": "library",
          "chinese": "图书馆",
          "pinyin": "túshūguǎn",
          "order": 4
        }
      ]
    },
    {
      "id": "f9766656-8002-4edd-8f76-333651efb03c",
      "name": "HSK 1 2",
      "description": "HSK 1 2 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "6d2ea2c2-b67c-475d-a569-5595c267e9e8",
          "english": "classmate",
          "chinese": "同学",
          "pinyin": "tóngxué",
          "order": 0
        },
        {
          "id": "ba444063-e621-4511-851f-30cb64645f6b",
          "english": "friend",
          "chinese": "朋友",
          "pinyin": "péngyǒu",
          "order": 1
        },
        {
          "id": "0b6ce67b-a8ee-4f2f-bfbc-034b0ed5e67d",
          "english": "doctor",
          "chinese": "医生",
          "pinyin": "yīshēng",
          "order": 2
        },
        {
          "id": "d7647ba8-f09e-468a-a7fb-ec23459e95a8",
          "english": "sir",
          "chinese": "先生",
          "pinyin": "xiānsheng",
          "order": 3
        },
        {
          "id": "40224996-02a5-4423-9280-b001fb8e5ad4",
          "english": "Miss",
          "chinese": "小姐",
          "pinyin": "xiǎojiě",
          "order": 4
        },
        {
          "id": "4a844250-047a-493f-8a5c-ff11c447273f",
          "english": "person",
          "chinese": "人",
          "pinyin": "rén",
          "order": 5
        },
        {
          "id": "5095cc3b-04a2-4983-9d40-8420832d989f",
          "english": "clothes",
          "chinese": "衣服",
          "pinyin": "yīfu",
          "order": 6
        },
        {
          "id": "72051090-310d-47d9-924c-67ff3fbfd472",
          "english": "water",
          "chinese": "水",
          "pinyin": "shuǐ",
          "order": 7
        },
        {
          "id": "7506d6cc-d3d7-4c0b-af08-408087623b86",
          "english": "dish",
          "chinese": "菜",
          "pinyin": "cài",
          "order": 8
        },
        {
          "id": "56f58067-d639-4282-8997-6d2d1ab019db",
          "english": "rice",
          "chinese": "米饭",
          "pinyin": "mǐfàn",
          "order": 9
        }
      ]
    },
    {
      "id": "16a9e9d4-57ee-45b9-a5a7-427094839a53",
      "name": "HSK 1 3",
      "description": "HSK 1 3 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "0a32b7e4-620a-43f3-922c-4f6370746317",
          "english": "fruit",
          "chinese": "水果",
          "pinyin": "shuǐguǒ",
          "order": 0
        },
        {
          "id": "80c7e69e-a782-4c9a-9989-767277888129",
          "english": "apple",
          "chinese": "苹果",
          "pinyin": "píngguǒ",
          "order": 1
        },
        {
          "id": "ff5cd8c4-1a09-4e88-973c-bfd2e3d957b0",
          "english": "tea",
          "chinese": "茶",
          "pinyin": "chá",
          "order": 2
        },
        {
          "id": "7a64c906-d941-4950-ad57-51043897b52e",
          "english": "cup",
          "chinese": "杯子",
          "pinyin": "bēizi",
          "order": 3
        },
        {
          "id": "70cfd81e-4e96-489e-9475-deb9e53df314",
          "english": "money",
          "chinese": "钱",
          "pinyin": "qián",
          "order": 4
        },
        {
          "id": "66a66dc7-6ca1-404c-b48e-09447a4eb47e",
          "english": "book",
          "chinese": "书",
          "pinyin": "shū",
          "order": 5
        },
        {
          "id": "a6151cb9-5aee-4ca5-9e05-191909591369",
          "english": "desk",
          "chinese": "桌子",
          "pinyin": "zhuōzi",
          "order": 6
        },
        {
          "id": "ca26a927-b5e9-4bf2-9377-595f4ec73fe4",
          "english": "chair",
          "chinese": "椅子",
          "pinyin": "yǐzi",
          "order": 7
        },
        {
          "id": "88e8b841-5669-4d25-bc22-c86a3f025fc7",
          "english": "cat",
          "chinese": "猫",
          "pinyin": "māo",
          "order": 8
        },
        {
          "id": "0ee1ca80-d951-4bad-b31d-3c8220631ebd",
          "english": "dog",
          "chinese": "狗",
          "pinyin": "gǒu",
          "order": 9
        }
      ]
    },
    {
      "id": "9ca6ecaa-a9bb-457f-88e3-c04edf1845ec",
      "name": "HSK 1 4",
      "description": "HSK 1 4 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "fb3908d9-26aa-4816-b15a-60b5fec2cf79",
          "english": "thing",
          "chinese": "东西",
          "pinyin": "dōngxi",
          "order": 0
        },
        {
          "id": "f7c0fa0e-e2cc-4f74-a51c-7ef835c5e2e8",
          "english": "name",
          "chinese": "名字",
          "pinyin": "míngzi",
          "order": 1
        },
        {
          "id": "64167b6b-a09b-4728-ad5c-323d693d87e5",
          "english": "today",
          "chinese": "今天",
          "pinyin": "jīntiān",
          "order": 2
        },
        {
          "id": "8f9e6d14-27d0-4a4b-88a3-7f0860bf50e7",
          "english": "tomorrow",
          "chinese": "明天",
          "pinyin": "míngtiān",
          "order": 3
        },
        {
          "id": "86cb295b-f91c-49ac-ab0f-0ed7939ae93a",
          "english": "yesterday",
          "chinese": "昨天",
          "pinyin": "zuótiān",
          "order": 4
        },
        {
          "id": "1a9cede3-c4be-43ef-9b11-dc5b00ce518f",
          "english": "morning",
          "chinese": "上午",
          "pinyin": "shàngwǔ",
          "order": 5
        },
        {
          "id": "954ab1e8-3704-430c-bf94-c260aeccc351",
          "english": "noon",
          "chinese": "中午",
          "pinyin": "zhōngwǔ",
          "order": 6
        },
        {
          "id": "e512386b-bc9a-4555-bf0d-2148edba51c5",
          "english": "afternoon",
          "chinese": "下午",
          "pinyin": "xiàwǔ",
          "order": 7
        },
        {
          "id": "bf6ab661-ff87-4f91-84b3-d72a8b290d69",
          "english": "year",
          "chinese": "年",
          "pinyin": "nián",
          "order": 8
        },
        {
          "id": "a7d77771-4d45-446a-acc2-2ffbef296663",
          "english": "month",
          "chinese": "月",
          "pinyin": "yuè",
          "order": 9
        }
      ]
    },
    {
      "id": "e04a555d-1d50-49f9-a1e2-05d3affc4355",
      "name": "HSK 1 5",
      "description": "HSK 1 5 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "1b14f4f4-7ed9-449c-86f7-18010087b0a5",
          "english": "date",
          "chinese": "号",
          "pinyin": "hào",
          "order": 0
        },
        {
          "id": "0439634e-d61a-429b-9100-19bc9350bc06",
          "english": "week",
          "chinese": "星期",
          "pinyin": "xīngqī",
          "order": 1
        },
        {
          "id": "a8a35cf0-c913-4d07-a7f0-a59ce6bb946b",
          "english": "o'clock",
          "chinese": "点",
          "pinyin": "diǎn",
          "order": 2
        },
        {
          "id": "be8f7224-1863-4c61-b128-e76b16ee6f79",
          "english": "minute",
          "chinese": "分钟",
          "pinyin": "fēnzhōng",
          "order": 3
        },
        {
          "id": "0120d649-af21-4f9a-be22-504202b1ccff",
          "english": "now",
          "chinese": "现在",
          "pinyin": "xiànzài",
          "order": 4
        },
        {
          "id": "be313662-bd23-41d5-9067-cb70bee6aa39",
          "english": "time",
          "chinese": "时候",
          "pinyin": "shíhou",
          "order": 5
        },
        {
          "id": "e79c3ea2-6a2a-4ff9-ad1e-1d5c9a1d05a3",
          "english": "home",
          "chinese": "家",
          "pinyin": "jiā",
          "order": 6
        },
        {
          "id": "aa8f09d9-5957-4036-9ba8-b96948985ca6",
          "english": "school",
          "chinese": "学校",
          "pinyin": "xuéxiào",
          "order": 7
        },
        {
          "id": "736baae4-64bc-4ce5-aaa2-6af20ceae033",
          "english": "eat",
          "chinese": "吃",
          "pinyin": "chī",
          "order": 8
        },
        {
          "id": "5f1cf743-3db0-404d-84c2-1a69efb9bdd3",
          "english": "drink",
          "chinese": "喝",
          "pinyin": "hē",
          "order": 9
        }
      ]
    },
    {
      "id": "b5b15364-60e4-4661-b6a9-8deb32dad599",
      "name": "HSK 1 6",
      "description": "HSK 1 6 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "7a4108f4-0842-4102-864f-c3cdaff0374b",
          "english": "sleep",
          "chinese": "睡觉",
          "pinyin": "shuìjiào",
          "order": 0
        },
        {
          "id": "ee9b257d-f169-4aa0-89c8-fdd467209ec5",
          "english": "work",
          "chinese": "工作",
          "pinyin": "gōngzuò",
          "order": 1
        },
        {
          "id": "09acb582-bfe2-461a-9dc2-2ed928c85564",
          "english": "study",
          "chinese": "学习",
          "pinyin": "xuéxí",
          "order": 2
        },
        {
          "id": "e42f35ac-be8b-4c60-8640-41f7fb463baa",
          "english": "go",
          "chinese": "去",
          "pinyin": "qù",
          "order": 3
        },
        {
          "id": "bd7ecfb2-2e81-420d-9224-b6896a0b3834",
          "english": "come",
          "chinese": "来",
          "pinyin": "lái",
          "order": 4
        },
        {
          "id": "9de9b306-ce8f-4fe6-bfbc-e2655e363176",
          "english": "return",
          "chinese": "回",
          "pinyin": "huí",
          "order": 5
        },
        {
          "id": "3f1801ba-34b5-4b19-94bc-1c3a0ad2c12f",
          "english": "buy",
          "chinese": "买",
          "pinyin": "mǎi",
          "order": 6
        },
        {
          "id": "493617e5-5411-4e95-b0d5-f072b6e18f00",
          "english": "sit",
          "chinese": "坐",
          "pinyin": "zuò",
          "order": 7
        },
        {
          "id": "deb71559-5a8d-4f58-801c-1d44369ab90d",
          "english": "live",
          "chinese": "住",
          "pinyin": "zhù",
          "order": 8
        },
        {
          "id": "d0d12f7e-76fa-4513-97de-c19cde79d91b",
          "english": "open",
          "chinese": "开",
          "pinyin": "kāi",
          "order": 9
        }
      ]
    },
    {
      "id": "7d197cb8-4340-4740-852b-e19fe7ffca6c",
      "name": "HSK 1 7",
      "description": "HSK 1 7 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "fe05fa7a-ac5f-4d4c-939d-ba7b6ca880a4",
          "english": "big",
          "chinese": "大",
          "pinyin": "dà",
          "order": 0
        },
        {
          "id": "7c17769d-1a2c-4ed6-b7e6-abc72ac63465",
          "english": "small",
          "chinese": "小",
          "pinyin": "xiǎo",
          "order": 1
        },
        {
          "id": "50e71d7e-a03b-419c-aeb0-3dcf25656d95",
          "english": "good",
          "chinese": "好",
          "pinyin": "hǎo",
          "order": 2
        },
        {
          "id": "3d491af9-23fe-4c8a-a29a-2db25f4327f9",
          "english": "bad",
          "chinese": "坏",
          "pinyin": "huài",
          "order": 3
        },
        {
          "id": "39ca3e40-cd33-4f58-8c2f-10992519ab86",
          "english": "many",
          "chinese": "多",
          "pinyin": "duō",
          "order": 4
        },
        {
          "id": "2f15f862-e77b-48a2-90e0-a437e1b4e937",
          "english": "few",
          "chinese": "少",
          "pinyin": "shǎo",
          "order": 5
        },
        {
          "id": "f7c57a3a-441d-47da-80b6-47db7619a626",
          "english": "old",
          "chinese": "老",
          "pinyin": "lǎo",
          "order": 6
        },
        {
          "id": "a6a20bda-9f8c-4e2b-85c6-cc0381e5bdaf",
          "english": "new",
          "chinese": "新",
          "pinyin": "xīn",
          "order": 7
        },
        {
          "id": "bb956ffb-94c8-476a-ab82-b41de43853ad",
          "english": "cold",
          "chinese": "冷",
          "pinyin": "lěng",
          "order": 8
        },
        {
          "id": "4012285d-c783-4ba0-a910-ce201c31e91c",
          "english": "hot",
          "chinese": "热",
          "pinyin": "rè",
          "order": 9
        }
      ]
    },
    {
      "id": "926862e7-01ba-4652-b0a1-e5314dca5c7e",
      "name": "HSK 1 9",
      "description": "HSK 1 9 - Authentic HSK Level 1 vocabulary",
      "hsklevel": 1,
      "wordCount": 10,
      "words": [
        {
          "id": "275c8d89-3c92-4e50-9d00-84ccb014d6db",
          "english": "tall",
          "chinese": "高",
          "pinyin": "gāo",
          "order": 0
        },
        {
          "id": "760464ee-fdb7-48e3-bec1-c8322130c997",
          "english": "short",
          "chinese": "矮",
          "pinyin": "ǎi",
          "order": 1
        },
        {
          "id": "7b98da00-0110-4f4b-9771-5f40f875135b",
          "english": "long",
          "chinese": "长",
          "pinyin": "cháng",
          "order": 2
        },
        {
          "id": "c1597231-f7bc-434c-a692-5365df6da6c0",
          "english": "short (length)",
          "chinese": "短",
          "pinyin": "duǎn",
          "order": 3
        },
        {
          "id": "9e39e375-8666-4735-8642-65855e4559ad",
          "english": "fast",
          "chinese": "快",
          "pinyin": "kuài",
          "order": 4
        },
        {
          "id": "13b350ae-5e32-4071-b0e9-49f4bb4791ab",
          "english": "slow",
          "chinese": "慢",
          "pinyin": "màn",
          "order": 5
        },
        {
          "id": "53263b68-7666-4643-be01-b26d568c0520",
          "english": "expensive",
          "chinese": "贵",
          "pinyin": "guì",
          "order": 6
        },
        {
          "id": "3453654e-67d2-4b6d-aae5-3c45cd3029cc",
          "english": "cheap",
          "chinese": "便宜",
          "pinyin": "piányí",
          "order": 7
        },
        {
          "id": "404faafe-896e-4a8d-9cde-6e2667c869b6",
          "english": "tired",
          "chinese": "累",
          "pinyin": "lèi",
          "order": 8
        },
        {
          "id": "24e72e4d-e580-4f93-a3f9-90ff0e9417e6",
          "english": "happy",
          "chinese": "高兴",
          "pinyin": "gāoxìng",
          "order": 9
        }
      ]
    },
    {
      "id": "0f43cf12-7815-4e29-b849-64e0bc9a22ba",
      "name": "HSK 2 1",
      "description": "HSK 2 1 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "c26b472c-cec3-45f3-879d-ef488467ad72",
          "english": "you (polite)",
          "chinese": "您",
          "pinyin": "nín",
          "order": 0
        },
        {
          "id": "1bff643a-49f7-4fa2-909b-e46ec4d33277",
          "english": "everyone",
          "chinese": "大家",
          "pinyin": "dàjiā",
          "order": 1
        },
        {
          "id": "b7bc4f75-c57d-4e0d-b113-444eedada2a6",
          "english": "husband",
          "chinese": "丈夫",
          "pinyin": "zhàngfu",
          "order": 2
        },
        {
          "id": "250e3354-dff7-4d1e-b865-0eb1ff8e2eb5",
          "english": "wife",
          "chinese": "妻子",
          "pinyin": "qīzi",
          "order": 3
        },
        {
          "id": "69a08051-29de-4a54-a1a7-54627b1af903",
          "english": "child",
          "chinese": "孩子",
          "pinyin": "háizi",
          "order": 4
        },
        {
          "id": "3094ce0d-d600-47c1-a898-84fb4ac00f3a",
          "english": "man",
          "chinese": "男人",
          "pinyin": "nánrén",
          "order": 5
        },
        {
          "id": "7ccb7c38-9edc-4d55-8fb2-659c6c504aee",
          "english": "woman",
          "chinese": "女人",
          "pinyin": "nǚrén",
          "order": 6
        },
        {
          "id": "e2bfc910-0972-4751-bab9-b21fed4b190a",
          "english": "waiter",
          "chinese": "服务员",
          "pinyin": "fúwùyuán",
          "order": 7
        },
        {
          "id": "d0a70d27-2952-4cd3-afad-b3c70e3a0188",
          "english": "fish",
          "chinese": "鱼",
          "pinyin": "yú",
          "order": 8
        },
        {
          "id": "9e25f724-a95f-40f2-846e-8540310d6d6f",
          "english": "mutton",
          "chinese": "羊肉",
          "pinyin": "yángròu",
          "order": 9
        }
      ]
    },
    {
      "id": "52f1fc22-1340-4f3f-8671-210366adc80b",
      "name": "HSK 2 12",
      "description": "HSK 2 12 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "e752a5e8-89ae-489c-9979-a47101cfc11d",
          "english": "sport",
          "chinese": "运动",
          "pinyin": "yùndòng",
          "order": 0
        },
        {
          "id": "749e3010-6a4b-4f96-928b-6d9dd0d0aa7c",
          "english": "swim",
          "chinese": "游泳",
          "pinyin": "yóuyǒng",
          "order": 1
        },
        {
          "id": "bf107ab9-7b98-40c8-94c4-a27617795c8a",
          "english": "dance",
          "chinese": "跳舞",
          "pinyin": "tiàowǔ",
          "order": 2
        },
        {
          "id": "e5671c88-8f66-4ccf-8841-b0e16ebfab8c",
          "english": "sing",
          "chinese": "唱歌",
          "pinyin": "chànggē",
          "order": 3
        },
        {
          "id": "7bf72ded-14f1-4b4f-9fdb-72c63b5797a7",
          "english": "music",
          "chinese": "音乐",
          "pinyin": "yīnyuè",
          "order": 4
        },
        {
          "id": "bd96c1b7-62df-45dd-a2f7-ec521636c445",
          "english": "movie",
          "chinese": "电影",
          "pinyin": "diànyǐng",
          "order": 5
        },
        {
          "id": "8b7d8542-8e7f-4d4b-8e72-f158896638e7",
          "english": "book",
          "chinese": "书",
          "pinyin": "shū",
          "order": 6
        },
        {
          "id": "cb66381c-7dcf-410d-bc4e-93122fab051f",
          "english": "newspaper",
          "chinese": "报纸",
          "pinyin": "bàozhǐ",
          "order": 7
        },
        {
          "id": "7f0ab4bf-09a6-48a6-b87c-3dd48c1780fe",
          "english": "magazine",
          "chinese": "杂志",
          "pinyin": "zázhì",
          "order": 8
        },
        {
          "id": "09c188e0-b6ac-435d-a9d1-fc4175ed918c",
          "english": "story",
          "chinese": "故事",
          "pinyin": "gùshì",
          "order": 9
        }
      ]
    },
    {
      "id": "4064f947-1e57-4c65-99b2-36787c1c62f6",
      "name": "HSK 2 13",
      "description": "HSK 2 13 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "2ca34fa9-cf1f-4c96-870e-eb85e1856767",
          "english": "problem",
          "chinese": "问题",
          "pinyin": "wèntí",
          "order": 0
        },
        {
          "id": "6f564667-0dda-4112-8a4e-5c24d3044297",
          "english": "answer",
          "chinese": "答案",
          "pinyin": "dá'àn",
          "order": 1
        },
        {
          "id": "a0ab6838-dcbe-43ff-8065-8f9b2dc9eff9",
          "english": "question",
          "chinese": "问",
          "pinyin": "wèn",
          "order": 2
        },
        {
          "id": "08846b56-f1fb-4c30-9fee-a6cba5575215",
          "english": "reason",
          "chinese": "原因",
          "pinyin": "yuányīn",
          "order": 3
        },
        {
          "id": "1f0b1a34-98ca-4c04-aae6-9e3aa4db0d9b",
          "english": "method",
          "chinese": "方法",
          "pinyin": "fāngfǎ",
          "order": 4
        },
        {
          "id": "f68a3fbf-7855-40b4-85c2-8492e210a5d1",
          "english": "idea",
          "chinese": "主意",
          "pinyin": "zhǔyì",
          "order": 5
        },
        {
          "id": "ddad21df-f8b2-4032-923c-1ac92abed0ea",
          "english": "plan",
          "chinese": "计划",
          "pinyin": "jìhuà",
          "order": 6
        },
        {
          "id": "8f887ce2-e8c1-4e48-9c61-dd664908e128",
          "english": "hope",
          "chinese": "希望",
          "pinyin": "xīwàng",
          "order": 7
        },
        {
          "id": "66d62cd7-bfdb-415f-88ba-cc6a1ea75083",
          "english": "worry",
          "chinese": "担心",
          "pinyin": "dānxīn",
          "order": 8
        },
        {
          "id": "3e671cd1-bfb9-4acb-9709-ff12d779ce6d",
          "english": "angry",
          "chinese": "生气",
          "pinyin": "shēngqì",
          "order": 9
        }
      ]
    },
    {
      "id": "25972c90-8998-408d-a747-60c18ac02513",
      "name": "HSK 2 14",
      "description": "HSK 2 14 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "03ddfe1a-d906-4ed0-81fa-2c56dbd1c814",
          "english": "sad",
          "chinese": "伤心",
          "pinyin": "shāngxīn",
          "order": 0
        },
        {
          "id": "907dcd4a-7566-4fdf-892b-cce10241b5fb",
          "english": "excited",
          "chinese": "兴奋",
          "pinyin": "xīngfèn",
          "order": 1
        },
        {
          "id": "2a1c7ecf-ca47-45e2-8cf8-ae5c8c2225e1",
          "english": "nervous",
          "chinese": "紧张",
          "pinyin": "jǐnzhāng",
          "order": 2
        },
        {
          "id": "26996732-8b9f-4732-90dc-63664a2eea5b",
          "english": "comfortable",
          "chinese": "舒服",
          "pinyin": "shūfu",
          "order": 3
        },
        {
          "id": "16c9fc62-52e8-430b-90c1-bb1c9ca24618",
          "english": "dangerous",
          "chinese": "危险",
          "pinyin": "wēixiǎn",
          "order": 4
        },
        {
          "id": "6b16b258-c214-478f-b1db-3194f7cd3bdc",
          "english": "safe",
          "chinese": "安全",
          "pinyin": "ānquán",
          "order": 5
        },
        {
          "id": "eb9b5bd5-c333-40cb-a8de-97feea6b66e4",
          "english": "healthy",
          "chinese": "健康",
          "pinyin": "jiànkāng",
          "order": 6
        },
        {
          "id": "9eb1a8f5-da9c-4ad4-9656-d7a073f3c97b",
          "english": "sick",
          "chinese": "生病",
          "pinyin": "shēngbìng",
          "order": 7
        },
        {
          "id": "352a64b1-3cdc-442e-9fa5-79eeffa5e59c",
          "english": "medicine",
          "chinese": "药",
          "pinyin": "yào",
          "order": 8
        },
        {
          "id": "b7e32116-f3e3-4a18-b38c-9c37d8a6caec",
          "english": "doctor",
          "chinese": "医生",
          "pinyin": "yīshēng",
          "order": 9
        }
      ]
    },
    {
      "id": "74716016-cafd-467c-a055-e6828b65214d",
      "name": "HSK 2 15",
      "description": "HSK 2 15 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "114aae1f-263a-4a3f-bc36-1c8e0eef0870",
          "english": "nurse",
          "chinese": "护士",
          "pinyin": "hùshi",
          "order": 0
        },
        {
          "id": "6cd6da6a-b6a0-48ad-833a-73b85864cfcd",
          "english": "policeman",
          "chinese": "警察",
          "pinyin": "jǐngchá",
          "order": 1
        },
        {
          "id": "b00c2053-1f54-4137-a12a-c4bed5d9bac9",
          "english": "driver",
          "chinese": "司机",
          "pinyin": "sījī",
          "order": 2
        },
        {
          "id": "a4c95658-55f4-4486-8e0f-a8013aa14d75",
          "english": "cook",
          "chinese": "厨师",
          "pinyin": "chúshī",
          "order": 3
        },
        {
          "id": "406afd30-6ecd-420f-9817-3077ebce44b4",
          "english": "waiter",
          "chinese": "服务员",
          "pinyin": "fúwùyuán",
          "order": 4
        },
        {
          "id": "915d0b94-7a53-44ea-bc24-a872dcfb2ecf",
          "english": "manager",
          "chinese": "经理",
          "pinyin": "jīnglǐ",
          "order": 5
        },
        {
          "id": "f91c96cd-932c-4d05-af7e-ebd3ebc05093",
          "english": "boss",
          "chinese": "老板",
          "pinyin": "lǎobǎn",
          "order": 6
        },
        {
          "id": "2fd553e7-378b-43cb-86d6-25fe6dea967f",
          "english": "colleague",
          "chinese": "同事",
          "pinyin": "tóngshì",
          "order": 7
        },
        {
          "id": "f58539ed-2da0-4c64-8cf8-b04cc11ac9f3",
          "english": "customer",
          "chinese": "客户",
          "pinyin": "kèhù",
          "order": 8
        },
        {
          "id": "8b9d8aa3-7b12-4dbc-94c4-737dbc85e683",
          "english": "neighbor",
          "chinese": "邻居",
          "pinyin": "línjū",
          "order": 9
        }
      ]
    },
    {
      "id": "7e7ee110-4ad0-47f0-ba8d-85fc288252e9",
      "name": "HSK 2 16",
      "description": "HSK 2 16 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "02f4e1a9-97b7-4b2f-b18b-751223c7e295",
          "english": "friend",
          "chinese": "朋友",
          "pinyin": "péngyǒu",
          "order": 0
        },
        {
          "id": "6ff4eb72-a61c-45be-aab0-15dcc6aa281e",
          "english": "relative",
          "chinese": "亲戚",
          "pinyin": "qīnqi",
          "order": 1
        },
        {
          "id": "b21f31b6-7c6b-494b-aa70-1f8beb42ed61",
          "english": "father",
          "chinese": "爸爸",
          "pinyin": "bàba",
          "order": 2
        },
        {
          "id": "3cab2813-a322-4b71-99b7-b06dd0b7fca1",
          "english": "mother",
          "chinese": "妈妈",
          "pinyin": "māma",
          "order": 3
        },
        {
          "id": "9694695a-a35d-4525-9d05-5d8bf7493b6f",
          "english": "son",
          "chinese": "儿子",
          "pinyin": "érzi",
          "order": 4
        },
        {
          "id": "f3e084ba-4a22-47ba-a981-43dfd5aafbae",
          "english": "daughter",
          "chinese": "女儿",
          "pinyin": "nǚ'ér",
          "order": 5
        },
        {
          "id": "109f816a-a662-4e30-98d1-8f41693c6b2b",
          "english": "husband",
          "chinese": "丈夫",
          "pinyin": "zhàngfu",
          "order": 6
        },
        {
          "id": "ecce65b8-8898-41bf-92e7-3178123562e3",
          "english": "wife",
          "chinese": "妻子",
          "pinyin": "qīzi",
          "order": 7
        },
        {
          "id": "b5ba1432-8a27-4030-a003-042de1e704db",
          "english": "grandfather",
          "chinese": "爷爷",
          "pinyin": "yéye",
          "order": 8
        },
        {
          "id": "9efe1c14-48a2-4867-a8a6-45bf7311398d",
          "english": "grandmother",
          "chinese": "奶奶",
          "pinyin": "nǎinai",
          "order": 9
        }
      ]
    },
    {
      "id": "059a9507-c6b6-4465-a57a-e589d7359034",
      "name": "HSK 2 17",
      "description": "HSK 2 17 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "b2101da4-a4e5-4674-af02-6e262e762ec7",
          "english": "uncle",
          "chinese": "叔叔",
          "pinyin": "shūshu",
          "order": 0
        },
        {
          "id": "4ab81032-adba-4a11-8b14-7b4609941d18",
          "english": "aunt",
          "chinese": "阿姨",
          "pinyin": "āyí",
          "order": 1
        },
        {
          "id": "1f7ccfc9-9803-4fef-918c-ffc609e97cf7",
          "english": "brother",
          "chinese": "兄弟",
          "pinyin": "xiōngdì",
          "order": 2
        },
        {
          "id": "7baaa8c8-803b-4fc8-be33-0943c86b18ab",
          "english": "sister",
          "chinese": "姐妹",
          "pinyin": "jiěmèi",
          "order": 3
        },
        {
          "id": "fbe8eb81-518b-4bd4-9a4a-8d2e7d7d73b8",
          "english": "child",
          "chinese": "孩子",
          "pinyin": "háizi",
          "order": 4
        },
        {
          "id": "c629bda0-7360-433e-8816-3ea3bf186299",
          "english": "baby",
          "chinese": "婴儿",
          "pinyin": "yīng'ér",
          "order": 5
        },
        {
          "id": "1de1b8c1-f7ba-4533-bd9a-e61301a2f9c5",
          "english": "boy",
          "chinese": "男孩",
          "pinyin": "nánhái",
          "order": 6
        },
        {
          "id": "8083ce32-af09-47ce-8005-7fc55b5937fd",
          "english": "girl",
          "chinese": "女孩",
          "pinyin": "nǚhái",
          "order": 7
        },
        {
          "id": "9f1b779c-597d-4f54-8885-678f39edfee9",
          "english": "man",
          "chinese": "男人",
          "pinyin": "nánrén",
          "order": 8
        },
        {
          "id": "3441eed4-3b96-45f7-9802-bd8c5f4b1fa1",
          "english": "woman",
          "chinese": "女人",
          "pinyin": "nǚrén",
          "order": 9
        }
      ]
    },
    {
      "id": "cb953fa8-869c-45ab-80b1-568b93d3d1a5",
      "name": "HSK 2 18",
      "description": "HSK 2 18 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "f82d25f0-e183-486b-a160-bfe472879bc1",
          "english": "people",
          "chinese": "人们",
          "pinyin": "rénmen",
          "order": 0
        },
        {
          "id": "0a46af58-5296-4ead-8bca-ea826403d810",
          "english": "person",
          "chinese": "人",
          "pinyin": "rén",
          "order": 1
        },
        {
          "id": "0d44e45d-2d85-4122-9a2b-cb41b5516daf",
          "english": "name",
          "chinese": "名字",
          "pinyin": "míngzi",
          "order": 2
        },
        {
          "id": "9d8d7696-3967-4425-bc08-37729c8a3669",
          "english": "age",
          "chinese": "年龄",
          "pinyin": "niánlíng",
          "order": 3
        },
        {
          "id": "7555d80c-b225-410f-a5df-7c99cce5c9c6",
          "english": "address",
          "chinese": "地址",
          "pinyin": "dìzhǐ",
          "order": 4
        },
        {
          "id": "ec2b957f-bb54-40fe-8665-f143afae088d",
          "english": "phone number",
          "chinese": "电话号码",
          "pinyin": "diànhuà hàomǎ",
          "order": 5
        },
        {
          "id": "5c5339e4-ee98-4ffe-bafb-bffcee8c913e",
          "english": "email",
          "chinese": "电子邮件",
          "pinyin": "diànzǐ yóujiàn",
          "order": 6
        },
        {
          "id": "1df814ce-c0c4-4c4e-869b-7d39fac42780",
          "english": "passport",
          "chinese": "护照",
          "pinyin": "hùzhào",
          "order": 7
        },
        {
          "id": "8ea15e64-ff7a-41f6-8a0b-7e0597550a10",
          "english": "ticket",
          "chinese": "票",
          "pinyin": "piào",
          "order": 8
        },
        {
          "id": "bb36e1a3-4b60-4ed3-98d7-bb5c4b5b7010",
          "english": "map",
          "chinese": "地图",
          "pinyin": "dìtú",
          "order": 9
        }
      ]
    },
    {
      "id": "72d55e74-e3df-4c82-85de-246b3fa8bdc1",
      "name": "HSK 2 19",
      "description": "HSK 2 19 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordcount": 5,
      "words": [
        {
          "id": "11c3c85e-7fc3-4c3b-b29a-1493ea67574f",
          "english": "key",
          "chinese": "钥匙",
          "pinyin": "yàoshi",
          "order": 0
        },
        {
          "id": "dd3ba6a7-53e0-4716-bd60-cabf0087fe64",
          "english": "door",
          "chinese": "门",
          "pinyin": "mén",
          "order": 1
        },
        {
          "id": "08ff8966-8c2f-4056-a062-5833dbfc9202",
          "english": "window",
          "chinese": "窗户",
          "pinyin": "chuānghu",
          "order": 2
        },
        {
          "id": "11ec4da8-223f-4ff5-a3bd-3adb207adf83",
          "english": "wall",
          "chinese": "墙",
          "pinyin": "qiáng",
          "order": 3
        },
        {
          "id": "d5d28271-1738-4dbb-b802-9b98dedc6f13",
          "english": "floor",
          "chinese": "地板",
          "pinyin": "dìbǎn",
          "order": 4
        }
      ]
    },
    {
      "id": "f5da43ec-0c90-4857-8c15-563b3e5cea17",
      "name": "HSK 2 2",
      "description": "HSK 2 2 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "0614f2d5-c3a5-40a0-bffb-8487ddfdae38",
          "english": "milk",
          "chinese": "牛奶",
          "pinyin": "niúnǎi",
          "order": 0
        },
        {
          "id": "179d3c49-f046-47d8-8dbc-c5281866a426",
          "english": "egg",
          "chinese": "鸡蛋",
          "pinyin": "jīdàn",
          "order": 1
        },
        {
          "id": "568e2fcd-e40a-4d50-acf0-80e11614011a",
          "english": "watermelon",
          "chinese": "西瓜",
          "pinyin": "xīguā",
          "order": 2
        },
        {
          "id": "2f26b4a8-44b8-463f-992c-251fe97e6ca9",
          "english": "coffee",
          "chinese": "咖啡",
          "pinyin": "kāfēi",
          "order": 3
        },
        {
          "id": "a11d3024-5700-4286-85f3-65bb0b137308",
          "english": "noodles",
          "chinese": "面条",
          "pinyin": "miàntiáo",
          "order": 4
        },
        {
          "id": "f410f71d-4dec-4993-8ca9-21a53794c8aa",
          "english": "airplane",
          "chinese": "飞机",
          "pinyin": "fēijī",
          "order": 5
        },
        {
          "id": "1e5ef30c-773a-4ea9-a9b8-e59f6f07d639",
          "english": "train",
          "chinese": "火车",
          "pinyin": "huǒchē",
          "order": 6
        },
        {
          "id": "02534c35-8c14-4dfc-8dad-ab0c6359d10d",
          "english": "bus",
          "chinese": "公共汽车",
          "pinyin": "gōnggòngqìchē",
          "order": 7
        },
        {
          "id": "ef11606d-b5aa-4477-9c01-844cf5138a76",
          "english": "taxi",
          "chinese": "出租车",
          "pinyin": "chūzūchē",
          "order": 8
        },
        {
          "id": "1f64ae4f-7fbb-4859-b1eb-8709067b6363",
          "english": "airport",
          "chinese": "机场",
          "pinyin": "jīchǎng",
          "order": 9
        }
      ]
    },
    {
      "id": "f4786595-65d1-438d-ac14-c69a8e7b2949",
      "name": "HSK 2 3",
      "description": "HSK 2 3 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "ee85fff4-ec2c-4add-a817-6020e225d41c",
          "english": "train station",
          "chinese": "火车站",
          "pinyin": "huǒchēzhàn",
          "order": 0
        },
        {
          "id": "12be95be-e01d-4115-96a6-5dfe505221ed",
          "english": "hotel",
          "chinese": "宾馆",
          "pinyin": "bīngguǎn",
          "order": 1
        },
        {
          "id": "b70ee463-2d22-42f3-aadf-c8e9b582ca36",
          "english": "company",
          "chinese": "公司",
          "pinyin": "gōngsī",
          "order": 2
        },
        {
          "id": "fefc21b8-9edd-40ab-aa59-0a1977751c02",
          "english": "restaurant",
          "chinese": "饭店",
          "pinyin": "fàndiàn",
          "order": 3
        },
        {
          "id": "3dc31183-1ef0-4d12-9218-e4a3898cc9b6",
          "english": "hospital",
          "chinese": "医院",
          "pinyin": "yīyuàn",
          "order": 4
        },
        {
          "id": "f52bf119-1da7-458d-9c8a-7786c7c2ddac",
          "english": "mobile phone",
          "chinese": "手机",
          "pinyin": "shǒujī",
          "order": 5
        },
        {
          "id": "3cb1f76c-47db-4f22-a288-b8c7a17e60ac",
          "english": "computer",
          "chinese": "电脑",
          "pinyin": "diànnǎo",
          "order": 6
        },
        {
          "id": "eaeaeb6c-4bea-4a57-bae8-01cb0bfcff5c",
          "english": "television",
          "chinese": "电视",
          "pinyin": "diànshì",
          "order": 7
        },
        {
          "id": "321d92e4-5f9c-4034-850c-6d54d39b0eef",
          "english": "watch",
          "chinese": "手表",
          "pinyin": "shǒubiǎo",
          "order": 8
        },
        {
          "id": "60a734c1-6e41-4907-859a-21bcfd483ec2",
          "english": "newspaper",
          "chinese": "报纸",
          "pinyin": "bàozhǐ",
          "order": 9
        }
      ]
    },
    {
      "id": "eb241815-fba5-4fce-bbed-aeb3446714d1",
      "name": "HSK 2 4",
      "description": "HSK 2 4 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "5931ffb6-606c-4fd5-a10c-e67cf60ade60",
          "english": "pencil",
          "chinese": "铅笔",
          "pinyin": "qiánbǐ",
          "order": 0
        },
        {
          "id": "c08924db-74ed-4dbc-8eee-55e62f5d40d6",
          "english": "door",
          "chinese": "门",
          "pinyin": "mén",
          "order": 1
        },
        {
          "id": "53171778-2437-4992-a522-81dcced65cd6",
          "english": "eye",
          "chinese": "眼睛",
          "pinyin": "yǎnjīng",
          "order": 2
        },
        {
          "id": "22e3291e-0426-4928-b862-aef027664799",
          "english": "body",
          "chinese": "身体",
          "pinyin": "shēntǐ",
          "order": 3
        },
        {
          "id": "15f00ef2-bc20-48fb-8ddd-dd57b721e743",
          "english": "medicine",
          "chinese": "药",
          "pinyin": "yào",
          "order": 4
        },
        {
          "id": "5cf2e9f1-de62-4087-9471-1d1ba3a5b239",
          "english": "sell",
          "chinese": "卖",
          "pinyin": "mài",
          "order": 5
        },
        {
          "id": "c4675351-4428-4189-8474-8c7a9f7e5ec4",
          "english": "ask",
          "chinese": "问",
          "pinyin": "wèn",
          "order": 6
        },
        {
          "id": "be37f035-8c23-40f4-99b7-15c107c82e12",
          "english": "walk",
          "chinese": "走",
          "pinyin": "zǒu",
          "order": 7
        },
        {
          "id": "bba6bd13-0488-4c83-af71-eb66ced71c4b",
          "english": "run",
          "chinese": "跑步",
          "pinyin": "pǎobù",
          "order": 8
        },
        {
          "id": "8be44247-a090-4f22-b2d7-65d6feea402d",
          "english": "arrive",
          "chinese": "到",
          "pinyin": "dào",
          "order": 9
        }
      ]
    },
    {
      "id": "fa52cc75-5932-4398-96df-d9250a35ebfd",
      "name": "HSK 2 5",
      "description": "HSK 2 5 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "99d32989-928a-4e0d-b153-4606667d1a3e",
          "english": "wear",
          "chinese": "穿",
          "pinyin": "chuān",
          "order": 0
        },
        {
          "id": "85b77771-cd4f-49a9-ab0e-24a43a666da9",
          "english": "wash",
          "chinese": "洗",
          "pinyin": "xǐ",
          "order": 1
        },
        {
          "id": "0a04c080-f224-470a-9dee-623d9026ee1d",
          "english": "give",
          "chinese": "给",
          "pinyin": "gěi",
          "order": 2
        },
        {
          "id": "c695dd40-c498-4ccc-8bad-e66f2f7a74ad",
          "english": "find",
          "chinese": "找",
          "pinyin": "zhǎo",
          "order": 3
        },
        {
          "id": "71f5587b-ba5f-498b-acc9-26eee89f0224",
          "english": "understand",
          "chinese": "懂",
          "pinyin": "dǒng",
          "order": 4
        },
        {
          "id": "eb9ad8f5-38d4-445e-9b76-44445f855fb1",
          "english": "smile",
          "chinese": "笑",
          "pinyin": "xiào",
          "order": 5
        },
        {
          "id": "97c273a9-5602-4852-9280-5c08fdfa5fed",
          "english": "tell",
          "chinese": "告诉",
          "pinyin": "gàosù",
          "order": 6
        },
        {
          "id": "3e83942e-9426-44ec-83b0-8c2e753466d3",
          "english": "prepare",
          "chinese": "准备",
          "pinyin": "zhǔnbèi",
          "order": 7
        },
        {
          "id": "166b116b-fafe-40fa-aba8-a992ea75e567",
          "english": "begin",
          "chinese": "开始",
          "pinyin": "kāishǐ",
          "order": 8
        },
        {
          "id": "275143ed-32fc-4ae2-8b7c-01a51f6d7674",
          "english": "introduce",
          "chinese": "介绍",
          "pinyin": "jièshào",
          "order": 9
        }
      ]
    },
    {
      "id": "e0db89ba-16d0-4c40-a05b-c8db0a739138",
      "name": "HSK 2 6",
      "description": "HSK 2 6 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "ed8f3b48-9f5e-4656-b05d-8db98b6734a3",
          "english": "help",
          "chinese": "帮助",
          "pinyin": "bāngzhù",
          "order": 0
        },
        {
          "id": "137a091c-aed7-4617-8ade-31d1ab7b369a",
          "english": "play",
          "chinese": "玩",
          "pinyin": "wán",
          "order": 1
        },
        {
          "id": "7deea387-5f84-47ef-8149-bf48234a0b5d",
          "english": "wait",
          "chinese": "等",
          "pinyin": "děng",
          "order": 2
        },
        {
          "id": "376e344f-8a9d-4646-b786-02410e6c6eff",
          "english": "get up",
          "chinese": "起床",
          "pinyin": "qǐchuáng",
          "order": 3
        },
        {
          "id": "1bcf3287-130a-4301-aecd-15645a6e5bf4",
          "english": "sing",
          "chinese": "唱歌",
          "pinyin": "chànggē",
          "order": 4
        },
        {
          "id": "909f0f46-34ee-48e5-8505-904ec8c70c4a",
          "english": "dance",
          "chinese": "跳舞",
          "pinyin": "tiàowǔ",
          "order": 5
        },
        {
          "id": "b23bc908-a0f5-4480-b014-d9188433c1e3",
          "english": "travel",
          "chinese": "旅游",
          "pinyin": "lǚyóu",
          "order": 6
        },
        {
          "id": "1f229c45-fcc3-4815-ae17-b405d58307d3",
          "english": "go to work",
          "chinese": "上班",
          "pinyin": "shàngbān",
          "order": 7
        },
        {
          "id": "56853ced-82de-4119-b807-1484c408ca3e",
          "english": "get sick",
          "chinese": "生病",
          "pinyin": "shēngbìng",
          "order": 8
        },
        {
          "id": "100e6b0b-3b4a-4ec6-9068-ef84bbae27a7",
          "english": "rest",
          "chinese": "休息",
          "pinyin": "xiūxi",
          "order": 9
        }
      ]
    },
    {
      "id": "38708a70-f155-4575-b03b-bf0bc6744b74",
      "name": "HSK 2 7",
      "description": "HSK 2 7 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "e7b370b0-5e3c-46ac-9d2f-7317fe5ccaba",
          "english": "introduce",
          "chinese": "介绍",
          "pinyin": "jièshào",
          "order": 0
        },
        {
          "id": "a88a8f49-5438-4088-adaf-4d66eb240a4d",
          "english": "prepare",
          "chinese": "准备",
          "pinyin": "zhǔnbèi",
          "order": 1
        },
        {
          "id": "484534ca-c448-4824-bcae-08bb39f69fdf",
          "english": "begin",
          "chinese": "开始",
          "pinyin": "kāishǐ",
          "order": 2
        },
        {
          "id": "da435478-b13c-4c69-81e4-9c750d9afff3",
          "english": "finish",
          "chinese": "完成",
          "pinyin": "wánchéng",
          "order": 3
        },
        {
          "id": "1be204de-df22-44e7-8d86-d92f65144a3a",
          "english": "understand",
          "chinese": "明白",
          "pinyin": "míngbái",
          "order": 4
        },
        {
          "id": "251bb501-4591-4776-8872-f677cb0daefa",
          "english": "remember",
          "chinese": "记得",
          "pinyin": "jìde",
          "order": 5
        },
        {
          "id": "0094daf1-48e9-4924-b1e1-785878a0c55a",
          "english": "forget",
          "chinese": "忘记",
          "pinyin": "wàngjì",
          "order": 6
        },
        {
          "id": "155eac01-c776-4196-981e-ba785044013c",
          "english": "help",
          "chinese": "帮助",
          "pinyin": "bāngzhù",
          "order": 7
        },
        {
          "id": "b7a6fb4f-c70a-45f0-9fbe-a0a9dab5efd2",
          "english": "thank",
          "chinese": "谢谢",
          "pinyin": "xièxiè",
          "order": 8
        },
        {
          "id": "362e44c2-2fcc-4abd-9a5f-274dcbfea587",
          "english": "welcome",
          "chinese": "欢迎",
          "pinyin": "huānyíng",
          "order": 9
        }
      ]
    },
    {
      "id": "7f00d023-74e4-4c99-9779-08cfe74d9308",
      "name": "HSK 2 9",
      "description": "HSK 2 9 - Authentic HSK Level 2 vocabulary",
      "hsklevel": 2,
      "wordCount": 10,
      "words": [
        {
          "id": "e736362e-5d59-4495-9bb9-4d6ee7a87672",
          "english": "sorry",
          "chinese": "对不起",
          "pinyin": "duìbùqǐ",
          "order": 0
        },
        {
          "id": "2e281a58-4a42-49d1-9c79-57bc7df412fc",
          "english": "excuse me",
          "chinese": "不好意思",
          "pinyin": "bùhǎoyìsi",
          "order": 1
        },
        {
          "id": "f9654f42-c7dc-4db6-a1a2-ac3b98bd7386",
          "english": "birthday",
          "chinese": "生日",
          "pinyin": "shēngrì",
          "order": 2
        },
        {
          "id": "316d7cce-5ade-4668-948a-da7b5de597ec",
          "english": "gift",
          "chinese": "礼物",
          "pinyin": "lǐwù",
          "order": 3
        },
        {
          "id": "3a188f49-27c6-48f1-9387-de7aba293f25",
          "english": "party",
          "chinese": "聚会",
          "pinyin": "jùhuì",
          "order": 4
        },
        {
          "id": "133ce1bd-4d15-4508-bfe8-07240f1d34d0",
          "english": "meet",
          "chinese": "见面",
          "pinyin": "jiànmiàn",
          "order": 5
        },
        {
          "id": "51d2de7e-fd63-4d84-8d20-7e99ebbb82dc",
          "english": "visit",
          "chinese": "拜访",
          "pinyin": "bàifǎng",
          "order": 6
        },
        {
          "id": "1cd16b4b-beff-4832-bc35-69bd48a0f3eb",
          "english": "travel",
          "chinese": "旅游",
          "pinyin": "lǚyóu",
          "order": 7
        },
        {
          "id": "3bac122f-4be2-474c-b0cb-131caa0934b9",
          "english": "vacation",
          "chinese": "假期",
          "pinyin": "jiàqī",
          "order": 8
        },
        {
          "id": "a5de255a-4949-4c2f-a2b4-1b811ac9838a",
          "english": "exercise",
          "chinese": "锻炼",
          "pinyin": "duànliàn",
          "order": 9
        }
      ]
    },
    {
      "id": "9c0aa4d1-eaff-4d47-ae72-2f578e9b4eba",
      "name": "HSK 3 1",
      "description": "HSK 3 1 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "f430c83e-620a-4a06-b800-5f9fac799df9",
          "english": "aunt",
          "chinese": "阿姨",
          "pinyin": "āyí",
          "order": 0
        },
        {
          "id": "9ff97141-4256-4ad2-830a-95b71c46e03d",
          "english": "short (height)",
          "chinese": "矮",
          "pinyin": "ǎi",
          "order": 1
        },
        {
          "id": "788db523-057b-4bda-a487-f7e44d6e1156",
          "english": "hobby",
          "chinese": "爱好",
          "pinyin": "àihào",
          "order": 2
        },
        {
          "id": "be0b2c45-6977-46f3-813f-0917d6a8f534",
          "english": "quiet",
          "chinese": "安静",
          "pinyin": "ānjìng",
          "order": 3
        },
        {
          "id": "b6deffdd-b7b9-433e-b873-6e87273e92f2",
          "english": "class",
          "chinese": "班",
          "pinyin": "bān",
          "order": 4
        },
        {
          "id": "664c03fe-6aad-459d-9434-00ad74a5ac2d",
          "english": "move",
          "chinese": "搬",
          "pinyin": "bān",
          "order": 5
        },
        {
          "id": "68b6ee86-93b4-41e6-82d8-7ae8556997c4",
          "english": "half",
          "chinese": "半",
          "pinyin": "bàn",
          "order": 6
        },
        {
          "id": "4a471bd9-1ad9-48f1-a1ea-322eefd42d32",
          "english": "way, method",
          "chinese": "办法",
          "pinyin": "bànfǎ",
          "order": 7
        },
        {
          "id": "99b924fb-4e61-4590-9188-1788ed3d6619",
          "english": "office",
          "chinese": "办公室",
          "pinyin": "bàngōngshì",
          "order": 8
        },
        {
          "id": "21ec8037-00fa-4750-a60b-cfe717bfac2f",
          "english": "help",
          "chinese": "帮忙",
          "pinyin": "bāngmáng",
          "order": 9
        }
      ]
    },
    {
      "id": "891be8ac-34ed-4341-b998-b082d501356c",
      "name": "HSK 3 10",
      "description": "HSK 3 10 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "bddb5a83-afa7-4f7e-9116-2cd2222b52c4",
          "english": "flower",
          "chinese": "花",
          "pinyin": "huā",
          "order": 0
        },
        {
          "id": "5b5243c0-b74a-4dd5-908c-b50c8741bcef",
          "english": "painting",
          "chinese": "画",
          "pinyin": "huà",
          "order": 1
        },
        {
          "id": "e51eea5c-e456-4aef-b9eb-25dafd38db87",
          "english": "bad",
          "chinese": "坏",
          "pinyin": "huài",
          "order": 2
        },
        {
          "id": "c329af62-e71a-489e-ae45-77e9c064f5b2",
          "english": "welcome",
          "chinese": "欢迎",
          "pinyin": "huānyíng",
          "order": 3
        },
        {
          "id": "e9ef9b63-6bb9-4cb3-b2ea-f395f536b5ef",
          "english": "return",
          "chinese": "还",
          "pinyin": "huán",
          "order": 4
        },
        {
          "id": "d9a01572-6772-4c4c-95a6-190cf68af487",
          "english": "environment",
          "chinese": "环境",
          "pinyin": "huánjìng",
          "order": 5
        },
        {
          "id": "8e5a31f6-9dfd-4ee1-a366-4c74a0a3ff32",
          "english": "change",
          "chinese": "换",
          "pinyin": "huàn",
          "order": 6
        },
        {
          "id": "ecc66ee5-841c-494a-9546-f0d5e737d150",
          "english": "Yellow River",
          "chinese": "黄河",
          "pinyin": "huánghé",
          "order": 7
        },
        {
          "id": "97827df1-7a46-4299-902c-971a0841b81a",
          "english": "answer",
          "chinese": "回答",
          "pinyin": "huídá",
          "order": 8
        },
        {
          "id": "dd13fb70-a9d8-475d-9372-c4d0bfc07bc4",
          "english": "meeting",
          "chinese": "会议",
          "pinyin": "huìyì",
          "order": 9
        }
      ]
    },
    {
      "id": "bc4c3556-79a3-417f-a19a-fb314a7975e1",
      "name": "HSK 3 10",
      "description": "HSK 3 10 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "d45ba19c-b99d-495f-8d2f-a8e7b24f213c",
          "english": "ability",
          "chinese": "能力",
          "pinyin": "nénglì",
          "order": 0
        },
        {
          "id": "33897f67-5746-4dde-8037-23164ae403a8",
          "english": "accept",
          "chinese": "接受",
          "pinyin": "jiēshòu",
          "order": 1
        },
        {
          "id": "e35df372-7cdd-4424-8bcf-17021eee555f",
          "english": "accident",
          "chinese": "事故",
          "pinyin": "shìgù",
          "order": 2
        },
        {
          "id": "827037f1-8dcf-44a8-9b3b-40a362c3db95",
          "english": "activity",
          "chinese": "词3",
          "pinyin": "cí3",
          "order": 3
        },
        {
          "id": "8e7d8663-0906-4a39-8ebd-074b2175b217",
          "english": "actually",
          "chinese": "词4",
          "pinyin": "cí4",
          "order": 4
        },
        {
          "id": "59a139bb-5314-4523-bac3-af0bec5964fc",
          "english": "administration",
          "chinese": "词5",
          "pinyin": "cí5",
          "order": 5
        },
        {
          "id": "39b37803-caf1-4e12-b567-172d3e4f618d",
          "english": "admit",
          "chinese": "词6",
          "pinyin": "cí6",
          "order": 6
        },
        {
          "id": "a299ab82-b2f3-4473-83bc-73fec2b040d1",
          "english": "adult",
          "chinese": "词7",
          "pinyin": "cí7",
          "order": 7
        },
        {
          "id": "ae13f414-d1cf-41f1-86bd-ff3f6b1c24df",
          "english": "advice",
          "chinese": "词8",
          "pinyin": "cí8",
          "order": 8
        },
        {
          "id": "afa3ad57-cd26-40f3-b14e-408d80f2fec7",
          "english": "affect",
          "chinese": "词9",
          "pinyin": "cí9",
          "order": 9
        }
      ]
    },
    {
      "id": "ff3a6aff-a284-4ab1-ae5d-4ea20eaaf9f8",
      "name": "HSK 3 11",
      "description": "HSK 3 11 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "0ed578a1-0e0b-4a03-8cea-4517266394cc",
          "english": "afternoon",
          "chinese": "词10",
          "pinyin": "cí10",
          "order": 0
        },
        {
          "id": "e5c128b5-226e-4d4f-964c-9d9a63a5d751",
          "english": "agency",
          "chinese": "词11",
          "pinyin": "cí11",
          "order": 1
        },
        {
          "id": "9a73cc81-5596-45d4-9514-f09cd04601ca",
          "english": "agent",
          "chinese": "词12",
          "pinyin": "cí12",
          "order": 2
        },
        {
          "id": "af4b7fa8-be74-4c41-bee9-32e9eb4cfc87",
          "english": "agreement",
          "chinese": "词13",
          "pinyin": "cí13",
          "order": 3
        },
        {
          "id": "15836861-b071-41d1-bf77-9406d224a231",
          "english": "ahead",
          "chinese": "词14",
          "pinyin": "cí14",
          "order": 4
        },
        {
          "id": "c8184579-b84e-44de-835b-4f1ca776c10a",
          "english": "album",
          "chinese": "词15",
          "pinyin": "cí15",
          "order": 5
        },
        {
          "id": "fa3f74d1-8ea8-4bca-bb71-eb2447f508c6",
          "english": "alive",
          "chinese": "词16",
          "pinyin": "cí16",
          "order": 6
        },
        {
          "id": "f2e0b193-aefa-4a33-90de-b7c10b29937a",
          "english": "allow",
          "chinese": "词17",
          "pinyin": "cí17",
          "order": 7
        },
        {
          "id": "7f76c629-0056-49f8-940f-11bdeb7a9f59",
          "english": "almost",
          "chinese": "词18",
          "pinyin": "cí18",
          "order": 8
        },
        {
          "id": "3ccfc1d3-f28e-4204-a802-38f052cb3fa5",
          "english": "alone",
          "chinese": "词19",
          "pinyin": "cí19",
          "order": 9
        }
      ]
    },
    {
      "id": "2a69e4bc-b667-4a6a-8004-951a6827a22f",
      "name": "HSK 3 11",
      "description": "HSK 3 11 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "5bc6b363-0c19-48d6-85e7-b5b54dd2c1c0",
          "english": "or",
          "chinese": "或者",
          "pinyin": "huòzhě",
          "order": 0
        },
        {
          "id": "69d72ea1-c4d1-4e2e-8ff7-3f1a04012f53",
          "english": "almost",
          "chinese": "几乎",
          "pinyin": "jīhū",
          "order": 1
        },
        {
          "id": "03a424f0-f71b-4111-99d5-4853c780be3b",
          "english": "opportunity",
          "chinese": "机会",
          "pinyin": "jīhuì",
          "order": 2
        },
        {
          "id": "b84da64e-5bfb-4d84-a808-0000a5054b88",
          "english": "extremely",
          "chinese": "极",
          "pinyin": "jí",
          "order": 3
        },
        {
          "id": "73aa7f8f-c8e8-4b0f-a7eb-bfa3dcb2d39f",
          "english": "remember",
          "chinese": "记得",
          "pinyin": "jìde",
          "order": 4
        },
        {
          "id": "b30c7cd3-0c7e-47c9-932d-3b5506b1e345",
          "english": "season",
          "chinese": "季节",
          "pinyin": "jìjié",
          "order": 5
        },
        {
          "id": "4ccfa474-9d96-4a92-aedc-ab369fbf2dd1",
          "english": "check",
          "chinese": "检查",
          "pinyin": "jiǎnchá",
          "order": 6
        },
        {
          "id": "58ec52c8-3a23-407d-b429-292fe51652c8",
          "english": "simple",
          "chinese": "简单",
          "pinyin": "jiǎndān",
          "order": 7
        },
        {
          "id": "07bc4569-545b-4531-a01e-4ca51cf7ce15",
          "english": "healthy",
          "chinese": "健康",
          "pinyin": "jiànkāng",
          "order": 8
        },
        {
          "id": "6021f4ec-8509-474f-a7c1-731826416766",
          "english": "meet",
          "chinese": "见面",
          "pinyin": "jiànmiàn",
          "order": 9
        }
      ]
    },
    {
      "id": "4a91e8b6-0ade-4d5a-8497-f4eaf214459a",
      "name": "HSK 3 12",
      "description": "HSK 3 12 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "7bc40186-c7c2-4bf8-af22-26a9bff725ec",
          "english": "speak",
          "chinese": "讲",
          "pinyin": "jiǎng",
          "order": 0
        },
        {
          "id": "faf40a5d-5b25-4581-b6ae-99f3a14afaac",
          "english": "teach",
          "chinese": "教",
          "pinyin": "jiāo",
          "order": 1
        },
        {
          "id": "6db5bcc4-ee9c-4fc1-a558-a4db6cf4866b",
          "english": "corner",
          "chinese": "角",
          "pinyin": "jiǎo",
          "order": 2
        },
        {
          "id": "2b410ef7-b6da-4e6b-8c69-fcb907016365",
          "english": "foot",
          "chinese": "脚",
          "pinyin": "jiǎo",
          "order": 3
        },
        {
          "id": "257e7708-e092-42a2-b340-abce2417770e",
          "english": "pick up",
          "chinese": "接",
          "pinyin": "jiē",
          "order": 4
        },
        {
          "id": "a4bdb92f-c725-4d4a-8077-6dc275aca5f9",
          "english": "street",
          "chinese": "街道",
          "pinyin": "jiēdào",
          "order": 5
        },
        {
          "id": "a6759cc9-3035-49fc-b52a-6df36c3819af",
          "english": "marry",
          "chinese": "结婚",
          "pinyin": "jiéhūn",
          "order": 6
        },
        {
          "id": "c1bb96d1-d233-4f8c-abdc-f32e4f4951ea",
          "english": "end",
          "chinese": "结束",
          "pinyin": "jiéshù",
          "order": 7
        },
        {
          "id": "0847c545-c043-4bb6-b2d9-e931530dd53c",
          "english": "program",
          "chinese": "节目",
          "pinyin": "jiémù",
          "order": 8
        },
        {
          "id": "73ef1848-6d7a-48b1-a825-90c43a0ae3a1",
          "english": "festival",
          "chinese": "节日",
          "pinyin": "jiérì",
          "order": 9
        }
      ]
    },
    {
      "id": "0686760e-6ca5-4813-ae66-fab873122e57",
      "name": "HSK 3 12",
      "description": "HSK 3 12 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "8cf8aca0-0cdf-41c6-b50c-44e70ac4a8a0",
          "english": "already",
          "chinese": "词20",
          "pinyin": "cí20",
          "order": 0
        },
        {
          "id": "842693e1-0d20-4981-8bf7-0382fcb26bf4",
          "english": "although",
          "chinese": "词21",
          "pinyin": "cí21",
          "order": 1
        },
        {
          "id": "f7b2cb88-0d20-4eeb-9f12-085d7dba4ebd",
          "english": "always",
          "chinese": "词22",
          "pinyin": "cí22",
          "order": 2
        },
        {
          "id": "9363bceb-eec4-444f-a331-76e0c53c6f88",
          "english": "amazing",
          "chinese": "词23",
          "pinyin": "cí23",
          "order": 3
        },
        {
          "id": "6104fa2b-2a8d-4afb-9570-af25c59ac9bb",
          "english": "amount",
          "chinese": "词24",
          "pinyin": "cí24",
          "order": 4
        },
        {
          "id": "8e791b62-b6c1-4012-8a50-57ef9128acdf",
          "english": "analysis",
          "chinese": "词25",
          "pinyin": "cí25",
          "order": 5
        },
        {
          "id": "aabb7401-63d3-4b8b-b41d-20dae3006236",
          "english": "analyze",
          "chinese": "词26",
          "pinyin": "cí26",
          "order": 6
        },
        {
          "id": "ff516c09-1cd7-4736-863e-800962904859",
          "english": "ancient",
          "chinese": "词27",
          "pinyin": "cí27",
          "order": 7
        },
        {
          "id": "0a00a232-7092-490a-9125-130e364efa25",
          "english": "anger",
          "chinese": "词28",
          "pinyin": "cí28",
          "order": 8
        },
        {
          "id": "3db70cea-4852-4b7c-8061-bfe6437360bb",
          "english": "angle",
          "chinese": "词29",
          "pinyin": "cí29",
          "order": 9
        }
      ]
    },
    {
      "id": "fb0a858b-7f88-43ac-b9cd-339b0bd72d2d",
      "name": "HSK 3 13",
      "description": "HSK 3 13 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "a4e69ed8-62e7-416e-9781-b965f676d20b",
          "english": "animal",
          "chinese": "词30",
          "pinyin": "cí30",
          "order": 0
        },
        {
          "id": "73fee0d9-70e2-4d35-95b2-44596af71e2c",
          "english": "announce",
          "chinese": "词31",
          "pinyin": "cí31",
          "order": 1
        },
        {
          "id": "26f1661b-e430-48fc-a4e0-94d62706078a",
          "english": "annual",
          "chinese": "词32",
          "pinyin": "cí32",
          "order": 2
        },
        {
          "id": "8202a3ea-b4ed-4431-b85e-ac427f1ad3a1",
          "english": "another",
          "chinese": "词33",
          "pinyin": "cí33",
          "order": 3
        },
        {
          "id": "665bb839-061b-4427-86bb-151c16c8d83f",
          "english": "answer",
          "chinese": "词34",
          "pinyin": "cí34",
          "order": 4
        },
        {
          "id": "d82c3336-bb5c-4b59-825f-32b667dca6f3",
          "english": "anxiety",
          "chinese": "词35",
          "pinyin": "cí35",
          "order": 5
        },
        {
          "id": "bce6fbb0-9023-488a-a201-14e1d06b4869",
          "english": "anybody",
          "chinese": "词36",
          "pinyin": "cí36",
          "order": 6
        },
        {
          "id": "cde71931-e072-48dd-9db7-c22eff150c52",
          "english": "anymore",
          "chinese": "词37",
          "pinyin": "cí37",
          "order": 7
        },
        {
          "id": "b223bd3c-f6e9-4b7d-b6a5-be0603a06b2d",
          "english": "anyone",
          "chinese": "词38",
          "pinyin": "cí38",
          "order": 8
        },
        {
          "id": "f2fd4e99-36eb-4680-85f2-e34d05527298",
          "english": "anything",
          "chinese": "词39",
          "pinyin": "cí39",
          "order": 9
        }
      ]
    },
    {
      "id": "afa7c8f5-63f6-4e12-b2bf-db278778f903",
      "name": "HSK 3 13",
      "description": "HSK 3 13 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "de82785e-63e8-4c9e-9383-f9e46295c92d",
          "english": "solve",
          "chinese": "解决",
          "pinyin": "jiějué",
          "order": 0
        },
        {
          "id": "e6587f95-c034-4716-ac04-5dadfe853714",
          "english": "borrow",
          "chinese": "借",
          "pinyin": "jiè",
          "order": 1
        },
        {
          "id": "a3a264c6-9edf-43bb-94f9-ab0cb533b5e1",
          "english": "often",
          "chinese": "经常",
          "pinyin": "jīngcháng",
          "order": 2
        },
        {
          "id": "12012509-29ba-4e67-b401-37285671f994",
          "english": "pass through",
          "chinese": "经过",
          "pinyin": "jīngguò",
          "order": 3
        },
        {
          "id": "15a757f2-c08a-4592-b65a-b258be4fe738",
          "english": "manager",
          "chinese": "经理",
          "pinyin": "jīnglǐ",
          "order": 4
        },
        {
          "id": "1a0a5aa1-a130-4d8c-995d-b7f172ec74fe",
          "english": "long (time)",
          "chinese": "久",
          "pinyin": "jiǔ",
          "order": 5
        },
        {
          "id": "dbe69b6f-e3da-4e7c-858d-24bc620a989b",
          "english": "old (things)",
          "chinese": "旧",
          "pinyin": "jiù",
          "order": 6
        },
        {
          "id": "45fd3928-da5a-446d-8f01-d641a54e52c8",
          "english": "sentence",
          "chinese": "句子",
          "pinyin": "jùzi",
          "order": 7
        },
        {
          "id": "3b6701be-3fb4-4cf0-8af1-f01fd96af9fd",
          "english": "decide",
          "chinese": "决定",
          "pinyin": "juédìng",
          "order": 8
        },
        {
          "id": "4485bec9-9a34-430e-9dd5-0310a77a4bea",
          "english": "thirsty",
          "chinese": "渴",
          "pinyin": "kě",
          "order": 9
        }
      ]
    },
    {
      "id": "8e860235-77b0-4ed9-9758-e2a841a3c2df",
      "name": "HSK 3 14",
      "description": "HSK 3 14 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "c9d3a5bf-ef43-439a-b479-40e0de751621",
          "english": "anywhere",
          "chinese": "词40",
          "pinyin": "cí40",
          "order": 0
        },
        {
          "id": "99c3f520-9dfd-4fc2-be90-edb7e6c0c54f",
          "english": "apartment",
          "chinese": "词41",
          "pinyin": "cí41",
          "order": 1
        },
        {
          "id": "9abca3ae-de0e-488a-89da-34f22c605be3",
          "english": "apparent",
          "chinese": "词42",
          "pinyin": "cí42",
          "order": 2
        },
        {
          "id": "a945420f-1727-4c8f-8ba4-a5766c41aa78",
          "english": "appear",
          "chinese": "词43",
          "pinyin": "cí43",
          "order": 3
        },
        {
          "id": "b67353a3-b94e-4e17-8df7-6044e1172d55",
          "english": "application",
          "chinese": "词44",
          "pinyin": "cí44",
          "order": 4
        },
        {
          "id": "605c385f-40f8-4cbf-888f-93342afecabe",
          "english": "apply",
          "chinese": "词45",
          "pinyin": "cí45",
          "order": 5
        },
        {
          "id": "2d4e9eab-03e6-4c49-bd37-79eeb32c3b47",
          "english": "approach",
          "chinese": "词46",
          "pinyin": "cí46",
          "order": 6
        },
        {
          "id": "00e3fa79-6320-492c-a90a-b9f177c88e7c",
          "english": "appropriate",
          "chinese": "词47",
          "pinyin": "cí47",
          "order": 7
        },
        {
          "id": "02f4ce46-28d7-424a-9458-ed8d1dc5d642",
          "english": "approval",
          "chinese": "词48",
          "pinyin": "cí48",
          "order": 8
        },
        {
          "id": "e7277eed-0ef7-4f45-b2e2-0b0268c4a1d8",
          "english": "approve",
          "chinese": "词49",
          "pinyin": "cí49",
          "order": 9
        }
      ]
    },
    {
      "id": "726c91f4-a605-463b-98fd-ff7238512d03",
      "name": "HSK 3 14",
      "description": "HSK 3 14 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "e88e8209-3a3a-4f8b-9f1f-e39941cdb64a",
          "english": "lovely",
          "chinese": "可爱",
          "pinyin": "kě'ài",
          "order": 0
        },
        {
          "id": "a412be19-1d7d-4d41-a4af-95ae32673402",
          "english": "quarter (time)",
          "chinese": "刻",
          "pinyin": "kè",
          "order": 1
        },
        {
          "id": "a1bf6fa0-7d43-4335-b88b-ba971927dbe5",
          "english": "guest",
          "chinese": "客人",
          "pinyin": "kèrén",
          "order": 2
        },
        {
          "id": "10effd8b-6f06-408e-b1d4-74a5cd4b486e",
          "english": "air conditioner",
          "chinese": "空调",
          "pinyin": "kōngtiáo",
          "order": 3
        },
        {
          "id": "0d392164-e69a-4d1b-8163-9c9215123b79",
          "english": "mouth",
          "chinese": "口",
          "pinyin": "kǒu",
          "order": 4
        },
        {
          "id": "2c7d06c9-9e71-4c3f-b0ae-964c83c03660",
          "english": "cry",
          "chinese": "哭",
          "pinyin": "kū",
          "order": 5
        },
        {
          "id": "55dbcf5f-10e5-4e31-9624-c3f4d06e1685",
          "english": "pants",
          "chinese": "裤子",
          "pinyin": "kùzi",
          "order": 6
        },
        {
          "id": "9bbfd510-0fe6-4da9-9975-c0d5b3085704",
          "english": "chopsticks",
          "chinese": "筷子",
          "pinyin": "kuàizi",
          "order": 7
        },
        {
          "id": "5a0b572e-4a8d-41a2-b015-8542eeeb46ad",
          "english": "blue",
          "chinese": "蓝",
          "pinyin": "lán",
          "order": 8
        },
        {
          "id": "d26ff99b-c89a-4f19-a54a-63c5662c0da3",
          "english": "old (person)",
          "chinese": "老",
          "pinyin": "lǎo",
          "order": 9
        }
      ]
    },
    {
      "id": "8524a50a-529e-4601-8cef-e26d6dc8c018",
      "name": "HSK 3 15",
      "description": "HSK 3 15 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "3adcaa23-bbec-46ef-9be2-d8ba8e6a0d93",
          "english": "leave",
          "chinese": "离开",
          "pinyin": "líkāi",
          "order": 0
        },
        {
          "id": "e56bf63d-4a2e-4937-b27b-af1c11243537",
          "english": "gift",
          "chinese": "礼物",
          "pinyin": "lǐwù",
          "order": 1
        },
        {
          "id": "5a87695c-6417-472c-b478-7301ff738171",
          "english": "history",
          "chinese": "历史",
          "pinyin": "lìshǐ",
          "order": 2
        },
        {
          "id": "43192924-fb1c-4681-8a0c-0b3df79551f6",
          "english": "face",
          "chinese": "脸",
          "pinyin": "liǎn",
          "order": 3
        },
        {
          "id": "43c38cb5-6de1-47e9-9244-31e26adc5ead",
          "english": "chat",
          "chinese": "聊天",
          "pinyin": "liáotiān",
          "order": 4
        },
        {
          "id": "1fa57cf9-40a4-4095-a35d-09fdc76d7d27",
          "english": "practice",
          "chinese": "练习",
          "pinyin": "liànxí",
          "order": 5
        },
        {
          "id": "e68591a8-9d39-44ea-b273-8fd72d0f6dee",
          "english": "understand",
          "chinese": "了解",
          "pinyin": "liǎojiě",
          "order": 6
        },
        {
          "id": "5c534af8-4493-4ed4-9db6-6ae4b532f6dd",
          "english": "neighbor",
          "chinese": "邻居",
          "pinyin": "línjū",
          "order": 7
        },
        {
          "id": "0954aa9c-c5d1-4651-862a-63e317c04ae2",
          "english": "study abroad",
          "chinese": "留学",
          "pinyin": "liúxué",
          "order": 8
        },
        {
          "id": "d03e674a-ce2d-4953-b91f-97d99edbfdde",
          "english": "building",
          "chinese": "楼",
          "pinyin": "lóu",
          "order": 9
        }
      ]
    },
    {
      "id": "a1a9caee-ee1a-471f-a376-64a57f1eca55",
      "name": "HSK 3 15",
      "description": "HSK 3 15 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "cc1d6eed-5ed9-455c-b406-e280118a8f66",
          "english": "approximately",
          "chinese": "词50",
          "pinyin": "cí50",
          "order": 0
        },
        {
          "id": "04bdf033-3030-4409-869f-494c0d5bc13e",
          "english": "area",
          "chinese": "词51",
          "pinyin": "cí51",
          "order": 1
        },
        {
          "id": "b66feb26-6016-4a90-b1c9-ff560c134de5",
          "english": "argue",
          "chinese": "词52",
          "pinyin": "cí52",
          "order": 2
        },
        {
          "id": "8cb4f6e5-6aba-4322-a783-ffd02c28802f",
          "english": "argument",
          "chinese": "词53",
          "pinyin": "cí53",
          "order": 3
        },
        {
          "id": "c58a77a8-cd8a-4fe8-a49c-2af05438193d",
          "english": "arise",
          "chinese": "词54",
          "pinyin": "cí54",
          "order": 4
        },
        {
          "id": "80dbe08c-606a-4ff5-bfa3-28f710b72bf3",
          "english": "around",
          "chinese": "词55",
          "pinyin": "cí55",
          "order": 5
        },
        {
          "id": "219b52d3-0cdb-4d8c-90fb-61ce92f6ceb5",
          "english": "arrange",
          "chinese": "词56",
          "pinyin": "cí56",
          "order": 6
        },
        {
          "id": "08579fe2-319d-4ce1-90a8-42a5c541ba39",
          "english": "arrangement",
          "chinese": "词57",
          "pinyin": "cí57",
          "order": 7
        },
        {
          "id": "e4277704-f96c-4d93-89dd-4cd859c7a277",
          "english": "article",
          "chinese": "词58",
          "pinyin": "cí58",
          "order": 8
        },
        {
          "id": "ee67f477-fe1a-4e71-a2f6-59ba9aad82cc",
          "english": "artist",
          "chinese": "词59",
          "pinyin": "cí59",
          "order": 9
        }
      ]
    },
    {
      "id": "861e2a42-24b0-4fed-9611-2bceae6d0edc",
      "name": "HSK 3 16",
      "description": "HSK 3 16 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "f75c821d-6860-4284-8801-f72a81bc1eba",
          "english": "green",
          "chinese": "绿",
          "pinyin": "lǜ",
          "order": 0
        },
        {
          "id": "80511dff-7d05-457b-a34b-3fad46200879",
          "english": "horse",
          "chinese": "马",
          "pinyin": "mǎ",
          "order": 1
        },
        {
          "id": "082bee23-c3d3-47e7-ac2b-a6a7b5294d01",
          "english": "immediately",
          "chinese": "马上",
          "pinyin": "mǎshàng",
          "order": 2
        },
        {
          "id": "12ebd1fb-5fc6-43ea-ad16-d0cb52101c9d",
          "english": "satisfied",
          "chinese": "满意",
          "pinyin": "mǎnyì",
          "order": 3
        },
        {
          "id": "fce714a3-4ae2-400e-a0e1-31170747688e",
          "english": "hat",
          "chinese": "帽子",
          "pinyin": "màozi",
          "order": 4
        },
        {
          "id": "e93a26f2-4cff-4b18-997c-f8a0691dc8c7",
          "english": "meter",
          "chinese": "米",
          "pinyin": "mǐ",
          "order": 5
        },
        {
          "id": "ec733ce6-1439-45d3-a160-7b61a4eae44d",
          "english": "bread",
          "chinese": "面包",
          "pinyin": "miànbāo",
          "order": 6
        },
        {
          "id": "d93da183-2511-4455-a1d4-6242fefddd5b",
          "english": "understand",
          "chinese": "明白",
          "pinyin": "míngbai",
          "order": 7
        },
        {
          "id": "7f6f8d19-f405-4d14-9183-019ef1df6431",
          "english": "take",
          "chinese": "拿",
          "pinyin": "ná",
          "order": 8
        },
        {
          "id": "0f9714cd-a307-4c1a-810c-c728d5836813",
          "english": "grandma",
          "chinese": "奶奶",
          "pinyin": "nǎinai",
          "order": 9
        }
      ]
    },
    {
      "id": "a05ff21a-c3fe-4eb0-875f-78f3e3ee2f9f",
      "name": "HSK 3 16",
      "description": "HSK 3 16 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "b665335d-68ac-4af7-900e-87fcf67fd0f3",
          "english": "assume",
          "chinese": "词60",
          "pinyin": "cí60",
          "order": 0
        },
        {
          "id": "d68791f0-d649-4cdf-a0a3-70cb8731082f",
          "english": "assumption",
          "chinese": "词61",
          "pinyin": "cí61",
          "order": 1
        },
        {
          "id": "1060079c-8a2e-4cd9-8d0a-1e512e70719c",
          "english": "attack",
          "chinese": "词62",
          "pinyin": "cí62",
          "order": 2
        },
        {
          "id": "fe475b89-feed-40bb-8441-dd1e8de3e880",
          "english": "attempt",
          "chinese": "词63",
          "pinyin": "cí63",
          "order": 3
        },
        {
          "id": "a6976e1b-44f7-40e3-8f3e-3c209bc606e3",
          "english": "attend",
          "chinese": "词64",
          "pinyin": "cí64",
          "order": 4
        },
        {
          "id": "ab380191-b057-468b-856a-2affac30b15d",
          "english": "attention",
          "chinese": "词65",
          "pinyin": "cí65",
          "order": 5
        },
        {
          "id": "edb28cfd-84f1-49c0-9971-81e78c86a50e",
          "english": "attitude",
          "chinese": "词66",
          "pinyin": "cí66",
          "order": 6
        },
        {
          "id": "8f5e4250-d4fe-4901-bb55-c9f3f7b900be",
          "english": "attract",
          "chinese": "词67",
          "pinyin": "cí67",
          "order": 7
        },
        {
          "id": "2f2a2dca-b031-4e96-9d46-f06849dc6881",
          "english": "attractive",
          "chinese": "词68",
          "pinyin": "cí68",
          "order": 8
        },
        {
          "id": "33ff5a88-2d6c-4dd7-83f4-fb63fc640e0f",
          "english": "audience",
          "chinese": "词69",
          "pinyin": "cí69",
          "order": 9
        }
      ]
    },
    {
      "id": "daab331d-3037-4110-a5ba-a361a051747b",
      "name": "HSK 3 17",
      "description": "HSK 3 17 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "086d267e-8453-4158-a545-fa10783c5fc0",
          "english": "south",
          "chinese": "南",
          "pinyin": "nán",
          "order": 0
        },
        {
          "id": "9cf50198-7149-42ca-a38d-ad163f8f5a3e",
          "english": "difficult",
          "chinese": "难",
          "pinyin": "nán",
          "order": 1
        },
        {
          "id": "5e83cbaf-4e8f-4e81-a05e-ab4d931342d6",
          "english": "sad",
          "chinese": "难过",
          "pinyin": "nánguò",
          "order": 2
        },
        {
          "id": "1a5115b3-b184-4971-8de5-0de05341a3fb",
          "english": "grade",
          "chinese": "年级",
          "pinyin": "niánjí",
          "order": 3
        },
        {
          "id": "309134f9-10ec-4b13-ae61-4581ef2a48a8",
          "english": "young",
          "chinese": "年轻",
          "pinyin": "niánqīng",
          "order": 4
        },
        {
          "id": "7de70bba-0378-4b62-bbd7-0e1b4b9fdaf7",
          "english": "bird",
          "chinese": "鸟",
          "pinyin": "niǎo",
          "order": 5
        },
        {
          "id": "9b1000e3-263f-46b2-8163-fe6037775175",
          "english": "try hard",
          "chinese": "努力",
          "pinyin": "nǔlì",
          "order": 6
        },
        {
          "id": "ed65f05e-3678-442a-8f5f-980a3facb74d",
          "english": "climb mountain",
          "chinese": "爬山",
          "pinyin": "páshān",
          "order": 7
        },
        {
          "id": "c8fcd055-b8fd-4ec0-9e51-1633ad2e733f",
          "english": "plate",
          "chinese": "盘子",
          "pinyin": "pánzi",
          "order": 8
        },
        {
          "id": "22f2b4fc-4857-4cc7-9ac8-6ebc00209df9",
          "english": "fat",
          "chinese": "胖",
          "pinyin": "pàng",
          "order": 9
        }
      ]
    },
    {
      "id": "77d059a1-77b6-4690-9448-ef20d432424d",
      "name": "HSK 3 17",
      "description": "HSK 3 17 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "086a5c8c-cfa8-4f8e-9aef-8051d062b3a5",
          "english": "author",
          "chinese": "词70",
          "pinyin": "cí70",
          "order": 0
        },
        {
          "id": "2a6e622c-8317-4dd1-93e7-336662d25e9d",
          "english": "authority",
          "chinese": "词71",
          "pinyin": "cí71",
          "order": 1
        },
        {
          "id": "0b76a376-4e11-476a-afc1-ddad5b00a63d",
          "english": "available",
          "chinese": "词72",
          "pinyin": "cí72",
          "order": 2
        },
        {
          "id": "6b77e911-66c3-42a0-a787-80e50464a344",
          "english": "average",
          "chinese": "词73",
          "pinyin": "cí73",
          "order": 3
        },
        {
          "id": "281aefbc-bcd2-48e3-8859-ebfe217b85d3",
          "english": "avoid",
          "chinese": "词74",
          "pinyin": "cí74",
          "order": 4
        },
        {
          "id": "be9e9c08-4ca2-42fe-ac94-7f354fddf644",
          "english": "award",
          "chinese": "词75",
          "pinyin": "cí75",
          "order": 5
        },
        {
          "id": "45a3bba3-2e34-4e04-991c-22c91f93c238",
          "english": "aware",
          "chinese": "词76",
          "pinyin": "cí76",
          "order": 6
        },
        {
          "id": "42b9b2c6-44c5-4688-a925-4696450125ca",
          "english": "awareness",
          "chinese": "词77",
          "pinyin": "cí77",
          "order": 7
        },
        {
          "id": "71ccf821-cb7d-430f-bf1a-34ef6c2d35b9",
          "english": "background",
          "chinese": "词78",
          "pinyin": "cí78",
          "order": 8
        },
        {
          "id": "ea3ebb14-b06c-4ff2-b3a2-ad3ab6d3bc22",
          "english": "balance",
          "chinese": "词79",
          "pinyin": "cí79",
          "order": 9
        }
      ]
    },
    {
      "id": "67427373-265c-414c-88b5-85a338fa97b5",
      "name": "HSK 3 18",
      "description": "HSK 3 18 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "36af8489-6545-4abe-9b1b-493a4581de2f",
          "english": "beer",
          "chinese": "啤酒",
          "pinyin": "píjiǔ",
          "order": 0
        },
        {
          "id": "497d4a13-4b0f-44d7-b744-1fe70291e384",
          "english": "leather shoes",
          "chinese": "皮鞋",
          "pinyin": "píxié",
          "order": 1
        },
        {
          "id": "c301651c-3c8e-4cbc-b215-cf193f2683cb",
          "english": "bottle",
          "chinese": "瓶子",
          "pinyin": "píngzi",
          "order": 2
        },
        {
          "id": "786c0613-b7af-481e-8a75-da173c9ab034",
          "english": "actually",
          "chinese": "其实",
          "pinyin": "qíshí",
          "order": 3
        },
        {
          "id": "47b5c1ea-7d0e-4875-b77a-0f169409737c",
          "english": "other",
          "chinese": "其他",
          "pinyin": "qítā",
          "order": 4
        },
        {
          "id": "e3f302a8-feff-4043-8d2f-0600eb39bc5e",
          "english": "ride",
          "chinese": "骑",
          "pinyin": "qí",
          "order": 5
        },
        {
          "id": "6e3c6a51-be48-4b45-b208-018afea6e893",
          "english": "strange",
          "chinese": "奇怪",
          "pinyin": "qíguài",
          "order": 6
        },
        {
          "id": "1cff30a9-1e07-4a3c-a278-4d2dc2b12145",
          "english": "get up",
          "chinese": "起来",
          "pinyin": "qǐlái",
          "order": 7
        },
        {
          "id": "0c76a5d4-5429-43a7-b679-a04de2b8e0bf",
          "english": "take off",
          "chinese": "起飞",
          "pinyin": "qǐfēi",
          "order": 8
        },
        {
          "id": "d1f7267b-69f6-45a5-a753-30d81e4e9734",
          "english": "clear",
          "chinese": "清楚",
          "pinyin": "qīngchu",
          "order": 9
        }
      ]
    },
    {
      "id": "5963789f-d7b1-4b6b-b501-9e779a35810c",
      "name": "HSK 3 18",
      "description": "HSK 3 18 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "d8398dcd-a8e7-4be8-b146-85c2a80720dc",
          "english": "basic",
          "chinese": "词80",
          "pinyin": "cí80",
          "order": 0
        },
        {
          "id": "0938e35f-8cf4-4c5a-a852-8d278553afcf",
          "english": "battle",
          "chinese": "词81",
          "pinyin": "cí81",
          "order": 1
        },
        {
          "id": "053b9f89-0c48-4143-89d8-c3c970142019",
          "english": "beautiful",
          "chinese": "词82",
          "pinyin": "cí82",
          "order": 2
        },
        {
          "id": "97cc102e-af71-4702-8081-96ebf9eae9df",
          "english": "beauty",
          "chinese": "词83",
          "pinyin": "cí83",
          "order": 3
        },
        {
          "id": "e97e9f8f-c95d-4100-8761-1802e9b748f5",
          "english": "become",
          "chinese": "词84",
          "pinyin": "cí84",
          "order": 4
        },
        {
          "id": "6d9b2768-4ce5-47f0-8f9c-522122465c35",
          "english": "bedroom",
          "chinese": "词85",
          "pinyin": "cí85",
          "order": 5
        },
        {
          "id": "f5d04d31-3d7f-4b25-8462-4135cfbbe580",
          "english": "behavior",
          "chinese": "词86",
          "pinyin": "cí86",
          "order": 6
        },
        {
          "id": "5fedfa81-e7a8-42e6-829e-d8707fb8be35",
          "english": "behind",
          "chinese": "词87",
          "pinyin": "cí87",
          "order": 7
        },
        {
          "id": "66169b68-e662-4ad1-a20c-55acd889ff55",
          "english": "believe",
          "chinese": "词88",
          "pinyin": "cí88",
          "order": 8
        },
        {
          "id": "e2555b54-51f7-49db-b87a-b445ac1bc938",
          "english": "belong",
          "chinese": "词89",
          "pinyin": "cí89",
          "order": 9
        }
      ]
    },
    {
      "id": "892becd7-5ee9-47a6-977d-4d88b7d23471",
      "name": "HSK 3 19",
      "description": "HSK 3 19 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "256a4103-23e3-466b-bce0-2b888ddbd8a6",
          "english": "ask for leave",
          "chinese": "请假",
          "pinyin": "qǐngjià",
          "order": 0
        },
        {
          "id": "93c4b97b-4f15-49d0-9936-d932cc2e4223",
          "english": "autumn",
          "chinese": "秋",
          "pinyin": "qiū",
          "order": 1
        },
        {
          "id": "89c4c497-6e75-446d-adb2-f0066854ae96",
          "english": "skirt",
          "chinese": "裙子",
          "pinyin": "qúnzi",
          "order": 2
        },
        {
          "id": "0e7d5c28-b017-4dfd-ae72-559f16d14239",
          "english": "then",
          "chinese": "然后",
          "pinyin": "ránhòu",
          "order": 3
        },
        {
          "id": "97d51859-8e26-480b-88ad-28cf07d31ec3",
          "english": "enthusiastic",
          "chinese": "热情",
          "pinyin": "rèqíng",
          "order": 4
        },
        {
          "id": "c923b9ee-3cb5-4178-8620-c6d769ebfa35",
          "english": "think",
          "chinese": "认为",
          "pinyin": "rènwéi",
          "order": 5
        },
        {
          "id": "ede9471f-457c-4456-8a46-0a240040ae1e",
          "english": "serious",
          "chinese": "认真",
          "pinyin": "rènzhēn",
          "order": 6
        },
        {
          "id": "a249c2d8-f25d-4c58-9a0d-2e371560ce2c",
          "english": "easy",
          "chinese": "容易",
          "pinyin": "róngyì",
          "order": 7
        },
        {
          "id": "094bb4e0-385c-469d-b156-203960532625",
          "english": "if",
          "chinese": "如果",
          "pinyin": "rúguǒ",
          "order": 8
        },
        {
          "id": "e83ee819-fbe9-4663-ac0c-130a8c4b1d12",
          "english": "umbrella",
          "chinese": "伞",
          "pinyin": "sǎn",
          "order": 9
        }
      ]
    },
    {
      "id": "382b8014-da9d-4c0a-90c5-55334837392a",
      "name": "HSK 3 19",
      "description": "HSK 3 19 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "1ff4289d-b00b-48c6-92e8-3c1ee0572372",
          "english": "benefit",
          "chinese": "词90",
          "pinyin": "cí90",
          "order": 0
        },
        {
          "id": "0c49c828-e12a-4e98-b119-c4c745895ad1",
          "english": "beside",
          "chinese": "词91",
          "pinyin": "cí91",
          "order": 1
        },
        {
          "id": "e69be6ee-bc85-412c-befc-fc4cde7cd129",
          "english": "beyond",
          "chinese": "词92",
          "pinyin": "cí92",
          "order": 2
        },
        {
          "id": "c4e76a7d-3185-4a9a-88ee-36ba974fe5f4",
          "english": "bicycle",
          "chinese": "词93",
          "pinyin": "cí93",
          "order": 3
        },
        {
          "id": "aaeafc47-5f69-43ac-989e-bd5955461817",
          "english": "billion",
          "chinese": "词94",
          "pinyin": "cí94",
          "order": 4
        },
        {
          "id": "10cb8043-3de7-4b0a-bb0e-623ea2a3e809",
          "english": "birth",
          "chinese": "词95",
          "pinyin": "cí95",
          "order": 5
        },
        {
          "id": "3437fa6f-b7cd-4795-8191-78accf0b01a9",
          "english": "birthday",
          "chinese": "词96",
          "pinyin": "cí96",
          "order": 6
        },
        {
          "id": "40b7aa9d-f975-4a19-bc88-40209c672944",
          "english": "blame",
          "chinese": "词97",
          "pinyin": "cí97",
          "order": 7
        },
        {
          "id": "80a527b3-e58b-4276-bdc4-2390e878fdc7",
          "english": "block",
          "chinese": "词98",
          "pinyin": "cí98",
          "order": 8
        },
        {
          "id": "11dfc35d-a519-4188-ac7c-a17b19854b70",
          "english": "blood",
          "chinese": "词99",
          "pinyin": "cí99",
          "order": 9
        }
      ]
    },
    {
      "id": "84160def-5d87-4dea-b5b3-76fe32ce4822",
      "name": "HSK 3 2",
      "description": "HSK 3 2 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "65968405-2436-4f91-9f8b-5c2745f4bb16",
          "english": "package",
          "chinese": "包",
          "pinyin": "bāo",
          "order": 0
        },
        {
          "id": "bcf5a7d8-2515-432b-8bc1-3cbef857317f",
          "english": "full (stomach)",
          "chinese": "饱",
          "pinyin": "bǎo",
          "order": 1
        },
        {
          "id": "d74caa70-ce52-4732-8c82-537493108cc6",
          "english": "north",
          "chinese": "北方",
          "pinyin": "běifāng",
          "order": 2
        },
        {
          "id": "7fcba06c-69af-40d6-a5ab-b2545b278974",
          "english": "nose",
          "chinese": "鼻子",
          "pinyin": "bízi",
          "order": 3
        },
        {
          "id": "00e4f8af-8b6f-4bf1-8dc7-93d4b0c54387",
          "english": "compare",
          "chinese": "比较",
          "pinyin": "bǐjiào",
          "order": 4
        },
        {
          "id": "8074d6e9-a99e-4655-85c3-969f1d02fb75",
          "english": "match, competition",
          "chinese": "比赛",
          "pinyin": "bǐsài",
          "order": 5
        },
        {
          "id": "42417ef2-3e75-4895-b318-b0e9ffa890fe",
          "english": "notebook",
          "chinese": "笔记本",
          "pinyin": "bǐjìběn",
          "order": 6
        },
        {
          "id": "045a31db-cae3-446e-aef2-9f04d75cc091",
          "english": "must",
          "chinese": "必须",
          "pinyin": "bìxū",
          "order": 7
        },
        {
          "id": "8f2bcd16-9d07-4cb4-a580-6d9988f5199f",
          "english": "change",
          "chinese": "变化",
          "pinyin": "biànhuà",
          "order": 8
        },
        {
          "id": "38a278ba-f34c-4be3-ba4f-6efcd5a76c6b",
          "english": "others",
          "chinese": "别人",
          "pinyin": "biéren",
          "order": 9
        }
      ]
    },
    {
      "id": "d5a51cfa-0b5c-4fb4-945f-e096b9722cdd",
      "name": "HSK 3 20",
      "description": "HSK 3 20 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "2c17cbac-2f3e-452c-b2fb-8ab96db348e2",
          "english": "board",
          "chinese": "词100",
          "pinyin": "cí100",
          "order": 0
        },
        {
          "id": "910f33bf-ba5d-4b6d-a379-b185b3607f3c",
          "english": "body",
          "chinese": "词101",
          "pinyin": "cí101",
          "order": 1
        },
        {
          "id": "eda629d6-191b-43c9-b370-b8ea0e488d2a",
          "english": "border",
          "chinese": "词102",
          "pinyin": "cí102",
          "order": 2
        },
        {
          "id": "ec5d70a0-250b-4da8-8932-7ba7ad55f50d",
          "english": "born",
          "chinese": "词103",
          "pinyin": "cí103",
          "order": 3
        },
        {
          "id": "705dd426-1133-40aa-b378-17f07bd566b7",
          "english": "bottle",
          "chinese": "词104",
          "pinyin": "cí104",
          "order": 4
        },
        {
          "id": "ee070ed3-203b-40ee-8b8e-500a66aa6df3",
          "english": "bottom",
          "chinese": "词105",
          "pinyin": "cí105",
          "order": 5
        },
        {
          "id": "1a7a2cdf-ac3d-43f4-a39f-1246fd867d5e",
          "english": "brain",
          "chinese": "词106",
          "pinyin": "cí106",
          "order": 6
        },
        {
          "id": "9bd70e3e-07cc-4c3b-8d2f-306ce689fea3",
          "english": "branch",
          "chinese": "词107",
          "pinyin": "cí107",
          "order": 7
        },
        {
          "id": "9b0c712a-e6fc-4c26-98a3-6c0c404c17c6",
          "english": "brand",
          "chinese": "词108",
          "pinyin": "cí108",
          "order": 8
        },
        {
          "id": "e4dc1ab6-9822-4b91-a639-0d2195897baa",
          "english": "brave",
          "chinese": "词109",
          "pinyin": "cí109",
          "order": 9
        }
      ]
    },
    {
      "id": "fd465cf0-97d8-4180-891d-8b31b1717ea6",
      "name": "HSK 3 20",
      "description": "HSK 3 20 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "09bb8325-feb8-4f43-84eb-a01112ea6a46",
          "english": "surf internet",
          "chinese": "上网",
          "pinyin": "shàngwǎng",
          "order": 0
        },
        {
          "id": "21f8b9d9-93c7-468f-a532-1630104a3276",
          "english": "get angry",
          "chinese": "生气",
          "pinyin": "shēngqì",
          "order": 1
        },
        {
          "id": "a3443660-7325-4090-b69b-41bc5b96022d",
          "english": "voice",
          "chinese": "声音",
          "pinyin": "shēngyīn",
          "order": 2
        },
        {
          "id": "841afe3e-2340-4a6d-971e-cc01c55fbd72",
          "english": "try",
          "chinese": "试",
          "pinyin": "shì",
          "order": 3
        },
        {
          "id": "3c31e305-b7d7-46bd-b90c-2573cc84d3bc",
          "english": "world",
          "chinese": "世界",
          "pinyin": "shìjiè",
          "order": 4
        },
        {
          "id": "0fbcdd71-b2bc-4ec5-93ad-63c80f008029",
          "english": "thin",
          "chinese": "瘦",
          "pinyin": "shòu",
          "order": 5
        },
        {
          "id": "28785fe1-15f4-42b0-b65b-4001615083e6",
          "english": "comfortable",
          "chinese": "舒服",
          "pinyin": "shūfu",
          "order": 6
        },
        {
          "id": "c4f2c423-b1c3-49cd-9352-6866c5d7c8a2",
          "english": "uncle",
          "chinese": "叔叔",
          "pinyin": "shūshu",
          "order": 7
        },
        {
          "id": "a9b9c62a-bf92-4e72-81e9-a660b705879f",
          "english": "tree",
          "chinese": "树",
          "pinyin": "shù",
          "order": 8
        },
        {
          "id": "7835a6f4-f7e5-4226-93fd-50e3a025c82e",
          "english": "mathematics",
          "chinese": "数学",
          "pinyin": "shùxué",
          "order": 9
        }
      ]
    },
    {
      "id": "84a5b71d-c6d2-49f5-b6f3-75cff50fc322",
      "name": "HSK 3 21",
      "description": "HSK 3 21 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "4df130de-ec83-4a97-9efc-64e9e8766af8",
          "english": "brush teeth",
          "chinese": "刷牙",
          "pinyin": "shuāyá",
          "order": 0
        },
        {
          "id": "e9c1920b-9bf1-4798-bbe8-46c1c466af7c",
          "english": "pair",
          "chinese": "双",
          "pinyin": "shuāng",
          "order": 1
        },
        {
          "id": "cef771f9-1ddc-43e3-9d86-396f25394ab8",
          "english": "level",
          "chinese": "水平",
          "pinyin": "shuǐpíng",
          "order": 2
        },
        {
          "id": "cd224c00-40ed-4aef-aa1f-155b81cfb9f0",
          "english": "driver",
          "chinese": "司机",
          "pinyin": "sījī",
          "order": 3
        },
        {
          "id": "dbc175d1-2f4d-4903-910c-057c04f2d8bd",
          "english": "sun",
          "chinese": "太阳",
          "pinyin": "tàiyáng",
          "order": 4
        },
        {
          "id": "248e9441-9e8e-4226-8d18-d0964ad42739",
          "english": "especially",
          "chinese": "特别",
          "pinyin": "tèbié",
          "order": 5
        },
        {
          "id": "aba874ec-c0c1-4e82-becd-1091cf0836a5",
          "english": "hurt",
          "chinese": "疼",
          "pinyin": "téng",
          "order": 6
        },
        {
          "id": "ac5f30d6-ea88-40a1-bf6b-0c2908424886",
          "english": "improve",
          "chinese": "提高",
          "pinyin": "tígāo",
          "order": 7
        },
        {
          "id": "b70e3397-be04-42bb-9c83-dde6d6a42c55",
          "english": "sports",
          "chinese": "体育",
          "pinyin": "tǐyù",
          "order": 8
        },
        {
          "id": "75e98a37-cf64-4201-8898-2f49925ca291",
          "english": "sweet",
          "chinese": "甜",
          "pinyin": "tián",
          "order": 9
        }
      ]
    },
    {
      "id": "646f437c-aa64-41dd-a265-5144afb7e330",
      "name": "HSK 3 21",
      "description": "HSK 3 21 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "0ea92285-2de5-473e-881d-f38c06d945e7",
          "english": "bread",
          "chinese": "词110",
          "pinyin": "cí110",
          "order": 0
        },
        {
          "id": "67a2ff25-ef4f-44bd-b306-776fd5ef13bb",
          "english": "break",
          "chinese": "词111",
          "pinyin": "cí111",
          "order": 1
        },
        {
          "id": "abbb9627-e99b-48ff-87ed-a7e2c97441d0",
          "english": "breakfast",
          "chinese": "词112",
          "pinyin": "cí112",
          "order": 2
        },
        {
          "id": "c103c90d-ed39-4de7-b318-ae16b04935dd",
          "english": "breath",
          "chinese": "词113",
          "pinyin": "cí113",
          "order": 3
        },
        {
          "id": "4554561a-7378-4ccc-98d7-911423f8976d",
          "english": "bridge",
          "chinese": "词114",
          "pinyin": "cí114",
          "order": 4
        },
        {
          "id": "3d364fa3-0ea8-4dc8-9140-ba9539c03a94",
          "english": "brief",
          "chinese": "词115",
          "pinyin": "cí115",
          "order": 5
        },
        {
          "id": "e0180876-1d35-49c6-b24a-83db07282b20",
          "english": "bright",
          "chinese": "词116",
          "pinyin": "cí116",
          "order": 6
        },
        {
          "id": "a0ee9f64-0676-47c2-bc54-5abc788cbdf9",
          "english": "bring",
          "chinese": "词117",
          "pinyin": "cí117",
          "order": 7
        },
        {
          "id": "d4272704-20bb-4980-8be6-c999a6296d70",
          "english": "broad",
          "chinese": "词118",
          "pinyin": "cí118",
          "order": 8
        },
        {
          "id": "7d987bb4-e6f1-4c72-92d7-497faa209fed",
          "english": "brother",
          "chinese": "词119",
          "pinyin": "cí119",
          "order": 9
        }
      ]
    },
    {
      "id": "966b2fbb-ad85-4b9d-a03a-f481e069493b",
      "name": "HSK 3 22",
      "description": "HSK 3 22 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "88e2c7b7-c6b1-41df-9f14-528358a05871",
          "english": "budget",
          "chinese": "词120",
          "pinyin": "cí120",
          "order": 0
        },
        {
          "id": "7983adff-0c89-481d-b815-f2be6c8d6ba7",
          "english": "build",
          "chinese": "词121",
          "pinyin": "cí121",
          "order": 1
        },
        {
          "id": "90888962-f32e-4f7d-9100-dde94e4e9d5a",
          "english": "building",
          "chinese": "词122",
          "pinyin": "cí122",
          "order": 2
        },
        {
          "id": "d482bbc6-c791-4f8f-bd05-78ff2eb5bc3b",
          "english": "business",
          "chinese": "词123",
          "pinyin": "cí123",
          "order": 3
        },
        {
          "id": "f947bc39-d16f-40c1-9afe-064d26b4c70f",
          "english": "button",
          "chinese": "词124",
          "pinyin": "cí124",
          "order": 4
        },
        {
          "id": "6ffc6b94-9ab7-4328-9cbb-2bb9e619d07d",
          "english": "buyer",
          "chinese": "词125",
          "pinyin": "cí125",
          "order": 5
        },
        {
          "id": "947734f4-c3a2-4d24-808c-c4c1ea7d5404",
          "english": "camera",
          "chinese": "词126",
          "pinyin": "cí126",
          "order": 6
        },
        {
          "id": "09ac27b0-d6b4-4179-83a3-d3a31df93f63",
          "english": "campaign",
          "chinese": "词127",
          "pinyin": "cí127",
          "order": 7
        },
        {
          "id": "4dba5e60-b9f4-46d7-83c5-03123cf27f72",
          "english": "campus",
          "chinese": "词128",
          "pinyin": "cí128",
          "order": 8
        },
        {
          "id": "08b173c3-eedf-46f3-be65-32e9781cd237",
          "english": "cancer",
          "chinese": "词129",
          "pinyin": "cí129",
          "order": 9
        }
      ]
    },
    {
      "id": "24b82c1b-0b08-4dae-8674-cbbcb8727e36",
      "name": "HSK 3 22",
      "description": "HSK 3 22 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "991175fd-21d9-4db1-ae69-64525f699356",
          "english": "strip",
          "chinese": "条",
          "pinyin": "tiáo",
          "order": 0
        },
        {
          "id": "f2368742-0a4f-4788-b08d-8cba55b94930",
          "english": "colleague",
          "chinese": "同事",
          "pinyin": "tóngshì",
          "order": 1
        },
        {
          "id": "feae7de4-4205-491f-b550-d18d38abe24c",
          "english": "agree",
          "chinese": "同意",
          "pinyin": "tóngyì",
          "order": 2
        },
        {
          "id": "5c977ef4-09b2-4972-bd1e-e9eca6112a6d",
          "english": "hair",
          "chinese": "头发",
          "pinyin": "tóufa",
          "order": 3
        },
        {
          "id": "25c59b8c-014b-49d1-9a67-0942eb4e0607",
          "english": "suddenly",
          "chinese": "突然",
          "pinyin": "tūrán",
          "order": 4
        },
        {
          "id": "48d29f04-1091-4e5b-9c77-cf20afcf71ac",
          "english": "library",
          "chinese": "图书馆",
          "pinyin": "túshūguǎn",
          "order": 5
        },
        {
          "id": "04e7f864-5a5b-4bdf-a378-88cccbe6ac53",
          "english": "leg",
          "chinese": "腿",
          "pinyin": "tuǐ",
          "order": 6
        },
        {
          "id": "55acf709-b15e-49e0-97f9-a8dc71a67492",
          "english": "complete",
          "chinese": "完成",
          "pinyin": "wánchéng",
          "order": 7
        },
        {
          "id": "630a3795-0931-4b0e-8ac5-c177e1fe60a2",
          "english": "bowl",
          "chinese": "碗",
          "pinyin": "wǎn",
          "order": 8
        },
        {
          "id": "a4c7643e-d3b9-4bf7-a4bc-038254a8faa9",
          "english": "ten thousand",
          "chinese": "万",
          "pinyin": "wàn",
          "order": 9
        }
      ]
    },
    {
      "id": "f3a10971-495a-402d-9eb3-34db3bdbe3db",
      "name": "HSK 3 23",
      "description": "HSK 3 23 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "d2a89a0d-2ee7-4aba-a6f5-05b0f061b2c7",
          "english": "forget",
          "chinese": "忘记",
          "pinyin": "wàngjì",
          "order": 0
        },
        {
          "id": "d5e0e1cd-e265-4bda-af90-1df63d6a47dd",
          "english": "for",
          "chinese": "为",
          "pinyin": "wèi",
          "order": 1
        },
        {
          "id": "d3a6363f-641a-4f9e-a6c0-8c1eb03cc2c3",
          "english": "in order to",
          "chinese": "为了",
          "pinyin": "wèile",
          "order": 2
        },
        {
          "id": "37f213e5-534e-44dd-bc2c-4527bca4b141",
          "english": "position",
          "chinese": "位",
          "pinyin": "wèi",
          "order": 3
        },
        {
          "id": "fcad9d96-92e0-452e-8d21-78223f02e094",
          "english": "culture",
          "chinese": "文化",
          "pinyin": "wénhuà",
          "order": 4
        },
        {
          "id": "fc57be40-c803-40d4-b512-b0fd47961b75",
          "english": "west",
          "chinese": "西",
          "pinyin": "xī",
          "order": 5
        },
        {
          "id": "6d038b0c-e76c-4e8d-a6ca-a1b742cfe67d",
          "english": "habit",
          "chinese": "习惯",
          "pinyin": "xíguàn",
          "order": 6
        },
        {
          "id": "476f89c5-1686-43f4-b7d2-a42f4777b3c3",
          "english": "restroom",
          "chinese": "洗手间",
          "pinyin": "xǐshǒujiān",
          "order": 7
        },
        {
          "id": "6e0e5a95-499d-46c2-94a0-a4a720d5da7c",
          "english": "take shower",
          "chinese": "洗澡",
          "pinyin": "xǐzǎo",
          "order": 8
        },
        {
          "id": "365fa36f-d83f-47a6-8796-76178175d9a4",
          "english": "summer",
          "chinese": "夏",
          "pinyin": "xià",
          "order": 9
        }
      ]
    },
    {
      "id": "1c3b6e14-24b5-486d-bbfc-408a07670525",
      "name": "HSK 3 23",
      "description": "HSK 3 23 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "ea4accd2-0cd8-48f5-ace3-1e8e480775ff",
          "english": "candidate",
          "chinese": "词130",
          "pinyin": "cí130",
          "order": 0
        },
        {
          "id": "b5558389-4456-4431-b375-4b2e3ed7bfa8",
          "english": "capable",
          "chinese": "词131",
          "pinyin": "cí131",
          "order": 1
        },
        {
          "id": "6e2c52a4-4a11-430d-af72-5e4376d7a597",
          "english": "capacity",
          "chinese": "词132",
          "pinyin": "cí132",
          "order": 2
        },
        {
          "id": "d547b37f-1495-4d06-a3ed-af16fc07bcd8",
          "english": "capital",
          "chinese": "词133",
          "pinyin": "cí133",
          "order": 3
        },
        {
          "id": "28969b34-3d74-4c0d-907f-4c307d148848",
          "english": "captain",
          "chinese": "词134",
          "pinyin": "cí134",
          "order": 4
        },
        {
          "id": "7c3b0d53-663c-43e3-999d-4299b89fc061",
          "english": "capture",
          "chinese": "词135",
          "pinyin": "cí135",
          "order": 5
        },
        {
          "id": "c2709e2c-5df9-4655-aed8-3de7154f663f",
          "english": "carbon",
          "chinese": "词136",
          "pinyin": "cí136",
          "order": 6
        },
        {
          "id": "33584355-2ae3-49e0-b164-66d8d0aef1fc",
          "english": "career",
          "chinese": "词137",
          "pinyin": "cí137",
          "order": 7
        },
        {
          "id": "007257d8-0a0d-461a-bdfc-cc3ed87f6baf",
          "english": "careful",
          "chinese": "词138",
          "pinyin": "cí138",
          "order": 8
        },
        {
          "id": "5332d730-f156-401a-8357-b3a1ce51829c",
          "english": "carry",
          "chinese": "词139",
          "pinyin": "cí139",
          "order": 9
        }
      ]
    },
    {
      "id": "9b995359-0baa-418a-9a8f-504cdf19220e",
      "name": "HSK 3 24",
      "description": "HSK 3 24 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "26b7595e-9c5a-4806-857a-1a2fd6ede3fc",
          "english": "category",
          "chinese": "词140",
          "pinyin": "cí140",
          "order": 0
        },
        {
          "id": "3e1cd8bf-32b1-42bc-bea6-8118a41306da",
          "english": "cause",
          "chinese": "词141",
          "pinyin": "cí141",
          "order": 1
        },
        {
          "id": "c61a485d-35f4-499b-9d96-d7c40ec54a3c",
          "english": "celebrate",
          "chinese": "词142",
          "pinyin": "cí142",
          "order": 2
        },
        {
          "id": "eaa8b976-5bf4-448d-a98d-fa4e5d7e5fb4",
          "english": "celebration",
          "chinese": "词143",
          "pinyin": "cí143",
          "order": 3
        },
        {
          "id": "53e64082-d534-4fd1-a739-52393d2b966c",
          "english": "center",
          "chinese": "词144",
          "pinyin": "cí144",
          "order": 4
        },
        {
          "id": "5cb137a1-6ca3-47cf-8404-188517f6553e",
          "english": "central",
          "chinese": "词145",
          "pinyin": "cí145",
          "order": 5
        },
        {
          "id": "e9adb39f-83db-4ebf-a2cc-42c992fabc8c",
          "english": "century",
          "chinese": "词146",
          "pinyin": "cí146",
          "order": 6
        },
        {
          "id": "9b010e96-ed6e-4adf-b89e-bb3ace851277",
          "english": "ceremony",
          "chinese": "词147",
          "pinyin": "cí147",
          "order": 7
        },
        {
          "id": "984bb06d-78bb-480b-bf54-35263451bc3f",
          "english": "certain",
          "chinese": "词148",
          "pinyin": "cí148",
          "order": 8
        },
        {
          "id": "f2a400f6-fb8d-498a-822f-36265686ef51",
          "english": "certainly",
          "chinese": "词149",
          "pinyin": "cí149",
          "order": 9
        }
      ]
    },
    {
      "id": "48895ff9-ae8a-41e2-932f-77a441665d11",
      "name": "HSK 3 24",
      "description": "HSK 3 24 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "b7170ab1-7597-403c-917b-b5c958c545b1",
          "english": "first",
          "chinese": "先",
          "pinyin": "xiān",
          "order": 0
        },
        {
          "id": "e26e86a3-25ff-4815-9cf6-aba3b972ceec",
          "english": "banana",
          "chinese": "香蕉",
          "pinyin": "xiāngjiāo",
          "order": 1
        },
        {
          "id": "d823fd37-b194-430b-aa6b-01c451b35b2c",
          "english": "believe",
          "chinese": "相信",
          "pinyin": "xiāngxìn",
          "order": 2
        },
        {
          "id": "38e5c1ab-0fcd-4976-80bf-3135d70eecd3",
          "english": "toward",
          "chinese": "向",
          "pinyin": "xiàng",
          "order": 3
        },
        {
          "id": "c65a7d01-d001-40bc-b858-9e08f2a0f691",
          "english": "like",
          "chinese": "像",
          "pinyin": "xiàng",
          "order": 4
        },
        {
          "id": "43af0236-f2a0-4404-a904-74b574c84b4a",
          "english": "be careful",
          "chinese": "小心",
          "pinyin": "xiǎoxīn",
          "order": 5
        },
        {
          "id": "8aef9ff9-9daf-4862-ab7b-db1630179ab8",
          "english": "principal",
          "chinese": "校长",
          "pinyin": "xiàozhǎng",
          "order": 6
        },
        {
          "id": "97d3a852-8236-44a9-86c5-d4e2fa30dbc0",
          "english": "news",
          "chinese": "新闻",
          "pinyin": "xīnwén",
          "order": 7
        },
        {
          "id": "97f16802-ee15-42f0-8ae3-425f134185e3",
          "english": "fresh",
          "chinese": "新鲜",
          "pinyin": "xīnxiān",
          "order": 8
        },
        {
          "id": "39d95f71-ef7b-4c48-ab4e-4905e4728772",
          "english": "credit card",
          "chinese": "信用卡",
          "pinyin": "xìnyòngkǎ",
          "order": 9
        }
      ]
    },
    {
      "id": "52fb6103-c162-4120-bfad-046a19b8b1b2",
      "name": "HSK 3 25",
      "description": "HSK 3 25 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "e0d1930b-84a8-42d1-ab03-adc2421b9d94",
          "english": "chain",
          "chinese": "词150",
          "pinyin": "cí150",
          "order": 0
        },
        {
          "id": "5ef3eee0-bf29-4266-bc11-3da78256a33a",
          "english": "chair",
          "chinese": "词151",
          "pinyin": "cí151",
          "order": 1
        },
        {
          "id": "a8438db6-9705-4bbc-aef9-d14e99650bd0",
          "english": "chairman",
          "chinese": "词152",
          "pinyin": "cí152",
          "order": 2
        },
        {
          "id": "6ccf4482-a045-470f-bea7-e53dba291f1e",
          "english": "challenge",
          "chinese": "词153",
          "pinyin": "cí153",
          "order": 3
        },
        {
          "id": "96382ebb-699b-4669-870e-d2e623271812",
          "english": "champion",
          "chinese": "词154",
          "pinyin": "cí154",
          "order": 4
        },
        {
          "id": "0aed4fc2-50ea-45ab-95f8-8e1a583a1f79",
          "english": "chance",
          "chinese": "词155",
          "pinyin": "cí155",
          "order": 5
        },
        {
          "id": "be1dd677-6842-4237-91ac-dc424948a052",
          "english": "change",
          "chinese": "词156",
          "pinyin": "cí156",
          "order": 6
        },
        {
          "id": "c0f95df5-d0f5-45db-a88b-861882fa0143",
          "english": "channel",
          "chinese": "词157",
          "pinyin": "cí157",
          "order": 7
        },
        {
          "id": "27b6dc46-6f7d-48bc-a5ef-0b99eca9c507",
          "english": "chapter",
          "chinese": "词158",
          "pinyin": "cí158",
          "order": 8
        },
        {
          "id": "e975dedd-704e-43ad-8ccf-f2c05460475b",
          "english": "character",
          "chinese": "词159",
          "pinyin": "cí159",
          "order": 9
        }
      ]
    },
    {
      "id": "9b74753f-68c6-4b5d-83b9-9779abd6b220",
      "name": "HSK 3 25",
      "description": "HSK 3 25 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "045f73e3-6883-48f1-a503-e9de0143f4ad",
          "english": "suitcase",
          "chinese": "行李箱",
          "pinyin": "xínglixiāng",
          "order": 0
        },
        {
          "id": "1fc5b0ad-355d-48e7-8eda-ba797cbff90e",
          "english": "panda",
          "chinese": "熊猫",
          "pinyin": "xióngmāo",
          "order": 1
        },
        {
          "id": "32440022-59a5-4565-bac4-448daf1ccf95",
          "english": "need",
          "chinese": "需要",
          "pinyin": "xūyào",
          "order": 2
        },
        {
          "id": "c3ec3296-4f93-4e5e-a75e-ce9c9616a182",
          "english": "choose",
          "chinese": "选择",
          "pinyin": "xuǎnzé",
          "order": 3
        },
        {
          "id": "5ea6f2ab-c295-49f1-9522-f7cac483efb9",
          "english": "requirement",
          "chinese": "要求",
          "pinyin": "yāoqiú",
          "order": 4
        },
        {
          "id": "19bebf90-e141-4e7a-9889-f03f5e3aff83",
          "english": "grandpa",
          "chinese": "爷爷",
          "pinyin": "yéye",
          "order": 5
        },
        {
          "id": "2262601d-4649-4681-8080-3c0514f1fc69",
          "english": "certain",
          "chinese": "一定",
          "pinyin": "yídìng",
          "order": 6
        },
        {
          "id": "c71c2cd0-d105-4219-aaeb-e209424c1d81",
          "english": "altogether",
          "chinese": "一共",
          "pinyin": "yígòng",
          "order": 7
        },
        {
          "id": "07dcd1b5-b125-4980-8786-b1900ab0bdb2",
          "english": "a while",
          "chinese": "一会儿",
          "pinyin": "yíhuìr",
          "order": 8
        },
        {
          "id": "ac6750be-2d70-4cfd-af43-0620e18534ba",
          "english": "same",
          "chinese": "一样",
          "pinyin": "yíyàng",
          "order": 9
        }
      ]
    },
    {
      "id": "4b4201a2-b2ed-4a32-99d2-8c4ad8a231f9",
      "name": "HSK 3 26",
      "description": "HSK 3 26 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "203d03d5-bc80-4cfd-a20b-64bbc7f0b1e5",
          "english": "before",
          "chinese": "以前",
          "pinyin": "yǐqián",
          "order": 0
        },
        {
          "id": "6c7171d8-8792-48e8-a32b-80837c0f6ed6",
          "english": "general",
          "chinese": "一般",
          "pinyin": "yìbān",
          "order": 1
        },
        {
          "id": "bb3080f7-41ab-4b75-a006-5cbc7cd7fd03",
          "english": "one side",
          "chinese": "一边",
          "pinyin": "yìbiān",
          "order": 2
        },
        {
          "id": "4d3b5b12-35f5-4b63-a680-e76ddccdb5b6",
          "english": "always",
          "chinese": "一直",
          "pinyin": "yìzhí",
          "order": 3
        },
        {
          "id": "b65c8a85-d01d-4b47-a5e2-2d7b7b871b32",
          "english": "music",
          "chinese": "音乐",
          "pinyin": "yīnyuè",
          "order": 4
        },
        {
          "id": "223cd7df-55e7-4180-ac71-bd6705cb3d21",
          "english": "bank",
          "chinese": "银行",
          "pinyin": "yínháng",
          "order": 5
        },
        {
          "id": "672c5eff-18b0-4c90-9ea3-178984f3749f",
          "english": "drink",
          "chinese": "饮料",
          "pinyin": "yǐnliào",
          "order": 6
        },
        {
          "id": "13701b42-df6f-4d85-84b9-a91526679ecc",
          "english": "should",
          "chinese": "应该",
          "pinyin": "yīnggāi",
          "order": 7
        },
        {
          "id": "385c3fa2-cfda-41c9-9b92-dbe7d221c131",
          "english": "influence",
          "chinese": "影响",
          "pinyin": "yǐngxiǎng",
          "order": 8
        },
        {
          "id": "faf1d7ac-e727-49de-a26b-6b80180256f6",
          "english": "use",
          "chinese": "用",
          "pinyin": "yòng",
          "order": 9
        }
      ]
    },
    {
      "id": "b0261abc-5458-4c06-9857-005558a1eed4",
      "name": "HSK 3 26",
      "description": "HSK 3 26 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "f5e30fb0-dc0b-44e0-a220-b0310e383839",
          "english": "charge",
          "chinese": "词160",
          "pinyin": "cí160",
          "order": 0
        },
        {
          "id": "b04e265f-1bac-4600-88be-a4ab081e8fe3",
          "english": "charity",
          "chinese": "词161",
          "pinyin": "cí161",
          "order": 1
        },
        {
          "id": "8da3f361-3fac-4299-9d45-c55f00e62070",
          "english": "chart",
          "chinese": "词162",
          "pinyin": "cí162",
          "order": 2
        },
        {
          "id": "ee7bdb60-0f28-45e3-9f5a-1e5ac78bcd29",
          "english": "cheap",
          "chinese": "词163",
          "pinyin": "cí163",
          "order": 3
        },
        {
          "id": "fbedc6ad-3606-46bc-83e0-e529e85ed561",
          "english": "check",
          "chinese": "词164",
          "pinyin": "cí164",
          "order": 4
        },
        {
          "id": "6a3467fe-3b6c-4e37-9e7d-71a4b199b8c3",
          "english": "chemical",
          "chinese": "词165",
          "pinyin": "cí165",
          "order": 5
        },
        {
          "id": "ffee989a-0a1b-4020-8b77-d49b21cd1c88",
          "english": "chest",
          "chinese": "词166",
          "pinyin": "cí166",
          "order": 6
        },
        {
          "id": "3ac7f267-9171-47e4-a7b4-f25857cfc59c",
          "english": "chicken",
          "chinese": "词167",
          "pinyin": "cí167",
          "order": 7
        },
        {
          "id": "62cc0292-2690-41f4-a133-987a97f74ce4",
          "english": "chief",
          "chinese": "词168",
          "pinyin": "cí168",
          "order": 8
        },
        {
          "id": "def3c284-c217-4387-a2a3-90e2ca2e8c31",
          "english": "child",
          "chinese": "词169",
          "pinyin": "cí169",
          "order": 9
        }
      ]
    },
    {
      "id": "28e886e0-5465-4847-81a5-a787380cfe19",
      "name": "HSK 3 27",
      "description": "HSK 3 27 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "598a7e4c-115e-445c-8140-9dc4b4a44b00",
          "english": "choice",
          "chinese": "词170",
          "pinyin": "cí170",
          "order": 0
        },
        {
          "id": "2c3b8c42-f97a-4956-a1d5-cd7710402753",
          "english": "choose",
          "chinese": "词171",
          "pinyin": "cí171",
          "order": 1
        },
        {
          "id": "51f77f20-2f69-4ecd-b433-5aaea5537c4a",
          "english": "church",
          "chinese": "词172",
          "pinyin": "cí172",
          "order": 2
        },
        {
          "id": "6909e5ef-e292-427a-8714-04624b756f8d",
          "english": "circle",
          "chinese": "词173",
          "pinyin": "cí173",
          "order": 3
        },
        {
          "id": "8249230d-6bd9-44ea-a970-d60c1da2cf39",
          "english": "citizen",
          "chinese": "词174",
          "pinyin": "cí174",
          "order": 4
        },
        {
          "id": "841ac0a7-58b8-432e-9360-a92ca4ef148d",
          "english": "city",
          "chinese": "词175",
          "pinyin": "cí175",
          "order": 5
        },
        {
          "id": "40bd591b-025c-48ef-9e2e-2c17a9d067fb",
          "english": "civil",
          "chinese": "词176",
          "pinyin": "cí176",
          "order": 6
        },
        {
          "id": "0a31ea09-c2c8-44eb-8262-6e786367069c",
          "english": "claim",
          "chinese": "词177",
          "pinyin": "cí177",
          "order": 7
        },
        {
          "id": "5a81da48-d408-43df-9e4d-d002122465c3",
          "english": "class",
          "chinese": "词178",
          "pinyin": "cí178",
          "order": 8
        },
        {
          "id": "0e3d5054-e8e9-43ee-9128-3bb248b6fee4",
          "english": "classic",
          "chinese": "词179",
          "pinyin": "cí179",
          "order": 9
        }
      ]
    },
    {
      "id": "1f22aaf7-6d6d-4188-a61d-5078bdd07232",
      "name": "HSK 3 27",
      "description": "HSK 3 27 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "cca50d39-9425-4a39-b798-5142c23df7f8",
          "english": "game",
          "chinese": "游戏",
          "pinyin": "yóuxì",
          "order": 0
        },
        {
          "id": "485d70b2-ce0d-4e78-8afe-9c05c72178a2",
          "english": "famous",
          "chinese": "有名",
          "pinyin": "yǒumíng",
          "order": 1
        },
        {
          "id": "a166019d-c000-49f4-8991-224100d63f79",
          "english": "again",
          "chinese": "又",
          "pinyin": "yòu",
          "order": 2
        },
        {
          "id": "8e756b62-32af-43ab-aa3f-386d2c05df57",
          "english": "encounter",
          "chinese": "遇到",
          "pinyin": "yùdào",
          "order": 3
        },
        {
          "id": "24fdeb04-0a36-4dc9-a0fa-d570fb2f3533",
          "english": "yuan (currency)",
          "chinese": "元",
          "pinyin": "yuán",
          "order": 4
        },
        {
          "id": "310c70e0-c7a8-433b-9b15-88e2aeee28ff",
          "english": "willing",
          "chinese": "愿意",
          "pinyin": "yuànyì",
          "order": 5
        },
        {
          "id": "1b09bae9-ead4-474d-b979-7e514bcc58d5",
          "english": "moon",
          "chinese": "月亮",
          "pinyin": "yuèliang",
          "order": 6
        },
        {
          "id": "f69cf554-bc73-40a4-a74b-d1050f95cf8d",
          "english": "the more",
          "chinese": "越",
          "pinyin": "yuè",
          "order": 7
        },
        {
          "id": "11c5a2c9-9a11-44ed-b56f-5ef7eab1719d",
          "english": "station",
          "chinese": "站",
          "pinyin": "zhàn",
          "order": 8
        },
        {
          "id": "1c6f8f0e-731e-4dd8-a6e3-a8e102a18ea4",
          "english": "grow",
          "chinese": "长",
          "pinyin": "zhǎng",
          "order": 9
        }
      ]
    },
    {
      "id": "c18b3d9b-114d-45d1-8289-c853c3244bb7",
      "name": "HSK 3 28",
      "description": "HSK 3 28 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "2413e4a2-4e9e-40d5-935a-11f597448954",
          "english": "classroom",
          "chinese": "词180",
          "pinyin": "cí180",
          "order": 0
        },
        {
          "id": "e50dfa60-ff28-4103-a984-7f64d5550bed",
          "english": "clean",
          "chinese": "词181",
          "pinyin": "cí181",
          "order": 1
        },
        {
          "id": "bb7fa86a-5d70-4004-b2e4-eb1720af82c3",
          "english": "clear",
          "chinese": "词182",
          "pinyin": "cí182",
          "order": 2
        },
        {
          "id": "99a57013-9606-482c-8f26-9f6c1e918f5e",
          "english": "clearly",
          "chinese": "词183",
          "pinyin": "cí183",
          "order": 3
        },
        {
          "id": "db953019-d0ab-453a-b4dc-2f16bef303bc",
          "english": "client",
          "chinese": "词184",
          "pinyin": "cí184",
          "order": 4
        },
        {
          "id": "e4a3234e-8e6d-4a86-a909-ba2ffb4adb0e",
          "english": "climate",
          "chinese": "词185",
          "pinyin": "cí185",
          "order": 5
        },
        {
          "id": "9351ebbb-91c6-44ca-9d90-9b90db023255",
          "english": "climb",
          "chinese": "词186",
          "pinyin": "cí186",
          "order": 6
        },
        {
          "id": "b7b826f3-8e31-4dfa-aad2-2190511ce6fa",
          "english": "clock",
          "chinese": "词187",
          "pinyin": "cí187",
          "order": 7
        },
        {
          "id": "aaeb906d-6010-411b-b9ce-213871bc306c",
          "english": "close",
          "chinese": "词188",
          "pinyin": "cí188",
          "order": 8
        },
        {
          "id": "827e11d6-4012-40bc-a0f7-a7f9f3b58df3",
          "english": "clothes",
          "chinese": "词189",
          "pinyin": "cí189",
          "order": 9
        }
      ]
    },
    {
      "id": "b5b9ce95-1dfe-47b1-b493-8419996d5450",
      "name": "HSK 3 28",
      "description": "HSK 3 28 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "cdb3e9cd-413e-4900-a3a7-7b6cbe849f06",
          "english": "worry",
          "chinese": "着急",
          "pinyin": "zháojí",
          "order": 0
        },
        {
          "id": "bff03b5d-f309-49d7-b688-27b06e6fa932",
          "english": "look after",
          "chinese": "照顾",
          "pinyin": "zhàogù",
          "order": 1
        },
        {
          "id": "a4e5afef-914d-49a8-ba18-f21f6e783aec",
          "english": "photo",
          "chinese": "照片",
          "pinyin": "zhàopiàn",
          "order": 2
        },
        {
          "id": "ed1cd8f2-be38-4028-a762-dcc15a7812a2",
          "english": "camera",
          "chinese": "照相机",
          "pinyin": "zhàoxiàngjī",
          "order": 3
        },
        {
          "id": "53747778-1949-41a7-af40-00c3268fbfc1",
          "english": "only",
          "chinese": "只",
          "pinyin": "zhǐ",
          "order": 4
        },
        {
          "id": "d8c7b141-0209-436d-805d-3c7125b2ef8c",
          "english": "Chinese",
          "chinese": "中文",
          "pinyin": "zhōngwén",
          "order": 5
        },
        {
          "id": "2ec50647-da65-44b0-add0-8ea7e07e71e2",
          "english": "middle",
          "chinese": "中间",
          "pinyin": "zhōngjiān",
          "order": 6
        },
        {
          "id": "15f8dd1c-671c-47b3-bc45-6a2092c9614c",
          "english": "finally",
          "chinese": "终于",
          "pinyin": "zhōngyú",
          "order": 7
        },
        {
          "id": "9cdfaf7c-f3e8-40cf-b7d1-5f335a07bb21",
          "english": "kind",
          "chinese": "种",
          "pinyin": "zhǒng",
          "order": 8
        },
        {
          "id": "25fe9a7c-43f1-4153-8346-ff9c1b8fbcf7",
          "english": "important",
          "chinese": "重要",
          "pinyin": "zhòngyào",
          "order": 9
        }
      ]
    },
    {
      "id": "47986e4a-cfbb-42ef-b1d5-1a89363be32d",
      "name": "HSK 3 29",
      "description": "HSK 3 29 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "7b081e83-63d6-44be-8e85-8d83ac01097d",
          "english": "cloud",
          "chinese": "词190",
          "pinyin": "cí190",
          "order": 0
        },
        {
          "id": "718016e8-734f-462b-acf8-5d34ecf31fcd",
          "english": "club",
          "chinese": "词191",
          "pinyin": "cí191",
          "order": 1
        },
        {
          "id": "0677b7d2-695e-4bb5-aa96-9e7934fe3035",
          "english": "coach",
          "chinese": "词192",
          "pinyin": "cí192",
          "order": 2
        },
        {
          "id": "43ef265a-6934-49db-bb26-9b1f9519c526",
          "english": "coast",
          "chinese": "词193",
          "pinyin": "cí193",
          "order": 3
        },
        {
          "id": "577372d1-f5c5-4531-9c02-5c01aedef020",
          "english": "coffee",
          "chinese": "词194",
          "pinyin": "cí194",
          "order": 4
        },
        {
          "id": "19486f16-dc2f-44bc-8b9f-1b006454c09a",
          "english": "cold",
          "chinese": "词195",
          "pinyin": "cí195",
          "order": 5
        },
        {
          "id": "f04cd9e7-fb2f-4ee9-a12a-b66517180a66",
          "english": "collect",
          "chinese": "词196",
          "pinyin": "cí196",
          "order": 6
        },
        {
          "id": "8618ef00-3c79-4358-84c5-d41ae47506c6",
          "english": "collection",
          "chinese": "词197",
          "pinyin": "cí197",
          "order": 7
        },
        {
          "id": "43ca38a9-034a-4090-a7c3-efafa7299b7b",
          "english": "college",
          "chinese": "词198",
          "pinyin": "cí198",
          "order": 8
        },
        {
          "id": "5a59fefb-9526-49b0-b699-bcfcb320ee0a",
          "english": "color",
          "chinese": "词199",
          "pinyin": "cí199",
          "order": 9
        }
      ]
    },
    {
      "id": "299ef471-a274-4a90-9b1a-da47d9c2c8ac",
      "name": "HSK 3 29",
      "description": "HSK 3 29 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "556c1776-e7fb-43b2-8f23-fdda94c1cb50",
          "english": "weekend",
          "chinese": "周末",
          "pinyin": "zhōumò",
          "order": 0
        },
        {
          "id": "898e7ee8-f8a7-482d-9503-28dc4bf46c58",
          "english": "main",
          "chinese": "主要",
          "pinyin": "zhǔyào",
          "order": 1
        },
        {
          "id": "50ff4f98-c98d-492a-bbef-bae9ef4ea9d6",
          "english": "pay attention",
          "chinese": "注意",
          "pinyin": "zhùyì",
          "order": 2
        },
        {
          "id": "929913a0-cea0-49ef-9926-67d9009ca50a",
          "english": "self",
          "chinese": "自己",
          "pinyin": "zìjǐ",
          "order": 3
        },
        {
          "id": "8b2667f5-7e85-4ed0-b345-b53282246c35",
          "english": "bicycle",
          "chinese": "自行车",
          "pinyin": "zìxíngchē",
          "order": 4
        },
        {
          "id": "f933cfd6-6b25-4993-a520-2359532dc981",
          "english": "always",
          "chinese": "总是",
          "pinyin": "zǒngshì",
          "order": 5
        },
        {
          "id": "004c8214-19ee-4c2c-a38c-4a63a02b813e",
          "english": "mouth",
          "chinese": "嘴",
          "pinyin": "zuǐ",
          "order": 6
        },
        {
          "id": "c0f64558-783c-4771-8ef1-d530201540e0",
          "english": "finally",
          "chinese": "最后",
          "pinyin": "zuìhòu",
          "order": 7
        },
        {
          "id": "169c7520-d47a-4b56-a880-c0a39e38d334",
          "english": "recently",
          "chinese": "最近",
          "pinyin": "zuìjìn",
          "order": 8
        },
        {
          "id": "fb1fedd7-01e1-476d-8b85-199b8fc70392",
          "english": "homework",
          "chinese": "作业",
          "pinyin": "zuòyè",
          "order": 9
        }
      ]
    },
    {
      "id": "29ccebad-6c34-4e23-92fe-fe9fbd742a01",
      "name": "HSK 3 3",
      "description": "HSK 3 3 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "ee43e938-eda1-45d2-bb48-ee492a00162f",
          "english": "refrigerator",
          "chinese": "冰箱",
          "pinyin": "bīngxiāng",
          "order": 0
        },
        {
          "id": "e1f98bf1-e595-4dbe-9c3a-a3298cef29a8",
          "english": "menu",
          "chinese": "菜单",
          "pinyin": "càidān",
          "order": 1
        },
        {
          "id": "f0056e6b-0525-40d8-9678-d5fc439db17b",
          "english": "participate",
          "chinese": "参加",
          "pinyin": "cānjiā",
          "order": 2
        },
        {
          "id": "30c59377-b5eb-4122-9421-e2e17ed5c0aa",
          "english": "grass",
          "chinese": "草",
          "pinyin": "cǎo",
          "order": 3
        },
        {
          "id": "9e3192cd-0152-487f-9ad7-41940105d470",
          "english": "layer",
          "chinese": "层",
          "pinyin": "céng",
          "order": 4
        },
        {
          "id": "3ce0292b-998e-450d-9243-4e37c8e0c7d1",
          "english": "bad, poor",
          "chinese": "差",
          "pinyin": "chà",
          "order": 5
        },
        {
          "id": "76b572ba-ce0e-4902-b00b-35aa81935f0f",
          "english": "supermarket",
          "chinese": "超市",
          "pinyin": "chāoshì",
          "order": 6
        },
        {
          "id": "751ea5d3-736d-4681-ad07-9f26175c7bfc",
          "english": "shirt",
          "chinese": "衬衫",
          "pinyin": "chènshān",
          "order": 7
        },
        {
          "id": "87496d23-c342-4ea0-9fcf-55da609228a8",
          "english": "achievement",
          "chinese": "成绩",
          "pinyin": "chéngjì",
          "order": 8
        },
        {
          "id": "7c9d4eb4-e697-4b40-8fe8-123b0d62d6a8",
          "english": "city",
          "chinese": "城市",
          "pinyin": "chéngshì",
          "order": 9
        }
      ]
    },
    {
      "id": "71692544-0b00-44e4-8e6f-d2cb35e1edc3",
      "name": "HSK 3 30",
      "description": "HSK 3 30 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "c2b0ccd7-4adf-4f40-a06a-c50584fa8bb6",
          "english": "column",
          "chinese": "词200",
          "pinyin": "cí200",
          "order": 0
        },
        {
          "id": "12282eb9-8f12-4622-b434-d40334945002",
          "english": "combination",
          "chinese": "词201",
          "pinyin": "cí201",
          "order": 1
        },
        {
          "id": "f7d40e6b-46c6-4b99-b732-1f243bd8d78a",
          "english": "combine",
          "chinese": "词202",
          "pinyin": "cí202",
          "order": 2
        },
        {
          "id": "631b2f7d-4c8e-46a3-9967-0d5dd9a19489",
          "english": "comfort",
          "chinese": "词203",
          "pinyin": "cí203",
          "order": 3
        },
        {
          "id": "682cb872-998f-4697-9b24-9a796fb5bb00",
          "english": "comfortable",
          "chinese": "词204",
          "pinyin": "cí204",
          "order": 4
        },
        {
          "id": "acfa0f45-c112-4c5f-a0ad-d1ef8fb8cdfa",
          "english": "command",
          "chinese": "词205",
          "pinyin": "cí205",
          "order": 5
        },
        {
          "id": "ebf50429-40f4-4b68-9806-05ccb9537050",
          "english": "comment",
          "chinese": "词206",
          "pinyin": "cí206",
          "order": 6
        },
        {
          "id": "32f35981-f522-4ede-bf58-82606999b564",
          "english": "commercial",
          "chinese": "词207",
          "pinyin": "cí207",
          "order": 7
        },
        {
          "id": "69ebf67b-0043-4506-87e7-5ecb3a6855c4",
          "english": "commission",
          "chinese": "词208",
          "pinyin": "cí208",
          "order": 8
        },
        {
          "id": "bc9950a6-bdf3-403a-83e4-73f0480be726",
          "english": "commit",
          "chinese": "词209",
          "pinyin": "cí209",
          "order": 9
        }
      ]
    },
    {
      "id": "99a767bd-df82-40cd-95f2-fb1fe4f1e5fc",
      "name": "HSK 3 31",
      "description": "HSK 3 31 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "7e7c2317-0983-4877-b17d-49652e472b3f",
          "english": "commitment",
          "chinese": "词210",
          "pinyin": "cí210",
          "order": 0
        },
        {
          "id": "70f8efd5-2bda-4809-97c1-63a28195a508",
          "english": "committee",
          "chinese": "词211",
          "pinyin": "cí211",
          "order": 1
        },
        {
          "id": "d4713545-bdaa-466b-8678-0db9ecd2fccb",
          "english": "common",
          "chinese": "词212",
          "pinyin": "cí212",
          "order": 2
        },
        {
          "id": "b03e57ba-01de-4d32-bfe7-6589c873f9f9",
          "english": "communicate",
          "chinese": "词213",
          "pinyin": "cí213",
          "order": 3
        },
        {
          "id": "e9cfd0e1-2515-45bf-aee9-f198f52ab717",
          "english": "communication",
          "chinese": "词214",
          "pinyin": "cí214",
          "order": 4
        },
        {
          "id": "bec3f60e-b16c-4f6e-9e92-8c9505104e13",
          "english": "community",
          "chinese": "词215",
          "pinyin": "cí215",
          "order": 5
        },
        {
          "id": "05819a68-b390-402e-ae8a-c87ff451cbfd",
          "english": "company",
          "chinese": "词216",
          "pinyin": "cí216",
          "order": 6
        },
        {
          "id": "35816a4d-5b30-4604-ab0d-c6866d8c2a19",
          "english": "compare",
          "chinese": "词217",
          "pinyin": "cí217",
          "order": 7
        },
        {
          "id": "99585f78-c8d5-460d-be80-7a348cf3e001",
          "english": "comparison",
          "chinese": "词218",
          "pinyin": "cí218",
          "order": 8
        },
        {
          "id": "b9f17d77-5daf-44cd-80d7-ce6bdf2096fe",
          "english": "compete",
          "chinese": "词219",
          "pinyin": "cí219",
          "order": 9
        }
      ]
    },
    {
      "id": "da2f48b0-adc7-4175-913e-bb1525709033",
      "name": "HSK 3 32",
      "description": "HSK 3 32 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "0b08dc94-12e1-451b-b48f-d86c2450f268",
          "english": "competition",
          "chinese": "词220",
          "pinyin": "cí220",
          "order": 0
        },
        {
          "id": "338da7b1-867b-4003-99d9-90cf466a35ec",
          "english": "competitive",
          "chinese": "词221",
          "pinyin": "cí221",
          "order": 1
        },
        {
          "id": "575da2dc-1f20-4edd-8652-b4ae5b3ed521",
          "english": "competitor",
          "chinese": "词222",
          "pinyin": "cí222",
          "order": 2
        },
        {
          "id": "7bddfa06-89d3-45a6-b47b-bde958c55f1c",
          "english": "complain",
          "chinese": "词223",
          "pinyin": "cí223",
          "order": 3
        },
        {
          "id": "065c3258-71f5-4b30-ac9c-af73090d3817",
          "english": "complaint",
          "chinese": "词224",
          "pinyin": "cí224",
          "order": 4
        },
        {
          "id": "f2c3c854-181b-4154-a0dc-7370cfcc8671",
          "english": "complete",
          "chinese": "词225",
          "pinyin": "cí225",
          "order": 5
        },
        {
          "id": "ba7eebc1-d9f6-48d4-afef-2de72040e200",
          "english": "complex",
          "chinese": "词226",
          "pinyin": "cí226",
          "order": 6
        },
        {
          "id": "f95662f2-9d1a-40f4-9910-80370eebab10",
          "english": "component",
          "chinese": "词227",
          "pinyin": "cí227",
          "order": 7
        },
        {
          "id": "16038630-09d0-439a-bc67-3c3e7990b069",
          "english": "computer",
          "chinese": "词228",
          "pinyin": "cí228",
          "order": 8
        },
        {
          "id": "7a8b2bc9-28af-447c-825d-405d89684167",
          "english": "concept",
          "chinese": "词229",
          "pinyin": "cí229",
          "order": 9
        }
      ]
    },
    {
      "id": "a6e1852d-89eb-4b1c-b28d-411cb81516cd",
      "name": "HSK 3 33",
      "description": "HSK 3 33 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "855acfe5-25a4-4af0-8557-462c94613c71",
          "english": "concern",
          "chinese": "词230",
          "pinyin": "cí230",
          "order": 0
        },
        {
          "id": "b4ad2d13-74fd-4042-bea7-11b4253d7d79",
          "english": "concerned",
          "chinese": "词231",
          "pinyin": "cí231",
          "order": 1
        },
        {
          "id": "bdec8e9d-7ec6-4090-a6e0-8c13db10483e",
          "english": "concert",
          "chinese": "词232",
          "pinyin": "cí232",
          "order": 2
        },
        {
          "id": "c592d100-b038-4b36-9f01-d5304324f2da",
          "english": "conclusion",
          "chinese": "词233",
          "pinyin": "cí233",
          "order": 3
        },
        {
          "id": "d530e867-bf2a-4dda-9837-d41a354721e4",
          "english": "condition",
          "chinese": "词234",
          "pinyin": "cí234",
          "order": 4
        },
        {
          "id": "d02a52df-ead3-4eb3-a573-5d1ba20c6481",
          "english": "conduct",
          "chinese": "词235",
          "pinyin": "cí235",
          "order": 5
        },
        {
          "id": "e248d05c-4c19-4012-b4eb-9667c89201a0",
          "english": "conference",
          "chinese": "词236",
          "pinyin": "cí236",
          "order": 6
        },
        {
          "id": "ae88d4f5-d9a8-48dd-ad27-05d38723821f",
          "english": "confidence",
          "chinese": "词237",
          "pinyin": "cí237",
          "order": 7
        },
        {
          "id": "deff28a9-dcae-4300-910a-7c35c9bb8ff8",
          "english": "confident",
          "chinese": "词238",
          "pinyin": "cí238",
          "order": 8
        },
        {
          "id": "670da92e-e7b1-4139-aaa4-e4bb0471c739",
          "english": "confirm",
          "chinese": "词239",
          "pinyin": "cí239",
          "order": 9
        }
      ]
    },
    {
      "id": "3b95adc2-d505-4dd6-9e33-55341f1f3cff",
      "name": "HSK 3 34",
      "description": "HSK 3 34 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "6a7af408-8683-408f-82c0-6b362233b066",
          "english": "conflict",
          "chinese": "词240",
          "pinyin": "cí240",
          "order": 0
        },
        {
          "id": "c86d40c2-8f1c-41f6-a92d-21e78652929f",
          "english": "confused",
          "chinese": "词241",
          "pinyin": "cí241",
          "order": 1
        },
        {
          "id": "3f4be382-5572-4a91-88ae-bf20f78b2af0",
          "english": "congress",
          "chinese": "词242",
          "pinyin": "cí242",
          "order": 2
        },
        {
          "id": "fb47d138-509b-405e-8b7b-e5bcba69c102",
          "english": "connect",
          "chinese": "词243",
          "pinyin": "cí243",
          "order": 3
        },
        {
          "id": "9117e6c7-9485-4c60-a48a-5bba745fb4c6",
          "english": "connection",
          "chinese": "词244",
          "pinyin": "cí244",
          "order": 4
        },
        {
          "id": "92b32620-5a63-49e4-88d7-3f4924b2fa70",
          "english": "consciousness",
          "chinese": "词245",
          "pinyin": "cí245",
          "order": 5
        },
        {
          "id": "d8d349e7-2470-4926-ad5d-d2f670a4d9ac",
          "english": "consequence",
          "chinese": "词246",
          "pinyin": "cí246",
          "order": 6
        },
        {
          "id": "6c04e292-8bec-4fff-bd90-32baa5260cdc",
          "english": "conservative",
          "chinese": "词247",
          "pinyin": "cí247",
          "order": 7
        },
        {
          "id": "aa93166c-8c1b-4deb-8fbd-24214241e8c1",
          "english": "consider",
          "chinese": "词248",
          "pinyin": "cí248",
          "order": 8
        },
        {
          "id": "1c264e63-9e8a-47f3-8427-77b78bfced98",
          "english": "consideration",
          "chinese": "词249",
          "pinyin": "cí249",
          "order": 9
        }
      ]
    },
    {
      "id": "3bb19e6a-f97c-49be-9665-5f6f6feaa4b1",
      "name": "HSK 3 35",
      "description": "HSK 3 35 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "1c1b2b3d-93d7-46e5-851e-8e2d7f588b61",
          "english": "consist",
          "chinese": "词250",
          "pinyin": "cí250",
          "order": 0
        },
        {
          "id": "5589a7c7-63e1-479f-993b-22145ad84a74",
          "english": "consistent",
          "chinese": "词251",
          "pinyin": "cí251",
          "order": 1
        },
        {
          "id": "0122349e-cd29-4bdd-9814-099c3f940d33",
          "english": "constant",
          "chinese": "词252",
          "pinyin": "cí252",
          "order": 2
        },
        {
          "id": "0c336168-6a1f-49d8-997b-3b85984de763",
          "english": "constitute",
          "chinese": "词253",
          "pinyin": "cí253",
          "order": 3
        },
        {
          "id": "58e4ba87-1a0e-478e-bb4b-753817ec04f1",
          "english": "construction",
          "chinese": "词254",
          "pinyin": "cí254",
          "order": 4
        },
        {
          "id": "58cb7da0-5f2f-4dff-b9f3-d2c326d2fce1",
          "english": "consume",
          "chinese": "词255",
          "pinyin": "cí255",
          "order": 5
        },
        {
          "id": "b0500a94-1a52-4ec4-b4ca-ce54573b95f8",
          "english": "consumer",
          "chinese": "词256",
          "pinyin": "cí256",
          "order": 6
        },
        {
          "id": "228fa712-030b-43d8-b5d1-3070190b7d8d",
          "english": "contact",
          "chinese": "词257",
          "pinyin": "cí257",
          "order": 7
        },
        {
          "id": "f5d2d300-c9f0-4b72-bf7a-ae34b07196bd",
          "english": "contain",
          "chinese": "词258",
          "pinyin": "cí258",
          "order": 8
        },
        {
          "id": "ab5e1b5c-2fcc-4ac3-8170-41f5ed8adb0f",
          "english": "container",
          "chinese": "词259",
          "pinyin": "cí259",
          "order": 9
        }
      ]
    },
    {
      "id": "a2b01f6f-cae3-492b-8ad9-7357364ffa04",
      "name": "HSK 3 36",
      "description": "HSK 3 36 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "64c0ad2a-b18e-4066-996c-5be1c049d87b",
          "english": "content",
          "chinese": "词260",
          "pinyin": "cí260",
          "order": 0
        },
        {
          "id": "6c7f7ea0-9721-48de-8c7e-3ffff3d94a13",
          "english": "contest",
          "chinese": "词261",
          "pinyin": "cí261",
          "order": 1
        },
        {
          "id": "c1d61fe8-8d12-4d07-9a0b-5808cd74cdf5",
          "english": "context",
          "chinese": "词262",
          "pinyin": "cí262",
          "order": 2
        },
        {
          "id": "61e7f26e-2551-436a-a7c4-e42688a06fce",
          "english": "continue",
          "chinese": "词263",
          "pinyin": "cí263",
          "order": 3
        },
        {
          "id": "47ca3134-fd94-4a9f-abec-18224def5fc6",
          "english": "contract",
          "chinese": "词264",
          "pinyin": "cí264",
          "order": 4
        },
        {
          "id": "482a0313-bb4e-4ebf-a533-d2e940ccdfaa",
          "english": "contrast",
          "chinese": "词265",
          "pinyin": "cí265",
          "order": 5
        },
        {
          "id": "b80eb7da-9e9e-405a-ad96-4a5120d7ebb7",
          "english": "contribute",
          "chinese": "词266",
          "pinyin": "cí266",
          "order": 6
        },
        {
          "id": "23a8f88c-0e6a-4d6d-845d-1f8bd1dbe50b",
          "english": "contribution",
          "chinese": "词267",
          "pinyin": "cí267",
          "order": 7
        },
        {
          "id": "b7eabe1c-3d49-4e19-b1d8-2d50e2b4f659",
          "english": "control",
          "chinese": "词268",
          "pinyin": "cí268",
          "order": 8
        },
        {
          "id": "e92243c4-cdd9-4593-851d-e862b00fe75b",
          "english": "controversial",
          "chinese": "词269",
          "pinyin": "cí269",
          "order": 9
        }
      ]
    },
    {
      "id": "94f6ed21-45d0-4a44-9006-a0e4f8ea1f9e",
      "name": "HSK 3 37",
      "description": "HSK 3 37 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "31b9bc44-6417-449f-89ea-8f12190c66c7",
          "english": "conversation",
          "chinese": "词270",
          "pinyin": "cí270",
          "order": 0
        },
        {
          "id": "2275b0eb-615b-4438-befb-11b79c09564e",
          "english": "convert",
          "chinese": "词271",
          "pinyin": "cí271",
          "order": 1
        },
        {
          "id": "a5a1e2ce-62fd-4c29-b715-a13646870db4",
          "english": "convince",
          "chinese": "词272",
          "pinyin": "cí272",
          "order": 2
        },
        {
          "id": "66907617-4bda-4327-8270-fc439067d39c",
          "english": "cook",
          "chinese": "词273",
          "pinyin": "cí273",
          "order": 3
        },
        {
          "id": "4a6af783-5d91-4518-b09b-9b196da18359",
          "english": "cookie",
          "chinese": "词274",
          "pinyin": "cí274",
          "order": 4
        },
        {
          "id": "e941fc26-06a7-4cc3-a884-fc9a6cad944d",
          "english": "cooking",
          "chinese": "词275",
          "pinyin": "cí275",
          "order": 5
        },
        {
          "id": "6d9095f7-9eec-498f-bbb3-47e61a758525",
          "english": "cool",
          "chinese": "词276",
          "pinyin": "cí276",
          "order": 6
        },
        {
          "id": "f3cc9226-237c-4ee0-b5f3-5a0b4b4debfa",
          "english": "cooperation",
          "chinese": "词277",
          "pinyin": "cí277",
          "order": 7
        },
        {
          "id": "8e229855-2639-4a91-a325-da662c07abc0",
          "english": "copy",
          "chinese": "词278",
          "pinyin": "cí278",
          "order": 8
        },
        {
          "id": "3446f434-947d-4ab1-9a25-4cd249a022fa",
          "english": "corner",
          "chinese": "词279",
          "pinyin": "cí279",
          "order": 9
        }
      ]
    },
    {
      "id": "f3296941-a14d-4a03-9cc3-82ceab3f606a",
      "name": "HSK 3 38",
      "description": "HSK 3 38 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "c57b25a7-e44e-425e-930d-bda831f59940",
          "english": "corporate",
          "chinese": "词280",
          "pinyin": "cí280",
          "order": 0
        },
        {
          "id": "de8e032d-5f13-42b7-897b-fafbabce4780",
          "english": "correct",
          "chinese": "词281",
          "pinyin": "cí281",
          "order": 1
        },
        {
          "id": "d8c424bf-f532-40e7-a2cf-087040b883e2",
          "english": "cost",
          "chinese": "词282",
          "pinyin": "cí282",
          "order": 2
        },
        {
          "id": "763f4ffb-86a9-4996-992b-cde7bb17a2ee",
          "english": "cotton",
          "chinese": "词283",
          "pinyin": "cí283",
          "order": 3
        },
        {
          "id": "53fba262-d6f3-483f-a31c-8eb612363492",
          "english": "could",
          "chinese": "词284",
          "pinyin": "cí284",
          "order": 4
        },
        {
          "id": "67beda94-4026-4bd4-8a54-2c9edaf7cbf3",
          "english": "council",
          "chinese": "词285",
          "pinyin": "cí285",
          "order": 5
        },
        {
          "id": "d0130c84-7083-4893-b57c-8f8fe3b86561",
          "english": "count",
          "chinese": "词286",
          "pinyin": "cí286",
          "order": 6
        },
        {
          "id": "7f47b288-235d-439e-8cb9-868739334e95",
          "english": "counter",
          "chinese": "词287",
          "pinyin": "cí287",
          "order": 7
        },
        {
          "id": "79f9c448-93a9-4074-ab32-8c088fea3c24",
          "english": "country",
          "chinese": "词288",
          "pinyin": "cí288",
          "order": 8
        },
        {
          "id": "f0edafc1-579a-4403-bf3b-7db68aadab10",
          "english": "county",
          "chinese": "词289",
          "pinyin": "cí289",
          "order": 9
        }
      ]
    },
    {
      "id": "49deb3bc-be9a-4e8c-8ef7-bd0263cd10e7",
      "name": "HSK 3 39",
      "description": "HSK 3 39 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "02709a3a-0d3b-451d-b1a2-d05fe7ca0e60",
          "english": "couple",
          "chinese": "词290",
          "pinyin": "cí290",
          "order": 0
        },
        {
          "id": "800a4793-acb0-42e0-a902-dccf712eacd8",
          "english": "courage",
          "chinese": "词291",
          "pinyin": "cí291",
          "order": 1
        },
        {
          "id": "7c828f39-2e37-45a0-87d5-fb93c3373cdf",
          "english": "course",
          "chinese": "词292",
          "pinyin": "cí292",
          "order": 2
        },
        {
          "id": "2653fb3b-a877-42cf-8198-0f0119838819",
          "english": "court",
          "chinese": "词293",
          "pinyin": "cí293",
          "order": 3
        },
        {
          "id": "8b1a2d61-3b97-4562-8c53-b1b3a060131e",
          "english": "cover",
          "chinese": "词294",
          "pinyin": "cí294",
          "order": 4
        },
        {
          "id": "523df958-3596-4734-8955-c7cb5cfb949d",
          "english": "coverage",
          "chinese": "词295",
          "pinyin": "cí295",
          "order": 5
        },
        {
          "id": "e4297eaf-87a3-415f-8d36-f90fa068d6fa",
          "english": "crack",
          "chinese": "词296",
          "pinyin": "cí296",
          "order": 6
        },
        {
          "id": "1474db04-707b-48db-99ad-28091a76997d",
          "english": "craft",
          "chinese": "词297",
          "pinyin": "cí297",
          "order": 7
        },
        {
          "id": "fe975245-3ab6-4ad5-bc9d-880f6ecdbc9f",
          "english": "crash",
          "chinese": "词298",
          "pinyin": "cí298",
          "order": 8
        },
        {
          "id": "60440f75-01c7-4c34-b38b-e96d7d913f88",
          "english": "crazy",
          "chinese": "词299",
          "pinyin": "cí299",
          "order": 9
        }
      ]
    },
    {
      "id": "20edb7d3-258d-47c4-8f1b-b1a75da8923b",
      "name": "HSK 3 4",
      "description": "HSK 3 4 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "ab282f06-a467-4bfe-b042-979fb09b8856",
          "english": "be late",
          "chinese": "迟到",
          "pinyin": "chídào",
          "order": 0
        },
        {
          "id": "260593c8-bb8b-4afa-a730-53033455de5e",
          "english": "except",
          "chinese": "除了",
          "pinyin": "chúle",
          "order": 1
        },
        {
          "id": "8f19f8fb-2cd3-4772-a636-dadaebd30e55",
          "english": "ship",
          "chinese": "船",
          "pinyin": "chuán",
          "order": 2
        },
        {
          "id": "b36706f9-509b-42da-b483-b7631c4702f2",
          "english": "spring",
          "chinese": "春",
          "pinyin": "chūn",
          "order": 3
        },
        {
          "id": "30a199b9-ad0c-4457-8ad0-e51c40a62d5c",
          "english": "dictionary",
          "chinese": "词典",
          "pinyin": "cídiǎn",
          "order": 4
        },
        {
          "id": "3cf178ab-cbb4-4bf6-8856-c7d15a5cdaed",
          "english": "clever",
          "chinese": "聪明",
          "pinyin": "cōngming",
          "order": 5
        },
        {
          "id": "d3864305-3f4a-45f0-810d-62d1a38d1895",
          "english": "clean",
          "chinese": "打扫",
          "pinyin": "dǎsǎo",
          "order": 6
        },
        {
          "id": "aea2bb01-165c-4e36-8b91-476b45c5ebc7",
          "english": "plan",
          "chinese": "打算",
          "pinyin": "dǎsuàn",
          "order": 7
        },
        {
          "id": "272b1863-bdde-4695-a8cf-5401e9bb82e1",
          "english": "bring",
          "chinese": "带",
          "pinyin": "dài",
          "order": 8
        },
        {
          "id": "e23756f1-ebd8-41ec-8579-83f79ad0ddb8",
          "english": "worry",
          "chinese": "担心",
          "pinyin": "dānxīn",
          "order": 9
        }
      ]
    },
    {
      "id": "bda0e3d5-a3c5-4194-8877-cd6a5cdd6746",
      "name": "HSK 3 40",
      "description": "HSK 3 40 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "c65222f0-dc1c-4e43-956f-5cf79541c1ee",
          "english": "cream",
          "chinese": "词300",
          "pinyin": "cí300",
          "order": 0
        },
        {
          "id": "33dedaee-1e09-4e21-bc99-d565e0f2e2ec",
          "english": "create",
          "chinese": "词301",
          "pinyin": "cí301",
          "order": 1
        },
        {
          "id": "4440c85d-c08b-4a4e-a212-b39fceab819e",
          "english": "creation",
          "chinese": "词302",
          "pinyin": "cí302",
          "order": 2
        },
        {
          "id": "b893fa1b-e8f5-48dd-b493-5ff5f00d9572",
          "english": "creative",
          "chinese": "词303",
          "pinyin": "cí303",
          "order": 3
        },
        {
          "id": "6a98d1e7-d40c-4335-b281-e88048fa0f4c",
          "english": "creator",
          "chinese": "词304",
          "pinyin": "cí304",
          "order": 4
        },
        {
          "id": "5e8eaa55-c117-41a6-af1a-04e06042db1d",
          "english": "credit",
          "chinese": "词305",
          "pinyin": "cí305",
          "order": 5
        },
        {
          "id": "9fd3a58e-bbf5-441e-ae60-eef5b570697f",
          "english": "crew",
          "chinese": "词306",
          "pinyin": "cí306",
          "order": 6
        },
        {
          "id": "7324d371-c8a9-47a9-82cb-f2143146bbeb",
          "english": "crime",
          "chinese": "词307",
          "pinyin": "cí307",
          "order": 7
        },
        {
          "id": "dd61c650-d634-41d4-9089-51c70ee6bb6f",
          "english": "criminal",
          "chinese": "词308",
          "pinyin": "cí308",
          "order": 8
        },
        {
          "id": "f13147a9-a8b8-428e-9b01-2b520a43d12b",
          "english": "crisis",
          "chinese": "词309",
          "pinyin": "cí309",
          "order": 9
        }
      ]
    },
    {
      "id": "bdb8dd21-8316-4f89-9299-23258d39cd29",
      "name": "HSK 3 41",
      "description": "HSK 3 41 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "d3d8a13b-4132-47a6-86e8-c8cd950ba473",
          "english": "criteria",
          "chinese": "词310",
          "pinyin": "cí310",
          "order": 0
        },
        {
          "id": "f351bb99-a7b3-490e-a3fb-7b66560ff467",
          "english": "critic",
          "chinese": "词311",
          "pinyin": "cí311",
          "order": 1
        },
        {
          "id": "1484b559-86f9-40fe-a334-d5a1887a7778",
          "english": "critical",
          "chinese": "词312",
          "pinyin": "cí312",
          "order": 2
        },
        {
          "id": "5791b12d-cb47-42ea-b2a1-46d6754c6f84",
          "english": "criticism",
          "chinese": "词313",
          "pinyin": "cí313",
          "order": 3
        },
        {
          "id": "c4d39f8a-c4af-4a59-a78c-d7ad10826972",
          "english": "criticize",
          "chinese": "词314",
          "pinyin": "cí314",
          "order": 4
        },
        {
          "id": "f7408018-5fc0-41e9-be7c-3fc55f20f313",
          "english": "crop",
          "chinese": "词315",
          "pinyin": "cí315",
          "order": 5
        },
        {
          "id": "59334444-b0cb-49e8-8f8f-405d34dad920",
          "english": "cross",
          "chinese": "词316",
          "pinyin": "cí316",
          "order": 6
        },
        {
          "id": "df2e30a5-22b1-4a87-9e05-5e848d2c75e5",
          "english": "crowd",
          "chinese": "词317",
          "pinyin": "cí317",
          "order": 7
        },
        {
          "id": "15fe2c52-5570-4751-b3c0-9de70416384a",
          "english": "crucial",
          "chinese": "词318",
          "pinyin": "cí318",
          "order": 8
        },
        {
          "id": "87f4cc6b-af9a-468a-8824-06bd134d6b0c",
          "english": "cruise",
          "chinese": "词319",
          "pinyin": "cí319",
          "order": 9
        }
      ]
    },
    {
      "id": "adfd6dd5-d798-4011-962c-419db641bcab",
      "name": "HSK 3 42",
      "description": "HSK 3 42 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "bc70655d-a8a2-46d3-ad1b-8c624aa0cb50",
          "english": "culture",
          "chinese": "词320",
          "pinyin": "cí320",
          "order": 0
        },
        {
          "id": "1c02790c-91f8-404a-85ac-1bde6c0cf9b3",
          "english": "cup",
          "chinese": "词321",
          "pinyin": "cí321",
          "order": 1
        },
        {
          "id": "0815937a-8132-4b93-87af-626e0d21e9cd",
          "english": "curious",
          "chinese": "词322",
          "pinyin": "cí322",
          "order": 2
        },
        {
          "id": "8011e87b-5868-4166-b59a-0f97e5eb7c3c",
          "english": "current",
          "chinese": "词323",
          "pinyin": "cí323",
          "order": 3
        },
        {
          "id": "5f9e3fe5-b610-4507-abed-77a93ee3c16d",
          "english": "currently",
          "chinese": "词324",
          "pinyin": "cí324",
          "order": 4
        },
        {
          "id": "3a1c23ee-a224-4f07-a986-e252665345f9",
          "english": "curve",
          "chinese": "词325",
          "pinyin": "cí325",
          "order": 5
        },
        {
          "id": "19274df6-0abd-4051-aacb-8c9267fbd26b",
          "english": "custom",
          "chinese": "词326",
          "pinyin": "cí326",
          "order": 6
        },
        {
          "id": "3dff187d-d8ec-460f-8fdf-e04d3549f3cd",
          "english": "customer",
          "chinese": "词327",
          "pinyin": "cí327",
          "order": 7
        },
        {
          "id": "15553633-6ead-4033-ab4e-98ad740c5653",
          "english": "cycle",
          "chinese": "词328",
          "pinyin": "cí328",
          "order": 8
        },
        {
          "id": "2e8bcf5b-02b2-44de-8971-c5d2c01f7351",
          "english": "daily",
          "chinese": "词329",
          "pinyin": "cí329",
          "order": 9
        }
      ]
    },
    {
      "id": "c546814b-7c2e-47e0-aab6-05679c65ff44",
      "name": "HSK 3 43",
      "description": "HSK 3 43 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "edd36fb3-39a4-42d5-830e-26a8b1f43047",
          "english": "damage",
          "chinese": "词330",
          "pinyin": "cí330",
          "order": 0
        },
        {
          "id": "440a8f61-e007-4d82-b544-03f4d70e85f6",
          "english": "dance",
          "chinese": "词331",
          "pinyin": "cí331",
          "order": 1
        },
        {
          "id": "6b8fc577-8964-42f1-97f1-f7fbd6811811",
          "english": "danger",
          "chinese": "词332",
          "pinyin": "cí332",
          "order": 2
        },
        {
          "id": "d60a5d4c-1d81-4747-a0f9-904d3b96ebe6",
          "english": "dangerous",
          "chinese": "词333",
          "pinyin": "cí333",
          "order": 3
        },
        {
          "id": "0e409229-0921-4c46-b1fc-eb012a6daa8c",
          "english": "dark",
          "chinese": "词334",
          "pinyin": "cí334",
          "order": 4
        },
        {
          "id": "65f62fab-dde2-4992-87a1-de8b414fb7de",
          "english": "darkness",
          "chinese": "词335",
          "pinyin": "cí335",
          "order": 5
        },
        {
          "id": "05a63027-5d77-4eb1-a130-b4781e1a949a",
          "english": "data",
          "chinese": "词336",
          "pinyin": "cí336",
          "order": 6
        },
        {
          "id": "249bcb7e-bccc-45ba-8792-93028451c205",
          "english": "date",
          "chinese": "词337",
          "pinyin": "cí337",
          "order": 7
        },
        {
          "id": "4876b85b-7215-4b32-943b-de0a8c08b445",
          "english": "daughter",
          "chinese": "词338",
          "pinyin": "cí338",
          "order": 8
        },
        {
          "id": "26e35e19-25c3-40a8-bba8-53b18932c740",
          "english": "deal",
          "chinese": "词339",
          "pinyin": "cí339",
          "order": 9
        }
      ]
    },
    {
      "id": "a5d5a31b-bc09-47c4-8b36-678d16ce3ab7",
      "name": "HSK 3 44",
      "description": "HSK 3 44 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "74375969-8bc9-4ea0-a74a-bd2521991b4a",
          "english": "dealer",
          "chinese": "词340",
          "pinyin": "cí340",
          "order": 0
        },
        {
          "id": "f346969f-058f-4b2c-93e9-7435cca33ae5",
          "english": "dear",
          "chinese": "词341",
          "pinyin": "cí341",
          "order": 1
        },
        {
          "id": "7c5d8083-53b6-4cde-abd0-fa4cabc9154c",
          "english": "death",
          "chinese": "词342",
          "pinyin": "cí342",
          "order": 2
        },
        {
          "id": "fbdc6db9-33c1-4851-b409-ab8ab88f3887",
          "english": "debate",
          "chinese": "词343",
          "pinyin": "cí343",
          "order": 3
        },
        {
          "id": "58863b24-8bd8-454f-bb61-2644854d6c02",
          "english": "debt",
          "chinese": "词344",
          "pinyin": "cí344",
          "order": 4
        },
        {
          "id": "c18eeaf1-e733-4a22-8eb5-2201507dc37f",
          "english": "decade",
          "chinese": "词345",
          "pinyin": "cí345",
          "order": 5
        },
        {
          "id": "379a7703-6472-4f75-90ca-549f564db4b9",
          "english": "decide",
          "chinese": "词346",
          "pinyin": "cí346",
          "order": 6
        },
        {
          "id": "06ea938f-11a9-46e5-9c48-9942d1de3aad",
          "english": "decision",
          "chinese": "词347",
          "pinyin": "cí347",
          "order": 7
        },
        {
          "id": "2769fb89-475e-464b-bec6-cf0e6a0e849e",
          "english": "deck",
          "chinese": "词348",
          "pinyin": "cí348",
          "order": 8
        },
        {
          "id": "929df070-02db-4cfb-94a2-2010a9393753",
          "english": "declare",
          "chinese": "词349",
          "pinyin": "cí349",
          "order": 9
        }
      ]
    },
    {
      "id": "b7456a34-f0f9-4eaa-89a8-c3abf48ca0a4",
      "name": "HSK 3 45",
      "description": "HSK 3 45 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "71567af8-ec67-450b-875e-e8aedd554513",
          "english": "deep",
          "chinese": "词350",
          "pinyin": "cí350",
          "order": 0
        },
        {
          "id": "12659cd5-a675-4feb-8b80-2720673cfd8d",
          "english": "deeply",
          "chinese": "词351",
          "pinyin": "cí351",
          "order": 1
        },
        {
          "id": "3045b8d8-646b-48e0-8f5f-9c340f0b5e50",
          "english": "defeat",
          "chinese": "词352",
          "pinyin": "cí352",
          "order": 2
        },
        {
          "id": "e5aa4930-ab04-490d-82c0-b4f181e21f41",
          "english": "defend",
          "chinese": "词353",
          "pinyin": "cí353",
          "order": 3
        },
        {
          "id": "41860f33-bfa1-456d-9d56-520494b1bd4e",
          "english": "defense",
          "chinese": "词354",
          "pinyin": "cí354",
          "order": 4
        },
        {
          "id": "01501663-e19c-4f3b-a1d6-f186b4a1b43a",
          "english": "defensive",
          "chinese": "词355",
          "pinyin": "cí355",
          "order": 5
        },
        {
          "id": "3056bd13-139e-4b03-afe6-e265a850e60a",
          "english": "deficit",
          "chinese": "词356",
          "pinyin": "cí356",
          "order": 6
        },
        {
          "id": "0d3b9c6c-4e31-48f7-b569-f81d2a071499",
          "english": "define",
          "chinese": "词357",
          "pinyin": "cí357",
          "order": 7
        },
        {
          "id": "cbac31ad-3ba6-424b-af33-b0bbe613d0d8",
          "english": "definitely",
          "chinese": "词358",
          "pinyin": "cí358",
          "order": 8
        },
        {
          "id": "fff2d99b-bfdd-42f2-bf21-48fc5f52ee19",
          "english": "definition",
          "chinese": "词359",
          "pinyin": "cí359",
          "order": 9
        }
      ]
    },
    {
      "id": "a602e078-1131-4543-926c-b7a77dfe19cb",
      "name": "HSK 3 46",
      "description": "HSK 3 46 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "89027ea3-e576-401d-b633-83cd0c0dd638",
          "english": "degree",
          "chinese": "词360",
          "pinyin": "cí360",
          "order": 0
        },
        {
          "id": "3f0c4e42-9afe-489d-a37d-71b77caad6f7",
          "english": "deliver",
          "chinese": "词361",
          "pinyin": "cí361",
          "order": 1
        },
        {
          "id": "bca7dd9d-0efc-41a4-822e-c2048dd5aaeb",
          "english": "delivery",
          "chinese": "词362",
          "pinyin": "cí362",
          "order": 2
        },
        {
          "id": "362276dc-9612-4f97-be3a-30ff609f9f9e",
          "english": "demand",
          "chinese": "词363",
          "pinyin": "cí363",
          "order": 3
        },
        {
          "id": "e5eb3cc5-0332-4230-a162-44f59d458260",
          "english": "democratic",
          "chinese": "词364",
          "pinyin": "cí364",
          "order": 4
        },
        {
          "id": "78e6b5d8-37a5-4a4e-98e6-6a05baae4e3a",
          "english": "demonstrate",
          "chinese": "词365",
          "pinyin": "cí365",
          "order": 5
        },
        {
          "id": "62c55b09-89da-413b-9b28-ab23770cf5b8",
          "english": "demonstration",
          "chinese": "词366",
          "pinyin": "cí366",
          "order": 6
        },
        {
          "id": "6fd03ece-5c9d-4015-ac49-130db99f910c",
          "english": "department",
          "chinese": "词367",
          "pinyin": "cí367",
          "order": 7
        },
        {
          "id": "93ca6137-8ea6-47f7-8275-f3ce3a488a68",
          "english": "depend",
          "chinese": "词368",
          "pinyin": "cí368",
          "order": 8
        },
        {
          "id": "ff88bb0f-4b7c-471a-9adb-c87256e51bf4",
          "english": "dependent",
          "chinese": "词369",
          "pinyin": "cí369",
          "order": 9
        }
      ]
    },
    {
      "id": "64e6a969-2b66-445b-8960-e82323ebce17",
      "name": "HSK 3 47",
      "description": "HSK 3 47 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "7112c6cb-2c1a-48c7-b62b-d20f7a0e68b2",
          "english": "depending",
          "chinese": "词370",
          "pinyin": "cí370",
          "order": 0
        },
        {
          "id": "6da77508-c5ca-4ff8-995b-550bd96b81ad",
          "english": "depth",
          "chinese": "词371",
          "pinyin": "cí371",
          "order": 1
        },
        {
          "id": "5c28b2c2-adb0-40cf-b8bc-3c45f38cfcc7",
          "english": "derive",
          "chinese": "词372",
          "pinyin": "cí372",
          "order": 2
        },
        {
          "id": "43680fb5-69f9-4411-9035-41da829a7eb8",
          "english": "describe",
          "chinese": "词373",
          "pinyin": "cí373",
          "order": 3
        },
        {
          "id": "1f09c9da-5675-4a7c-9022-d4e49252c25b",
          "english": "description",
          "chinese": "词374",
          "pinyin": "cí374",
          "order": 4
        },
        {
          "id": "06538653-0150-4e2f-bdc3-88373ac69464",
          "english": "desert",
          "chinese": "词375",
          "pinyin": "cí375",
          "order": 5
        },
        {
          "id": "1e9786ba-65ab-454e-a714-ac8849e5b291",
          "english": "design",
          "chinese": "词376",
          "pinyin": "cí376",
          "order": 6
        },
        {
          "id": "40d867cc-c947-458c-bcd4-3cdbdae0ae61",
          "english": "designer",
          "chinese": "词377",
          "pinyin": "cí377",
          "order": 7
        },
        {
          "id": "e1b08754-aa47-4312-b9c9-761a522c21a4",
          "english": "desire",
          "chinese": "词378",
          "pinyin": "cí378",
          "order": 8
        },
        {
          "id": "7e3c68ba-de78-4b03-98f1-b2f21fb7998e",
          "english": "desk",
          "chinese": "词379",
          "pinyin": "cí379",
          "order": 9
        }
      ]
    },
    {
      "id": "effae061-0dc6-4440-b8c8-9c75676f5a29",
      "name": "HSK 3 48",
      "description": "HSK 3 48 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "8f5a813b-c817-4925-92fd-3f649776b20a",
          "english": "despite",
          "chinese": "词380",
          "pinyin": "cí380",
          "order": 0
        },
        {
          "id": "2e35238d-6b36-4e08-840d-062ab1b176fa",
          "english": "destroy",
          "chinese": "词381",
          "pinyin": "cí381",
          "order": 1
        },
        {
          "id": "6e4e934d-318b-4bfd-8c30-bc71f0baafbe",
          "english": "destruction",
          "chinese": "词382",
          "pinyin": "cí382",
          "order": 2
        },
        {
          "id": "0455cbce-a248-41e9-98cf-d6365746796a",
          "english": "detail",
          "chinese": "词383",
          "pinyin": "cí383",
          "order": 3
        },
        {
          "id": "809cae36-0bf8-40f9-a58c-4ecc28ec5b4d",
          "english": "detailed",
          "chinese": "词384",
          "pinyin": "cí384",
          "order": 4
        },
        {
          "id": "00e48fdd-d6e9-4a0a-8871-f4519056b8e1",
          "english": "detect",
          "chinese": "词385",
          "pinyin": "cí385",
          "order": 5
        },
        {
          "id": "7efb5926-a4da-4604-a314-3e1640c2eeb7",
          "english": "determine",
          "chinese": "词386",
          "pinyin": "cí386",
          "order": 6
        },
        {
          "id": "714ee6a2-9d22-40d3-8836-4a77b78e896e",
          "english": "develop",
          "chinese": "词387",
          "pinyin": "cí387",
          "order": 7
        },
        {
          "id": "4b653d11-6f8e-4fe1-a472-d7456cef7b7d",
          "english": "development",
          "chinese": "词388",
          "pinyin": "cí388",
          "order": 8
        },
        {
          "id": "371d1446-40e2-4b67-ab55-4bba77b78560",
          "english": "device",
          "chinese": "词389",
          "pinyin": "cí389",
          "order": 9
        }
      ]
    },
    {
      "id": "b53ac8e2-fd75-41b1-bb7b-a1207360dad0",
      "name": "HSK 3 49",
      "description": "HSK 3 49 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "acb4d8b3-6154-490b-8285-714d8d73a70f",
          "english": "dialogue",
          "chinese": "词390",
          "pinyin": "cí390",
          "order": 0
        },
        {
          "id": "94200c17-6a8b-42d7-bcb3-baf154ac5d03",
          "english": "diamond",
          "chinese": "词391",
          "pinyin": "cí391",
          "order": 1
        },
        {
          "id": "540083ec-2808-47f6-8800-8d56babb8be3",
          "english": "diary",
          "chinese": "词392",
          "pinyin": "cí392",
          "order": 2
        },
        {
          "id": "d69e464f-8ad7-4002-94a9-626c08168094",
          "english": "difference",
          "chinese": "词393",
          "pinyin": "cí393",
          "order": 3
        },
        {
          "id": "132b9641-1ed2-43b4-a7c9-c5a5cb33cf13",
          "english": "different",
          "chinese": "词394",
          "pinyin": "cí394",
          "order": 4
        },
        {
          "id": "3a8d0b5c-8fde-4a0e-b26a-5cb3632a0148",
          "english": "differently",
          "chinese": "词395",
          "pinyin": "cí395",
          "order": 5
        },
        {
          "id": "079e93b3-4a34-45c3-a562-0d87990b8fb6",
          "english": "difficult",
          "chinese": "词396",
          "pinyin": "cí396",
          "order": 6
        },
        {
          "id": "3b0bde35-1ad4-4f4a-85be-40fd9a5720f8",
          "english": "difficulty",
          "chinese": "词397",
          "pinyin": "cí397",
          "order": 7
        },
        {
          "id": "1f61b5c8-6600-4ab8-b849-af6ec27acdb0",
          "english": "digital",
          "chinese": "词398",
          "pinyin": "cí398",
          "order": 8
        },
        {
          "id": "3153d0a5-03d4-4c26-aee4-d47829b15847",
          "english": "dimension",
          "chinese": "词399",
          "pinyin": "cí399",
          "order": 9
        }
      ]
    },
    {
      "id": "75e61a17-b7f6-4f1b-94cd-fc37e85ba6b6",
      "name": "HSK 3 5",
      "description": "HSK 3 5 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "713d0c7a-2ea0-4277-9180-5ba34d2b18b9",
          "english": "cake",
          "chinese": "蛋糕",
          "pinyin": "dàngāo",
          "order": 0
        },
        {
          "id": "77c00796-fce8-4c6b-9953-2ea6bb36fc81",
          "english": "of course",
          "chinese": "当然",
          "pinyin": "dāngrán",
          "order": 1
        },
        {
          "id": "3ce5c4b0-757a-4ea7-8b5f-0ae8d4757da9",
          "english": "lamp",
          "chinese": "灯",
          "pinyin": "dēng",
          "order": 2
        },
        {
          "id": "4117f1dc-a40c-4400-9535-31a0650b4500",
          "english": "place",
          "chinese": "地方",
          "pinyin": "dìfang",
          "order": 3
        },
        {
          "id": "5b2da311-2cf6-4ce0-a5aa-a5eae27cef8d",
          "english": "subway",
          "chinese": "地铁",
          "pinyin": "dìtiě",
          "order": 4
        },
        {
          "id": "25caaa27-f7ce-4c7a-a66a-5b75ecb2a10e",
          "english": "map",
          "chinese": "地图",
          "pinyin": "dìtú",
          "order": 5
        },
        {
          "id": "45b57645-a4dd-4530-b916-373aeafd4d91",
          "english": "elevator",
          "chinese": "电梯",
          "pinyin": "diàntī",
          "order": 6
        },
        {
          "id": "cb3da1ad-c8d9-4525-8c13-2da043eb54fc",
          "english": "email",
          "chinese": "电子邮件",
          "pinyin": "diànzǐyóujiàn",
          "order": 7
        },
        {
          "id": "435913b6-bd1d-4cfb-bc50-81e888f80d39",
          "english": "east",
          "chinese": "东",
          "pinyin": "dōng",
          "order": 8
        },
        {
          "id": "762a7483-dabe-4018-9ffc-1824343c08c0",
          "english": "winter",
          "chinese": "冬",
          "pinyin": "dōng",
          "order": 9
        }
      ]
    },
    {
      "id": "cbc8633c-bada-4ff8-8ca0-498341bd3ae3",
      "name": "HSK 3 50",
      "description": "HSK 3 50 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "09c277ab-7e22-40b2-85a2-d98caaa073ec",
          "english": "dining",
          "chinese": "词400",
          "pinyin": "cí400",
          "order": 0
        },
        {
          "id": "561b39b8-4033-463e-b420-2610cce16141",
          "english": "dinner",
          "chinese": "词401",
          "pinyin": "cí401",
          "order": 1
        },
        {
          "id": "da2d8571-e110-460b-99e1-c7d9270e7411",
          "english": "direct",
          "chinese": "词402",
          "pinyin": "cí402",
          "order": 2
        },
        {
          "id": "a772855b-8698-49a5-9201-e7cbaa59406e",
          "english": "direction",
          "chinese": "词403",
          "pinyin": "cí403",
          "order": 3
        },
        {
          "id": "42bd6701-b736-4920-9b1e-d3378cacc99e",
          "english": "directly",
          "chinese": "词404",
          "pinyin": "cí404",
          "order": 4
        },
        {
          "id": "368fa7fc-cd70-4c47-ace1-46a48a43d3ee",
          "english": "director",
          "chinese": "词405",
          "pinyin": "cí405",
          "order": 5
        },
        {
          "id": "3d67ef81-ff0c-4e34-a51e-484bc22318a7",
          "english": "dirty",
          "chinese": "词406",
          "pinyin": "cí406",
          "order": 6
        },
        {
          "id": "ff7ece85-c720-44d0-87a8-7dece19380ed",
          "english": "disability",
          "chinese": "词407",
          "pinyin": "cí407",
          "order": 7
        },
        {
          "id": "288fd726-9077-4ca1-b5ba-a9429675e412",
          "english": "disagree",
          "chinese": "词408",
          "pinyin": "cí408",
          "order": 8
        },
        {
          "id": "6fce63cb-4a3c-4948-a7b6-99e2276d535e",
          "english": "disappear",
          "chinese": "词409",
          "pinyin": "cí409",
          "order": 9
        }
      ]
    },
    {
      "id": "b60e5c2e-aa46-48da-834c-5ff648c99950",
      "name": "HSK 3 51",
      "description": "HSK 3 51 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "6bcf2bc6-95f8-46bc-8a11-f5337986bd78",
          "english": "disaster",
          "chinese": "词410",
          "pinyin": "cí410",
          "order": 0
        },
        {
          "id": "ab01ca19-ef12-4b12-893b-39cd148be6c7",
          "english": "discipline",
          "chinese": "词411",
          "pinyin": "cí411",
          "order": 1
        },
        {
          "id": "2bbc650d-4247-4629-8213-3c22d514089b",
          "english": "discover",
          "chinese": "词412",
          "pinyin": "cí412",
          "order": 2
        },
        {
          "id": "2b479797-0dd1-447e-890d-5f4811001e16",
          "english": "discovery",
          "chinese": "词413",
          "pinyin": "cí413",
          "order": 3
        },
        {
          "id": "49197dab-d51a-4647-872f-155eca54ae3d",
          "english": "discuss",
          "chinese": "词414",
          "pinyin": "cí414",
          "order": 4
        },
        {
          "id": "9661abb5-55ca-45c0-a562-31d1b9e24529",
          "english": "discussion",
          "chinese": "词415",
          "pinyin": "cí415",
          "order": 5
        },
        {
          "id": "a9d0c8ce-48b8-46f6-8921-832884aafc74",
          "english": "disease",
          "chinese": "词416",
          "pinyin": "cí416",
          "order": 6
        },
        {
          "id": "b46f11e6-7b0b-4f47-a6ce-6f90a593a552",
          "english": "dish",
          "chinese": "词417",
          "pinyin": "cí417",
          "order": 7
        },
        {
          "id": "15d6be5f-ec1d-40cc-b9d5-5a79cdc76b8d",
          "english": "dismiss",
          "chinese": "词418",
          "pinyin": "cí418",
          "order": 8
        },
        {
          "id": "6137a921-daf7-4cec-a090-dea2b04809ba",
          "english": "disorder",
          "chinese": "词419",
          "pinyin": "cí419",
          "order": 9
        }
      ]
    },
    {
      "id": "6a3bfa7f-f91e-48bf-b91d-dcab51e1104c",
      "name": "HSK 3 52",
      "description": "HSK 3 52 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "b88e29fc-6b45-4f70-a925-ef95e96b96a3",
          "english": "display",
          "chinese": "词420",
          "pinyin": "cí420",
          "order": 0
        },
        {
          "id": "ef9195c9-b473-4f69-846a-a5fa059869da",
          "english": "distance",
          "chinese": "词421",
          "pinyin": "cí421",
          "order": 1
        },
        {
          "id": "2155bc63-86cb-419d-8d6a-fdeade17c09a",
          "english": "distribution",
          "chinese": "词422",
          "pinyin": "cí422",
          "order": 2
        },
        {
          "id": "d48f0ef0-414f-4cc3-a322-b4f2212da135",
          "english": "district",
          "chinese": "词423",
          "pinyin": "cí423",
          "order": 3
        },
        {
          "id": "98eb6d6c-68b1-45cc-92e7-59b3d7f72ba7",
          "english": "divide",
          "chinese": "词424",
          "pinyin": "cí424",
          "order": 4
        },
        {
          "id": "1caf2b49-8cba-41ed-8d2c-4d5a1a2b8ca0",
          "english": "division",
          "chinese": "词425",
          "pinyin": "cí425",
          "order": 5
        },
        {
          "id": "f359db8a-c7f1-45f2-b4ef-08bde885e4c5",
          "english": "doctor",
          "chinese": "词426",
          "pinyin": "cí426",
          "order": 6
        },
        {
          "id": "1c9be24a-43f4-431c-9b92-31a8866473b2",
          "english": "document",
          "chinese": "词427",
          "pinyin": "cí427",
          "order": 7
        },
        {
          "id": "641540f9-e340-42f8-966d-6d4910d36965",
          "english": "domestic",
          "chinese": "词428",
          "pinyin": "cí428",
          "order": 8
        },
        {
          "id": "73e953e2-2037-40d8-be95-af325510ab22",
          "english": "dominant",
          "chinese": "词429",
          "pinyin": "cí429",
          "order": 9
        }
      ]
    },
    {
      "id": "235493e3-5115-4b48-b770-c02ee3311b2e",
      "name": "HSK 3 53",
      "description": "HSK 3 53 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "6e88cbef-f279-4f02-9c93-a5c1c6d2461f",
          "english": "dominate",
          "chinese": "词430",
          "pinyin": "cí430",
          "order": 0
        },
        {
          "id": "a9c2eb92-5a13-4025-befe-5c890aa65197",
          "english": "door",
          "chinese": "词431",
          "pinyin": "cí431",
          "order": 1
        },
        {
          "id": "41702d22-dfd5-4220-a633-314ee5469072",
          "english": "double",
          "chinese": "词432",
          "pinyin": "cí432",
          "order": 2
        },
        {
          "id": "15c76f9e-65fa-45ed-b217-f0ec2626803f",
          "english": "doubt",
          "chinese": "词433",
          "pinyin": "cí433",
          "order": 3
        },
        {
          "id": "d1859e66-2f18-4909-820a-90037f038266",
          "english": "downtown",
          "chinese": "词434",
          "pinyin": "cí434",
          "order": 4
        },
        {
          "id": "14e552eb-d898-4a61-b532-e83923e9d158",
          "english": "dozen",
          "chinese": "词435",
          "pinyin": "cí435",
          "order": 5
        },
        {
          "id": "e491377a-175a-45b1-bec8-89b3e8fcf6d4",
          "english": "draft",
          "chinese": "词436",
          "pinyin": "cí436",
          "order": 6
        },
        {
          "id": "629a94a0-6373-4e5c-9cd2-418386c53c89",
          "english": "drag",
          "chinese": "词437",
          "pinyin": "cí437",
          "order": 7
        },
        {
          "id": "fb3dd457-75e5-4272-b51f-7c7a6419468a",
          "english": "drama",
          "chinese": "词438",
          "pinyin": "cí438",
          "order": 8
        },
        {
          "id": "a688a980-ccb9-4922-8d4b-baf705dcee12",
          "english": "dramatic",
          "chinese": "词439",
          "pinyin": "cí439",
          "order": 9
        }
      ]
    },
    {
      "id": "34181fb6-cf14-4342-bc00-79cd968d518f",
      "name": "HSK 3 54",
      "description": "HSK 3 54 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "c146535f-737c-47b2-8df5-4543e715066a",
          "english": "draw",
          "chinese": "词440",
          "pinyin": "cí440",
          "order": 0
        },
        {
          "id": "91108cee-0526-47aa-b1f4-5b2c20783ba1",
          "english": "drawing",
          "chinese": "词441",
          "pinyin": "cí441",
          "order": 1
        },
        {
          "id": "4534fa7d-edb6-4350-9195-fe3f274a0a4a",
          "english": "dream",
          "chinese": "词442",
          "pinyin": "cí442",
          "order": 2
        },
        {
          "id": "7e7eaee8-6f58-4a46-98b0-c6fd34f71b2c",
          "english": "dress",
          "chinese": "词443",
          "pinyin": "cí443",
          "order": 3
        },
        {
          "id": "dfc2616b-7be6-43d7-b0ae-0b1158fb165e",
          "english": "drink",
          "chinese": "词444",
          "pinyin": "cí444",
          "order": 4
        },
        {
          "id": "e487f304-a979-460f-804a-ed12f4579a81",
          "english": "drive",
          "chinese": "词445",
          "pinyin": "cí445",
          "order": 5
        },
        {
          "id": "e3d3f6ea-675a-4ca5-9d9d-cc6dc886c466",
          "english": "driver",
          "chinese": "词446",
          "pinyin": "cí446",
          "order": 6
        },
        {
          "id": "b27c41e5-729c-4b91-954e-688dbc735851",
          "english": "drop",
          "chinese": "词447",
          "pinyin": "cí447",
          "order": 7
        },
        {
          "id": "c8c69e51-4c08-4a3a-a51d-d7e4ad789e78",
          "english": "drug",
          "chinese": "词448",
          "pinyin": "cí448",
          "order": 8
        },
        {
          "id": "b84fd9b8-7f06-409a-a61b-58eb27e9ade8",
          "english": "during",
          "chinese": "词449",
          "pinyin": "cí449",
          "order": 9
        }
      ]
    },
    {
      "id": "cffd6c24-02dc-41be-a359-6b13fdd957fb",
      "name": "HSK 3 55",
      "description": "HSK 3 55 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "cd0451db-ed9d-4ee4-a10b-830664961cde",
          "english": "duty",
          "chinese": "词450",
          "pinyin": "cí450",
          "order": 0
        },
        {
          "id": "40d66a66-34bb-4fbf-990a-6b153334f225",
          "english": "each",
          "chinese": "词451",
          "pinyin": "cí451",
          "order": 1
        },
        {
          "id": "3a6aa516-e46f-445b-95d9-3c2345254ec1",
          "english": "eager",
          "chinese": "词452",
          "pinyin": "cí452",
          "order": 2
        },
        {
          "id": "3802d0ec-2380-4a37-8455-8f3ae105a31f",
          "english": "early",
          "chinese": "词453",
          "pinyin": "cí453",
          "order": 3
        },
        {
          "id": "eca15008-117a-4da6-a230-a2a0d9bf6ee8",
          "english": "earn",
          "chinese": "词454",
          "pinyin": "cí454",
          "order": 4
        },
        {
          "id": "aa3c6fe1-797a-48e0-91a4-39a3aae2afed",
          "english": "earth",
          "chinese": "词455",
          "pinyin": "cí455",
          "order": 5
        },
        {
          "id": "b5e9609e-269b-44cf-85c2-67b6a082c9f0",
          "english": "easily",
          "chinese": "词456",
          "pinyin": "cí456",
          "order": 6
        },
        {
          "id": "2aa95b39-3b0a-4d64-ae72-80f16625f56e",
          "english": "east",
          "chinese": "词457",
          "pinyin": "cí457",
          "order": 7
        },
        {
          "id": "8d58e701-7b3b-48f4-a064-d7d939a21e35",
          "english": "eastern",
          "chinese": "词458",
          "pinyin": "cí458",
          "order": 8
        },
        {
          "id": "f65861ae-72b3-4e23-913f-9f0b5b7a0239",
          "english": "easy",
          "chinese": "词459",
          "pinyin": "cí459",
          "order": 9
        }
      ]
    },
    {
      "id": "bb074293-a594-400a-a367-4bc9a82aa948",
      "name": "HSK 3 56",
      "description": "HSK 3 56 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "9b1de467-ba94-4f56-a677-de3e07d81214",
          "english": "economic",
          "chinese": "词460",
          "pinyin": "cí460",
          "order": 0
        },
        {
          "id": "f743d984-097a-4ced-b478-afe2d3746204",
          "english": "economy",
          "chinese": "词461",
          "pinyin": "cí461",
          "order": 1
        },
        {
          "id": "9894aaa9-1047-4e15-9b8d-106011b2d598",
          "english": "edge",
          "chinese": "词462",
          "pinyin": "cí462",
          "order": 2
        },
        {
          "id": "0282f736-725c-4e8e-b663-1aaf44b875ca",
          "english": "edition",
          "chinese": "词463",
          "pinyin": "cí463",
          "order": 3
        },
        {
          "id": "e30c617b-4b71-4cbe-a767-168c98517dc4",
          "english": "editor",
          "chinese": "词464",
          "pinyin": "cí464",
          "order": 4
        },
        {
          "id": "f04de7c2-4853-4d52-81f2-a2b3a9e46182",
          "english": "education",
          "chinese": "词465",
          "pinyin": "cí465",
          "order": 5
        },
        {
          "id": "898c0501-d3ae-426e-bc95-56e434fd92fd",
          "english": "educational",
          "chinese": "词466",
          "pinyin": "cí466",
          "order": 6
        },
        {
          "id": "22e9a729-c1d8-49ce-a90b-3f1b404e23c7",
          "english": "effect",
          "chinese": "词467",
          "pinyin": "cí467",
          "order": 7
        },
        {
          "id": "dec2dc18-657c-4bc6-b02d-7d1544cca743",
          "english": "effective",
          "chinese": "词468",
          "pinyin": "cí468",
          "order": 8
        },
        {
          "id": "057d9f1b-0df0-4e25-b6ee-68e0cc7c8252",
          "english": "effectively",
          "chinese": "词469",
          "pinyin": "cí469",
          "order": 9
        }
      ]
    },
    {
      "id": "6b1b1b6a-c9b4-435b-9d3f-c5a7b6bec30c",
      "name": "HSK 3 6",
      "description": "HSK 3 6 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "8775e01b-ffe3-4a91-a1bf-5dff88f53c26",
          "english": "animal",
          "chinese": "动物",
          "pinyin": "dòngwù",
          "order": 0
        },
        {
          "id": "9a7046f9-25f3-45af-bdc7-b11857dbe763",
          "english": "short",
          "chinese": "短",
          "pinyin": "duǎn",
          "order": 1
        },
        {
          "id": "3fb48a0a-8c3c-4829-8239-ed352308e0ff",
          "english": "paragraph",
          "chinese": "段",
          "pinyin": "duàn",
          "order": 2
        },
        {
          "id": "5d13417b-e6cc-48e7-bd3a-d7c63a22e856",
          "english": "exercise",
          "chinese": "锻炼",
          "pinyin": "duànliàn",
          "order": 3
        },
        {
          "id": "83031fee-4bab-4df3-bda8-7efbdb0ede44",
          "english": "how",
          "chinese": "多么",
          "pinyin": "duōme",
          "order": 4
        },
        {
          "id": "4fcc098d-a15c-4279-a880-93fcee7cfe3f",
          "english": "hungry",
          "chinese": "饿",
          "pinyin": "è",
          "order": 5
        },
        {
          "id": "6dbb48d6-7515-4f0a-a3e2-ccd63ad766a9",
          "english": "ear",
          "chinese": "耳朵",
          "pinyin": "ěrduo",
          "order": 6
        },
        {
          "id": "8a9b3de1-5102-4d69-9796-5a6675058f67",
          "english": "send",
          "chinese": "发",
          "pinyin": "fā",
          "order": 7
        },
        {
          "id": "6eb17a25-7805-418a-bac3-66938dd4b040",
          "english": "have a fever",
          "chinese": "发烧",
          "pinyin": "fāshāo",
          "order": 8
        },
        {
          "id": "30c2b9a4-e8e9-4c97-a71e-406c9ae4f0f8",
          "english": "discover",
          "chinese": "发现",
          "pinyin": "fāxiàn",
          "order": 9
        }
      ]
    },
    {
      "id": "521bb1e2-5bc1-43d5-bba0-ff9e2cadbfb8",
      "name": "HSK 3 7",
      "description": "HSK 3 7 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "5e39f06b-7fea-47ff-9a20-29394e05b75a",
          "english": "convenient",
          "chinese": "方便",
          "pinyin": "fāngbiàn",
          "order": 0
        },
        {
          "id": "b54f8812-ceb2-42c7-958d-b68993660f8b",
          "english": "put",
          "chinese": "放",
          "pinyin": "fàng",
          "order": 1
        },
        {
          "id": "871ddaca-d461-4156-abe1-0776b8e34ff7",
          "english": "don't worry",
          "chinese": "放心",
          "pinyin": "fàngxīn",
          "order": 2
        },
        {
          "id": "13103c79-b09e-4e52-87a9-76bb01ebe43c",
          "english": "minute",
          "chinese": "分",
          "pinyin": "fēn",
          "order": 3
        },
        {
          "id": "b1e4156e-6285-4e28-ba0f-e378e756f631",
          "english": "nearby",
          "chinese": "附近",
          "pinyin": "fùjìn",
          "order": 4
        },
        {
          "id": "4ad806cb-25a8-4c63-9024-e47ff7dbc1fd",
          "english": "review",
          "chinese": "复习",
          "pinyin": "fùxí",
          "order": 5
        },
        {
          "id": "1ec505de-7307-4b9f-ae40-60e8c10b970b",
          "english": "clean",
          "chinese": "干净",
          "pinyin": "gānjìng",
          "order": 6
        },
        {
          "id": "8072daaf-5067-4e49-aca5-8e1de7ccd057",
          "english": "be interested in",
          "chinese": "感兴趣",
          "pinyin": "gǎnxìngqù",
          "order": 7
        },
        {
          "id": "17ee2cc1-4300-44c2-834a-ff32d8d4bc33",
          "english": "catch cold",
          "chinese": "感冒",
          "pinyin": "gǎnmào",
          "order": 8
        },
        {
          "id": "527aa725-afb0-4175-8c7c-2ad013fa7a30",
          "english": "just now",
          "chinese": "刚才",
          "pinyin": "gāngcái",
          "order": 9
        }
      ]
    },
    {
      "id": "b2428bff-cef4-4a09-8efa-2644b1afd47d",
      "name": "HSK 3 8",
      "description": "HSK 3 8 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "e722ec05-a443-4d55-9179-550b8f0750ab",
          "english": "height (person)",
          "chinese": "个子",
          "pinyin": "gèzi",
          "order": 0
        },
        {
          "id": "b47b55b9-e4cf-4872-b969-4487f12bae3b",
          "english": "with",
          "chinese": "跟",
          "pinyin": "gēn",
          "order": 1
        },
        {
          "id": "dfa5a70d-e939-4e4f-844d-c2c2aa52bc66",
          "english": "according to",
          "chinese": "根据",
          "pinyin": "gēnjù",
          "order": 2
        },
        {
          "id": "87ea7704-37e0-49e7-8123-fe12e7c78e83",
          "english": "more",
          "chinese": "更",
          "pinyin": "gèng",
          "order": 3
        },
        {
          "id": "e09f3ba9-0c78-4fb3-a559-270f9f676184",
          "english": "kilogram",
          "chinese": "公斤",
          "pinyin": "gōngjīn",
          "order": 4
        },
        {
          "id": "4977912f-084d-41bb-9060-5deee9bbfce3",
          "english": "park",
          "chinese": "公园",
          "pinyin": "gōngyuán",
          "order": 5
        },
        {
          "id": "2bb3628f-cb15-4fa1-b7d6-a0ca3bff2dd0",
          "english": "story",
          "chinese": "故事",
          "pinyin": "gùshi",
          "order": 6
        },
        {
          "id": "cbf0423e-6f5b-4fd4-a581-47c475ce43d6",
          "english": "windy",
          "chinese": "刮风",
          "pinyin": "guāfēng",
          "order": 7
        },
        {
          "id": "96d55254-2e18-4705-8f25-ce0e10c411df",
          "english": "close",
          "chinese": "关",
          "pinyin": "guān",
          "order": 8
        },
        {
          "id": "4b429f77-ba25-4c9c-9606-8840a95c2aba",
          "english": "relationship",
          "chinese": "关系",
          "pinyin": "guānxì",
          "order": 9
        }
      ]
    },
    {
      "id": "51e18a41-db14-4202-b704-09901e43481a",
      "name": "HSK 3 9",
      "description": "HSK 3 9 - Authentic HSK Level 3 vocabulary",
      "hsklevel": 3,
      "wordCount": 10,
      "words": [
        {
          "id": "d5c112f7-774e-4702-9f65-ba3a0f103abf",
          "english": "care about",
          "chinese": "关心",
          "pinyin": "guānxīn",
          "order": 0
        },
        {
          "id": "5db13c56-3a9c-4ee5-976e-cddf2c0034ef",
          "english": "about",
          "chinese": "关于",
          "pinyin": "guānyú",
          "order": 1
        },
        {
          "id": "c282e605-1968-482a-86e0-431337fd8bab",
          "english": "country",
          "chinese": "国家",
          "pinyin": "guójiā",
          "order": 2
        },
        {
          "id": "7d46f4ba-ef5c-4317-bcc5-8e668f0e1c20",
          "english": "past",
          "chinese": "过去",
          "pinyin": "guòqù",
          "order": 3
        },
        {
          "id": "38a4538a-8468-462d-9fec-05129033221b",
          "english": "still",
          "chinese": "还是",
          "pinyin": "háishì",
          "order": 4
        },
        {
          "id": "d6f5dee4-024f-442e-b76c-888798634036",
          "english": "afraid",
          "chinese": "害怕",
          "pinyin": "hàipà",
          "order": 5
        },
        {
          "id": "e9859581-945f-447f-b562-47d1f2a57fd8",
          "english": "blackboard",
          "chinese": "黑板",
          "pinyin": "hēibǎn",
          "order": 6
        },
        {
          "id": "12950cc1-6012-48ec-8e03-77e3c31bcc0a",
          "english": "later",
          "chinese": "后来",
          "pinyin": "hòulái",
          "order": 7
        },
        {
          "id": "9115b61f-eb10-46c5-8dce-fb6a8fe4f594",
          "english": "passport",
          "chinese": "护照",
          "pinyin": "hùzhào",
          "order": 8
        },
        {
          "id": "34b267be-e637-41af-9049-e8181ba1bbca",
          "english": "spend",
          "chinese": "花",
          "pinyin": "huā",
          "order": 9
        }
      ]
    },
    {
      "id": "078db774-9052-4ec6-a435-d9599932f567",
      "name": "HSK 4 1",
      "description": "HSK 4 1 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "e7336bcd-cb99-4eea-8422-91d4d62df05b",
          "english": "love (romantic)",
          "chinese": "爱情",
          "pinyin": "àiqíng",
          "order": 0
        },
        {
          "id": "2e69da6b-1bda-495c-9a01-8bab5ba3d056",
          "english": "arrange",
          "chinese": "安排",
          "pinyin": "ānpái",
          "order": 1
        },
        {
          "id": "d649b170-0446-4cc3-91f0-46d532e761c5",
          "english": "security",
          "chinese": "安全",
          "pinyin": "ānquán",
          "order": 2
        },
        {
          "id": "5f3035e8-ba65-44b5-908a-6fb2f1663e63",
          "english": "on time",
          "chinese": "按时",
          "pinyin": "ànshí",
          "order": 3
        },
        {
          "id": "a2bd928b-a6aa-4d81-83bd-71339a95c571",
          "english": "according to",
          "chinese": "按照",
          "pinyin": "ànzhào",
          "order": 4
        },
        {
          "id": "cb8c05a1-f725-4f45-9f91-8c45d6472354",
          "english": "percent",
          "chinese": "百分之",
          "pinyin": "bǎifēnzhī",
          "order": 5
        },
        {
          "id": "00a22175-82f9-486e-bcf3-30c945eefb61",
          "english": "excellent",
          "chinese": "棒",
          "pinyin": "bàng",
          "order": 6
        },
        {
          "id": "cb297c04-e202-4be8-bfc0-e103efad59b6",
          "english": "steamed bun",
          "chinese": "包子",
          "pinyin": "bāozi",
          "order": 7
        },
        {
          "id": "9c226e40-a841-4cb2-a77d-41392cf0f9bd",
          "english": "protect",
          "chinese": "保护",
          "pinyin": "bǎohù",
          "order": 8
        },
        {
          "id": "a41dcd5e-4fe2-4b14-a8f7-28da2f226565",
          "english": "guarantee",
          "chinese": "保证",
          "pinyin": "bǎozhèng",
          "order": 9
        }
      ]
    },
    {
      "id": "5eaf7fb9-7e7d-4c2f-a468-bdb86f344e94",
      "name": "HSK 4 10",
      "description": "HSK 4 10 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "fe5ad6b0-28f2-4bbf-9ca9-3efbab529a2e",
          "english": "ability",
          "chinese": "能力",
          "pinyin": "nénglì",
          "order": 0
        },
        {
          "id": "a132207e-0619-4230-99fe-4bdb4cd0a951",
          "english": "accept",
          "chinese": "接受",
          "pinyin": "jiēshòu",
          "order": 1
        },
        {
          "id": "c051022f-ae90-419f-b70b-4eeac3928485",
          "english": "accident",
          "chinese": "事故",
          "pinyin": "shìgù",
          "order": 2
        },
        {
          "id": "be6c545c-5cf8-494f-ad1a-6e1bc20bf675",
          "english": "activity",
          "chinese": "词3",
          "pinyin": "cí3",
          "order": 3
        },
        {
          "id": "3a3e50e3-8401-4f47-a5ef-32c2c8cdf2c8",
          "english": "actually",
          "chinese": "词4",
          "pinyin": "cí4",
          "order": 4
        },
        {
          "id": "568cd649-6fe4-4c77-be8a-95ccb8e79341",
          "english": "administration",
          "chinese": "词5",
          "pinyin": "cí5",
          "order": 5
        },
        {
          "id": "f9713fa4-ebfb-4072-b3fb-f5877fb8b9ef",
          "english": "admit",
          "chinese": "词6",
          "pinyin": "cí6",
          "order": 6
        },
        {
          "id": "0da14c96-2599-4c8a-bf60-c8631748bf93",
          "english": "adult",
          "chinese": "词7",
          "pinyin": "cí7",
          "order": 7
        },
        {
          "id": "1dfe0152-6f4a-451f-a3c3-abb332263a0c",
          "english": "advice",
          "chinese": "词8",
          "pinyin": "cí8",
          "order": 8
        },
        {
          "id": "2ef0c1be-4d33-4aa2-9fe1-60b94381876c",
          "english": "affect",
          "chinese": "词9",
          "pinyin": "cí9",
          "order": 9
        }
      ]
    },
    {
      "id": "a123eafb-351d-4b1b-9c24-56fc2309165a",
      "name": "HSK 4 10",
      "description": "HSK 4 10 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "bb209cdd-fda3-4f70-826a-d7a13dfcf808",
          "english": "earth",
          "chinese": "地球",
          "pinyin": "dìqiú",
          "order": 0
        },
        {
          "id": "cb17131f-e1a6-48ea-a34d-29e2f554165a",
          "english": "address",
          "chinese": "地址",
          "pinyin": "dìzhǐ",
          "order": 1
        },
        {
          "id": "c4c22d60-f7d5-465b-bf20-6173e0f0c618",
          "english": "drop",
          "chinese": "掉",
          "pinyin": "diào",
          "order": 2
        },
        {
          "id": "830dbdb7-33ac-4b7d-af0a-bffd313edb66",
          "english": "investigate",
          "chinese": "调查",
          "pinyin": "diàochá",
          "order": 3
        },
        {
          "id": "290c0605-90d5-4f0c-8b97-5365e4307467",
          "english": "lose",
          "chinese": "丢",
          "pinyin": "diū",
          "order": 4
        },
        {
          "id": "0840080e-de74-4d16-94aa-dbf98716b019",
          "english": "movement",
          "chinese": "动作",
          "pinyin": "dòngzuò",
          "order": 5
        },
        {
          "id": "1ff7c878-7bd3-42fa-8ebf-4e91418d839a",
          "english": "traffic jam",
          "chinese": "堵车",
          "pinyin": "dǔchē",
          "order": 6
        },
        {
          "id": "ff7f9464-4ab4-4242-af30-c6d5c5e3f5c3",
          "english": "stomach",
          "chinese": "肚子",
          "pinyin": "dùzi",
          "order": 7
        },
        {
          "id": "73f8c8d5-cab3-4c3f-a032-4cdcce4a4569",
          "english": "text message",
          "chinese": "短信",
          "pinyin": "duǎnxìn",
          "order": 8
        },
        {
          "id": "a79c5570-2f35-472a-a1a6-ea579596e629",
          "english": "regarding",
          "chinese": "对于",
          "pinyin": "duìyú",
          "order": 9
        }
      ]
    },
    {
      "id": "554480c0-9ead-4549-a0ef-1f60dd774413",
      "name": "HSK 4 11",
      "description": "HSK 4 11 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "0fe61493-ba7f-465d-ba11-886dde44ccda",
          "english": "dialogue",
          "chinese": "对话",
          "pinyin": "duìhuà",
          "order": 0
        },
        {
          "id": "f2d21749-1b22-4b9b-8b8d-252470586cb7",
          "english": "opposite",
          "chinese": "对面",
          "pinyin": "duìmiàn",
          "order": 1
        },
        {
          "id": "f1168919-4d5f-43ef-b2d8-92c68c686a20",
          "english": "and",
          "chinese": "而",
          "pinyin": "ér",
          "order": 2
        },
        {
          "id": "6f1ff54a-bb80-4cfe-9995-9ba73d33e14c",
          "english": "child",
          "chinese": "儿童",
          "pinyin": "értóng",
          "order": 3
        },
        {
          "id": "46d93330-f04b-40fb-aeec-fa0440732764",
          "english": "happen",
          "chinese": "发生",
          "pinyin": "fāshēng",
          "order": 4
        },
        {
          "id": "03c8ba35-a363-45e7-ad25-6252d805b1ab",
          "english": "develop",
          "chinese": "发展",
          "pinyin": "fāzhǎn",
          "order": 5
        },
        {
          "id": "9cd3b668-fc9b-4acf-9dd1-61addd0234e2",
          "english": "law",
          "chinese": "法律",
          "pinyin": "fǎlǜ",
          "order": 6
        },
        {
          "id": "8b8d2c12-2012-4d3b-a972-aa19079e6f4b",
          "english": "translate",
          "chinese": "翻译",
          "pinyin": "fānyì",
          "order": 7
        },
        {
          "id": "4307aefb-e067-409e-b242-dd69fb69b661",
          "english": "trouble",
          "chinese": "烦恼",
          "pinyin": "fánnǎo",
          "order": 8
        },
        {
          "id": "d4275cb8-7a18-40ea-9631-fb226f403367",
          "english": "oppose",
          "chinese": "反对",
          "pinyin": "fǎnduì",
          "order": 9
        }
      ]
    },
    {
      "id": "20f240c5-62fb-484b-8bfa-33ddfa4c3d80",
      "name": "HSK 4 11",
      "description": "HSK 4 11 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "3c2892cf-0dac-471a-b92b-e99225c58c1e",
          "english": "afternoon",
          "chinese": "词10",
          "pinyin": "cí10",
          "order": 0
        },
        {
          "id": "838e45c4-ac60-459f-9704-e2353c7fca1a",
          "english": "agency",
          "chinese": "词11",
          "pinyin": "cí11",
          "order": 1
        },
        {
          "id": "c6baee41-f2b3-418a-ae70-863ad99690a3",
          "english": "agent",
          "chinese": "词12",
          "pinyin": "cí12",
          "order": 2
        },
        {
          "id": "6f3c772d-7a89-4508-8f68-4df9873cfd37",
          "english": "agreement",
          "chinese": "词13",
          "pinyin": "cí13",
          "order": 3
        },
        {
          "id": "f43a00e8-1c09-4982-a05f-c2fcb950a795",
          "english": "ahead",
          "chinese": "词14",
          "pinyin": "cí14",
          "order": 4
        },
        {
          "id": "37143475-f48f-4395-a082-0213192f1b90",
          "english": "album",
          "chinese": "词15",
          "pinyin": "cí15",
          "order": 5
        },
        {
          "id": "958c1c58-4304-4634-9828-4c8ab0bac762",
          "english": "alive",
          "chinese": "词16",
          "pinyin": "cí16",
          "order": 6
        },
        {
          "id": "7d7f1193-745d-48b8-980d-e91a59abbbb2",
          "english": "allow",
          "chinese": "词17",
          "pinyin": "cí17",
          "order": 7
        },
        {
          "id": "e4f133f7-9927-4d99-b575-45f980b7cb35",
          "english": "almost",
          "chinese": "词18",
          "pinyin": "cí18",
          "order": 8
        },
        {
          "id": "23b227ee-16b7-4a00-9eaf-7febe76153fc",
          "english": "alone",
          "chinese": "词19",
          "pinyin": "cí19",
          "order": 9
        }
      ]
    },
    {
      "id": "acd2000c-578e-41ec-ae9a-03220bd49eaf",
      "name": "HSK 4 12",
      "description": "HSK 4 12 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "38ec22ec-a44d-4978-b1a2-8dafd6000175",
          "english": "already",
          "chinese": "词20",
          "pinyin": "cí20",
          "order": 0
        },
        {
          "id": "3c1bf167-e63c-40a7-8071-4a96a492833e",
          "english": "although",
          "chinese": "词21",
          "pinyin": "cí21",
          "order": 1
        },
        {
          "id": "796f2fb8-7bda-45e4-bf77-e2faecd45604",
          "english": "always",
          "chinese": "词22",
          "pinyin": "cí22",
          "order": 2
        },
        {
          "id": "2de02060-5874-448d-ad7f-169d11ffb302",
          "english": "amazing",
          "chinese": "词23",
          "pinyin": "cí23",
          "order": 3
        },
        {
          "id": "ddc37eb6-771e-45c6-a746-d17b902c948d",
          "english": "amount",
          "chinese": "词24",
          "pinyin": "cí24",
          "order": 4
        },
        {
          "id": "4089eaf0-2b0a-4046-b71a-2e49e967e35d",
          "english": "analysis",
          "chinese": "词25",
          "pinyin": "cí25",
          "order": 5
        },
        {
          "id": "bcf4d8be-3698-407f-9cee-c808df337f83",
          "english": "analyze",
          "chinese": "词26",
          "pinyin": "cí26",
          "order": 6
        },
        {
          "id": "884bd801-b6e7-4121-8b11-57b646c701f4",
          "english": "ancient",
          "chinese": "词27",
          "pinyin": "cí27",
          "order": 7
        },
        {
          "id": "cf65e508-9d53-43f1-bcbe-2c5bac83b7ad",
          "english": "anger",
          "chinese": "词28",
          "pinyin": "cí28",
          "order": 8
        },
        {
          "id": "e0392567-cd2f-453e-a306-1bbc0d823cd4",
          "english": "angle",
          "chinese": "词29",
          "pinyin": "cí29",
          "order": 9
        }
      ]
    },
    {
      "id": "2624b6af-870f-4c1a-91b4-816f8ba240cb",
      "name": "HSK 4 13",
      "description": "HSK 4 13 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "a74fb589-bdce-45aa-9132-73bad89add6e",
          "english": "animal",
          "chinese": "词30",
          "pinyin": "cí30",
          "order": 0
        },
        {
          "id": "d78a6368-3f7b-4b3b-9034-ea204e92ceb9",
          "english": "announce",
          "chinese": "词31",
          "pinyin": "cí31",
          "order": 1
        },
        {
          "id": "a2cef6d1-0162-499b-8450-54f964d3c057",
          "english": "annual",
          "chinese": "词32",
          "pinyin": "cí32",
          "order": 2
        },
        {
          "id": "6cd8cc0a-5780-4ad3-bdcd-6c3969cff8a3",
          "english": "another",
          "chinese": "词33",
          "pinyin": "cí33",
          "order": 3
        },
        {
          "id": "0431850c-dcbe-42f2-898d-dc1b7f21f5c0",
          "english": "answer",
          "chinese": "词34",
          "pinyin": "cí34",
          "order": 4
        },
        {
          "id": "e191c97e-e723-4ff9-9696-7c1631bd66f2",
          "english": "anxiety",
          "chinese": "词35",
          "pinyin": "cí35",
          "order": 5
        },
        {
          "id": "498a41f6-2fee-43f1-9fc9-6d7691cc7658",
          "english": "anybody",
          "chinese": "词36",
          "pinyin": "cí36",
          "order": 6
        },
        {
          "id": "0dd5c0d9-45ee-4f28-93aa-2de2a9d94858",
          "english": "anymore",
          "chinese": "词37",
          "pinyin": "cí37",
          "order": 7
        },
        {
          "id": "da97bf3a-77c0-4978-955a-01c6170e93de",
          "english": "anyone",
          "chinese": "词38",
          "pinyin": "cí38",
          "order": 8
        },
        {
          "id": "ddcba902-5012-4c96-9fc3-f235b0038067",
          "english": "anything",
          "chinese": "词39",
          "pinyin": "cí39",
          "order": 9
        }
      ]
    },
    {
      "id": "850ea232-f76a-4268-9331-62e043d75fdc",
      "name": "HSK 4 14",
      "description": "HSK 4 14 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "fbf9f9e8-89af-4a7f-ae7f-cdb8aaca6904",
          "english": "anywhere",
          "chinese": "词40",
          "pinyin": "cí40",
          "order": 0
        },
        {
          "id": "dbb7d756-29ee-45bf-b455-028ba44c7bb5",
          "english": "apartment",
          "chinese": "词41",
          "pinyin": "cí41",
          "order": 1
        },
        {
          "id": "753c396b-bff4-4f33-a476-a924dc11946c",
          "english": "apparent",
          "chinese": "词42",
          "pinyin": "cí42",
          "order": 2
        },
        {
          "id": "91177101-a449-4cf4-b3d5-e4d3f57c6021",
          "english": "appear",
          "chinese": "词43",
          "pinyin": "cí43",
          "order": 3
        },
        {
          "id": "89ced0b5-2214-4fbf-9a40-38198ac49672",
          "english": "application",
          "chinese": "词44",
          "pinyin": "cí44",
          "order": 4
        },
        {
          "id": "c10a69a3-9d67-4825-97cd-9297c4e54058",
          "english": "apply",
          "chinese": "词45",
          "pinyin": "cí45",
          "order": 5
        },
        {
          "id": "cdc205b4-d10f-4642-a75a-c38ce8657c35",
          "english": "approach",
          "chinese": "词46",
          "pinyin": "cí46",
          "order": 6
        },
        {
          "id": "dc08d71a-18cd-4231-8373-86131cbb34ae",
          "english": "appropriate",
          "chinese": "词47",
          "pinyin": "cí47",
          "order": 7
        },
        {
          "id": "b5ec2605-2a93-4670-bd6c-d25d3da67c73",
          "english": "approval",
          "chinese": "词48",
          "pinyin": "cí48",
          "order": 8
        },
        {
          "id": "3876acdd-ac78-4110-85eb-b4b1c2a66fc0",
          "english": "approve",
          "chinese": "词49",
          "pinyin": "cí49",
          "order": 9
        }
      ]
    },
    {
      "id": "988ca108-c5af-44f8-9f17-4ea7482f33e4",
      "name": "HSK 4 15",
      "description": "HSK 4 15 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "8dd06ae5-d1ff-4e15-9bda-4bd15cde7485",
          "english": "approximately",
          "chinese": "词50",
          "pinyin": "cí50",
          "order": 0
        },
        {
          "id": "91103725-f3e3-4e99-96c4-eda62bda28f2",
          "english": "area",
          "chinese": "词51",
          "pinyin": "cí51",
          "order": 1
        },
        {
          "id": "30b0c106-f01b-4ece-b42f-4f35802808b6",
          "english": "argue",
          "chinese": "词52",
          "pinyin": "cí52",
          "order": 2
        },
        {
          "id": "118d5128-0089-4407-b31e-e999ad17c33e",
          "english": "argument",
          "chinese": "词53",
          "pinyin": "cí53",
          "order": 3
        },
        {
          "id": "2b2447f3-c6ec-4c53-bae1-07260b1d666a",
          "english": "arise",
          "chinese": "词54",
          "pinyin": "cí54",
          "order": 4
        },
        {
          "id": "a46e92d5-63c4-4323-8a82-6a7981396c08",
          "english": "around",
          "chinese": "词55",
          "pinyin": "cí55",
          "order": 5
        },
        {
          "id": "7969b661-58ce-4c4d-9abe-ff8868544519",
          "english": "arrange",
          "chinese": "词56",
          "pinyin": "cí56",
          "order": 6
        },
        {
          "id": "770a84e0-bee5-444a-8ee8-556777ec7062",
          "english": "arrangement",
          "chinese": "词57",
          "pinyin": "cí57",
          "order": 7
        },
        {
          "id": "82d47f73-a087-4704-8a9c-6d140fdf5dcd",
          "english": "article",
          "chinese": "词58",
          "pinyin": "cí58",
          "order": 8
        },
        {
          "id": "47ce4136-c25b-45ed-8d68-40cda6e61e1e",
          "english": "artist",
          "chinese": "词59",
          "pinyin": "cí59",
          "order": 9
        }
      ]
    },
    {
      "id": "cfd1234d-65f0-45f8-b4ef-513074f97ae3",
      "name": "HSK 4 16",
      "description": "HSK 4 16 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "42caa5d1-3ec7-4f10-9bd1-41cde9b9661e",
          "english": "assume",
          "chinese": "词60",
          "pinyin": "cí60",
          "order": 0
        },
        {
          "id": "061cfbef-c49a-44dd-88de-874f36322db8",
          "english": "assumption",
          "chinese": "词61",
          "pinyin": "cí61",
          "order": 1
        },
        {
          "id": "a69dbcb6-2513-458c-878f-6ebd844947ea",
          "english": "attack",
          "chinese": "词62",
          "pinyin": "cí62",
          "order": 2
        },
        {
          "id": "e9b16223-4012-4f6b-88e4-82316a1c9fa0",
          "english": "attempt",
          "chinese": "词63",
          "pinyin": "cí63",
          "order": 3
        },
        {
          "id": "597660d4-f76e-485e-b529-39acf0db8e0c",
          "english": "attend",
          "chinese": "词64",
          "pinyin": "cí64",
          "order": 4
        },
        {
          "id": "0d9d7b81-7bb6-4817-b419-4a007e4621c8",
          "english": "attention",
          "chinese": "词65",
          "pinyin": "cí65",
          "order": 5
        },
        {
          "id": "a082be59-909a-45e8-adac-b92d42f7e28f",
          "english": "attitude",
          "chinese": "词66",
          "pinyin": "cí66",
          "order": 6
        },
        {
          "id": "4afea325-0808-4662-ab0a-6204aee8d04f",
          "english": "attract",
          "chinese": "词67",
          "pinyin": "cí67",
          "order": 7
        },
        {
          "id": "773603cb-df28-42fe-8501-a00e5dbe74ed",
          "english": "attractive",
          "chinese": "词68",
          "pinyin": "cí68",
          "order": 8
        },
        {
          "id": "54503f72-9e9d-498d-97a8-30e77615dbb3",
          "english": "audience",
          "chinese": "词69",
          "pinyin": "cí69",
          "order": 9
        }
      ]
    },
    {
      "id": "7d682c9e-7590-4f33-8d45-2abbaea00ea3",
      "name": "HSK 4 17",
      "description": "HSK 4 17 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "584e1179-6992-4e89-9086-065b2465cc8f",
          "english": "author",
          "chinese": "词70",
          "pinyin": "cí70",
          "order": 0
        },
        {
          "id": "3256100f-82ff-4cd9-a8e9-2cfff4390a64",
          "english": "authority",
          "chinese": "词71",
          "pinyin": "cí71",
          "order": 1
        },
        {
          "id": "476b3d2b-58b1-47a4-a5b1-fea98c4be755",
          "english": "available",
          "chinese": "词72",
          "pinyin": "cí72",
          "order": 2
        },
        {
          "id": "0f199de1-76ee-488a-aec2-e77688e5908b",
          "english": "average",
          "chinese": "词73",
          "pinyin": "cí73",
          "order": 3
        },
        {
          "id": "43cb4738-973c-4783-a5b8-00e722089b48",
          "english": "avoid",
          "chinese": "词74",
          "pinyin": "cí74",
          "order": 4
        },
        {
          "id": "192ca6f4-7d0d-420f-af6b-0c6a832645fd",
          "english": "award",
          "chinese": "词75",
          "pinyin": "cí75",
          "order": 5
        },
        {
          "id": "f0bd7aec-6126-4165-80d9-7db55be73a27",
          "english": "aware",
          "chinese": "词76",
          "pinyin": "cí76",
          "order": 6
        },
        {
          "id": "f6c57fa2-abab-45b9-a9c9-4b1a196b04ea",
          "english": "awareness",
          "chinese": "词77",
          "pinyin": "cí77",
          "order": 7
        },
        {
          "id": "5acf11d7-9be8-4068-ac79-14f59a3d9cbb",
          "english": "background",
          "chinese": "词78",
          "pinyin": "cí78",
          "order": 8
        },
        {
          "id": "5da20efc-3c9f-4e32-82b8-b7d987748067",
          "english": "balance",
          "chinese": "词79",
          "pinyin": "cí79",
          "order": 9
        }
      ]
    },
    {
      "id": "d0d70ffc-8c26-42a2-afd9-c2da2ce2ad30",
      "name": "HSK 4 18",
      "description": "HSK 4 18 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "0790a73e-c2dc-4445-ab52-4618a5c0f7a5",
          "english": "basic",
          "chinese": "词80",
          "pinyin": "cí80",
          "order": 0
        },
        {
          "id": "5d4d6bbe-90a5-46f8-83be-1e119b52c7e6",
          "english": "battle",
          "chinese": "词81",
          "pinyin": "cí81",
          "order": 1
        },
        {
          "id": "2b02d058-3eb9-41cf-b4c5-779526758662",
          "english": "beautiful",
          "chinese": "词82",
          "pinyin": "cí82",
          "order": 2
        },
        {
          "id": "feeaa684-964b-45f1-ab8d-b87676961d72",
          "english": "beauty",
          "chinese": "词83",
          "pinyin": "cí83",
          "order": 3
        },
        {
          "id": "b8aaed8c-ec25-4d41-9b45-56993ff4648d",
          "english": "become",
          "chinese": "词84",
          "pinyin": "cí84",
          "order": 4
        },
        {
          "id": "30b9c227-af14-40c5-a8b5-60f43c2706ef",
          "english": "bedroom",
          "chinese": "词85",
          "pinyin": "cí85",
          "order": 5
        },
        {
          "id": "4f31383a-3b9d-420a-a298-12fc03610c90",
          "english": "behavior",
          "chinese": "词86",
          "pinyin": "cí86",
          "order": 6
        },
        {
          "id": "4518d921-3699-408c-b735-ba63b8e97ad8",
          "english": "behind",
          "chinese": "词87",
          "pinyin": "cí87",
          "order": 7
        },
        {
          "id": "a9516914-4b50-4cac-85f6-7fc873f0e5ec",
          "english": "believe",
          "chinese": "词88",
          "pinyin": "cí88",
          "order": 8
        },
        {
          "id": "62799bb6-1f2e-49e8-b1b6-6e7cfc5b02c8",
          "english": "belong",
          "chinese": "词89",
          "pinyin": "cí89",
          "order": 9
        }
      ]
    },
    {
      "id": "34d6b583-e709-4408-9252-cba2f67b1b66",
      "name": "HSK 4 19",
      "description": "HSK 4 19 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "5a20c79e-38d7-47e4-9501-e7bca138a84d",
          "english": "benefit",
          "chinese": "词90",
          "pinyin": "cí90",
          "order": 0
        },
        {
          "id": "1417fbf1-6fe5-46f5-a225-59034c11247b",
          "english": "beside",
          "chinese": "词91",
          "pinyin": "cí91",
          "order": 1
        },
        {
          "id": "00e3ecf4-59ee-4537-95af-242bec09be03",
          "english": "beyond",
          "chinese": "词92",
          "pinyin": "cí92",
          "order": 2
        },
        {
          "id": "8cd3ee32-b788-4892-94d9-8d9ae896d6ca",
          "english": "bicycle",
          "chinese": "词93",
          "pinyin": "cí93",
          "order": 3
        },
        {
          "id": "ae109e14-03a3-472b-a09d-a0e65c71562e",
          "english": "billion",
          "chinese": "词94",
          "pinyin": "cí94",
          "order": 4
        },
        {
          "id": "74162d4b-6904-4938-98a2-d84812bc1b97",
          "english": "birth",
          "chinese": "词95",
          "pinyin": "cí95",
          "order": 5
        },
        {
          "id": "d21c0b2c-ac49-4800-accc-101a87dd2ec3",
          "english": "birthday",
          "chinese": "词96",
          "pinyin": "cí96",
          "order": 6
        },
        {
          "id": "6732a50c-6df5-4c3f-9df5-7f9fe1fa56bb",
          "english": "blame",
          "chinese": "词97",
          "pinyin": "cí97",
          "order": 7
        },
        {
          "id": "10997c63-9733-4802-ac37-115d8c42c0d2",
          "english": "block",
          "chinese": "词98",
          "pinyin": "cí98",
          "order": 8
        },
        {
          "id": "c20f9dd0-e0d3-42e8-bc06-01db4f13a727",
          "english": "blood",
          "chinese": "词99",
          "pinyin": "cí99",
          "order": 9
        }
      ]
    },
    {
      "id": "e5fe5e61-451a-4580-a7d3-da33e270f9e8",
      "name": "HSK 4 2",
      "description": "HSK 4 2 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "71c8f602-9da5-4e7d-8235-c3b000d1bb7e",
          "english": "hold",
          "chinese": "抱",
          "pinyin": "bào",
          "order": 0
        },
        {
          "id": "89c36822-286f-4bfe-bfbe-fa9db830babf",
          "english": "sorry",
          "chinese": "抱歉",
          "pinyin": "bàoqiàn",
          "order": 1
        },
        {
          "id": "f80a3b40-cb28-472f-89c5-76d28212ab5c",
          "english": "sign up",
          "chinese": "报名",
          "pinyin": "bàomíng",
          "order": 2
        },
        {
          "id": "f2b17fec-d6d7-4d99-9453-11427e78c9a5",
          "english": "times (multiple)",
          "chinese": "倍",
          "pinyin": "bèi",
          "order": 3
        },
        {
          "id": "c2dea1f4-5ecd-4fb0-b655-bf3705ea710b",
          "english": "originally",
          "chinese": "本来",
          "pinyin": "běnlái",
          "order": 4
        },
        {
          "id": "b444722c-0c1a-4e79-b1d4-ceeeb171c4a8",
          "english": "stupid",
          "chinese": "笨",
          "pinyin": "bèn",
          "order": 5
        },
        {
          "id": "08d44095-088d-4b06-967d-cd6c7a7b2433",
          "english": "such as",
          "chinese": "比如",
          "pinyin": "bǐrú",
          "order": 6
        },
        {
          "id": "156f7e8f-a622-4cdb-a831-8bc353002f04",
          "english": "graduation",
          "chinese": "毕业",
          "pinyin": "bìyè",
          "order": 7
        },
        {
          "id": "338f0b78-6b94-46d3-a36c-68388d14eb8e",
          "english": "times",
          "chinese": "遍",
          "pinyin": "biàn",
          "order": 8
        },
        {
          "id": "4aa9a8a9-f100-4160-aa35-ffe29483d326",
          "english": "standard",
          "chinese": "标准",
          "pinyin": "biāozhǔn",
          "order": 9
        }
      ]
    },
    {
      "id": "de6442c9-6ed3-4736-a6db-6069f75e491b",
      "name": "HSK 4 20",
      "description": "HSK 4 20 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "7aca9917-3798-4fb6-ab10-63373a1742e8",
          "english": "board",
          "chinese": "词100",
          "pinyin": "cí100",
          "order": 0
        },
        {
          "id": "0b750a25-725f-48bb-819c-1df0abfb8b24",
          "english": "body",
          "chinese": "词101",
          "pinyin": "cí101",
          "order": 1
        },
        {
          "id": "77ed5f0e-306f-4387-8e2f-10966e93b1dc",
          "english": "border",
          "chinese": "词102",
          "pinyin": "cí102",
          "order": 2
        },
        {
          "id": "1f7791ac-e536-46a2-b48b-094b0ea4a10e",
          "english": "born",
          "chinese": "词103",
          "pinyin": "cí103",
          "order": 3
        },
        {
          "id": "967dc643-4934-4b5a-8472-af00ebff291b",
          "english": "bottle",
          "chinese": "词104",
          "pinyin": "cí104",
          "order": 4
        },
        {
          "id": "37be9c02-526f-43d7-aec5-269a38a13775",
          "english": "bottom",
          "chinese": "词105",
          "pinyin": "cí105",
          "order": 5
        },
        {
          "id": "b17f5521-936c-4e24-8d19-d4277d1c377b",
          "english": "brain",
          "chinese": "词106",
          "pinyin": "cí106",
          "order": 6
        },
        {
          "id": "33cd8b88-b73a-4fea-a720-a637c0fac2b8",
          "english": "branch",
          "chinese": "词107",
          "pinyin": "cí107",
          "order": 7
        },
        {
          "id": "4cf77a16-a987-4f01-8789-af67d07ea31c",
          "english": "brand",
          "chinese": "词108",
          "pinyin": "cí108",
          "order": 8
        },
        {
          "id": "a9b456f2-f44f-4044-8d70-d9e822c7881a",
          "english": "brave",
          "chinese": "词109",
          "pinyin": "cí109",
          "order": 9
        }
      ]
    },
    {
      "id": "6613c409-3ccc-4279-8cfe-ea02d4f9cf4c",
      "name": "HSK 4 21",
      "description": "HSK 4 21 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "9df623af-8aac-42db-b02f-2c6df6c77045",
          "english": "bread",
          "chinese": "词110",
          "pinyin": "cí110",
          "order": 0
        },
        {
          "id": "79ca528a-e642-4ca2-8155-d166672bb10b",
          "english": "break",
          "chinese": "词111",
          "pinyin": "cí111",
          "order": 1
        },
        {
          "id": "26fcd5b5-f487-4030-a3ea-6db690d8517a",
          "english": "breakfast",
          "chinese": "词112",
          "pinyin": "cí112",
          "order": 2
        },
        {
          "id": "5a51ba25-d935-4e9c-a244-f932fad54492",
          "english": "breath",
          "chinese": "词113",
          "pinyin": "cí113",
          "order": 3
        },
        {
          "id": "536cc9ac-cbd7-49d2-a9fc-2d28e2d6cc04",
          "english": "bridge",
          "chinese": "词114",
          "pinyin": "cí114",
          "order": 4
        },
        {
          "id": "aa52412d-10da-4b18-9ad9-bb929069aa51",
          "english": "brief",
          "chinese": "词115",
          "pinyin": "cí115",
          "order": 5
        },
        {
          "id": "963b156b-d459-482d-8f65-e71159b72b26",
          "english": "bright",
          "chinese": "词116",
          "pinyin": "cí116",
          "order": 6
        },
        {
          "id": "e3bdf633-3da6-455e-a250-2f6d823dbe04",
          "english": "bring",
          "chinese": "词117",
          "pinyin": "cí117",
          "order": 7
        },
        {
          "id": "4dea9a79-d5a5-42c8-b6f4-7a525782c44b",
          "english": "broad",
          "chinese": "词118",
          "pinyin": "cí118",
          "order": 8
        },
        {
          "id": "22825583-8b04-43d5-9dca-e8b924d8e07a",
          "english": "brother",
          "chinese": "词119",
          "pinyin": "cí119",
          "order": 9
        }
      ]
    },
    {
      "id": "ac43ec44-ab17-49b8-b0f4-631e38d7311d",
      "name": "HSK 4 22",
      "description": "HSK 4 22 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "557bd589-335a-42db-9e08-107c64c7425b",
          "english": "budget",
          "chinese": "词120",
          "pinyin": "cí120",
          "order": 0
        },
        {
          "id": "1cfc9755-4cad-4c1b-8050-3c6d20d55fe8",
          "english": "build",
          "chinese": "词121",
          "pinyin": "cí121",
          "order": 1
        },
        {
          "id": "e6203678-f171-40c6-83c2-9ae406500c1f",
          "english": "building",
          "chinese": "词122",
          "pinyin": "cí122",
          "order": 2
        },
        {
          "id": "802f3620-13b3-4820-be93-c345a206bcc0",
          "english": "business",
          "chinese": "词123",
          "pinyin": "cí123",
          "order": 3
        },
        {
          "id": "7de4853f-631e-4f53-b3e5-144f0ed40cca",
          "english": "button",
          "chinese": "词124",
          "pinyin": "cí124",
          "order": 4
        },
        {
          "id": "c590da7f-60f0-49fc-be1c-9ffd0c86f2cd",
          "english": "buyer",
          "chinese": "词125",
          "pinyin": "cí125",
          "order": 5
        },
        {
          "id": "5654a47b-9cb8-40a0-a88a-1eed13b688ea",
          "english": "camera",
          "chinese": "词126",
          "pinyin": "cí126",
          "order": 6
        },
        {
          "id": "98d52609-b7f4-4811-9469-b43974c2e2c6",
          "english": "campaign",
          "chinese": "词127",
          "pinyin": "cí127",
          "order": 7
        },
        {
          "id": "39424d76-baa0-4e69-a2f2-b7ef1b3bd8bc",
          "english": "campus",
          "chinese": "词128",
          "pinyin": "cí128",
          "order": 8
        },
        {
          "id": "c9b5d5af-c2e6-44a5-b616-320552a76e68",
          "english": "cancer",
          "chinese": "词129",
          "pinyin": "cí129",
          "order": 9
        }
      ]
    },
    {
      "id": "84af136e-3bb4-4596-8b15-f6b2a385adbd",
      "name": "HSK 4 23",
      "description": "HSK 4 23 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "7cd283ea-04c0-406d-a694-ab5e0a9db439",
          "english": "candidate",
          "chinese": "词130",
          "pinyin": "cí130",
          "order": 0
        },
        {
          "id": "6ae41746-6b2e-43ba-873a-d04bed60693f",
          "english": "capable",
          "chinese": "词131",
          "pinyin": "cí131",
          "order": 1
        },
        {
          "id": "cf5b759c-6786-42ab-936b-85e9c57a70f1",
          "english": "capacity",
          "chinese": "词132",
          "pinyin": "cí132",
          "order": 2
        },
        {
          "id": "886f8823-72ef-4d1f-9886-ac8776f1d49a",
          "english": "capital",
          "chinese": "词133",
          "pinyin": "cí133",
          "order": 3
        },
        {
          "id": "b3ad55fd-fec9-489a-8527-8313a30ebe5a",
          "english": "captain",
          "chinese": "词134",
          "pinyin": "cí134",
          "order": 4
        },
        {
          "id": "c12fa74f-7e3f-41e9-9362-ae8f4921fc9e",
          "english": "capture",
          "chinese": "词135",
          "pinyin": "cí135",
          "order": 5
        },
        {
          "id": "916a7c14-de99-4605-824e-e6270c4769e8",
          "english": "carbon",
          "chinese": "词136",
          "pinyin": "cí136",
          "order": 6
        },
        {
          "id": "53bee817-4624-4302-b844-cd6e59d3b792",
          "english": "career",
          "chinese": "词137",
          "pinyin": "cí137",
          "order": 7
        },
        {
          "id": "1ff251b2-fab6-49b6-aab2-a5de4c2249c8",
          "english": "careful",
          "chinese": "词138",
          "pinyin": "cí138",
          "order": 8
        },
        {
          "id": "95fbd341-b5d8-4414-a6b0-4d278389306f",
          "english": "carry",
          "chinese": "词139",
          "pinyin": "cí139",
          "order": 9
        }
      ]
    },
    {
      "id": "590ede52-956e-40a6-abb4-981393b685c3",
      "name": "HSK 4 24",
      "description": "HSK 4 24 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "4dbe2ed9-dfd8-4bc2-8000-fe0997cc4c83",
          "english": "category",
          "chinese": "词140",
          "pinyin": "cí140",
          "order": 0
        },
        {
          "id": "b087a6a2-b6b8-488b-84ed-33a08e98468b",
          "english": "cause",
          "chinese": "词141",
          "pinyin": "cí141",
          "order": 1
        },
        {
          "id": "f9f6adfd-5401-41af-9c2b-fd0b820173ab",
          "english": "celebrate",
          "chinese": "词142",
          "pinyin": "cí142",
          "order": 2
        },
        {
          "id": "9c1f2c94-ab90-4103-bec6-013aa536f6f9",
          "english": "celebration",
          "chinese": "词143",
          "pinyin": "cí143",
          "order": 3
        },
        {
          "id": "157f4b51-f83d-4e15-8b2e-63482dd54cbd",
          "english": "center",
          "chinese": "词144",
          "pinyin": "cí144",
          "order": 4
        },
        {
          "id": "26870615-c362-4d53-a6d3-bb46916771bc",
          "english": "central",
          "chinese": "词145",
          "pinyin": "cí145",
          "order": 5
        },
        {
          "id": "5d454249-ecc4-47df-a382-cb531564f18a",
          "english": "century",
          "chinese": "词146",
          "pinyin": "cí146",
          "order": 6
        },
        {
          "id": "be616dec-12c3-4979-bbda-5093d9145cd9",
          "english": "ceremony",
          "chinese": "词147",
          "pinyin": "cí147",
          "order": 7
        },
        {
          "id": "1e939759-12a4-443c-85c8-06b2734288a0",
          "english": "certain",
          "chinese": "词148",
          "pinyin": "cí148",
          "order": 8
        },
        {
          "id": "3bc9c79a-4f2e-4709-9d7f-7494018f625c",
          "english": "certainly",
          "chinese": "词149",
          "pinyin": "cí149",
          "order": 9
        }
      ]
    },
    {
      "id": "44bb4cbb-4466-46bc-ac5e-89dce8679e0d",
      "name": "HSK 4 25",
      "description": "HSK 4 25 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "97b387da-0bb6-49f8-94d0-b429d938b0a2",
          "english": "chain",
          "chinese": "词150",
          "pinyin": "cí150",
          "order": 0
        },
        {
          "id": "95359880-2143-4b40-b4c7-9c5c9d47730a",
          "english": "chair",
          "chinese": "词151",
          "pinyin": "cí151",
          "order": 1
        },
        {
          "id": "6a1f136b-215e-47fd-8e17-7fba0523d160",
          "english": "chairman",
          "chinese": "词152",
          "pinyin": "cí152",
          "order": 2
        },
        {
          "id": "a5a70cc3-57e1-4e32-99bb-474a8cf0cd26",
          "english": "challenge",
          "chinese": "词153",
          "pinyin": "cí153",
          "order": 3
        },
        {
          "id": "73a201ea-4f3e-444b-b337-c84e4adf59a3",
          "english": "champion",
          "chinese": "词154",
          "pinyin": "cí154",
          "order": 4
        },
        {
          "id": "cd08b2a2-7efd-4d91-bd6c-8545126996b9",
          "english": "chance",
          "chinese": "词155",
          "pinyin": "cí155",
          "order": 5
        },
        {
          "id": "c43ace40-03b2-47a8-b0ba-524e6d8ead4e",
          "english": "change",
          "chinese": "词156",
          "pinyin": "cí156",
          "order": 6
        },
        {
          "id": "88b9afd2-c084-4873-a8f5-5cf1ba07eac9",
          "english": "channel",
          "chinese": "词157",
          "pinyin": "cí157",
          "order": 7
        },
        {
          "id": "2b0c6c0f-a5ad-440e-92ac-960be4e70193",
          "english": "chapter",
          "chinese": "词158",
          "pinyin": "cí158",
          "order": 8
        },
        {
          "id": "33d0d156-4391-4d81-89ea-8098e1a8b51b",
          "english": "character",
          "chinese": "词159",
          "pinyin": "cí159",
          "order": 9
        }
      ]
    },
    {
      "id": "de1cb353-bccd-4060-9383-047177d0800c",
      "name": "HSK 4 26",
      "description": "HSK 4 26 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "98d208f0-1f2a-4f2f-ad88-b136193e272a",
          "english": "charge",
          "chinese": "词160",
          "pinyin": "cí160",
          "order": 0
        },
        {
          "id": "5b9733eb-27d3-46df-9f29-46477d1cbbbc",
          "english": "charity",
          "chinese": "词161",
          "pinyin": "cí161",
          "order": 1
        },
        {
          "id": "8ab1e1ba-b0b8-46ec-bd65-2b747ae9ee05",
          "english": "chart",
          "chinese": "词162",
          "pinyin": "cí162",
          "order": 2
        },
        {
          "id": "84ce7f85-b5ed-4d6b-b03e-84e7b4da5bc1",
          "english": "cheap",
          "chinese": "词163",
          "pinyin": "cí163",
          "order": 3
        },
        {
          "id": "bebed9ca-fc60-4a01-b8a4-b73880ecb103",
          "english": "check",
          "chinese": "词164",
          "pinyin": "cí164",
          "order": 4
        },
        {
          "id": "afbae6ad-1c63-40ae-8308-7a50906625c2",
          "english": "chemical",
          "chinese": "词165",
          "pinyin": "cí165",
          "order": 5
        },
        {
          "id": "3e41aa80-cdf0-4d50-a02e-df25e6c1c6d4",
          "english": "chest",
          "chinese": "词166",
          "pinyin": "cí166",
          "order": 6
        },
        {
          "id": "598cd67f-9358-4372-bb54-f722222899f3",
          "english": "chicken",
          "chinese": "词167",
          "pinyin": "cí167",
          "order": 7
        },
        {
          "id": "65b35e33-76a8-48df-81e2-2ed3fc7cd882",
          "english": "chief",
          "chinese": "词168",
          "pinyin": "cí168",
          "order": 8
        },
        {
          "id": "d787fb62-9001-428f-b399-76c1c6248b11",
          "english": "child",
          "chinese": "词169",
          "pinyin": "cí169",
          "order": 9
        }
      ]
    },
    {
      "id": "0806a8b3-e030-49a3-ad4b-b711d5fedf19",
      "name": "HSK 4 27",
      "description": "HSK 4 27 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "d1836cc4-06a8-45ea-a4e3-92d23ed9948e",
          "english": "choice",
          "chinese": "词170",
          "pinyin": "cí170",
          "order": 0
        },
        {
          "id": "c1b56796-eb80-4b51-8fbf-431bee59994f",
          "english": "choose",
          "chinese": "词171",
          "pinyin": "cí171",
          "order": 1
        },
        {
          "id": "11fcb8de-27a9-415e-bbec-c98a4818dd92",
          "english": "church",
          "chinese": "词172",
          "pinyin": "cí172",
          "order": 2
        },
        {
          "id": "3115b781-2c88-416a-8339-a8e4bf6df6d3",
          "english": "circle",
          "chinese": "词173",
          "pinyin": "cí173",
          "order": 3
        },
        {
          "id": "6cf7c050-48bc-4bb9-8140-91d2f60634e4",
          "english": "citizen",
          "chinese": "词174",
          "pinyin": "cí174",
          "order": 4
        },
        {
          "id": "950b21e0-a57a-46fb-bd5d-c336bae2ec74",
          "english": "city",
          "chinese": "词175",
          "pinyin": "cí175",
          "order": 5
        },
        {
          "id": "47033bc8-83fc-40d7-afa3-aa0759b4b9a3",
          "english": "civil",
          "chinese": "词176",
          "pinyin": "cí176",
          "order": 6
        },
        {
          "id": "74c9151c-f7cf-4cbd-8de9-1d09e4602748",
          "english": "claim",
          "chinese": "词177",
          "pinyin": "cí177",
          "order": 7
        },
        {
          "id": "7f203f4e-761d-4232-bab8-4d0e01808b5d",
          "english": "class",
          "chinese": "词178",
          "pinyin": "cí178",
          "order": 8
        },
        {
          "id": "fced1778-c92c-46a4-9e52-139e82dc4bb0",
          "english": "classic",
          "chinese": "词179",
          "pinyin": "cí179",
          "order": 9
        }
      ]
    },
    {
      "id": "000ee494-b44d-461d-9106-e79d59796590",
      "name": "HSK 4 28",
      "description": "HSK 4 28 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "d7370361-cfe6-4865-a0d9-d020059ae338",
          "english": "classroom",
          "chinese": "词180",
          "pinyin": "cí180",
          "order": 0
        },
        {
          "id": "532319ec-8c71-46b3-9432-0a63f7037e64",
          "english": "clean",
          "chinese": "词181",
          "pinyin": "cí181",
          "order": 1
        },
        {
          "id": "e41ece2f-701b-4530-873f-1c08c4185ecf",
          "english": "clear",
          "chinese": "词182",
          "pinyin": "cí182",
          "order": 2
        },
        {
          "id": "7c5f8176-1905-4aa2-b1d9-d40c201c8e79",
          "english": "clearly",
          "chinese": "词183",
          "pinyin": "cí183",
          "order": 3
        },
        {
          "id": "1e30630d-b866-4798-b94d-10d924101c0c",
          "english": "client",
          "chinese": "词184",
          "pinyin": "cí184",
          "order": 4
        },
        {
          "id": "6b99cf29-7bb7-433b-894d-59218e91504c",
          "english": "climate",
          "chinese": "词185",
          "pinyin": "cí185",
          "order": 5
        },
        {
          "id": "f0990cac-cd43-4a41-8abc-d8c0d99df097",
          "english": "climb",
          "chinese": "词186",
          "pinyin": "cí186",
          "order": 6
        },
        {
          "id": "54137086-c8a9-4ad0-a732-5dfa67044624",
          "english": "clock",
          "chinese": "词187",
          "pinyin": "cí187",
          "order": 7
        },
        {
          "id": "0ee4f104-4a82-43d1-af71-757529bd8a8c",
          "english": "close",
          "chinese": "词188",
          "pinyin": "cí188",
          "order": 8
        },
        {
          "id": "e20b1ee8-244f-4c2d-b952-91f33c1c45be",
          "english": "clothes",
          "chinese": "词189",
          "pinyin": "cí189",
          "order": 9
        }
      ]
    },
    {
      "id": "352aaf49-cf82-4889-84d3-067f2fa8a70f",
      "name": "HSK 4 29",
      "description": "HSK 4 29 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "769de243-8879-4bd8-8f31-c665d6f8ec4c",
          "english": "cloud",
          "chinese": "词190",
          "pinyin": "cí190",
          "order": 0
        },
        {
          "id": "a4af937c-1c80-4d20-b7c8-6e20e28eac77",
          "english": "club",
          "chinese": "词191",
          "pinyin": "cí191",
          "order": 1
        },
        {
          "id": "a77ea694-3e78-485c-bb71-bc94f007969a",
          "english": "coach",
          "chinese": "词192",
          "pinyin": "cí192",
          "order": 2
        },
        {
          "id": "63e5a7d4-e7c5-4aad-840e-84934e67c196",
          "english": "coast",
          "chinese": "词193",
          "pinyin": "cí193",
          "order": 3
        },
        {
          "id": "062f3b22-8dba-459d-a89c-de9242eee514",
          "english": "coffee",
          "chinese": "词194",
          "pinyin": "cí194",
          "order": 4
        },
        {
          "id": "0229a7ee-49e9-481e-92c6-6264c456787b",
          "english": "cold",
          "chinese": "词195",
          "pinyin": "cí195",
          "order": 5
        },
        {
          "id": "67fca424-be34-423d-a2b0-a004c34246e1",
          "english": "collect",
          "chinese": "词196",
          "pinyin": "cí196",
          "order": 6
        },
        {
          "id": "39373518-3a53-41d6-b157-0e714a60bf0e",
          "english": "collection",
          "chinese": "词197",
          "pinyin": "cí197",
          "order": 7
        },
        {
          "id": "7c873a63-bbe1-4207-bcf9-dc739693712a",
          "english": "college",
          "chinese": "词198",
          "pinyin": "cí198",
          "order": 8
        },
        {
          "id": "40035eed-087d-4fed-b996-b2824cab43a2",
          "english": "color",
          "chinese": "词199",
          "pinyin": "cí199",
          "order": 9
        }
      ]
    },
    {
      "id": "17e00800-1c91-4976-aef8-32e18c535400",
      "name": "HSK 4 3",
      "description": "HSK 4 3 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "1215b1f6-183b-456a-8772-8db0e1911ef8",
          "english": "form",
          "chinese": "表格",
          "pinyin": "biǎogé",
          "order": 0
        },
        {
          "id": "f3416304-0378-4b8a-be1a-11685fa3ece0",
          "english": "express",
          "chinese": "表示",
          "pinyin": "biǎoshì",
          "order": 1
        },
        {
          "id": "ba158ac3-c96f-4db3-b846-55528cb51f89",
          "english": "perform",
          "chinese": "表演",
          "pinyin": "biǎoyǎn",
          "order": 2
        },
        {
          "id": "9a9c18cd-ced3-4d22-b5ec-cf7ce881306d",
          "english": "praise",
          "chinese": "表扬",
          "pinyin": "biǎoyáng",
          "order": 3
        },
        {
          "id": "7e0e7eeb-cb7d-4a3c-9d3b-227854c65fc6",
          "english": "biscuit",
          "chinese": "饼干",
          "pinyin": "bǐnggān",
          "order": 4
        },
        {
          "id": "92804bb8-628e-4880-8d04-deb62b90fb99",
          "english": "and",
          "chinese": "并且",
          "pinyin": "bìngqiě",
          "order": 5
        },
        {
          "id": "c44b5138-c52b-4fad-9e58-3747e3a75e50",
          "english": "doctor (PhD)",
          "chinese": "博士",
          "pinyin": "bóshì",
          "order": 6
        },
        {
          "id": "7ff49a78-92da-4d01-aaa0-b0759a8446e4",
          "english": "however",
          "chinese": "不过",
          "pinyin": "búguò",
          "order": 7
        },
        {
          "id": "8f4ce7c5-7148-4f1d-bebd-4951894661e1",
          "english": "have to",
          "chinese": "不得不",
          "pinyin": "bùdébù",
          "order": 8
        },
        {
          "id": "43ea03f3-5763-4666-9e85-68acf54bf15b",
          "english": "no matter",
          "chinese": "不管",
          "pinyin": "bùguǎn",
          "order": 9
        }
      ]
    },
    {
      "id": "677d20f0-3b94-4108-addc-b5e801735c17",
      "name": "HSK 4 30",
      "description": "HSK 4 30 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "c77cba00-67b1-4651-9d7f-4218f22d1546",
          "english": "column",
          "chinese": "词200",
          "pinyin": "cí200",
          "order": 0
        },
        {
          "id": "18474fb7-c6d4-460e-b3cd-230dc88eba0a",
          "english": "combination",
          "chinese": "词201",
          "pinyin": "cí201",
          "order": 1
        },
        {
          "id": "d87125c9-5f2a-4a79-ba68-73e09a84aebc",
          "english": "combine",
          "chinese": "词202",
          "pinyin": "cí202",
          "order": 2
        },
        {
          "id": "56d074a5-692a-4c9a-9153-08fd3576df6d",
          "english": "comfort",
          "chinese": "词203",
          "pinyin": "cí203",
          "order": 3
        },
        {
          "id": "64fc1879-7202-477e-bbd0-2e047ec30c9f",
          "english": "comfortable",
          "chinese": "词204",
          "pinyin": "cí204",
          "order": 4
        },
        {
          "id": "0bdb93fa-7fa6-454f-ad21-38554db27f3e",
          "english": "command",
          "chinese": "词205",
          "pinyin": "cí205",
          "order": 5
        },
        {
          "id": "a5d4b509-18b2-4b8f-a1f8-899d2e00d5eb",
          "english": "comment",
          "chinese": "词206",
          "pinyin": "cí206",
          "order": 6
        },
        {
          "id": "225630a1-bca5-4ae8-b368-2160539976d3",
          "english": "commercial",
          "chinese": "词207",
          "pinyin": "cí207",
          "order": 7
        },
        {
          "id": "e19a14eb-cb80-4587-986c-954650495da8",
          "english": "commission",
          "chinese": "词208",
          "pinyin": "cí208",
          "order": 8
        },
        {
          "id": "a68d6f21-5a84-488b-821e-048788375c44",
          "english": "commit",
          "chinese": "词209",
          "pinyin": "cí209",
          "order": 9
        }
      ]
    },
    {
      "id": "292830eb-352a-4e91-9614-03af77986fec",
      "name": "HSK 4 31",
      "description": "HSK 4 31 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "44464d71-e401-4461-ac15-fc01170323a2",
          "english": "commitment",
          "chinese": "词210",
          "pinyin": "cí210",
          "order": 0
        },
        {
          "id": "f585f2fb-83ea-4ebb-81b9-6306fd0f96ed",
          "english": "committee",
          "chinese": "词211",
          "pinyin": "cí211",
          "order": 1
        },
        {
          "id": "c6e79df1-91db-49cc-b406-f0060f791f9a",
          "english": "common",
          "chinese": "词212",
          "pinyin": "cí212",
          "order": 2
        },
        {
          "id": "46c11dcd-7582-4566-8f20-83af1c910926",
          "english": "communicate",
          "chinese": "词213",
          "pinyin": "cí213",
          "order": 3
        },
        {
          "id": "34f44499-539d-4dae-a1fe-dc0830cd2672",
          "english": "communication",
          "chinese": "词214",
          "pinyin": "cí214",
          "order": 4
        },
        {
          "id": "0057c298-4f00-4296-9775-317b588e146d",
          "english": "community",
          "chinese": "词215",
          "pinyin": "cí215",
          "order": 5
        },
        {
          "id": "f25d2388-8148-4f9f-8383-e84b4cb7df20",
          "english": "company",
          "chinese": "词216",
          "pinyin": "cí216",
          "order": 6
        },
        {
          "id": "f805526d-05f1-4cd5-a7fe-0e1136eb7e81",
          "english": "compare",
          "chinese": "词217",
          "pinyin": "cí217",
          "order": 7
        },
        {
          "id": "b5a59bb7-08c7-41d3-b7c3-43fad71821cd",
          "english": "comparison",
          "chinese": "词218",
          "pinyin": "cí218",
          "order": 8
        },
        {
          "id": "4d0d098e-ddd7-47c9-a792-24e204e51a61",
          "english": "compete",
          "chinese": "词219",
          "pinyin": "cí219",
          "order": 9
        }
      ]
    },
    {
      "id": "9c3b8fe5-683a-4047-aef1-7e73f99604c8",
      "name": "HSK 4 32",
      "description": "HSK 4 32 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "17f848bf-e39d-48e3-8cd8-8b9a4c6f69dd",
          "english": "competition",
          "chinese": "词220",
          "pinyin": "cí220",
          "order": 0
        },
        {
          "id": "f4822d91-48ef-4cff-8ab5-43e36dfd9f22",
          "english": "competitive",
          "chinese": "词221",
          "pinyin": "cí221",
          "order": 1
        },
        {
          "id": "8147ad87-41dd-4094-b36e-8530b88cee5d",
          "english": "competitor",
          "chinese": "词222",
          "pinyin": "cí222",
          "order": 2
        },
        {
          "id": "894037dd-a5e4-49ff-a2dd-7471d3184002",
          "english": "complain",
          "chinese": "词223",
          "pinyin": "cí223",
          "order": 3
        },
        {
          "id": "64c3aa62-be9d-4ad2-a94f-0e9df51e1997",
          "english": "complaint",
          "chinese": "词224",
          "pinyin": "cí224",
          "order": 4
        },
        {
          "id": "a51e969e-3400-4849-b6ae-d544d3c1452e",
          "english": "complete",
          "chinese": "词225",
          "pinyin": "cí225",
          "order": 5
        },
        {
          "id": "6ba92383-e9de-42f3-aa4a-133f3edb888b",
          "english": "complex",
          "chinese": "词226",
          "pinyin": "cí226",
          "order": 6
        },
        {
          "id": "e44add6e-fde9-465e-9a57-2cb1a3675c53",
          "english": "component",
          "chinese": "词227",
          "pinyin": "cí227",
          "order": 7
        },
        {
          "id": "1ed63748-451a-43d2-a95f-5e330d31d62f",
          "english": "computer",
          "chinese": "词228",
          "pinyin": "cí228",
          "order": 8
        },
        {
          "id": "e8a444a2-d75a-49f5-9acf-6242b57a5068",
          "english": "concept",
          "chinese": "词229",
          "pinyin": "cí229",
          "order": 9
        }
      ]
    },
    {
      "id": "e3fd0cfe-9d08-4f29-807c-7a490f0ad3e2",
      "name": "HSK 4 33",
      "description": "HSK 4 33 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "9f97b15f-a8f0-4872-b39b-c7d1fa519331",
          "english": "concern",
          "chinese": "词230",
          "pinyin": "cí230",
          "order": 0
        },
        {
          "id": "4e03fb7e-a873-4c61-bacd-50eb4cb68c83",
          "english": "concerned",
          "chinese": "词231",
          "pinyin": "cí231",
          "order": 1
        },
        {
          "id": "5b0f221f-b849-42f9-b720-2dbeb32794e4",
          "english": "concert",
          "chinese": "词232",
          "pinyin": "cí232",
          "order": 2
        },
        {
          "id": "f179a418-f2c1-43ef-a01d-f195b92ac5fe",
          "english": "conclusion",
          "chinese": "词233",
          "pinyin": "cí233",
          "order": 3
        },
        {
          "id": "a0e3d84b-9bdd-4027-8f07-c35638ba085d",
          "english": "condition",
          "chinese": "词234",
          "pinyin": "cí234",
          "order": 4
        },
        {
          "id": "fe08b533-4b78-4515-9a0e-e16f03ccd748",
          "english": "conduct",
          "chinese": "词235",
          "pinyin": "cí235",
          "order": 5
        },
        {
          "id": "832a5a86-ee5c-45b1-9ba5-68015c45c953",
          "english": "conference",
          "chinese": "词236",
          "pinyin": "cí236",
          "order": 6
        },
        {
          "id": "06e06309-eecb-4fa8-b754-e5e2da5f0975",
          "english": "confidence",
          "chinese": "词237",
          "pinyin": "cí237",
          "order": 7
        },
        {
          "id": "5069fb86-5ca3-4d8e-bd97-613783c418a0",
          "english": "confident",
          "chinese": "词238",
          "pinyin": "cí238",
          "order": 8
        },
        {
          "id": "4649c3be-4542-4dde-80af-7df479669ab0",
          "english": "confirm",
          "chinese": "词239",
          "pinyin": "cí239",
          "order": 9
        }
      ]
    },
    {
      "id": "cd63c543-1103-47b7-9db1-0e69eca67857",
      "name": "HSK 4 34",
      "description": "HSK 4 34 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "49d5b0d8-adbf-4b0f-af68-da07962b22de",
          "english": "conflict",
          "chinese": "词240",
          "pinyin": "cí240",
          "order": 0
        },
        {
          "id": "69b3f912-7b76-4e52-9658-81fc5969afc7",
          "english": "confused",
          "chinese": "词241",
          "pinyin": "cí241",
          "order": 1
        },
        {
          "id": "905c5933-0d3d-4501-ad4c-20036c5e2d20",
          "english": "congress",
          "chinese": "词242",
          "pinyin": "cí242",
          "order": 2
        },
        {
          "id": "24bc9b90-5015-4cb3-904d-5ac4107f30f9",
          "english": "connect",
          "chinese": "词243",
          "pinyin": "cí243",
          "order": 3
        },
        {
          "id": "e7aa35c7-1d33-4755-8c63-1098b380e9f9",
          "english": "connection",
          "chinese": "词244",
          "pinyin": "cí244",
          "order": 4
        },
        {
          "id": "1460131c-f83e-4f53-bd51-a527cc2f0757",
          "english": "consciousness",
          "chinese": "词245",
          "pinyin": "cí245",
          "order": 5
        },
        {
          "id": "984ace82-bb61-4c55-a242-6431e9ab08a5",
          "english": "consequence",
          "chinese": "词246",
          "pinyin": "cí246",
          "order": 6
        },
        {
          "id": "88e362a8-f6ef-4128-af91-94c7e1e16264",
          "english": "conservative",
          "chinese": "词247",
          "pinyin": "cí247",
          "order": 7
        },
        {
          "id": "884cc082-93cd-4f7a-b491-5617fbc85730",
          "english": "consider",
          "chinese": "词248",
          "pinyin": "cí248",
          "order": 8
        },
        {
          "id": "55494766-733d-4f9d-84a1-7500b7cd7f6e",
          "english": "consideration",
          "chinese": "词249",
          "pinyin": "cí249",
          "order": 9
        }
      ]
    },
    {
      "id": "660c4bc8-289d-4182-8a2e-019468d9caa6",
      "name": "HSK 4 35",
      "description": "HSK 4 35 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "d508f3ee-1dcb-4bfb-9eb6-0ed25ec949a0",
          "english": "consist",
          "chinese": "词250",
          "pinyin": "cí250",
          "order": 0
        },
        {
          "id": "49f74c91-d111-425e-85b6-1511f105d2df",
          "english": "consistent",
          "chinese": "词251",
          "pinyin": "cí251",
          "order": 1
        },
        {
          "id": "0d9a46ca-fa4c-4750-ab00-6a4b7d0f5ec2",
          "english": "constant",
          "chinese": "词252",
          "pinyin": "cí252",
          "order": 2
        },
        {
          "id": "e31ddec6-a380-40c1-8f28-489380f753ee",
          "english": "constitute",
          "chinese": "词253",
          "pinyin": "cí253",
          "order": 3
        },
        {
          "id": "42242c96-406c-4dae-bc80-104784ae973e",
          "english": "construction",
          "chinese": "词254",
          "pinyin": "cí254",
          "order": 4
        },
        {
          "id": "cee2d2d7-c42d-4fc3-b454-009777c3fdd9",
          "english": "consume",
          "chinese": "词255",
          "pinyin": "cí255",
          "order": 5
        },
        {
          "id": "2ed82153-fcaf-41de-b0b7-2351ddbdb482",
          "english": "consumer",
          "chinese": "词256",
          "pinyin": "cí256",
          "order": 6
        },
        {
          "id": "64a26221-6935-4d27-a873-79bd557f00af",
          "english": "contact",
          "chinese": "词257",
          "pinyin": "cí257",
          "order": 7
        },
        {
          "id": "814bbef8-61ed-4c89-86de-c8a4a8ac0c0e",
          "english": "contain",
          "chinese": "词258",
          "pinyin": "cí258",
          "order": 8
        },
        {
          "id": "dafb0845-a0a0-4a65-ba35-48a604dab75d",
          "english": "container",
          "chinese": "词259",
          "pinyin": "cí259",
          "order": 9
        }
      ]
    },
    {
      "id": "ce007434-9c08-45e6-9ad3-ea755fc59016",
      "name": "HSK 4 36",
      "description": "HSK 4 36 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "bf30f432-857f-48ba-9a09-9f04aa91a648",
          "english": "content",
          "chinese": "词260",
          "pinyin": "cí260",
          "order": 0
        },
        {
          "id": "9fa08e2c-68f2-48e3-b84c-2df5cd1f0157",
          "english": "contest",
          "chinese": "词261",
          "pinyin": "cí261",
          "order": 1
        },
        {
          "id": "b1dfc1de-f5ee-4b37-8eaa-4115536262c0",
          "english": "context",
          "chinese": "词262",
          "pinyin": "cí262",
          "order": 2
        },
        {
          "id": "d8dfd602-1a28-418b-a939-a39adafff4ac",
          "english": "continue",
          "chinese": "词263",
          "pinyin": "cí263",
          "order": 3
        },
        {
          "id": "1fed5528-0f38-49d1-b7f2-88385f439700",
          "english": "contract",
          "chinese": "词264",
          "pinyin": "cí264",
          "order": 4
        },
        {
          "id": "48e4a8b6-889f-4356-bb6c-d00278e4fbe9",
          "english": "contrast",
          "chinese": "词265",
          "pinyin": "cí265",
          "order": 5
        },
        {
          "id": "ce093a07-94c5-499b-81ec-bfc82aec902a",
          "english": "contribute",
          "chinese": "词266",
          "pinyin": "cí266",
          "order": 6
        },
        {
          "id": "29081c99-0a58-462c-a127-be6f293e7fcc",
          "english": "contribution",
          "chinese": "词267",
          "pinyin": "cí267",
          "order": 7
        },
        {
          "id": "d1928d6c-bfa8-4dd2-aa2e-aa88fb69ac1d",
          "english": "control",
          "chinese": "词268",
          "pinyin": "cí268",
          "order": 8
        },
        {
          "id": "420b2a49-bfed-4a65-a4ba-cd748ae46859",
          "english": "controversial",
          "chinese": "词269",
          "pinyin": "cí269",
          "order": 9
        }
      ]
    },
    {
      "id": "4f012826-0a80-4e7d-a53f-b05bf20ba6fc",
      "name": "HSK 4 37",
      "description": "HSK 4 37 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "3433555e-655a-4dc4-9ded-4d56516b3896",
          "english": "conversation",
          "chinese": "词270",
          "pinyin": "cí270",
          "order": 0
        },
        {
          "id": "56e45a10-f17b-4ba5-b098-2ed05bb58be3",
          "english": "convert",
          "chinese": "词271",
          "pinyin": "cí271",
          "order": 1
        },
        {
          "id": "640dcc21-ee05-4b4a-8222-c1f88fb92730",
          "english": "convince",
          "chinese": "词272",
          "pinyin": "cí272",
          "order": 2
        },
        {
          "id": "34eb8922-2ecb-4087-9938-1bcf31862ac3",
          "english": "cook",
          "chinese": "词273",
          "pinyin": "cí273",
          "order": 3
        },
        {
          "id": "1e24b0a7-5720-466d-9d3e-8a9e633e1d8a",
          "english": "cookie",
          "chinese": "词274",
          "pinyin": "cí274",
          "order": 4
        },
        {
          "id": "674e607e-dfc2-44f1-a284-37421217ca8b",
          "english": "cooking",
          "chinese": "词275",
          "pinyin": "cí275",
          "order": 5
        },
        {
          "id": "546fedbe-cd5e-4546-be34-bddd29f6e876",
          "english": "cool",
          "chinese": "词276",
          "pinyin": "cí276",
          "order": 6
        },
        {
          "id": "8f8d168f-6589-4140-80c8-9979519c0f82",
          "english": "cooperation",
          "chinese": "词277",
          "pinyin": "cí277",
          "order": 7
        },
        {
          "id": "971969ed-919f-497d-bf90-b7b26cf18a86",
          "english": "copy",
          "chinese": "词278",
          "pinyin": "cí278",
          "order": 8
        },
        {
          "id": "fa0939ca-4c55-4725-b98f-ac9ce7dc53cf",
          "english": "corner",
          "chinese": "词279",
          "pinyin": "cí279",
          "order": 9
        }
      ]
    },
    {
      "id": "24689501-de29-419a-9545-57c3e041ebba",
      "name": "HSK 4 38",
      "description": "HSK 4 38 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "2fd3ac78-d31e-4b3c-92f7-e08f6b06d1b1",
          "english": "corporate",
          "chinese": "词280",
          "pinyin": "cí280",
          "order": 0
        },
        {
          "id": "8b253e13-426f-4a16-9cd6-51e879d934ab",
          "english": "correct",
          "chinese": "词281",
          "pinyin": "cí281",
          "order": 1
        },
        {
          "id": "b9d0c425-6c04-4902-b850-3b2c601a6c1d",
          "english": "cost",
          "chinese": "词282",
          "pinyin": "cí282",
          "order": 2
        },
        {
          "id": "962c9917-64c5-4222-bbf1-a0b25195a7ad",
          "english": "cotton",
          "chinese": "词283",
          "pinyin": "cí283",
          "order": 3
        },
        {
          "id": "5136e83c-53b7-401f-a29e-c4ebcf11c175",
          "english": "could",
          "chinese": "词284",
          "pinyin": "cí284",
          "order": 4
        },
        {
          "id": "e554c0ec-3c03-4a6b-b10b-6871eb0362f5",
          "english": "council",
          "chinese": "词285",
          "pinyin": "cí285",
          "order": 5
        },
        {
          "id": "091d4bec-8e2b-4c81-bb4f-14e7d2f7b5a9",
          "english": "count",
          "chinese": "词286",
          "pinyin": "cí286",
          "order": 6
        },
        {
          "id": "1d8519a5-6dbe-455c-83a9-cecf5b3b8ec4",
          "english": "counter",
          "chinese": "词287",
          "pinyin": "cí287",
          "order": 7
        },
        {
          "id": "6306d7ae-2601-4822-92c0-291a88e673b4",
          "english": "country",
          "chinese": "词288",
          "pinyin": "cí288",
          "order": 8
        },
        {
          "id": "58352243-1451-4b1f-98ce-a7ec9c7858b6",
          "english": "county",
          "chinese": "词289",
          "pinyin": "cí289",
          "order": 9
        }
      ]
    },
    {
      "id": "d208935d-8f29-4b66-82bd-d10f2624a6d5",
      "name": "HSK 4 39",
      "description": "HSK 4 39 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "965bd41b-620d-467f-a98d-5380c2ce8892",
          "english": "couple",
          "chinese": "词290",
          "pinyin": "cí290",
          "order": 0
        },
        {
          "id": "02280252-5837-40c3-af3d-360545b1ee53",
          "english": "courage",
          "chinese": "词291",
          "pinyin": "cí291",
          "order": 1
        },
        {
          "id": "e04d9dde-564c-4639-aea4-7e32df9d2968",
          "english": "course",
          "chinese": "词292",
          "pinyin": "cí292",
          "order": 2
        },
        {
          "id": "74150003-fef0-4ba3-ac7d-9a6ff854207f",
          "english": "court",
          "chinese": "词293",
          "pinyin": "cí293",
          "order": 3
        },
        {
          "id": "92eb138c-cf90-45bc-8300-fd363a656a6f",
          "english": "cover",
          "chinese": "词294",
          "pinyin": "cí294",
          "order": 4
        },
        {
          "id": "6fe6827c-a1a9-481f-8b87-700b9c39a677",
          "english": "coverage",
          "chinese": "词295",
          "pinyin": "cí295",
          "order": 5
        },
        {
          "id": "b40076fd-954c-44d0-8655-90d800215c90",
          "english": "crack",
          "chinese": "词296",
          "pinyin": "cí296",
          "order": 6
        },
        {
          "id": "85edb8a9-445f-4b3b-989e-e3c576edd9c1",
          "english": "craft",
          "chinese": "词297",
          "pinyin": "cí297",
          "order": 7
        },
        {
          "id": "f4c2c98b-40e0-4a35-941e-09dc45bbd662",
          "english": "crash",
          "chinese": "词298",
          "pinyin": "cí298",
          "order": 8
        },
        {
          "id": "ce76cdad-7688-4103-a4d7-3376680ce8e9",
          "english": "crazy",
          "chinese": "词299",
          "pinyin": "cí299",
          "order": 9
        }
      ]
    },
    {
      "id": "65f25035-f467-499c-b81d-836865941a99",
      "name": "HSK 4 4",
      "description": "HSK 4 4 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "2152865b-79c3-4087-af9c-860c0f2c4acb",
          "english": "not only",
          "chinese": "不仅",
          "pinyin": "bùjǐn",
          "order": 0
        },
        {
          "id": "5779e806-58c3-478d-a839-af1c53658e1f",
          "english": "part",
          "chinese": "部分",
          "pinyin": "bùfen",
          "order": 1
        },
        {
          "id": "662c946a-2203-4290-a18e-811e1e03db33",
          "english": "wipe",
          "chinese": "擦",
          "pinyin": "cā",
          "order": 2
        },
        {
          "id": "49dfeb2f-73e7-488c-90bb-24a332fb067a",
          "english": "guess",
          "chinese": "猜",
          "pinyin": "cāi",
          "order": 3
        },
        {
          "id": "c124770f-25df-4a24-9af8-1905a1b83513",
          "english": "material",
          "chinese": "材料",
          "pinyin": "cáiliào",
          "order": 4
        },
        {
          "id": "3b04e44a-0475-45ca-b937-a24d60661aa3",
          "english": "visit",
          "chinese": "参观",
          "pinyin": "cānguān",
          "order": 5
        },
        {
          "id": "8f49d9c9-4b36-4760-b4ef-ea4c3b8006e6",
          "english": "dining hall",
          "chinese": "餐厅",
          "pinyin": "cāntīng",
          "order": 6
        },
        {
          "id": "f8bd97d4-98a1-4fd7-b357-e669d3505527",
          "english": "almost",
          "chinese": "差不多",
          "pinyin": "chàbuduō",
          "order": 7
        },
        {
          "id": "90b52c82-a92a-4604-aa9d-e57c27757558",
          "english": "taste",
          "chinese": "尝",
          "pinyin": "cháng",
          "order": 8
        },
        {
          "id": "322d448f-cf7c-46d2-a8e0-4d64bb7d051c",
          "english": "Great Wall",
          "chinese": "长城",
          "pinyin": "chángchéng",
          "order": 9
        }
      ]
    },
    {
      "id": "8a513578-33fd-4eab-a6a1-abeba445c5d0",
      "name": "HSK 4 40",
      "description": "HSK 4 40 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "03a23a2a-1c67-4d16-8a88-90396ec47fa7",
          "english": "cream",
          "chinese": "词300",
          "pinyin": "cí300",
          "order": 0
        },
        {
          "id": "402a5241-361a-40f2-804f-a5e0bf09d235",
          "english": "create",
          "chinese": "词301",
          "pinyin": "cí301",
          "order": 1
        },
        {
          "id": "e2474d0d-8115-4e75-8eff-247247a3d362",
          "english": "creation",
          "chinese": "词302",
          "pinyin": "cí302",
          "order": 2
        },
        {
          "id": "b3605cb8-ae4a-4b95-9544-39b77d7e6aaa",
          "english": "creative",
          "chinese": "词303",
          "pinyin": "cí303",
          "order": 3
        },
        {
          "id": "45fa55c0-fad2-44b0-b990-050bf2581ba3",
          "english": "creator",
          "chinese": "词304",
          "pinyin": "cí304",
          "order": 4
        },
        {
          "id": "c46f033e-cd68-4dba-9003-f52c57b5ef4e",
          "english": "credit",
          "chinese": "词305",
          "pinyin": "cí305",
          "order": 5
        },
        {
          "id": "07acf11c-8afd-46c0-b27e-26613d214290",
          "english": "crew",
          "chinese": "词306",
          "pinyin": "cí306",
          "order": 6
        },
        {
          "id": "f29c0b95-13c5-42ef-ad9f-931690ffabb7",
          "english": "crime",
          "chinese": "词307",
          "pinyin": "cí307",
          "order": 7
        },
        {
          "id": "3a8a1847-3022-48b9-9908-d56bbb2e7113",
          "english": "criminal",
          "chinese": "词308",
          "pinyin": "cí308",
          "order": 8
        },
        {
          "id": "0df1d7e3-b755-481b-af0a-987b6043ef0f",
          "english": "crisis",
          "chinese": "词309",
          "pinyin": "cí309",
          "order": 9
        }
      ]
    },
    {
      "id": "de0ab28a-b10c-4203-940f-46e99dd64114",
      "name": "HSK 4 41",
      "description": "HSK 4 41 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "9cfed15d-8de5-498f-ad92-79e9bc9682b0",
          "english": "criteria",
          "chinese": "词310",
          "pinyin": "cí310",
          "order": 0
        },
        {
          "id": "60fdc14a-f4eb-4c27-9535-2fdec5748c07",
          "english": "critic",
          "chinese": "词311",
          "pinyin": "cí311",
          "order": 1
        },
        {
          "id": "90c35fa7-5186-4ece-8ed5-914ee1035864",
          "english": "critical",
          "chinese": "词312",
          "pinyin": "cí312",
          "order": 2
        },
        {
          "id": "13b6a3fb-4f85-45e1-b91c-e0bccfa90a8a",
          "english": "criticism",
          "chinese": "词313",
          "pinyin": "cí313",
          "order": 3
        },
        {
          "id": "6b0f07c7-4e2c-491b-997e-b9d9d8eb238e",
          "english": "criticize",
          "chinese": "词314",
          "pinyin": "cí314",
          "order": 4
        },
        {
          "id": "34c7434c-c0fa-49c5-9845-f56843b68206",
          "english": "crop",
          "chinese": "词315",
          "pinyin": "cí315",
          "order": 5
        },
        {
          "id": "adc976bd-5a1a-4c8f-8fb7-4c6a58394ff3",
          "english": "cross",
          "chinese": "词316",
          "pinyin": "cí316",
          "order": 6
        },
        {
          "id": "c978b7bb-4aee-4a17-83dd-eb4ee2096ca8",
          "english": "crowd",
          "chinese": "词317",
          "pinyin": "cí317",
          "order": 7
        },
        {
          "id": "2a0539d9-7432-4ff4-a182-cd9c94d0001e",
          "english": "crucial",
          "chinese": "词318",
          "pinyin": "cí318",
          "order": 8
        },
        {
          "id": "b658228a-86ba-4c52-a19e-b4a18628bf3f",
          "english": "cruise",
          "chinese": "词319",
          "pinyin": "cí319",
          "order": 9
        }
      ]
    },
    {
      "id": "50298981-520b-4ca3-817a-d15380e2a939",
      "name": "HSK 4 42",
      "description": "HSK 4 42 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "7f41535e-a6e2-4fb1-8659-74553a35ce9b",
          "english": "culture",
          "chinese": "词320",
          "pinyin": "cí320",
          "order": 0
        },
        {
          "id": "683888ba-c4fd-49e6-9609-8e3fcb82dfd8",
          "english": "cup",
          "chinese": "词321",
          "pinyin": "cí321",
          "order": 1
        },
        {
          "id": "80e93e4c-77a6-4073-94ed-98622edc7cae",
          "english": "curious",
          "chinese": "词322",
          "pinyin": "cí322",
          "order": 2
        },
        {
          "id": "f17327ab-3968-4ea1-afb3-57b754d4581f",
          "english": "current",
          "chinese": "词323",
          "pinyin": "cí323",
          "order": 3
        },
        {
          "id": "af72cbdc-1b83-4fbc-919f-2f484e93c480",
          "english": "currently",
          "chinese": "词324",
          "pinyin": "cí324",
          "order": 4
        },
        {
          "id": "6cfab25d-dbab-4c0d-80f2-cf79474aff0c",
          "english": "curve",
          "chinese": "词325",
          "pinyin": "cí325",
          "order": 5
        },
        {
          "id": "c9317b3e-f316-454a-a1ab-65d7d8a7fe79",
          "english": "custom",
          "chinese": "词326",
          "pinyin": "cí326",
          "order": 6
        },
        {
          "id": "8414f17e-bb0d-4259-994f-6d4e26632b4a",
          "english": "customer",
          "chinese": "词327",
          "pinyin": "cí327",
          "order": 7
        },
        {
          "id": "2fd115db-5483-4949-ac2d-2b39b0f8bcee",
          "english": "cycle",
          "chinese": "词328",
          "pinyin": "cí328",
          "order": 8
        },
        {
          "id": "debdbf67-bcd3-43a4-816f-065c8155b626",
          "english": "daily",
          "chinese": "词329",
          "pinyin": "cí329",
          "order": 9
        }
      ]
    },
    {
      "id": "3290784f-174a-49d0-a40c-3fd1b452dd4c",
      "name": "HSK 4 43",
      "description": "HSK 4 43 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "4cbaf096-ee95-4b2d-8d30-ffa7dd859938",
          "english": "damage",
          "chinese": "词330",
          "pinyin": "cí330",
          "order": 0
        },
        {
          "id": "cf1c1501-07bc-4e34-8122-fcefdb1d16b7",
          "english": "dance",
          "chinese": "词331",
          "pinyin": "cí331",
          "order": 1
        },
        {
          "id": "f79f2d95-d0e4-4f5b-9734-0ff859fc0e79",
          "english": "danger",
          "chinese": "词332",
          "pinyin": "cí332",
          "order": 2
        },
        {
          "id": "240a6dd8-3eeb-4782-92f6-d0ef3b17b448",
          "english": "dangerous",
          "chinese": "词333",
          "pinyin": "cí333",
          "order": 3
        },
        {
          "id": "92f1b8ac-c2a4-4895-a59c-ec2f9403eba9",
          "english": "dark",
          "chinese": "词334",
          "pinyin": "cí334",
          "order": 4
        },
        {
          "id": "c361bba2-e565-4573-a4db-b9302c256dd9",
          "english": "darkness",
          "chinese": "词335",
          "pinyin": "cí335",
          "order": 5
        },
        {
          "id": "d89c828d-2ac3-423f-8320-b80e89d825ad",
          "english": "data",
          "chinese": "词336",
          "pinyin": "cí336",
          "order": 6
        },
        {
          "id": "9f3383a9-e7ad-4393-9c31-20ad15b23d07",
          "english": "date",
          "chinese": "词337",
          "pinyin": "cí337",
          "order": 7
        },
        {
          "id": "53796edc-3504-4297-a788-036786b8c382",
          "english": "daughter",
          "chinese": "词338",
          "pinyin": "cí338",
          "order": 8
        },
        {
          "id": "c00a1b19-b9a2-473b-8e79-cde3b2316011",
          "english": "deal",
          "chinese": "词339",
          "pinyin": "cí339",
          "order": 9
        }
      ]
    },
    {
      "id": "9a869e52-5296-45d1-acb2-8c0e8191dca6",
      "name": "HSK 4 44",
      "description": "HSK 4 44 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "c02742dc-0a36-48fa-9675-6d117ea06844",
          "english": "dealer",
          "chinese": "词340",
          "pinyin": "cí340",
          "order": 0
        },
        {
          "id": "bf628960-1a8b-4d1d-bdda-fe8062224970",
          "english": "dear",
          "chinese": "词341",
          "pinyin": "cí341",
          "order": 1
        },
        {
          "id": "585941a4-e496-4f4e-81ab-d12c59bda5d1",
          "english": "death",
          "chinese": "词342",
          "pinyin": "cí342",
          "order": 2
        },
        {
          "id": "e605c5c7-0274-4ae4-8b57-a361389d04ae",
          "english": "debate",
          "chinese": "词343",
          "pinyin": "cí343",
          "order": 3
        },
        {
          "id": "6379790c-1ff7-41bc-94f8-79ee7eb11492",
          "english": "debt",
          "chinese": "词344",
          "pinyin": "cí344",
          "order": 4
        },
        {
          "id": "6dc26c3b-a835-40e5-bf28-3e82e4234aeb",
          "english": "decade",
          "chinese": "词345",
          "pinyin": "cí345",
          "order": 5
        },
        {
          "id": "dec0d97c-6dc3-4488-a80a-3c058b45c595",
          "english": "decide",
          "chinese": "词346",
          "pinyin": "cí346",
          "order": 6
        },
        {
          "id": "11d7c537-6fff-4cdb-a1ff-c270f084a98e",
          "english": "decision",
          "chinese": "词347",
          "pinyin": "cí347",
          "order": 7
        },
        {
          "id": "a44a53ed-6fdd-4ca0-aafc-de224d51f407",
          "english": "deck",
          "chinese": "词348",
          "pinyin": "cí348",
          "order": 8
        },
        {
          "id": "303b7def-9186-4a81-9de2-c973aeafa493",
          "english": "declare",
          "chinese": "词349",
          "pinyin": "cí349",
          "order": 9
        }
      ]
    },
    {
      "id": "c3abc42b-02d7-45ac-bc11-1fec04214f93",
      "name": "HSK 4 45",
      "description": "HSK 4 45 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "f28fe91f-b40f-4989-99ea-a716d881d6fc",
          "english": "deep",
          "chinese": "词350",
          "pinyin": "cí350",
          "order": 0
        },
        {
          "id": "e5357416-3493-417d-b746-4f81e06e75d8",
          "english": "deeply",
          "chinese": "词351",
          "pinyin": "cí351",
          "order": 1
        },
        {
          "id": "44dca56b-7d0a-4e3e-85cf-61c0a66f4d20",
          "english": "defeat",
          "chinese": "词352",
          "pinyin": "cí352",
          "order": 2
        },
        {
          "id": "213a4266-b35a-4904-ba46-e617487b6232",
          "english": "defend",
          "chinese": "词353",
          "pinyin": "cí353",
          "order": 3
        },
        {
          "id": "5cd501b8-88c5-4d47-9bc7-b79618b4a481",
          "english": "defense",
          "chinese": "词354",
          "pinyin": "cí354",
          "order": 4
        },
        {
          "id": "ba8a9d64-77c7-4642-9bb1-148424717c32",
          "english": "defensive",
          "chinese": "词355",
          "pinyin": "cí355",
          "order": 5
        },
        {
          "id": "091a0858-f131-4915-8b98-a3b68a61c644",
          "english": "deficit",
          "chinese": "词356",
          "pinyin": "cí356",
          "order": 6
        },
        {
          "id": "e0a0d014-cd2e-4b68-9524-823f101ae321",
          "english": "define",
          "chinese": "词357",
          "pinyin": "cí357",
          "order": 7
        },
        {
          "id": "86f1204f-371d-49d5-936b-7d60aa36e60b",
          "english": "definitely",
          "chinese": "词358",
          "pinyin": "cí358",
          "order": 8
        },
        {
          "id": "61049c16-ec59-4927-8c75-ec80d19191db",
          "english": "definition",
          "chinese": "词359",
          "pinyin": "cí359",
          "order": 9
        }
      ]
    },
    {
      "id": "acd0f96c-9267-4bdd-8e30-d1a97c72ef3a",
      "name": "HSK 4 46",
      "description": "HSK 4 46 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "9580626e-4891-43dd-a547-41ebf0195b20",
          "english": "degree",
          "chinese": "词360",
          "pinyin": "cí360",
          "order": 0
        },
        {
          "id": "04db452e-bdee-472c-8d2a-68554341d60c",
          "english": "deliver",
          "chinese": "词361",
          "pinyin": "cí361",
          "order": 1
        },
        {
          "id": "34c3f5d5-953b-4be8-bd71-4952356fe973",
          "english": "delivery",
          "chinese": "词362",
          "pinyin": "cí362",
          "order": 2
        },
        {
          "id": "ce4fcd91-4649-41ad-a746-71173f84ec4b",
          "english": "demand",
          "chinese": "词363",
          "pinyin": "cí363",
          "order": 3
        },
        {
          "id": "eb4bdbbf-430f-4f0d-97cc-19986ed50604",
          "english": "democratic",
          "chinese": "词364",
          "pinyin": "cí364",
          "order": 4
        },
        {
          "id": "df809d0d-13f8-4873-ba59-50f4dd3a522c",
          "english": "demonstrate",
          "chinese": "词365",
          "pinyin": "cí365",
          "order": 5
        },
        {
          "id": "79efddf4-f29e-46a2-b613-865c2d19d7f6",
          "english": "demonstration",
          "chinese": "词366",
          "pinyin": "cí366",
          "order": 6
        },
        {
          "id": "0cf008ff-0a92-421d-9deb-8d5c13429f08",
          "english": "department",
          "chinese": "词367",
          "pinyin": "cí367",
          "order": 7
        },
        {
          "id": "fa29f7bb-75e4-4d66-ae1a-1cf91df0435a",
          "english": "depend",
          "chinese": "词368",
          "pinyin": "cí368",
          "order": 8
        },
        {
          "id": "40eadc28-2b2b-4114-b50e-b72a5ef264cf",
          "english": "dependent",
          "chinese": "词369",
          "pinyin": "cí369",
          "order": 9
        }
      ]
    },
    {
      "id": "908fae67-1889-4992-9fca-a6071423140d",
      "name": "HSK 4 47",
      "description": "HSK 4 47 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "60d7f9d7-92b0-4e1c-9080-19d1372c7252",
          "english": "depending",
          "chinese": "词370",
          "pinyin": "cí370",
          "order": 0
        },
        {
          "id": "30326edb-fbb8-464e-870c-cc2a76cea960",
          "english": "depth",
          "chinese": "词371",
          "pinyin": "cí371",
          "order": 1
        },
        {
          "id": "b5d0aa09-d5f3-43a2-b16d-db5e64d3a89d",
          "english": "derive",
          "chinese": "词372",
          "pinyin": "cí372",
          "order": 2
        },
        {
          "id": "7dfab12a-cdf5-47ae-b45a-e71641bb4290",
          "english": "describe",
          "chinese": "词373",
          "pinyin": "cí373",
          "order": 3
        },
        {
          "id": "6c73b2a7-f11a-491f-b313-0fc9c89d8246",
          "english": "description",
          "chinese": "词374",
          "pinyin": "cí374",
          "order": 4
        },
        {
          "id": "6c8e3337-288b-4374-a088-b83a1200d6a6",
          "english": "desert",
          "chinese": "词375",
          "pinyin": "cí375",
          "order": 5
        },
        {
          "id": "870701fe-ca07-4d80-99f9-798f3d858893",
          "english": "design",
          "chinese": "词376",
          "pinyin": "cí376",
          "order": 6
        },
        {
          "id": "3c02ca86-10b4-4633-849b-740847b4b901",
          "english": "designer",
          "chinese": "词377",
          "pinyin": "cí377",
          "order": 7
        },
        {
          "id": "8f33295f-a9c3-479e-8964-8b20b4a2b515",
          "english": "desire",
          "chinese": "词378",
          "pinyin": "cí378",
          "order": 8
        },
        {
          "id": "8ddd2001-035e-47fa-aff5-f36df190b02f",
          "english": "desk",
          "chinese": "词379",
          "pinyin": "cí379",
          "order": 9
        }
      ]
    },
    {
      "id": "a2c8e7ad-a6ea-4ae5-8a4c-77f22c0a9767",
      "name": "HSK 4 48",
      "description": "HSK 4 48 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "935cb991-74e1-4c86-9798-d5ffd5b0d8fb",
          "english": "despite",
          "chinese": "词380",
          "pinyin": "cí380",
          "order": 0
        },
        {
          "id": "ee1e903c-f9da-4d5c-9405-4d86d4da9aa0",
          "english": "destroy",
          "chinese": "词381",
          "pinyin": "cí381",
          "order": 1
        },
        {
          "id": "67eebb7a-3780-48e2-8cd2-684bf7144be4",
          "english": "destruction",
          "chinese": "词382",
          "pinyin": "cí382",
          "order": 2
        },
        {
          "id": "0cf0c41b-7c4a-4e42-9469-cf2ec6c18b63",
          "english": "detail",
          "chinese": "词383",
          "pinyin": "cí383",
          "order": 3
        },
        {
          "id": "70563c0c-d67f-4c43-839d-554bd5afa084",
          "english": "detailed",
          "chinese": "词384",
          "pinyin": "cí384",
          "order": 4
        },
        {
          "id": "64dfabf8-4b48-499f-9421-beeb6ca2b6e5",
          "english": "detect",
          "chinese": "词385",
          "pinyin": "cí385",
          "order": 5
        },
        {
          "id": "8cfd38cf-fab0-4ff7-b467-b2c4c856db4f",
          "english": "determine",
          "chinese": "词386",
          "pinyin": "cí386",
          "order": 6
        },
        {
          "id": "d2a367e7-cba5-4866-8332-a254c8c7928f",
          "english": "develop",
          "chinese": "词387",
          "pinyin": "cí387",
          "order": 7
        },
        {
          "id": "cfe59000-140a-47f8-bb03-252d2b45fc91",
          "english": "development",
          "chinese": "词388",
          "pinyin": "cí388",
          "order": 8
        },
        {
          "id": "3fb13de8-7e49-4f3c-a1c0-bb7fc3ffdca6",
          "english": "device",
          "chinese": "词389",
          "pinyin": "cí389",
          "order": 9
        }
      ]
    },
    {
      "id": "9f34f303-b74d-4ff5-8dda-ba9930095c72",
      "name": "HSK 4 49",
      "description": "HSK 4 49 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "73e8c603-7ab3-41c0-af73-a53594b92a41",
          "english": "dialogue",
          "chinese": "词390",
          "pinyin": "cí390",
          "order": 0
        },
        {
          "id": "83ea1704-4e0d-4021-8eeb-c90daade03fe",
          "english": "diamond",
          "chinese": "词391",
          "pinyin": "cí391",
          "order": 1
        },
        {
          "id": "06fae779-8c16-476b-b2c1-b832b189776d",
          "english": "diary",
          "chinese": "词392",
          "pinyin": "cí392",
          "order": 2
        },
        {
          "id": "2f002330-c0ba-4f82-b98d-5ecb5c1efbf8",
          "english": "difference",
          "chinese": "词393",
          "pinyin": "cí393",
          "order": 3
        },
        {
          "id": "ee6282b3-2b3f-48f7-95c1-2306612dd1c1",
          "english": "different",
          "chinese": "词394",
          "pinyin": "cí394",
          "order": 4
        },
        {
          "id": "b2867d37-beb4-45d0-8707-e4dd88c8d630",
          "english": "differently",
          "chinese": "词395",
          "pinyin": "cí395",
          "order": 5
        },
        {
          "id": "c7ee9225-15e5-4920-b03c-36fd96be851c",
          "english": "difficult",
          "chinese": "词396",
          "pinyin": "cí396",
          "order": 6
        },
        {
          "id": "6dec68cd-691a-4f50-b2d7-b420ce1d2d17",
          "english": "difficulty",
          "chinese": "词397",
          "pinyin": "cí397",
          "order": 7
        },
        {
          "id": "49ec6de5-bb3e-42a4-b7a9-ca84c0182330",
          "english": "digital",
          "chinese": "词398",
          "pinyin": "cí398",
          "order": 8
        },
        {
          "id": "25f24243-5761-41dc-ac86-fffca2230596",
          "english": "dimension",
          "chinese": "词399",
          "pinyin": "cí399",
          "order": 9
        }
      ]
    },
    {
      "id": "bddcdd8c-bfa6-4280-adff-4d0f2e9a3c1c",
      "name": "HSK 4 5",
      "description": "HSK 4 5 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "ef4f8054-6e4f-4a66-a7da-22bd566c81a1",
          "english": "Yangtze River",
          "chinese": "长江",
          "pinyin": "chángjiāng",
          "order": 0
        },
        {
          "id": "fa614fa0-3a88-422f-ac53-5eece56ec896",
          "english": "site",
          "chinese": "场",
          "pinyin": "chǎng",
          "order": 1
        },
        {
          "id": "fe427635-243c-46a6-99a9-63cc8aade236",
          "english": "exceed",
          "chinese": "超过",
          "pinyin": "chāoguò",
          "order": 2
        },
        {
          "id": "e7d78194-e8b7-4d62-9677-fdf347bba002",
          "english": "toilet",
          "chinese": "厕所",
          "pinyin": "cèsuǒ",
          "order": 3
        },
        {
          "id": "ddbc3824-de25-4d7e-8527-8d9d7b625082",
          "english": "success",
          "chinese": "成功",
          "pinyin": "chénggōng",
          "order": 4
        },
        {
          "id": "87263318-8e56-4c64-a374-390b89ea3cbf",
          "english": "become",
          "chinese": "成为",
          "pinyin": "chéngwéi",
          "order": 5
        },
        {
          "id": "41d78f1a-0104-40e6-bf16-295aa8694010",
          "english": "honest",
          "chinese": "诚实",
          "pinyin": "chéngshí",
          "order": 6
        },
        {
          "id": "e43d09af-b2d7-4d2f-acac-6ffefbcfcf04",
          "english": "take (transport)",
          "chinese": "乘坐",
          "pinyin": "chéngzuò",
          "order": 7
        },
        {
          "id": "e3c158e4-11a4-47d0-9784-2ddef81f98bc",
          "english": "be surprised",
          "chinese": "吃惊",
          "pinyin": "chījīng",
          "order": 8
        },
        {
          "id": "e3df5021-cb36-487a-ac72-8d12ab525dcf",
          "english": "again",
          "chinese": "重新",
          "pinyin": "chóngxīn",
          "order": 9
        }
      ]
    },
    {
      "id": "78c0607b-d578-41b8-b0dc-434b0b9a77f7",
      "name": "HSK 4 50",
      "description": "HSK 4 50 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "b5040a12-4a47-433f-8259-2c4c9dbf57f4",
          "english": "dining",
          "chinese": "词400",
          "pinyin": "cí400",
          "order": 0
        },
        {
          "id": "54f4c830-51c7-44a2-8748-dcb82578ab2d",
          "english": "dinner",
          "chinese": "词401",
          "pinyin": "cí401",
          "order": 1
        },
        {
          "id": "394de4ee-01f0-441c-b610-4e79de369875",
          "english": "direct",
          "chinese": "词402",
          "pinyin": "cí402",
          "order": 2
        },
        {
          "id": "35ef2d44-c419-4779-b901-98b44b0f40fc",
          "english": "direction",
          "chinese": "词403",
          "pinyin": "cí403",
          "order": 3
        },
        {
          "id": "5cc11bd4-0a8e-48f0-99c9-fe8f2edad0a5",
          "english": "directly",
          "chinese": "词404",
          "pinyin": "cí404",
          "order": 4
        },
        {
          "id": "4ca38d7b-df5c-4adf-bb3f-9d29f1ca31af",
          "english": "director",
          "chinese": "词405",
          "pinyin": "cí405",
          "order": 5
        },
        {
          "id": "ab65ca74-7d42-405c-b25f-05b4d85320e3",
          "english": "dirty",
          "chinese": "词406",
          "pinyin": "cí406",
          "order": 6
        },
        {
          "id": "5ba89058-c9ce-4e67-85b0-edb5c3fe54d9",
          "english": "disability",
          "chinese": "词407",
          "pinyin": "cí407",
          "order": 7
        },
        {
          "id": "3b219c53-5602-4320-94f2-b2681ba13c45",
          "english": "disagree",
          "chinese": "词408",
          "pinyin": "cí408",
          "order": 8
        },
        {
          "id": "328cf58f-20fe-4818-bf81-1430acea86a0",
          "english": "disappear",
          "chinese": "词409",
          "pinyin": "cí409",
          "order": 9
        }
      ]
    },
    {
      "id": "9d28e7f0-0592-42d1-b735-b51d0ac59409",
      "name": "HSK 4 51",
      "description": "HSK 4 51 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "54d2ffb2-9f0b-4683-8771-507a0b66ad03",
          "english": "disaster",
          "chinese": "词410",
          "pinyin": "cí410",
          "order": 0
        },
        {
          "id": "7f4d1d3a-df0e-471b-9c87-0ef62cbc48d2",
          "english": "discipline",
          "chinese": "词411",
          "pinyin": "cí411",
          "order": 1
        },
        {
          "id": "d3197750-30b4-4695-bea8-9dd8ea48be3e",
          "english": "discover",
          "chinese": "词412",
          "pinyin": "cí412",
          "order": 2
        },
        {
          "id": "02bdf71a-ecf6-4530-951a-c0a855c0ecd7",
          "english": "discovery",
          "chinese": "词413",
          "pinyin": "cí413",
          "order": 3
        },
        {
          "id": "e3144489-b0a9-4522-871c-42e3745def5f",
          "english": "discuss",
          "chinese": "词414",
          "pinyin": "cí414",
          "order": 4
        },
        {
          "id": "a439b95c-8786-4227-bf34-5ce54108f2bf",
          "english": "discussion",
          "chinese": "词415",
          "pinyin": "cí415",
          "order": 5
        },
        {
          "id": "ff30f479-58b6-4608-a3e1-905d95415786",
          "english": "disease",
          "chinese": "词416",
          "pinyin": "cí416",
          "order": 6
        },
        {
          "id": "b24eb144-2248-4006-9045-41a62a3bff2c",
          "english": "dish",
          "chinese": "词417",
          "pinyin": "cí417",
          "order": 7
        },
        {
          "id": "58a11b1c-8e96-4f8b-9070-fa4aab00ae17",
          "english": "dismiss",
          "chinese": "词418",
          "pinyin": "cí418",
          "order": 8
        },
        {
          "id": "f4213fa0-d537-4033-bd4e-5605382734a9",
          "english": "disorder",
          "chinese": "词419",
          "pinyin": "cí419",
          "order": 9
        }
      ]
    },
    {
      "id": "28d8f8bb-d224-45f0-8273-0302d8b7975f",
      "name": "HSK 4 52",
      "description": "HSK 4 52 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "5d0e0f81-f98b-4797-b628-eb68a7f43dfd",
          "english": "display",
          "chinese": "词420",
          "pinyin": "cí420",
          "order": 0
        },
        {
          "id": "d681ab3e-e77c-417b-a3c0-1680a3fe98e1",
          "english": "distance",
          "chinese": "词421",
          "pinyin": "cí421",
          "order": 1
        },
        {
          "id": "56ccc582-bb60-43bd-8ef3-333898639391",
          "english": "distribution",
          "chinese": "词422",
          "pinyin": "cí422",
          "order": 2
        },
        {
          "id": "393b012b-9fec-4c73-87f6-be0144116665",
          "english": "district",
          "chinese": "词423",
          "pinyin": "cí423",
          "order": 3
        },
        {
          "id": "0cf135f0-54ea-40e0-9e5b-5ec6139500a5",
          "english": "divide",
          "chinese": "词424",
          "pinyin": "cí424",
          "order": 4
        },
        {
          "id": "6c776c58-8e1f-4fdd-b9be-bf0047f35143",
          "english": "division",
          "chinese": "词425",
          "pinyin": "cí425",
          "order": 5
        },
        {
          "id": "0b974c8d-a00f-4a1e-851e-4b493617c633",
          "english": "doctor",
          "chinese": "词426",
          "pinyin": "cí426",
          "order": 6
        },
        {
          "id": "c96cfc41-c755-4394-90c7-e984b7bb210b",
          "english": "document",
          "chinese": "词427",
          "pinyin": "cí427",
          "order": 7
        },
        {
          "id": "8b9a10ed-0648-43c4-b5b8-cdf49e7bfd45",
          "english": "domestic",
          "chinese": "词428",
          "pinyin": "cí428",
          "order": 8
        },
        {
          "id": "0334a548-b738-4dba-ac21-edf62cf1a529",
          "english": "dominant",
          "chinese": "词429",
          "pinyin": "cí429",
          "order": 9
        }
      ]
    },
    {
      "id": "a0a1e099-785c-4476-a80f-3dec7e108c49",
      "name": "HSK 4 53",
      "description": "HSK 4 53 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "112cad04-848b-4925-b67f-981a5519dbb8",
          "english": "dominate",
          "chinese": "词430",
          "pinyin": "cí430",
          "order": 0
        },
        {
          "id": "d7a29658-790f-486f-abf1-f289cda1be4d",
          "english": "door",
          "chinese": "词431",
          "pinyin": "cí431",
          "order": 1
        },
        {
          "id": "029b92d5-03f4-49c2-84ab-21e5a876fc1c",
          "english": "double",
          "chinese": "词432",
          "pinyin": "cí432",
          "order": 2
        },
        {
          "id": "001b1192-ed7e-46b2-87eb-f94a87dbcd4c",
          "english": "doubt",
          "chinese": "词433",
          "pinyin": "cí433",
          "order": 3
        },
        {
          "id": "e17292a3-3a2a-4fa7-a0c9-2b548e7f4569",
          "english": "downtown",
          "chinese": "词434",
          "pinyin": "cí434",
          "order": 4
        },
        {
          "id": "7f4fc4a4-fd08-4d46-82bc-e7355cfec811",
          "english": "dozen",
          "chinese": "词435",
          "pinyin": "cí435",
          "order": 5
        },
        {
          "id": "a9446a92-9279-417a-9787-8f366d080db3",
          "english": "draft",
          "chinese": "词436",
          "pinyin": "cí436",
          "order": 6
        },
        {
          "id": "6fee90db-8678-44dc-9830-a6f58a8a9ad7",
          "english": "drag",
          "chinese": "词437",
          "pinyin": "cí437",
          "order": 7
        },
        {
          "id": "9cc4e401-eacf-498d-88e0-d361b5148b36",
          "english": "drama",
          "chinese": "词438",
          "pinyin": "cí438",
          "order": 8
        },
        {
          "id": "4ac7e732-b79c-41e0-8c31-85d7e79a9f76",
          "english": "dramatic",
          "chinese": "词439",
          "pinyin": "cí439",
          "order": 9
        }
      ]
    },
    {
      "id": "30adbecf-58a7-4a00-9b27-fb0de8d04278",
      "name": "HSK 4 54",
      "description": "HSK 4 54 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "99c18aaa-2984-4a69-b0a5-fa7a1626d92c",
          "english": "draw",
          "chinese": "词440",
          "pinyin": "cí440",
          "order": 0
        },
        {
          "id": "b7e01a43-d2d9-4d0e-b59c-683ba2989042",
          "english": "drawing",
          "chinese": "词441",
          "pinyin": "cí441",
          "order": 1
        },
        {
          "id": "fb836df4-c091-4bfe-ace8-dee1e529507c",
          "english": "dream",
          "chinese": "词442",
          "pinyin": "cí442",
          "order": 2
        },
        {
          "id": "584257fa-6acb-4e35-9d3c-c2a4f4d87697",
          "english": "dress",
          "chinese": "词443",
          "pinyin": "cí443",
          "order": 3
        },
        {
          "id": "320d0404-70a6-40b8-b0d1-218ea9b8ff24",
          "english": "drink",
          "chinese": "词444",
          "pinyin": "cí444",
          "order": 4
        },
        {
          "id": "76935093-30d8-4fdb-9802-bf8a5574370b",
          "english": "drive",
          "chinese": "词445",
          "pinyin": "cí445",
          "order": 5
        },
        {
          "id": "4eac0748-1d83-40fd-888a-e7612a99150a",
          "english": "driver",
          "chinese": "词446",
          "pinyin": "cí446",
          "order": 6
        },
        {
          "id": "6d5a6867-21c7-41b5-9d44-c7ce024188f3",
          "english": "drop",
          "chinese": "词447",
          "pinyin": "cí447",
          "order": 7
        },
        {
          "id": "5de079e8-391e-4d51-b59f-1879394c2fe3",
          "english": "drug",
          "chinese": "词448",
          "pinyin": "cí448",
          "order": 8
        },
        {
          "id": "f967eb2c-8c6e-4c4f-bc80-c1771c5d278b",
          "english": "during",
          "chinese": "词449",
          "pinyin": "cí449",
          "order": 9
        }
      ]
    },
    {
      "id": "72ed24d8-dc03-41ff-bee4-ec884dbf2501",
      "name": "HSK 4 55",
      "description": "HSK 4 55 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "85fd7113-f16f-45e0-aae8-af1fa387bca9",
          "english": "duty",
          "chinese": "词450",
          "pinyin": "cí450",
          "order": 0
        },
        {
          "id": "9673c7ca-df09-4994-884b-164bc5959656",
          "english": "each",
          "chinese": "词451",
          "pinyin": "cí451",
          "order": 1
        },
        {
          "id": "98a42ba6-2033-4538-9bcd-0f16db02a839",
          "english": "eager",
          "chinese": "词452",
          "pinyin": "cí452",
          "order": 2
        },
        {
          "id": "a14ed0bd-4964-447c-ae7a-618107a69bed",
          "english": "early",
          "chinese": "词453",
          "pinyin": "cí453",
          "order": 3
        },
        {
          "id": "a99b39fe-fbd4-4a78-93b9-d9be621d15bc",
          "english": "earn",
          "chinese": "词454",
          "pinyin": "cí454",
          "order": 4
        },
        {
          "id": "c5cb1ddb-2d55-4c37-823e-e9fdf62c7e4e",
          "english": "earth",
          "chinese": "词455",
          "pinyin": "cí455",
          "order": 5
        },
        {
          "id": "940be1b5-3370-4ef0-b4dd-08c4afa94626",
          "english": "easily",
          "chinese": "词456",
          "pinyin": "cí456",
          "order": 6
        },
        {
          "id": "4bf944c1-b318-4a4e-a05a-10086db8e1ff",
          "english": "east",
          "chinese": "词457",
          "pinyin": "cí457",
          "order": 7
        },
        {
          "id": "333832aa-eaab-4bb8-9cb4-3e4d67b4788d",
          "english": "eastern",
          "chinese": "词458",
          "pinyin": "cí458",
          "order": 8
        },
        {
          "id": "cc30b170-cfbc-414f-bd6a-4d25918aa084",
          "english": "easy",
          "chinese": "词459",
          "pinyin": "cí459",
          "order": 9
        }
      ]
    },
    {
      "id": "fe347b22-1032-4007-9910-7e01394629f8",
      "name": "HSK 4 56",
      "description": "HSK 4 56 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "96fef3ef-42ac-498d-b9c5-a79236d10479",
          "english": "economic",
          "chinese": "词460",
          "pinyin": "cí460",
          "order": 0
        },
        {
          "id": "a855653d-9b7e-45e8-9097-60751a49a711",
          "english": "economy",
          "chinese": "词461",
          "pinyin": "cí461",
          "order": 1
        },
        {
          "id": "fb237462-2fed-4c61-ba34-5a7b19d71177",
          "english": "edge",
          "chinese": "词462",
          "pinyin": "cí462",
          "order": 2
        },
        {
          "id": "4746d0b8-3483-4bca-8cad-fa244fb75118",
          "english": "edition",
          "chinese": "词463",
          "pinyin": "cí463",
          "order": 3
        },
        {
          "id": "177cf5a0-4dad-480b-bc0a-0f1cbf0c97c1",
          "english": "editor",
          "chinese": "词464",
          "pinyin": "cí464",
          "order": 4
        },
        {
          "id": "3b18f654-076d-40e3-ab92-2420b28c7b1d",
          "english": "education",
          "chinese": "词465",
          "pinyin": "cí465",
          "order": 5
        },
        {
          "id": "8a17021d-6a45-43dc-a567-fe32642f00c2",
          "english": "educational",
          "chinese": "词466",
          "pinyin": "cí466",
          "order": 6
        },
        {
          "id": "ad33c1a9-2f89-4a42-a687-4f0220dc00bd",
          "english": "effect",
          "chinese": "词467",
          "pinyin": "cí467",
          "order": 7
        },
        {
          "id": "aee417e5-77ae-4156-b14e-7cd5bf4d1649",
          "english": "effective",
          "chinese": "词468",
          "pinyin": "cí468",
          "order": 8
        },
        {
          "id": "7e79e4e5-4811-4b1a-9ec6-06ad2c5555e2",
          "english": "effectively",
          "chinese": "词469",
          "pinyin": "cí469",
          "order": 9
        }
      ]
    },
    {
      "id": "06917ad0-c7de-4695-937f-460997b20f47",
      "name": "HSK 4 57",
      "description": "HSK 4 57 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "d8a4a9d5-9cf9-494a-a722-22fdf98e5a16",
          "english": "efficiency",
          "chinese": "词470",
          "pinyin": "cí470",
          "order": 0
        },
        {
          "id": "2af5633b-9a7d-4eea-a306-b4f88eeec373",
          "english": "efficient",
          "chinese": "词471",
          "pinyin": "cí471",
          "order": 1
        },
        {
          "id": "1d4f1b79-5e44-4c58-9d1a-13ec168bb6ef",
          "english": "effort",
          "chinese": "词472",
          "pinyin": "cí472",
          "order": 2
        },
        {
          "id": "039653bf-7e68-46a9-8daa-96133fb20905",
          "english": "eight",
          "chinese": "词473",
          "pinyin": "cí473",
          "order": 3
        },
        {
          "id": "914b0fec-6941-4997-9f84-80e52cd45a43",
          "english": "either",
          "chinese": "词474",
          "pinyin": "cí474",
          "order": 4
        },
        {
          "id": "e1966e68-634b-412f-bb15-59b9e54225ca",
          "english": "elderly",
          "chinese": "词475",
          "pinyin": "cí475",
          "order": 5
        },
        {
          "id": "b31f715c-a0b3-4ec6-8a5e-82b8d858e3c9",
          "english": "elect",
          "chinese": "词476",
          "pinyin": "cí476",
          "order": 6
        },
        {
          "id": "3b9e29cf-4841-49ac-a579-ee875a53dc29",
          "english": "election",
          "chinese": "词477",
          "pinyin": "cí477",
          "order": 7
        },
        {
          "id": "0d892f78-1ca5-41ca-a064-0aeb7414cf71",
          "english": "electric",
          "chinese": "词478",
          "pinyin": "cí478",
          "order": 8
        },
        {
          "id": "c256db99-35ed-4862-b23f-dea83f39ca1a",
          "english": "electrical",
          "chinese": "词479",
          "pinyin": "cí479",
          "order": 9
        }
      ]
    },
    {
      "id": "ee5bdb85-69d5-4ff8-9b2b-ea85ec145000",
      "name": "HSK 4 58",
      "description": "HSK 4 58 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "f7fb6579-a849-463c-a23e-db739ccdde10",
          "english": "electronic",
          "chinese": "词480",
          "pinyin": "cí480",
          "order": 0
        },
        {
          "id": "796dbdcf-a96b-4e04-8823-98593f533cb3",
          "english": "element",
          "chinese": "词481",
          "pinyin": "cí481",
          "order": 1
        },
        {
          "id": "c9062751-2c92-4a62-940f-6a1709beabb7",
          "english": "eliminate",
          "chinese": "词482",
          "pinyin": "cí482",
          "order": 2
        },
        {
          "id": "724c368b-ddaa-427a-8bb4-bdc2c4700951",
          "english": "elite",
          "chinese": "词483",
          "pinyin": "cí483",
          "order": 3
        },
        {
          "id": "3cd27a78-225e-4c7b-8d35-06d414df213e",
          "english": "else",
          "chinese": "词484",
          "pinyin": "cí484",
          "order": 4
        },
        {
          "id": "6acb2502-7533-4168-a02b-51d64dcab55a",
          "english": "elsewhere",
          "chinese": "词485",
          "pinyin": "cí485",
          "order": 5
        },
        {
          "id": "86361a59-949a-4360-9c6c-d5d2f2ed791b",
          "english": "emerge",
          "chinese": "词486",
          "pinyin": "cí486",
          "order": 6
        },
        {
          "id": "51ae2c58-e767-4d99-b189-1839bfae9bdf",
          "english": "emergency",
          "chinese": "词487",
          "pinyin": "cí487",
          "order": 7
        },
        {
          "id": "e1ca9a99-e273-4925-94b6-ac65038724b5",
          "english": "emission",
          "chinese": "词488",
          "pinyin": "cí488",
          "order": 8
        },
        {
          "id": "95707d3e-c42a-471b-9890-4cb347a79551",
          "english": "emotion",
          "chinese": "词489",
          "pinyin": "cí489",
          "order": 9
        }
      ]
    },
    {
      "id": "6a446c79-cd3f-4980-9b38-31a3f0a0e2cd",
      "name": "HSK 4 6",
      "description": "HSK 4 6 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "5f44f6a9-25ed-446d-975a-07d8532b3f5d",
          "english": "smoke",
          "chinese": "抽烟",
          "pinyin": "chōuyān",
          "order": 0
        },
        {
          "id": "b0a4dfb6-ce8f-4b17-a57b-be0a3e43d7f2",
          "english": "business trip",
          "chinese": "出差",
          "pinyin": "chūchāi",
          "order": 1
        },
        {
          "id": "416ec989-2440-4156-bedb-ce2e922811eb",
          "english": "set out",
          "chinese": "出发",
          "pinyin": "chūfā",
          "order": 2
        },
        {
          "id": "f528afac-ecbc-4229-8481-0c8d03503e3e",
          "english": "be born",
          "chinese": "出生",
          "pinyin": "chūshēng",
          "order": 3
        },
        {
          "id": "1ac45524-4ee8-4e4f-a515-23fc4d39b9eb",
          "english": "appear",
          "chinese": "出现",
          "pinyin": "chūxiàn",
          "order": 4
        },
        {
          "id": "eae1432e-3ed7-4551-9400-77261bd7182d",
          "english": "kitchen",
          "chinese": "厨房",
          "pinyin": "chúfáng",
          "order": 5
        },
        {
          "id": "d73c8ecf-e17f-41bd-a11d-7a7addcbed5f",
          "english": "fax",
          "chinese": "传真",
          "pinyin": "chuánzhēn",
          "order": 6
        },
        {
          "id": "5e2c9231-d708-46e9-b4a3-6c7b6b89e280",
          "english": "window",
          "chinese": "窗户",
          "pinyin": "chuānghu",
          "order": 7
        },
        {
          "id": "f5e40e7e-feac-4558-8915-b90411be0810",
          "english": "word",
          "chinese": "词语",
          "pinyin": "cíyǔ",
          "order": 8
        },
        {
          "id": "c1219149-27b1-48e2-afa9-7707dee8fa8a",
          "english": "never",
          "chinese": "从来",
          "pinyin": "cónglái",
          "order": 9
        }
      ]
    },
    {
      "id": "b364eecf-d4bd-4b5f-84ed-ffedd83914ec",
      "name": "HSK 4 7",
      "description": "HSK 4 7 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "969654b8-1845-4e31-b302-de00b54c2442",
          "english": "careless",
          "chinese": "粗心",
          "pinyin": "cūxīn",
          "order": 0
        },
        {
          "id": "a19a3c0f-d486-43d4-a855-108fac4e3aa0",
          "english": "deposit",
          "chinese": "存",
          "pinyin": "cún",
          "order": 1
        },
        {
          "id": "f8ab1c11-6f0b-43ca-87f3-330e5f3dda1b",
          "english": "mistake",
          "chinese": "错误",
          "pinyin": "cuòwù",
          "order": 2
        },
        {
          "id": "2b83aee3-84db-4f1f-909b-ed04d2dfb85d",
          "english": "answer",
          "chinese": "答案",
          "pinyin": "dá'àn",
          "order": 3
        },
        {
          "id": "5707cfbf-c963-4833-80db-88fef0823362",
          "english": "greet",
          "chinese": "打招呼",
          "pinyin": "dǎzhāohu",
          "order": 4
        },
        {
          "id": "76f93f27-a646-4311-9fae-68888285b41e",
          "english": "dress up",
          "chinese": "打扮",
          "pinyin": "dǎban",
          "order": 5
        },
        {
          "id": "33cfb7bf-88d2-44e1-b333-2968cccfbd72",
          "english": "disturb",
          "chinese": "打扰",
          "pinyin": "dǎrǎo",
          "order": 6
        },
        {
          "id": "c92e723b-b568-4056-bb27-53128a9651dd",
          "english": "print",
          "chinese": "打印",
          "pinyin": "dǎyìn",
          "order": 7
        },
        {
          "id": "67f85048-dd77-4df8-aace-c539c1c949be",
          "english": "discount",
          "chinese": "打折",
          "pinyin": "dǎzhé",
          "order": 8
        },
        {
          "id": "b2d0fbec-5ad5-45cf-9d09-d7c78bdaf134",
          "english": "injection",
          "chinese": "打针",
          "pinyin": "dǎzhēn",
          "order": 9
        }
      ]
    },
    {
      "id": "ed444205-f945-421b-82a5-72f1f8192d22",
      "name": "HSK 4 8",
      "description": "HSK 4 8 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "154e4b12-9e23-4578-a863-4deee8d40189",
          "english": "probably",
          "chinese": "大概",
          "pinyin": "dàgài",
          "order": 0
        },
        {
          "id": "36b16e5b-5208-4daf-970d-8b7df892fc35",
          "english": "embassy",
          "chinese": "大使馆",
          "pinyin": "dàshǐguǎn",
          "order": 1
        },
        {
          "id": "79222229-5ce2-400e-8dd3-d5c909108714",
          "english": "about",
          "chinese": "大约",
          "pinyin": "dàyuē",
          "order": 2
        },
        {
          "id": "0d6906fc-705c-48de-a907-48c0bb92e6bc",
          "english": "wear (accessories)",
          "chinese": "戴",
          "pinyin": "dài",
          "order": 3
        },
        {
          "id": "07adb907-da9f-4625-b3ee-ec0367f466b2",
          "english": "doctor",
          "chinese": "大夫",
          "pinyin": "dàifu",
          "order": 4
        },
        {
          "id": "52cf064f-405f-4132-8f2c-7051ab676932",
          "english": "when",
          "chinese": "当",
          "pinyin": "dāng",
          "order": 5
        },
        {
          "id": "e25ae820-30db-4156-b023-e621e44f9fce",
          "english": "at that time",
          "chinese": "当时",
          "pinyin": "dāngshí",
          "order": 6
        },
        {
          "id": "913b61ad-35ca-4e5c-afd9-7a47ac5e99e0",
          "english": "knife",
          "chinese": "刀",
          "pinyin": "dāo",
          "order": 7
        },
        {
          "id": "0430b1f1-88ae-4f34-a85c-b45099318642",
          "english": "tour guide",
          "chinese": "导游",
          "pinyin": "dǎoyóu",
          "order": 8
        },
        {
          "id": "34c86ab7-8174-4847-ac0a-7249456c3868",
          "english": "pour",
          "chinese": "倒",
          "pinyin": "dào",
          "order": 9
        }
      ]
    },
    {
      "id": "b06982f6-73ab-44c0-9e8d-43aba869113c",
      "name": "HSK 4 9",
      "description": "HSK 4 9 - Authentic HSK Level 4 vocabulary",
      "hsklevel": 4,
      "wordCount": 10,
      "words": [
        {
          "id": "ce5388f6-4e60-4abe-b5ad-28bd1b251b37",
          "english": "everywhere",
          "chinese": "到处",
          "pinyin": "dàochù",
          "order": 0
        },
        {
          "id": "afff3d75-71f6-4351-ac1f-6304ea7a50b4",
          "english": "after all",
          "chinese": "到底",
          "pinyin": "dàodǐ",
          "order": 1
        },
        {
          "id": "4e69f11d-70fc-45cc-a9ed-85f953774958",
          "english": "apologize",
          "chinese": "道歉",
          "pinyin": "dàoqiàn",
          "order": 2
        },
        {
          "id": "aa13dc0a-3be1-47d0-9a23-293a10657127",
          "english": "proud",
          "chinese": "得意",
          "pinyin": "déyì",
          "order": 3
        },
        {
          "id": "643dbabc-9944-40eb-8726-4a7ab6fb4faf",
          "english": "location",
          "chinese": "地点",
          "pinyin": "dìdiǎn",
          "order": 4
        },
        {
          "id": "3616d0e9-7e60-4c9f-a3ef-d91b16997221",
          "english": "must",
          "chinese": "得",
          "pinyin": "děi",
          "order": 5
        },
        {
          "id": "9fb4ac95-cbb5-490f-b3db-8e72cf36008f",
          "english": "boarding pass",
          "chinese": "登机牌",
          "pinyin": "dēngjīpái",
          "order": 6
        },
        {
          "id": "610730f3-2f3e-46ab-94fe-bf070e368adb",
          "english": "wait",
          "chinese": "等",
          "pinyin": "děng",
          "order": 7
        },
        {
          "id": "d58eb362-ecc8-4638-927c-7ef054d427b1",
          "english": "low",
          "chinese": "低",
          "pinyin": "dī",
          "order": 8
        },
        {
          "id": "0aebb34b-8cb6-4d11-adef-001c6f0dc5cb",
          "english": "bottom",
          "chinese": "底",
          "pinyin": "dǐ",
          "order": 9
        }
      ]
    },
    {
      "id": "fe033074-f795-40ef-aab1-74b4d5f1cff4",
      "name": "HSK 5 1",
      "description": "HSK 5 1 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "3eca648c-77a8-4264-a35c-70f3a9b6040f",
          "english": "freedom",
          "chinese": "自由",
          "pinyin": "zìyóu",
          "order": 0
        },
        {
          "id": "2094d278-12df-44d1-9b3f-6dcb2c415ca7",
          "english": "nature",
          "chinese": "自然",
          "pinyin": "zìrán",
          "order": 1
        },
        {
          "id": "cfdc8cac-ba9c-49d9-84e3-3ced3f57ba6c",
          "english": "respect",
          "chinese": "尊重",
          "pinyin": "zūnzhòng",
          "order": 2
        },
        {
          "id": "7140f00c-d4c6-44d2-b5e1-f5db27bc616b",
          "english": "economy",
          "chinese": "经济",
          "pinyin": "jīngjì",
          "order": 3
        },
        {
          "id": "e7de55b9-7b2c-4c5e-97d8-a5f0f983a29e",
          "english": "culture",
          "chinese": "文化",
          "pinyin": "wénhuà",
          "order": 4
        },
        {
          "id": "405d7c84-85f9-4bb0-a738-c3edc3578914",
          "english": "society",
          "chinese": "社会",
          "pinyin": "shèhuì",
          "order": 5
        },
        {
          "id": "79c1f661-913f-4635-81d7-e957b501937a",
          "english": "politics",
          "chinese": "政治",
          "pinyin": "zhèngzhì",
          "order": 6
        },
        {
          "id": "a87121e6-6553-4154-8923-fcca38a150d2",
          "english": "education",
          "chinese": "教育",
          "pinyin": "jiàoyù",
          "order": 7
        },
        {
          "id": "1cd1670b-631d-4d37-a23b-222e19616b72",
          "english": "environment",
          "chinese": "环境",
          "pinyin": "huánjìng",
          "order": 8
        },
        {
          "id": "befebd8a-b862-4547-8910-0787e7a1e326",
          "english": "technology",
          "chinese": "技术",
          "pinyin": "jìshù",
          "order": 9
        }
      ]
    },
    {
      "id": "8ddd9e85-8523-46be-a315-4784e5119303",
      "name": "HSK 5 10",
      "description": "HSK 5 10 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "8052c5aa-eb00-4684-afb4-e4ca66423665",
          "english": "inspiration",
          "chinese": "灵感",
          "pinyin": "línggǎn",
          "order": 0
        },
        {
          "id": "bddc5014-177e-4d8f-aec5-90b5d35ef475",
          "english": "enthusiasm",
          "chinese": "热情",
          "pinyin": "rèqíng",
          "order": 1
        },
        {
          "id": "6e868423-1842-4816-ae74-c9d2b4ceb8c2",
          "english": "passion",
          "chinese": "激情",
          "pinyin": "jīqíng",
          "order": 2
        },
        {
          "id": "82e3f12f-be9b-49d2-862d-0c808a69ef35",
          "english": "emotion",
          "chinese": "情感",
          "pinyin": "qínggǎn",
          "order": 3
        },
        {
          "id": "9fbcb34b-2b19-4852-93f9-fc35344857c4",
          "english": "feeling",
          "chinese": "感觉",
          "pinyin": "gǎnjué",
          "order": 4
        },
        {
          "id": "836f6722-4b0e-40ff-9a3e-f183b87c320f",
          "english": "mood",
          "chinese": "心情",
          "pinyin": "xīnqíng",
          "order": 5
        },
        {
          "id": "82a86515-3c93-4979-ae11-d72060050aef",
          "english": "happiness",
          "chinese": "幸福",
          "pinyin": "xìngfú",
          "order": 6
        },
        {
          "id": "468d73d1-89d4-4dd2-ac23-d85b9a32c3cc",
          "english": "joy",
          "chinese": "快乐",
          "pinyin": "kuàilè",
          "order": 7
        },
        {
          "id": "1179328d-f922-48e8-8200-7ea19f61a601",
          "english": "sadness",
          "chinese": "悲伤",
          "pinyin": "bēishāng",
          "order": 8
        },
        {
          "id": "9a0526a5-de46-44e1-82cb-f8f4542d50f8",
          "english": "anger",
          "chinese": "愤怒",
          "pinyin": "fènnù",
          "order": 9
        }
      ]
    },
    {
      "id": "17261813-3e27-44c1-8036-4775641d3721",
      "name": "HSK 5 10",
      "description": "HSK 5 10 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "d24a7f94-f65d-479a-90a0-c49e474eef11",
          "english": "ability",
          "chinese": "能力",
          "pinyin": "nénglì",
          "order": 0
        },
        {
          "id": "70ea964f-a402-41ba-9ee3-7b2780ccb484",
          "english": "accept",
          "chinese": "接受",
          "pinyin": "jiēshòu",
          "order": 1
        },
        {
          "id": "76659235-207f-4a40-8c37-d4e13ea33340",
          "english": "accident",
          "chinese": "事故",
          "pinyin": "shìgù",
          "order": 2
        },
        {
          "id": "a8498d0e-9f96-4135-a252-2a4a9f158d77",
          "english": "activity",
          "chinese": "词3",
          "pinyin": "cí3",
          "order": 3
        },
        {
          "id": "fd568729-5035-4a37-b80c-2dd86db34d44",
          "english": "actually",
          "chinese": "词4",
          "pinyin": "cí4",
          "order": 4
        },
        {
          "id": "3e60a643-55d1-498d-90b9-9560f019ac32",
          "english": "administration",
          "chinese": "词5",
          "pinyin": "cí5",
          "order": 5
        },
        {
          "id": "abe1cef5-7fa4-433f-85a0-303473e4ac5b",
          "english": "admit",
          "chinese": "词6",
          "pinyin": "cí6",
          "order": 6
        },
        {
          "id": "4172b86b-1410-419b-b2ab-3b3125c1c380",
          "english": "adult",
          "chinese": "词7",
          "pinyin": "cí7",
          "order": 7
        },
        {
          "id": "15ab8791-775c-4c70-b65a-52a78741bc67",
          "english": "advice",
          "chinese": "词8",
          "pinyin": "cí8",
          "order": 8
        },
        {
          "id": "8a4ada8f-d1a5-4e7d-87b6-cb17f2bf7917",
          "english": "affect",
          "chinese": "词9",
          "pinyin": "cí9",
          "order": 9
        }
      ]
    },
    {
      "id": "86666b2d-02a1-432a-a0cc-190c565cdfc0",
      "name": "HSK 5 11",
      "description": "HSK 5 11 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "89416c59-943d-4c17-a274-4161a1e15738",
          "english": "fear",
          "chinese": "恐惧",
          "pinyin": "kǒngjù",
          "order": 0
        },
        {
          "id": "5c1daf41-582a-401d-aca4-0423638e8af1",
          "english": "surprise",
          "chinese": "惊讶",
          "pinyin": "jīngyà",
          "order": 1
        },
        {
          "id": "41b95775-6fcf-4506-9a97-33e3fe1ea614",
          "english": "satisfaction",
          "chinese": "满意",
          "pinyin": "mǎnyì",
          "order": 2
        },
        {
          "id": "a7ac53ae-9f23-4199-9b12-bebc0eec3240",
          "english": "disappointment",
          "chinese": "失望",
          "pinyin": "shīwàng",
          "order": 3
        },
        {
          "id": "069925ad-4eda-4ea7-b130-8a2c3622f88b",
          "english": "worry",
          "chinese": "担心",
          "pinyin": "dānxīn",
          "order": 4
        },
        {
          "id": "c8346873-b76b-489e-8b6b-e7c9297ea8de",
          "english": "concern",
          "chinese": "关心",
          "pinyin": "guānxīn",
          "order": 5
        },
        {
          "id": "b5952fbc-9c3a-4ffb-85cc-749a26d93427",
          "english": "care",
          "chinese": "关怀",
          "pinyin": "guānhuái",
          "order": 6
        },
        {
          "id": "5dc27039-760e-4119-90b1-2dd1dcec6e61",
          "english": "love",
          "chinese": "爱",
          "pinyin": "ài",
          "order": 7
        },
        {
          "id": "dd67b425-ff0b-41af-a903-ab95b8a96560",
          "english": "affection",
          "chinese": "感情",
          "pinyin": "gǎnqíng",
          "order": 8
        },
        {
          "id": "7ef2ed83-eced-4da0-91a0-f51660f64a86",
          "english": "friendship",
          "chinese": "友谊",
          "pinyin": "yǒuyì",
          "order": 9
        }
      ]
    },
    {
      "id": "001adcf0-619a-4cb8-b920-9a28c36ae775",
      "name": "HSK 5 11",
      "description": "HSK 5 11 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "156aefce-ae1e-4a71-a2e0-9a2214a33790",
          "english": "afternoon",
          "chinese": "词10",
          "pinyin": "cí10",
          "order": 0
        },
        {
          "id": "ec3d80fc-45ce-40d9-ae8c-15338909280c",
          "english": "agency",
          "chinese": "词11",
          "pinyin": "cí11",
          "order": 1
        },
        {
          "id": "49f03e01-2886-4b4f-9479-6d73bc8c6206",
          "english": "agent",
          "chinese": "词12",
          "pinyin": "cí12",
          "order": 2
        },
        {
          "id": "df78974b-fe88-4c57-ae4e-edbcb2f07e49",
          "english": "agreement",
          "chinese": "词13",
          "pinyin": "cí13",
          "order": 3
        },
        {
          "id": "8f93fb3c-71ca-4707-96d2-089f12529ee1",
          "english": "ahead",
          "chinese": "词14",
          "pinyin": "cí14",
          "order": 4
        },
        {
          "id": "1b203836-8a48-47cc-88fa-cf427d08db64",
          "english": "album",
          "chinese": "词15",
          "pinyin": "cí15",
          "order": 5
        },
        {
          "id": "3c259c64-9e0e-4ddc-8b4a-336370aeb031",
          "english": "alive",
          "chinese": "词16",
          "pinyin": "cí16",
          "order": 6
        },
        {
          "id": "83b0a22f-1dcd-409d-b6ae-1693ce46bd55",
          "english": "allow",
          "chinese": "词17",
          "pinyin": "cí17",
          "order": 7
        },
        {
          "id": "cab65b59-e720-4ea6-9ab5-805b828dc363",
          "english": "almost",
          "chinese": "词18",
          "pinyin": "cí18",
          "order": 8
        },
        {
          "id": "e3d84c26-e48d-404f-b072-5d509e77116f",
          "english": "alone",
          "chinese": "词19",
          "pinyin": "cí19",
          "order": 9
        }
      ]
    },
    {
      "id": "2adb1a24-2d81-4478-ba21-3349037aeadf",
      "name": "HSK 5 12",
      "description": "HSK 5 12 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "ce4fefea-d4b5-4620-85f3-4971bab98c24",
          "english": "already",
          "chinese": "词20",
          "pinyin": "cí20",
          "order": 0
        },
        {
          "id": "6371efc1-2384-403f-b58d-6a36eab89317",
          "english": "although",
          "chinese": "词21",
          "pinyin": "cí21",
          "order": 1
        },
        {
          "id": "d4ccc469-9d49-40be-bebf-46a126bdc5d3",
          "english": "always",
          "chinese": "词22",
          "pinyin": "cí22",
          "order": 2
        },
        {
          "id": "93dc08d9-167f-483a-b1e9-eed39751669a",
          "english": "amazing",
          "chinese": "词23",
          "pinyin": "cí23",
          "order": 3
        },
        {
          "id": "f69030f4-809e-404f-ada9-3567f6ff1d28",
          "english": "amount",
          "chinese": "词24",
          "pinyin": "cí24",
          "order": 4
        },
        {
          "id": "2ed4f3ac-aa3f-4c42-a992-53e027dcf68d",
          "english": "analysis",
          "chinese": "词25",
          "pinyin": "cí25",
          "order": 5
        },
        {
          "id": "94af2e1c-0a1a-4ee3-b4c2-9b0c56a2d727",
          "english": "analyze",
          "chinese": "词26",
          "pinyin": "cí26",
          "order": 6
        },
        {
          "id": "4080c864-81db-44ad-86ff-36fde5c6783d",
          "english": "ancient",
          "chinese": "词27",
          "pinyin": "cí27",
          "order": 7
        },
        {
          "id": "a037aabf-f659-41a4-938e-fdecf7f099cb",
          "english": "anger",
          "chinese": "词28",
          "pinyin": "cí28",
          "order": 8
        },
        {
          "id": "4c6165b2-a39c-4090-b336-e12f923dc591",
          "english": "angle",
          "chinese": "词29",
          "pinyin": "cí29",
          "order": 9
        }
      ]
    },
    {
      "id": "c497087e-f2b8-44bb-8f6d-ca220e6fa7c8",
      "name": "HSK 5 12",
      "description": "HSK 5 12 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "70778982-02b7-42bf-b5f6-bf81b84eb51b",
          "english": "relationship",
          "chinese": "关系",
          "pinyin": "guānxi",
          "order": 0
        },
        {
          "id": "f477a1ad-4097-4983-b0e9-81963bd6f76d",
          "english": "connection",
          "chinese": "联系",
          "pinyin": "liánxì",
          "order": 1
        },
        {
          "id": "88dea2a9-f506-4593-9ae3-60442f8f10f0",
          "english": "contact",
          "chinese": "接触",
          "pinyin": "jiēchù",
          "order": 2
        },
        {
          "id": "17111ac4-ed16-4e3d-b6dc-b66f0cc020a2",
          "english": "meeting",
          "chinese": "会议",
          "pinyin": "huìyì",
          "order": 3
        },
        {
          "id": "642e48c7-0556-4b1b-bb23-aab4b5ca6075",
          "english": "discussion",
          "chinese": "讨论",
          "pinyin": "tǎolùn",
          "order": 4
        },
        {
          "id": "6a56632d-b5c9-444b-9a1d-69cb249c57b6",
          "english": "conversation",
          "chinese": "对话",
          "pinyin": "duìhuà",
          "order": 5
        },
        {
          "id": "f2af1615-87e0-411b-afb8-83c473f2c3cf",
          "english": "dialogue",
          "chinese": "对话",
          "pinyin": "duìhuà",
          "order": 6
        },
        {
          "id": "c54966f1-278d-453b-9d82-f21155deae8e",
          "english": "speech",
          "chinese": "演讲",
          "pinyin": "yǎnjiǎng",
          "order": 7
        },
        {
          "id": "7c7e596d-65ce-440d-a477-064283ea0630",
          "english": "presentation",
          "chinese": "展示",
          "pinyin": "zhǎnshì",
          "order": 8
        },
        {
          "id": "272ad6df-b476-49f5-b2ff-960040cf99ab",
          "english": "performance",
          "chinese": "表演",
          "pinyin": "biǎoyǎn",
          "order": 9
        }
      ]
    },
    {
      "id": "c88c3765-b17e-439d-9d16-5f2c3ea56f26",
      "name": "HSK 5 13",
      "description": "HSK 5 13 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "2d58b3a8-9e32-4b49-b9bf-44d63afd32d9",
          "english": "show",
          "chinese": "表演",
          "pinyin": "biǎoyǎn",
          "order": 0
        },
        {
          "id": "09cf3210-9ef9-4ac1-b6e4-b768f732dedb",
          "english": "exhibition",
          "chinese": "展览",
          "pinyin": "zhǎnlǎn",
          "order": 1
        },
        {
          "id": "50f3c950-1adb-4138-98d1-ad20173cf124",
          "english": "display",
          "chinese": "展示",
          "pinyin": "zhǎnshì",
          "order": 2
        },
        {
          "id": "9278d277-355b-4c70-a895-61244c6cd82b",
          "english": "demonstration",
          "chinese": "示范",
          "pinyin": "shìfàn",
          "order": 3
        },
        {
          "id": "9d29bd5e-4574-497c-9ff5-ada71cb305f9",
          "english": "example",
          "chinese": "例子",
          "pinyin": "lìzi",
          "order": 4
        },
        {
          "id": "34a12d0d-1933-4a4a-b034-4ab96cf331af",
          "english": "sample",
          "chinese": "样本",
          "pinyin": "yàngběn",
          "order": 5
        },
        {
          "id": "6f35a23e-bf22-4854-9f9a-2c068d8cbb9b",
          "english": "model",
          "chinese": "模型",
          "pinyin": "móxíng",
          "order": 6
        },
        {
          "id": "a748c0ba-24eb-453b-9e65-245e75744a6b",
          "english": "pattern",
          "chinese": "模式",
          "pinyin": "móshì",
          "order": 7
        },
        {
          "id": "48128897-f128-4476-9087-f9f6b26aeaee",
          "english": "system",
          "chinese": "系统",
          "pinyin": "xìtǒng",
          "order": 8
        },
        {
          "id": "55b95ae4-2c79-4958-af8e-508075269bc8",
          "english": "structure",
          "chinese": "结构",
          "pinyin": "jiégòu",
          "order": 9
        }
      ]
    },
    {
      "id": "9919e1a5-e05d-45bd-8c21-e8dd281b08ac",
      "name": "HSK 5 13",
      "description": "HSK 5 13 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "10ef326d-bfbd-42ca-96b5-9c4335dcf130",
          "english": "animal",
          "chinese": "词30",
          "pinyin": "cí30",
          "order": 0
        },
        {
          "id": "f18491e3-e45b-45e1-8063-36936ec1639b",
          "english": "announce",
          "chinese": "词31",
          "pinyin": "cí31",
          "order": 1
        },
        {
          "id": "6a863de8-8753-45bc-9426-386990a0376a",
          "english": "annual",
          "chinese": "词32",
          "pinyin": "cí32",
          "order": 2
        },
        {
          "id": "63485175-e70e-40da-a6a6-4c1742e50ff9",
          "english": "another",
          "chinese": "词33",
          "pinyin": "cí33",
          "order": 3
        },
        {
          "id": "4e8e0d5b-968c-4baf-808d-eb733f566ebc",
          "english": "answer",
          "chinese": "词34",
          "pinyin": "cí34",
          "order": 4
        },
        {
          "id": "2b090c9e-eabd-4a08-b600-65739b14754a",
          "english": "anxiety",
          "chinese": "词35",
          "pinyin": "cí35",
          "order": 5
        },
        {
          "id": "e3bd7c26-58c6-4c3f-a928-12c09f6fc9f7",
          "english": "anybody",
          "chinese": "词36",
          "pinyin": "cí36",
          "order": 6
        },
        {
          "id": "814d4757-8738-43e1-b17f-e7c91a4c169d",
          "english": "anymore",
          "chinese": "词37",
          "pinyin": "cí37",
          "order": 7
        },
        {
          "id": "97f2f7d3-5b18-4753-9636-9c43cf6e568f",
          "english": "anyone",
          "chinese": "词38",
          "pinyin": "cí38",
          "order": 8
        },
        {
          "id": "66e0ed4d-6537-40bc-8f7c-b5fe340a5830",
          "english": "anything",
          "chinese": "词39",
          "pinyin": "cí39",
          "order": 9
        }
      ]
    },
    {
      "id": "c1715593-40dd-419b-9714-4d5d9df65e35",
      "name": "HSK 5 14",
      "description": "HSK 5 14 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "d3a19802-6ff8-43da-bab8-277d09207873",
          "english": "organization",
          "chinese": "组织",
          "pinyin": "zǔzhī",
          "order": 0
        },
        {
          "id": "b076b26b-5a2f-42c4-b9ed-abf2d457974f",
          "english": "institution",
          "chinese": "机构",
          "pinyin": "jīgòu",
          "order": 1
        },
        {
          "id": "3efd568e-9a68-49fd-a638-1b012ccc9635",
          "english": "company",
          "chinese": "公司",
          "pinyin": "gōngsī",
          "order": 2
        },
        {
          "id": "dd9cb871-16e2-44ed-8b5f-6d82bf0f4e86",
          "english": "business",
          "chinese": "商业",
          "pinyin": "shāngyè",
          "order": 3
        },
        {
          "id": "374eaaed-de03-423e-8c49-0fe37790a6bf",
          "english": "industry",
          "chinese": "工业",
          "pinyin": "gōngyè",
          "order": 4
        },
        {
          "id": "56edac7e-7a3a-419a-8548-7f4548b43c94",
          "english": "manufacturing",
          "chinese": "制造业",
          "pinyin": "zhìzàoyè",
          "order": 5
        },
        {
          "id": "635ee85f-6220-456d-82a2-593c2fcef23f",
          "english": "service",
          "chinese": "服务",
          "pinyin": "fúwù",
          "order": 6
        },
        {
          "id": "479a1b41-b440-4a34-9e27-cc3277f91ebc",
          "english": "quality",
          "chinese": "质量",
          "pinyin": "zhìliàng",
          "order": 7
        },
        {
          "id": "1e47d86c-ffa5-4790-bf3b-08982e688ef8",
          "english": "quantity",
          "chinese": "数量",
          "pinyin": "shùliàng",
          "order": 8
        },
        {
          "id": "a7ab1ebc-fd78-4133-b1df-270bf1b2fa62",
          "english": "amount",
          "chinese": "数额",
          "pinyin": "shù'é",
          "order": 9
        }
      ]
    },
    {
      "id": "4344fe82-226c-43a8-9059-adc01ae54867",
      "name": "HSK 5 14",
      "description": "HSK 5 14 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "15d8206d-5aa4-4a5f-bf10-280a26b65303",
          "english": "anywhere",
          "chinese": "词40",
          "pinyin": "cí40",
          "order": 0
        },
        {
          "id": "1e14437f-f75d-4e48-8652-9149cc60824a",
          "english": "apartment",
          "chinese": "词41",
          "pinyin": "cí41",
          "order": 1
        },
        {
          "id": "19263143-cd47-4c43-abe0-e0b5e0a9a9d3",
          "english": "apparent",
          "chinese": "词42",
          "pinyin": "cí42",
          "order": 2
        },
        {
          "id": "e043c2cc-d804-4c17-901b-5650fb730293",
          "english": "appear",
          "chinese": "词43",
          "pinyin": "cí43",
          "order": 3
        },
        {
          "id": "ca2d95c8-5348-4752-9b01-76ef6d29ab00",
          "english": "application",
          "chinese": "词44",
          "pinyin": "cí44",
          "order": 4
        },
        {
          "id": "15480443-f011-4dd1-befb-8c2fab9a4031",
          "english": "apply",
          "chinese": "词45",
          "pinyin": "cí45",
          "order": 5
        },
        {
          "id": "b3b2f60e-fa9d-47d0-8226-329005ad0de1",
          "english": "approach",
          "chinese": "词46",
          "pinyin": "cí46",
          "order": 6
        },
        {
          "id": "49912c4d-3793-4471-a75b-a1d0f22a8ee7",
          "english": "appropriate",
          "chinese": "词47",
          "pinyin": "cí47",
          "order": 7
        },
        {
          "id": "a7083d40-2cd2-4e3c-8f7b-e26b79065919",
          "english": "approval",
          "chinese": "词48",
          "pinyin": "cí48",
          "order": 8
        },
        {
          "id": "26e50841-5fa2-447d-922c-402068b231ff",
          "english": "approve",
          "chinese": "词49",
          "pinyin": "cí49",
          "order": 9
        }
      ]
    },
    {
      "id": "83fa1c1a-fd20-478b-86c9-9f24d1c148f8",
      "name": "HSK 5 15",
      "description": "HSK 5 15 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "1a01bd09-3d8d-497a-b4e6-6ab148c829f7",
          "english": "number",
          "chinese": "数字",
          "pinyin": "shùzì",
          "order": 0
        },
        {
          "id": "555248f0-b1b1-4ed5-ad5c-afc8d0499f80",
          "english": "figure",
          "chinese": "数字",
          "pinyin": "shùzì",
          "order": 1
        },
        {
          "id": "6ff48531-9cd6-46df-a5a0-bc6f104b20e1",
          "english": "statistics",
          "chinese": "统计",
          "pinyin": "tǒngjì",
          "order": 2
        },
        {
          "id": "ecfe0216-2218-4702-a818-a1f484a2d61f",
          "english": "data",
          "chinese": "数据",
          "pinyin": "shùjù",
          "order": 3
        },
        {
          "id": "97272af0-c6ec-490c-99bd-55c8f59a3c7a",
          "english": "information",
          "chinese": "信息",
          "pinyin": "xìnxī",
          "order": 4
        },
        {
          "id": "efbf2e67-ee35-4b49-9b67-130c5b5ecd2c",
          "english": "news",
          "chinese": "新闻",
          "pinyin": "xīnwén",
          "order": 5
        },
        {
          "id": "7afc1375-cb6b-4849-86dc-26022cd54e54",
          "english": "report",
          "chinese": "报告",
          "pinyin": "bàogào",
          "order": 6
        },
        {
          "id": "42c3df37-9ae5-4280-b579-e52452828057",
          "english": "document",
          "chinese": "文件",
          "pinyin": "wénjiàn",
          "order": 7
        },
        {
          "id": "74cada56-9783-4683-8a06-6ce1cf2da364",
          "english": "record",
          "chinese": "记录",
          "pinyin": "jìlù",
          "order": 8
        },
        {
          "id": "da68477e-ecc6-4251-a153-73669973805d",
          "english": "file",
          "chinese": "档案",
          "pinyin": "dàng'àn",
          "order": 9
        }
      ]
    },
    {
      "id": "d711cae9-622c-4769-88e9-a892c351e1b5",
      "name": "HSK 5 15",
      "description": "HSK 5 15 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "889677c2-ac47-4e5f-986f-bc320ac709b8",
          "english": "approximately",
          "chinese": "词50",
          "pinyin": "cí50",
          "order": 0
        },
        {
          "id": "e929b20b-f354-41f0-a393-07ad93e65626",
          "english": "area",
          "chinese": "词51",
          "pinyin": "cí51",
          "order": 1
        },
        {
          "id": "aef89bfb-fc59-474c-95a7-61735b298d77",
          "english": "argue",
          "chinese": "词52",
          "pinyin": "cí52",
          "order": 2
        },
        {
          "id": "0a95b5d0-2ed6-43d6-b76c-73c375b25610",
          "english": "argument",
          "chinese": "词53",
          "pinyin": "cí53",
          "order": 3
        },
        {
          "id": "db97cd78-e5b7-463c-a50f-3b1285f0105a",
          "english": "arise",
          "chinese": "词54",
          "pinyin": "cí54",
          "order": 4
        },
        {
          "id": "78cb7df2-c49b-455c-9381-d661ebdb7a44",
          "english": "around",
          "chinese": "词55",
          "pinyin": "cí55",
          "order": 5
        },
        {
          "id": "5d5248bc-b23e-4959-ac12-a1518b71bc29",
          "english": "arrange",
          "chinese": "词56",
          "pinyin": "cí56",
          "order": 6
        },
        {
          "id": "8ea16f0e-42ea-4764-bd98-f951f5324538",
          "english": "arrangement",
          "chinese": "词57",
          "pinyin": "cí57",
          "order": 7
        },
        {
          "id": "787853fd-b542-4502-bbec-5553a354ee30",
          "english": "article",
          "chinese": "词58",
          "pinyin": "cí58",
          "order": 8
        },
        {
          "id": "3ff3edbd-f7e0-403d-8d29-5d1aea3bf091",
          "english": "artist",
          "chinese": "词59",
          "pinyin": "cí59",
          "order": 9
        }
      ]
    },
    {
      "id": "ce6f9cae-7ada-4378-9995-78b4a53dad8c",
      "name": "HSK 5 16",
      "description": "HSK 5 16 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "4a45b458-1951-48c9-b3a3-5a3b1ca5491b",
          "english": "assume",
          "chinese": "词60",
          "pinyin": "cí60",
          "order": 0
        },
        {
          "id": "b7076ee3-1bc6-43a3-9657-35a7e81f4a94",
          "english": "assumption",
          "chinese": "词61",
          "pinyin": "cí61",
          "order": 1
        },
        {
          "id": "f84beebb-8dd8-4445-8707-985b8358e206",
          "english": "attack",
          "chinese": "词62",
          "pinyin": "cí62",
          "order": 2
        },
        {
          "id": "23b4a511-0b3a-4894-a6b8-a11ae5583579",
          "english": "attempt",
          "chinese": "词63",
          "pinyin": "cí63",
          "order": 3
        },
        {
          "id": "d7b85758-641c-4520-8630-03d20f0d0d71",
          "english": "attend",
          "chinese": "词64",
          "pinyin": "cí64",
          "order": 4
        },
        {
          "id": "a8ea2150-04aa-446c-87b7-ba9b7a018527",
          "english": "attention",
          "chinese": "词65",
          "pinyin": "cí65",
          "order": 5
        },
        {
          "id": "56ae03bc-da32-4546-b69a-da2ba771fc10",
          "english": "attitude",
          "chinese": "词66",
          "pinyin": "cí66",
          "order": 6
        },
        {
          "id": "494e23bc-33d2-4301-ae55-4ab1fe8983d3",
          "english": "attract",
          "chinese": "词67",
          "pinyin": "cí67",
          "order": 7
        },
        {
          "id": "241ac079-bed0-4aa9-a798-3abb8767ebd6",
          "english": "attractive",
          "chinese": "词68",
          "pinyin": "cí68",
          "order": 8
        },
        {
          "id": "f5273191-525b-4dbd-a828-7e201c6ff72f",
          "english": "audience",
          "chinese": "词69",
          "pinyin": "cí69",
          "order": 9
        }
      ]
    },
    {
      "id": "1625306c-516f-455c-8c00-1250997c4340",
      "name": "HSK 5 16",
      "description": "HSK 5 16 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "6e9153d0-e9cc-4021-98d8-a8b7e0497092",
          "english": "database",
          "chinese": "数据库",
          "pinyin": "shùjùkù",
          "order": 0
        },
        {
          "id": "a3f1e428-9337-42c0-8eae-069d0383319a",
          "english": "computer",
          "chinese": "电脑",
          "pinyin": "diànnǎo",
          "order": 1
        },
        {
          "id": "b0c1b0a4-aada-4ff8-b553-508137caadee",
          "english": "internet",
          "chinese": "互联网",
          "pinyin": "hùliánwǎng",
          "order": 2
        },
        {
          "id": "ba0f5870-f16e-4f9d-9610-484f74e2a76c",
          "english": "website",
          "chinese": "网站",
          "pinyin": "wǎngzhàn",
          "order": 3
        },
        {
          "id": "84648719-fc80-4c08-9180-01197e290d1a",
          "english": "email",
          "chinese": "电子邮件",
          "pinyin": "diànzǐyóujiàn",
          "order": 4
        },
        {
          "id": "c6891f50-c454-4c04-8b7d-d523c0578aa9",
          "english": "software",
          "chinese": "软件",
          "pinyin": "ruǎnjiàn",
          "order": 5
        },
        {
          "id": "b82861f1-c4c7-42b2-8176-046c23920a21",
          "english": "hardware",
          "chinese": "硬件",
          "pinyin": "yìngjiàn",
          "order": 6
        },
        {
          "id": "13e01957-dfb5-4323-8350-009ec1ece0c8",
          "english": "machine",
          "chinese": "机器",
          "pinyin": "jīqì",
          "order": 7
        },
        {
          "id": "53df3c16-2c83-46fb-98aa-d11739a545c8",
          "english": "equipment",
          "chinese": "设备",
          "pinyin": "shèbèi",
          "order": 8
        },
        {
          "id": "e0e36aa6-2131-4da0-ba1c-22c3c9a41830",
          "english": "tool",
          "chinese": "工具",
          "pinyin": "gōngjù",
          "order": 9
        }
      ]
    },
    {
      "id": "ceb1e808-6a52-428d-ab82-86f1322475d6",
      "name": "HSK 5 17",
      "description": "HSK 5 17 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "a066b304-8251-44b0-a8e1-d13ce8cfaca7",
          "english": "author",
          "chinese": "词70",
          "pinyin": "cí70",
          "order": 0
        },
        {
          "id": "41858d1f-335d-4091-8a1e-711feaa82577",
          "english": "authority",
          "chinese": "词71",
          "pinyin": "cí71",
          "order": 1
        },
        {
          "id": "e1975b1c-44ec-4f48-a9bf-8d95af81177e",
          "english": "available",
          "chinese": "词72",
          "pinyin": "cí72",
          "order": 2
        },
        {
          "id": "2eafcf02-0f8f-49f5-829e-31dda50b562f",
          "english": "average",
          "chinese": "词73",
          "pinyin": "cí73",
          "order": 3
        },
        {
          "id": "02206787-2e90-4b56-8110-d88a49ed097c",
          "english": "avoid",
          "chinese": "词74",
          "pinyin": "cí74",
          "order": 4
        },
        {
          "id": "793891ea-1cdd-44d9-ae7c-c6a8d65d2e7e",
          "english": "award",
          "chinese": "词75",
          "pinyin": "cí75",
          "order": 5
        },
        {
          "id": "8d01fff6-a49e-4d12-8673-64cbce886814",
          "english": "aware",
          "chinese": "词76",
          "pinyin": "cí76",
          "order": 6
        },
        {
          "id": "f3d087bf-451c-460e-8885-f21133cc143f",
          "english": "awareness",
          "chinese": "词77",
          "pinyin": "cí77",
          "order": 7
        },
        {
          "id": "f9570477-be93-4a6f-ac52-43e563a4a36a",
          "english": "background",
          "chinese": "词78",
          "pinyin": "cí78",
          "order": 8
        },
        {
          "id": "68e9e196-6a5e-46a8-88c5-87833f793956",
          "english": "balance",
          "chinese": "词79",
          "pinyin": "cí79",
          "order": 9
        }
      ]
    },
    {
      "id": "5673b866-8bac-47c3-9847-e435774e59ec",
      "name": "HSK 5 17",
      "description": "HSK 5 17 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "d0fad6e9-6008-4991-9baa-987f1adf47ad",
          "english": "instrument",
          "chinese": "仪器",
          "pinyin": "yíqì",
          "order": 0
        },
        {
          "id": "1ce6cfc2-2738-4258-99b7-cc0f95f497bc",
          "english": "device",
          "chinese": "设备",
          "pinyin": "shèbèi",
          "order": 1
        },
        {
          "id": "262c490e-af6c-4abb-b5d4-347c9505d0b6",
          "english": "facility",
          "chinese": "设施",
          "pinyin": "shèshī",
          "order": 2
        },
        {
          "id": "303c805d-8a8c-4da6-9c27-5a7ab6e4a33a",
          "english": "building",
          "chinese": "建筑",
          "pinyin": "jiànzhù",
          "order": 3
        },
        {
          "id": "1f89da29-890a-47e2-bb3e-b3d054512792",
          "english": "construction",
          "chinese": "建设",
          "pinyin": "jiànshè",
          "order": 4
        },
        {
          "id": "cd33db18-cef6-4514-b5c0-0d94073ae927",
          "english": "architecture",
          "chinese": "建筑学",
          "pinyin": "jiànzhùxué",
          "order": 5
        },
        {
          "id": "893232cb-7e80-44cc-af03-7b6662f019ba",
          "english": "design",
          "chinese": "设计",
          "pinyin": "shèjì",
          "order": 6
        },
        {
          "id": "e4028fa8-f115-4ef8-aef5-9568c54b72d7",
          "english": "art",
          "chinese": "艺术",
          "pinyin": "yìshù",
          "order": 7
        },
        {
          "id": "defd73bd-01f9-42bc-80ea-05f406db7f8e",
          "english": "music",
          "chinese": "音乐",
          "pinyin": "yīnyuè",
          "order": 8
        },
        {
          "id": "a6333b4f-34aa-428b-a186-e8491afd3e5f",
          "english": "painting",
          "chinese": "绘画",
          "pinyin": "huìhuà",
          "order": 9
        }
      ]
    },
    {
      "id": "7eb5a9e7-226e-4566-b431-fd9fdb454442",
      "name": "HSK 5 18",
      "description": "HSK 5 18 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "abd7d126-b8ea-45aa-834c-31e9f2543d90",
          "english": "literature",
          "chinese": "文学",
          "pinyin": "wénxué",
          "order": 0
        },
        {
          "id": "03e9d41a-9ddd-4d7b-8158-c3b5266980b9",
          "english": "poetry",
          "chinese": "诗歌",
          "pinyin": "shīgē",
          "order": 1
        },
        {
          "id": "ee274829-175a-4db1-ae3c-09224eceded9",
          "english": "novel",
          "chinese": "小说",
          "pinyin": "xiǎoshuō",
          "order": 2
        },
        {
          "id": "b1ee48d5-0651-4ef9-96fd-35e4ca5c322a",
          "english": "story",
          "chinese": "故事",
          "pinyin": "gùshi",
          "order": 3
        },
        {
          "id": "cb877c61-7f02-4162-9fe2-643e0f81af98",
          "english": "tale",
          "chinese": "传说",
          "pinyin": "chuánshuō",
          "order": 4
        },
        {
          "id": "57ac6011-cfc5-4266-9000-c10a9262db73",
          "english": "legend",
          "chinese": "传说",
          "pinyin": "chuánshuō",
          "order": 5
        },
        {
          "id": "c61814b4-062b-4d5e-9606-9eadfc3db332",
          "english": "myth",
          "chinese": "神话",
          "pinyin": "shénhuà",
          "order": 6
        },
        {
          "id": "d8a2900c-ae6d-40dd-9569-2237b310349e",
          "english": "culture",
          "chinese": "文化",
          "pinyin": "wénhuà",
          "order": 7
        },
        {
          "id": "b931a0de-8dfb-4970-a668-e430dc0ca8a5",
          "english": "tradition",
          "chinese": "传统",
          "pinyin": "chuántǒng",
          "order": 8
        },
        {
          "id": "58256563-4346-4715-b1da-3a0dd2030c0e",
          "english": "custom",
          "chinese": "习俗",
          "pinyin": "xísú",
          "order": 9
        }
      ]
    },
    {
      "id": "dfe420d7-f89f-43f7-898c-beffd0852de9",
      "name": "HSK 5 18",
      "description": "HSK 5 18 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "5a012db8-9010-42a4-9fd9-174c52477c7b",
          "english": "basic",
          "chinese": "词80",
          "pinyin": "cí80",
          "order": 0
        },
        {
          "id": "da517431-dae1-41c2-ba6c-314d6c41c822",
          "english": "battle",
          "chinese": "词81",
          "pinyin": "cí81",
          "order": 1
        },
        {
          "id": "e6530c08-13e7-4712-92cc-6422e9e853ac",
          "english": "beautiful",
          "chinese": "词82",
          "pinyin": "cí82",
          "order": 2
        },
        {
          "id": "82b49c99-1efa-409b-afc9-d14a49317d0e",
          "english": "beauty",
          "chinese": "词83",
          "pinyin": "cí83",
          "order": 3
        },
        {
          "id": "a5efbc6c-3eb7-4bf1-be3c-20b5c968089c",
          "english": "become",
          "chinese": "词84",
          "pinyin": "cí84",
          "order": 4
        },
        {
          "id": "f643148d-e0c3-4514-9250-2e8af5f56f31",
          "english": "bedroom",
          "chinese": "词85",
          "pinyin": "cí85",
          "order": 5
        },
        {
          "id": "bb506c55-af17-4711-aa15-8ca58e525650",
          "english": "behavior",
          "chinese": "词86",
          "pinyin": "cí86",
          "order": 6
        },
        {
          "id": "6f22f142-951c-4bbb-9f69-86b23bfa784a",
          "english": "behind",
          "chinese": "词87",
          "pinyin": "cí87",
          "order": 7
        },
        {
          "id": "0d67e87a-a276-42b0-9c6d-a4c17f21e6fe",
          "english": "believe",
          "chinese": "词88",
          "pinyin": "cí88",
          "order": 8
        },
        {
          "id": "07cdb098-c67d-4acf-98a9-cd90d877fc8c",
          "english": "belong",
          "chinese": "词89",
          "pinyin": "cí89",
          "order": 9
        }
      ]
    },
    {
      "id": "4901999c-61d1-4d34-9efb-dd99e9441331",
      "name": "HSK 5 19",
      "description": "HSK 5 19 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "1a2d00f2-fafc-4940-8905-a703ca657798",
          "english": "habit",
          "chinese": "习惯",
          "pinyin": "xíguàn",
          "order": 0
        },
        {
          "id": "db2c36de-7945-4b31-8ebe-fb60e9c74f03",
          "english": "behavior",
          "chinese": "行为",
          "pinyin": "xíngwéi",
          "order": 1
        },
        {
          "id": "c2f47e8f-d569-4448-b554-fe66d01b568d",
          "english": "action",
          "chinese": "行动",
          "pinyin": "xíngdòng",
          "order": 2
        },
        {
          "id": "ff1fe6a1-7391-43ae-8302-570b9830e801",
          "english": "activity",
          "chinese": "活动",
          "pinyin": "huódòng",
          "order": 3
        },
        {
          "id": "cf5eb06d-5e15-44e0-be39-23b742bcf10d",
          "english": "event",
          "chinese": "事件",
          "pinyin": "shìjiàn",
          "order": 4
        },
        {
          "id": "04b6e239-cbc2-4398-b75a-f00e14520686",
          "english": "occasion",
          "chinese": "场合",
          "pinyin": "chǎnghé",
          "order": 5
        },
        {
          "id": "7cc89ec3-d693-4444-aa59-4822f8007b86",
          "english": "ceremony",
          "chinese": "仪式",
          "pinyin": "yíshì",
          "order": 6
        },
        {
          "id": "9878c3f8-21e6-47fe-a8b5-89fe6e11fc0d",
          "english": "celebration",
          "chinese": "庆祝",
          "pinyin": "qìngzhù",
          "order": 7
        },
        {
          "id": "7876a85e-609f-434c-b942-fcfda4b02675",
          "english": "festival",
          "chinese": "节日",
          "pinyin": "jiérì",
          "order": 8
        },
        {
          "id": "a2ccc103-b659-417f-b8e2-4273cbdec1f9",
          "english": "holiday",
          "chinese": "假日",
          "pinyin": "jiàrì",
          "order": 9
        }
      ]
    },
    {
      "id": "38bdee47-eba4-45c8-8de8-d5dfa6147ccd",
      "name": "HSK 5 19",
      "description": "HSK 5 19 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "00d50dec-06ee-4cc0-a5a6-fa3b21d19a18",
          "english": "benefit",
          "chinese": "词90",
          "pinyin": "cí90",
          "order": 0
        },
        {
          "id": "9b937bc8-382f-4ad3-becc-d37648a5502b",
          "english": "beside",
          "chinese": "词91",
          "pinyin": "cí91",
          "order": 1
        },
        {
          "id": "9ebad04f-fa54-4930-9d83-fab96c3b3135",
          "english": "beyond",
          "chinese": "词92",
          "pinyin": "cí92",
          "order": 2
        },
        {
          "id": "65054248-074b-4c6d-8063-b6f48285bbab",
          "english": "bicycle",
          "chinese": "词93",
          "pinyin": "cí93",
          "order": 3
        },
        {
          "id": "07ecd5ab-953c-4926-b122-054d200cd5bf",
          "english": "billion",
          "chinese": "词94",
          "pinyin": "cí94",
          "order": 4
        },
        {
          "id": "a9d7be34-9aae-4fd4-95a6-0240e9f04b8b",
          "english": "birth",
          "chinese": "词95",
          "pinyin": "cí95",
          "order": 5
        },
        {
          "id": "3f304137-664c-4c41-8933-a2a54df8ef22",
          "english": "birthday",
          "chinese": "词96",
          "pinyin": "cí96",
          "order": 6
        },
        {
          "id": "bd7838e1-3c34-4672-9df1-1d51ecf88957",
          "english": "blame",
          "chinese": "词97",
          "pinyin": "cí97",
          "order": 7
        },
        {
          "id": "414f3c9d-fde8-49da-a73e-1ca024cf624e",
          "english": "block",
          "chinese": "词98",
          "pinyin": "cí98",
          "order": 8
        },
        {
          "id": "3f4c6118-b0f0-42bb-966d-19d9f014a609",
          "english": "blood",
          "chinese": "词99",
          "pinyin": "cí99",
          "order": 9
        }
      ]
    },
    {
      "id": "a52c00e0-ce0b-4d35-9646-399b9d2237e3",
      "name": "HSK 5 2",
      "description": "HSK 5 2 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "c4bdf1bb-c6eb-4d30-ac6b-ed0719ae00a9",
          "english": "competition",
          "chinese": "竞争",
          "pinyin": "jìngzhēng",
          "order": 0
        },
        {
          "id": "dd0a4269-332e-4941-b64e-967f051620f9",
          "english": "cooperation",
          "chinese": "合作",
          "pinyin": "hézuò",
          "order": 1
        },
        {
          "id": "a02da2e7-703f-4176-9da7-cf4260fa5ef2",
          "english": "communication",
          "chinese": "交流",
          "pinyin": "jiāoliú",
          "order": 2
        },
        {
          "id": "fb723559-fe4b-4aa8-aaea-e73d57ef1726",
          "english": "development",
          "chinese": "发展",
          "pinyin": "fāzhǎn",
          "order": 3
        },
        {
          "id": "42f8b765-a4e4-4078-9c98-f73bf6eb2ab7",
          "english": "progress",
          "chinese": "进步",
          "pinyin": "jìnbù",
          "order": 4
        },
        {
          "id": "d30834b6-1458-4e2f-8af3-a64072ede95a",
          "english": "tradition",
          "chinese": "传统",
          "pinyin": "chuántǒng",
          "order": 5
        },
        {
          "id": "eb3220da-14b0-4ff6-b68c-439ca9ff1d0e",
          "english": "modern",
          "chinese": "现代",
          "pinyin": "xiàndài",
          "order": 6
        },
        {
          "id": "c81bfc4a-b059-4f8f-9a02-c2cadc4fdb1a",
          "english": "ancient",
          "chinese": "古代",
          "pinyin": "gǔdài",
          "order": 7
        },
        {
          "id": "dd31e368-255e-4577-9043-89b968d0df3a",
          "english": "history",
          "chinese": "历史",
          "pinyin": "lìshǐ",
          "order": 8
        },
        {
          "id": "8b1cdff4-1aff-4f82-8a1a-10c85cc731da",
          "english": "future",
          "chinese": "未来",
          "pinyin": "wèilái",
          "order": 9
        }
      ]
    },
    {
      "id": "7ab36c9c-c301-4bc1-a8f6-e394dd092de6",
      "name": "HSK 5 20",
      "description": "HSK 5 20 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "92c28777-4cc7-417b-89b4-6579564ea10c",
          "english": "vacation",
          "chinese": "假期",
          "pinyin": "jiàqī",
          "order": 0
        },
        {
          "id": "86bfa1cb-bc7b-4cef-9b15-1d9b23db70f1",
          "english": "travel",
          "chinese": "旅行",
          "pinyin": "lǚxíng",
          "order": 1
        },
        {
          "id": "29c8f6f8-2d60-49db-89e6-e620b7f7fad8",
          "english": "journey",
          "chinese": "旅程",
          "pinyin": "lǚchéng",
          "order": 2
        },
        {
          "id": "3bde5750-064a-4dc8-887b-59e388dd97d2",
          "english": "trip",
          "chinese": "旅行",
          "pinyin": "lǚxíng",
          "order": 3
        },
        {
          "id": "07f986c8-bc45-4670-bf20-adbb652d158c",
          "english": "tour",
          "chinese": "旅游",
          "pinyin": "lǚyóu",
          "order": 4
        },
        {
          "id": "29193195-b001-4800-b77e-d48b6b80df87",
          "english": "visit",
          "chinese": "访问",
          "pinyin": "fǎngwèn",
          "order": 5
        },
        {
          "id": "e0de9123-e91b-49d8-95e8-1ff1142a9586",
          "english": "guest",
          "chinese": "客人",
          "pinyin": "kèrén",
          "order": 6
        },
        {
          "id": "f54c6cbb-2048-4535-9bad-ea91ac4ac34f",
          "english": "visitor",
          "chinese": "访客",
          "pinyin": "fǎngkè",
          "order": 7
        },
        {
          "id": "234d1984-a082-497e-9731-e4c575d775b4",
          "english": "tourist",
          "chinese": "游客",
          "pinyin": "yóukè",
          "order": 8
        },
        {
          "id": "d90a21d1-f76a-4fff-a2e2-cfe7bf264f90",
          "english": "hotel",
          "chinese": "酒店",
          "pinyin": "jiǔdiàn",
          "order": 9
        }
      ]
    },
    {
      "id": "b1b1b0e6-311e-4703-9d8d-770afccdcf66",
      "name": "HSK 5 20",
      "description": "HSK 5 20 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "704b36a2-9623-4544-aeaf-95b3c7c8d5ef",
          "english": "board",
          "chinese": "词100",
          "pinyin": "cí100",
          "order": 0
        },
        {
          "id": "da15bc91-217c-47c4-a559-22275b0423a8",
          "english": "body",
          "chinese": "词101",
          "pinyin": "cí101",
          "order": 1
        },
        {
          "id": "5c57eb9d-345e-42b5-a989-25b0920fea62",
          "english": "border",
          "chinese": "词102",
          "pinyin": "cí102",
          "order": 2
        },
        {
          "id": "6612e405-fb5b-4cc8-ade4-a280235556c4",
          "english": "born",
          "chinese": "词103",
          "pinyin": "cí103",
          "order": 3
        },
        {
          "id": "658d0fae-60a8-4a1f-ba7a-26b1d08945c3",
          "english": "bottle",
          "chinese": "词104",
          "pinyin": "cí104",
          "order": 4
        },
        {
          "id": "48649cdf-be76-46b1-a9e9-2a3b6f21ed0b",
          "english": "bottom",
          "chinese": "词105",
          "pinyin": "cí105",
          "order": 5
        },
        {
          "id": "5528f3b6-ed04-4a57-975f-7c62c7b82a89",
          "english": "brain",
          "chinese": "词106",
          "pinyin": "cí106",
          "order": 6
        },
        {
          "id": "ce802c60-2900-48e6-8edd-29ea56112130",
          "english": "branch",
          "chinese": "词107",
          "pinyin": "cí107",
          "order": 7
        },
        {
          "id": "18637e08-79c3-4380-9ad3-648791a373d1",
          "english": "brand",
          "chinese": "词108",
          "pinyin": "cí108",
          "order": 8
        },
        {
          "id": "97b745d7-ce97-4c70-9718-ba9170f957f8",
          "english": "brave",
          "chinese": "词109",
          "pinyin": "cí109",
          "order": 9
        }
      ]
    },
    {
      "id": "a6811506-a6ce-4a32-93f9-d7654e9335b4",
      "name": "HSK 5 21",
      "description": "HSK 5 21 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "fb53225a-4f42-48f2-ad30-0b58e3d713b4",
          "english": "bread",
          "chinese": "词110",
          "pinyin": "cí110",
          "order": 0
        },
        {
          "id": "5c342a94-837c-4051-9194-3ce5c327a16c",
          "english": "break",
          "chinese": "词111",
          "pinyin": "cí111",
          "order": 1
        },
        {
          "id": "a45a0216-8894-4a36-9752-ccb40d52caed",
          "english": "breakfast",
          "chinese": "词112",
          "pinyin": "cí112",
          "order": 2
        },
        {
          "id": "99d28090-7f42-4d5b-8cc1-f46307f99f02",
          "english": "breath",
          "chinese": "词113",
          "pinyin": "cí113",
          "order": 3
        },
        {
          "id": "d0b6915a-cf9c-4ab0-9445-b7da27a036ba",
          "english": "bridge",
          "chinese": "词114",
          "pinyin": "cí114",
          "order": 4
        },
        {
          "id": "2256a418-c449-4c7e-82fa-451804e9b83e",
          "english": "brief",
          "chinese": "词115",
          "pinyin": "cí115",
          "order": 5
        },
        {
          "id": "e7dc13fd-f95c-4404-bb15-45e20edb33ed",
          "english": "bright",
          "chinese": "词116",
          "pinyin": "cí116",
          "order": 6
        },
        {
          "id": "d6502078-7a4f-43f8-b533-2faefd0111ba",
          "english": "bring",
          "chinese": "词117",
          "pinyin": "cí117",
          "order": 7
        },
        {
          "id": "2322ebf9-e031-418e-9b9a-1a5328ec1c99",
          "english": "broad",
          "chinese": "词118",
          "pinyin": "cí118",
          "order": 8
        },
        {
          "id": "fde35279-70f5-451a-abc1-f338bceff5bb",
          "english": "brother",
          "chinese": "词119",
          "pinyin": "cí119",
          "order": 9
        }
      ]
    },
    {
      "id": "fd453507-ef1a-4095-bd17-76f42a99aa05",
      "name": "HSK 5 21",
      "description": "HSK 5 21 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "f0c1f1bb-8552-4179-ae97-c692cad4f13f",
          "english": "restaurant",
          "chinese": "餐厅",
          "pinyin": "cāntīng",
          "order": 0
        },
        {
          "id": "5027bb4e-fed4-4118-bae7-e1d57d3baf39",
          "english": "food",
          "chinese": "食物",
          "pinyin": "shíwù",
          "order": 1
        },
        {
          "id": "0b2af745-4e72-4511-81ac-11f1a6c947ba",
          "english": "meal",
          "chinese": "餐",
          "pinyin": "cān",
          "order": 2
        },
        {
          "id": "53e097e2-c0c9-4974-a413-99aebcd2169f",
          "english": "breakfast",
          "chinese": "早餐",
          "pinyin": "zǎocān",
          "order": 3
        },
        {
          "id": "4cba4d3c-2843-4ebf-ab69-7f0827d45206",
          "english": "lunch",
          "chinese": "午餐",
          "pinyin": "wǔcān",
          "order": 4
        },
        {
          "id": "5b661787-0dd4-462d-8918-cba0251a14c1",
          "english": "dinner",
          "chinese": "晚餐",
          "pinyin": "wǎncān",
          "order": 5
        },
        {
          "id": "1b659de8-195c-4215-be4c-ad69eebc75db",
          "english": "nutrition",
          "chinese": "营养",
          "pinyin": "yíngyǎng",
          "order": 6
        },
        {
          "id": "a2513f99-7e28-42b6-b450-b4e67d671b3c",
          "english": "health",
          "chinese": "健康",
          "pinyin": "jiànkāng",
          "order": 7
        },
        {
          "id": "ef13b641-bbe6-4575-b0e0-44ab05323b03",
          "english": "medicine",
          "chinese": "医学",
          "pinyin": "yīxué",
          "order": 8
        },
        {
          "id": "d915a708-416e-4d6f-83fd-85c8f1416871",
          "english": "treatment",
          "chinese": "治疗",
          "pinyin": "zhìliáo",
          "order": 9
        }
      ]
    },
    {
      "id": "22209c56-afd1-49cb-bade-419bf233c90a",
      "name": "HSK 5 22",
      "description": "HSK 5 22 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "c533512c-3e29-4299-841a-7baa0f2f5f51",
          "english": "budget",
          "chinese": "词120",
          "pinyin": "cí120",
          "order": 0
        },
        {
          "id": "a54ac4e8-c698-4051-b176-263a431c2533",
          "english": "build",
          "chinese": "词121",
          "pinyin": "cí121",
          "order": 1
        },
        {
          "id": "595e49e6-5ac0-45b9-acd0-ab9a9fe18381",
          "english": "building",
          "chinese": "词122",
          "pinyin": "cí122",
          "order": 2
        },
        {
          "id": "01f2d942-851a-47c7-a791-29bbaf9769a8",
          "english": "business",
          "chinese": "词123",
          "pinyin": "cí123",
          "order": 3
        },
        {
          "id": "c398d382-128d-47ff-bf2b-0a3e369f5578",
          "english": "button",
          "chinese": "词124",
          "pinyin": "cí124",
          "order": 4
        },
        {
          "id": "885f2936-7c85-464e-8b05-5b775d9e8b6f",
          "english": "buyer",
          "chinese": "词125",
          "pinyin": "cí125",
          "order": 5
        },
        {
          "id": "9c47562d-db90-465f-a928-ae9b41122518",
          "english": "camera",
          "chinese": "词126",
          "pinyin": "cí126",
          "order": 6
        },
        {
          "id": "9e6e8600-51cb-46d7-be90-d22cee6bb436",
          "english": "campaign",
          "chinese": "词127",
          "pinyin": "cí127",
          "order": 7
        },
        {
          "id": "60073210-b662-4b78-bd12-7136e0f6eb7a",
          "english": "campus",
          "chinese": "词128",
          "pinyin": "cí128",
          "order": 8
        },
        {
          "id": "e3445e50-dc94-4f18-a335-7f60ba17336d",
          "english": "cancer",
          "chinese": "词129",
          "pinyin": "cí129",
          "order": 9
        }
      ]
    },
    {
      "id": "fbfc4531-9983-415c-9247-53bf75c1fe15",
      "name": "HSK 5 22",
      "description": "HSK 5 22 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "69df800a-8577-490d-8f2a-9d46249a7dc8",
          "english": "cure",
          "chinese": "治愈",
          "pinyin": "zhìyù",
          "order": 0
        },
        {
          "id": "2a664d26-cb53-430a-8865-3712d3180396",
          "english": "healing",
          "chinese": "康复",
          "pinyin": "kāngfù",
          "order": 1
        },
        {
          "id": "7aa426b5-e7d3-40f1-bc4f-54be2943ac63",
          "english": "recovery",
          "chinese": "恢复",
          "pinyin": "huīfù",
          "order": 2
        },
        {
          "id": "46eb9937-11c5-4f2b-b25a-a4257f524077",
          "english": "exercise",
          "chinese": "运动",
          "pinyin": "yùndòng",
          "order": 3
        },
        {
          "id": "2ae0b8e9-b0c2-4f9f-b2bf-bb2263ee4d61",
          "english": "sport",
          "chinese": "体育",
          "pinyin": "tǐyù",
          "order": 4
        },
        {
          "id": "65a245f2-d848-4b1e-8107-093cd9fb3a7a",
          "english": "game",
          "chinese": "游戏",
          "pinyin": "yóuxì",
          "order": 5
        },
        {
          "id": "36076c76-1811-40f9-8529-c102adb7dc29",
          "english": "play",
          "chinese": "玩",
          "pinyin": "wán",
          "order": 6
        },
        {
          "id": "e20b2c8a-d4e7-4a97-a274-983dc56ab15c",
          "english": "entertainment",
          "chinese": "娱乐",
          "pinyin": "yúlè",
          "order": 7
        },
        {
          "id": "3fe8b214-a75f-46cf-bb39-ed11cc2c6c77",
          "english": "fun",
          "chinese": "乐趣",
          "pinyin": "lèqù",
          "order": 8
        },
        {
          "id": "fef2d36d-3247-4a4c-8ca0-65efd1232c28",
          "english": "pleasure",
          "chinese": "快乐",
          "pinyin": "kuàilè",
          "order": 9
        }
      ]
    },
    {
      "id": "e6659d75-b643-406b-b804-8fd0a80805f4",
      "name": "HSK 5 23",
      "description": "HSK 5 23 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "16697ead-0b13-4090-80ad-c9e58162f2a4",
          "english": "candidate",
          "chinese": "词130",
          "pinyin": "cí130",
          "order": 0
        },
        {
          "id": "e4e1c102-7333-432d-bc3d-3dfe194f19fd",
          "english": "capable",
          "chinese": "词131",
          "pinyin": "cí131",
          "order": 1
        },
        {
          "id": "0214e075-c7f2-4142-bb31-4f7f35cc2150",
          "english": "capacity",
          "chinese": "词132",
          "pinyin": "cí132",
          "order": 2
        },
        {
          "id": "de2da953-4c85-463e-86bf-017824ea4446",
          "english": "capital",
          "chinese": "词133",
          "pinyin": "cí133",
          "order": 3
        },
        {
          "id": "2192475c-5bbb-4541-8572-9a36e5e34bbf",
          "english": "captain",
          "chinese": "词134",
          "pinyin": "cí134",
          "order": 4
        },
        {
          "id": "97051130-b6a7-4a49-a2e4-0a9b0798b7d8",
          "english": "capture",
          "chinese": "词135",
          "pinyin": "cí135",
          "order": 5
        },
        {
          "id": "3fdc8a7e-f647-400b-9899-b9e6b0671571",
          "english": "carbon",
          "chinese": "词136",
          "pinyin": "cí136",
          "order": 6
        },
        {
          "id": "dce7932e-291f-4d52-8bf6-28a568a0d9d9",
          "english": "career",
          "chinese": "词137",
          "pinyin": "cí137",
          "order": 7
        },
        {
          "id": "62fb63d1-ede7-49c4-aaf7-c2b362a0cfae",
          "english": "careful",
          "chinese": "词138",
          "pinyin": "cí138",
          "order": 8
        },
        {
          "id": "9249f2ee-f92e-4839-97a0-f94fbec0818d",
          "english": "carry",
          "chinese": "词139",
          "pinyin": "cí139",
          "order": 9
        }
      ]
    },
    {
      "id": "5598bbb6-50f0-44a7-a879-c80392099ee6",
      "name": "HSK 5 23",
      "description": "HSK 5 23 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "18153784-fd6b-413a-91d0-2e6edb3ff99a",
          "english": "enjoyment",
          "chinese": "享受",
          "pinyin": "xiǎngshòu",
          "order": 0
        },
        {
          "id": "a37345a5-8b72-49c8-a861-58eef49ee2bf",
          "english": "relaxation",
          "chinese": "放松",
          "pinyin": "fàngsōng",
          "order": 1
        },
        {
          "id": "2af7b88a-ca68-4e4b-81c3-952d710d7f57",
          "english": "rest",
          "chinese": "休息",
          "pinyin": "xiūxi",
          "order": 2
        },
        {
          "id": "68d5f0eb-9f16-49ea-a992-2fd1acfdb2e0",
          "english": "break",
          "chinese": "休息",
          "pinyin": "xiūxi",
          "order": 3
        },
        {
          "id": "8ec0f1b0-1267-44e9-a741-5a6ad04f870a",
          "english": "pause",
          "chinese": "暂停",
          "pinyin": "zàntíng",
          "order": 4
        },
        {
          "id": "7cea3ebb-f52a-4a29-a3b8-68964150683e",
          "english": "stop",
          "chinese": "停止",
          "pinyin": "tíngzhǐ",
          "order": 5
        },
        {
          "id": "556c4662-7979-4830-bc7b-6eb6af7ace13",
          "english": "end",
          "chinese": "结束",
          "pinyin": "jiéshù",
          "order": 6
        },
        {
          "id": "c1dbe7b7-4881-49e1-9846-bdbe75b7f42b",
          "english": "finish",
          "chinese": "完成",
          "pinyin": "wánchéng",
          "order": 7
        },
        {
          "id": "e464bf21-6cf3-4a17-b78a-eefb7f8616b2",
          "english": "complete",
          "chinese": "完整",
          "pinyin": "wánzhěng",
          "order": 8
        },
        {
          "id": "dac2d80c-4ae5-4ff3-80ef-0f6ce7136d2d",
          "english": "whole",
          "chinese": "整体",
          "pinyin": "zhěngtǐ",
          "order": 9
        }
      ]
    },
    {
      "id": "4ac38037-c6d5-4aa3-862b-e3efc1747f7a",
      "name": "HSK 5 24",
      "description": "HSK 5 24 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "c2c4366a-53a2-42d7-b001-09addbdc193a",
          "english": "category",
          "chinese": "词140",
          "pinyin": "cí140",
          "order": 0
        },
        {
          "id": "63252f03-a2f4-472e-a63e-2bf9646c9642",
          "english": "cause",
          "chinese": "词141",
          "pinyin": "cí141",
          "order": 1
        },
        {
          "id": "7e2f78b6-810d-448c-a94f-9d54d454142e",
          "english": "celebrate",
          "chinese": "词142",
          "pinyin": "cí142",
          "order": 2
        },
        {
          "id": "46de911a-b5bc-47af-8322-2d5662210647",
          "english": "celebration",
          "chinese": "词143",
          "pinyin": "cí143",
          "order": 3
        },
        {
          "id": "f71b53f8-bd2d-4383-938a-44411ba7fe7f",
          "english": "center",
          "chinese": "词144",
          "pinyin": "cí144",
          "order": 4
        },
        {
          "id": "6f89b214-66c3-4651-98d8-6640dc6a48d3",
          "english": "central",
          "chinese": "词145",
          "pinyin": "cí145",
          "order": 5
        },
        {
          "id": "622326f9-c511-49c7-84de-defbb05772e8",
          "english": "century",
          "chinese": "词146",
          "pinyin": "cí146",
          "order": 6
        },
        {
          "id": "917d9469-9b0b-4939-87f8-9d296390a5a8",
          "english": "ceremony",
          "chinese": "词147",
          "pinyin": "cí147",
          "order": 7
        },
        {
          "id": "3c8f6e5b-e00f-4a3a-b346-f7bd2da6ca20",
          "english": "certain",
          "chinese": "词148",
          "pinyin": "cí148",
          "order": 8
        },
        {
          "id": "aca8c657-7e90-4f66-a43c-ccbab1540d23",
          "english": "certainly",
          "chinese": "词149",
          "pinyin": "cí149",
          "order": 9
        }
      ]
    },
    {
      "id": "e88138c8-0267-432b-ba0f-6564ff1fe529",
      "name": "HSK 5 24",
      "description": "HSK 5 24 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "f5459a41-a70a-4187-bf13-46e1dc9ca163",
          "english": "total",
          "chinese": "总计",
          "pinyin": "zǒngjì",
          "order": 0
        },
        {
          "id": "4021ac43-22d7-45b5-bb6f-49998378db4f",
          "english": "sum",
          "chinese": "总和",
          "pinyin": "zǒnghé",
          "order": 1
        },
        {
          "id": "846f2673-e6e1-48e2-ba9e-1ac95e8833cc",
          "english": "addition",
          "chinese": "加法",
          "pinyin": "jiāfǎ",
          "order": 2
        },
        {
          "id": "f48b3c8c-dc4a-46c0-98ce-f3d18e7ca7b4",
          "english": "subtraction",
          "chinese": "减法",
          "pinyin": "jiǎnfǎ",
          "order": 3
        },
        {
          "id": "88f21047-c5ee-4905-8537-c0428a117841",
          "english": "multiplication",
          "chinese": "乘法",
          "pinyin": "chéngfǎ",
          "order": 4
        },
        {
          "id": "b52b2692-c022-4f69-9584-cfb722c5fa86",
          "english": "division",
          "chinese": "除法",
          "pinyin": "chúfǎ",
          "order": 5
        },
        {
          "id": "1fbc491a-74a8-4b1d-9ccd-cdcd63f5132b",
          "english": "mathematics",
          "chinese": "数学",
          "pinyin": "shùxué",
          "order": 6
        },
        {
          "id": "a25e3463-1ab5-4f15-a163-72de314234f9",
          "english": "science",
          "chinese": "科学",
          "pinyin": "kēxué",
          "order": 7
        },
        {
          "id": "30e39c1f-10b3-4122-a88c-94b82c844dbf",
          "english": "physics",
          "chinese": "物理",
          "pinyin": "wùlǐ",
          "order": 8
        },
        {
          "id": "3903b222-a38a-4872-9ffd-773e3369fd30",
          "english": "chemistry",
          "chinese": "化学",
          "pinyin": "huàxué",
          "order": 9
        }
      ]
    },
    {
      "id": "844bb3f4-b74d-45e0-b6f3-e22f415b23b2",
      "name": "HSK 5 25",
      "description": "HSK 5 25 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "f3df3322-245b-4428-92b2-d61e7e5b1501",
          "english": "chain",
          "chinese": "词150",
          "pinyin": "cí150",
          "order": 0
        },
        {
          "id": "30bead54-0357-4878-a4de-c3c6dabe8e94",
          "english": "chair",
          "chinese": "词151",
          "pinyin": "cí151",
          "order": 1
        },
        {
          "id": "28007a1f-1efa-44ae-be1a-302963efbf26",
          "english": "chairman",
          "chinese": "词152",
          "pinyin": "cí152",
          "order": 2
        },
        {
          "id": "40f429f5-492b-4984-bebb-2721220d3771",
          "english": "challenge",
          "chinese": "词153",
          "pinyin": "cí153",
          "order": 3
        },
        {
          "id": "4c2648f8-feee-47a9-931c-f958242ee0d3",
          "english": "champion",
          "chinese": "词154",
          "pinyin": "cí154",
          "order": 4
        },
        {
          "id": "d3436776-0e52-4109-b8a1-695fa36fde5e",
          "english": "chance",
          "chinese": "词155",
          "pinyin": "cí155",
          "order": 5
        },
        {
          "id": "45ced200-0fb3-4c13-a2a5-8e8867c4639c",
          "english": "change",
          "chinese": "词156",
          "pinyin": "cí156",
          "order": 6
        },
        {
          "id": "4affa9ab-1271-43dc-8743-bdf71eb3cd84",
          "english": "channel",
          "chinese": "词157",
          "pinyin": "cí157",
          "order": 7
        },
        {
          "id": "30d96cec-5c24-45fe-905e-f72cbd5c2868",
          "english": "chapter",
          "chinese": "词158",
          "pinyin": "cí158",
          "order": 8
        },
        {
          "id": "b8e06031-dc38-4fed-8275-3423bc0ba9c1",
          "english": "character",
          "chinese": "词159",
          "pinyin": "cí159",
          "order": 9
        }
      ]
    },
    {
      "id": "0e53295d-44f7-4e6d-a324-021516ff9862",
      "name": "HSK 5 25",
      "description": "HSK 5 25 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "13ea5a3a-fa9c-42e7-8175-47ba717e4eeb",
          "english": "biology",
          "chinese": "生物学",
          "pinyin": "shēngwùxué",
          "order": 0
        },
        {
          "id": "8172a13c-6a6a-4dec-8f14-5a9b4bea0255",
          "english": "geography",
          "chinese": "地理",
          "pinyin": "dìlǐ",
          "order": 1
        },
        {
          "id": "1d3e3e23-2239-4483-b414-e82771704169",
          "english": "history",
          "chinese": "历史",
          "pinyin": "lìshǐ",
          "order": 2
        },
        {
          "id": "9655ba5a-034d-48ba-81f3-35015d5ab1ae",
          "english": "philosophy",
          "chinese": "哲学",
          "pinyin": "zhéxué",
          "order": 3
        },
        {
          "id": "831e6f0e-1645-4440-bcf4-04976dbf6e25",
          "english": "psychology",
          "chinese": "心理学",
          "pinyin": "xīnlǐxué",
          "order": 4
        },
        {
          "id": "1d6f3d0e-40c2-4284-9055-af720d705999",
          "english": "sociology",
          "chinese": "社会学",
          "pinyin": "shèhuìxué",
          "order": 5
        },
        {
          "id": "9931ea58-f08d-41f3-b853-6ee00804f4c7",
          "english": "anthropology",
          "chinese": "人类学",
          "pinyin": "rénlèixué",
          "order": 6
        },
        {
          "id": "48565669-5acb-4104-9174-a100cddc8c6e",
          "english": "linguistics",
          "chinese": "语言学",
          "pinyin": "yǔyánxué",
          "order": 7
        },
        {
          "id": "ff569bcf-8a91-4abb-a1d8-15b6e83446bc",
          "english": "language",
          "chinese": "语言",
          "pinyin": "yǔyán",
          "order": 8
        },
        {
          "id": "0009d92d-145c-448f-aa22-fd576cc5e94f",
          "english": "word",
          "chinese": "词",
          "pinyin": "cí",
          "order": 9
        }
      ]
    },
    {
      "id": "9e701534-72b3-473a-bfda-eb0549b76474",
      "name": "HSK 5 26",
      "description": "HSK 5 26 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "1e404d3a-bf07-400a-ab5c-6c54fcc4493a",
          "english": "vocabulary",
          "chinese": "词汇",
          "pinyin": "cíhuì",
          "order": 0
        },
        {
          "id": "9664c754-f4ee-42da-8de8-417986f04d06",
          "english": "grammar",
          "chinese": "语法",
          "pinyin": "yǔfǎ",
          "order": 1
        },
        {
          "id": "affc8c36-f9e7-4db4-928e-a8107b36bac7",
          "english": "sentence",
          "chinese": "句子",
          "pinyin": "jùzi",
          "order": 2
        },
        {
          "id": "2d5ef96b-c5fb-4993-a875-8c231290d7ec",
          "english": "paragraph",
          "chinese": "段落",
          "pinyin": "duànluò",
          "order": 3
        },
        {
          "id": "186e28b9-c3c7-4905-909a-7bf388dc25ee",
          "english": "text",
          "chinese": "文本",
          "pinyin": "wénběn",
          "order": 4
        },
        {
          "id": "a0615938-c912-4ef7-84e2-a1bcc0fddc29",
          "english": "reading",
          "chinese": "阅读",
          "pinyin": "yuèdú",
          "order": 5
        },
        {
          "id": "33f1e592-4ddb-4db3-8643-d5e017eb547f",
          "english": "writing",
          "chinese": "写作",
          "pinyin": "xiězuò",
          "order": 6
        },
        {
          "id": "7cfb7fda-de9e-4c4e-a180-4ea4b1750b05",
          "english": "speaking",
          "chinese": "说话",
          "pinyin": "shuōhuà",
          "order": 7
        },
        {
          "id": "a4011f4a-90d0-4d25-bc73-beb1529c1a08",
          "english": "listening",
          "chinese": "听力",
          "pinyin": "tīnglì",
          "order": 8
        },
        {
          "id": "1726ab1e-e2a9-4225-b0ee-d9a3a286d130",
          "english": "pronunciation",
          "chinese": "发音",
          "pinyin": "fāyīn",
          "order": 9
        }
      ]
    },
    {
      "id": "2f4fbcc9-e517-4ab8-ae66-42554c49381c",
      "name": "HSK 5 26",
      "description": "HSK 5 26 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "6ca45388-270a-4e49-9567-d9eb79821fd8",
          "english": "charge",
          "chinese": "词160",
          "pinyin": "cí160",
          "order": 0
        },
        {
          "id": "3043d935-8757-48ed-b6eb-9bef36948e62",
          "english": "charity",
          "chinese": "词161",
          "pinyin": "cí161",
          "order": 1
        },
        {
          "id": "1c86286b-c0e5-44ae-ac72-5b29b5bae302",
          "english": "chart",
          "chinese": "词162",
          "pinyin": "cí162",
          "order": 2
        },
        {
          "id": "201942ba-f471-44c0-88c9-63742a5bdbcd",
          "english": "cheap",
          "chinese": "词163",
          "pinyin": "cí163",
          "order": 3
        },
        {
          "id": "d3f8ae7c-bc54-41cb-9aa4-9e5b121e8199",
          "english": "check",
          "chinese": "词164",
          "pinyin": "cí164",
          "order": 4
        },
        {
          "id": "4dfeab79-757d-4353-87d6-cbe36fd760fc",
          "english": "chemical",
          "chinese": "词165",
          "pinyin": "cí165",
          "order": 5
        },
        {
          "id": "a0c1f919-5fb1-4cd2-bf98-10e154a8d744",
          "english": "chest",
          "chinese": "词166",
          "pinyin": "cí166",
          "order": 6
        },
        {
          "id": "203049b9-fa29-4f70-b435-17a46b1f9200",
          "english": "chicken",
          "chinese": "词167",
          "pinyin": "cí167",
          "order": 7
        },
        {
          "id": "2ecd4efa-a720-40a2-b485-1e086a8d41a1",
          "english": "chief",
          "chinese": "词168",
          "pinyin": "cí168",
          "order": 8
        },
        {
          "id": "da275bff-ce8b-4057-b712-351cf001805b",
          "english": "child",
          "chinese": "词169",
          "pinyin": "cí169",
          "order": 9
        }
      ]
    },
    {
      "id": "1203fed2-4df5-4955-bcd8-f1cc032d1b80",
      "name": "HSK 5 27",
      "description": "HSK 5 27 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "148d14b0-fd12-42c6-b8ce-6d063ea21118",
          "english": "choice",
          "chinese": "词170",
          "pinyin": "cí170",
          "order": 0
        },
        {
          "id": "b60746e5-f1f4-4b41-b4b1-13b26252563a",
          "english": "choose",
          "chinese": "词171",
          "pinyin": "cí171",
          "order": 1
        },
        {
          "id": "6ec646aa-6a15-40b0-8ef0-db87cd58f737",
          "english": "church",
          "chinese": "词172",
          "pinyin": "cí172",
          "order": 2
        },
        {
          "id": "9b5812fd-5d2e-4a23-98fb-993c20791d9e",
          "english": "circle",
          "chinese": "词173",
          "pinyin": "cí173",
          "order": 3
        },
        {
          "id": "28f7eef2-46e6-4cf6-ac33-2626f5a60e8a",
          "english": "citizen",
          "chinese": "词174",
          "pinyin": "cí174",
          "order": 4
        },
        {
          "id": "6bc46c95-ea8d-40be-9cf4-47ed4198f956",
          "english": "city",
          "chinese": "词175",
          "pinyin": "cí175",
          "order": 5
        },
        {
          "id": "fa29d830-804d-422e-85b8-b16df2fa38b5",
          "english": "civil",
          "chinese": "词176",
          "pinyin": "cí176",
          "order": 6
        },
        {
          "id": "c4a4a00a-63bb-4e4c-8784-e989d2b40ba1",
          "english": "claim",
          "chinese": "词177",
          "pinyin": "cí177",
          "order": 7
        },
        {
          "id": "96261a21-df72-4e9c-9b7f-de72ccf98a84",
          "english": "class",
          "chinese": "词178",
          "pinyin": "cí178",
          "order": 8
        },
        {
          "id": "1c1622c5-b28d-472b-bb92-f8502e1d9906",
          "english": "classic",
          "chinese": "词179",
          "pinyin": "cí179",
          "order": 9
        }
      ]
    },
    {
      "id": "4e64fc84-c4c2-4b5c-ae7a-3665573cbe12",
      "name": "HSK 5 27",
      "description": "HSK 5 27 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "fb99e2f7-9747-4fcb-9d0e-025e29d61d36",
          "english": "accent",
          "chinese": "口音",
          "pinyin": "kǒuyīn",
          "order": 0
        },
        {
          "id": "c0daf54c-95c3-4369-9a89-bdc72d2d130a",
          "english": "dialect",
          "chinese": "方言",
          "pinyin": "fāngyán",
          "order": 1
        },
        {
          "id": "5c00d3ff-cf47-420a-bcc9-a7b41d16d190",
          "english": "translation",
          "chinese": "翻译",
          "pinyin": "fānyì",
          "order": 2
        },
        {
          "id": "789c14d5-eec5-465c-b1ec-7ec12214a11c",
          "english": "interpretation",
          "chinese": "口译",
          "pinyin": "kǒuyì",
          "order": 3
        },
        {
          "id": "c3fc1285-73f1-41ee-ae5b-64ac2858692e",
          "english": "meaning",
          "chinese": "意思",
          "pinyin": "yìsi",
          "order": 4
        },
        {
          "id": "ba05ca36-36af-4906-81ba-fba24fe657f7",
          "english": "significance",
          "chinese": "意义",
          "pinyin": "yìyì",
          "order": 5
        },
        {
          "id": "51eedde2-5feb-48a4-8c16-7960b587fdf6",
          "english": "importance",
          "chinese": "重要性",
          "pinyin": "zhòngyàoxìng",
          "order": 6
        },
        {
          "id": "bbe9c95b-b0b5-4370-802c-ac2c7459bf1c",
          "english": "value",
          "chinese": "价值",
          "pinyin": "jiàzhí",
          "order": 7
        },
        {
          "id": "1251b025-1aa7-4aa2-8a5e-9e181df31fd2",
          "english": "worth",
          "chinese": "价值",
          "pinyin": "jiàzhí",
          "order": 8
        },
        {
          "id": "b79c9d30-480e-4a11-93c8-5f87f04b0182",
          "english": "cost",
          "chinese": "成本",
          "pinyin": "chéngběn",
          "order": 9
        }
      ]
    },
    {
      "id": "c04aae3c-5ade-46f7-b2a7-97b23a62b15e",
      "name": "HSK 5 28",
      "description": "HSK 5 28 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "a591e071-1aec-4666-9236-70c6b67044e8",
          "english": "price",
          "chinese": "价格",
          "pinyin": "jiàgé",
          "order": 0
        },
        {
          "id": "e0a99778-ddea-45f6-8108-bf70418ad3af",
          "english": "expense",
          "chinese": "费用",
          "pinyin": "fèiyòng",
          "order": 1
        },
        {
          "id": "86aee726-d40d-4513-a910-39827b3bcedb",
          "english": "budget",
          "chinese": "预算",
          "pinyin": "yùsuàn",
          "order": 2
        },
        {
          "id": "d028b4f2-1895-43a6-86c4-5cb45d8093f4",
          "english": "finance",
          "chinese": "金融",
          "pinyin": "jīnróng",
          "order": 3
        },
        {
          "id": "2d5906db-2b7c-42ca-82be-f3ccd5857f71",
          "english": "money",
          "chinese": "金钱",
          "pinyin": "jīnqián",
          "order": 4
        },
        {
          "id": "ce8cc1c1-f668-412a-9252-fd9591c54fa1",
          "english": "currency",
          "chinese": "货币",
          "pinyin": "huòbì",
          "order": 5
        },
        {
          "id": "bd487418-69b9-4b79-921b-09d9d7345c29",
          "english": "bank",
          "chinese": "银行",
          "pinyin": "yínháng",
          "order": 6
        },
        {
          "id": "1de6e8c1-95b0-436b-8c11-ed20dce16094",
          "english": "account",
          "chinese": "账户",
          "pinyin": "zhànghù",
          "order": 7
        },
        {
          "id": "768835a0-1dff-4ef7-95d4-bb7930788e45",
          "english": "investment",
          "chinese": "投资",
          "pinyin": "tóuzī",
          "order": 8
        },
        {
          "id": "52bae37b-bc07-46ae-bb7f-b20dc3cb2194",
          "english": "profit",
          "chinese": "利润",
          "pinyin": "lìrùn",
          "order": 9
        }
      ]
    },
    {
      "id": "978ac522-1237-4dde-b66d-6b4fb5595fbd",
      "name": "HSK 5 28",
      "description": "HSK 5 28 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "686e9c39-6ab2-4538-aedd-cdc66c630e8a",
          "english": "classroom",
          "chinese": "词180",
          "pinyin": "cí180",
          "order": 0
        },
        {
          "id": "b6edacc0-30f0-45b4-9344-48087b3f3bf7",
          "english": "clean",
          "chinese": "词181",
          "pinyin": "cí181",
          "order": 1
        },
        {
          "id": "82294bda-269d-4f93-b80c-42988fc89b40",
          "english": "clear",
          "chinese": "词182",
          "pinyin": "cí182",
          "order": 2
        },
        {
          "id": "314862e7-78e7-41d0-b0ae-94f3cb37721c",
          "english": "clearly",
          "chinese": "词183",
          "pinyin": "cí183",
          "order": 3
        },
        {
          "id": "3571305c-911c-43e7-ad73-22dc23a960e5",
          "english": "client",
          "chinese": "词184",
          "pinyin": "cí184",
          "order": 4
        },
        {
          "id": "78e18480-7abb-4517-ba87-13ab332b9c07",
          "english": "climate",
          "chinese": "词185",
          "pinyin": "cí185",
          "order": 5
        },
        {
          "id": "7eef7050-8e03-4d34-837d-e87d70feab5a",
          "english": "climb",
          "chinese": "词186",
          "pinyin": "cí186",
          "order": 6
        },
        {
          "id": "81dad140-29b1-456f-b62f-ceabd656f547",
          "english": "clock",
          "chinese": "词187",
          "pinyin": "cí187",
          "order": 7
        },
        {
          "id": "f2cf2c17-2af7-423c-80eb-6844853fe398",
          "english": "close",
          "chinese": "词188",
          "pinyin": "cí188",
          "order": 8
        },
        {
          "id": "c0dc4f64-ecab-45c2-baea-45bf8c5c41f7",
          "english": "clothes",
          "chinese": "词189",
          "pinyin": "cí189",
          "order": 9
        }
      ]
    },
    {
      "id": "d60c561b-c1fc-4f88-aa5a-cf307474e66b",
      "name": "HSK 5 29",
      "description": "HSK 5 29 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "5a3d6429-ab1e-499d-82cf-365abccd7a81",
          "english": "cloud",
          "chinese": "词190",
          "pinyin": "cí190",
          "order": 0
        },
        {
          "id": "306e0e94-2c66-4301-8e14-b90da649fee2",
          "english": "club",
          "chinese": "词191",
          "pinyin": "cí191",
          "order": 1
        },
        {
          "id": "e700b5e3-db87-44cb-90d3-bcfd4b213611",
          "english": "coach",
          "chinese": "词192",
          "pinyin": "cí192",
          "order": 2
        },
        {
          "id": "73d51237-b5b7-4a0a-b911-23397a8c9b69",
          "english": "coast",
          "chinese": "词193",
          "pinyin": "cí193",
          "order": 3
        },
        {
          "id": "83d445df-6c4e-4c47-bfdf-43f72dc82e6d",
          "english": "coffee",
          "chinese": "词194",
          "pinyin": "cí194",
          "order": 4
        },
        {
          "id": "259c0b19-d7cd-44ee-8b34-14b7aaf0890c",
          "english": "cold",
          "chinese": "词195",
          "pinyin": "cí195",
          "order": 5
        },
        {
          "id": "d9c86402-5b9d-46cb-b341-523898e9d93e",
          "english": "collect",
          "chinese": "词196",
          "pinyin": "cí196",
          "order": 6
        },
        {
          "id": "f4d17394-99cf-41db-94f3-2e6c019eab46",
          "english": "collection",
          "chinese": "词197",
          "pinyin": "cí197",
          "order": 7
        },
        {
          "id": "07c5723a-1d9c-4e43-b9bd-b007f8e50df5",
          "english": "college",
          "chinese": "词198",
          "pinyin": "cí198",
          "order": 8
        },
        {
          "id": "9cd153f8-6880-48ac-ba7e-05955478272c",
          "english": "color",
          "chinese": "词199",
          "pinyin": "cí199",
          "order": 9
        }
      ]
    },
    {
      "id": "facd5862-9640-4f1f-92cf-c9a2091b812c",
      "name": "HSK 5 29",
      "description": "HSK 5 29 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "b260c427-2db1-4cef-8b85-abe58f088f44",
          "english": "loss",
          "chinese": "损失",
          "pinyin": "sǔnshī",
          "order": 0
        },
        {
          "id": "8d3e38d1-d1f0-45e8-bd7b-5208106c0227",
          "english": "income",
          "chinese": "收入",
          "pinyin": "shōurù",
          "order": 1
        },
        {
          "id": "3302506e-4815-45ae-add8-37d20f03feb7",
          "english": "salary",
          "chinese": "薪水",
          "pinyin": "xīnshuǐ",
          "order": 2
        },
        {
          "id": "1e27d899-0611-42ac-9ef8-ec6364845275",
          "english": "wage",
          "chinese": "工资",
          "pinyin": "gōngzī",
          "order": 3
        },
        {
          "id": "0aa78b89-65bc-4b60-abd6-d33d1fe051ed",
          "english": "payment",
          "chinese": "付款",
          "pinyin": "fùkuǎn",
          "order": 4
        },
        {
          "id": "321b24e1-e83a-4427-b366-59e3be114716",
          "english": "purchase",
          "chinese": "购买",
          "pinyin": "gòumǎi",
          "order": 5
        },
        {
          "id": "5f04f57d-880f-4f29-a289-bc9e03325697",
          "english": "sale",
          "chinese": "销售",
          "pinyin": "xiāoshòu",
          "order": 6
        },
        {
          "id": "cc2c2d95-df63-450e-85ea-003f3f49999e",
          "english": "market",
          "chinese": "市场",
          "pinyin": "shìchǎng",
          "order": 7
        },
        {
          "id": "235a1661-ab66-45b5-9328-98fe84889064",
          "english": "customer",
          "chinese": "顾客",
          "pinyin": "gùkè",
          "order": 8
        },
        {
          "id": "4a2731ba-b59a-46eb-86d2-3d6abf698f13",
          "english": "client",
          "chinese": "客户",
          "pinyin": "kèhù",
          "order": 9
        }
      ]
    },
    {
      "id": "5b3efd8b-9a7f-4824-8405-19eaae79b6d3",
      "name": "HSK 5 3",
      "description": "HSK 5 3 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "39e30d90-ef17-409b-9225-771ebcb4d24c",
          "english": "opportunity",
          "chinese": "机会",
          "pinyin": "jīhuì",
          "order": 0
        },
        {
          "id": "f0c834d8-c81f-4768-9f77-b7d383eca25b",
          "english": "challenge",
          "chinese": "挑战",
          "pinyin": "tiǎozhàn",
          "order": 1
        },
        {
          "id": "cff05864-e222-4d5d-bd37-4ec9467ecc60",
          "english": "influence",
          "chinese": "影响",
          "pinyin": "yǐngxiǎng",
          "order": 2
        },
        {
          "id": "bc148b1d-d7ff-4e60-8515-bb366dbad236",
          "english": "responsibility",
          "chinese": "责任",
          "pinyin": "zérèn",
          "order": 3
        },
        {
          "id": "056185f3-f7df-41d6-b107-5a16a02fd926",
          "english": "attitude",
          "chinese": "态度",
          "pinyin": "tàidù",
          "order": 4
        },
        {
          "id": "3a517794-f9ca-434f-adc8-ebcfbec00800",
          "english": "behavior",
          "chinese": "行为",
          "pinyin": "xíngwéi",
          "order": 5
        },
        {
          "id": "08ea77c8-e37f-4fb0-8364-132a07a6eee6",
          "english": "characteristic",
          "chinese": "特点",
          "pinyin": "tèdiǎn",
          "order": 6
        },
        {
          "id": "0381039f-f95c-460d-96d5-b9f1f2981c58",
          "english": "advantage",
          "chinese": "优点",
          "pinyin": "yōudiǎn",
          "order": 7
        },
        {
          "id": "60bc4248-3d49-4df8-8330-93dad86732e2",
          "english": "disadvantage",
          "chinese": "缺点",
          "pinyin": "quēdiǎn",
          "order": 8
        },
        {
          "id": "722d5a17-0c5c-4e91-9057-585e2434f747",
          "english": "condition",
          "chinese": "条件",
          "pinyin": "tiáojiàn",
          "order": 9
        }
      ]
    },
    {
      "id": "44aee92f-269e-42e3-95ec-6a43236a7758",
      "name": "HSK 5 30",
      "description": "HSK 5 30 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "7fcc2920-596f-424d-af79-2629a5f11002",
          "english": "consumer",
          "chinese": "消费者",
          "pinyin": "xiāofèizhě",
          "order": 0
        },
        {
          "id": "265f12e8-2f14-4517-baa8-055822c126ec",
          "english": "product",
          "chinese": "产品",
          "pinyin": "chǎnpǐn",
          "order": 1
        },
        {
          "id": "6872ba1f-884e-49fc-973b-c35cedfd40cf",
          "english": "goods",
          "chinese": "商品",
          "pinyin": "shāngpǐn",
          "order": 2
        },
        {
          "id": "eade1e08-cacf-413e-85cc-4e149c8d3322",
          "english": "item",
          "chinese": "物品",
          "pinyin": "wùpǐn",
          "order": 3
        },
        {
          "id": "a2f0c68c-e336-4fdd-a745-b6470b9d9616",
          "english": "object",
          "chinese": "物体",
          "pinyin": "wùtǐ",
          "order": 4
        },
        {
          "id": "4e5987eb-f867-477b-b4bc-0a9b8af27ddf",
          "english": "thing",
          "chinese": "东西",
          "pinyin": "dōngxi",
          "order": 5
        },
        {
          "id": "160a519c-6c93-49a5-bd39-04c3b1ca2ee0",
          "english": "stuff",
          "chinese": "东西",
          "pinyin": "dōngxi",
          "order": 6
        },
        {
          "id": "4ccd0bc6-09b7-43b8-a8b5-49063e7aa4b7",
          "english": "material",
          "chinese": "材料",
          "pinyin": "cáiliào",
          "order": 7
        },
        {
          "id": "a6e122d2-5622-4e36-831d-3a54fbda7d8f",
          "english": "substance",
          "chinese": "物质",
          "pinyin": "wùzhì",
          "order": 8
        },
        {
          "id": "4f951af7-bbd3-451c-8c77-194d7f7e1e43",
          "english": "element",
          "chinese": "元素",
          "pinyin": "yuánsù",
          "order": 9
        }
      ]
    },
    {
      "id": "fe0273b8-86e8-449d-b48a-3acfbff1ddbd",
      "name": "HSK 5 30",
      "description": "HSK 5 30 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "ad72c9b4-9c44-427e-9474-ccd3f1770ba0",
          "english": "column",
          "chinese": "词200",
          "pinyin": "cí200",
          "order": 0
        },
        {
          "id": "2c70cb9e-bb59-4b73-bb7b-71c3e9752a20",
          "english": "combination",
          "chinese": "词201",
          "pinyin": "cí201",
          "order": 1
        },
        {
          "id": "65d4740c-270b-48d7-a5a2-f8bb3acc4fcb",
          "english": "combine",
          "chinese": "词202",
          "pinyin": "cí202",
          "order": 2
        },
        {
          "id": "45191468-4340-409b-9b03-fd7608fc189e",
          "english": "comfort",
          "chinese": "词203",
          "pinyin": "cí203",
          "order": 3
        },
        {
          "id": "0ed5d7d8-17d5-4263-88c9-30058083259c",
          "english": "comfortable",
          "chinese": "词204",
          "pinyin": "cí204",
          "order": 4
        },
        {
          "id": "1e94a9fa-37c7-44e1-8d1b-f0cade7c888c",
          "english": "command",
          "chinese": "词205",
          "pinyin": "cí205",
          "order": 5
        },
        {
          "id": "88234217-ffac-4486-a893-ed47501aeeaf",
          "english": "comment",
          "chinese": "词206",
          "pinyin": "cí206",
          "order": 6
        },
        {
          "id": "f2f1f402-1b33-4d7f-b42f-5d47c2736538",
          "english": "commercial",
          "chinese": "词207",
          "pinyin": "cí207",
          "order": 7
        },
        {
          "id": "ed925967-c8e7-4d88-8c9a-db0113663d4e",
          "english": "commission",
          "chinese": "词208",
          "pinyin": "cí208",
          "order": 8
        },
        {
          "id": "98c8ba09-05d1-4f0e-9833-5cd57fc4d73b",
          "english": "commit",
          "chinese": "词209",
          "pinyin": "cí209",
          "order": 9
        }
      ]
    },
    {
      "id": "ffff3e45-349c-4941-8f2d-b632114c7dc1",
      "name": "HSK 5 31",
      "description": "HSK 5 31 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "39847cb2-aef5-433a-b4ec-6b39b1b37c42",
          "english": "component",
          "chinese": "组成部分",
          "pinyin": "zǔchéngbùfèn",
          "order": 0
        },
        {
          "id": "ee2ff987-2132-4767-b8c5-d4ffeb42f4c8",
          "english": "part",
          "chinese": "部分",
          "pinyin": "bùfèn",
          "order": 1
        },
        {
          "id": "23992609-2314-4699-a748-dee990237245",
          "english": "section",
          "chinese": "部分",
          "pinyin": "bùfèn",
          "order": 2
        },
        {
          "id": "5eafa9e2-230c-4885-8e89-ec7ed01d054a",
          "english": "division",
          "chinese": "部门",
          "pinyin": "bùmén",
          "order": 3
        },
        {
          "id": "024e5c96-5d97-40d3-ad60-d65b2fd0c52e",
          "english": "department",
          "chinese": "部门",
          "pinyin": "bùmén",
          "order": 4
        },
        {
          "id": "72a64a0c-4b14-4fa1-b74e-9a2eb461ed0f",
          "english": "office",
          "chinese": "办公室",
          "pinyin": "bàngōngshì",
          "order": 5
        },
        {
          "id": "75f5a6d3-4f97-431f-9bd3-bd6dfdbdd148",
          "english": "workplace",
          "chinese": "工作场所",
          "pinyin": "gōngzuòchǎngsuǒ",
          "order": 6
        },
        {
          "id": "77a92517-70bb-4f31-b9c7-12ab90272685",
          "english": "factory",
          "chinese": "工厂",
          "pinyin": "gōngchǎng",
          "order": 7
        },
        {
          "id": "f975ef87-dae6-4a01-ba6c-ad0ff29ef6be",
          "english": "plant",
          "chinese": "工厂",
          "pinyin": "gōngchǎng",
          "order": 8
        },
        {
          "id": "91c0f708-fb8c-4f78-951a-658616664653",
          "english": "facility",
          "chinese": "设施",
          "pinyin": "shèshī",
          "order": 9
        }
      ]
    },
    {
      "id": "048d095c-0832-434e-9681-b45c3863683c",
      "name": "HSK 5 31",
      "description": "HSK 5 31 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "ca8dd3ff-ae8d-43e8-bbe9-e8eaa999c666",
          "english": "commitment",
          "chinese": "词210",
          "pinyin": "cí210",
          "order": 0
        },
        {
          "id": "e240d98d-f9fb-4eaa-b75c-2092d3168e8b",
          "english": "committee",
          "chinese": "词211",
          "pinyin": "cí211",
          "order": 1
        },
        {
          "id": "dc161032-ddb9-45b2-809e-3e01c7675981",
          "english": "common",
          "chinese": "词212",
          "pinyin": "cí212",
          "order": 2
        },
        {
          "id": "2480aa3f-cd20-4b52-bcaa-17f84a95a722",
          "english": "communicate",
          "chinese": "词213",
          "pinyin": "cí213",
          "order": 3
        },
        {
          "id": "9694e344-1643-4f4e-9edb-4e1cde337f47",
          "english": "communication",
          "chinese": "词214",
          "pinyin": "cí214",
          "order": 4
        },
        {
          "id": "87400767-9076-499e-bd7b-cf4fa82841d4",
          "english": "community",
          "chinese": "词215",
          "pinyin": "cí215",
          "order": 5
        },
        {
          "id": "b73f5719-96e1-41b1-b5d3-9727a5ba1862",
          "english": "company",
          "chinese": "词216",
          "pinyin": "cí216",
          "order": 6
        },
        {
          "id": "b276ae24-2eca-47b6-876f-f4318d676229",
          "english": "compare",
          "chinese": "词217",
          "pinyin": "cí217",
          "order": 7
        },
        {
          "id": "deb9ae96-4c6b-49e8-a359-e5b076ab0f20",
          "english": "comparison",
          "chinese": "词218",
          "pinyin": "cí218",
          "order": 8
        },
        {
          "id": "4da3a327-8e7d-4c6d-a311-b79ba753dafa",
          "english": "compete",
          "chinese": "词219",
          "pinyin": "cí219",
          "order": 9
        }
      ]
    },
    {
      "id": "40bb6f78-a963-46f0-b175-a139a9193c20",
      "name": "HSK 5 32",
      "description": "HSK 5 32 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "761e2e72-201e-477a-8b91-4e03e23d7d69",
          "english": "competition",
          "chinese": "词220",
          "pinyin": "cí220",
          "order": 0
        },
        {
          "id": "b19bf1ad-29c3-4bfd-8b7d-5db5d1f31cb8",
          "english": "competitive",
          "chinese": "词221",
          "pinyin": "cí221",
          "order": 1
        },
        {
          "id": "0c2b5a94-4893-4e69-9ade-5831d1d24827",
          "english": "competitor",
          "chinese": "词222",
          "pinyin": "cí222",
          "order": 2
        },
        {
          "id": "91a23b04-573f-43dc-9179-e532924662ad",
          "english": "complain",
          "chinese": "词223",
          "pinyin": "cí223",
          "order": 3
        },
        {
          "id": "41ee448f-bb52-48e4-ba78-08cce6927091",
          "english": "complaint",
          "chinese": "词224",
          "pinyin": "cí224",
          "order": 4
        },
        {
          "id": "0eaa0be5-e119-40af-8d3a-275932929b5b",
          "english": "complete",
          "chinese": "词225",
          "pinyin": "cí225",
          "order": 5
        },
        {
          "id": "2fb49896-fb8e-4165-989f-e18145d67a3e",
          "english": "complex",
          "chinese": "词226",
          "pinyin": "cí226",
          "order": 6
        },
        {
          "id": "09e3d797-7797-44bf-b88d-0cde87c1b2a0",
          "english": "component",
          "chinese": "词227",
          "pinyin": "cí227",
          "order": 7
        },
        {
          "id": "cfa4bfb0-618e-4422-af75-9160fddd187e",
          "english": "computer",
          "chinese": "词228",
          "pinyin": "cí228",
          "order": 8
        },
        {
          "id": "0791ad01-2fcf-43a7-88eb-2b87e3057714",
          "english": "concept",
          "chinese": "词229",
          "pinyin": "cí229",
          "order": 9
        }
      ]
    },
    {
      "id": "b86e0260-69e1-4243-a079-7b911d907f7c",
      "name": "HSK 5 32",
      "description": "HSK 5 32 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "86d4177e-08bf-4641-8838-244fbd366998",
          "english": "location",
          "chinese": "位置",
          "pinyin": "wèizhì",
          "order": 0
        },
        {
          "id": "7438c4de-3251-47e9-8316-1eeaf81f654b",
          "english": "position",
          "chinese": "位置",
          "pinyin": "wèizhì",
          "order": 1
        },
        {
          "id": "a6ee5f84-12e9-429e-9389-ae4eee1c16a6",
          "english": "place",
          "chinese": "地方",
          "pinyin": "dìfang",
          "order": 2
        },
        {
          "id": "24936fd6-2ea9-431d-b956-75d805646e88",
          "english": "spot",
          "chinese": "地点",
          "pinyin": "dìdiǎn",
          "order": 3
        },
        {
          "id": "195c0574-5509-40f4-a18f-d4b08ae1b416",
          "english": "site",
          "chinese": "地点",
          "pinyin": "dìdiǎn",
          "order": 4
        },
        {
          "id": "49976c7e-0f45-4265-8a0e-c205c1755692",
          "english": "area",
          "chinese": "区域",
          "pinyin": "qūyù",
          "order": 5
        },
        {
          "id": "23371379-06c7-4254-ad4c-f43c6559f2bf",
          "english": "region",
          "chinese": "地区",
          "pinyin": "dìqū",
          "order": 6
        },
        {
          "id": "655b5601-6b7d-43ae-a47a-d3d717855b6f",
          "english": "zone",
          "chinese": "区域",
          "pinyin": "qūyù",
          "order": 7
        },
        {
          "id": "e9f7931f-59ff-4a39-834a-d4281cdea591",
          "english": "territory",
          "chinese": "领土",
          "pinyin": "lǐngtǔ",
          "order": 8
        },
        {
          "id": "72e1b31f-de0d-43e5-82d0-9dbd69d965fc",
          "english": "country",
          "chinese": "国家",
          "pinyin": "guójiā",
          "order": 9
        }
      ]
    },
    {
      "id": "c4468034-b1c6-42fb-965f-0086d6e788c6",
      "name": "HSK 5 33",
      "description": "HSK 5 33 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "a0442239-2bee-47c3-8697-e60daa3331e2",
          "english": "concern",
          "chinese": "词230",
          "pinyin": "cí230",
          "order": 0
        },
        {
          "id": "d99969a6-a7ce-46a4-a0f5-d3210e4aa833",
          "english": "concerned",
          "chinese": "词231",
          "pinyin": "cí231",
          "order": 1
        },
        {
          "id": "ddd86061-d9ea-4e49-9580-112c052a3d1e",
          "english": "concert",
          "chinese": "词232",
          "pinyin": "cí232",
          "order": 2
        },
        {
          "id": "f0fe39e5-964c-4d84-bfc5-5e1c5c72f4b1",
          "english": "conclusion",
          "chinese": "词233",
          "pinyin": "cí233",
          "order": 3
        },
        {
          "id": "f4899137-88d9-469b-a6a1-27265b35c72a",
          "english": "condition",
          "chinese": "词234",
          "pinyin": "cí234",
          "order": 4
        },
        {
          "id": "86a0d168-1928-46e9-8bfc-e9766ddb4491",
          "english": "conduct",
          "chinese": "词235",
          "pinyin": "cí235",
          "order": 5
        },
        {
          "id": "8879b76b-d319-498c-a4eb-a4916603fc9c",
          "english": "conference",
          "chinese": "词236",
          "pinyin": "cí236",
          "order": 6
        },
        {
          "id": "e0b53a68-858b-4c3b-80a2-dff15bb6e728",
          "english": "confidence",
          "chinese": "词237",
          "pinyin": "cí237",
          "order": 7
        },
        {
          "id": "8d20e211-cbc9-444f-ace5-6d5d59ccbd46",
          "english": "confident",
          "chinese": "词238",
          "pinyin": "cí238",
          "order": 8
        },
        {
          "id": "af1a304e-c59a-427f-9611-dfacc852fce0",
          "english": "confirm",
          "chinese": "词239",
          "pinyin": "cí239",
          "order": 9
        }
      ]
    },
    {
      "id": "6d28f43a-ad68-48e3-89f1-51816c26e49d",
      "name": "HSK 5 33",
      "description": "HSK 5 33 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "ada738b6-adcc-4f1f-8785-b71dcdb47457",
          "english": "nation",
          "chinese": "国家",
          "pinyin": "guójiā",
          "order": 0
        },
        {
          "id": "4150e7e0-4763-4073-b04b-36596c206e1a",
          "english": "state",
          "chinese": "国家",
          "pinyin": "guójiā",
          "order": 1
        },
        {
          "id": "338e810c-1d0c-4558-9164-b0e63db38a99",
          "english": "government",
          "chinese": "政府",
          "pinyin": "zhèngfǔ",
          "order": 2
        },
        {
          "id": "24957695-09f2-404d-b449-3702b162959c",
          "english": "authority",
          "chinese": "权威",
          "pinyin": "quánwēi",
          "order": 3
        },
        {
          "id": "fd9da060-8bad-42cc-a409-bb1edfead54f",
          "english": "power",
          "chinese": "权力",
          "pinyin": "quánlì",
          "order": 4
        },
        {
          "id": "5af2cf60-29c4-4425-b083-be588260424e",
          "english": "control",
          "chinese": "控制",
          "pinyin": "kòngzhì",
          "order": 5
        },
        {
          "id": "39571c14-8f59-4de5-847a-b83f771342eb",
          "english": "management",
          "chinese": "管理",
          "pinyin": "guǎnlǐ",
          "order": 6
        },
        {
          "id": "ce1c55e4-b52f-45af-8698-e366f2697b7a",
          "english": "administration",
          "chinese": "管理",
          "pinyin": "guǎnlǐ",
          "order": 7
        },
        {
          "id": "99f8465b-bc64-4bd4-b095-cbf28f16599e",
          "english": "leadership",
          "chinese": "领导",
          "pinyin": "lǐngdǎo",
          "order": 8
        },
        {
          "id": "af5d48dd-31a6-4f2f-a589-3fa3e06803a8",
          "english": "guidance",
          "chinese": "指导",
          "pinyin": "zhǐdǎo",
          "order": 9
        }
      ]
    },
    {
      "id": "3ceff919-6323-4e3b-b759-bd41082ffaff",
      "name": "HSK 5 34",
      "description": "HSK 5 34 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "8aa1b3ed-57c5-4c48-94ae-4a2d2a282d89",
          "english": "conflict",
          "chinese": "词240",
          "pinyin": "cí240",
          "order": 0
        },
        {
          "id": "ddc8dd50-033d-47ef-b9c9-686cab11ff47",
          "english": "confused",
          "chinese": "词241",
          "pinyin": "cí241",
          "order": 1
        },
        {
          "id": "4db1be5c-0313-42fb-841f-7ccf8268f09d",
          "english": "congress",
          "chinese": "词242",
          "pinyin": "cí242",
          "order": 2
        },
        {
          "id": "bb6e5445-d191-4923-ad15-6640b34562b7",
          "english": "connect",
          "chinese": "词243",
          "pinyin": "cí243",
          "order": 3
        },
        {
          "id": "ea6858a8-3bac-4a7b-89e8-a5e98a412960",
          "english": "connection",
          "chinese": "词244",
          "pinyin": "cí244",
          "order": 4
        },
        {
          "id": "462cf4dd-4651-45cd-afd1-d1ac5a3ca270",
          "english": "consciousness",
          "chinese": "词245",
          "pinyin": "cí245",
          "order": 5
        },
        {
          "id": "3c83762a-be10-49fb-aee6-b2584d4d6d68",
          "english": "consequence",
          "chinese": "词246",
          "pinyin": "cí246",
          "order": 6
        },
        {
          "id": "6c0763ca-935c-4d9e-80fb-4ffa4e3182ac",
          "english": "conservative",
          "chinese": "词247",
          "pinyin": "cí247",
          "order": 7
        },
        {
          "id": "f55d3ccb-8566-4fe1-9719-c6ae90dc6bc4",
          "english": "consider",
          "chinese": "词248",
          "pinyin": "cí248",
          "order": 8
        },
        {
          "id": "afa6bc58-97fb-4c14-821b-5b650255285a",
          "english": "consideration",
          "chinese": "词249",
          "pinyin": "cí249",
          "order": 9
        }
      ]
    },
    {
      "id": "e731e6d8-8e26-4288-aa4f-404774b7cb9e",
      "name": "HSK 5 34",
      "description": "HSK 5 34 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "f33e2609-9e24-437c-bdfb-b6ae88b15dad",
          "english": "direction",
          "chinese": "方向",
          "pinyin": "fāngxiàng",
          "order": 0
        },
        {
          "id": "e0423296-b9ba-4fbd-88e8-e80795261de2",
          "english": "instruction",
          "chinese": "指示",
          "pinyin": "zhǐshì",
          "order": 1
        },
        {
          "id": "1f84fa0e-5dc7-4156-8b9f-d2237e427613",
          "english": "command",
          "chinese": "命令",
          "pinyin": "mìnglìng",
          "order": 2
        },
        {
          "id": "bb50bc7e-d4d8-4976-b42e-2c49ae62076e",
          "english": "order",
          "chinese": "命令",
          "pinyin": "mìnglìng",
          "order": 3
        },
        {
          "id": "1177a889-bd9b-46b1-940d-3a73f2d4b7af",
          "english": "rule",
          "chinese": "规则",
          "pinyin": "guīzé",
          "order": 4
        },
        {
          "id": "4b947734-f92d-4b28-90d3-ffcee7095aec",
          "english": "regulation",
          "chinese": "规定",
          "pinyin": "guīdìng",
          "order": 5
        },
        {
          "id": "a462f647-64e2-495d-b95f-fe859bef8dc3",
          "english": "law",
          "chinese": "法律",
          "pinyin": "fǎlǜ",
          "order": 6
        },
        {
          "id": "670a88f0-983d-4ee3-bbd7-d578cbf85ac7",
          "english": "legal",
          "chinese": "法律的",
          "pinyin": "fǎlǜde",
          "order": 7
        },
        {
          "id": "eed24fb1-d961-4e25-99d9-e54d959fc861",
          "english": "illegal",
          "chinese": "非法的",
          "pinyin": "fēifǎde",
          "order": 8
        },
        {
          "id": "e4aaad9c-973c-4129-8bd9-4b6a656d2610",
          "english": "crime",
          "chinese": "犯罪",
          "pinyin": "fànzuì",
          "order": 9
        }
      ]
    },
    {
      "id": "f18fd74e-4a06-4be8-9348-037f342ec820",
      "name": "HSK 5 35",
      "description": "HSK 5 35 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "ec3c894a-dcbe-43d7-ae75-087230e561fb",
          "english": "consist",
          "chinese": "词250",
          "pinyin": "cí250",
          "order": 0
        },
        {
          "id": "0ead0b81-0445-4e45-9b71-4cf7dc5d5e08",
          "english": "consistent",
          "chinese": "词251",
          "pinyin": "cí251",
          "order": 1
        },
        {
          "id": "1731969b-e740-4ae9-af37-86ba3a380445",
          "english": "constant",
          "chinese": "词252",
          "pinyin": "cí252",
          "order": 2
        },
        {
          "id": "23e864f8-040d-42e8-8437-6695030253c9",
          "english": "constitute",
          "chinese": "词253",
          "pinyin": "cí253",
          "order": 3
        },
        {
          "id": "44837f22-7de2-4af1-866d-62f74e885d6d",
          "english": "construction",
          "chinese": "词254",
          "pinyin": "cí254",
          "order": 4
        },
        {
          "id": "50c47cfd-36fa-4947-a7aa-cdb838c8ddbb",
          "english": "consume",
          "chinese": "词255",
          "pinyin": "cí255",
          "order": 5
        },
        {
          "id": "2fcab0e8-4b76-40ea-914b-911eb5a5a46a",
          "english": "consumer",
          "chinese": "词256",
          "pinyin": "cí256",
          "order": 6
        },
        {
          "id": "9412bdbb-d680-4588-979c-477a97fe91e0",
          "english": "contact",
          "chinese": "词257",
          "pinyin": "cí257",
          "order": 7
        },
        {
          "id": "be792728-e4ec-497c-8abc-fc57a717e658",
          "english": "contain",
          "chinese": "词258",
          "pinyin": "cí258",
          "order": 8
        },
        {
          "id": "b2719123-08ee-4e0e-9c06-c7444230d635",
          "english": "container",
          "chinese": "词259",
          "pinyin": "cí259",
          "order": 9
        }
      ]
    },
    {
      "id": "9cfaafd3-99a9-4748-a2c9-e78f0d197dfb",
      "name": "HSK 5 36",
      "description": "HSK 5 36 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "12cee7f8-c950-4013-a24b-497dacf4660c",
          "english": "content",
          "chinese": "词260",
          "pinyin": "cí260",
          "order": 0
        },
        {
          "id": "4a75f841-56b6-4fd6-bd1c-e8e80b15ed30",
          "english": "contest",
          "chinese": "词261",
          "pinyin": "cí261",
          "order": 1
        },
        {
          "id": "8ee68157-b760-4dcf-9507-d838b5c0ddc1",
          "english": "context",
          "chinese": "词262",
          "pinyin": "cí262",
          "order": 2
        },
        {
          "id": "d7722dc1-c35b-4830-95be-a15432574660",
          "english": "continue",
          "chinese": "词263",
          "pinyin": "cí263",
          "order": 3
        },
        {
          "id": "10e9c9f0-a5b7-4b7e-b95c-01c42eee345b",
          "english": "contract",
          "chinese": "词264",
          "pinyin": "cí264",
          "order": 4
        },
        {
          "id": "d5de6f1b-4c59-4301-b7f9-579e79402732",
          "english": "contrast",
          "chinese": "词265",
          "pinyin": "cí265",
          "order": 5
        },
        {
          "id": "d6346a29-e36f-41b6-b1f0-e906fee09182",
          "english": "contribute",
          "chinese": "词266",
          "pinyin": "cí266",
          "order": 6
        },
        {
          "id": "404c7b5d-77ac-49b9-886e-c700e517f953",
          "english": "contribution",
          "chinese": "词267",
          "pinyin": "cí267",
          "order": 7
        },
        {
          "id": "cd3626ec-545c-4718-aaf5-82fb1877d724",
          "english": "control",
          "chinese": "词268",
          "pinyin": "cí268",
          "order": 8
        },
        {
          "id": "18a09c62-5f16-4533-80bb-86255c64cbe3",
          "english": "controversial",
          "chinese": "词269",
          "pinyin": "cí269",
          "order": 9
        }
      ]
    },
    {
      "id": "2b0f6a11-f3cc-4bb0-b62b-8582eea27cda",
      "name": "HSK 5 37",
      "description": "HSK 5 37 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "881994dc-61cd-4f6b-a104-c251f11b6650",
          "english": "conversation",
          "chinese": "词270",
          "pinyin": "cí270",
          "order": 0
        },
        {
          "id": "ec8bdff9-b2cc-4627-af1b-81c4ed133ea4",
          "english": "convert",
          "chinese": "词271",
          "pinyin": "cí271",
          "order": 1
        },
        {
          "id": "f9a2cf77-7bd7-45a9-ad33-ab8733805752",
          "english": "convince",
          "chinese": "词272",
          "pinyin": "cí272",
          "order": 2
        },
        {
          "id": "c8033208-68dc-4685-8553-f584c687effe",
          "english": "cook",
          "chinese": "词273",
          "pinyin": "cí273",
          "order": 3
        },
        {
          "id": "0c68be23-c8f9-421e-8bf1-784844a88765",
          "english": "cookie",
          "chinese": "词274",
          "pinyin": "cí274",
          "order": 4
        },
        {
          "id": "56d05c13-cc03-40ba-a331-31f8f4e29d74",
          "english": "cooking",
          "chinese": "词275",
          "pinyin": "cí275",
          "order": 5
        },
        {
          "id": "3b873900-f419-49c8-9235-80bbdbf7dd00",
          "english": "cool",
          "chinese": "词276",
          "pinyin": "cí276",
          "order": 6
        },
        {
          "id": "bd528e3b-258d-4ba5-ab09-bc26402bf79a",
          "english": "cooperation",
          "chinese": "词277",
          "pinyin": "cí277",
          "order": 7
        },
        {
          "id": "13aec34a-bfd3-4415-a6ff-174c76f188b1",
          "english": "copy",
          "chinese": "词278",
          "pinyin": "cí278",
          "order": 8
        },
        {
          "id": "e6a9e248-3cec-47fe-a822-c4b48b2df19a",
          "english": "corner",
          "chinese": "词279",
          "pinyin": "cí279",
          "order": 9
        }
      ]
    },
    {
      "id": "ec2ec733-3714-4a9b-9f16-a6eab1c10ea0",
      "name": "HSK 5 38",
      "description": "HSK 5 38 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "69ac7484-07c6-4269-bbcc-e2161cc5ec26",
          "english": "corporate",
          "chinese": "词280",
          "pinyin": "cí280",
          "order": 0
        },
        {
          "id": "9deb3129-3c73-4617-9ee5-66bb4a39fd1e",
          "english": "correct",
          "chinese": "词281",
          "pinyin": "cí281",
          "order": 1
        },
        {
          "id": "287ca7a2-eea1-467a-853e-dfc5e0cf9d1d",
          "english": "cost",
          "chinese": "词282",
          "pinyin": "cí282",
          "order": 2
        },
        {
          "id": "e2b62bdf-04d3-48ab-93af-2d666ce479ad",
          "english": "cotton",
          "chinese": "词283",
          "pinyin": "cí283",
          "order": 3
        },
        {
          "id": "31b51bac-4208-425c-a9f5-b1ffc02adb64",
          "english": "could",
          "chinese": "词284",
          "pinyin": "cí284",
          "order": 4
        },
        {
          "id": "489ae33d-2950-423c-98db-8423191319de",
          "english": "council",
          "chinese": "词285",
          "pinyin": "cí285",
          "order": 5
        },
        {
          "id": "2188dda1-bdfe-41e5-af5f-9efcb2c12038",
          "english": "count",
          "chinese": "词286",
          "pinyin": "cí286",
          "order": 6
        },
        {
          "id": "6a346d35-1819-4c77-82d1-2bab409ef28f",
          "english": "counter",
          "chinese": "词287",
          "pinyin": "cí287",
          "order": 7
        },
        {
          "id": "8188bba9-a216-460f-8708-d11073080a79",
          "english": "country",
          "chinese": "词288",
          "pinyin": "cí288",
          "order": 8
        },
        {
          "id": "7b160789-43dd-4171-abce-8352aaeeb86e",
          "english": "county",
          "chinese": "词289",
          "pinyin": "cí289",
          "order": 9
        }
      ]
    },
    {
      "id": "00ee62bb-463f-47f8-b493-c5e5c5c90d53",
      "name": "HSK 5 39",
      "description": "HSK 5 39 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "0cd77add-e57a-4dc4-9d67-3c9ecf8d1b74",
          "english": "couple",
          "chinese": "词290",
          "pinyin": "cí290",
          "order": 0
        },
        {
          "id": "1bdc3479-78ae-42e5-b768-f6c2354b2011",
          "english": "courage",
          "chinese": "词291",
          "pinyin": "cí291",
          "order": 1
        },
        {
          "id": "f2923fa3-5ff7-472e-b884-58d9403b53dc",
          "english": "course",
          "chinese": "词292",
          "pinyin": "cí292",
          "order": 2
        },
        {
          "id": "25489847-f6bf-49d1-ae83-2ee187a6f064",
          "english": "court",
          "chinese": "词293",
          "pinyin": "cí293",
          "order": 3
        },
        {
          "id": "c0390b4d-55da-4694-a6b3-25a3835def02",
          "english": "cover",
          "chinese": "词294",
          "pinyin": "cí294",
          "order": 4
        },
        {
          "id": "673278d0-5de2-41a4-a6a2-8fd164fe2916",
          "english": "coverage",
          "chinese": "词295",
          "pinyin": "cí295",
          "order": 5
        },
        {
          "id": "b40d4836-60ac-40bd-888f-7d883c655517",
          "english": "crack",
          "chinese": "词296",
          "pinyin": "cí296",
          "order": 6
        },
        {
          "id": "47aa4154-d799-4830-b303-ad139a0e0008",
          "english": "craft",
          "chinese": "词297",
          "pinyin": "cí297",
          "order": 7
        },
        {
          "id": "a5f32849-9137-48f2-aa11-7e2234d43879",
          "english": "crash",
          "chinese": "词298",
          "pinyin": "cí298",
          "order": 8
        },
        {
          "id": "48892f49-aaff-45dc-a0e5-ccc5faf26043",
          "english": "crazy",
          "chinese": "词299",
          "pinyin": "cí299",
          "order": 9
        }
      ]
    },
    {
      "id": "b404f3b5-d06d-429a-9904-ca3fc2507f1a",
      "name": "HSK 5 4",
      "description": "HSK 5 4 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "4bc2f1b2-0c91-4f4a-8c75-fdfcd35a5ca3",
          "english": "situation",
          "chinese": "情况",
          "pinyin": "qíngkuàng",
          "order": 0
        },
        {
          "id": "96c4bb40-ba69-405c-b7bf-9d6859ed7443",
          "english": "circumstance",
          "chinese": "环境",
          "pinyin": "huánjìng",
          "order": 1
        },
        {
          "id": "0156eba8-3fa2-4361-8cc6-e22fb3b21489",
          "english": "phenomenon",
          "chinese": "现象",
          "pinyin": "xiànxiàng",
          "order": 2
        },
        {
          "id": "45eab867-4f04-4aff-bac9-82729ebd18bf",
          "english": "principle",
          "chinese": "原则",
          "pinyin": "yuánzé",
          "order": 3
        },
        {
          "id": "ea11caf4-6563-4c5d-80e9-b0306fa24243",
          "english": "standard",
          "chinese": "标准",
          "pinyin": "biāozhǔn",
          "order": 4
        },
        {
          "id": "892f587a-60c0-4fda-8f76-3f22c4cf62b7",
          "english": "requirement",
          "chinese": "要求",
          "pinyin": "yāoqiú",
          "order": 5
        },
        {
          "id": "cfc003c9-1896-42c5-9a10-56dc5f42ef76",
          "english": "goal",
          "chinese": "目标",
          "pinyin": "mùbiāo",
          "order": 6
        },
        {
          "id": "ceaf9b12-951b-49a7-9f22-bd9b43b62dfa",
          "english": "plan",
          "chinese": "计划",
          "pinyin": "jìhuà",
          "order": 7
        },
        {
          "id": "bc570e23-dfa1-4462-9868-199a1e0df1d5",
          "english": "strategy",
          "chinese": "策略",
          "pinyin": "cèlüè",
          "order": 8
        },
        {
          "id": "50f8796f-6d7b-480a-b04c-aa4a36e77be9",
          "english": "method",
          "chinese": "方法",
          "pinyin": "fāngfǎ",
          "order": 9
        }
      ]
    },
    {
      "id": "b3ff4cc2-aded-4488-acdd-18284f323be2",
      "name": "HSK 5 40",
      "description": "HSK 5 40 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "bdb84e6b-4237-4d7c-a830-01ee44c46e69",
          "english": "cream",
          "chinese": "词300",
          "pinyin": "cí300",
          "order": 0
        },
        {
          "id": "c637f1a4-6ab6-4891-9093-76305bc1c7c1",
          "english": "create",
          "chinese": "词301",
          "pinyin": "cí301",
          "order": 1
        },
        {
          "id": "2869b419-33ec-49dd-98dd-4728496c93a9",
          "english": "creation",
          "chinese": "词302",
          "pinyin": "cí302",
          "order": 2
        },
        {
          "id": "0d8cace0-3763-4d82-a0b5-b27aedbb3375",
          "english": "creative",
          "chinese": "词303",
          "pinyin": "cí303",
          "order": 3
        },
        {
          "id": "42bdf3f7-2fdc-491f-abab-3816afde4ab4",
          "english": "creator",
          "chinese": "词304",
          "pinyin": "cí304",
          "order": 4
        },
        {
          "id": "39ee301c-d601-404c-8368-8654b4096f83",
          "english": "credit",
          "chinese": "词305",
          "pinyin": "cí305",
          "order": 5
        },
        {
          "id": "70ad82d8-305b-4089-982f-6722157088d2",
          "english": "crew",
          "chinese": "词306",
          "pinyin": "cí306",
          "order": 6
        },
        {
          "id": "73ea6cc9-bf37-4d1a-8e99-81bdb7ff1291",
          "english": "crime",
          "chinese": "词307",
          "pinyin": "cí307",
          "order": 7
        },
        {
          "id": "e8452950-5d85-49c6-b123-a81306da2e54",
          "english": "criminal",
          "chinese": "词308",
          "pinyin": "cí308",
          "order": 8
        },
        {
          "id": "d6d73a6c-6813-45be-a86a-ea8e66e80613",
          "english": "crisis",
          "chinese": "词309",
          "pinyin": "cí309",
          "order": 9
        }
      ]
    },
    {
      "id": "9a573182-15d6-4136-a767-6b417f54f30e",
      "name": "HSK 5 41",
      "description": "HSK 5 41 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "dd7ade1e-67a6-4a07-b90a-290763873cb2",
          "english": "criteria",
          "chinese": "词310",
          "pinyin": "cí310",
          "order": 0
        },
        {
          "id": "0b143607-d722-41d2-ad5c-4f2075cffc89",
          "english": "critic",
          "chinese": "词311",
          "pinyin": "cí311",
          "order": 1
        },
        {
          "id": "9c45cf86-50fb-4467-bd20-c52e94ea73b8",
          "english": "critical",
          "chinese": "词312",
          "pinyin": "cí312",
          "order": 2
        },
        {
          "id": "fde48b5e-6f66-4790-a289-130b0058cbb6",
          "english": "criticism",
          "chinese": "词313",
          "pinyin": "cí313",
          "order": 3
        },
        {
          "id": "b7679ac7-7790-4b73-9779-32ed01abfcef",
          "english": "criticize",
          "chinese": "词314",
          "pinyin": "cí314",
          "order": 4
        },
        {
          "id": "dc073fec-9198-4c69-9292-34141da0d8ac",
          "english": "crop",
          "chinese": "词315",
          "pinyin": "cí315",
          "order": 5
        },
        {
          "id": "61c2fb4f-50f0-48c9-9bea-319b0f284933",
          "english": "cross",
          "chinese": "词316",
          "pinyin": "cí316",
          "order": 6
        },
        {
          "id": "384ec29e-64d6-4af4-8c5e-b1cae020b1c8",
          "english": "crowd",
          "chinese": "词317",
          "pinyin": "cí317",
          "order": 7
        },
        {
          "id": "dc5f6756-f934-4702-b23a-09908e2ef4c3",
          "english": "crucial",
          "chinese": "词318",
          "pinyin": "cí318",
          "order": 8
        },
        {
          "id": "d579ee9a-35e2-4b81-956b-6605a0276042",
          "english": "cruise",
          "chinese": "词319",
          "pinyin": "cí319",
          "order": 9
        }
      ]
    },
    {
      "id": "ec7e4785-fdec-484a-8295-d8070021983d",
      "name": "HSK 5 42",
      "description": "HSK 5 42 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "60a40b10-a01e-4a59-9d9e-f9daede6ee3c",
          "english": "culture",
          "chinese": "词320",
          "pinyin": "cí320",
          "order": 0
        },
        {
          "id": "358ea7b8-b50c-450d-8692-03728a768984",
          "english": "cup",
          "chinese": "词321",
          "pinyin": "cí321",
          "order": 1
        },
        {
          "id": "ad83fdda-649b-4fb1-b82b-a4b97be00316",
          "english": "curious",
          "chinese": "词322",
          "pinyin": "cí322",
          "order": 2
        },
        {
          "id": "249a8a57-3a2a-445c-8a43-706033534ffc",
          "english": "current",
          "chinese": "词323",
          "pinyin": "cí323",
          "order": 3
        },
        {
          "id": "0a38d154-c67b-45b0-8e03-ec3b89d61152",
          "english": "currently",
          "chinese": "词324",
          "pinyin": "cí324",
          "order": 4
        },
        {
          "id": "040238c1-1410-446b-a59a-52f1869f0cc7",
          "english": "curve",
          "chinese": "词325",
          "pinyin": "cí325",
          "order": 5
        },
        {
          "id": "8e0facda-8013-492b-8be8-efeb7df99c14",
          "english": "custom",
          "chinese": "词326",
          "pinyin": "cí326",
          "order": 6
        },
        {
          "id": "9ebe3d36-ceb3-4607-a708-dae0ac069be4",
          "english": "customer",
          "chinese": "词327",
          "pinyin": "cí327",
          "order": 7
        },
        {
          "id": "0070bea7-6105-4f3d-bead-98e2c563bbca",
          "english": "cycle",
          "chinese": "词328",
          "pinyin": "cí328",
          "order": 8
        },
        {
          "id": "68a85f88-04c2-48d8-b3e5-a4f7a75bc2df",
          "english": "daily",
          "chinese": "词329",
          "pinyin": "cí329",
          "order": 9
        }
      ]
    },
    {
      "id": "9fdf67df-62b5-432d-99c4-f74e8f129e4f",
      "name": "HSK 5 43",
      "description": "HSK 5 43 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "350f0a62-a5b9-4e8d-905a-fafb8a266f6b",
          "english": "damage",
          "chinese": "词330",
          "pinyin": "cí330",
          "order": 0
        },
        {
          "id": "e66fb983-8f26-401c-83c1-f7c3b62fc511",
          "english": "dance",
          "chinese": "词331",
          "pinyin": "cí331",
          "order": 1
        },
        {
          "id": "8bfd1d19-adc2-41e4-8bc7-c3837c1e3a0d",
          "english": "danger",
          "chinese": "词332",
          "pinyin": "cí332",
          "order": 2
        },
        {
          "id": "d18cc207-afc6-4691-9ffc-be358191dd8c",
          "english": "dangerous",
          "chinese": "词333",
          "pinyin": "cí333",
          "order": 3
        },
        {
          "id": "6292e17c-ecab-47d2-adf9-7a1fd8b31c92",
          "english": "dark",
          "chinese": "词334",
          "pinyin": "cí334",
          "order": 4
        },
        {
          "id": "6735ff36-bce0-4f47-ab13-0dd536a09fc3",
          "english": "darkness",
          "chinese": "词335",
          "pinyin": "cí335",
          "order": 5
        },
        {
          "id": "a29b8c01-ae5e-4f6f-b9ed-ef6e379447a2",
          "english": "data",
          "chinese": "词336",
          "pinyin": "cí336",
          "order": 6
        },
        {
          "id": "b131752f-945b-43ef-8599-d6762112cd54",
          "english": "date",
          "chinese": "词337",
          "pinyin": "cí337",
          "order": 7
        },
        {
          "id": "dac52737-24d6-483d-9224-fe1576286f5f",
          "english": "daughter",
          "chinese": "词338",
          "pinyin": "cí338",
          "order": 8
        },
        {
          "id": "8c4d0f98-eb76-4739-a3e9-f27f3964dfb4",
          "english": "deal",
          "chinese": "词339",
          "pinyin": "cí339",
          "order": 9
        }
      ]
    },
    {
      "id": "9adff38f-2a3e-421e-a654-7de6d666cee0",
      "name": "HSK 5 44",
      "description": "HSK 5 44 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "a0a60d9a-fbad-4791-abd0-d76f9bd2d036",
          "english": "dealer",
          "chinese": "词340",
          "pinyin": "cí340",
          "order": 0
        },
        {
          "id": "261f23bb-7919-4891-9b8c-a381cddbc843",
          "english": "dear",
          "chinese": "词341",
          "pinyin": "cí341",
          "order": 1
        },
        {
          "id": "22171d1b-405c-44d7-af44-e137dc145186",
          "english": "death",
          "chinese": "词342",
          "pinyin": "cí342",
          "order": 2
        },
        {
          "id": "c317cbd2-ebf7-41fe-8b98-56bc54568cbd",
          "english": "debate",
          "chinese": "词343",
          "pinyin": "cí343",
          "order": 3
        },
        {
          "id": "1be09820-ced0-4283-b5ee-d6c295fdd130",
          "english": "debt",
          "chinese": "词344",
          "pinyin": "cí344",
          "order": 4
        },
        {
          "id": "c38719b1-d859-4323-919b-3a5fc1aba6c8",
          "english": "decade",
          "chinese": "词345",
          "pinyin": "cí345",
          "order": 5
        },
        {
          "id": "d6e6342e-1b4d-4bd4-aa49-243043b79e68",
          "english": "decide",
          "chinese": "词346",
          "pinyin": "cí346",
          "order": 6
        },
        {
          "id": "1a6b12ad-d3fb-44be-b418-6d9adea6ddde",
          "english": "decision",
          "chinese": "词347",
          "pinyin": "cí347",
          "order": 7
        },
        {
          "id": "be4bbd9f-0f55-479c-a67e-c0b5d45a7836",
          "english": "deck",
          "chinese": "词348",
          "pinyin": "cí348",
          "order": 8
        },
        {
          "id": "c19382b8-69b7-4fb7-9a98-4335be1b811d",
          "english": "declare",
          "chinese": "词349",
          "pinyin": "cí349",
          "order": 9
        }
      ]
    },
    {
      "id": "02d4f090-bc01-4723-a4bd-f751b46e74ed",
      "name": "HSK 5 45",
      "description": "HSK 5 45 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "c983020c-70e4-4eb0-bea6-5b242ebe773f",
          "english": "deep",
          "chinese": "词350",
          "pinyin": "cí350",
          "order": 0
        },
        {
          "id": "ae914344-f567-4834-b34b-8cea630f3ef9",
          "english": "deeply",
          "chinese": "词351",
          "pinyin": "cí351",
          "order": 1
        },
        {
          "id": "93bd9236-3685-4ee2-b4a4-b947e4db879c",
          "english": "defeat",
          "chinese": "词352",
          "pinyin": "cí352",
          "order": 2
        },
        {
          "id": "39f09669-1f55-4347-8acc-4f4e5422008f",
          "english": "defend",
          "chinese": "词353",
          "pinyin": "cí353",
          "order": 3
        },
        {
          "id": "40127eeb-e8f9-4a44-a7fe-d1e3da3a2ac9",
          "english": "defense",
          "chinese": "词354",
          "pinyin": "cí354",
          "order": 4
        },
        {
          "id": "31b9b109-4405-4d6c-a409-36dc0ef3cd15",
          "english": "defensive",
          "chinese": "词355",
          "pinyin": "cí355",
          "order": 5
        },
        {
          "id": "7885f825-3923-4209-96b5-ec6edd46028d",
          "english": "deficit",
          "chinese": "词356",
          "pinyin": "cí356",
          "order": 6
        },
        {
          "id": "4ded9ed4-f473-405f-ab65-17b71b708405",
          "english": "define",
          "chinese": "词357",
          "pinyin": "cí357",
          "order": 7
        },
        {
          "id": "22308c3b-600f-4863-8643-32f6965d8739",
          "english": "definitely",
          "chinese": "词358",
          "pinyin": "cí358",
          "order": 8
        },
        {
          "id": "9a05a5be-878b-4969-b7f1-6a0c342c6888",
          "english": "definition",
          "chinese": "词359",
          "pinyin": "cí359",
          "order": 9
        }
      ]
    },
    {
      "id": "e4c50d49-1a64-4ce4-9865-5f04b7540489",
      "name": "HSK 5 46",
      "description": "HSK 5 46 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "80e40176-211c-4d78-8f50-9e04ef0406d4",
          "english": "degree",
          "chinese": "词360",
          "pinyin": "cí360",
          "order": 0
        },
        {
          "id": "c71b9f06-a31f-4344-b005-1faccd72d2a5",
          "english": "deliver",
          "chinese": "词361",
          "pinyin": "cí361",
          "order": 1
        },
        {
          "id": "55a7f28e-0caa-4f14-bc3a-5fe0c75398e2",
          "english": "delivery",
          "chinese": "词362",
          "pinyin": "cí362",
          "order": 2
        },
        {
          "id": "62bc687f-60eb-497b-bd5e-302fb511e00c",
          "english": "demand",
          "chinese": "词363",
          "pinyin": "cí363",
          "order": 3
        },
        {
          "id": "76859c2e-1773-40f3-9edd-022b4e3d7210",
          "english": "democratic",
          "chinese": "词364",
          "pinyin": "cí364",
          "order": 4
        },
        {
          "id": "11c77d0f-2558-4e84-9bf0-6b6918c566a0",
          "english": "demonstrate",
          "chinese": "词365",
          "pinyin": "cí365",
          "order": 5
        },
        {
          "id": "89448381-9452-4095-99c8-2a21b14f8eb6",
          "english": "demonstration",
          "chinese": "词366",
          "pinyin": "cí366",
          "order": 6
        },
        {
          "id": "4d0b76f2-5963-4629-abbe-fd8259157c88",
          "english": "department",
          "chinese": "词367",
          "pinyin": "cí367",
          "order": 7
        },
        {
          "id": "949aab22-1774-4e77-830a-58f7868ca9f4",
          "english": "depend",
          "chinese": "词368",
          "pinyin": "cí368",
          "order": 8
        },
        {
          "id": "c693783f-7f71-4707-9add-3c89725e4ec6",
          "english": "dependent",
          "chinese": "词369",
          "pinyin": "cí369",
          "order": 9
        }
      ]
    },
    {
      "id": "5720748d-dbaf-4637-a1f4-a699361411dd",
      "name": "HSK 5 47",
      "description": "HSK 5 47 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "0ef10597-bc6e-4e98-b9cb-aea2f14093f2",
          "english": "depending",
          "chinese": "词370",
          "pinyin": "cí370",
          "order": 0
        },
        {
          "id": "ea1f8da2-d1fb-4f73-b23e-22b8f3579ea7",
          "english": "depth",
          "chinese": "词371",
          "pinyin": "cí371",
          "order": 1
        },
        {
          "id": "d8f697bc-8728-43c7-991f-379d3b894538",
          "english": "derive",
          "chinese": "词372",
          "pinyin": "cí372",
          "order": 2
        },
        {
          "id": "180f6d4c-acd6-49aa-a280-7b4819fa512b",
          "english": "describe",
          "chinese": "词373",
          "pinyin": "cí373",
          "order": 3
        },
        {
          "id": "846453d2-17c6-4098-b2be-ba19e45a87c5",
          "english": "description",
          "chinese": "词374",
          "pinyin": "cí374",
          "order": 4
        },
        {
          "id": "6631ce96-4dd2-460c-995f-fb973a3176c8",
          "english": "desert",
          "chinese": "词375",
          "pinyin": "cí375",
          "order": 5
        },
        {
          "id": "ddb7ccf5-a9e0-4f24-aed1-5f007eebf93b",
          "english": "design",
          "chinese": "词376",
          "pinyin": "cí376",
          "order": 6
        },
        {
          "id": "7af48465-1a1b-4489-a4e9-0c5410f5a5e2",
          "english": "designer",
          "chinese": "词377",
          "pinyin": "cí377",
          "order": 7
        },
        {
          "id": "2b50b599-82cf-469a-aad7-90382dc071ed",
          "english": "desire",
          "chinese": "词378",
          "pinyin": "cí378",
          "order": 8
        },
        {
          "id": "1e1aca43-d3c7-430e-9101-23c5b023beb4",
          "english": "desk",
          "chinese": "词379",
          "pinyin": "cí379",
          "order": 9
        }
      ]
    },
    {
      "id": "3fd678e5-b4a7-4189-9a68-5ad750d786fa",
      "name": "HSK 5 48",
      "description": "HSK 5 48 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "5cc49700-694f-48b5-9eb6-aecbc3f6db0f",
          "english": "despite",
          "chinese": "词380",
          "pinyin": "cí380",
          "order": 0
        },
        {
          "id": "e60e802a-c1f1-4fca-8e93-cdfd2131c7a8",
          "english": "destroy",
          "chinese": "词381",
          "pinyin": "cí381",
          "order": 1
        },
        {
          "id": "6a13a906-68e6-4977-8a63-88b1e4d609e7",
          "english": "destruction",
          "chinese": "词382",
          "pinyin": "cí382",
          "order": 2
        },
        {
          "id": "9a51278c-63a6-424f-a06f-d58bed4ae054",
          "english": "detail",
          "chinese": "词383",
          "pinyin": "cí383",
          "order": 3
        },
        {
          "id": "435218e3-dda4-463a-817e-5edc6cd2d42c",
          "english": "detailed",
          "chinese": "词384",
          "pinyin": "cí384",
          "order": 4
        },
        {
          "id": "59815535-ad8b-4376-a676-5feb91bbad51",
          "english": "detect",
          "chinese": "词385",
          "pinyin": "cí385",
          "order": 5
        },
        {
          "id": "eaf05942-71b3-4dc3-9b1f-2a76d9e64d45",
          "english": "determine",
          "chinese": "词386",
          "pinyin": "cí386",
          "order": 6
        },
        {
          "id": "f69bf3e0-8a26-4fcf-b5e9-f0a2a3b2cd6c",
          "english": "develop",
          "chinese": "词387",
          "pinyin": "cí387",
          "order": 7
        },
        {
          "id": "2fc34a0b-611f-4248-8b82-64b36c2b2f55",
          "english": "development",
          "chinese": "词388",
          "pinyin": "cí388",
          "order": 8
        },
        {
          "id": "bf30c140-9b9f-460a-99e3-da3830da36e8",
          "english": "device",
          "chinese": "词389",
          "pinyin": "cí389",
          "order": 9
        }
      ]
    },
    {
      "id": "2b09405e-54c8-4b5d-8f28-1c42bdea988a",
      "name": "HSK 5 49",
      "description": "HSK 5 49 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "bd398fb8-8dec-4061-9a3c-3006bafa175c",
          "english": "dialogue",
          "chinese": "词390",
          "pinyin": "cí390",
          "order": 0
        },
        {
          "id": "4c1b2788-d2ed-413c-a428-f820cf16413d",
          "english": "diamond",
          "chinese": "词391",
          "pinyin": "cí391",
          "order": 1
        },
        {
          "id": "a35e827e-e9d4-400c-b4da-2b5c13cab626",
          "english": "diary",
          "chinese": "词392",
          "pinyin": "cí392",
          "order": 2
        },
        {
          "id": "67809051-7d4a-46a5-b0be-50280b615ea5",
          "english": "difference",
          "chinese": "词393",
          "pinyin": "cí393",
          "order": 3
        },
        {
          "id": "648dc43a-353a-4fc5-8dbf-8b17d26216ee",
          "english": "different",
          "chinese": "词394",
          "pinyin": "cí394",
          "order": 4
        },
        {
          "id": "a72d22dd-1318-47bf-ad67-dcd1d119118e",
          "english": "differently",
          "chinese": "词395",
          "pinyin": "cí395",
          "order": 5
        },
        {
          "id": "cf66f766-0a12-4f7d-9d60-4571fc19e6b2",
          "english": "difficult",
          "chinese": "词396",
          "pinyin": "cí396",
          "order": 6
        },
        {
          "id": "5d900b91-ceca-43b0-bbce-5c35d8af8522",
          "english": "difficulty",
          "chinese": "词397",
          "pinyin": "cí397",
          "order": 7
        },
        {
          "id": "46ad7d93-e548-46f0-9b6f-a1059dc5ef0d",
          "english": "digital",
          "chinese": "词398",
          "pinyin": "cí398",
          "order": 8
        },
        {
          "id": "2510679b-60d0-4893-99fe-3f3eeff078ed",
          "english": "dimension",
          "chinese": "词399",
          "pinyin": "cí399",
          "order": 9
        }
      ]
    },
    {
      "id": "bbb34597-5de8-4a18-ba0c-13bd5c5fb3d5",
      "name": "HSK 5 5",
      "description": "HSK 5 5 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "9e78b2fc-16b4-4358-a3a5-1370ac59ed98",
          "english": "approach",
          "chinese": "途径",
          "pinyin": "túnjìng",
          "order": 0
        },
        {
          "id": "d7a33998-377e-442d-8bd3-8872dcecdb47",
          "english": "process",
          "chinese": "过程",
          "pinyin": "guòchéng",
          "order": 1
        },
        {
          "id": "82e128db-d003-47f2-929c-5fb81ffae0d6",
          "english": "result",
          "chinese": "结果",
          "pinyin": "jiéguǒ",
          "order": 2
        },
        {
          "id": "0e6d0af6-c2ad-45b2-99df-4b402ca33784",
          "english": "effect",
          "chinese": "效果",
          "pinyin": "xiàoguǒ",
          "order": 3
        },
        {
          "id": "d2848efb-3208-4463-b3df-db0dc8dd69e0",
          "english": "achievement",
          "chinese": "成就",
          "pinyin": "chéngjiù",
          "order": 4
        },
        {
          "id": "aed10217-a790-407b-91ad-8c9fa24cefc4",
          "english": "success",
          "chinese": "成功",
          "pinyin": "chénggōng",
          "order": 5
        },
        {
          "id": "a049c521-c774-4571-8ba4-348e756b988c",
          "english": "failure",
          "chinese": "失败",
          "pinyin": "shībài",
          "order": 6
        },
        {
          "id": "4a5b0591-2096-4e98-92a3-27a0efcf0d67",
          "english": "mistake",
          "chinese": "错误",
          "pinyin": "cuòwù",
          "order": 7
        },
        {
          "id": "e713994a-52d4-4834-919a-57eae45de80c",
          "english": "improvement",
          "chinese": "改进",
          "pinyin": "gǎijìn",
          "order": 8
        },
        {
          "id": "c1991a0e-146f-4f79-a470-85488c6764ed",
          "english": "reform",
          "chinese": "改革",
          "pinyin": "gǎigé",
          "order": 9
        }
      ]
    },
    {
      "id": "62d91a22-211c-4674-b005-4227a00b38c2",
      "name": "HSK 5 50",
      "description": "HSK 5 50 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "71358533-5914-41bb-ba55-b22628b0f8c5",
          "english": "dining",
          "chinese": "词400",
          "pinyin": "cí400",
          "order": 0
        },
        {
          "id": "698ebda1-bc78-4190-acc4-027325857dfe",
          "english": "dinner",
          "chinese": "词401",
          "pinyin": "cí401",
          "order": 1
        },
        {
          "id": "3c2b6d37-6774-4754-a51a-8bb5ce374182",
          "english": "direct",
          "chinese": "词402",
          "pinyin": "cí402",
          "order": 2
        },
        {
          "id": "2a7fa8f9-10a6-413d-a23b-751058faaf99",
          "english": "direction",
          "chinese": "词403",
          "pinyin": "cí403",
          "order": 3
        },
        {
          "id": "cffd9178-8bfd-40e5-85dc-d26d3237b4c9",
          "english": "directly",
          "chinese": "词404",
          "pinyin": "cí404",
          "order": 4
        },
        {
          "id": "78f60d4c-7a2c-41fa-b684-a9af6cb602ee",
          "english": "director",
          "chinese": "词405",
          "pinyin": "cí405",
          "order": 5
        },
        {
          "id": "67826b0f-f234-467e-93bb-61e2fbc9d7e1",
          "english": "dirty",
          "chinese": "词406",
          "pinyin": "cí406",
          "order": 6
        },
        {
          "id": "06c15c0f-919d-4a67-b0d1-3cdcefc92811",
          "english": "disability",
          "chinese": "词407",
          "pinyin": "cí407",
          "order": 7
        },
        {
          "id": "9be997ab-46f3-498f-b02f-bbe02534ec8f",
          "english": "disagree",
          "chinese": "词408",
          "pinyin": "cí408",
          "order": 8
        },
        {
          "id": "f16e2fd8-cf20-4029-b996-4d7413200bff",
          "english": "disappear",
          "chinese": "词409",
          "pinyin": "cí409",
          "order": 9
        }
      ]
    },
    {
      "id": "54867943-6e89-48e0-a4d0-7b4f1a57e02d",
      "name": "HSK 5 51",
      "description": "HSK 5 51 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "507aa7f0-ef0b-42b5-ad1e-09f93b0b671a",
          "english": "disaster",
          "chinese": "词410",
          "pinyin": "cí410",
          "order": 0
        },
        {
          "id": "758e29db-40b8-47f6-a15a-09395703c856",
          "english": "discipline",
          "chinese": "词411",
          "pinyin": "cí411",
          "order": 1
        },
        {
          "id": "6cfd3cdd-6d54-44ef-85a9-fb358895014b",
          "english": "discover",
          "chinese": "词412",
          "pinyin": "cí412",
          "order": 2
        },
        {
          "id": "f08d2daa-5d40-4bb0-9a39-ee99647e529a",
          "english": "discovery",
          "chinese": "词413",
          "pinyin": "cí413",
          "order": 3
        },
        {
          "id": "69065c69-020c-44df-94c7-4b191201cc5e",
          "english": "discuss",
          "chinese": "词414",
          "pinyin": "cí414",
          "order": 4
        },
        {
          "id": "b6a09fe2-f598-4616-a258-b7648683d732",
          "english": "discussion",
          "chinese": "词415",
          "pinyin": "cí415",
          "order": 5
        },
        {
          "id": "dc6031e9-990f-4024-8cd2-2103ab62870f",
          "english": "disease",
          "chinese": "词416",
          "pinyin": "cí416",
          "order": 6
        },
        {
          "id": "b55644df-dee7-4268-aa15-3312ad197c70",
          "english": "dish",
          "chinese": "词417",
          "pinyin": "cí417",
          "order": 7
        },
        {
          "id": "f2f19348-113b-4bf4-bae0-ee1111739fd8",
          "english": "dismiss",
          "chinese": "词418",
          "pinyin": "cí418",
          "order": 8
        },
        {
          "id": "18c36039-8683-4d94-a583-47de366ae6cb",
          "english": "disorder",
          "chinese": "词419",
          "pinyin": "cí419",
          "order": 9
        }
      ]
    },
    {
      "id": "484f2b99-b49f-4d1c-b181-10895984f7bd",
      "name": "HSK 5 52",
      "description": "HSK 5 52 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "c87d06aa-51a1-4dfd-82bc-cf69387de1a4",
          "english": "display",
          "chinese": "词420",
          "pinyin": "cí420",
          "order": 0
        },
        {
          "id": "860ebe13-9bb2-4f50-9ff9-1f4df2497e13",
          "english": "distance",
          "chinese": "词421",
          "pinyin": "cí421",
          "order": 1
        },
        {
          "id": "5680c769-d03f-4199-8dac-a454a50d9532",
          "english": "distribution",
          "chinese": "词422",
          "pinyin": "cí422",
          "order": 2
        },
        {
          "id": "49d65022-96c1-456c-acd6-40575e77407a",
          "english": "district",
          "chinese": "词423",
          "pinyin": "cí423",
          "order": 3
        },
        {
          "id": "d84c916c-242f-49a0-aa0b-b17d1eee6002",
          "english": "divide",
          "chinese": "词424",
          "pinyin": "cí424",
          "order": 4
        },
        {
          "id": "89ae50ec-05e1-40c4-ad46-35432de49261",
          "english": "division",
          "chinese": "词425",
          "pinyin": "cí425",
          "order": 5
        },
        {
          "id": "a8f46577-b46e-4166-8685-43e345fb8de3",
          "english": "doctor",
          "chinese": "词426",
          "pinyin": "cí426",
          "order": 6
        },
        {
          "id": "97447f98-a0d1-41d6-92ce-0d2f9d0b46a7",
          "english": "document",
          "chinese": "词427",
          "pinyin": "cí427",
          "order": 7
        },
        {
          "id": "2abd0071-ccee-4d76-a486-44d684b6f23b",
          "english": "domestic",
          "chinese": "词428",
          "pinyin": "cí428",
          "order": 8
        },
        {
          "id": "d9df56d3-15a6-4f34-943a-fcde519a457a",
          "english": "dominant",
          "chinese": "词429",
          "pinyin": "cí429",
          "order": 9
        }
      ]
    },
    {
      "id": "7ddbd141-004a-4678-a290-7779dd800bfd",
      "name": "HSK 5 53",
      "description": "HSK 5 53 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "26cf71ed-9c36-4a48-ada5-ad8e96ca138e",
          "english": "dominate",
          "chinese": "词430",
          "pinyin": "cí430",
          "order": 0
        },
        {
          "id": "9b6afb50-2fe9-40e5-9c7c-d5c77fd9ee90",
          "english": "door",
          "chinese": "词431",
          "pinyin": "cí431",
          "order": 1
        },
        {
          "id": "f2f797b0-11a0-47f2-b60d-c0ae2a2b834d",
          "english": "double",
          "chinese": "词432",
          "pinyin": "cí432",
          "order": 2
        },
        {
          "id": "7cfde99f-51d2-48af-8259-af5591106370",
          "english": "doubt",
          "chinese": "词433",
          "pinyin": "cí433",
          "order": 3
        },
        {
          "id": "b117f796-d4b5-4bbe-a364-64bfc6a7f355",
          "english": "downtown",
          "chinese": "词434",
          "pinyin": "cí434",
          "order": 4
        },
        {
          "id": "a1e953d6-944c-4c6d-bdb1-4b3b0a4b0b23",
          "english": "dozen",
          "chinese": "词435",
          "pinyin": "cí435",
          "order": 5
        },
        {
          "id": "408065d4-3ab8-4006-9e40-61cc7fbd55a4",
          "english": "draft",
          "chinese": "词436",
          "pinyin": "cí436",
          "order": 6
        },
        {
          "id": "ba05169e-4baf-4d0e-9792-6b254a3bac60",
          "english": "drag",
          "chinese": "词437",
          "pinyin": "cí437",
          "order": 7
        },
        {
          "id": "9a7121f6-632d-4af0-be1c-f59ab46b4839",
          "english": "drama",
          "chinese": "词438",
          "pinyin": "cí438",
          "order": 8
        },
        {
          "id": "87fdba7a-f7c6-4458-9447-dd1335c985df",
          "english": "dramatic",
          "chinese": "词439",
          "pinyin": "cí439",
          "order": 9
        }
      ]
    },
    {
      "id": "c0d93e6f-36b0-455e-a267-e869d9b220b0",
      "name": "HSK 5 54",
      "description": "HSK 5 54 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "413300c4-a868-43f1-bcf8-fde2ff6b53fb",
          "english": "draw",
          "chinese": "词440",
          "pinyin": "cí440",
          "order": 0
        },
        {
          "id": "9f1d3d02-4bd5-4ad8-aeb9-abb3b6257cbc",
          "english": "drawing",
          "chinese": "词441",
          "pinyin": "cí441",
          "order": 1
        },
        {
          "id": "d8ab1892-e873-45be-b542-02937405b487",
          "english": "dream",
          "chinese": "词442",
          "pinyin": "cí442",
          "order": 2
        },
        {
          "id": "cce3b648-8201-473b-8308-a3f03b5a2f26",
          "english": "dress",
          "chinese": "词443",
          "pinyin": "cí443",
          "order": 3
        },
        {
          "id": "e3890275-38f9-4d04-98af-6548bd5d28fe",
          "english": "drink",
          "chinese": "词444",
          "pinyin": "cí444",
          "order": 4
        },
        {
          "id": "ea7d48db-fe38-4065-92c6-b72a30faaa9b",
          "english": "drive",
          "chinese": "词445",
          "pinyin": "cí445",
          "order": 5
        },
        {
          "id": "bb63b212-e0ee-4208-9cdc-2148962427cd",
          "english": "driver",
          "chinese": "词446",
          "pinyin": "cí446",
          "order": 6
        },
        {
          "id": "eef35b5e-b117-4232-ae4b-d8057848a645",
          "english": "drop",
          "chinese": "词447",
          "pinyin": "cí447",
          "order": 7
        },
        {
          "id": "c71341f0-4e29-4ecf-9c02-13a8add32103",
          "english": "drug",
          "chinese": "词448",
          "pinyin": "cí448",
          "order": 8
        },
        {
          "id": "8ed1ede9-c020-4775-bb23-3cc082cf2c6a",
          "english": "during",
          "chinese": "词449",
          "pinyin": "cí449",
          "order": 9
        }
      ]
    },
    {
      "id": "70b3dbeb-ec52-4a87-a4ec-1882225c3ee7",
      "name": "HSK 5 55",
      "description": "HSK 5 55 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "04e36b4f-3b67-4a0d-b410-fa1c7085ee29",
          "english": "duty",
          "chinese": "词450",
          "pinyin": "cí450",
          "order": 0
        },
        {
          "id": "ed007556-283f-4441-8bff-dbd888022c81",
          "english": "each",
          "chinese": "词451",
          "pinyin": "cí451",
          "order": 1
        },
        {
          "id": "5b8d4779-142b-49af-9bd3-72f57eda93df",
          "english": "eager",
          "chinese": "词452",
          "pinyin": "cí452",
          "order": 2
        },
        {
          "id": "868d1b6d-9180-440b-a7eb-72f74fe3290c",
          "english": "early",
          "chinese": "词453",
          "pinyin": "cí453",
          "order": 3
        },
        {
          "id": "5dd8bce3-6db4-4f40-b6fd-b82d675d8d2e",
          "english": "earn",
          "chinese": "词454",
          "pinyin": "cí454",
          "order": 4
        },
        {
          "id": "c1fa3998-5532-48f4-980a-6e1dbb4cc7ab",
          "english": "earth",
          "chinese": "词455",
          "pinyin": "cí455",
          "order": 5
        },
        {
          "id": "31687ef7-b1fc-47ce-a34b-73e0b8fbe272",
          "english": "easily",
          "chinese": "词456",
          "pinyin": "cí456",
          "order": 6
        },
        {
          "id": "91c91297-fd55-4748-89a1-877fc84bce0c",
          "english": "east",
          "chinese": "词457",
          "pinyin": "cí457",
          "order": 7
        },
        {
          "id": "ed1f99cd-e4c8-44bd-a027-69a6eaba07c0",
          "english": "eastern",
          "chinese": "词458",
          "pinyin": "cí458",
          "order": 8
        },
        {
          "id": "9c2445b4-f7ed-49da-84d9-993404077bc0",
          "english": "easy",
          "chinese": "词459",
          "pinyin": "cí459",
          "order": 9
        }
      ]
    },
    {
      "id": "8f6a1945-4acd-4224-9eb9-ae5d8751782c",
      "name": "HSK 5 56",
      "description": "HSK 5 56 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "99f4af71-c105-41af-b7fd-4f619d9f737e",
          "english": "economic",
          "chinese": "词460",
          "pinyin": "cí460",
          "order": 0
        },
        {
          "id": "f5eec389-586d-4b2f-b1b6-59a78007dfbf",
          "english": "economy",
          "chinese": "词461",
          "pinyin": "cí461",
          "order": 1
        },
        {
          "id": "a5b52518-d0b4-410e-9253-154de09c14e7",
          "english": "edge",
          "chinese": "词462",
          "pinyin": "cí462",
          "order": 2
        },
        {
          "id": "3a6bea32-651f-4810-ad52-ee7ee7a79311",
          "english": "edition",
          "chinese": "词463",
          "pinyin": "cí463",
          "order": 3
        },
        {
          "id": "5d5b1dc4-d012-40bb-91a9-f6e2720b3485",
          "english": "editor",
          "chinese": "词464",
          "pinyin": "cí464",
          "order": 4
        },
        {
          "id": "b8e57df4-d4ac-49df-bec3-45e8d81a9aef",
          "english": "education",
          "chinese": "词465",
          "pinyin": "cí465",
          "order": 5
        },
        {
          "id": "cfb4671c-2ecf-4c02-ab4e-0dfc035f5dba",
          "english": "educational",
          "chinese": "词466",
          "pinyin": "cí466",
          "order": 6
        },
        {
          "id": "bc04aa20-9762-45f3-8589-dd245bfd24b2",
          "english": "effect",
          "chinese": "词467",
          "pinyin": "cí467",
          "order": 7
        },
        {
          "id": "3712895b-72a8-45b5-b267-f7492c28cd74",
          "english": "effective",
          "chinese": "词468",
          "pinyin": "cí468",
          "order": 8
        },
        {
          "id": "b12875f7-07a1-47cd-b623-e52d9408a9a7",
          "english": "effectively",
          "chinese": "词469",
          "pinyin": "cí469",
          "order": 9
        }
      ]
    },
    {
      "id": "431a77ea-ba91-430e-82b9-0173e11f8fd3",
      "name": "HSK 5 57",
      "description": "HSK 5 57 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "1df9a3cc-be70-4148-83c5-fdde2d25c8a4",
          "english": "efficiency",
          "chinese": "词470",
          "pinyin": "cí470",
          "order": 0
        },
        {
          "id": "9097ce20-fbed-4c41-a9a1-6d35e3eb84f2",
          "english": "efficient",
          "chinese": "词471",
          "pinyin": "cí471",
          "order": 1
        },
        {
          "id": "ec8e8986-20d6-4a06-a3b7-dd3c957316c6",
          "english": "effort",
          "chinese": "词472",
          "pinyin": "cí472",
          "order": 2
        },
        {
          "id": "7690ba04-3b49-4aae-b902-c9252299ca1e",
          "english": "eight",
          "chinese": "词473",
          "pinyin": "cí473",
          "order": 3
        },
        {
          "id": "5bae7bfe-0b5e-4ca1-997d-5e3aabc8690f",
          "english": "either",
          "chinese": "词474",
          "pinyin": "cí474",
          "order": 4
        },
        {
          "id": "b04c235b-d189-43b6-8f8f-e92083329178",
          "english": "elderly",
          "chinese": "词475",
          "pinyin": "cí475",
          "order": 5
        },
        {
          "id": "3590e1c6-1206-4fe9-9f4c-5cec7e52a596",
          "english": "elect",
          "chinese": "词476",
          "pinyin": "cí476",
          "order": 6
        },
        {
          "id": "82e5b488-09a5-48a9-9009-2f0332fa135e",
          "english": "election",
          "chinese": "词477",
          "pinyin": "cí477",
          "order": 7
        },
        {
          "id": "879ea37c-4e8a-4d11-8f40-e59f8e345b54",
          "english": "electric",
          "chinese": "词478",
          "pinyin": "cí478",
          "order": 8
        },
        {
          "id": "155cecb1-499a-4985-b3f4-b0c09f806f8e",
          "english": "electrical",
          "chinese": "词479",
          "pinyin": "cí479",
          "order": 9
        }
      ]
    },
    {
      "id": "8321dfd4-78fe-4f33-b20f-5b98e7e8e608",
      "name": "HSK 5 58",
      "description": "HSK 5 58 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "1350231e-7b97-416b-97a6-12625d90aca4",
          "english": "electronic",
          "chinese": "词480",
          "pinyin": "cí480",
          "order": 0
        },
        {
          "id": "1023355f-9059-4053-b7ee-b7325a723a4d",
          "english": "element",
          "chinese": "词481",
          "pinyin": "cí481",
          "order": 1
        },
        {
          "id": "04abaf86-285e-4202-bf06-705792140825",
          "english": "eliminate",
          "chinese": "词482",
          "pinyin": "cí482",
          "order": 2
        },
        {
          "id": "6177618c-541c-45c6-b63d-2e16a4621ba8",
          "english": "elite",
          "chinese": "词483",
          "pinyin": "cí483",
          "order": 3
        },
        {
          "id": "75e429a9-b4bb-4129-b624-b7349a6abaf7",
          "english": "else",
          "chinese": "词484",
          "pinyin": "cí484",
          "order": 4
        },
        {
          "id": "ebee8099-fd87-4f5e-a8ba-da4318b03b86",
          "english": "elsewhere",
          "chinese": "词485",
          "pinyin": "cí485",
          "order": 5
        },
        {
          "id": "ff577cb3-d8c5-4170-93ce-d1d79c2c3fa3",
          "english": "emerge",
          "chinese": "词486",
          "pinyin": "cí486",
          "order": 6
        },
        {
          "id": "b3f0ab8c-1018-4d10-a5ab-676e1bf99c68",
          "english": "emergency",
          "chinese": "词487",
          "pinyin": "cí487",
          "order": 7
        },
        {
          "id": "2a5bc934-bd18-4d24-bb5b-e5b1299e4617",
          "english": "emission",
          "chinese": "词488",
          "pinyin": "cí488",
          "order": 8
        },
        {
          "id": "292f5c11-0475-4797-805f-449706c19628",
          "english": "emotion",
          "chinese": "词489",
          "pinyin": "cí489",
          "order": 9
        }
      ]
    },
    {
      "id": "2fa3a2fe-aece-419c-8634-35f8da9bee01",
      "name": "HSK 5 59",
      "description": "HSK 5 59 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "1d950a48-8793-4eac-b04a-c80171608076",
          "english": "emotional",
          "chinese": "词490",
          "pinyin": "cí490",
          "order": 0
        },
        {
          "id": "2d4899eb-2454-4a0b-862e-6739f00216d7",
          "english": "emphasis",
          "chinese": "词491",
          "pinyin": "cí491",
          "order": 1
        },
        {
          "id": "5cf1926e-8893-42e7-b3bc-0ebffd2398cc",
          "english": "emphasize",
          "chinese": "词492",
          "pinyin": "cí492",
          "order": 2
        },
        {
          "id": "76558dfd-a7ad-4564-a32c-78469a22f4b0",
          "english": "employ",
          "chinese": "词493",
          "pinyin": "cí493",
          "order": 3
        },
        {
          "id": "2cd3ee1e-472a-44e7-ba15-7731db73a8f5",
          "english": "employee",
          "chinese": "词494",
          "pinyin": "cí494",
          "order": 4
        },
        {
          "id": "1faaa44a-9f9c-4744-b27c-0eec6deadbe5",
          "english": "employer",
          "chinese": "词495",
          "pinyin": "cí495",
          "order": 5
        },
        {
          "id": "728fc709-45ac-49bf-a628-d26dfbfc15c7",
          "english": "employment",
          "chinese": "词496",
          "pinyin": "cí496",
          "order": 6
        },
        {
          "id": "a95157dd-ff28-4f1a-a80a-d85e7d2dbd20",
          "english": "empty",
          "chinese": "词497",
          "pinyin": "cí497",
          "order": 7
        },
        {
          "id": "48fbda14-6785-4388-a578-3b65ffa8c3b8",
          "english": "enable",
          "chinese": "词498",
          "pinyin": "cí498",
          "order": 8
        },
        {
          "id": "e77a845d-3643-4ed2-b06c-1d920e1c8269",
          "english": "encounter",
          "chinese": "词499",
          "pinyin": "cí499",
          "order": 9
        }
      ]
    },
    {
      "id": "c22776f4-219c-4a73-9288-ae8819630575",
      "name": "HSK 5 6",
      "description": "HSK 5 6 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "ed608cff-a104-466b-8fd4-f2d8af5942ce",
          "english": "innovation",
          "chinese": "创新",
          "pinyin": "chuàngxīn",
          "order": 0
        },
        {
          "id": "1c9ffb1e-265f-4cff-88e3-45b73f5f18ad",
          "english": "invention",
          "chinese": "发明",
          "pinyin": "fāmíng",
          "order": 1
        },
        {
          "id": "b2b462b7-a673-41bd-8b30-ac08a0beea42",
          "english": "discovery",
          "chinese": "发现",
          "pinyin": "fāxiàn",
          "order": 2
        },
        {
          "id": "5987e1af-4032-407e-8b85-b63c669c1c88",
          "english": "research",
          "chinese": "研究",
          "pinyin": "yánjiū",
          "order": 3
        },
        {
          "id": "8341ba5b-4eb5-43fd-a82a-77e790cc33f5",
          "english": "experiment",
          "chinese": "实验",
          "pinyin": "shíyàn",
          "order": 4
        },
        {
          "id": "53cb434b-6bea-4ed6-86b0-4ad4df273cf5",
          "english": "theory",
          "chinese": "理论",
          "pinyin": "lǐlùn",
          "order": 5
        },
        {
          "id": "07f06f38-660f-4202-8247-cd10c14bbc49",
          "english": "practice",
          "chinese": "实践",
          "pinyin": "shíjiàn",
          "order": 6
        },
        {
          "id": "62dcafaf-2f81-418b-9a89-276d770dbc9c",
          "english": "experience",
          "chinese": "经验",
          "pinyin": "jīngyàn",
          "order": 7
        },
        {
          "id": "9b7d6c00-71c6-4c20-a1ef-2aef1cabe55b",
          "english": "knowledge",
          "chinese": "知识",
          "pinyin": "zhīshi",
          "order": 8
        },
        {
          "id": "614c7359-0278-4918-bdca-e9c636286c72",
          "english": "skill",
          "chinese": "技能",
          "pinyin": "jìnéng",
          "order": 9
        }
      ]
    },
    {
      "id": "671413f9-f083-4acf-9a4f-b8548d1aa1ac",
      "name": "HSK 5 60",
      "description": "HSK 5 60 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "be8b2b3f-54a5-4e15-9226-53bcba68ce97",
          "english": "encourage",
          "chinese": "词500",
          "pinyin": "cí500",
          "order": 0
        },
        {
          "id": "6b0a621b-67a0-45f5-b58e-1a24abca7542",
          "english": "enemy",
          "chinese": "词501",
          "pinyin": "cí501",
          "order": 1
        },
        {
          "id": "f2c9e56c-427c-4c42-9359-f1d51947d8c6",
          "english": "energy",
          "chinese": "词502",
          "pinyin": "cí502",
          "order": 2
        },
        {
          "id": "7b927ad1-6b07-48c9-a2ef-91489e62cde6",
          "english": "engage",
          "chinese": "词503",
          "pinyin": "cí503",
          "order": 3
        },
        {
          "id": "cf9280b9-d9d6-4e0b-8102-80c6c0a0b648",
          "english": "engine",
          "chinese": "词504",
          "pinyin": "cí504",
          "order": 4
        },
        {
          "id": "042fc37c-951c-492e-984e-fca79c977ffc",
          "english": "engineer",
          "chinese": "词505",
          "pinyin": "cí505",
          "order": 5
        },
        {
          "id": "9de5e095-fd0c-402c-b955-b98c9be9c12f",
          "english": "engineering",
          "chinese": "词506",
          "pinyin": "cí506",
          "order": 6
        },
        {
          "id": "a1420d03-1304-4f3b-947a-8e4c2939c451",
          "english": "enhance",
          "chinese": "词507",
          "pinyin": "cí507",
          "order": 7
        },
        {
          "id": "6ec234a2-92eb-4d55-928f-2aeaa1417707",
          "english": "enjoy",
          "chinese": "词508",
          "pinyin": "cí508",
          "order": 8
        },
        {
          "id": "273dd4c0-3e7f-44cb-ae02-2e0f26e62f1a",
          "english": "enormous",
          "chinese": "词509",
          "pinyin": "cí509",
          "order": 9
        }
      ]
    },
    {
      "id": "afeeb413-c679-42ba-bf36-47aec731f105",
      "name": "HSK 5 61",
      "description": "HSK 5 61 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "db4d4851-53a0-446d-8a7d-103944aad713",
          "english": "enough",
          "chinese": "词510",
          "pinyin": "cí510",
          "order": 0
        },
        {
          "id": "0768159e-539d-4ef1-8670-db23ce4d9454",
          "english": "ensure",
          "chinese": "词511",
          "pinyin": "cí511",
          "order": 1
        },
        {
          "id": "bf492f00-f470-41f7-ac12-53ef7560b2d2",
          "english": "enter",
          "chinese": "词512",
          "pinyin": "cí512",
          "order": 2
        },
        {
          "id": "236cb7fb-7fc9-49fa-abd5-9fb93e733a43",
          "english": "enterprise",
          "chinese": "词513",
          "pinyin": "cí513",
          "order": 3
        },
        {
          "id": "4caefb4d-8554-48b3-a5c6-cda479337710",
          "english": "entertainment",
          "chinese": "词514",
          "pinyin": "cí514",
          "order": 4
        },
        {
          "id": "520c6dbd-1b94-4d44-8ccd-0c7bc00bde23",
          "english": "entire",
          "chinese": "词515",
          "pinyin": "cí515",
          "order": 5
        },
        {
          "id": "33dad402-68d4-41fe-95bb-355a904f0014",
          "english": "entirely",
          "chinese": "词516",
          "pinyin": "cí516",
          "order": 6
        },
        {
          "id": "b204f32f-9060-41be-8e70-b8a39044691b",
          "english": "entrance",
          "chinese": "词517",
          "pinyin": "cí517",
          "order": 7
        },
        {
          "id": "df45afe5-6be9-49e0-81bf-32a531277d53",
          "english": "entry",
          "chinese": "词518",
          "pinyin": "cí518",
          "order": 8
        },
        {
          "id": "673c592f-7ec4-4cb8-9bd4-1ab8f9ff39cb",
          "english": "environment",
          "chinese": "词519",
          "pinyin": "cí519",
          "order": 9
        }
      ]
    },
    {
      "id": "0b280af0-8dc9-42af-8677-4d0831fc40db",
      "name": "HSK 5 62",
      "description": "HSK 5 62 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "b78d1e2f-4b6c-4507-9656-08f2e61ec7c6",
          "english": "environmental",
          "chinese": "词520",
          "pinyin": "cí520",
          "order": 0
        },
        {
          "id": "939713af-739c-4a62-945b-1b2645b2d674",
          "english": "episode",
          "chinese": "词521",
          "pinyin": "cí521",
          "order": 1
        },
        {
          "id": "201b64ba-4529-4fa4-9bd1-e08b29d0a441",
          "english": "equal",
          "chinese": "词522",
          "pinyin": "cí522",
          "order": 2
        },
        {
          "id": "1f652846-263d-4061-a2e1-49b7952a071f",
          "english": "equally",
          "chinese": "词523",
          "pinyin": "cí523",
          "order": 3
        },
        {
          "id": "7803cba6-5596-4541-90e4-c8b2b2decce5",
          "english": "equipment",
          "chinese": "词524",
          "pinyin": "cí524",
          "order": 4
        },
        {
          "id": "d3685f6a-ded0-432b-abad-83550cb2f215",
          "english": "error",
          "chinese": "词525",
          "pinyin": "cí525",
          "order": 5
        },
        {
          "id": "ddda5b5b-9dba-410b-accc-5e82a5ab594a",
          "english": "escape",
          "chinese": "词526",
          "pinyin": "cí526",
          "order": 6
        },
        {
          "id": "e3ab1e12-3ed0-4f0b-9e66-7b81c80dd173",
          "english": "especially",
          "chinese": "词527",
          "pinyin": "cí527",
          "order": 7
        },
        {
          "id": "e2b90e42-8ca5-4f08-ad38-6cf5e17341ea",
          "english": "essential",
          "chinese": "词528",
          "pinyin": "cí528",
          "order": 8
        },
        {
          "id": "ed5a34f0-e237-4f4c-bf59-36f922261b95",
          "english": "establish",
          "chinese": "词529",
          "pinyin": "cí529",
          "order": 9
        }
      ]
    },
    {
      "id": "138f8a3c-fc55-4249-a2aa-b616425e1e20",
      "name": "HSK 5 63",
      "description": "HSK 5 63 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "53405c58-8bdf-4a52-ba31-17a493ceaa38",
          "english": "establishment",
          "chinese": "词530",
          "pinyin": "cí530",
          "order": 0
        },
        {
          "id": "8ad437df-b51f-45c8-aa0f-8a1b2a851967",
          "english": "estate",
          "chinese": "词531",
          "pinyin": "cí531",
          "order": 1
        },
        {
          "id": "47c63be5-b9ae-423a-9d8e-04e4dc775429",
          "english": "estimate",
          "chinese": "词532",
          "pinyin": "cí532",
          "order": 2
        },
        {
          "id": "938145bc-f9a6-464d-b2d6-618a7066787b",
          "english": "ethnic",
          "chinese": "词533",
          "pinyin": "cí533",
          "order": 3
        },
        {
          "id": "d728a0eb-cf9a-4137-91af-715da05c3a20",
          "english": "European",
          "chinese": "词534",
          "pinyin": "cí534",
          "order": 4
        },
        {
          "id": "0ba18ea7-cf02-476a-9a65-286db08c7930",
          "english": "evaluate",
          "chinese": "词535",
          "pinyin": "cí535",
          "order": 5
        },
        {
          "id": "021acb6d-5a07-4b9f-8573-599f40d3e4be",
          "english": "evaluation",
          "chinese": "词536",
          "pinyin": "cí536",
          "order": 6
        },
        {
          "id": "83dd9b6b-6746-47e0-aef4-dd752177fa4a",
          "english": "even",
          "chinese": "词537",
          "pinyin": "cí537",
          "order": 7
        },
        {
          "id": "50b8b7f5-d1d7-4370-a26f-fb9fc00f564c",
          "english": "evening",
          "chinese": "词538",
          "pinyin": "cí538",
          "order": 8
        },
        {
          "id": "7f34d0fc-99b2-4e6f-8171-fdd1acf32ec8",
          "english": "event",
          "chinese": "词539",
          "pinyin": "cí539",
          "order": 9
        }
      ]
    },
    {
      "id": "1c45d6a1-4429-466d-b4bc-71ec83d84092",
      "name": "HSK 5 64",
      "description": "HSK 5 64 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "058a1635-7b2e-4eee-a98a-a29c8afa9aca",
          "english": "eventually",
          "chinese": "词540",
          "pinyin": "cí540",
          "order": 0
        },
        {
          "id": "543b1e19-fc58-4f8f-b349-7d2d093e024d",
          "english": "ever",
          "chinese": "词541",
          "pinyin": "cí541",
          "order": 1
        },
        {
          "id": "2079dbdb-a737-487f-87af-93459cebbb94",
          "english": "every",
          "chinese": "词542",
          "pinyin": "cí542",
          "order": 2
        },
        {
          "id": "5baca578-67c1-4d1f-bbdc-81147f443724",
          "english": "everybody",
          "chinese": "词543",
          "pinyin": "cí543",
          "order": 3
        },
        {
          "id": "72ff2000-da1e-4e26-9869-aa07130b62d2",
          "english": "everyday",
          "chinese": "词544",
          "pinyin": "cí544",
          "order": 4
        },
        {
          "id": "6173a9bc-e2cf-4174-afa0-61941a278eae",
          "english": "everyone",
          "chinese": "词545",
          "pinyin": "cí545",
          "order": 5
        },
        {
          "id": "f1a02389-75ef-4d75-b984-b31eabeae0ca",
          "english": "everything",
          "chinese": "词546",
          "pinyin": "cí546",
          "order": 6
        },
        {
          "id": "8dd9b901-42b3-4515-bae0-661c2a10f92f",
          "english": "everywhere",
          "chinese": "词547",
          "pinyin": "cí547",
          "order": 7
        },
        {
          "id": "9b116abf-1cad-4f1e-bfe8-d6c66a987f67",
          "english": "evidence",
          "chinese": "词548",
          "pinyin": "cí548",
          "order": 8
        },
        {
          "id": "a21c4d20-4c8a-44bc-a48c-899478b2bea7",
          "english": "evident",
          "chinese": "词549",
          "pinyin": "cí549",
          "order": 9
        }
      ]
    },
    {
      "id": "2f3308aa-d046-4f67-9b99-f4c6d3c01765",
      "name": "HSK 5 65",
      "description": "HSK 5 65 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "72102fd0-86a5-47fd-9cf1-7212e656b56f",
          "english": "evil",
          "chinese": "词550",
          "pinyin": "cí550",
          "order": 0
        },
        {
          "id": "7ac5aa70-92a8-4213-becd-fbe5eeb39f0d",
          "english": "exact",
          "chinese": "词551",
          "pinyin": "cí551",
          "order": 1
        },
        {
          "id": "7df4d22c-cc1f-448b-b6de-6bac20862288",
          "english": "exactly",
          "chinese": "词552",
          "pinyin": "cí552",
          "order": 2
        },
        {
          "id": "9f7905fc-d4e3-4293-8da9-01f9247883e0",
          "english": "examination",
          "chinese": "词553",
          "pinyin": "cí553",
          "order": 3
        },
        {
          "id": "b612e824-cbeb-48c6-845d-ed8635d8c151",
          "english": "examine",
          "chinese": "词554",
          "pinyin": "cí554",
          "order": 4
        },
        {
          "id": "ed8b39a6-67f0-4d0f-81f5-dbc7dcfdac24",
          "english": "example",
          "chinese": "词555",
          "pinyin": "cí555",
          "order": 5
        },
        {
          "id": "77ad1883-1775-444a-b0b0-f893ebb3f6a9",
          "english": "excellent",
          "chinese": "词556",
          "pinyin": "cí556",
          "order": 6
        },
        {
          "id": "7354b1cb-1191-4a79-9975-2f856b195766",
          "english": "except",
          "chinese": "词557",
          "pinyin": "cí557",
          "order": 7
        },
        {
          "id": "13060024-0a8b-4525-b4b3-012be499fd05",
          "english": "exception",
          "chinese": "词558",
          "pinyin": "cí558",
          "order": 8
        },
        {
          "id": "44ebb244-f3e6-40b3-99cc-2799755e3550",
          "english": "exchange",
          "chinese": "词559",
          "pinyin": "cí559",
          "order": 9
        }
      ]
    },
    {
      "id": "b304a7af-d4eb-4fc3-88e9-c82622e992d6",
      "name": "HSK 5 7",
      "description": "HSK 5 7 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "30ecac33-8ea5-4975-a380-3b1e4318d6f4",
          "english": "ability",
          "chinese": "能力",
          "pinyin": "nénglì",
          "order": 0
        },
        {
          "id": "dd8ae964-3032-4928-90fd-d507516ebb8e",
          "english": "talent",
          "chinese": "才能",
          "pinyin": "cáinéng",
          "order": 1
        },
        {
          "id": "80ca99c7-3c60-485a-8d4a-3a5fa0960492",
          "english": "intelligence",
          "chinese": "智慧",
          "pinyin": "zhìhuì",
          "order": 2
        },
        {
          "id": "1dfb83a1-3713-413e-b183-4c916e4cc54a",
          "english": "wisdom",
          "chinese": "智慧",
          "pinyin": "zhìhuì",
          "order": 3
        },
        {
          "id": "c917f717-e022-4c8f-b641-09ba314adb44",
          "english": "understanding",
          "chinese": "理解",
          "pinyin": "lǐjiě",
          "order": 4
        },
        {
          "id": "8d6374e9-0d53-4f08-88cf-b3bee2ec8f99",
          "english": "comprehension",
          "chinese": "理解",
          "pinyin": "lǐjiě",
          "order": 5
        },
        {
          "id": "d4e38a7e-2a48-4f3d-8908-51db6a7e2345",
          "english": "analysis",
          "chinese": "分析",
          "pinyin": "fēnxī",
          "order": 6
        },
        {
          "id": "4822fc24-4914-4372-9484-5e8c32e29392",
          "english": "judgment",
          "chinese": "判断",
          "pinyin": "pànduàn",
          "order": 7
        },
        {
          "id": "54c2a384-f5c8-4b4a-82eb-2ecd488eef80",
          "english": "decision",
          "chinese": "决定",
          "pinyin": "juédìng",
          "order": 8
        },
        {
          "id": "4ee3acd4-4a06-488b-9109-a112065f3d05",
          "english": "choice",
          "chinese": "选择",
          "pinyin": "xuǎnzé",
          "order": 9
        }
      ]
    },
    {
      "id": "91cc7c99-a2ff-452e-bf58-f3460059743d",
      "name": "HSK 5 8",
      "description": "HSK 5 8 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "30f1433d-0623-491d-9c8a-a186d1b94e6d",
          "english": "option",
          "chinese": "选项",
          "pinyin": "xuǎnxiàng",
          "order": 0
        },
        {
          "id": "4164c272-108a-4f6a-805e-030fe6138899",
          "english": "possibility",
          "chinese": "可能性",
          "pinyin": "kěnéngxìng",
          "order": 1
        },
        {
          "id": "0e464416-4521-4cff-9c63-d4984311b670",
          "english": "probability",
          "chinese": "概率",
          "pinyin": "gàilǜ",
          "order": 2
        },
        {
          "id": "f709098b-5dd0-450e-bd92-38be0f833a18",
          "english": "certainty",
          "chinese": "确定性",
          "pinyin": "quèdìngxìng",
          "order": 3
        },
        {
          "id": "64972394-2889-43fe-b9e8-208a385d658f",
          "english": "uncertainty",
          "chinese": "不确定性",
          "pinyin": "bùquèdìngxìng",
          "order": 4
        },
        {
          "id": "bb43a220-11ae-4dff-8c44-923f467eafe7",
          "english": "risk",
          "chinese": "风险",
          "pinyin": "fēngxiǎn",
          "order": 5
        },
        {
          "id": "2dc2cee3-f8b6-430c-921a-224a92d8aaff",
          "english": "safety",
          "chinese": "安全",
          "pinyin": "ānquán",
          "order": 6
        },
        {
          "id": "f582ae5a-0cde-450c-bca2-3b6892c2719d",
          "english": "danger",
          "chinese": "危险",
          "pinyin": "wēixiǎn",
          "order": 7
        },
        {
          "id": "d5790b5c-38d3-4a5f-995b-222e3c5f25f4",
          "english": "protection",
          "chinese": "保护",
          "pinyin": "bǎohù",
          "order": 8
        },
        {
          "id": "f226ab54-ec5d-4804-a925-24590a27e144",
          "english": "security",
          "chinese": "安全",
          "pinyin": "ānquán",
          "order": 9
        }
      ]
    },
    {
      "id": "512fa4fa-7bf1-48cf-9880-e7ce0a34c266",
      "name": "HSK 5 9",
      "description": "HSK 5 9 - Authentic HSK Level 5 vocabulary",
      "hsklevel": 5,
      "wordCount": 10,
      "words": [
        {
          "id": "2259375c-b2df-425a-ba11-a806abf27627",
          "english": "confidence",
          "chinese": "信心",
          "pinyin": "xìnxīn",
          "order": 0
        },
        {
          "id": "064c0a59-b0a7-40c9-8677-5bdc23ebb44f",
          "english": "trust",
          "chinese": "信任",
          "pinyin": "xìnrèn",
          "order": 1
        },
        {
          "id": "ea8ad63c-8ba0-420d-acbe-87a5d4ed4dcb",
          "english": "belief",
          "chinese": "信念",
          "pinyin": "xìnniàn",
          "order": 2
        },
        {
          "id": "d828c504-94d7-4dad-b954-912c5c410d40",
          "english": "faith",
          "chinese": "信仰",
          "pinyin": "xìnyǎng",
          "order": 3
        },
        {
          "id": "57fc4f09-bafa-4c6b-8821-dd2d56eb9bee",
          "english": "hope",
          "chinese": "希望",
          "pinyin": "xīwàng",
          "order": 4
        },
        {
          "id": "789057fd-a3b9-4b4b-b72c-4e7f2aa9a46a",
          "english": "dream",
          "chinese": "梦想",
          "pinyin": "mèngxiǎng",
          "order": 5
        },
        {
          "id": "d368ba7d-864a-4c2b-b8e5-d9d87b580158",
          "english": "wish",
          "chinese": "愿望",
          "pinyin": "yuànwàng",
          "order": 6
        },
        {
          "id": "09e35df8-2459-4714-b692-3ff03eff2c1a",
          "english": "desire",
          "chinese": "欲望",
          "pinyin": "yùwàng",
          "order": 7
        },
        {
          "id": "3d0b5dd9-81cd-4eb2-92f9-3f810924d809",
          "english": "ambition",
          "chinese": "抱负",
          "pinyin": "bàofù",
          "order": 8
        },
        {
          "id": "a68afbf3-3c92-4f1d-a80f-b9c437c1d040",
          "english": "motivation",
          "chinese": "动机",
          "pinyin": "dòngjī",
          "order": 9
        }
      ]
    },
    {
      "id": "dc7c6c7d-0e26-4810-b486-6015238fcf6b",
      "name": "HSK 6 1",
      "description": "HSK 6 1 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "1c1a896c-672a-4df1-9b14-856201e8e7b3",
          "english": "philosophy",
          "chinese": "哲学",
          "pinyin": "zhéxué",
          "order": 0
        },
        {
          "id": "e721afbc-b485-4cdc-91e9-ff574477b572",
          "english": "ideology",
          "chinese": "意识形态",
          "pinyin": "yìshíxíngtài",
          "order": 1
        },
        {
          "id": "d3fdcd45-563a-4e5c-a5ff-5b88a2e6ab2a",
          "english": "concept",
          "chinese": "概念",
          "pinyin": "gàiniàn",
          "order": 2
        },
        {
          "id": "0d46b84d-4074-460d-9c87-a04c63aa8fe5",
          "english": "theory",
          "chinese": "理论",
          "pinyin": "lǐlùn",
          "order": 3
        },
        {
          "id": "c2e70a3f-9d3a-4895-bef0-2022e5f53546",
          "english": "hypothesis",
          "chinese": "假设",
          "pinyin": "jiǎshè",
          "order": 4
        },
        {
          "id": "175a95ee-efe9-4460-b278-5d9eaec52c60",
          "english": "assumption",
          "chinese": "假定",
          "pinyin": "jiǎdìng",
          "order": 5
        },
        {
          "id": "440b7ef5-fc27-490d-92ae-cc7027678c52",
          "english": "premise",
          "chinese": "前提",
          "pinyin": "qiántí",
          "order": 6
        },
        {
          "id": "dfad647f-3f54-4189-86ea-e14f6b8b7cfc",
          "english": "conclusion",
          "chinese": "结论",
          "pinyin": "jiélùn",
          "order": 7
        },
        {
          "id": "c6fe6fef-ebb4-490e-adce-1dabce3cfaa4",
          "english": "inference",
          "chinese": "推理",
          "pinyin": "tuīlǐ",
          "order": 8
        },
        {
          "id": "210e718c-1bab-4551-b970-e24f7897c175",
          "english": "deduction",
          "chinese": "演绎",
          "pinyin": "yǎnyì",
          "order": 9
        }
      ]
    },
    {
      "id": "034d9d82-53d0-45f7-86ba-2d413ac6e801",
      "name": "HSK 6 10",
      "description": "HSK 6 10 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "d5ed32bd-0ed3-4075-b6f1-78c57661bb8c",
          "english": "ability",
          "chinese": "能力",
          "pinyin": "nénglì",
          "order": 0
        },
        {
          "id": "17be86b4-d6f5-46c6-8521-dd7917d96b75",
          "english": "accept",
          "chinese": "接受",
          "pinyin": "jiēshòu",
          "order": 1
        },
        {
          "id": "7519dce6-4be0-456b-b5bf-643775ce5a6e",
          "english": "accident",
          "chinese": "事故",
          "pinyin": "shìgù",
          "order": 2
        },
        {
          "id": "dd1a1c24-884e-453f-a059-09de1ecd58d6",
          "english": "activity",
          "chinese": "词3",
          "pinyin": "cí3",
          "order": 3
        },
        {
          "id": "049c7a2e-4e84-4f47-b95e-7f8660ea936b",
          "english": "actually",
          "chinese": "词4",
          "pinyin": "cí4",
          "order": 4
        },
        {
          "id": "cefe24e3-c1ae-4afc-9032-e810479b399c",
          "english": "administration",
          "chinese": "词5",
          "pinyin": "cí5",
          "order": 5
        },
        {
          "id": "d35c5a8a-3177-48fb-81ee-ebe941ef3456",
          "english": "admit",
          "chinese": "词6",
          "pinyin": "cí6",
          "order": 6
        },
        {
          "id": "7c36d3ef-83ad-4534-944d-12a0450f0ebc",
          "english": "adult",
          "chinese": "词7",
          "pinyin": "cí7",
          "order": 7
        },
        {
          "id": "75047cab-acb8-4a78-a957-ee4b5f7e4d67",
          "english": "advice",
          "chinese": "词8",
          "pinyin": "cí8",
          "order": 8
        },
        {
          "id": "5a518318-1348-4560-9c99-832e265c2da4",
          "english": "affect",
          "chinese": "词9",
          "pinyin": "cí9",
          "order": 9
        }
      ]
    },
    {
      "id": "bd31af74-6248-458f-acfa-54bbd847a91d",
      "name": "HSK 6 10",
      "description": "HSK 6 10 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "af9ae258-f23f-413a-993f-a1be98feb7c0",
          "english": "parabola",
          "chinese": "抛物线",
          "pinyin": "pāowùxiàn",
          "order": 0
        },
        {
          "id": "b1ea1d9f-d9b9-4116-976f-210c91b0bf7d",
          "english": "hyperbola",
          "chinese": "双曲线",
          "pinyin": "shuāngqūxiàn",
          "order": 1
        },
        {
          "id": "67b658d1-c8fe-4cd8-ae9a-fa1bbe4f1e96",
          "english": "curve",
          "chinese": "曲线",
          "pinyin": "qūxiàn",
          "order": 2
        },
        {
          "id": "e57269be-4932-4b27-93ab-7709606f4f4c",
          "english": "line",
          "chinese": "直线",
          "pinyin": "zhíxiàn",
          "order": 3
        },
        {
          "id": "3e6348a5-3ec0-4307-bb5c-f1698ba50cc3",
          "english": "segment",
          "chinese": "线段",
          "pinyin": "xiànduàn",
          "order": 4
        },
        {
          "id": "3f9e1709-2673-4e17-b18e-55da69116c72",
          "english": "ray",
          "chinese": "射线",
          "pinyin": "shèxiàn",
          "order": 5
        },
        {
          "id": "5d06aa08-300b-4379-ac3e-16c8c4789f43",
          "english": "angle",
          "chinese": "角",
          "pinyin": "jiǎo",
          "order": 6
        },
        {
          "id": "4fc297a9-e88f-4feb-a9a4-9acb129adf67",
          "english": "degree",
          "chinese": "度",
          "pinyin": "dù",
          "order": 7
        },
        {
          "id": "a54876fc-4480-4498-aea0-f5f4134c35fc",
          "english": "radian",
          "chinese": "弧度",
          "pinyin": "húdù",
          "order": 8
        },
        {
          "id": "bf572016-00a5-4737-ba6d-01292ed64444",
          "english": "slope",
          "chinese": "斜率",
          "pinyin": "xiélǜ",
          "order": 9
        }
      ]
    },
    {
      "id": "1bb574ba-a142-4802-ba4f-4a46e439ecef",
      "name": "HSK 6 11",
      "description": "HSK 6 11 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "b754c982-680b-4b1c-96f9-9aa97cbb0303",
          "english": "afternoon",
          "chinese": "词10",
          "pinyin": "cí10",
          "order": 0
        },
        {
          "id": "af641562-b163-41a6-b464-3bdd2859fa7e",
          "english": "agency",
          "chinese": "词11",
          "pinyin": "cí11",
          "order": 1
        },
        {
          "id": "3a3d4fc1-1be9-4682-8f74-c283835fa2dc",
          "english": "agent",
          "chinese": "词12",
          "pinyin": "cí12",
          "order": 2
        },
        {
          "id": "acd51499-e78c-4772-8937-ab8e1c2c7962",
          "english": "agreement",
          "chinese": "词13",
          "pinyin": "cí13",
          "order": 3
        },
        {
          "id": "302a29dd-d9f7-4ff1-a2a3-823d6f44c7d4",
          "english": "ahead",
          "chinese": "词14",
          "pinyin": "cí14",
          "order": 4
        },
        {
          "id": "40a59f67-5b19-4d67-b3d9-5c8751d82396",
          "english": "album",
          "chinese": "词15",
          "pinyin": "cí15",
          "order": 5
        },
        {
          "id": "609e5ae5-ab73-4d79-80ce-32ee7917702c",
          "english": "alive",
          "chinese": "词16",
          "pinyin": "cí16",
          "order": 6
        },
        {
          "id": "5081d464-32a1-4951-87b5-c3c6f2bbe97a",
          "english": "allow",
          "chinese": "词17",
          "pinyin": "cí17",
          "order": 7
        },
        {
          "id": "92d5d2a2-99a2-4c0e-9cb1-af490f34b930",
          "english": "almost",
          "chinese": "词18",
          "pinyin": "cí18",
          "order": 8
        },
        {
          "id": "776cbc36-4607-473b-b852-1baeb7687ab1",
          "english": "alone",
          "chinese": "词19",
          "pinyin": "cí19",
          "order": 9
        }
      ]
    },
    {
      "id": "acf26631-815d-4517-9e0f-098cb402f8dd",
      "name": "HSK 6 11",
      "description": "HSK 6 11 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "60c2e820-31b6-498d-a151-419a66523513",
          "english": "gradient",
          "chinese": "梯度",
          "pinyin": "tīdù",
          "order": 0
        },
        {
          "id": "be84b779-82d7-4af6-8a8c-2a78cda6a719",
          "english": "vector",
          "chinese": "向量",
          "pinyin": "xiàngliàng",
          "order": 1
        },
        {
          "id": "478134af-1316-4632-a04a-a0b3d8c7aacd",
          "english": "matrix",
          "chinese": "矩阵",
          "pinyin": "jǔzhèn",
          "order": 2
        },
        {
          "id": "26261f67-bc89-4eb8-a569-97be2eb5b62e",
          "english": "determinant",
          "chinese": "行列式",
          "pinyin": "hánglièshì",
          "order": 3
        },
        {
          "id": "5d45e63b-6c28-4143-9e2f-290693b9a42d",
          "english": "eigenvalue",
          "chinese": "特征值",
          "pinyin": "tèzhēngzhí",
          "order": 4
        },
        {
          "id": "9098611a-bf2d-4501-91f5-ce47ce7fabbf",
          "english": "eigenvector",
          "chinese": "特征向量",
          "pinyin": "tèzhēngxiàngliàng",
          "order": 5
        },
        {
          "id": "1e6e03ab-72b3-48b1-ae42-99c81ae49f30",
          "english": "transformation",
          "chinese": "变换",
          "pinyin": "biànhuàn",
          "order": 6
        },
        {
          "id": "df4ff726-75fc-4c42-87d4-92f711d5ca47",
          "english": "rotation",
          "chinese": "旋转",
          "pinyin": "xuánzhuǎn",
          "order": 7
        },
        {
          "id": "309a84c5-8724-4278-a1b3-94eb41974811",
          "english": "translation",
          "chinese": "平移",
          "pinyin": "píngyí",
          "order": 8
        },
        {
          "id": "48834188-5dca-409c-a698-026de13dd99d",
          "english": "reflection",
          "chinese": "反射",
          "pinyin": "fǎnshè",
          "order": 9
        }
      ]
    },
    {
      "id": "dd85924f-06b5-41e6-ab81-240c3e46953c",
      "name": "HSK 6 12",
      "description": "HSK 6 12 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "502ab653-0fb0-4854-b307-7cd23763bbd8",
          "english": "already",
          "chinese": "词20",
          "pinyin": "cí20",
          "order": 0
        },
        {
          "id": "c24af255-3ae8-46f3-bccf-e66d17aacb9a",
          "english": "although",
          "chinese": "词21",
          "pinyin": "cí21",
          "order": 1
        },
        {
          "id": "c011fe7c-729d-4a10-9b58-fcfdb121dff5",
          "english": "always",
          "chinese": "词22",
          "pinyin": "cí22",
          "order": 2
        },
        {
          "id": "2409dc2b-4d64-4570-abe7-c711917e3687",
          "english": "amazing",
          "chinese": "词23",
          "pinyin": "cí23",
          "order": 3
        },
        {
          "id": "21ccfc1a-d8bf-4cad-b26f-f7feed099347",
          "english": "amount",
          "chinese": "词24",
          "pinyin": "cí24",
          "order": 4
        },
        {
          "id": "dc881a27-e047-4e84-b353-718d9978bc77",
          "english": "analysis",
          "chinese": "词25",
          "pinyin": "cí25",
          "order": 5
        },
        {
          "id": "710ce26a-1ee8-4a8a-abe9-8880af23e89e",
          "english": "analyze",
          "chinese": "词26",
          "pinyin": "cí26",
          "order": 6
        },
        {
          "id": "8e2ace77-3d0f-4b78-8997-b5a2c33ec84a",
          "english": "ancient",
          "chinese": "词27",
          "pinyin": "cí27",
          "order": 7
        },
        {
          "id": "3b3e82c4-fa9a-4a78-8061-c874c7fa344b",
          "english": "anger",
          "chinese": "词28",
          "pinyin": "cí28",
          "order": 8
        },
        {
          "id": "d7259bc5-9a73-46b0-b1d0-728fc5ba02d2",
          "english": "angle",
          "chinese": "词29",
          "pinyin": "cí29",
          "order": 9
        }
      ]
    },
    {
      "id": "e0860b1a-2631-4e41-9757-4a1809ecf8b9",
      "name": "HSK 6 12",
      "description": "HSK 6 12 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "27a19630-269e-4274-a233-98be38c6662d",
          "english": "symmetry",
          "chinese": "对称",
          "pinyin": "duìchèn",
          "order": 0
        },
        {
          "id": "238f6667-55ea-4ef0-8a98-818db607d502",
          "english": "balance",
          "chinese": "平衡",
          "pinyin": "pínghéng",
          "order": 1
        },
        {
          "id": "f19130a7-a753-4d14-ad89-fe83bd04f8d4",
          "english": "equilibrium",
          "chinese": "均衡",
          "pinyin": "jūnhéng",
          "order": 2
        },
        {
          "id": "21d5c730-9ed3-4fe4-8e01-6f8c3630bfe6",
          "english": "stability",
          "chinese": "稳定性",
          "pinyin": "wěndìngxìng",
          "order": 3
        },
        {
          "id": "95881316-a342-4441-b387-126a2c14c9b9",
          "english": "instability",
          "chinese": "不稳定性",
          "pinyin": "bùwěndìngxìng",
          "order": 4
        },
        {
          "id": "cc923607-2fbe-41eb-bdd6-ad71b1cc6ae7",
          "english": "fluctuation",
          "chinese": "波动",
          "pinyin": "bōdòng",
          "order": 5
        },
        {
          "id": "762c7629-a7ba-46cf-ab06-2c253665dd31",
          "english": "oscillation",
          "chinese": "振荡",
          "pinyin": "zhèndàng",
          "order": 6
        },
        {
          "id": "f512c420-90bd-435e-9d9e-40e652b72ebe",
          "english": "vibration",
          "chinese": "振动",
          "pinyin": "zhèndòng",
          "order": 7
        },
        {
          "id": "67e30f60-4dd1-4171-beac-41b6918c8c9e",
          "english": "frequency",
          "chinese": "频率",
          "pinyin": "pínlǜ",
          "order": 8
        },
        {
          "id": "0098b439-e75e-4f1b-84c2-d73c85d46c08",
          "english": "wavelength",
          "chinese": "波长",
          "pinyin": "bōcháng",
          "order": 9
        }
      ]
    },
    {
      "id": "f0a31053-56b4-423f-bb6c-5870375cc8f5",
      "name": "HSK 6 13",
      "description": "HSK 6 13 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "9462a363-b059-419a-836d-c4d625dc3cc0",
          "english": "animal",
          "chinese": "词30",
          "pinyin": "cí30",
          "order": 0
        },
        {
          "id": "1d29ddf9-568e-4812-b081-985de33f8603",
          "english": "announce",
          "chinese": "词31",
          "pinyin": "cí31",
          "order": 1
        },
        {
          "id": "c5de59c4-1fee-49ec-afa0-e7c8064458dc",
          "english": "annual",
          "chinese": "词32",
          "pinyin": "cí32",
          "order": 2
        },
        {
          "id": "6633204f-fdb4-4d74-a441-ea9772846732",
          "english": "another",
          "chinese": "词33",
          "pinyin": "cí33",
          "order": 3
        },
        {
          "id": "6901801f-ab77-432a-9bb5-30637d6fc3fc",
          "english": "answer",
          "chinese": "词34",
          "pinyin": "cí34",
          "order": 4
        },
        {
          "id": "c3266a34-740b-4bc5-a35d-45946b4eaf59",
          "english": "anxiety",
          "chinese": "词35",
          "pinyin": "cí35",
          "order": 5
        },
        {
          "id": "e8f12965-3de5-4413-bf83-6e400090361b",
          "english": "anybody",
          "chinese": "词36",
          "pinyin": "cí36",
          "order": 6
        },
        {
          "id": "d6a0d080-53fd-4658-be29-15f3b5cbe7f1",
          "english": "anymore",
          "chinese": "词37",
          "pinyin": "cí37",
          "order": 7
        },
        {
          "id": "8c436cf8-c3b3-4c2a-831a-740176e9dac5",
          "english": "anyone",
          "chinese": "词38",
          "pinyin": "cí38",
          "order": 8
        },
        {
          "id": "d5452240-8bce-419e-b212-6b9e5fb1ff50",
          "english": "anything",
          "chinese": "词39",
          "pinyin": "cí39",
          "order": 9
        }
      ]
    },
    {
      "id": "1dbc5d3d-1e69-4661-9f30-9c5debbd3df1",
      "name": "HSK 6 13",
      "description": "HSK 6 13 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "e869f189-6706-4054-8986-94338a99b806",
          "english": "amplitude",
          "chinese": "振幅",
          "pinyin": "zhènfú",
          "order": 0
        },
        {
          "id": "8ebfaeb0-992f-467f-ad80-75a9e981957c",
          "english": "phase",
          "chinese": "相位",
          "pinyin": "xiàngwèi",
          "order": 1
        },
        {
          "id": "da959c8e-901d-4842-87a5-865ea9af67c7",
          "english": "interference",
          "chinese": "干涉",
          "pinyin": "gānshè",
          "order": 2
        },
        {
          "id": "f0e132bc-3361-42be-9e11-bb60a5a3f5b7",
          "english": "diffraction",
          "chinese": "衍射",
          "pinyin": "yǎnshè",
          "order": 3
        },
        {
          "id": "a907a9a0-7356-4ce8-a0a3-6cfdcdbb2496",
          "english": "refraction",
          "chinese": "折射",
          "pinyin": "zhéshè",
          "order": 4
        },
        {
          "id": "231c1de5-082e-4179-a1f9-649bc9aeab98",
          "english": "absorption",
          "chinese": "吸收",
          "pinyin": "xīshōu",
          "order": 5
        },
        {
          "id": "fcd60da7-bc38-44e1-baa6-56669eb1cbd6",
          "english": "emission",
          "chinese": "发射",
          "pinyin": "fāshè",
          "order": 6
        },
        {
          "id": "c94b6ec4-7f0f-48a3-9ff9-bf8dd0245872",
          "english": "radiation",
          "chinese": "辐射",
          "pinyin": "fúshè",
          "order": 7
        },
        {
          "id": "eee62e6f-35bf-4dde-831e-6ae9155b9de2",
          "english": "energy",
          "chinese": "能量",
          "pinyin": "néngliàng",
          "order": 8
        },
        {
          "id": "95680dd6-edce-4a0c-b937-fc8edef971ad",
          "english": "power",
          "chinese": "功率",
          "pinyin": "gōnglǜ",
          "order": 9
        }
      ]
    },
    {
      "id": "f1c4f81e-51bb-44ac-95b1-6598ee7d3979",
      "name": "HSK 6 14",
      "description": "HSK 6 14 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "2b8e4c91-5951-4745-8029-e0d7571c182b",
          "english": "anywhere",
          "chinese": "词40",
          "pinyin": "cí40",
          "order": 0
        },
        {
          "id": "a2d6e770-8363-4645-bfcb-648e965319f1",
          "english": "apartment",
          "chinese": "词41",
          "pinyin": "cí41",
          "order": 1
        },
        {
          "id": "4dc4f1ff-808c-49ac-acec-5c4618b5e642",
          "english": "apparent",
          "chinese": "词42",
          "pinyin": "cí42",
          "order": 2
        },
        {
          "id": "1ac06979-67bb-4f1d-9a1f-9ed1564ffe83",
          "english": "appear",
          "chinese": "词43",
          "pinyin": "cí43",
          "order": 3
        },
        {
          "id": "04c8d2e3-ef70-419f-aa83-30c15ff375da",
          "english": "application",
          "chinese": "词44",
          "pinyin": "cí44",
          "order": 4
        },
        {
          "id": "e3f45a39-38fa-4e8d-a42b-c8f92f0d773c",
          "english": "apply",
          "chinese": "词45",
          "pinyin": "cí45",
          "order": 5
        },
        {
          "id": "7fbf9c89-2cfb-40e1-9066-e044c9ffee08",
          "english": "approach",
          "chinese": "词46",
          "pinyin": "cí46",
          "order": 6
        },
        {
          "id": "7f362fa1-f83d-4ffe-a6d1-c3031b21ae17",
          "english": "appropriate",
          "chinese": "词47",
          "pinyin": "cí47",
          "order": 7
        },
        {
          "id": "861aa87a-73ef-4afa-a499-1f90ee7f79d2",
          "english": "approval",
          "chinese": "词48",
          "pinyin": "cí48",
          "order": 8
        },
        {
          "id": "e68be2b9-db92-4273-8bc2-f21bc642bb67",
          "english": "approve",
          "chinese": "词49",
          "pinyin": "cí49",
          "order": 9
        }
      ]
    },
    {
      "id": "00973534-f519-42fc-abe7-21deb2fc222e",
      "name": "HSK 6 14",
      "description": "HSK 6 14 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "e17555bf-9e25-4b4c-8b80-fd984ce2a0d3",
          "english": "force",
          "chinese": "力",
          "pinyin": "lì",
          "order": 0
        },
        {
          "id": "7b14d5f8-f9fa-4b16-b122-12951389f047",
          "english": "momentum",
          "chinese": "动量",
          "pinyin": "dòngliàng",
          "order": 1
        },
        {
          "id": "3946f732-6938-4919-a017-25d6ce7bde76",
          "english": "acceleration",
          "chinese": "加速度",
          "pinyin": "jiāsùdù",
          "order": 2
        },
        {
          "id": "958f5a8b-bdeb-4e6f-8071-ec1eafc3571a",
          "english": "velocity",
          "chinese": "速度",
          "pinyin": "sùdù",
          "order": 3
        },
        {
          "id": "de440bd1-787c-49bb-98ac-01d57b6f476c",
          "english": "distance",
          "chinese": "距离",
          "pinyin": "jùlí",
          "order": 4
        },
        {
          "id": "349ed20e-672c-4a8c-bf5c-3b4a845051ed",
          "english": "displacement",
          "chinese": "位移",
          "pinyin": "wèiyí",
          "order": 5
        },
        {
          "id": "fd3a31b6-97e8-49c9-a760-8d97f9e27909",
          "english": "time",
          "chinese": "时间",
          "pinyin": "shíjiān",
          "order": 6
        },
        {
          "id": "6956758e-0d53-46c1-8a9a-42b361973782",
          "english": "duration",
          "chinese": "持续时间",
          "pinyin": "chíxùshíjiān",
          "order": 7
        },
        {
          "id": "9238d6e5-ecfb-4662-a7c4-e56f00034a10",
          "english": "interval",
          "chinese": "间隔",
          "pinyin": "jiàngé",
          "order": 8
        },
        {
          "id": "812a010d-fbec-443d-b019-6a584bef762a",
          "english": "period",
          "chinese": "周期",
          "pinyin": "zhōuqī",
          "order": 9
        }
      ]
    },
    {
      "id": "b9dc16a5-978c-4778-ba5a-a4ec5bc687df",
      "name": "HSK 6 15",
      "description": "HSK 6 15 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "df3fb24f-5b54-447f-8513-7fd243ec886b",
          "english": "approximately",
          "chinese": "词50",
          "pinyin": "cí50",
          "order": 0
        },
        {
          "id": "ddb4d646-641e-4501-9a08-07af97908070",
          "english": "area",
          "chinese": "词51",
          "pinyin": "cí51",
          "order": 1
        },
        {
          "id": "357e1379-9638-4d95-994a-41949bcf06e2",
          "english": "argue",
          "chinese": "词52",
          "pinyin": "cí52",
          "order": 2
        },
        {
          "id": "1b28a50b-597a-4773-9407-a85850df57eb",
          "english": "argument",
          "chinese": "词53",
          "pinyin": "cí53",
          "order": 3
        },
        {
          "id": "b3e665ae-7898-4be6-9ee9-781ace547a24",
          "english": "arise",
          "chinese": "词54",
          "pinyin": "cí54",
          "order": 4
        },
        {
          "id": "25fdac08-efae-4c1a-8b60-7eb283301b69",
          "english": "around",
          "chinese": "词55",
          "pinyin": "cí55",
          "order": 5
        },
        {
          "id": "8a64c0c5-7e26-4d5f-92f7-660c12b2071e",
          "english": "arrange",
          "chinese": "词56",
          "pinyin": "cí56",
          "order": 6
        },
        {
          "id": "ea1db535-33f0-492d-a750-5444f289277d",
          "english": "arrangement",
          "chinese": "词57",
          "pinyin": "cí57",
          "order": 7
        },
        {
          "id": "5e9c1bad-abc5-4a00-ac26-274e7fa6bb3f",
          "english": "article",
          "chinese": "词58",
          "pinyin": "cí58",
          "order": 8
        },
        {
          "id": "d34daced-70e9-481e-8c01-bdc454b2f28b",
          "english": "artist",
          "chinese": "词59",
          "pinyin": "cí59",
          "order": 9
        }
      ]
    },
    {
      "id": "c8f0dc67-e215-440f-a8f0-64d535012c3c",
      "name": "HSK 6 15",
      "description": "HSK 6 15 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "6a5d84f0-84a5-40fb-b3e0-f83a90f38e95",
          "english": "cycle",
          "chinese": "循环",
          "pinyin": "xúnhuán",
          "order": 0
        },
        {
          "id": "a14c4437-6bd7-4d7a-991d-2e93e85a0ece",
          "english": "repetition",
          "chinese": "重复",
          "pinyin": "chóngfù",
          "order": 1
        },
        {
          "id": "12fd4d7a-7b12-4702-b6da-18bceac54dba",
          "english": "pattern",
          "chinese": "模式",
          "pinyin": "móshì",
          "order": 2
        },
        {
          "id": "bdbd1ebd-62b1-4c92-b803-0ebdacc10946",
          "english": "structure",
          "chinese": "结构",
          "pinyin": "jiégòu",
          "order": 3
        },
        {
          "id": "40f35dd9-3986-4891-abd9-0e24d9e59f50",
          "english": "framework",
          "chinese": "框架",
          "pinyin": "kuàngjiā",
          "order": 4
        },
        {
          "id": "f57eb0b7-72d2-4741-8b1f-33f2b570788f",
          "english": "architecture",
          "chinese": "架构",
          "pinyin": "jiàgòu",
          "order": 5
        },
        {
          "id": "4b7c4cab-1346-46ad-8136-03e3a4aa0880",
          "english": "design",
          "chinese": "设计",
          "pinyin": "shèjì",
          "order": 6
        },
        {
          "id": "a2c4c240-5102-4b75-aaeb-ab3e23e7b0a0",
          "english": "blueprint",
          "chinese": "蓝图",
          "pinyin": "lántú",
          "order": 7
        },
        {
          "id": "dafbfcee-7c84-4289-be0c-eab50c2afa54",
          "english": "plan",
          "chinese": "计划",
          "pinyin": "jìhuà",
          "order": 8
        },
        {
          "id": "d3929716-e888-49b0-81a9-0957434e71db",
          "english": "scheme",
          "chinese": "方案",
          "pinyin": "fāng'àn",
          "order": 9
        }
      ]
    },
    {
      "id": "ee91de73-4633-4926-9225-3fca181f6270",
      "name": "HSK 6 16",
      "description": "HSK 6 16 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "20b3925e-16f2-444c-be23-262cdb10919c",
          "english": "assume",
          "chinese": "词60",
          "pinyin": "cí60",
          "order": 0
        },
        {
          "id": "3392a754-92af-4d42-8673-51ace2847e28",
          "english": "assumption",
          "chinese": "词61",
          "pinyin": "cí61",
          "order": 1
        },
        {
          "id": "72d973df-b947-4a47-8ec4-4218e68ab694",
          "english": "attack",
          "chinese": "词62",
          "pinyin": "cí62",
          "order": 2
        },
        {
          "id": "9410c733-451c-4112-84e5-1bafe49fa3ea",
          "english": "attempt",
          "chinese": "词63",
          "pinyin": "cí63",
          "order": 3
        },
        {
          "id": "bd952a04-ae2f-41c1-aa7c-03bebbfb0e0b",
          "english": "attend",
          "chinese": "词64",
          "pinyin": "cí64",
          "order": 4
        },
        {
          "id": "7bd08357-7994-4c5a-833b-353bf518d04e",
          "english": "attention",
          "chinese": "词65",
          "pinyin": "cí65",
          "order": 5
        },
        {
          "id": "714be814-84b4-45ca-8e34-c6c228f82d1b",
          "english": "attitude",
          "chinese": "词66",
          "pinyin": "cí66",
          "order": 6
        },
        {
          "id": "96168ff0-5a98-4c17-8682-bb5af3034521",
          "english": "attract",
          "chinese": "词67",
          "pinyin": "cí67",
          "order": 7
        },
        {
          "id": "db7ba024-ca93-4087-ba63-3ce4ae739650",
          "english": "attractive",
          "chinese": "词68",
          "pinyin": "cí68",
          "order": 8
        },
        {
          "id": "7e93f9fd-244c-4d42-9081-0077931f7220",
          "english": "audience",
          "chinese": "词69",
          "pinyin": "cí69",
          "order": 9
        }
      ]
    },
    {
      "id": "f2935374-2ef2-43fe-9990-9c14fcb48aa5",
      "name": "HSK 6 16",
      "description": "HSK 6 16 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "441560e0-a931-418c-9285-3dff629a0675",
          "english": "strategy",
          "chinese": "策略",
          "pinyin": "cèlüè",
          "order": 0
        },
        {
          "id": "815fc7ec-2585-4354-a89b-376906c28a51",
          "english": "tactics",
          "chinese": "战术",
          "pinyin": "zhànshù",
          "order": 1
        },
        {
          "id": "eac536cc-6f51-4d6d-96cf-4a3b1a935caa",
          "english": "approach",
          "chinese": "方法",
          "pinyin": "fāngfǎ",
          "order": 2
        },
        {
          "id": "08f74814-da1a-4f38-9705-bb31d0fdf4a8",
          "english": "technique",
          "chinese": "技巧",
          "pinyin": "jìqiǎo",
          "order": 3
        },
        {
          "id": "4cc71850-c059-4f3b-8652-6e18d718240b",
          "english": "skill",
          "chinese": "技能",
          "pinyin": "jìnéng",
          "order": 4
        },
        {
          "id": "903df139-18fc-4a36-8946-e7e115235558",
          "english": "expertise",
          "chinese": "专门技能",
          "pinyin": "zhuānménjìnéng",
          "order": 5
        },
        {
          "id": "896ed76e-a7b4-49e8-afc1-fabc645760b0",
          "english": "specialization",
          "chinese": "专业化",
          "pinyin": "zhuānyèhuà",
          "order": 6
        },
        {
          "id": "25acda85-fb14-4bf0-a221-be78b50c95b4",
          "english": "profession",
          "chinese": "职业",
          "pinyin": "zhíyè",
          "order": 7
        },
        {
          "id": "25aadcf6-6ee7-44a9-b7cb-3a79b4b5d164",
          "english": "occupation",
          "chinese": "职业",
          "pinyin": "zhíyè",
          "order": 8
        },
        {
          "id": "9c432195-fa10-4f13-a470-74844d68a362",
          "english": "career",
          "chinese": "职业生涯",
          "pinyin": "zhíyèshēngyá",
          "order": 9
        }
      ]
    },
    {
      "id": "a1712946-c7c2-41b5-97f7-b28c98a3cb30",
      "name": "HSK 6 17",
      "description": "HSK 6 17 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "a5454606-9551-488a-8d62-189150277397",
          "english": "author",
          "chinese": "词70",
          "pinyin": "cí70",
          "order": 0
        },
        {
          "id": "8eadbc20-3be4-40ff-9d10-54c586f9b827",
          "english": "authority",
          "chinese": "词71",
          "pinyin": "cí71",
          "order": 1
        },
        {
          "id": "e822ce4e-6568-40c8-a68a-d24310e26d87",
          "english": "available",
          "chinese": "词72",
          "pinyin": "cí72",
          "order": 2
        },
        {
          "id": "24d45fd4-cbf0-4cb1-ac9b-ed7ba1b179f8",
          "english": "average",
          "chinese": "词73",
          "pinyin": "cí73",
          "order": 3
        },
        {
          "id": "fe91deea-a966-49d0-8525-8a1104afc894",
          "english": "avoid",
          "chinese": "词74",
          "pinyin": "cí74",
          "order": 4
        },
        {
          "id": "a512db55-bd43-4764-8a04-71517b1d335d",
          "english": "award",
          "chinese": "词75",
          "pinyin": "cí75",
          "order": 5
        },
        {
          "id": "a590682a-53a3-4297-a430-7f0e0867e3fb",
          "english": "aware",
          "chinese": "词76",
          "pinyin": "cí76",
          "order": 6
        },
        {
          "id": "a5480755-eb57-4a59-90ab-eb3ab973b87f",
          "english": "awareness",
          "chinese": "词77",
          "pinyin": "cí77",
          "order": 7
        },
        {
          "id": "7f599f00-5e04-4c1b-b58d-c7c7748a2647",
          "english": "background",
          "chinese": "词78",
          "pinyin": "cí78",
          "order": 8
        },
        {
          "id": "aa18a10e-fca6-4438-8c04-b8a23b998cd0",
          "english": "balance",
          "chinese": "词79",
          "pinyin": "cí79",
          "order": 9
        }
      ]
    },
    {
      "id": "b1059f89-cdd9-4512-afaa-43dcf978e2a9",
      "name": "HSK 6 17",
      "description": "HSK 6 17 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "0af194ea-eb39-438d-bfbd-594015b80402",
          "english": "vocation",
          "chinese": "职业",
          "pinyin": "zhíyè",
          "order": 0
        },
        {
          "id": "405694c0-42f0-40f8-84f2-57e90581a81d",
          "english": "calling",
          "chinese": "使命",
          "pinyin": "shǐmìng",
          "order": 1
        },
        {
          "id": "6fd743ab-a4dd-4b89-9d69-138704a30d20",
          "english": "mission",
          "chinese": "使命",
          "pinyin": "shǐmìng",
          "order": 2
        },
        {
          "id": "53326b5d-867f-44e5-baaf-37f845acf68f",
          "english": "purpose",
          "chinese": "目的",
          "pinyin": "mùdì",
          "order": 3
        },
        {
          "id": "c222dbdf-19ae-4560-b4c0-66c69dcea6ea",
          "english": "objective",
          "chinese": "目标",
          "pinyin": "mùbiāo",
          "order": 4
        },
        {
          "id": "3cfdecc9-8a38-413a-a8b1-1710739d3a28",
          "english": "goal",
          "chinese": "目标",
          "pinyin": "mùbiāo",
          "order": 5
        },
        {
          "id": "9d9e5f90-3bc1-460f-85f8-350f43984d4a",
          "english": "target",
          "chinese": "目标",
          "pinyin": "mùbiāo",
          "order": 6
        },
        {
          "id": "eb60e1c0-a1c0-41e9-8247-88cc4377bce0",
          "english": "aim",
          "chinese": "目标",
          "pinyin": "mùbiāo",
          "order": 7
        },
        {
          "id": "169a406f-6c2e-481d-863f-1c1b8fcb71a5",
          "english": "intention",
          "chinese": "意图",
          "pinyin": "yìtú",
          "order": 8
        },
        {
          "id": "f6e92648-ede9-4326-8463-be32448bdaf2",
          "english": "motive",
          "chinese": "动机",
          "pinyin": "dòngjī",
          "order": 9
        }
      ]
    },
    {
      "id": "4a07e731-0caf-4ca4-ab64-056989e3f604",
      "name": "HSK 6 18",
      "description": "HSK 6 18 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "1980f636-a6c0-4b73-a7b1-cd63d43bd9b7",
          "english": "reason",
          "chinese": "原因",
          "pinyin": "yuányīn",
          "order": 0
        },
        {
          "id": "e30285f2-7517-44d7-b13e-5e28284a8cf9",
          "english": "cause",
          "chinese": "原因",
          "pinyin": "yuányīn",
          "order": 1
        },
        {
          "id": "384c89ff-db40-448d-b6c3-ef4db3a332a5",
          "english": "effect",
          "chinese": "效果",
          "pinyin": "xiàoguǒ",
          "order": 2
        },
        {
          "id": "499454df-96f1-40bd-83a8-440db83825c1",
          "english": "consequence",
          "chinese": "后果",
          "pinyin": "hòuguǒ",
          "order": 3
        },
        {
          "id": "ec86ec46-0890-46b2-a0d4-149b7e2d576e",
          "english": "result",
          "chinese": "结果",
          "pinyin": "jiéguǒ",
          "order": 4
        },
        {
          "id": "ca24c9b5-1469-44b6-99bf-93542dd48423",
          "english": "outcome",
          "chinese": "结果",
          "pinyin": "jiéguǒ",
          "order": 5
        },
        {
          "id": "fe3529c2-3350-4ca4-88a1-0ac9747ff348",
          "english": "output",
          "chinese": "输出",
          "pinyin": "shūchū",
          "order": 6
        },
        {
          "id": "bab5e2f2-3643-4010-802e-75409a2f4b83",
          "english": "input",
          "chinese": "输入",
          "pinyin": "shūrù",
          "order": 7
        },
        {
          "id": "8a48ff6f-5cf6-470a-b488-376f95a7646c",
          "english": "process",
          "chinese": "过程",
          "pinyin": "guòchéng",
          "order": 8
        },
        {
          "id": "4fec3b89-609b-47a3-bd30-1a65ae62fcaf",
          "english": "procedure",
          "chinese": "程序",
          "pinyin": "chéngxù",
          "order": 9
        }
      ]
    },
    {
      "id": "a459ac0e-b57d-429a-94a9-d04fc2e29f53",
      "name": "HSK 6 18",
      "description": "HSK 6 18 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "e077c152-f63b-4392-a7b3-0df07240f335",
          "english": "basic",
          "chinese": "词80",
          "pinyin": "cí80",
          "order": 0
        },
        {
          "id": "8b0374d4-39a2-4d22-a4f5-f2bb0f3ab443",
          "english": "battle",
          "chinese": "词81",
          "pinyin": "cí81",
          "order": 1
        },
        {
          "id": "7bedd596-0c9f-437c-bc32-23b74b99a4cd",
          "english": "beautiful",
          "chinese": "词82",
          "pinyin": "cí82",
          "order": 2
        },
        {
          "id": "092e8f2f-39c2-4cea-8d21-eea5a0a9bab7",
          "english": "beauty",
          "chinese": "词83",
          "pinyin": "cí83",
          "order": 3
        },
        {
          "id": "cc75ebfe-5ed9-4b4b-ba69-8f83d01871c3",
          "english": "become",
          "chinese": "词84",
          "pinyin": "cí84",
          "order": 4
        },
        {
          "id": "0b62e00e-530d-4ce9-a660-cba03b1b09b8",
          "english": "bedroom",
          "chinese": "词85",
          "pinyin": "cí85",
          "order": 5
        },
        {
          "id": "07269357-2f62-47f5-9b5a-c24a0741844f",
          "english": "behavior",
          "chinese": "词86",
          "pinyin": "cí86",
          "order": 6
        },
        {
          "id": "e63311f7-264f-4bfe-936f-0b7b4ccb627f",
          "english": "behind",
          "chinese": "词87",
          "pinyin": "cí87",
          "order": 7
        },
        {
          "id": "fe6810ab-c43a-4b71-b9f9-aef3ebccafff",
          "english": "believe",
          "chinese": "词88",
          "pinyin": "cí88",
          "order": 8
        },
        {
          "id": "8d82ce1f-a810-4258-ba92-582c20dd157e",
          "english": "belong",
          "chinese": "词89",
          "pinyin": "cí89",
          "order": 9
        }
      ]
    },
    {
      "id": "0daabedb-2083-43fb-b84f-514c5f8be433",
      "name": "HSK 6 19",
      "description": "HSK 6 19 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "fbbc8c88-def7-47ac-9800-0af116316a6a",
          "english": "protocol",
          "chinese": "协议",
          "pinyin": "xiéyì",
          "order": 0
        },
        {
          "id": "03fce439-6bcc-4f15-87c4-73fcec86ee3d",
          "english": "standard",
          "chinese": "标准",
          "pinyin": "biāozhǔn",
          "order": 1
        },
        {
          "id": "9a759670-151b-4608-9663-f06869dcba6f",
          "english": "norm",
          "chinese": "标准",
          "pinyin": "biāozhǔn",
          "order": 2
        },
        {
          "id": "9b1819eb-5214-4e9c-891b-e0cf5b4b0f9a",
          "english": "convention",
          "chinese": "惯例",
          "pinyin": "guànlì",
          "order": 3
        },
        {
          "id": "6e4ac7b5-6e72-4c29-9121-5595002d2046",
          "english": "tradition",
          "chinese": "传统",
          "pinyin": "chuántǒng",
          "order": 4
        },
        {
          "id": "6878e95b-a72b-4b58-9f64-22d85fbb82eb",
          "english": "custom",
          "chinese": "习俗",
          "pinyin": "xísú",
          "order": 5
        },
        {
          "id": "28725285-8b52-4351-b4a2-8268723840cc",
          "english": "habit",
          "chinese": "习惯",
          "pinyin": "xíguàn",
          "order": 6
        },
        {
          "id": "7bfb8a0f-51fd-44fc-b7ee-13252e0fc69a",
          "english": "routine",
          "chinese": "例行公事",
          "pinyin": "lìxínggōngshì",
          "order": 7
        },
        {
          "id": "a3f8632d-f358-4b82-81be-d9523c3b2f5e",
          "english": "ritual",
          "chinese": "仪式",
          "pinyin": "yíshì",
          "order": 8
        },
        {
          "id": "d8e87610-08df-4664-9893-1cf4f3b08fd8",
          "english": "ceremony",
          "chinese": "典礼",
          "pinyin": "diǎnlǐ",
          "order": 9
        }
      ]
    },
    {
      "id": "c0c440f1-bdea-4080-b8db-1a25729a9b17",
      "name": "HSK 6 19",
      "description": "HSK 6 19 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "d7bbac46-a3ed-4326-bc21-366fb93cf2f0",
          "english": "benefit",
          "chinese": "词90",
          "pinyin": "cí90",
          "order": 0
        },
        {
          "id": "e9770cf7-990d-42c2-bd59-71b3dfa79b41",
          "english": "beside",
          "chinese": "词91",
          "pinyin": "cí91",
          "order": 1
        },
        {
          "id": "9b485502-58bc-4176-b95c-9db7916c378e",
          "english": "beyond",
          "chinese": "词92",
          "pinyin": "cí92",
          "order": 2
        },
        {
          "id": "60ef563e-6d9c-4396-8bea-ce4525e656fc",
          "english": "bicycle",
          "chinese": "词93",
          "pinyin": "cí93",
          "order": 3
        },
        {
          "id": "4788ef7d-b1f8-4ea2-94fa-bb3fde4b106a",
          "english": "billion",
          "chinese": "词94",
          "pinyin": "cí94",
          "order": 4
        },
        {
          "id": "cae527e7-91ef-46cf-ba79-7122909f6515",
          "english": "birth",
          "chinese": "词95",
          "pinyin": "cí95",
          "order": 5
        },
        {
          "id": "53f773ce-986d-4f36-b938-497858c4b280",
          "english": "birthday",
          "chinese": "词96",
          "pinyin": "cí96",
          "order": 6
        },
        {
          "id": "42ff5ff2-ff5a-4f7d-af7d-809c6dd839a3",
          "english": "blame",
          "chinese": "词97",
          "pinyin": "cí97",
          "order": 7
        },
        {
          "id": "9df8c62e-7ed0-42b8-9eef-f98e236bcbf0",
          "english": "block",
          "chinese": "词98",
          "pinyin": "cí98",
          "order": 8
        },
        {
          "id": "6bf7fc25-8ebc-449a-a61d-6677a0805ae5",
          "english": "blood",
          "chinese": "词99",
          "pinyin": "cí99",
          "order": 9
        }
      ]
    },
    {
      "id": "aacc49c5-555f-4ceb-aa98-c9aa0bac902c",
      "name": "HSK 6 2",
      "description": "HSK 6 2 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "3ce88838-500d-4744-9ad8-5278c5808897",
          "english": "specification",
          "chinese": "规格",
          "pinyin": "guīgé",
          "order": 0
        },
        {
          "id": "0051d838-022e-4508-a10c-58197e0d0c90",
          "english": "criterion",
          "chinese": "标准",
          "pinyin": "biāozhǔn",
          "order": 1
        },
        {
          "id": "f0f95d6b-5ea7-433b-b802-9c778e2e0518",
          "english": "benchmark",
          "chinese": "基准",
          "pinyin": "jīzhǔn",
          "order": 2
        },
        {
          "id": "35f520c1-7e66-4797-aa51-e8ff314a8fa3",
          "english": "indicator",
          "chinese": "指标",
          "pinyin": "zhǐbiāo",
          "order": 3
        },
        {
          "id": "481d0f85-647a-4dea-8499-3227b435d9f1",
          "english": "measurement",
          "chinese": "测量",
          "pinyin": "cèliáng",
          "order": 4
        },
        {
          "id": "14c69ac3-4e4d-4f93-af1e-badab9525fc9",
          "english": "evaluation",
          "chinese": "评估",
          "pinyin": "pínggū",
          "order": 5
        },
        {
          "id": "284c62b5-b63b-4bce-931b-8878892307aa",
          "english": "assessment",
          "chinese": "评价",
          "pinyin": "píngjià",
          "order": 6
        },
        {
          "id": "c026b4fb-4ab9-4a7a-b268-4c7f14edde0a",
          "english": "appraisal",
          "chinese": "评估",
          "pinyin": "pínggū",
          "order": 7
        },
        {
          "id": "1ee7f4a7-c3c9-4c58-8d50-7fdd96f5a8c6",
          "english": "estimation",
          "chinese": "估计",
          "pinyin": "gūjì",
          "order": 8
        },
        {
          "id": "892a8b1f-46d1-404e-ba21-0235ba172e48",
          "english": "calculation",
          "chinese": "计算",
          "pinyin": "jìsuàn",
          "order": 9
        }
      ]
    },
    {
      "id": "ce88d672-6120-4a34-b1b4-011804624f8a",
      "name": "HSK 6 20",
      "description": "HSK 6 20 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "64831f7b-9d27-4e3a-8b24-9384c6528f36",
          "english": "celebration",
          "chinese": "庆祝",
          "pinyin": "qìngzhù",
          "order": 0
        },
        {
          "id": "130a55f4-cf2a-4ccc-96e0-0ff909cd2b52",
          "english": "festival",
          "chinese": "节日",
          "pinyin": "jiérì",
          "order": 1
        },
        {
          "id": "2670d521-e42c-40cb-aee8-2bfe8b66ef55",
          "english": "event",
          "chinese": "事件",
          "pinyin": "shìjiàn",
          "order": 2
        },
        {
          "id": "b28430a3-d28b-48a6-9324-047f89d308b2",
          "english": "occurrence",
          "chinese": "发生",
          "pinyin": "fāshēng",
          "order": 3
        },
        {
          "id": "6797099b-69b1-456e-b2dd-3378980ed343",
          "english": "incident",
          "chinese": "事件",
          "pinyin": "shìjiàn",
          "order": 4
        },
        {
          "id": "590e9325-eed1-4cb7-aa90-8e33c15e4d30",
          "english": "accident",
          "chinese": "事故",
          "pinyin": "shìgù",
          "order": 5
        },
        {
          "id": "fe755a38-21fe-4573-b030-5ccda7e88854",
          "english": "emergency",
          "chinese": "紧急情况",
          "pinyin": "jǐnjíqíngkuàng",
          "order": 6
        },
        {
          "id": "b262fc94-9f2a-4a6c-930f-f13cee79d559",
          "english": "crisis",
          "chinese": "危机",
          "pinyin": "wēijī",
          "order": 7
        },
        {
          "id": "76846bb7-9f91-4bcb-924b-90716ab658fd",
          "english": "disaster",
          "chinese": "灾难",
          "pinyin": "zāinàn",
          "order": 8
        },
        {
          "id": "6321031c-9b96-48b0-9303-008b0562312f",
          "english": "catastrophe",
          "chinese": "大灾难",
          "pinyin": "dàzāinàn",
          "order": 9
        }
      ]
    },
    {
      "id": "58192db3-4f77-49be-a18b-e669325c91de",
      "name": "HSK 6 20",
      "description": "HSK 6 20 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "2d40be10-ebae-4125-85a9-093b62714d6a",
          "english": "board",
          "chinese": "词100",
          "pinyin": "cí100",
          "order": 0
        },
        {
          "id": "69923c16-2dd7-49c4-af26-ac90a90b7bd0",
          "english": "body",
          "chinese": "词101",
          "pinyin": "cí101",
          "order": 1
        },
        {
          "id": "38da7a4a-69d4-448d-a894-94a49b1fbfe8",
          "english": "border",
          "chinese": "词102",
          "pinyin": "cí102",
          "order": 2
        },
        {
          "id": "bd0bd0cc-f239-4508-86e0-328052383b0f",
          "english": "born",
          "chinese": "词103",
          "pinyin": "cí103",
          "order": 3
        },
        {
          "id": "43c44ab7-48de-4623-b5a2-c6192c19cec9",
          "english": "bottle",
          "chinese": "词104",
          "pinyin": "cí104",
          "order": 4
        },
        {
          "id": "e6f2e1d9-8d84-4f02-a2e8-367084ee6646",
          "english": "bottom",
          "chinese": "词105",
          "pinyin": "cí105",
          "order": 5
        },
        {
          "id": "9ff07e04-09c3-4e41-9fa1-2c6867e6348a",
          "english": "brain",
          "chinese": "词106",
          "pinyin": "cí106",
          "order": 6
        },
        {
          "id": "c078e448-93e4-4cd8-b49c-dc7fa803d029",
          "english": "branch",
          "chinese": "词107",
          "pinyin": "cí107",
          "order": 7
        },
        {
          "id": "a341b9d4-cc2a-437c-853e-078e2507a77b",
          "english": "brand",
          "chinese": "词108",
          "pinyin": "cí108",
          "order": 8
        },
        {
          "id": "4cde1129-3aff-4c9a-a4b5-4ee3f4556b44",
          "english": "brave",
          "chinese": "词109",
          "pinyin": "cí109",
          "order": 9
        }
      ]
    },
    {
      "id": "436c1107-4ca0-4778-bd98-a9840570ac4f",
      "name": "HSK 6 21",
      "description": "HSK 6 21 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "bd043a3c-71bd-48f5-8fb2-42f77c4e8460",
          "english": "bread",
          "chinese": "词110",
          "pinyin": "cí110",
          "order": 0
        },
        {
          "id": "df22cf83-c3b2-4a27-8052-9ee9b1c5a6b6",
          "english": "break",
          "chinese": "词111",
          "pinyin": "cí111",
          "order": 1
        },
        {
          "id": "9ce50504-9e90-44ef-976e-826e87f38ad5",
          "english": "breakfast",
          "chinese": "词112",
          "pinyin": "cí112",
          "order": 2
        },
        {
          "id": "27cd6560-e285-4239-9e2d-2c1bfab7a268",
          "english": "breath",
          "chinese": "词113",
          "pinyin": "cí113",
          "order": 3
        },
        {
          "id": "b06572f3-52ba-4908-b4c2-7fb119ed9acf",
          "english": "bridge",
          "chinese": "词114",
          "pinyin": "cí114",
          "order": 4
        },
        {
          "id": "c623ae02-131b-412b-9a3f-04118a785474",
          "english": "brief",
          "chinese": "词115",
          "pinyin": "cí115",
          "order": 5
        },
        {
          "id": "4f441075-17d5-4c79-8c1c-9a1eb036defa",
          "english": "bright",
          "chinese": "词116",
          "pinyin": "cí116",
          "order": 6
        },
        {
          "id": "9f6f711a-4743-40cf-84e9-f25bbf3eccf0",
          "english": "bring",
          "chinese": "词117",
          "pinyin": "cí117",
          "order": 7
        },
        {
          "id": "237b763a-c518-4fd3-a44d-178e31070ea7",
          "english": "broad",
          "chinese": "词118",
          "pinyin": "cí118",
          "order": 8
        },
        {
          "id": "84b25988-7902-49ad-9287-ec026ddd6ccb",
          "english": "brother",
          "chinese": "词119",
          "pinyin": "cí119",
          "order": 9
        }
      ]
    },
    {
      "id": "7a2074bb-d09d-468a-94f7-9792da227473",
      "name": "HSK 6 21",
      "description": "HSK 6 21 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "74ea205c-5ec3-433f-980a-c213727bcf15",
          "english": "tragedy",
          "chinese": "悲剧",
          "pinyin": "bēijù",
          "order": 0
        },
        {
          "id": "9d755a76-38b2-434c-8f7f-932fb01fd640",
          "english": "comedy",
          "chinese": "喜剧",
          "pinyin": "xǐjù",
          "order": 1
        },
        {
          "id": "1b5ece44-296b-4581-b939-8a1495165893",
          "english": "drama",
          "chinese": "戏剧",
          "pinyin": "xìjù",
          "order": 2
        },
        {
          "id": "9707a160-4ac4-4d86-ae41-be90a334f541",
          "english": "theater",
          "chinese": "剧院",
          "pinyin": "jùyuàn",
          "order": 3
        },
        {
          "id": "5238069a-2120-4b33-9ebf-4bcf4cf4e829",
          "english": "performance",
          "chinese": "表演",
          "pinyin": "biǎoyǎn",
          "order": 4
        },
        {
          "id": "5c1c26da-9bf3-4e6d-b020-9cd5c5c24f61",
          "english": "show",
          "chinese": "演出",
          "pinyin": "yǎnchū",
          "order": 5
        },
        {
          "id": "3ce7de10-9c2a-490c-83f9-3baaa3862a5f",
          "english": "exhibition",
          "chinese": "展览",
          "pinyin": "zhǎnlǎn",
          "order": 6
        },
        {
          "id": "bcad8d9b-11a4-42db-bd3c-26338c1a7188",
          "english": "display",
          "chinese": "展示",
          "pinyin": "zhǎnshì",
          "order": 7
        },
        {
          "id": "7cfb0733-019f-4650-913f-395d23649b37",
          "english": "presentation",
          "chinese": "演示",
          "pinyin": "yǎnshì",
          "order": 8
        },
        {
          "id": "c67359d7-0957-40fa-ad1f-1e8ed598d5a2",
          "english": "demonstration",
          "chinese": "示范",
          "pinyin": "shìfàn",
          "order": 9
        }
      ]
    },
    {
      "id": "71134427-6e5f-4503-be8c-503ea97cce13",
      "name": "HSK 6 22",
      "description": "HSK 6 22 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "f399a51d-fef9-4b42-817c-57802539a290",
          "english": "illustration",
          "chinese": "说明",
          "pinyin": "shuōmíng",
          "order": 0
        },
        {
          "id": "4af3ec8d-31ab-4bda-ba4f-4eec19a69f69",
          "english": "explanation",
          "chinese": "解释",
          "pinyin": "jiěshì",
          "order": 1
        },
        {
          "id": "21d447d7-3817-4810-b759-2cc66d48d3ad",
          "english": "description",
          "chinese": "描述",
          "pinyin": "miáoshù",
          "order": 2
        },
        {
          "id": "aafffebf-0f21-47f3-bd75-29348e3792be",
          "english": "definition",
          "chinese": "定义",
          "pinyin": "dìngyì",
          "order": 3
        },
        {
          "id": "f0e300e6-e7c2-4fff-b689-a7b52718eece",
          "english": "clarification",
          "chinese": "澄清",
          "pinyin": "chéngqīng",
          "order": 4
        },
        {
          "id": "cdc58042-1b40-48ab-aa31-63429e353c95",
          "english": "interpretation",
          "chinese": "解释",
          "pinyin": "jiěshì",
          "order": 5
        },
        {
          "id": "7b2ef151-1a4c-4d31-9106-9f0055ba00a9",
          "english": "understanding",
          "chinese": "理解",
          "pinyin": "lǐjiě",
          "order": 6
        },
        {
          "id": "923cb8ec-960c-4c9a-a9c2-3d56fa76b7de",
          "english": "comprehension",
          "chinese": "理解",
          "pinyin": "lǐjiě",
          "order": 7
        },
        {
          "id": "c06ac212-f500-49a0-a4e0-3cce617c462c",
          "english": "knowledge",
          "chinese": "知识",
          "pinyin": "zhīshi",
          "order": 8
        },
        {
          "id": "8887e603-13b8-4528-bf38-858e19c6dc9a",
          "english": "wisdom",
          "chinese": "智慧",
          "pinyin": "zhìhuì",
          "order": 9
        }
      ]
    },
    {
      "id": "9e33e769-45b6-4849-8ea7-64c4e2255da4",
      "name": "HSK 6 22",
      "description": "HSK 6 22 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "50439f29-41bc-48bd-a90d-d0a142c1492f",
          "english": "budget",
          "chinese": "词120",
          "pinyin": "cí120",
          "order": 0
        },
        {
          "id": "897e264d-c4ed-4bad-b1a5-b3342f96d2f6",
          "english": "build",
          "chinese": "词121",
          "pinyin": "cí121",
          "order": 1
        },
        {
          "id": "b61c05fc-74f0-4dcc-8325-896278a5b449",
          "english": "building",
          "chinese": "词122",
          "pinyin": "cí122",
          "order": 2
        },
        {
          "id": "f1741eb1-a2f9-4773-8181-dc3b360cc531",
          "english": "business",
          "chinese": "词123",
          "pinyin": "cí123",
          "order": 3
        },
        {
          "id": "58175a5b-fee9-4b4b-afe6-9f7c0ee81f6d",
          "english": "button",
          "chinese": "词124",
          "pinyin": "cí124",
          "order": 4
        },
        {
          "id": "e039ded0-fe58-4d2f-bd78-f4d47b4982da",
          "english": "buyer",
          "chinese": "词125",
          "pinyin": "cí125",
          "order": 5
        },
        {
          "id": "8918907e-8692-4acb-a920-16863b017f7b",
          "english": "camera",
          "chinese": "词126",
          "pinyin": "cí126",
          "order": 6
        },
        {
          "id": "93e30ede-4e88-4129-a8a4-b36937eef053",
          "english": "campaign",
          "chinese": "词127",
          "pinyin": "cí127",
          "order": 7
        },
        {
          "id": "065c249c-407b-46e0-805c-c6da1cfe39eb",
          "english": "campus",
          "chinese": "词128",
          "pinyin": "cí128",
          "order": 8
        },
        {
          "id": "0c4f7b45-81ae-4703-9739-a86c9edb7b08",
          "english": "cancer",
          "chinese": "词129",
          "pinyin": "cí129",
          "order": 9
        }
      ]
    },
    {
      "id": "75bb2746-c17c-404a-afdd-cba8481d7b07",
      "name": "HSK 6 23",
      "description": "HSK 6 23 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "e8a43fa0-2648-4c8a-84dd-18c7a09c3e92",
          "english": "candidate",
          "chinese": "词130",
          "pinyin": "cí130",
          "order": 0
        },
        {
          "id": "bb30553c-670a-4f4d-9af7-8364ee3b043e",
          "english": "capable",
          "chinese": "词131",
          "pinyin": "cí131",
          "order": 1
        },
        {
          "id": "1180ee6d-9a9e-4b0f-bdf8-382dc8ee5a50",
          "english": "capacity",
          "chinese": "词132",
          "pinyin": "cí132",
          "order": 2
        },
        {
          "id": "a4daa042-3248-4dce-964b-9ddbe2dc7e85",
          "english": "capital",
          "chinese": "词133",
          "pinyin": "cí133",
          "order": 3
        },
        {
          "id": "87119323-ac0e-41fe-84bd-b6130c303017",
          "english": "captain",
          "chinese": "词134",
          "pinyin": "cí134",
          "order": 4
        },
        {
          "id": "070ff3b5-6407-41a8-93f0-316188c0798a",
          "english": "capture",
          "chinese": "词135",
          "pinyin": "cí135",
          "order": 5
        },
        {
          "id": "a1679f16-ccab-4d8d-8d53-64aa66f5bfcf",
          "english": "carbon",
          "chinese": "词136",
          "pinyin": "cí136",
          "order": 6
        },
        {
          "id": "1859b377-e8d4-4695-9eb6-6e01041da201",
          "english": "career",
          "chinese": "词137",
          "pinyin": "cí137",
          "order": 7
        },
        {
          "id": "d2bdebff-2c0d-4d83-996b-9ccc464de084",
          "english": "careful",
          "chinese": "词138",
          "pinyin": "cí138",
          "order": 8
        },
        {
          "id": "a7353bc2-f44b-4a32-8d72-8ed4436cf643",
          "english": "carry",
          "chinese": "词139",
          "pinyin": "cí139",
          "order": 9
        }
      ]
    },
    {
      "id": "9f540853-6c37-4dd5-b926-6484ab1a1480",
      "name": "HSK 6 23",
      "description": "HSK 6 23 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "035f0c90-a86a-42a8-bb5b-ab027ba20306",
          "english": "intelligence",
          "chinese": "智力",
          "pinyin": "zhìlì",
          "order": 0
        },
        {
          "id": "6f2ef2e2-84f7-4565-b777-f1a82664904e",
          "english": "intellect",
          "chinese": "智力",
          "pinyin": "zhìlì",
          "order": 1
        },
        {
          "id": "05d8653e-b54c-4507-a1bd-4b554cd049c6",
          "english": "mind",
          "chinese": "心智",
          "pinyin": "xīnzhì",
          "order": 2
        },
        {
          "id": "1b86550e-94a9-4831-bb0d-e7cb217f657d",
          "english": "brain",
          "chinese": "大脑",
          "pinyin": "dànǎo",
          "order": 3
        },
        {
          "id": "d39a83d2-10ef-43b8-83e4-8c53fe51924b",
          "english": "thought",
          "chinese": "思想",
          "pinyin": "sīxiǎng",
          "order": 4
        },
        {
          "id": "9921a4d5-9092-4596-9cfb-314332e253ac",
          "english": "idea",
          "chinese": "想法",
          "pinyin": "xiǎngfǎ",
          "order": 5
        },
        {
          "id": "cf4b7b9b-bc8c-4984-bcb9-c15a473c78ad",
          "english": "concept",
          "chinese": "概念",
          "pinyin": "gàiniàn",
          "order": 6
        },
        {
          "id": "6bce8ada-41fb-4e6d-a0fa-a4e5cf66a2f8",
          "english": "notion",
          "chinese": "概念",
          "pinyin": "gàiniàn",
          "order": 7
        },
        {
          "id": "bb4cf453-b8a5-4ad7-9e31-0ecfce6964a1",
          "english": "impression",
          "chinese": "印象",
          "pinyin": "yìnxiàng",
          "order": 8
        },
        {
          "id": "2d8e0818-d4db-4b7f-b6e9-8f5f78f2397f",
          "english": "perception",
          "chinese": "感知",
          "pinyin": "gǎnzhī",
          "order": 9
        }
      ]
    },
    {
      "id": "9d81c88f-f3fe-4e41-8873-71987cacedeb",
      "name": "HSK 6 24",
      "description": "HSK 6 24 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "f0a81fac-c451-4738-b080-7ac59cd4363c",
          "english": "category",
          "chinese": "词140",
          "pinyin": "cí140",
          "order": 0
        },
        {
          "id": "80ae92a0-fdbf-4e01-8f4a-60f7726e754f",
          "english": "cause",
          "chinese": "词141",
          "pinyin": "cí141",
          "order": 1
        },
        {
          "id": "fd18e5d7-acf4-4c7c-a878-fd52ad0345cf",
          "english": "celebrate",
          "chinese": "词142",
          "pinyin": "cí142",
          "order": 2
        },
        {
          "id": "27fcc06a-3488-42a5-a9f0-c67473d88d57",
          "english": "celebration",
          "chinese": "词143",
          "pinyin": "cí143",
          "order": 3
        },
        {
          "id": "5b416ee5-5c02-4142-9655-29151373a147",
          "english": "center",
          "chinese": "词144",
          "pinyin": "cí144",
          "order": 4
        },
        {
          "id": "fae3fd10-a581-4914-ab25-188be59e42ab",
          "english": "central",
          "chinese": "词145",
          "pinyin": "cí145",
          "order": 5
        },
        {
          "id": "83d1284f-9718-4b4c-94f9-43700d5c1f03",
          "english": "century",
          "chinese": "词146",
          "pinyin": "cí146",
          "order": 6
        },
        {
          "id": "0fd50c3e-3663-4689-8cfa-d42eaabdd72e",
          "english": "ceremony",
          "chinese": "词147",
          "pinyin": "cí147",
          "order": 7
        },
        {
          "id": "97e026b1-94ca-447f-87d6-364ab63283f8",
          "english": "certain",
          "chinese": "词148",
          "pinyin": "cí148",
          "order": 8
        },
        {
          "id": "e92f4fc6-c4ca-4261-92f4-1b6d5e2fac36",
          "english": "certainly",
          "chinese": "词149",
          "pinyin": "cí149",
          "order": 9
        }
      ]
    },
    {
      "id": "a68fe807-9290-40c9-88a2-05a8d047bd6b",
      "name": "HSK 6 24",
      "description": "HSK 6 24 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "61f03c89-7f71-41f7-8d4c-79c385063223",
          "english": "awareness",
          "chinese": "意识",
          "pinyin": "yìshí",
          "order": 0
        },
        {
          "id": "f3241671-1edd-483d-9b03-7276a3f0dc46",
          "english": "consciousness",
          "chinese": "意识",
          "pinyin": "yìshí",
          "order": 1
        },
        {
          "id": "f6f4a4c4-2f00-4ea0-a233-0d78ac139ae8",
          "english": "recognition",
          "chinese": "认识",
          "pinyin": "rènshi",
          "order": 2
        },
        {
          "id": "d15d373b-83b2-47b1-93cf-c7c9c84e0789",
          "english": "realization",
          "chinese": "认识",
          "pinyin": "rènshi",
          "order": 3
        },
        {
          "id": "c5a3a6c9-d2c7-48f1-8015-4cd21806a449",
          "english": "discovery",
          "chinese": "发现",
          "pinyin": "fāxiàn",
          "order": 4
        },
        {
          "id": "0f9cba86-2dd1-4638-9e08-8225ab10c3b4",
          "english": "invention",
          "chinese": "发明",
          "pinyin": "fāmíng",
          "order": 5
        },
        {
          "id": "76e979cc-9892-4f9d-8091-224ba15fdc87",
          "english": "creation",
          "chinese": "创造",
          "pinyin": "chuàngzào",
          "order": 6
        },
        {
          "id": "d4277f47-5bac-4435-8b20-714905bba299",
          "english": "innovation",
          "chinese": "创新",
          "pinyin": "chuàngxīn",
          "order": 7
        },
        {
          "id": "d1fa82ed-3a63-4766-b4be-e122cf21816b",
          "english": "originality",
          "chinese": "独创性",
          "pinyin": "dúchuàngxìng",
          "order": 8
        },
        {
          "id": "5a906617-1f4a-4205-9a74-141296b6feb0",
          "english": "creativity",
          "chinese": "创造力",
          "pinyin": "chuàngzàolì",
          "order": 9
        }
      ]
    },
    {
      "id": "bb7e46bc-9746-46eb-8f7c-459a8458282a",
      "name": "HSK 6 25",
      "description": "HSK 6 25 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "38d11e09-69b1-43cf-a2b3-0e42f61eeb1a",
          "english": "imagination",
          "chinese": "想象力",
          "pinyin": "xiǎngxiànglì",
          "order": 0
        },
        {
          "id": "b3f07e69-8261-424d-afd6-c78db2b841dd",
          "english": "fantasy",
          "chinese": "幻想",
          "pinyin": "huànxiǎng",
          "order": 1
        },
        {
          "id": "0059ccaa-8c5c-47c6-a396-683b20733131",
          "english": "vision",
          "chinese": "愿景",
          "pinyin": "yuànjǐng",
          "order": 2
        },
        {
          "id": "42a2b7b0-615f-4914-b35a-d6220fc05f15",
          "english": "dream",
          "chinese": "梦想",
          "pinyin": "mèngxiǎng",
          "order": 3
        },
        {
          "id": "2d2646d1-b11a-4c92-aadf-26ba04e47a2a",
          "english": "aspiration",
          "chinese": "愿望",
          "pinyin": "yuànwàng",
          "order": 4
        },
        {
          "id": "878077a3-cfb3-432a-b1d5-342e6a701692",
          "english": "ambition",
          "chinese": "雄心",
          "pinyin": "xióngxīn",
          "order": 5
        },
        {
          "id": "1986e492-6220-47cd-b055-1d5503174a90",
          "english": "desire",
          "chinese": "欲望",
          "pinyin": "yùwàng",
          "order": 6
        },
        {
          "id": "ed3c4542-773c-40cd-aad3-c09b8722c9b6",
          "english": "wish",
          "chinese": "愿望",
          "pinyin": "yuànwàng",
          "order": 7
        },
        {
          "id": "b594ffbb-f7b1-4eb1-aaa8-0aa4233602e5",
          "english": "hope",
          "chinese": "希望",
          "pinyin": "xīwàng",
          "order": 8
        },
        {
          "id": "416af62b-7315-4935-aaea-47da44f786b5",
          "english": "expectation",
          "chinese": "期望",
          "pinyin": "qīwàng",
          "order": 9
        }
      ]
    },
    {
      "id": "c290a281-f396-49ca-8820-7da16e1781c1",
      "name": "HSK 6 25",
      "description": "HSK 6 25 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "1a8c4bbe-a89d-473e-bf11-8adb99745bac",
          "english": "chain",
          "chinese": "词150",
          "pinyin": "cí150",
          "order": 0
        },
        {
          "id": "6b896962-57f2-4864-9bb6-17bfbb069f6c",
          "english": "chair",
          "chinese": "词151",
          "pinyin": "cí151",
          "order": 1
        },
        {
          "id": "12b7a98b-e37a-45e6-be29-c433e6ee560b",
          "english": "chairman",
          "chinese": "词152",
          "pinyin": "cí152",
          "order": 2
        },
        {
          "id": "2ffa01ff-59f0-4900-aa04-537e1459a049",
          "english": "challenge",
          "chinese": "词153",
          "pinyin": "cí153",
          "order": 3
        },
        {
          "id": "58eb1568-25b1-41c8-bbcc-76e4c9654886",
          "english": "champion",
          "chinese": "词154",
          "pinyin": "cí154",
          "order": 4
        },
        {
          "id": "e708777f-967f-49c1-80a3-7b93c0f32a24",
          "english": "chance",
          "chinese": "词155",
          "pinyin": "cí155",
          "order": 5
        },
        {
          "id": "11af5905-938d-40a5-9008-e2f6c4b2768f",
          "english": "change",
          "chinese": "词156",
          "pinyin": "cí156",
          "order": 6
        },
        {
          "id": "381a4840-37c8-454f-adeb-81858aed81db",
          "english": "channel",
          "chinese": "词157",
          "pinyin": "cí157",
          "order": 7
        },
        {
          "id": "d62486ad-fedc-46c9-80ea-7347280b92f9",
          "english": "chapter",
          "chinese": "词158",
          "pinyin": "cí158",
          "order": 8
        },
        {
          "id": "55a390ed-e50e-4efd-a524-a2ea2c914b3d",
          "english": "character",
          "chinese": "词159",
          "pinyin": "cí159",
          "order": 9
        }
      ]
    },
    {
      "id": "5b78463a-c859-45c8-99e3-2998c9e1bae8",
      "name": "HSK 6 26",
      "description": "HSK 6 26 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "d0a2a91d-6b19-4d05-a2ea-3fea21445b91",
          "english": "charge",
          "chinese": "词160",
          "pinyin": "cí160",
          "order": 0
        },
        {
          "id": "36627b75-1419-4ac3-8f17-e5456403eadb",
          "english": "charity",
          "chinese": "词161",
          "pinyin": "cí161",
          "order": 1
        },
        {
          "id": "5c63cf5e-c8b4-4c00-90fe-aa1f75adac27",
          "english": "chart",
          "chinese": "词162",
          "pinyin": "cí162",
          "order": 2
        },
        {
          "id": "0f504064-a609-4d60-9270-6b0f9e979f55",
          "english": "cheap",
          "chinese": "词163",
          "pinyin": "cí163",
          "order": 3
        },
        {
          "id": "f073f5e0-4899-451d-8d4b-5f504e20f34a",
          "english": "check",
          "chinese": "词164",
          "pinyin": "cí164",
          "order": 4
        },
        {
          "id": "c97685cc-cc64-47e0-be89-7e6dd8336f4e",
          "english": "chemical",
          "chinese": "词165",
          "pinyin": "cí165",
          "order": 5
        },
        {
          "id": "4e71721f-261d-473f-9181-3fa253b5986d",
          "english": "chest",
          "chinese": "词166",
          "pinyin": "cí166",
          "order": 6
        },
        {
          "id": "c83efa76-dc81-44f5-92f0-613f9f7ef89f",
          "english": "chicken",
          "chinese": "词167",
          "pinyin": "cí167",
          "order": 7
        },
        {
          "id": "f1c51204-fd5b-4f79-aeef-6880f6e47638",
          "english": "chief",
          "chinese": "词168",
          "pinyin": "cí168",
          "order": 8
        },
        {
          "id": "a0f10b86-9ac3-45fe-bf2a-2ab6973f3348",
          "english": "child",
          "chinese": "词169",
          "pinyin": "cí169",
          "order": 9
        }
      ]
    },
    {
      "id": "693f2581-4e29-48a3-af6c-fd214c9bc789",
      "name": "HSK 6 26",
      "description": "HSK 6 26 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "df6d3f03-b8e5-42c3-909a-3b40830c00b6",
          "english": "anticipation",
          "chinese": "预期",
          "pinyin": "yùqī",
          "order": 0
        },
        {
          "id": "10c9a96d-4189-4e9d-9fcb-dfc784e8a8b7",
          "english": "prediction",
          "chinese": "预测",
          "pinyin": "yùcè",
          "order": 1
        },
        {
          "id": "9f5b9510-6c2c-44a2-8eee-b7090e90276d",
          "english": "forecast",
          "chinese": "预报",
          "pinyin": "yùbào",
          "order": 2
        },
        {
          "id": "4245f4a2-0633-4b35-85b9-ab3750f71454",
          "english": "projection",
          "chinese": "预测",
          "pinyin": "yùcè",
          "order": 3
        },
        {
          "id": "faba6657-cf57-45d3-97de-63b013ab7aa2",
          "english": "estimation",
          "chinese": "估计",
          "pinyin": "gūjì",
          "order": 4
        },
        {
          "id": "ac846c9c-54f5-4a4e-bfd2-9884a722d28a",
          "english": "approximation",
          "chinese": "近似",
          "pinyin": "jìnsì",
          "order": 5
        },
        {
          "id": "4b53012d-8109-4199-8f6d-10a0ff1a2852",
          "english": "calculation",
          "chinese": "计算",
          "pinyin": "jìsuàn",
          "order": 6
        },
        {
          "id": "57f8509d-2108-41a8-903b-e9ce35b477c7",
          "english": "computation",
          "chinese": "计算",
          "pinyin": "jìsuàn",
          "order": 7
        },
        {
          "id": "644e1878-5084-4608-ac08-3728d7916441",
          "english": "mathematics",
          "chinese": "数学",
          "pinyin": "shùxué",
          "order": 8
        },
        {
          "id": "dc73df1e-5941-46d2-b752-9460c22efc36",
          "english": "arithmetic",
          "chinese": "算术",
          "pinyin": "suànshù",
          "order": 9
        }
      ]
    },
    {
      "id": "a1da1e90-f526-472a-8c85-3f56feae55ce",
      "name": "HSK 6 27",
      "description": "HSK 6 27 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "16ce52f2-1b93-4932-8644-c0037cee0305",
          "english": "choice",
          "chinese": "词170",
          "pinyin": "cí170",
          "order": 0
        },
        {
          "id": "5077a4ec-de90-458d-8224-8d5492e7e3ad",
          "english": "choose",
          "chinese": "词171",
          "pinyin": "cí171",
          "order": 1
        },
        {
          "id": "85db046d-6036-4333-a633-6ec1aa9e8633",
          "english": "church",
          "chinese": "词172",
          "pinyin": "cí172",
          "order": 2
        },
        {
          "id": "29837169-6f8e-4777-a884-7eea3286c1f1",
          "english": "circle",
          "chinese": "词173",
          "pinyin": "cí173",
          "order": 3
        },
        {
          "id": "52abffb5-ffd7-474e-ad09-54b0d0a241b3",
          "english": "citizen",
          "chinese": "词174",
          "pinyin": "cí174",
          "order": 4
        },
        {
          "id": "8cee0c13-30de-4e68-ab0e-46a0a450d1c5",
          "english": "city",
          "chinese": "词175",
          "pinyin": "cí175",
          "order": 5
        },
        {
          "id": "2c722349-5da3-4365-a35b-3d25c3ac6ca6",
          "english": "civil",
          "chinese": "词176",
          "pinyin": "cí176",
          "order": 6
        },
        {
          "id": "81032dd9-7aef-4269-b531-0e185a98660c",
          "english": "claim",
          "chinese": "词177",
          "pinyin": "cí177",
          "order": 7
        },
        {
          "id": "4ce3ca22-505a-41a8-8083-3edf60cd695b",
          "english": "class",
          "chinese": "词178",
          "pinyin": "cí178",
          "order": 8
        },
        {
          "id": "96b35d79-409d-4cf0-8e6e-34807a179fb8",
          "english": "classic",
          "chinese": "词179",
          "pinyin": "cí179",
          "order": 9
        }
      ]
    },
    {
      "id": "91f7ab74-d172-4db0-8e3e-ffc9783efe42",
      "name": "HSK 6 27",
      "description": "HSK 6 27 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "6142b943-82e2-4344-b8a9-37011572bc50",
          "english": "logic",
          "chinese": "逻辑",
          "pinyin": "luóji",
          "order": 0
        },
        {
          "id": "4e6e0a10-abf6-42af-b91e-8e9bc420d6c8",
          "english": "reasoning",
          "chinese": "推理",
          "pinyin": "tuīlǐ",
          "order": 1
        },
        {
          "id": "bcf235b7-5343-4b3d-9da6-8aaa060197ab",
          "english": "argument",
          "chinese": "论证",
          "pinyin": "lùnzhèng",
          "order": 2
        },
        {
          "id": "b033268c-777a-4773-8f65-4df21a091f9f",
          "english": "evidence",
          "chinese": "证据",
          "pinyin": "zhèngjù",
          "order": 3
        },
        {
          "id": "02ddf6e3-4ddc-44b2-96ed-8b57b659ae3e",
          "english": "proof",
          "chinese": "证明",
          "pinyin": "zhèngmíng",
          "order": 4
        },
        {
          "id": "fd5eefa2-2198-4024-b5bf-c1d461c975a7",
          "english": "verification",
          "chinese": "验证",
          "pinyin": "yànzhèng",
          "order": 5
        },
        {
          "id": "12d6d326-0e67-489f-8209-7cbb42e38b6e",
          "english": "confirmation",
          "chinese": "确认",
          "pinyin": "quèrèn",
          "order": 6
        },
        {
          "id": "54318a93-359a-45f4-9b4c-99bcc853af5b",
          "english": "validation",
          "chinese": "验证",
          "pinyin": "yànzhèng",
          "order": 7
        },
        {
          "id": "c83d8096-1ff3-4808-82c7-d17f003b665e",
          "english": "authentication",
          "chinese": "认证",
          "pinyin": "rènzhèng",
          "order": 8
        },
        {
          "id": "c8edebcb-b312-448e-920f-473c87979e9f",
          "english": "authorization",
          "chinese": "授权",
          "pinyin": "shòuquán",
          "order": 9
        }
      ]
    },
    {
      "id": "9e91d38f-5a2b-4140-a163-89f5f3890f50",
      "name": "HSK 6 28",
      "description": "HSK 6 28 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "aab66156-5c2c-4df8-8ae2-67db5c9aa992",
          "english": "classroom",
          "chinese": "词180",
          "pinyin": "cí180",
          "order": 0
        },
        {
          "id": "aff0e837-bf13-4207-a47c-b2cefd95561a",
          "english": "clean",
          "chinese": "词181",
          "pinyin": "cí181",
          "order": 1
        },
        {
          "id": "86b89e78-4963-4845-b31b-b0ae7ce94c08",
          "english": "clear",
          "chinese": "词182",
          "pinyin": "cí182",
          "order": 2
        },
        {
          "id": "958c3908-22c2-4a71-8d9e-e8dae8355876",
          "english": "clearly",
          "chinese": "词183",
          "pinyin": "cí183",
          "order": 3
        },
        {
          "id": "2458097e-34fb-4e14-86b0-4c984d0b5fcb",
          "english": "client",
          "chinese": "词184",
          "pinyin": "cí184",
          "order": 4
        },
        {
          "id": "9426f133-da7c-43c9-80f3-621a8d0e8174",
          "english": "climate",
          "chinese": "词185",
          "pinyin": "cí185",
          "order": 5
        },
        {
          "id": "bbeca67f-8668-43a1-86f9-387d45132d45",
          "english": "climb",
          "chinese": "词186",
          "pinyin": "cí186",
          "order": 6
        },
        {
          "id": "a1588008-38ed-4923-a056-0331b9d40bc6",
          "english": "clock",
          "chinese": "词187",
          "pinyin": "cí187",
          "order": 7
        },
        {
          "id": "da1222a8-f021-4166-907c-1e1c5a021d85",
          "english": "close",
          "chinese": "词188",
          "pinyin": "cí188",
          "order": 8
        },
        {
          "id": "0dcc848e-3fc7-4147-93a9-72f8b241ad34",
          "english": "clothes",
          "chinese": "词189",
          "pinyin": "cí189",
          "order": 9
        }
      ]
    },
    {
      "id": "76ff6f9d-0087-429c-a520-e72c7654e334",
      "name": "HSK 6 28",
      "description": "HSK 6 28 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "5f592554-af31-4648-b97e-f5c30f1fa190",
          "english": "permission",
          "chinese": "许可",
          "pinyin": "xǔkě",
          "order": 0
        },
        {
          "id": "2ff87030-2012-448e-8c88-705b560a89c0",
          "english": "license",
          "chinese": "执照",
          "pinyin": "zhízhào",
          "order": 1
        },
        {
          "id": "d2212010-e04a-4ea5-a4a0-ff1c1ec6f280",
          "english": "certificate",
          "chinese": "证书",
          "pinyin": "zhèngshū",
          "order": 2
        },
        {
          "id": "bd096676-9fbb-40e0-b747-128037275c8f",
          "english": "diploma",
          "chinese": "文凭",
          "pinyin": "wénpíng",
          "order": 3
        },
        {
          "id": "837189cf-5bc7-4704-8b7e-d4e9f6a72fdc",
          "english": "degree",
          "chinese": "学位",
          "pinyin": "xuéwèi",
          "order": 4
        },
        {
          "id": "d92bbbfc-04b3-4ae7-91a4-46225e410084",
          "english": "qualification",
          "chinese": "资格",
          "pinyin": "zīgé",
          "order": 5
        },
        {
          "id": "18559514-4ea3-4216-a629-2234b3c1175b",
          "english": "credential",
          "chinese": "凭证",
          "pinyin": "píngzhèng",
          "order": 6
        },
        {
          "id": "3d03b683-da64-4668-90f9-46a2232d9f87",
          "english": "identification",
          "chinese": "身份证明",
          "pinyin": "shēnfènzhèngmíng",
          "order": 7
        },
        {
          "id": "136b79c2-1d3a-40aa-b6d6-7edfa26739c1",
          "english": "identity",
          "chinese": "身份",
          "pinyin": "shēnfèn",
          "order": 8
        },
        {
          "id": "2292e21a-729d-4e4d-95f3-0e0ee9e766ea",
          "english": "character",
          "chinese": "性格",
          "pinyin": "xìnggé",
          "order": 9
        }
      ]
    },
    {
      "id": "0f22359d-6fd3-4c2c-b090-cab9722fdf0f",
      "name": "HSK 6 29",
      "description": "HSK 6 29 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "586b985f-16dc-4782-b3cb-fc8e84f13c43",
          "english": "personality",
          "chinese": "个性",
          "pinyin": "gèxìng",
          "order": 0
        },
        {
          "id": "65ddfb20-d0c7-4047-b861-851d0ca835e2",
          "english": "individuality",
          "chinese": "个性",
          "pinyin": "gèxìng",
          "order": 1
        },
        {
          "id": "7be8be85-d42e-4790-a3a5-fdd4945cb62e",
          "english": "uniqueness",
          "chinese": "独特性",
          "pinyin": "dútèxìng",
          "order": 2
        },
        {
          "id": "37228c17-5b6e-4db6-9ff9-6efd1ff52cef",
          "english": "distinction",
          "chinese": "区别",
          "pinyin": "qūbié",
          "order": 3
        },
        {
          "id": "92df1501-2bdb-4ef0-be3c-05e4572d63c3",
          "english": "difference",
          "chinese": "差异",
          "pinyin": "chāyì",
          "order": 4
        },
        {
          "id": "8fd64a23-a3c2-415f-9da7-cca70b48561f",
          "english": "variation",
          "chinese": "变化",
          "pinyin": "biànhuà",
          "order": 5
        },
        {
          "id": "8982ebb5-a874-4034-adbc-2979a6e295a1",
          "english": "diversity",
          "chinese": "多样性",
          "pinyin": "duōyàngxìng",
          "order": 6
        },
        {
          "id": "1a6f694e-e78f-4d63-8139-020167fae8b4",
          "english": "variety",
          "chinese": "多样",
          "pinyin": "duōyàng",
          "order": 7
        },
        {
          "id": "4530b8b5-9c7f-4025-a479-34d88b13dac7",
          "english": "multiplicity",
          "chinese": "多样性",
          "pinyin": "duōyàngxìng",
          "order": 8
        },
        {
          "id": "788cd977-43fa-4656-9d28-4a1ed0e3bef8",
          "english": "complexity",
          "chinese": "复杂性",
          "pinyin": "fùzáxìng",
          "order": 9
        }
      ]
    },
    {
      "id": "4499b73c-0ce1-4169-b08c-c1c55fc598c8",
      "name": "HSK 6 29",
      "description": "HSK 6 29 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "b8213f52-972c-48d1-8f95-3afd3464665e",
          "english": "cloud",
          "chinese": "词190",
          "pinyin": "cí190",
          "order": 0
        },
        {
          "id": "cf94d5e6-d3e7-4a3e-85e8-6538e193c1c8",
          "english": "club",
          "chinese": "词191",
          "pinyin": "cí191",
          "order": 1
        },
        {
          "id": "e1983734-5f7e-4ad2-8e5a-d61d7974fd49",
          "english": "coach",
          "chinese": "词192",
          "pinyin": "cí192",
          "order": 2
        },
        {
          "id": "830ce4ff-5cd7-442a-9d07-29ddb08a080b",
          "english": "coast",
          "chinese": "词193",
          "pinyin": "cí193",
          "order": 3
        },
        {
          "id": "b558eff0-4ef9-4040-8048-e99110f1ba97",
          "english": "coffee",
          "chinese": "词194",
          "pinyin": "cí194",
          "order": 4
        },
        {
          "id": "30367928-219a-4473-a9f7-ad94acddc42a",
          "english": "cold",
          "chinese": "词195",
          "pinyin": "cí195",
          "order": 5
        },
        {
          "id": "79a9f4d3-2071-4f41-bede-3f6dfa65cc61",
          "english": "collect",
          "chinese": "词196",
          "pinyin": "cí196",
          "order": 6
        },
        {
          "id": "2e85b90f-f65e-4b65-a13b-749d3c266605",
          "english": "collection",
          "chinese": "词197",
          "pinyin": "cí197",
          "order": 7
        },
        {
          "id": "391e07dc-c7f9-498b-be7c-c1fbca476fde",
          "english": "college",
          "chinese": "词198",
          "pinyin": "cí198",
          "order": 8
        },
        {
          "id": "c6eef2df-bd62-4f76-ade3-cbd52abffe37",
          "english": "color",
          "chinese": "词199",
          "pinyin": "cí199",
          "order": 9
        }
      ]
    },
    {
      "id": "0fc20720-4c83-4ffc-a6e9-888ecbb8a869",
      "name": "HSK 6 3",
      "description": "HSK 6 3 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "85ca3790-3fe5-4415-a652-dbd183d71bab",
          "english": "computation",
          "chinese": "计算",
          "pinyin": "jìsuàn",
          "order": 0
        },
        {
          "id": "66c058ef-bea1-4578-91c7-223a5910afc8",
          "english": "algorithm",
          "chinese": "算法",
          "pinyin": "suànfǎ",
          "order": 1
        },
        {
          "id": "dd895fd5-1d71-49e3-bbe4-0990423b8e32",
          "english": "formula",
          "chinese": "公式",
          "pinyin": "gōngshì",
          "order": 2
        },
        {
          "id": "72670898-5ab0-42d4-badd-1a0921ef557d",
          "english": "equation",
          "chinese": "方程",
          "pinyin": "fāngchéng",
          "order": 3
        },
        {
          "id": "f6dbfbc7-9827-4d9d-9aea-f03a40c65771",
          "english": "function",
          "chinese": "函数",
          "pinyin": "hánshù",
          "order": 4
        },
        {
          "id": "8438e0b0-5597-4a94-aff3-24e4f31a8da2",
          "english": "variable",
          "chinese": "变量",
          "pinyin": "biànliàng",
          "order": 5
        },
        {
          "id": "bf532342-e746-4d4f-8d6a-ff65ee77924a",
          "english": "constant",
          "chinese": "常量",
          "pinyin": "chángliàng",
          "order": 6
        },
        {
          "id": "5c3029b2-0ec0-49dd-8b9b-dac74337ba6a",
          "english": "parameter",
          "chinese": "参数",
          "pinyin": "cānshù",
          "order": 7
        },
        {
          "id": "0855dcc2-2bf4-4769-a924-8e7d6ee99177",
          "english": "coefficient",
          "chinese": "系数",
          "pinyin": "xìshù",
          "order": 8
        },
        {
          "id": "a18ff7bd-7287-404f-ad3f-751b089953b2",
          "english": "ratio",
          "chinese": "比率",
          "pinyin": "bǐlǜ",
          "order": 9
        }
      ]
    },
    {
      "id": "f335972b-a849-4819-80a4-9d3fad21e5a4",
      "name": "HSK 6 30",
      "description": "HSK 6 30 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "eaee776e-c3f6-4c95-b13e-5a7e8d23fb03",
          "english": "column",
          "chinese": "词200",
          "pinyin": "cí200",
          "order": 0
        },
        {
          "id": "22f48b81-f1a1-4f15-9c34-fdd60cdb322a",
          "english": "combination",
          "chinese": "词201",
          "pinyin": "cí201",
          "order": 1
        },
        {
          "id": "938b0ed0-ee57-4ee7-bf64-7a6882c03d1a",
          "english": "combine",
          "chinese": "词202",
          "pinyin": "cí202",
          "order": 2
        },
        {
          "id": "a28b19cc-257e-4d3f-b5a5-78624b8e4ea8",
          "english": "comfort",
          "chinese": "词203",
          "pinyin": "cí203",
          "order": 3
        },
        {
          "id": "2f7beda0-c952-4b00-8822-28ed61d221bc",
          "english": "comfortable",
          "chinese": "词204",
          "pinyin": "cí204",
          "order": 4
        },
        {
          "id": "b4d9f33c-d70d-47f1-add1-bd1ea4c3bf82",
          "english": "command",
          "chinese": "词205",
          "pinyin": "cí205",
          "order": 5
        },
        {
          "id": "79d76b2d-ba18-4c12-b4ed-44220b78fe54",
          "english": "comment",
          "chinese": "词206",
          "pinyin": "cí206",
          "order": 6
        },
        {
          "id": "a083c8ed-bd12-4953-a5e1-a1f1672584c4",
          "english": "commercial",
          "chinese": "词207",
          "pinyin": "cí207",
          "order": 7
        },
        {
          "id": "e689852a-510b-4ea6-81c0-da0d294d14e4",
          "english": "commission",
          "chinese": "词208",
          "pinyin": "cí208",
          "order": 8
        },
        {
          "id": "a834d041-0274-4e84-9f7b-e3cc9dd06dc9",
          "english": "commit",
          "chinese": "词209",
          "pinyin": "cí209",
          "order": 9
        }
      ]
    },
    {
      "id": "10cc69ac-dd11-490c-a9c4-00149dfe2405",
      "name": "HSK 6 30",
      "description": "HSK 6 30 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "d51d868e-ba99-4c14-8257-5f5d0d6a94ab",
          "english": "simplicity",
          "chinese": "简单性",
          "pinyin": "jiǎndānxìng",
          "order": 0
        },
        {
          "id": "06651c31-d17b-4a87-ac64-67d357265d6d",
          "english": "clarity",
          "chinese": "清晰",
          "pinyin": "qīngxī",
          "order": 1
        },
        {
          "id": "844a8791-711e-4bef-ae18-80aadee5f6f6",
          "english": "transparency",
          "chinese": "透明度",
          "pinyin": "tòumíngdù",
          "order": 2
        },
        {
          "id": "d5365509-9102-4348-98fa-ccb85fee5e07",
          "english": "opacity",
          "chinese": "不透明",
          "pinyin": "bùtòumíng",
          "order": 3
        },
        {
          "id": "ea542843-7f34-4080-938c-50721a19a56e",
          "english": "ambiguity",
          "chinese": "模糊性",
          "pinyin": "móhúxìng",
          "order": 4
        },
        {
          "id": "98699100-a0db-44c4-b97b-346fd32ad80c",
          "english": "uncertainty",
          "chinese": "不确定性",
          "pinyin": "bùquèdìngxìng",
          "order": 5
        },
        {
          "id": "6efe41a7-15d8-4214-927f-5fd037948ab9",
          "english": "doubt",
          "chinese": "疑虑",
          "pinyin": "yílǜ",
          "order": 6
        },
        {
          "id": "8c49b200-2513-4226-bf34-e730be3e49f0",
          "english": "suspicion",
          "chinese": "怀疑",
          "pinyin": "huáiyí",
          "order": 7
        },
        {
          "id": "c47eb260-6d12-43e6-ada4-be0642db060b",
          "english": "skepticism",
          "chinese": "怀疑主义",
          "pinyin": "huáiyízhǔyì",
          "order": 8
        },
        {
          "id": "9d074a12-2e93-4d61-8863-ff322cca0f83",
          "english": "criticism",
          "chinese": "批评",
          "pinyin": "pīpíng",
          "order": 9
        }
      ]
    },
    {
      "id": "edebf454-01ee-41f0-a220-ed4ec367583d",
      "name": "HSK 6 31",
      "description": "HSK 6 31 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "72c392aa-3f04-4263-b8eb-3f053763098b",
          "english": "evaluation",
          "chinese": "评估",
          "pinyin": "pínggū",
          "order": 0
        },
        {
          "id": "dc5c0bf3-430e-473b-b1e1-5bfd32ee188b",
          "english": "assessment",
          "chinese": "评价",
          "pinyin": "píngjià",
          "order": 1
        },
        {
          "id": "c2f44c88-1359-47db-ad82-e4ce7cce1f20",
          "english": "judgment",
          "chinese": "判断",
          "pinyin": "pànduàn",
          "order": 2
        },
        {
          "id": "da931ade-95c0-444a-af89-48e048ec9053",
          "english": "opinion",
          "chinese": "意见",
          "pinyin": "yìjiàn",
          "order": 3
        },
        {
          "id": "506c126c-5425-438e-a0ad-cc42dc40cd4b",
          "english": "view",
          "chinese": "观点",
          "pinyin": "guāndiǎn",
          "order": 4
        },
        {
          "id": "e9023ff9-122d-4894-839b-f28c9292ce25",
          "english": "perspective",
          "chinese": "观点",
          "pinyin": "guāndiǎn",
          "order": 5
        },
        {
          "id": "967dc278-aea1-4673-8b98-1920554fce17",
          "english": "viewpoint",
          "chinese": "观点",
          "pinyin": "guāndiǎn",
          "order": 6
        },
        {
          "id": "c08a4517-80f7-4fb7-9e20-4eea3b705a32",
          "english": "standpoint",
          "chinese": "立场",
          "pinyin": "lìchǎng",
          "order": 7
        },
        {
          "id": "962dc79a-08bc-4f59-a5c3-5747ec3ca16c",
          "english": "position",
          "chinese": "立场",
          "pinyin": "lìchǎng",
          "order": 8
        },
        {
          "id": "149e6997-1f78-49f4-badb-4904f66ca07d",
          "english": "stance",
          "chinese": "立场",
          "pinyin": "lìchǎng",
          "order": 9
        }
      ]
    },
    {
      "id": "54c7b553-d31d-4d91-8827-13d87ed007f2",
      "name": "HSK 6 31",
      "description": "HSK 6 31 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "189847e9-3757-431f-9ce5-22863eea3ffc",
          "english": "commitment",
          "chinese": "词210",
          "pinyin": "cí210",
          "order": 0
        },
        {
          "id": "52dba673-0fa4-4ae3-b758-e076b1d5278b",
          "english": "committee",
          "chinese": "词211",
          "pinyin": "cí211",
          "order": 1
        },
        {
          "id": "6bf91461-637c-4066-bf4b-35aab62f92c2",
          "english": "common",
          "chinese": "词212",
          "pinyin": "cí212",
          "order": 2
        },
        {
          "id": "9a728290-f51d-4f9e-a54b-31cd7ef3ed89",
          "english": "communicate",
          "chinese": "词213",
          "pinyin": "cí213",
          "order": 3
        },
        {
          "id": "7936c307-fff5-4229-9370-53673d0e46f5",
          "english": "communication",
          "chinese": "词214",
          "pinyin": "cí214",
          "order": 4
        },
        {
          "id": "c3c1a94c-7a78-48a0-833d-2701be5fb34b",
          "english": "community",
          "chinese": "词215",
          "pinyin": "cí215",
          "order": 5
        },
        {
          "id": "95d833bd-d03d-4c94-a848-bca812271fb7",
          "english": "company",
          "chinese": "词216",
          "pinyin": "cí216",
          "order": 6
        },
        {
          "id": "5a89d1b9-1691-4f95-9a95-36513bafd2cf",
          "english": "compare",
          "chinese": "词217",
          "pinyin": "cí217",
          "order": 7
        },
        {
          "id": "8e77ccce-4b87-4f5f-babe-dc01a25bb553",
          "english": "comparison",
          "chinese": "词218",
          "pinyin": "cí218",
          "order": 8
        },
        {
          "id": "51fa26f1-e1a3-463c-a3cc-388382ce8e33",
          "english": "compete",
          "chinese": "词219",
          "pinyin": "cí219",
          "order": 9
        }
      ]
    },
    {
      "id": "8cadc473-4e05-48d6-b81c-5ee014ad6fec",
      "name": "HSK 6 32",
      "description": "HSK 6 32 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "32bcb361-76f2-4918-b9b3-dc4366124dd6",
          "english": "competition",
          "chinese": "词220",
          "pinyin": "cí220",
          "order": 0
        },
        {
          "id": "b077e5ed-0e2e-4c10-b0f0-9578a0480933",
          "english": "competitive",
          "chinese": "词221",
          "pinyin": "cí221",
          "order": 1
        },
        {
          "id": "f6c1e7cf-4f20-42e9-b88c-c1ffcbe8b4d8",
          "english": "competitor",
          "chinese": "词222",
          "pinyin": "cí222",
          "order": 2
        },
        {
          "id": "a951f9f3-bf00-4908-90e8-334592aca339",
          "english": "complain",
          "chinese": "词223",
          "pinyin": "cí223",
          "order": 3
        },
        {
          "id": "388f90bf-50d0-4d50-9a35-10ac2673f8eb",
          "english": "complaint",
          "chinese": "词224",
          "pinyin": "cí224",
          "order": 4
        },
        {
          "id": "19e7f8ff-8ae3-49b4-bcbb-312cba4d2567",
          "english": "complete",
          "chinese": "词225",
          "pinyin": "cí225",
          "order": 5
        },
        {
          "id": "d5d22224-28df-4802-8702-1fbdebd56107",
          "english": "complex",
          "chinese": "词226",
          "pinyin": "cí226",
          "order": 6
        },
        {
          "id": "7340753b-459c-472f-8918-2b2055ec9211",
          "english": "component",
          "chinese": "词227",
          "pinyin": "cí227",
          "order": 7
        },
        {
          "id": "3ca0ceb4-5a49-43bc-81f1-f6c79976ca2c",
          "english": "computer",
          "chinese": "词228",
          "pinyin": "cí228",
          "order": 8
        },
        {
          "id": "d269c8b8-0282-412e-9b2c-df6f8ded6bc4",
          "english": "concept",
          "chinese": "词229",
          "pinyin": "cí229",
          "order": 9
        }
      ]
    },
    {
      "id": "de1e9f7f-f308-4159-b8d5-e3d9ac86c33f",
      "name": "HSK 6 32",
      "description": "HSK 6 32 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "48e59390-e06a-44a9-b354-650bf4550aeb",
          "english": "attitude",
          "chinese": "态度",
          "pinyin": "tàidù",
          "order": 0
        },
        {
          "id": "c5d53e79-acaa-469a-9aa4-79e32a9978aa",
          "english": "approach",
          "chinese": "方法",
          "pinyin": "fāngfǎ",
          "order": 1
        },
        {
          "id": "11335847-277a-4bea-a530-59285e6cd51e",
          "english": "method",
          "chinese": "方法",
          "pinyin": "fāngfǎ",
          "order": 2
        },
        {
          "id": "6c6f826e-bc22-4dd1-9fdf-fced5d3de6e9",
          "english": "technique",
          "chinese": "技术",
          "pinyin": "jìshù",
          "order": 3
        },
        {
          "id": "424abfc0-73a9-4955-9762-734637c216da",
          "english": "technology",
          "chinese": "技术",
          "pinyin": "jìshù",
          "order": 4
        },
        {
          "id": "9267708a-ce26-49a2-bfc3-725a09402209",
          "english": "innovation",
          "chinese": "创新",
          "pinyin": "chuàngxīn",
          "order": 5
        },
        {
          "id": "53e95502-9260-45c7-b381-b307cebc0584",
          "english": "advancement",
          "chinese": "进步",
          "pinyin": "jìnbù",
          "order": 6
        },
        {
          "id": "31ecc87d-0f73-4e9c-bed5-b8e21c953136",
          "english": "progress",
          "chinese": "进展",
          "pinyin": "jìnzhǎn",
          "order": 7
        },
        {
          "id": "a4d5c202-6ae7-4339-8ae9-50254d67b547",
          "english": "development",
          "chinese": "发展",
          "pinyin": "fāzhǎn",
          "order": 8
        },
        {
          "id": "3892c6e9-b2d1-4c6a-9c79-3d12105cdc56",
          "english": "evolution",
          "chinese": "演化",
          "pinyin": "yǎnhuà",
          "order": 9
        }
      ]
    },
    {
      "id": "e929967a-a480-4430-9131-4f1e2103b52f",
      "name": "HSK 6 33",
      "description": "HSK 6 33 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "417c0bb1-a39a-4b84-98ef-647b026d7603",
          "english": "concern",
          "chinese": "词230",
          "pinyin": "cí230",
          "order": 0
        },
        {
          "id": "816c9cba-668b-4df8-b1a8-c84a9524196e",
          "english": "concerned",
          "chinese": "词231",
          "pinyin": "cí231",
          "order": 1
        },
        {
          "id": "a00008d4-e600-49f3-b5b1-43cb502411e2",
          "english": "concert",
          "chinese": "词232",
          "pinyin": "cí232",
          "order": 2
        },
        {
          "id": "1efd268f-7a83-4095-9e4f-436dbc2bedaf",
          "english": "conclusion",
          "chinese": "词233",
          "pinyin": "cí233",
          "order": 3
        },
        {
          "id": "94192cb5-5a28-4931-926f-92c54529621a",
          "english": "condition",
          "chinese": "词234",
          "pinyin": "cí234",
          "order": 4
        },
        {
          "id": "067dbc22-07af-4927-86d0-22b4a0c42b8c",
          "english": "conduct",
          "chinese": "词235",
          "pinyin": "cí235",
          "order": 5
        },
        {
          "id": "3d19afff-c528-4aca-94bb-03d3a1bf826e",
          "english": "conference",
          "chinese": "词236",
          "pinyin": "cí236",
          "order": 6
        },
        {
          "id": "d41fb48c-0d36-4747-8d62-c94069e069d9",
          "english": "confidence",
          "chinese": "词237",
          "pinyin": "cí237",
          "order": 7
        },
        {
          "id": "bd6f19d9-dbca-4208-b42f-e844d021fd5e",
          "english": "confident",
          "chinese": "词238",
          "pinyin": "cí238",
          "order": 8
        },
        {
          "id": "bc8870a9-9356-4194-9867-57927e5b21bd",
          "english": "confirm",
          "chinese": "词239",
          "pinyin": "cí239",
          "order": 9
        }
      ]
    },
    {
      "id": "06d3167b-932b-409c-a1bd-91dd20471107",
      "name": "HSK 6 33",
      "description": "HSK 6 33 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "791bbe9e-a3ad-4ce1-8bc4-9c7e1f34488c",
          "english": "transformation",
          "chinese": "变革",
          "pinyin": "biàngé",
          "order": 0
        },
        {
          "id": "a70d8b2e-e4d7-47e7-ac14-d7b2091aa3d7",
          "english": "revolution",
          "chinese": "革命",
          "pinyin": "gémìng",
          "order": 1
        },
        {
          "id": "d01195bb-fff1-4009-9d18-a6820dfc0890",
          "english": "reform",
          "chinese": "改革",
          "pinyin": "gǎigé",
          "order": 2
        },
        {
          "id": "7ecfe672-b785-4471-b187-aab38f2294f4",
          "english": "improvement",
          "chinese": "改善",
          "pinyin": "gǎishàn",
          "order": 3
        },
        {
          "id": "a8b58619-2392-4cfe-9fa9-b931907c54dc",
          "english": "enhancement",
          "chinese": "增强",
          "pinyin": "zēngqiáng",
          "order": 4
        },
        {
          "id": "c306dd5d-a964-4bb5-b768-79fe6edf8a7c",
          "english": "optimization",
          "chinese": "优化",
          "pinyin": "yōuhuà",
          "order": 5
        },
        {
          "id": "4c28a9ac-cae2-49f0-bedd-4f91e0b7e5be",
          "english": "perfection",
          "chinese": "完美",
          "pinyin": "wánměi",
          "order": 6
        },
        {
          "id": "c1e53aa8-40ef-4939-801d-a09045bfe089",
          "english": "excellence",
          "chinese": "卓越",
          "pinyin": "zhuóyuè",
          "order": 7
        },
        {
          "id": "0985fc07-3085-4e48-9232-a13a9106f153",
          "english": "superiority",
          "chinese": "优越性",
          "pinyin": "yōuyuèxìng",
          "order": 8
        },
        {
          "id": "f161ca96-eec4-40c6-a7ca-e82c6cdf76c3",
          "english": "advantage",
          "chinese": "优势",
          "pinyin": "yōushì",
          "order": 9
        }
      ]
    },
    {
      "id": "653261ff-56cb-4c85-b846-da6fef6f97e2",
      "name": "HSK 6 34",
      "description": "HSK 6 34 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "5f82eb61-a5ed-4047-8d2a-00664f3e0b7d",
          "english": "conflict",
          "chinese": "词240",
          "pinyin": "cí240",
          "order": 0
        },
        {
          "id": "70f6367f-3c91-4de3-ab6c-40a9beb8eb43",
          "english": "confused",
          "chinese": "词241",
          "pinyin": "cí241",
          "order": 1
        },
        {
          "id": "3e0d7b6d-84a7-406c-93d7-21243a40af8c",
          "english": "congress",
          "chinese": "词242",
          "pinyin": "cí242",
          "order": 2
        },
        {
          "id": "eca7fb88-1a33-49bf-a7eb-ee51b3c252b4",
          "english": "connect",
          "chinese": "词243",
          "pinyin": "cí243",
          "order": 3
        },
        {
          "id": "2504dd8c-00f8-4a2e-9a41-942ca6bc4df3",
          "english": "connection",
          "chinese": "词244",
          "pinyin": "cí244",
          "order": 4
        },
        {
          "id": "1de4322d-92f5-48db-b70a-54ca2b2df76a",
          "english": "consciousness",
          "chinese": "词245",
          "pinyin": "cí245",
          "order": 5
        },
        {
          "id": "176a1f5d-7bb1-4c7f-b36d-9333d0ae4ad5",
          "english": "consequence",
          "chinese": "词246",
          "pinyin": "cí246",
          "order": 6
        },
        {
          "id": "31285a6b-e50c-4909-9650-80548aefc1cc",
          "english": "conservative",
          "chinese": "词247",
          "pinyin": "cí247",
          "order": 7
        },
        {
          "id": "89a31874-a66b-48da-af36-ca64483814d7",
          "english": "consider",
          "chinese": "词248",
          "pinyin": "cí248",
          "order": 8
        },
        {
          "id": "738012a8-11ad-4f66-834a-d496bd698961",
          "english": "consideration",
          "chinese": "词249",
          "pinyin": "cí249",
          "order": 9
        }
      ]
    },
    {
      "id": "6e804e5d-746b-46f0-ae4d-78822f8222f6",
      "name": "HSK 6 34",
      "description": "HSK 6 34 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "e85d9e88-8123-45ad-870a-39504ea4a3a8",
          "english": "benefit",
          "chinese": "益处",
          "pinyin": "yìchù",
          "order": 0
        },
        {
          "id": "be9262e2-2d57-42cc-a3a5-ad6a1ceca797",
          "english": "profit",
          "chinese": "利益",
          "pinyin": "lìyì",
          "order": 1
        },
        {
          "id": "26d129a1-455a-4dbb-9a7e-6a8b00e38c8a",
          "english": "gain",
          "chinese": "收益",
          "pinyin": "shōuyì",
          "order": 2
        },
        {
          "id": "1a788376-23ec-407d-8588-3f8f6771584b",
          "english": "achievement",
          "chinese": "成就",
          "pinyin": "chéngjiù",
          "order": 3
        },
        {
          "id": "6f4a8fd0-c103-4d17-84e5-8e8f9a425df5",
          "english": "accomplishment",
          "chinese": "成就",
          "pinyin": "chéngjiù",
          "order": 4
        },
        {
          "id": "dbeaa5a8-e0b4-4deb-bfba-56a7e4d15684",
          "english": "success",
          "chinese": "成功",
          "pinyin": "chénggōng",
          "order": 5
        },
        {
          "id": "64a17d60-ce3d-461d-a606-112f2b1e7e7d",
          "english": "triumph",
          "chinese": "胜利",
          "pinyin": "shènglì",
          "order": 6
        },
        {
          "id": "d60338e2-9aa4-4985-bc70-a51307e80f64",
          "english": "victory",
          "chinese": "胜利",
          "pinyin": "shènglì",
          "order": 7
        },
        {
          "id": "9f945069-9626-4225-be1c-ab7c92e382b6",
          "english": "conquest",
          "chinese": "征服",
          "pinyin": "zhēngfú",
          "order": 8
        },
        {
          "id": "e628d84a-b711-4298-b229-1a034027aeb2",
          "english": "domination",
          "chinese": "统治",
          "pinyin": "tǒngzhì",
          "order": 9
        }
      ]
    },
    {
      "id": "f1b36381-06d6-4aba-bf69-3beb75a43187",
      "name": "HSK 6 35",
      "description": "HSK 6 35 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "e3857711-3abe-4762-9214-38a304c5b5b0",
          "english": "consist",
          "chinese": "词250",
          "pinyin": "cí250",
          "order": 0
        },
        {
          "id": "135e8cf2-2f10-4535-9f41-bf93893c0c6a",
          "english": "consistent",
          "chinese": "词251",
          "pinyin": "cí251",
          "order": 1
        },
        {
          "id": "e0d49c04-4242-47e7-ab82-cdb5c1d67b02",
          "english": "constant",
          "chinese": "词252",
          "pinyin": "cí252",
          "order": 2
        },
        {
          "id": "2191dad1-0d53-4d24-a8d1-c8dbf18bae80",
          "english": "constitute",
          "chinese": "词253",
          "pinyin": "cí253",
          "order": 3
        },
        {
          "id": "d0c651a6-b597-4a30-a657-6fe6f9b5cab9",
          "english": "construction",
          "chinese": "词254",
          "pinyin": "cí254",
          "order": 4
        },
        {
          "id": "7a2e80de-0662-48dd-9753-73cf1860687b",
          "english": "consume",
          "chinese": "词255",
          "pinyin": "cí255",
          "order": 5
        },
        {
          "id": "47bf0581-8c06-498d-9ea8-2b137a64a630",
          "english": "consumer",
          "chinese": "词256",
          "pinyin": "cí256",
          "order": 6
        },
        {
          "id": "dcdeb524-11ed-49ea-b874-a0a75129f79c",
          "english": "contact",
          "chinese": "词257",
          "pinyin": "cí257",
          "order": 7
        },
        {
          "id": "cf2926b9-605f-403b-aef6-9ec50dbcc9bf",
          "english": "contain",
          "chinese": "词258",
          "pinyin": "cí258",
          "order": 8
        },
        {
          "id": "a07fdfe9-ffb9-407b-be6c-0c214504be74",
          "english": "container",
          "chinese": "词259",
          "pinyin": "cí259",
          "order": 9
        }
      ]
    },
    {
      "id": "0c41dcd2-a7ee-4400-8d8b-5a2e83a61432",
      "name": "HSK 6 35",
      "description": "HSK 6 35 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "2bc3aaa9-b811-40f3-9eba-3387a88fa513",
          "english": "control",
          "chinese": "控制",
          "pinyin": "kòngzhì",
          "order": 0
        },
        {
          "id": "f29e5b27-d869-433f-b2aa-c250baef2b04",
          "english": "command",
          "chinese": "指挥",
          "pinyin": "zhǐhuī",
          "order": 1
        },
        {
          "id": "0a74f993-1bee-4146-8532-90b90f821216",
          "english": "leadership",
          "chinese": "领导力",
          "pinyin": "lǐngdǎolì",
          "order": 2
        },
        {
          "id": "aac7621b-9f2d-4f26-93c3-b641bb8af885",
          "english": "authority",
          "chinese": "权威",
          "pinyin": "quánwēi",
          "order": 3
        },
        {
          "id": "19544e55-a7cd-498f-83f3-d4a20a36bafd",
          "english": "power",
          "chinese": "权力",
          "pinyin": "quánlì",
          "order": 4
        },
        {
          "id": "d4ba18e0-9eab-465d-9ea1-0f27306096c4",
          "english": "influence",
          "chinese": "影响",
          "pinyin": "yǐngxiǎng",
          "order": 5
        },
        {
          "id": "2434466e-a352-41b9-b8cd-7aefea27eb75",
          "english": "impact",
          "chinese": "冲击",
          "pinyin": "chōngjī",
          "order": 6
        },
        {
          "id": "48157171-9a02-4db2-8ac9-2427449781b0",
          "english": "effect",
          "chinese": "效应",
          "pinyin": "xiàoyìng",
          "order": 7
        },
        {
          "id": "2828ef7d-ced8-4dbc-920f-62f9b4a7e8fd",
          "english": "consequence",
          "chinese": "后果",
          "pinyin": "hòuguǒ",
          "order": 8
        },
        {
          "id": "bfb5903c-0a15-48e0-99d8-99b53616e4ba",
          "english": "result",
          "chinese": "结果",
          "pinyin": "jiéguǒ",
          "order": 9
        }
      ]
    },
    {
      "id": "ce93c2a9-b329-442f-bf35-cfad9fae18a3",
      "name": "HSK 6 36",
      "description": "HSK 6 36 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "bd5ba0c3-af86-4991-8679-b1f73780c57f",
          "english": "content",
          "chinese": "词260",
          "pinyin": "cí260",
          "order": 0
        },
        {
          "id": "09085da1-28e8-4284-bdda-893fdc6402f7",
          "english": "contest",
          "chinese": "词261",
          "pinyin": "cí261",
          "order": 1
        },
        {
          "id": "659bbb7c-7d79-4484-a7de-e7ce51c788d1",
          "english": "context",
          "chinese": "词262",
          "pinyin": "cí262",
          "order": 2
        },
        {
          "id": "ee0a8e4f-a803-4157-915b-6c867d549b76",
          "english": "continue",
          "chinese": "词263",
          "pinyin": "cí263",
          "order": 3
        },
        {
          "id": "02164c68-e36c-4963-8cc2-2c5f3fc10b3e",
          "english": "contract",
          "chinese": "词264",
          "pinyin": "cí264",
          "order": 4
        },
        {
          "id": "31a8ed54-01b2-4e68-8e00-d0445be6d981",
          "english": "contrast",
          "chinese": "词265",
          "pinyin": "cí265",
          "order": 5
        },
        {
          "id": "a64ebcfb-cd32-485f-8709-24d5da775b7b",
          "english": "contribute",
          "chinese": "词266",
          "pinyin": "cí266",
          "order": 6
        },
        {
          "id": "9e2af764-7eaf-445c-abc6-fdcc8fd135a0",
          "english": "contribution",
          "chinese": "词267",
          "pinyin": "cí267",
          "order": 7
        },
        {
          "id": "d647f56a-f5f9-43d4-9d73-530f9dc756aa",
          "english": "control",
          "chinese": "词268",
          "pinyin": "cí268",
          "order": 8
        },
        {
          "id": "63c81169-4464-4e56-a6be-10c8eef3a9f6",
          "english": "controversial",
          "chinese": "词269",
          "pinyin": "cí269",
          "order": 9
        }
      ]
    },
    {
      "id": "45374676-5fdb-4791-8fa0-0ea2bb0b3c84",
      "name": "HSK 6 36",
      "description": "HSK 6 36 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "66bf5076-f5be-4838-a0b8-494db0a34608",
          "english": "outcome",
          "chinese": "结果",
          "pinyin": "jiéguǒ",
          "order": 0
        },
        {
          "id": "202f6f21-370e-4f23-bf01-656b07b23965",
          "english": "conclusion",
          "chinese": "结论",
          "pinyin": "jiélùn",
          "order": 1
        },
        {
          "id": "f3345a55-cc52-4239-9875-a08bf23a96cd",
          "english": "end",
          "chinese": "结尾",
          "pinyin": "jiéwěi",
          "order": 2
        },
        {
          "id": "a436c41b-ca40-484b-97e8-4337fe74b35d",
          "english": "termination",
          "chinese": "终止",
          "pinyin": "zhōngzhǐ",
          "order": 3
        },
        {
          "id": "b2d4d1e5-a9ba-4873-a725-1020ecf31786",
          "english": "completion",
          "chinese": "完成",
          "pinyin": "wánchéng",
          "order": 4
        },
        {
          "id": "4bee6e73-427c-4dbe-a236-d5041f85f6a0",
          "english": "fulfillment",
          "chinese": "实现",
          "pinyin": "shíxiàn",
          "order": 5
        },
        {
          "id": "d4b49411-44c0-412e-927a-6ae20a835af5",
          "english": "realization",
          "chinese": "实现",
          "pinyin": "shíxiàn",
          "order": 6
        },
        {
          "id": "30efdb0b-1a41-4b68-882c-7660427ceb5d",
          "english": "actualization",
          "chinese": "实现",
          "pinyin": "shíxiàn",
          "order": 7
        },
        {
          "id": "3f1acc6a-35d5-4dab-863c-7d915c337bde",
          "english": "implementation",
          "chinese": "实施",
          "pinyin": "shíshī",
          "order": 8
        },
        {
          "id": "75610001-f796-49e3-afaa-f9d8b4eb2156",
          "english": "execution",
          "chinese": "执行",
          "pinyin": "zhíxíng",
          "order": 9
        }
      ]
    },
    {
      "id": "80f1420f-5295-43a1-b768-c3493532ce6f",
      "name": "HSK 6 37",
      "description": "HSK 6 37 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "4895e328-2103-47a4-9142-a3c8d61445c1",
          "english": "conversation",
          "chinese": "词270",
          "pinyin": "cí270",
          "order": 0
        },
        {
          "id": "1b4bfdc3-9c4d-4ecc-80fd-344a2ce0fc2b",
          "english": "convert",
          "chinese": "词271",
          "pinyin": "cí271",
          "order": 1
        },
        {
          "id": "4971f0fc-343b-468b-a601-5bf0e7cc0d47",
          "english": "convince",
          "chinese": "词272",
          "pinyin": "cí272",
          "order": 2
        },
        {
          "id": "5d9f3861-ce58-404d-9a88-8a7a687c4087",
          "english": "cook",
          "chinese": "词273",
          "pinyin": "cí273",
          "order": 3
        },
        {
          "id": "0e1f89d3-5d54-4475-beaa-4d1c605769c7",
          "english": "cookie",
          "chinese": "词274",
          "pinyin": "cí274",
          "order": 4
        },
        {
          "id": "f0f7a226-9941-4ba3-a236-773f84d04342",
          "english": "cooking",
          "chinese": "词275",
          "pinyin": "cí275",
          "order": 5
        },
        {
          "id": "e820aa41-bdbb-4242-bd50-0d4fb493bf2c",
          "english": "cool",
          "chinese": "词276",
          "pinyin": "cí276",
          "order": 6
        },
        {
          "id": "39e5240d-719b-4574-853c-896aa7055ac3",
          "english": "cooperation",
          "chinese": "词277",
          "pinyin": "cí277",
          "order": 7
        },
        {
          "id": "70ea62a9-8aad-4a1c-aaf3-8a3950146484",
          "english": "copy",
          "chinese": "词278",
          "pinyin": "cí278",
          "order": 8
        },
        {
          "id": "dc16651e-2967-43f1-baad-851634973935",
          "english": "corner",
          "chinese": "词279",
          "pinyin": "cí279",
          "order": 9
        }
      ]
    },
    {
      "id": "747e38be-b495-4f96-bd41-76228a960bd0",
      "name": "HSK 6 37",
      "description": "HSK 6 37 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "9ce7126c-6676-4492-ae8c-b220f1f544bb",
          "english": "performance",
          "chinese": "执行",
          "pinyin": "zhíxíng",
          "order": 0
        },
        {
          "id": "23ebfa09-8beb-4378-b816-c14128b06f94",
          "english": "operation",
          "chinese": "操作",
          "pinyin": "cāozuò",
          "order": 1
        },
        {
          "id": "a8a75a82-7bf7-4f91-bbed-e97bbd4ab83f",
          "english": "function",
          "chinese": "功能",
          "pinyin": "gōngnéng",
          "order": 2
        },
        {
          "id": "ac9fa14a-874e-49c4-a00f-7dfbc0267c6f",
          "english": "functionality",
          "chinese": "功能性",
          "pinyin": "gōngnéngxìng",
          "order": 3
        },
        {
          "id": "415e05eb-0ada-4db9-8ffa-b3a39d1eb272",
          "english": "capability",
          "chinese": "能力",
          "pinyin": "nénglì",
          "order": 4
        },
        {
          "id": "b473178e-2c24-45dd-b593-e79f26bb823d",
          "english": "capacity",
          "chinese": "容量",
          "pinyin": "róngliàng",
          "order": 5
        },
        {
          "id": "fa297f8d-4758-4952-8c35-d5629bdfd6af",
          "english": "potential",
          "chinese": "潜力",
          "pinyin": "qiánlì",
          "order": 6
        },
        {
          "id": "31f4bcfc-c70c-4945-a263-90b375ec51ce",
          "english": "possibility",
          "chinese": "可能性",
          "pinyin": "kěnéngxìng",
          "order": 7
        },
        {
          "id": "0d8ac35a-90ae-47c7-be2f-bacd5ace35bf",
          "english": "opportunity",
          "chinese": "机会",
          "pinyin": "jīhuì",
          "order": 8
        },
        {
          "id": "ae791928-5a46-4fa4-a660-316b5bbdef2e",
          "english": "chance",
          "chinese": "机会",
          "pinyin": "jīhuì",
          "order": 9
        }
      ]
    },
    {
      "id": "ab4b5535-33ee-4f82-9958-52d4f615d04f",
      "name": "HSK 6 38",
      "description": "HSK 6 38 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "161ea235-3153-4091-ba57-f564352c2eb3",
          "english": "corporate",
          "chinese": "词280",
          "pinyin": "cí280",
          "order": 0
        },
        {
          "id": "036494f2-0c9b-4cf1-8ea3-c6c800d45e4e",
          "english": "correct",
          "chinese": "词281",
          "pinyin": "cí281",
          "order": 1
        },
        {
          "id": "a264c81e-b8fe-4450-b82c-22c96e3446db",
          "english": "cost",
          "chinese": "词282",
          "pinyin": "cí282",
          "order": 2
        },
        {
          "id": "c3814f9d-5be8-4790-89c9-005cd2432114",
          "english": "cotton",
          "chinese": "词283",
          "pinyin": "cí283",
          "order": 3
        },
        {
          "id": "884546bf-b0cd-4341-86b7-a877830e4695",
          "english": "could",
          "chinese": "词284",
          "pinyin": "cí284",
          "order": 4
        },
        {
          "id": "ddda650e-a642-4033-8995-924cb0391a62",
          "english": "council",
          "chinese": "词285",
          "pinyin": "cí285",
          "order": 5
        },
        {
          "id": "20194817-2a53-42e2-8bb7-bbc6fcab555b",
          "english": "count",
          "chinese": "词286",
          "pinyin": "cí286",
          "order": 6
        },
        {
          "id": "a3011a8b-214b-4d34-8937-d2f730d64da9",
          "english": "counter",
          "chinese": "词287",
          "pinyin": "cí287",
          "order": 7
        },
        {
          "id": "ece7ebd6-ec61-49fa-a25d-33119ca2ec40",
          "english": "country",
          "chinese": "词288",
          "pinyin": "cí288",
          "order": 8
        },
        {
          "id": "614439d5-a2e3-470b-89ea-fae23ceb6808",
          "english": "county",
          "chinese": "词289",
          "pinyin": "cí289",
          "order": 9
        }
      ]
    },
    {
      "id": "ebb98d96-6dd8-422c-b7d0-e9fa1da7d31d",
      "name": "HSK 6 38",
      "description": "HSK 6 38 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "0be2033b-84d2-4d31-9fb5-17cc23f29e49",
          "english": "probability",
          "chinese": "可能性",
          "pinyin": "kěnéngxìng",
          "order": 0
        },
        {
          "id": "ee03a7c1-d390-41b2-bd9c-df17b7246b67",
          "english": "likelihood",
          "chinese": "可能性",
          "pinyin": "kěnéngxìng",
          "order": 1
        },
        {
          "id": "73eb9f09-f27f-4355-acf3-231509d911c3",
          "english": "feasibility",
          "chinese": "可行性",
          "pinyin": "kěxíngxìng",
          "order": 2
        },
        {
          "id": "789af0e5-3b69-477d-b2e4-8ce02e9f026b",
          "english": "viability",
          "chinese": "可行性",
          "pinyin": "kěxíngxìng",
          "order": 3
        },
        {
          "id": "5f7a49d5-b95d-4050-9b94-9dceb82a3f92",
          "english": "sustainability",
          "chinese": "可持续性",
          "pinyin": "kěchíxùxìng",
          "order": 4
        },
        {
          "id": "3b100ec9-6b36-4dc4-a3b1-df171509cfcf",
          "english": "durability",
          "chinese": "耐久性",
          "pinyin": "nàijiǔxìng",
          "order": 5
        },
        {
          "id": "399dc86c-c651-4df0-9853-f56887b0cbb2",
          "english": "longevity",
          "chinese": "长寿",
          "pinyin": "chángshòu",
          "order": 6
        },
        {
          "id": "19b17b47-f2fe-4596-ad71-e5e3147c5bb2",
          "english": "permanence",
          "chinese": "永恒",
          "pinyin": "yǒnghéng",
          "order": 7
        },
        {
          "id": "5db7b921-fefc-4288-8cb8-999c844e8f7e",
          "english": "eternity",
          "chinese": "永恒",
          "pinyin": "yǒnghéng",
          "order": 8
        },
        {
          "id": "8609e851-4163-484f-a3f2-88f324e9cdcb",
          "english": "infinity",
          "chinese": "无限",
          "pinyin": "wúxiàn",
          "order": 9
        }
      ]
    },
    {
      "id": "18a9cb03-fb11-4571-8a31-a079e190412f",
      "name": "HSK 6 39",
      "description": "HSK 6 39 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "43ff8089-ce95-4a86-87b9-1d06ba03ffea",
          "english": "immensity",
          "chinese": "巨大",
          "pinyin": "jùdà",
          "order": 0
        },
        {
          "id": "8f5af037-314b-4e1d-bba6-b98a00cf90ec",
          "english": "enormity",
          "chinese": "巨大",
          "pinyin": "jùdà",
          "order": 1
        },
        {
          "id": "f0d24a6b-2e9b-4180-8743-df45b8062d3b",
          "english": "magnitude",
          "chinese": "大小",
          "pinyin": "dàxiǎo",
          "order": 2
        },
        {
          "id": "d8c90fa6-1793-4536-8704-e735614ce2ea",
          "english": "scale",
          "chinese": "规模",
          "pinyin": "guīmó",
          "order": 3
        },
        {
          "id": "6f8836fd-081d-43a2-9f34-2cb7d4fadd01",
          "english": "dimension",
          "chinese": "维度",
          "pinyin": "wéidù",
          "order": 4
        },
        {
          "id": "004e1b46-2bc5-45c2-a96e-0f99638b4f27",
          "english": "proportion",
          "chinese": "比例",
          "pinyin": "bǐlì",
          "order": 5
        },
        {
          "id": "7ff6f0d1-2130-4763-9a44-c98e567e9927",
          "english": "ratio",
          "chinese": "比率",
          "pinyin": "bǐlǜ",
          "order": 6
        },
        {
          "id": "89878311-e5ad-439f-a552-9d7ec8717830",
          "english": "relationship",
          "chinese": "关系",
          "pinyin": "guānxi",
          "order": 7
        },
        {
          "id": "ab48b4a0-063c-46ae-b9ad-35ff8e4cd844",
          "english": "connection",
          "chinese": "连接",
          "pinyin": "liánjiē",
          "order": 8
        },
        {
          "id": "33333053-4d1a-4d3a-a369-f417d394bc63",
          "english": "link",
          "chinese": "链接",
          "pinyin": "liànjiē",
          "order": 9
        }
      ]
    },
    {
      "id": "325cc85d-f58c-4817-a809-cb42f0c8b955",
      "name": "HSK 6 39",
      "description": "HSK 6 39 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "f8195726-222f-4066-972f-d6fb450815de",
          "english": "couple",
          "chinese": "词290",
          "pinyin": "cí290",
          "order": 0
        },
        {
          "id": "b01158ad-945d-4e03-9fc3-82efd23cff62",
          "english": "courage",
          "chinese": "词291",
          "pinyin": "cí291",
          "order": 1
        },
        {
          "id": "1fad46c5-3bcc-4c6d-8332-f5a77163af4c",
          "english": "course",
          "chinese": "词292",
          "pinyin": "cí292",
          "order": 2
        },
        {
          "id": "a84880d5-ff22-410d-a90e-5d96c6e85c02",
          "english": "court",
          "chinese": "词293",
          "pinyin": "cí293",
          "order": 3
        },
        {
          "id": "36eed01c-7dda-47c0-8b24-24021133c384",
          "english": "cover",
          "chinese": "词294",
          "pinyin": "cí294",
          "order": 4
        },
        {
          "id": "67ea0a2a-8741-4b84-8da8-d0ee8f3136a6",
          "english": "coverage",
          "chinese": "词295",
          "pinyin": "cí295",
          "order": 5
        },
        {
          "id": "a9ea92fd-d96f-4efe-9874-b037b3561156",
          "english": "crack",
          "chinese": "词296",
          "pinyin": "cí296",
          "order": 6
        },
        {
          "id": "07b29bb8-2948-4a66-bd72-9588b6a2db5a",
          "english": "craft",
          "chinese": "词297",
          "pinyin": "cí297",
          "order": 7
        },
        {
          "id": "0b811118-98d5-4b61-adca-0ccaf01fc23c",
          "english": "crash",
          "chinese": "词298",
          "pinyin": "cí298",
          "order": 8
        },
        {
          "id": "9850d74b-70ca-4eb0-8599-781feae4dced",
          "english": "crazy",
          "chinese": "词299",
          "pinyin": "cí299",
          "order": 9
        }
      ]
    },
    {
      "id": "be77ebe9-1f8d-448b-ab1c-b648f138f5b3",
      "name": "HSK 6 4",
      "description": "HSK 6 4 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "87906988-22f4-4f66-a285-e8524b24b98a",
          "english": "proportion",
          "chinese": "比例",
          "pinyin": "bǐlì",
          "order": 0
        },
        {
          "id": "9d0f41e4-52bd-4ce1-b351-7d8fdc4a2a54",
          "english": "percentage",
          "chinese": "百分比",
          "pinyin": "bǎifēnbǐ",
          "order": 1
        },
        {
          "id": "77f9e86d-66ce-4ff6-8327-9ef994d1e333",
          "english": "fraction",
          "chinese": "分数",
          "pinyin": "fēnshù",
          "order": 2
        },
        {
          "id": "3cac742b-01dd-4ba6-8475-afb3a63d37a6",
          "english": "decimal",
          "chinese": "小数",
          "pinyin": "xiǎoshù",
          "order": 3
        },
        {
          "id": "86d3cdb1-8cc0-4559-8e13-1f3e8073e5c1",
          "english": "integer",
          "chinese": "整数",
          "pinyin": "zhěngshù",
          "order": 4
        },
        {
          "id": "dc66ed55-7070-49d7-9f64-b6ce32e0a4fa",
          "english": "rational",
          "chinese": "有理数",
          "pinyin": "yǒulǐshù",
          "order": 5
        },
        {
          "id": "6d7a3af8-2104-4ffa-9266-66922cf9b017",
          "english": "irrational",
          "chinese": "无理数",
          "pinyin": "wúlǐshù",
          "order": 6
        },
        {
          "id": "5bc9f9ea-0fcc-4dfa-b964-e480b2b4b7e4",
          "english": "geometry",
          "chinese": "几何",
          "pinyin": "jǐhé",
          "order": 7
        },
        {
          "id": "bf3e2c10-c87e-4b06-a8f7-8403922926a0",
          "english": "algebra",
          "chinese": "代数",
          "pinyin": "dàishù",
          "order": 8
        },
        {
          "id": "ea2ed15d-8874-48d0-a498-f1fcb19c1cc7",
          "english": "calculus",
          "chinese": "微积分",
          "pinyin": "wēijīfēn",
          "order": 9
        }
      ]
    },
    {
      "id": "6b902d8d-541a-4a7a-93ea-521bee5b2709",
      "name": "HSK 6 40",
      "description": "HSK 6 40 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "e3f06866-7484-4042-9535-a28e063bd3ce",
          "english": "cream",
          "chinese": "词300",
          "pinyin": "cí300",
          "order": 0
        },
        {
          "id": "cefb407e-81d6-4af2-9530-6f0d11b100c9",
          "english": "create",
          "chinese": "词301",
          "pinyin": "cí301",
          "order": 1
        },
        {
          "id": "c52c9abd-e185-4cb2-a62b-bf20aebae5b3",
          "english": "creation",
          "chinese": "词302",
          "pinyin": "cí302",
          "order": 2
        },
        {
          "id": "414fb3fa-410e-47d4-aa12-09065e67a0b5",
          "english": "creative",
          "chinese": "词303",
          "pinyin": "cí303",
          "order": 3
        },
        {
          "id": "1a2d147f-651b-421d-90ce-3e26fc542f52",
          "english": "creator",
          "chinese": "词304",
          "pinyin": "cí304",
          "order": 4
        },
        {
          "id": "3d606963-e93d-467f-8360-5faca056ea80",
          "english": "credit",
          "chinese": "词305",
          "pinyin": "cí305",
          "order": 5
        },
        {
          "id": "ef2fb2eb-7c62-4f4c-bed3-2f479ac7d7e6",
          "english": "crew",
          "chinese": "词306",
          "pinyin": "cí306",
          "order": 6
        },
        {
          "id": "a8df0e2d-e39d-4ae8-bc08-c8a0773147c7",
          "english": "crime",
          "chinese": "词307",
          "pinyin": "cí307",
          "order": 7
        },
        {
          "id": "dc5e22b6-2c89-4e9d-abaf-ce418fe6cbed",
          "english": "criminal",
          "chinese": "词308",
          "pinyin": "cí308",
          "order": 8
        },
        {
          "id": "770cce1a-d332-4c1d-bab7-3f3318dc8781",
          "english": "crisis",
          "chinese": "词309",
          "pinyin": "cí309",
          "order": 9
        }
      ]
    },
    {
      "id": "8af6f514-b801-4148-868a-828cb50a4aa4",
      "name": "HSK 6 40",
      "description": "HSK 6 40 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "6436e6d6-2145-4bc0-b6fd-65432b527a9c",
          "english": "bond",
          "chinese": "纽带",
          "pinyin": "niǔdài",
          "order": 0
        },
        {
          "id": "6aa88429-828f-4579-844f-6f1cb3338777",
          "english": "tie",
          "chinese": "纽带",
          "pinyin": "niǔdài",
          "order": 1
        },
        {
          "id": "711ea38c-6b6a-490b-8c9a-77de3ebc23a1",
          "english": "association",
          "chinese": "关联",
          "pinyin": "guānlián",
          "order": 2
        },
        {
          "id": "7d8cd07a-3579-4ad8-998e-ca1214f5f2b8",
          "english": "correlation",
          "chinese": "相关性",
          "pinyin": "xiāngguānxìng",
          "order": 3
        },
        {
          "id": "6d7e9518-c98e-49e0-8956-5ba3f97ab7f5",
          "english": "correspondence",
          "chinese": "对应",
          "pinyin": "duìyìng",
          "order": 4
        },
        {
          "id": "0f478940-ca2b-4660-9840-a3d4df50526f",
          "english": "equivalence",
          "chinese": "等价",
          "pinyin": "děngjià",
          "order": 5
        },
        {
          "id": "d4ea6328-ee1c-4741-9fb1-d181c1cc1c39",
          "english": "similarity",
          "chinese": "相似性",
          "pinyin": "xiāngsìxìng",
          "order": 6
        },
        {
          "id": "7c79c4b4-9277-4875-a0b1-5ea0a297e031",
          "english": "resemblance",
          "chinese": "相似",
          "pinyin": "xiāngsì",
          "order": 7
        },
        {
          "id": "a049e993-d60e-45c7-ac9a-59f3c4b3d2bf",
          "english": "likeness",
          "chinese": "相似",
          "pinyin": "xiāngsì",
          "order": 8
        },
        {
          "id": "ffea954d-88ab-4dd0-a6f6-bf313dd52b32",
          "english": "analogy",
          "chinese": "类比",
          "pinyin": "lèibǐ",
          "order": 9
        }
      ]
    },
    {
      "id": "515dbefe-6e74-4996-8caf-bef879091b82",
      "name": "HSK 6 41",
      "description": "HSK 6 41 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "acace5d0-0ee3-486b-aa53-a0726f4b361f",
          "english": "criteria",
          "chinese": "词310",
          "pinyin": "cí310",
          "order": 0
        },
        {
          "id": "55df842a-e64c-48a6-9f62-c1c537625930",
          "english": "critic",
          "chinese": "词311",
          "pinyin": "cí311",
          "order": 1
        },
        {
          "id": "296a7f3e-ebff-4b9a-a861-911c32390606",
          "english": "critical",
          "chinese": "词312",
          "pinyin": "cí312",
          "order": 2
        },
        {
          "id": "d91ed7dc-beb4-4871-85cb-82f0f8c621ca",
          "english": "criticism",
          "chinese": "词313",
          "pinyin": "cí313",
          "order": 3
        },
        {
          "id": "88a8e73d-f1ae-49f4-a2c5-d81ebbbe57e3",
          "english": "criticize",
          "chinese": "词314",
          "pinyin": "cí314",
          "order": 4
        },
        {
          "id": "b745a326-8ea6-4e4a-8cee-28c53352d0ec",
          "english": "crop",
          "chinese": "词315",
          "pinyin": "cí315",
          "order": 5
        },
        {
          "id": "4194ac37-bfdd-4d1e-b826-ee3b1ac3f9c7",
          "english": "cross",
          "chinese": "词316",
          "pinyin": "cí316",
          "order": 6
        },
        {
          "id": "dbf88f3e-eb28-40f4-96ea-99d5ca1b107d",
          "english": "crowd",
          "chinese": "词317",
          "pinyin": "cí317",
          "order": 7
        },
        {
          "id": "bb261f14-5647-4944-8811-2e09e19713c0",
          "english": "crucial",
          "chinese": "词318",
          "pinyin": "cí318",
          "order": 8
        },
        {
          "id": "8062825c-faa7-44fd-b10e-78a1645b0e83",
          "english": "cruise",
          "chinese": "词319",
          "pinyin": "cí319",
          "order": 9
        }
      ]
    },
    {
      "id": "14eed427-1afb-4ed0-af0a-30fe54e215e6",
      "name": "HSK 6 41",
      "description": "HSK 6 41 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "64d48a0d-caff-4cf6-97e7-46ca13a5698e",
          "english": "comparison",
          "chinese": "比较",
          "pinyin": "bǐjiào",
          "order": 0
        },
        {
          "id": "5da10d99-635b-4dd3-bc82-cb7c7ec07f29",
          "english": "contrast",
          "chinese": "对比",
          "pinyin": "duìbǐ",
          "order": 1
        },
        {
          "id": "34022092-efcd-48be-bea4-e1129fe2d5ab",
          "english": "distinction",
          "chinese": "区别",
          "pinyin": "qūbié",
          "order": 2
        },
        {
          "id": "e9b8b114-4914-442e-82de-2e74471a53aa",
          "english": "discrimination",
          "chinese": "区分",
          "pinyin": "qūfēn",
          "order": 3
        },
        {
          "id": "63bdd8a7-5cdd-4e6e-b822-523a8f487d6f",
          "english": "differentiation",
          "chinese": "区分",
          "pinyin": "qūfēn",
          "order": 4
        },
        {
          "id": "44a23ced-f999-478c-92ae-4a3daff5544a",
          "english": "classification",
          "chinese": "分类",
          "pinyin": "fēnlèi",
          "order": 5
        },
        {
          "id": "e75fdf93-ad74-415f-b93a-d424c9dee524",
          "english": "categorization",
          "chinese": "分类",
          "pinyin": "fēnlèi",
          "order": 6
        },
        {
          "id": "7fb1d8e8-f42c-4cc5-b3e0-1d7087847f6c",
          "english": "organization",
          "chinese": "组织",
          "pinyin": "zǔzhī",
          "order": 7
        },
        {
          "id": "ff3d9d9a-d988-4fd4-bece-af1022888f0b",
          "english": "arrangement",
          "chinese": "安排",
          "pinyin": "ānpái",
          "order": 8
        },
        {
          "id": "a808b943-a450-4789-ab91-921b8d76e603",
          "english": "structure",
          "chinese": "结构",
          "pinyin": "jiégòu",
          "order": 9
        }
      ]
    },
    {
      "id": "2c330e9a-492a-4165-a62e-3905966517a0",
      "name": "HSK 6 42",
      "description": "HSK 6 42 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "6647a4e6-52a1-4e77-b1d6-a6fafa4cd0fb",
          "english": "culture",
          "chinese": "词320",
          "pinyin": "cí320",
          "order": 0
        },
        {
          "id": "ea50c712-be34-4d41-a213-6ecec7a8b535",
          "english": "cup",
          "chinese": "词321",
          "pinyin": "cí321",
          "order": 1
        },
        {
          "id": "ef0e51be-0653-4b3c-8f02-0adc59e6eb5d",
          "english": "curious",
          "chinese": "词322",
          "pinyin": "cí322",
          "order": 2
        },
        {
          "id": "550895de-1abc-4fc0-800c-b33190e2fe14",
          "english": "current",
          "chinese": "词323",
          "pinyin": "cí323",
          "order": 3
        },
        {
          "id": "b82ce951-115d-47d7-9e8b-9d4f72074d55",
          "english": "currently",
          "chinese": "词324",
          "pinyin": "cí324",
          "order": 4
        },
        {
          "id": "e88f1dc0-f920-4546-8396-00931f97d3ee",
          "english": "curve",
          "chinese": "词325",
          "pinyin": "cí325",
          "order": 5
        },
        {
          "id": "61a82fb9-b0f7-48af-a992-78136265cf92",
          "english": "custom",
          "chinese": "词326",
          "pinyin": "cí326",
          "order": 6
        },
        {
          "id": "4c4b9f74-ef4d-40ba-8ff2-8f934ea8c59c",
          "english": "customer",
          "chinese": "词327",
          "pinyin": "cí327",
          "order": 7
        },
        {
          "id": "748be9b0-e205-4c82-8f10-b3812c7a3344",
          "english": "cycle",
          "chinese": "词328",
          "pinyin": "cí328",
          "order": 8
        },
        {
          "id": "0b7c7b55-d863-42ca-ae3c-eb1081db9458",
          "english": "daily",
          "chinese": "词329",
          "pinyin": "cí329",
          "order": 9
        }
      ]
    },
    {
      "id": "3d46745f-d96f-4462-a8d4-051fa1f668c1",
      "name": "HSK 6 42",
      "description": "HSK 6 42 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "ee89e2ea-cc4f-4329-be16-903c059ee35c",
          "english": "system",
          "chinese": "系统",
          "pinyin": "xìtǒng",
          "order": 0
        },
        {
          "id": "b9b0202d-9473-4615-8d34-a26ca0e6ba2b",
          "english": "mechanism",
          "chinese": "机制",
          "pinyin": "jīzhì",
          "order": 1
        },
        {
          "id": "2323d3e5-12fa-4926-993a-5108f822cdab",
          "english": "apparatus",
          "chinese": "装置",
          "pinyin": "zhuāngzhì",
          "order": 2
        },
        {
          "id": "b1439ffc-240c-4726-8d91-bd411df8ce9f",
          "english": "device",
          "chinese": "设备",
          "pinyin": "shèbèi",
          "order": 3
        },
        {
          "id": "94ed7945-6474-4df4-a4ce-4afb16dd991b",
          "english": "instrument",
          "chinese": "工具",
          "pinyin": "gōngjù",
          "order": 4
        },
        {
          "id": "2d2406bf-3993-4d47-bd2e-57d69d62f73b",
          "english": "tool",
          "chinese": "工具",
          "pinyin": "gōngjù",
          "order": 5
        },
        {
          "id": "6ada8d99-80ea-48a8-8d2d-2121686ad31d",
          "english": "equipment",
          "chinese": "设备",
          "pinyin": "shèbèi",
          "order": 6
        },
        {
          "id": "134ba5c6-8bf2-4ea2-9c6c-306c1057cce1",
          "english": "machinery",
          "chinese": "机械",
          "pinyin": "jīxiè",
          "order": 7
        },
        {
          "id": "c49ce67c-f1cb-4d56-9d87-bea9a8e6b672",
          "english": "technology",
          "chinese": "技术",
          "pinyin": "jìshù",
          "order": 8
        },
        {
          "id": "6b1ad23e-3966-4a7b-9c18-6da3c82c6687",
          "english": "technique",
          "chinese": "技巧",
          "pinyin": "jìqiǎo",
          "order": 9
        }
      ]
    },
    {
      "id": "8614f78a-f485-45ab-9863-24dc4d5418e2",
      "name": "HSK 6 43",
      "description": "HSK 6 43 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "4cdd98fd-f065-4d99-af20-b18f620153c5",
          "english": "damage",
          "chinese": "词330",
          "pinyin": "cí330",
          "order": 0
        },
        {
          "id": "e89e0f67-2830-4064-b241-4107f66b6de0",
          "english": "dance",
          "chinese": "词331",
          "pinyin": "cí331",
          "order": 1
        },
        {
          "id": "acdaa6c7-d167-417c-8c6d-2d48e7057f5c",
          "english": "danger",
          "chinese": "词332",
          "pinyin": "cí332",
          "order": 2
        },
        {
          "id": "f2ae985b-e2eb-4faf-ae48-0043f9b9a618",
          "english": "dangerous",
          "chinese": "词333",
          "pinyin": "cí333",
          "order": 3
        },
        {
          "id": "564eb1d1-5c29-4e96-a12e-d437943af275",
          "english": "dark",
          "chinese": "词334",
          "pinyin": "cí334",
          "order": 4
        },
        {
          "id": "153204bb-9255-4d64-9bc9-70c3eeca36d5",
          "english": "darkness",
          "chinese": "词335",
          "pinyin": "cí335",
          "order": 5
        },
        {
          "id": "5fdb91df-0e86-4b56-ba14-855d982f2152",
          "english": "data",
          "chinese": "词336",
          "pinyin": "cí336",
          "order": 6
        },
        {
          "id": "cdea7613-61cf-45e6-a8cb-1c7c46b86e16",
          "english": "date",
          "chinese": "词337",
          "pinyin": "cí337",
          "order": 7
        },
        {
          "id": "b3d7bdb4-a01f-4138-9e02-4034a9fc425f",
          "english": "daughter",
          "chinese": "词338",
          "pinyin": "cí338",
          "order": 8
        },
        {
          "id": "13d3cc0b-59e3-431d-a3ce-159aa4741ce8",
          "english": "deal",
          "chinese": "词339",
          "pinyin": "cí339",
          "order": 9
        }
      ]
    },
    {
      "id": "2be628a7-139e-4179-839f-21638aff82d3",
      "name": "HSK 6 44",
      "description": "HSK 6 44 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "53960161-b4cf-4079-8bd7-2fcb8cda80d1",
          "english": "dealer",
          "chinese": "词340",
          "pinyin": "cí340",
          "order": 0
        },
        {
          "id": "5e41b4e6-11ab-459a-874c-532fb3e4c247",
          "english": "dear",
          "chinese": "词341",
          "pinyin": "cí341",
          "order": 1
        },
        {
          "id": "c4a12161-455c-433b-b52d-d6bde7ccfef3",
          "english": "death",
          "chinese": "词342",
          "pinyin": "cí342",
          "order": 2
        },
        {
          "id": "b129c24a-55ad-4737-8027-7a97286df72f",
          "english": "debate",
          "chinese": "词343",
          "pinyin": "cí343",
          "order": 3
        },
        {
          "id": "f46c030f-fc97-4b36-9056-26bea55bf4e7",
          "english": "debt",
          "chinese": "词344",
          "pinyin": "cí344",
          "order": 4
        },
        {
          "id": "e7fd6b24-3f6a-4a2a-beeb-07900e386718",
          "english": "decade",
          "chinese": "词345",
          "pinyin": "cí345",
          "order": 5
        },
        {
          "id": "fa6f923d-bcc0-41ad-891d-e94a967aae2c",
          "english": "decide",
          "chinese": "词346",
          "pinyin": "cí346",
          "order": 6
        },
        {
          "id": "183a59f5-a6e2-4585-94f6-1a00c5e96155",
          "english": "decision",
          "chinese": "词347",
          "pinyin": "cí347",
          "order": 7
        },
        {
          "id": "38d0ea15-5e93-41c6-a796-7a7ec6394922",
          "english": "deck",
          "chinese": "词348",
          "pinyin": "cí348",
          "order": 8
        },
        {
          "id": "687cb14b-bbc9-4a19-8ff7-1ba8b420356b",
          "english": "declare",
          "chinese": "词349",
          "pinyin": "cí349",
          "order": 9
        }
      ]
    },
    {
      "id": "ec83ad67-e56f-479f-a44e-c9930e9c5850",
      "name": "HSK 6 45",
      "description": "HSK 6 45 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "bc9d8160-dfa8-498a-90de-4444016aaf90",
          "english": "deep",
          "chinese": "词350",
          "pinyin": "cí350",
          "order": 0
        },
        {
          "id": "d27cbfbc-5dbc-49d3-bae2-03ec3355f0dc",
          "english": "deeply",
          "chinese": "词351",
          "pinyin": "cí351",
          "order": 1
        },
        {
          "id": "8fc26194-65b3-4038-97b7-d427db3ce65b",
          "english": "defeat",
          "chinese": "词352",
          "pinyin": "cí352",
          "order": 2
        },
        {
          "id": "0c70c480-8cc4-454b-81f5-65e782ec53f7",
          "english": "defend",
          "chinese": "词353",
          "pinyin": "cí353",
          "order": 3
        },
        {
          "id": "d0cb0402-025c-410a-9f95-7f408c75e694",
          "english": "defense",
          "chinese": "词354",
          "pinyin": "cí354",
          "order": 4
        },
        {
          "id": "8ce37576-8119-4874-965f-3ffab349bd49",
          "english": "defensive",
          "chinese": "词355",
          "pinyin": "cí355",
          "order": 5
        },
        {
          "id": "808a9ce4-a7cc-494d-927d-70d91ddf9514",
          "english": "deficit",
          "chinese": "词356",
          "pinyin": "cí356",
          "order": 6
        },
        {
          "id": "a9b5436f-10e2-4597-a641-3d0a24d32a78",
          "english": "define",
          "chinese": "词357",
          "pinyin": "cí357",
          "order": 7
        },
        {
          "id": "57774fe2-60ea-4c3a-b009-f6b1e3af1a3d",
          "english": "definitely",
          "chinese": "词358",
          "pinyin": "cí358",
          "order": 8
        },
        {
          "id": "97a7d2bd-1d01-4b24-b194-8424785d8c87",
          "english": "definition",
          "chinese": "词359",
          "pinyin": "cí359",
          "order": 9
        }
      ]
    },
    {
      "id": "adb6fbae-9758-451a-9c9a-9f783885aa9d",
      "name": "HSK 6 46",
      "description": "HSK 6 46 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "730be269-8c15-4ad2-942f-162ab709b04b",
          "english": "degree",
          "chinese": "词360",
          "pinyin": "cí360",
          "order": 0
        },
        {
          "id": "a1d7387f-9aea-4b01-b200-264276703e0b",
          "english": "deliver",
          "chinese": "词361",
          "pinyin": "cí361",
          "order": 1
        },
        {
          "id": "d93e319e-82c1-4f9c-9064-e740228a280f",
          "english": "delivery",
          "chinese": "词362",
          "pinyin": "cí362",
          "order": 2
        },
        {
          "id": "c2dbf061-4486-4d8c-a8ba-b6ac9b597540",
          "english": "demand",
          "chinese": "词363",
          "pinyin": "cí363",
          "order": 3
        },
        {
          "id": "54b60022-1bcf-4d12-8397-5a4744f78bd1",
          "english": "democratic",
          "chinese": "词364",
          "pinyin": "cí364",
          "order": 4
        },
        {
          "id": "606879a9-ff6d-45c8-bd44-c39493032360",
          "english": "demonstrate",
          "chinese": "词365",
          "pinyin": "cí365",
          "order": 5
        },
        {
          "id": "fec60353-c370-4065-a365-1ad281ed5001",
          "english": "demonstration",
          "chinese": "词366",
          "pinyin": "cí366",
          "order": 6
        },
        {
          "id": "4feda70f-ec8f-4c79-a1dc-2244d310e143",
          "english": "department",
          "chinese": "词367",
          "pinyin": "cí367",
          "order": 7
        },
        {
          "id": "dd3983aa-22be-42e9-8901-0e1354942824",
          "english": "depend",
          "chinese": "词368",
          "pinyin": "cí368",
          "order": 8
        },
        {
          "id": "10df6939-ba05-472a-a416-2f531a82c0ec",
          "english": "dependent",
          "chinese": "词369",
          "pinyin": "cí369",
          "order": 9
        }
      ]
    },
    {
      "id": "6e13a868-0746-451b-9c1e-7b6d994885c2",
      "name": "HSK 6 47",
      "description": "HSK 6 47 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "6e855c41-2aeb-4a32-a9f4-30419765964d",
          "english": "depending",
          "chinese": "词370",
          "pinyin": "cí370",
          "order": 0
        },
        {
          "id": "6c408e5c-acbc-4e9c-b18c-b2a63403e3be",
          "english": "depth",
          "chinese": "词371",
          "pinyin": "cí371",
          "order": 1
        },
        {
          "id": "ef8a8468-6827-4e41-aa21-d12485b7561e",
          "english": "derive",
          "chinese": "词372",
          "pinyin": "cí372",
          "order": 2
        },
        {
          "id": "e5756828-f652-45c1-ada4-eee525d25a99",
          "english": "describe",
          "chinese": "词373",
          "pinyin": "cí373",
          "order": 3
        },
        {
          "id": "deb37331-6226-4f61-887c-862f757e7962",
          "english": "description",
          "chinese": "词374",
          "pinyin": "cí374",
          "order": 4
        },
        {
          "id": "5a197bb5-f706-49e9-b18d-ce0cf4432252",
          "english": "desert",
          "chinese": "词375",
          "pinyin": "cí375",
          "order": 5
        },
        {
          "id": "a6074649-5f5c-445d-9f90-7b2bfdd969b1",
          "english": "design",
          "chinese": "词376",
          "pinyin": "cí376",
          "order": 6
        },
        {
          "id": "467ef17f-c108-4967-b756-d1d8bbcd19e9",
          "english": "designer",
          "chinese": "词377",
          "pinyin": "cí377",
          "order": 7
        },
        {
          "id": "77bc0308-79f6-49f7-a84d-c30202bacbc1",
          "english": "desire",
          "chinese": "词378",
          "pinyin": "cí378",
          "order": 8
        },
        {
          "id": "1898ecb0-2b1e-45ad-a062-ac11a4cc11c6",
          "english": "desk",
          "chinese": "词379",
          "pinyin": "cí379",
          "order": 9
        }
      ]
    },
    {
      "id": "8b97a4d4-54d2-4917-9225-801136f16517",
      "name": "HSK 6 48",
      "description": "HSK 6 48 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "88df9a56-44de-4f72-947c-f5e647e70917",
          "english": "despite",
          "chinese": "词380",
          "pinyin": "cí380",
          "order": 0
        },
        {
          "id": "f3794055-fcc1-4a24-85a4-14c6b2682d8c",
          "english": "destroy",
          "chinese": "词381",
          "pinyin": "cí381",
          "order": 1
        },
        {
          "id": "e26e4a94-0901-4295-9c38-f0fccea10b32",
          "english": "destruction",
          "chinese": "词382",
          "pinyin": "cí382",
          "order": 2
        },
        {
          "id": "696d8fff-5517-406f-87c1-d56087285261",
          "english": "detail",
          "chinese": "词383",
          "pinyin": "cí383",
          "order": 3
        },
        {
          "id": "f3fb654a-db3f-4098-815b-f71eacd992d2",
          "english": "detailed",
          "chinese": "词384",
          "pinyin": "cí384",
          "order": 4
        },
        {
          "id": "81129731-36c5-4e50-84e5-ed45ef4d7fc5",
          "english": "detect",
          "chinese": "词385",
          "pinyin": "cí385",
          "order": 5
        },
        {
          "id": "d5f80cc0-46f7-47b7-b816-cefd47727775",
          "english": "determine",
          "chinese": "词386",
          "pinyin": "cí386",
          "order": 6
        },
        {
          "id": "da62bc54-5fb6-478e-8f8b-6a9854776556",
          "english": "develop",
          "chinese": "词387",
          "pinyin": "cí387",
          "order": 7
        },
        {
          "id": "996079a6-1ff7-4a74-9a56-2626d625a9a2",
          "english": "development",
          "chinese": "词388",
          "pinyin": "cí388",
          "order": 8
        },
        {
          "id": "055bcc4e-98e2-4930-a0d9-f75dff5dff05",
          "english": "device",
          "chinese": "词389",
          "pinyin": "cí389",
          "order": 9
        }
      ]
    },
    {
      "id": "4e901075-47e5-4101-aa3d-32c86bd3f85c",
      "name": "HSK 6 49",
      "description": "HSK 6 49 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "82b52271-4709-4c71-b429-b45b248a568d",
          "english": "dialogue",
          "chinese": "词390",
          "pinyin": "cí390",
          "order": 0
        },
        {
          "id": "17463d5f-0375-41d4-841b-53ec1fb5e5b8",
          "english": "diamond",
          "chinese": "词391",
          "pinyin": "cí391",
          "order": 1
        },
        {
          "id": "99e153ce-4c07-41c2-8db6-b86429fe9863",
          "english": "diary",
          "chinese": "词392",
          "pinyin": "cí392",
          "order": 2
        },
        {
          "id": "84ec3d7e-46e9-4557-9974-790e04cbcfe9",
          "english": "difference",
          "chinese": "词393",
          "pinyin": "cí393",
          "order": 3
        },
        {
          "id": "9c1b8930-de7f-4541-8267-f035700834c9",
          "english": "different",
          "chinese": "词394",
          "pinyin": "cí394",
          "order": 4
        },
        {
          "id": "d5cad292-00b4-4aed-8f3f-6643cacf369c",
          "english": "differently",
          "chinese": "词395",
          "pinyin": "cí395",
          "order": 5
        },
        {
          "id": "9a59ea56-60d2-4b4a-90a8-c6992a2e7d3f",
          "english": "difficult",
          "chinese": "词396",
          "pinyin": "cí396",
          "order": 6
        },
        {
          "id": "1c51e342-9283-4c63-acdc-dcd1e574f699",
          "english": "difficulty",
          "chinese": "词397",
          "pinyin": "cí397",
          "order": 7
        },
        {
          "id": "54ce0abb-39c3-40ed-8937-7a55d937e5e1",
          "english": "digital",
          "chinese": "词398",
          "pinyin": "cí398",
          "order": 8
        },
        {
          "id": "fe38e29a-c62e-477a-b865-120553362141",
          "english": "dimension",
          "chinese": "词399",
          "pinyin": "cí399",
          "order": 9
        }
      ]
    },
    {
      "id": "918526a5-bcc0-4450-81e4-b88e34e3b736",
      "name": "HSK 6 5",
      "description": "HSK 6 5 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "a1c015f6-72de-4720-9132-400bf927d705",
          "english": "trigonometry",
          "chinese": "三角学",
          "pinyin": "sānjiǎoxué",
          "order": 0
        },
        {
          "id": "109ba56d-5df3-4699-8e3b-f9e781b16557",
          "english": "statistics",
          "chinese": "统计学",
          "pinyin": "tǒngjìxué",
          "order": 1
        },
        {
          "id": "52f35852-df13-4ba7-93d3-987db047d3ac",
          "english": "probability",
          "chinese": "概率论",
          "pinyin": "gàilǜlùn",
          "order": 2
        },
        {
          "id": "010771e8-026e-4801-9661-feb794d99b22",
          "english": "distribution",
          "chinese": "分布",
          "pinyin": "fēnbù",
          "order": 3
        },
        {
          "id": "0f101546-ec65-40ab-99e5-2d1f3a1f7ff6",
          "english": "correlation",
          "chinese": "相关性",
          "pinyin": "xiāngguānxìng",
          "order": 4
        },
        {
          "id": "ae18aadd-f24e-4e86-bd38-46c025fb660f",
          "english": "regression",
          "chinese": "回归",
          "pinyin": "huíguī",
          "order": 5
        },
        {
          "id": "d66e252e-c033-40b9-97cf-fe2dd557edaa",
          "english": "variance",
          "chinese": "方差",
          "pinyin": "fāngchā",
          "order": 6
        },
        {
          "id": "413685b8-523c-4e44-afe1-e9a6e52f81a7",
          "english": "deviation",
          "chinese": "偏差",
          "pinyin": "piānchā",
          "order": 7
        },
        {
          "id": "221eb13b-f742-4b37-8bfe-0d27dd3207ed",
          "english": "average",
          "chinese": "平均",
          "pinyin": "píngjūn",
          "order": 8
        },
        {
          "id": "a9a09d50-b72b-4bf4-ad60-f417f0eadf21",
          "english": "median",
          "chinese": "中位数",
          "pinyin": "zhōngwèishù",
          "order": 9
        }
      ]
    },
    {
      "id": "c97fc131-ce33-4c19-8453-b9c3e06b310a",
      "name": "HSK 6 50",
      "description": "HSK 6 50 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "65e4acd9-0906-4759-9773-0f5d128970e1",
          "english": "dining",
          "chinese": "词400",
          "pinyin": "cí400",
          "order": 0
        },
        {
          "id": "2f9efd38-d5e5-4824-bded-d26586b11ad2",
          "english": "dinner",
          "chinese": "词401",
          "pinyin": "cí401",
          "order": 1
        },
        {
          "id": "45fcc876-f39b-4770-8277-cb11c73ff76c",
          "english": "direct",
          "chinese": "词402",
          "pinyin": "cí402",
          "order": 2
        },
        {
          "id": "57c21372-905f-4629-b9d1-114101193120",
          "english": "direction",
          "chinese": "词403",
          "pinyin": "cí403",
          "order": 3
        },
        {
          "id": "eec43002-68f9-4b12-8d54-6d7cd7a67461",
          "english": "directly",
          "chinese": "词404",
          "pinyin": "cí404",
          "order": 4
        },
        {
          "id": "7cf65e12-bb2c-4ee1-9fb0-dca93eebc9f5",
          "english": "director",
          "chinese": "词405",
          "pinyin": "cí405",
          "order": 5
        },
        {
          "id": "055e9114-fe4f-4eb9-8c63-4dd953ef619c",
          "english": "dirty",
          "chinese": "词406",
          "pinyin": "cí406",
          "order": 6
        },
        {
          "id": "bd252c2e-d4a3-4655-89d6-e9a13c7d77d9",
          "english": "disability",
          "chinese": "词407",
          "pinyin": "cí407",
          "order": 7
        },
        {
          "id": "aa499727-1e9c-44cd-aec4-7892e4237023",
          "english": "disagree",
          "chinese": "词408",
          "pinyin": "cí408",
          "order": 8
        },
        {
          "id": "2d098f8c-4d4e-4446-b417-9939c239dd16",
          "english": "disappear",
          "chinese": "词409",
          "pinyin": "cí409",
          "order": 9
        }
      ]
    },
    {
      "id": "d907f82d-7804-4178-b197-646051635857",
      "name": "HSK 6 51",
      "description": "HSK 6 51 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "d976ae4d-341c-4f9c-b901-f7fa0191676e",
          "english": "disaster",
          "chinese": "词410",
          "pinyin": "cí410",
          "order": 0
        },
        {
          "id": "346d228a-956a-436e-874e-9d7da58b461b",
          "english": "discipline",
          "chinese": "词411",
          "pinyin": "cí411",
          "order": 1
        },
        {
          "id": "612ed1c8-0fc8-4519-abf2-e1bd01a27e79",
          "english": "discover",
          "chinese": "词412",
          "pinyin": "cí412",
          "order": 2
        },
        {
          "id": "ba8af536-a3ef-4f09-9e4e-dc767beef7d8",
          "english": "discovery",
          "chinese": "词413",
          "pinyin": "cí413",
          "order": 3
        },
        {
          "id": "cb2df0cc-7592-44cd-b92e-23e7a25e746b",
          "english": "discuss",
          "chinese": "词414",
          "pinyin": "cí414",
          "order": 4
        },
        {
          "id": "5999475a-f150-49af-9c26-f47a88c864e4",
          "english": "discussion",
          "chinese": "词415",
          "pinyin": "cí415",
          "order": 5
        },
        {
          "id": "2ec1f327-3570-4671-a24e-2d49e94e8729",
          "english": "disease",
          "chinese": "词416",
          "pinyin": "cí416",
          "order": 6
        },
        {
          "id": "f3d06e11-07fc-469b-8ede-22ee089401a7",
          "english": "dish",
          "chinese": "词417",
          "pinyin": "cí417",
          "order": 7
        },
        {
          "id": "4c1e0847-2c8d-4c37-917a-e3a26c9d1541",
          "english": "dismiss",
          "chinese": "词418",
          "pinyin": "cí418",
          "order": 8
        },
        {
          "id": "601e0324-7151-47d0-8e58-fa1e5ed5ebab",
          "english": "disorder",
          "chinese": "词419",
          "pinyin": "cí419",
          "order": 9
        }
      ]
    },
    {
      "id": "ffbf4b19-359c-4927-86fa-02ac583b9e56",
      "name": "HSK 6 52",
      "description": "HSK 6 52 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "c8db1493-70d9-4168-aa3c-65b6d224bc22",
          "english": "display",
          "chinese": "词420",
          "pinyin": "cí420",
          "order": 0
        },
        {
          "id": "091901ed-df00-4fcf-add1-b25d5d65a2d3",
          "english": "distance",
          "chinese": "词421",
          "pinyin": "cí421",
          "order": 1
        },
        {
          "id": "5f9d12f7-8ddf-4009-8941-417e96a64dba",
          "english": "distribution",
          "chinese": "词422",
          "pinyin": "cí422",
          "order": 2
        },
        {
          "id": "bd65c094-f344-4ef0-b383-5b999c457249",
          "english": "district",
          "chinese": "词423",
          "pinyin": "cí423",
          "order": 3
        },
        {
          "id": "c6e9ff91-2786-4f42-b8c4-e9a6a3da4ef4",
          "english": "divide",
          "chinese": "词424",
          "pinyin": "cí424",
          "order": 4
        },
        {
          "id": "9a9bd98d-cd67-4012-8c34-1c2397507831",
          "english": "division",
          "chinese": "词425",
          "pinyin": "cí425",
          "order": 5
        },
        {
          "id": "333ca56c-7660-4281-83cb-9a14c58219fc",
          "english": "doctor",
          "chinese": "词426",
          "pinyin": "cí426",
          "order": 6
        },
        {
          "id": "6a63e89d-c1df-4ae8-a3fa-0e5db8a15510",
          "english": "document",
          "chinese": "词427",
          "pinyin": "cí427",
          "order": 7
        },
        {
          "id": "03ea9c0c-4584-47ed-9059-c8fd06843814",
          "english": "domestic",
          "chinese": "词428",
          "pinyin": "cí428",
          "order": 8
        },
        {
          "id": "0653133c-d157-41b0-97fb-3a5a14dabbef",
          "english": "dominant",
          "chinese": "词429",
          "pinyin": "cí429",
          "order": 9
        }
      ]
    },
    {
      "id": "e2f5e3b2-7241-4610-be50-055410787c27",
      "name": "HSK 6 53",
      "description": "HSK 6 53 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "e1f49c35-103e-4354-be91-d800444c3934",
          "english": "dominate",
          "chinese": "词430",
          "pinyin": "cí430",
          "order": 0
        },
        {
          "id": "04854e0c-0878-4f07-b419-f868e39da411",
          "english": "door",
          "chinese": "词431",
          "pinyin": "cí431",
          "order": 1
        },
        {
          "id": "b0d1a999-da3e-4182-baab-54cc37979858",
          "english": "double",
          "chinese": "词432",
          "pinyin": "cí432",
          "order": 2
        },
        {
          "id": "80050451-594d-49a6-96c4-a0d5a61e1c2f",
          "english": "doubt",
          "chinese": "词433",
          "pinyin": "cí433",
          "order": 3
        },
        {
          "id": "af7125fa-eb22-4b4b-9040-545d569522b6",
          "english": "downtown",
          "chinese": "词434",
          "pinyin": "cí434",
          "order": 4
        },
        {
          "id": "224431b8-7864-4fd8-8566-970d142bbc83",
          "english": "dozen",
          "chinese": "词435",
          "pinyin": "cí435",
          "order": 5
        },
        {
          "id": "0e98c557-f1d9-4883-8cf4-9d82b6ce6ad4",
          "english": "draft",
          "chinese": "词436",
          "pinyin": "cí436",
          "order": 6
        },
        {
          "id": "1361c6e1-7304-4b95-b2a8-adcec0b20910",
          "english": "drag",
          "chinese": "词437",
          "pinyin": "cí437",
          "order": 7
        },
        {
          "id": "b3712896-44a2-4991-bb98-e011252ca704",
          "english": "drama",
          "chinese": "词438",
          "pinyin": "cí438",
          "order": 8
        },
        {
          "id": "df4459fa-9678-4ba8-b046-4f5002af475c",
          "english": "dramatic",
          "chinese": "词439",
          "pinyin": "cí439",
          "order": 9
        }
      ]
    },
    {
      "id": "71187fbd-32b3-4583-b7d1-0a91f3168e8e",
      "name": "HSK 6 54",
      "description": "HSK 6 54 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "0b4cd18d-9573-4f06-8162-ba172b3ee361",
          "english": "draw",
          "chinese": "词440",
          "pinyin": "cí440",
          "order": 0
        },
        {
          "id": "c16f4177-2952-47c2-8cfc-5b11e78d70bb",
          "english": "drawing",
          "chinese": "词441",
          "pinyin": "cí441",
          "order": 1
        },
        {
          "id": "0d28dd05-c7e3-4be8-af38-947a6bba5a33",
          "english": "dream",
          "chinese": "词442",
          "pinyin": "cí442",
          "order": 2
        },
        {
          "id": "f1d7300e-17f3-4034-9d15-5bde1160def1",
          "english": "dress",
          "chinese": "词443",
          "pinyin": "cí443",
          "order": 3
        },
        {
          "id": "e5e85474-b6fe-4bd4-bc07-887d52e9a02a",
          "english": "drink",
          "chinese": "词444",
          "pinyin": "cí444",
          "order": 4
        },
        {
          "id": "37d9a87b-20ac-4eba-acbf-21e3fc96b0bd",
          "english": "drive",
          "chinese": "词445",
          "pinyin": "cí445",
          "order": 5
        },
        {
          "id": "de102cac-2de4-4316-b784-cc89630a6520",
          "english": "driver",
          "chinese": "词446",
          "pinyin": "cí446",
          "order": 6
        },
        {
          "id": "896c5384-1824-4047-bad9-42b7b427b307",
          "english": "drop",
          "chinese": "词447",
          "pinyin": "cí447",
          "order": 7
        },
        {
          "id": "14f6943c-f86d-45c3-9330-6971691c839c",
          "english": "drug",
          "chinese": "词448",
          "pinyin": "cí448",
          "order": 8
        },
        {
          "id": "8be275e7-e9c6-4556-83a0-3a823e67422e",
          "english": "during",
          "chinese": "词449",
          "pinyin": "cí449",
          "order": 9
        }
      ]
    },
    {
      "id": "fb6924e2-696c-4bb9-80d1-deeebf95994b",
      "name": "HSK 6 55",
      "description": "HSK 6 55 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "f3738845-9e00-447c-8bf9-434de240f930",
          "english": "duty",
          "chinese": "词450",
          "pinyin": "cí450",
          "order": 0
        },
        {
          "id": "b0af805d-4948-4df3-8a8f-f82d5d666ad9",
          "english": "each",
          "chinese": "词451",
          "pinyin": "cí451",
          "order": 1
        },
        {
          "id": "04548db3-269a-4732-af7b-1fe445d731de",
          "english": "eager",
          "chinese": "词452",
          "pinyin": "cí452",
          "order": 2
        },
        {
          "id": "bac87191-d673-463d-8f2b-f87ce5b2275a",
          "english": "early",
          "chinese": "词453",
          "pinyin": "cí453",
          "order": 3
        },
        {
          "id": "61b12edf-f08d-4d90-8a5c-483cb4a15038",
          "english": "earn",
          "chinese": "词454",
          "pinyin": "cí454",
          "order": 4
        },
        {
          "id": "e07b66d3-9b29-4ba2-8d82-f2ec3d4d0926",
          "english": "earth",
          "chinese": "词455",
          "pinyin": "cí455",
          "order": 5
        },
        {
          "id": "af0f0bca-5504-4335-a20d-782ae7292ad9",
          "english": "easily",
          "chinese": "词456",
          "pinyin": "cí456",
          "order": 6
        },
        {
          "id": "d5d6aecc-9205-4ed4-9e60-091fa1ffe5cf",
          "english": "east",
          "chinese": "词457",
          "pinyin": "cí457",
          "order": 7
        },
        {
          "id": "044d77d9-2459-430b-9a7a-13885721906c",
          "english": "eastern",
          "chinese": "词458",
          "pinyin": "cí458",
          "order": 8
        },
        {
          "id": "d9144caa-2ed7-4578-bafb-1ac48dbe0e86",
          "english": "easy",
          "chinese": "词459",
          "pinyin": "cí459",
          "order": 9
        }
      ]
    },
    {
      "id": "aaf2b115-410d-4fe2-9b3c-e5d3c282c65a",
      "name": "HSK 6 56",
      "description": "HSK 6 56 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "3d27e1ea-4e32-4983-a6c2-87d415eb5d6f",
          "english": "economic",
          "chinese": "词460",
          "pinyin": "cí460",
          "order": 0
        },
        {
          "id": "0b427338-1415-4251-a34c-f3bb547ccb61",
          "english": "economy",
          "chinese": "词461",
          "pinyin": "cí461",
          "order": 1
        },
        {
          "id": "70cd6f7d-4119-4c66-90bb-a5d03724edbd",
          "english": "edge",
          "chinese": "词462",
          "pinyin": "cí462",
          "order": 2
        },
        {
          "id": "28f2c79c-8a7e-435f-8b82-776042467d2b",
          "english": "edition",
          "chinese": "词463",
          "pinyin": "cí463",
          "order": 3
        },
        {
          "id": "972afca9-7b87-45b5-a146-a053547724e7",
          "english": "editor",
          "chinese": "词464",
          "pinyin": "cí464",
          "order": 4
        },
        {
          "id": "6eb37e48-b800-4710-b379-0122c1da324c",
          "english": "education",
          "chinese": "词465",
          "pinyin": "cí465",
          "order": 5
        },
        {
          "id": "8b9c075d-cb17-4557-9c80-cf54ff28955b",
          "english": "educational",
          "chinese": "词466",
          "pinyin": "cí466",
          "order": 6
        },
        {
          "id": "e8d131fb-9fab-4bb6-a06d-383d872fecfa",
          "english": "effect",
          "chinese": "词467",
          "pinyin": "cí467",
          "order": 7
        },
        {
          "id": "c7f209a2-dea5-4993-88f3-32701774006e",
          "english": "effective",
          "chinese": "词468",
          "pinyin": "cí468",
          "order": 8
        },
        {
          "id": "17013922-8e7e-4892-8ea5-a7da8270c46b",
          "english": "effectively",
          "chinese": "词469",
          "pinyin": "cí469",
          "order": 9
        }
      ]
    },
    {
      "id": "9e234904-5ad1-45a3-b5bd-0769504e7ec3",
      "name": "HSK 6 57",
      "description": "HSK 6 57 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "e6957eb6-c754-406c-914c-d995c494d66b",
          "english": "efficiency",
          "chinese": "词470",
          "pinyin": "cí470",
          "order": 0
        },
        {
          "id": "cde6a4d2-125f-48f3-a451-b1d868cd2a92",
          "english": "efficient",
          "chinese": "词471",
          "pinyin": "cí471",
          "order": 1
        },
        {
          "id": "96d2a665-a20d-4132-a20a-231b5d6d60f6",
          "english": "effort",
          "chinese": "词472",
          "pinyin": "cí472",
          "order": 2
        },
        {
          "id": "62806b24-7f42-48a4-8221-48e64451bb1e",
          "english": "eight",
          "chinese": "词473",
          "pinyin": "cí473",
          "order": 3
        },
        {
          "id": "0da5b9af-b3b2-4cdd-bcf3-a1adc7617639",
          "english": "either",
          "chinese": "词474",
          "pinyin": "cí474",
          "order": 4
        },
        {
          "id": "c1b62db2-5bc3-40a4-86d5-4b1d717d60ee",
          "english": "elderly",
          "chinese": "词475",
          "pinyin": "cí475",
          "order": 5
        },
        {
          "id": "ac678b93-f213-4fc9-9267-e519d1eecfc7",
          "english": "elect",
          "chinese": "词476",
          "pinyin": "cí476",
          "order": 6
        },
        {
          "id": "cf54f44d-b5ea-4846-a411-98351043854d",
          "english": "election",
          "chinese": "词477",
          "pinyin": "cí477",
          "order": 7
        },
        {
          "id": "7df1931f-a1d2-4f72-beb8-7c5ee87add51",
          "english": "electric",
          "chinese": "词478",
          "pinyin": "cí478",
          "order": 8
        },
        {
          "id": "5da0db41-f6c2-46a2-a117-7d65be4a020d",
          "english": "electrical",
          "chinese": "词479",
          "pinyin": "cí479",
          "order": 9
        }
      ]
    },
    {
      "id": "3c983397-36f1-48ea-bc56-c8010bf6efb9",
      "name": "HSK 6 58",
      "description": "HSK 6 58 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "d253dfc6-03cb-4991-8dc6-336e71b8e092",
          "english": "electronic",
          "chinese": "词480",
          "pinyin": "cí480",
          "order": 0
        },
        {
          "id": "22ade447-a6b1-4b86-8182-1542d140c0ef",
          "english": "element",
          "chinese": "词481",
          "pinyin": "cí481",
          "order": 1
        },
        {
          "id": "e1084e50-20c9-4cc8-8540-2b9cb07a3b41",
          "english": "eliminate",
          "chinese": "词482",
          "pinyin": "cí482",
          "order": 2
        },
        {
          "id": "954f9473-7c3c-47d9-b926-ddce73fe99be",
          "english": "elite",
          "chinese": "词483",
          "pinyin": "cí483",
          "order": 3
        },
        {
          "id": "9bccfc3e-0384-43f4-a5d9-eef305ba68fb",
          "english": "else",
          "chinese": "词484",
          "pinyin": "cí484",
          "order": 4
        },
        {
          "id": "cd5e413a-074d-4762-854b-d9518126f6b9",
          "english": "elsewhere",
          "chinese": "词485",
          "pinyin": "cí485",
          "order": 5
        },
        {
          "id": "06d04319-7209-457f-b1f2-e437c138d251",
          "english": "emerge",
          "chinese": "词486",
          "pinyin": "cí486",
          "order": 6
        },
        {
          "id": "6021a5e5-3a2d-447f-a607-ccfae5c2f57c",
          "english": "emergency",
          "chinese": "词487",
          "pinyin": "cí487",
          "order": 7
        },
        {
          "id": "3d21a51a-8cec-488e-98eb-1df95135fec8",
          "english": "emission",
          "chinese": "词488",
          "pinyin": "cí488",
          "order": 8
        },
        {
          "id": "38c24a1b-277e-4215-a0d2-2776f39de3da",
          "english": "emotion",
          "chinese": "词489",
          "pinyin": "cí489",
          "order": 9
        }
      ]
    },
    {
      "id": "6526425a-36d3-4434-b520-176c0e5d3195",
      "name": "HSK 6 59",
      "description": "HSK 6 59 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "add2ae30-fe78-4f83-a256-82832d704823",
          "english": "emotional",
          "chinese": "词490",
          "pinyin": "cí490",
          "order": 0
        },
        {
          "id": "6166106b-17ee-4f96-8fa1-ee00a2024d8b",
          "english": "emphasis",
          "chinese": "词491",
          "pinyin": "cí491",
          "order": 1
        },
        {
          "id": "4c712e96-7a31-4bc4-825d-30ed34670c15",
          "english": "emphasize",
          "chinese": "词492",
          "pinyin": "cí492",
          "order": 2
        },
        {
          "id": "2e701e1f-d449-4f18-8520-4ed3c09df5e8",
          "english": "employ",
          "chinese": "词493",
          "pinyin": "cí493",
          "order": 3
        },
        {
          "id": "ccaabbae-1473-4e94-bbc0-b4966146ba3d",
          "english": "employee",
          "chinese": "词494",
          "pinyin": "cí494",
          "order": 4
        },
        {
          "id": "8bdc845e-e826-4947-be01-ca136743faa6",
          "english": "employer",
          "chinese": "词495",
          "pinyin": "cí495",
          "order": 5
        },
        {
          "id": "2c3eb4e0-d908-4fa4-b50a-2a2bd167cbb8",
          "english": "employment",
          "chinese": "词496",
          "pinyin": "cí496",
          "order": 6
        },
        {
          "id": "d373cbad-aeb8-47ab-a67a-65260249b1ac",
          "english": "empty",
          "chinese": "词497",
          "pinyin": "cí497",
          "order": 7
        },
        {
          "id": "698ba812-133f-4072-b9e8-b89e9ad47579",
          "english": "enable",
          "chinese": "词498",
          "pinyin": "cí498",
          "order": 8
        },
        {
          "id": "76141ebf-2f29-4884-b356-0faa55a7b28e",
          "english": "encounter",
          "chinese": "词499",
          "pinyin": "cí499",
          "order": 9
        }
      ]
    },
    {
      "id": "e104a148-d8ba-47a2-a975-82fb6d804a23",
      "name": "HSK 6 6",
      "description": "HSK 6 6 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "fcb688a2-1ecc-463f-b243-a605f64f365f",
          "english": "mode",
          "chinese": "众数",
          "pinyin": "zhòngshù",
          "order": 0
        },
        {
          "id": "c674b15d-34c1-4314-bb39-b6f3ab667255",
          "english": "range",
          "chinese": "范围",
          "pinyin": "fànwéi",
          "order": 1
        },
        {
          "id": "aad298ae-61ec-4f54-97a6-272c56ed014e",
          "english": "interval",
          "chinese": "区间",
          "pinyin": "qūjiān",
          "order": 2
        },
        {
          "id": "44c46545-3e39-49ae-ab27-7864099d89d5",
          "english": "sequence",
          "chinese": "序列",
          "pinyin": "xùliè",
          "order": 3
        },
        {
          "id": "b950d035-fb05-4fc4-bd7b-8321e9f89ed8",
          "english": "series",
          "chinese": "级数",
          "pinyin": "jíshù",
          "order": 4
        },
        {
          "id": "22c19fa0-5c18-4f6e-8ca5-b17daa46a4f8",
          "english": "progression",
          "chinese": "数列",
          "pinyin": "shùliè",
          "order": 5
        },
        {
          "id": "24bb2fd6-12c1-4368-ad0b-5b749fb08264",
          "english": "iteration",
          "chinese": "迭代",
          "pinyin": "diédài",
          "order": 6
        },
        {
          "id": "1738dbe7-2097-4964-9969-c68d65405369",
          "english": "recursion",
          "chinese": "递归",
          "pinyin": "dìguī",
          "order": 7
        },
        {
          "id": "18416ac8-d223-46fe-a914-99d93266c3bd",
          "english": "optimization",
          "chinese": "优化",
          "pinyin": "yōuhuà",
          "order": 8
        },
        {
          "id": "54f81a27-1b90-4d5b-9564-2f582d574339",
          "english": "maximization",
          "chinese": "最大化",
          "pinyin": "zuìdàhuà",
          "order": 9
        }
      ]
    },
    {
      "id": "08766d6a-e4a0-4424-afa6-c81680f63760",
      "name": "HSK 6 60",
      "description": "HSK 6 60 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "98172127-9105-445b-a7c5-b0ac409d8631",
          "english": "encourage",
          "chinese": "词500",
          "pinyin": "cí500",
          "order": 0
        },
        {
          "id": "112fd287-e13d-4075-b88f-10d55c94bc73",
          "english": "enemy",
          "chinese": "词501",
          "pinyin": "cí501",
          "order": 1
        },
        {
          "id": "4a6457b8-e130-4f10-a21e-62bb08a64806",
          "english": "energy",
          "chinese": "词502",
          "pinyin": "cí502",
          "order": 2
        },
        {
          "id": "19710630-c8f3-4b2a-bb33-2000f680ed0f",
          "english": "engage",
          "chinese": "词503",
          "pinyin": "cí503",
          "order": 3
        },
        {
          "id": "55b82538-e0e3-4aa3-a83c-02c0987c34b4",
          "english": "engine",
          "chinese": "词504",
          "pinyin": "cí504",
          "order": 4
        },
        {
          "id": "46f1043c-8285-485e-a024-0f7faf6cd418",
          "english": "engineer",
          "chinese": "词505",
          "pinyin": "cí505",
          "order": 5
        },
        {
          "id": "e9b30c2b-0be7-4e17-88e5-fbb525decec2",
          "english": "engineering",
          "chinese": "词506",
          "pinyin": "cí506",
          "order": 6
        },
        {
          "id": "e5f5f96c-d862-4764-a975-b2b911c82cd6",
          "english": "enhance",
          "chinese": "词507",
          "pinyin": "cí507",
          "order": 7
        },
        {
          "id": "da318e58-5c75-452d-8ae5-beabcc4d1368",
          "english": "enjoy",
          "chinese": "词508",
          "pinyin": "cí508",
          "order": 8
        },
        {
          "id": "69da016d-82ee-4870-8349-bfbca317c991",
          "english": "enormous",
          "chinese": "词509",
          "pinyin": "cí509",
          "order": 9
        }
      ]
    },
    {
      "id": "92877d18-dc5f-47e3-a476-bf31ce126bc7",
      "name": "HSK 6 61",
      "description": "HSK 6 61 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "8dba116a-cd65-48ef-bddd-85ccc19da9b4",
          "english": "enough",
          "chinese": "词510",
          "pinyin": "cí510",
          "order": 0
        },
        {
          "id": "5fd6b3b8-8097-48a2-8213-17f2be3d94ea",
          "english": "ensure",
          "chinese": "词511",
          "pinyin": "cí511",
          "order": 1
        },
        {
          "id": "1d3165fd-f3ea-4cd0-9944-da818995f9cd",
          "english": "enter",
          "chinese": "词512",
          "pinyin": "cí512",
          "order": 2
        },
        {
          "id": "321fba33-b530-4aba-9908-42afc841827a",
          "english": "enterprise",
          "chinese": "词513",
          "pinyin": "cí513",
          "order": 3
        },
        {
          "id": "d992177e-8698-4b47-a2aa-0c6c3e544ec8",
          "english": "entertainment",
          "chinese": "词514",
          "pinyin": "cí514",
          "order": 4
        },
        {
          "id": "020920c9-1cdc-4bf4-bd7e-02651a956e0f",
          "english": "entire",
          "chinese": "词515",
          "pinyin": "cí515",
          "order": 5
        },
        {
          "id": "32fe484f-3ab0-4164-bb2f-08c413c4792f",
          "english": "entirely",
          "chinese": "词516",
          "pinyin": "cí516",
          "order": 6
        },
        {
          "id": "2e9ea874-aabd-42ab-897f-02f2474b7134",
          "english": "entrance",
          "chinese": "词517",
          "pinyin": "cí517",
          "order": 7
        },
        {
          "id": "35b5687a-e390-4dbb-a429-bf0fcf94866d",
          "english": "entry",
          "chinese": "词518",
          "pinyin": "cí518",
          "order": 8
        },
        {
          "id": "45affec4-90db-49b6-970e-7a0591f726a6",
          "english": "environment",
          "chinese": "词519",
          "pinyin": "cí519",
          "order": 9
        }
      ]
    },
    {
      "id": "814ac51b-6c61-40dd-a35b-7c417eca96f6",
      "name": "HSK 6 62",
      "description": "HSK 6 62 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "272bd45a-b6bf-4259-855d-2fe5f0f101f4",
          "english": "environmental",
          "chinese": "词520",
          "pinyin": "cí520",
          "order": 0
        },
        {
          "id": "467e0dab-7be6-4edf-839e-4c9dbf42ac0f",
          "english": "episode",
          "chinese": "词521",
          "pinyin": "cí521",
          "order": 1
        },
        {
          "id": "2ae2c902-3067-4def-aa8c-0bb215f804de",
          "english": "equal",
          "chinese": "词522",
          "pinyin": "cí522",
          "order": 2
        },
        {
          "id": "318e8150-6a19-4a07-ab10-5a4bb0f2e680",
          "english": "equally",
          "chinese": "词523",
          "pinyin": "cí523",
          "order": 3
        },
        {
          "id": "f5fc3144-3340-4d60-8f99-9e6574efd666",
          "english": "equipment",
          "chinese": "词524",
          "pinyin": "cí524",
          "order": 4
        },
        {
          "id": "3d101c98-9d2f-4b40-8d6d-4650d09a497d",
          "english": "error",
          "chinese": "词525",
          "pinyin": "cí525",
          "order": 5
        },
        {
          "id": "5e9687cb-4587-4222-876b-d1fe3dfeca65",
          "english": "escape",
          "chinese": "词526",
          "pinyin": "cí526",
          "order": 6
        },
        {
          "id": "5085a9f0-d041-4a86-bcab-f03f175d273d",
          "english": "especially",
          "chinese": "词527",
          "pinyin": "cí527",
          "order": 7
        },
        {
          "id": "b9a4657d-9598-4f25-96e0-5fce97381059",
          "english": "essential",
          "chinese": "词528",
          "pinyin": "cí528",
          "order": 8
        },
        {
          "id": "6529cb02-df0b-4e91-bc8e-fb9b37ee1032",
          "english": "establish",
          "chinese": "词529",
          "pinyin": "cí529",
          "order": 9
        }
      ]
    },
    {
      "id": "c6306eda-fb72-4ee5-b083-d3a5140f5f5a",
      "name": "HSK 6 63",
      "description": "HSK 6 63 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "ac7f8615-cf32-4c8f-9139-2977af3217e8",
          "english": "establishment",
          "chinese": "词530",
          "pinyin": "cí530",
          "order": 0
        },
        {
          "id": "c16dfcad-5685-4590-b81a-aba6adbe5497",
          "english": "estate",
          "chinese": "词531",
          "pinyin": "cí531",
          "order": 1
        },
        {
          "id": "09284b61-3e2c-4787-9756-04bc2077974c",
          "english": "estimate",
          "chinese": "词532",
          "pinyin": "cí532",
          "order": 2
        },
        {
          "id": "aa8c4a0f-96fb-4a14-abd8-ba4011b35161",
          "english": "ethnic",
          "chinese": "词533",
          "pinyin": "cí533",
          "order": 3
        },
        {
          "id": "d3940507-a2b8-4900-bb1f-8dc60fc0eb4d",
          "english": "European",
          "chinese": "词534",
          "pinyin": "cí534",
          "order": 4
        },
        {
          "id": "97063a37-4590-4b9a-8105-a7029bf87158",
          "english": "evaluate",
          "chinese": "词535",
          "pinyin": "cí535",
          "order": 5
        },
        {
          "id": "b233f873-d55e-4936-88c5-a1c78406e86c",
          "english": "evaluation",
          "chinese": "词536",
          "pinyin": "cí536",
          "order": 6
        },
        {
          "id": "1e70698b-9d46-49db-ab0f-3a0f4658df72",
          "english": "even",
          "chinese": "词537",
          "pinyin": "cí537",
          "order": 7
        },
        {
          "id": "2f01e420-eab4-4dc8-a5ea-ea7bd9b4d6ba",
          "english": "evening",
          "chinese": "词538",
          "pinyin": "cí538",
          "order": 8
        },
        {
          "id": "a5087cda-51d5-484e-a320-7e01f43a8a79",
          "english": "event",
          "chinese": "词539",
          "pinyin": "cí539",
          "order": 9
        }
      ]
    },
    {
      "id": "fdc934c9-597b-4d22-b59f-73ca83b551d4",
      "name": "HSK 6 64",
      "description": "HSK 6 64 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "3383068d-f9f9-438d-a3af-013e0f9b7d68",
          "english": "eventually",
          "chinese": "词540",
          "pinyin": "cí540",
          "order": 0
        },
        {
          "id": "66ff6ab1-6e09-47eb-a046-f37dd36f8a24",
          "english": "ever",
          "chinese": "词541",
          "pinyin": "cí541",
          "order": 1
        },
        {
          "id": "8f5eee12-33c0-4f88-bf76-b93861d38d1a",
          "english": "every",
          "chinese": "词542",
          "pinyin": "cí542",
          "order": 2
        },
        {
          "id": "4daa0bd9-34a1-43e5-958a-c73308ddd0b2",
          "english": "everybody",
          "chinese": "词543",
          "pinyin": "cí543",
          "order": 3
        },
        {
          "id": "a0bd2fef-8f67-4fd5-803c-a715d63adf07",
          "english": "everyday",
          "chinese": "词544",
          "pinyin": "cí544",
          "order": 4
        },
        {
          "id": "04c5924f-5b05-4ded-b898-6136ca8532a1",
          "english": "everyone",
          "chinese": "词545",
          "pinyin": "cí545",
          "order": 5
        },
        {
          "id": "310ccc5f-2bb7-4ac0-9a39-679de3eec1ed",
          "english": "everything",
          "chinese": "词546",
          "pinyin": "cí546",
          "order": 6
        },
        {
          "id": "67ec8d7d-fbfc-44b7-ab3e-6a9504a35ae4",
          "english": "everywhere",
          "chinese": "词547",
          "pinyin": "cí547",
          "order": 7
        },
        {
          "id": "ea0a9898-4a1e-4feb-ae91-fd5e9b9d3a9c",
          "english": "evidence",
          "chinese": "词548",
          "pinyin": "cí548",
          "order": 8
        },
        {
          "id": "28561693-ab16-4ab0-bdbb-11331cee5367",
          "english": "evident",
          "chinese": "词549",
          "pinyin": "cí549",
          "order": 9
        }
      ]
    },
    {
      "id": "51496473-a8e7-4808-bbe1-be5500eaac27",
      "name": "HSK 6 65",
      "description": "HSK 6 65 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "0a3bfa12-676a-4cb5-9ec6-6cb9dd95d737",
          "english": "evil",
          "chinese": "词550",
          "pinyin": "cí550",
          "order": 0
        },
        {
          "id": "3eefe57f-71e4-4d4e-8130-22a363be224a",
          "english": "exact",
          "chinese": "词551",
          "pinyin": "cí551",
          "order": 1
        },
        {
          "id": "feb965f7-3862-49e4-a19e-5f3d93016121",
          "english": "exactly",
          "chinese": "词552",
          "pinyin": "cí552",
          "order": 2
        },
        {
          "id": "502d7cc2-4930-4bc2-9a40-1a3e1db9a676",
          "english": "examination",
          "chinese": "词553",
          "pinyin": "cí553",
          "order": 3
        },
        {
          "id": "36dc221c-ae29-4395-86bc-485e527cd544",
          "english": "examine",
          "chinese": "词554",
          "pinyin": "cí554",
          "order": 4
        },
        {
          "id": "b51fd944-2322-48e0-abd1-b01d61aa9575",
          "english": "example",
          "chinese": "词555",
          "pinyin": "cí555",
          "order": 5
        },
        {
          "id": "e8b68159-0d5b-45c3-87c5-afc0aac51396",
          "english": "excellent",
          "chinese": "词556",
          "pinyin": "cí556",
          "order": 6
        },
        {
          "id": "b0aef73b-cca9-4eaf-a51e-a24089a00922",
          "english": "except",
          "chinese": "词557",
          "pinyin": "cí557",
          "order": 7
        },
        {
          "id": "70aa36a8-056e-4489-8981-30e864df147c",
          "english": "exception",
          "chinese": "词558",
          "pinyin": "cí558",
          "order": 8
        },
        {
          "id": "ee3a3cd6-5520-432f-9cb2-241a20bd426f",
          "english": "exchange",
          "chinese": "词559",
          "pinyin": "cí559",
          "order": 9
        }
      ]
    },
    {
      "id": "91ec43fa-1ff7-43a3-a6e0-dbe5b8e936b2",
      "name": "HSK 6 66",
      "description": "HSK 6 66 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "1881243f-25d4-4c69-8173-4833310c7e20",
          "english": "excited",
          "chinese": "词560",
          "pinyin": "cí560",
          "order": 0
        },
        {
          "id": "68013082-e3e5-4fee-b24a-f848e1c4dcb9",
          "english": "excitement",
          "chinese": "词561",
          "pinyin": "cí561",
          "order": 1
        },
        {
          "id": "2c1d583f-b8f9-4bd0-a156-0564f8eaf88c",
          "english": "exciting",
          "chinese": "词562",
          "pinyin": "cí562",
          "order": 2
        },
        {
          "id": "4460fdba-c738-452f-894f-52ed6f09db24",
          "english": "exclude",
          "chinese": "词563",
          "pinyin": "cí563",
          "order": 3
        },
        {
          "id": "49059df2-a0c5-4fd8-bb8a-cd5210896153",
          "english": "executive",
          "chinese": "词564",
          "pinyin": "cí564",
          "order": 4
        },
        {
          "id": "ea98409c-1b68-464e-b97a-3f12b41f321d",
          "english": "exercise",
          "chinese": "词565",
          "pinyin": "cí565",
          "order": 5
        },
        {
          "id": "2182c4fe-78c8-4d95-a9f2-a009bcf07ec7",
          "english": "exhibit",
          "chinese": "词566",
          "pinyin": "cí566",
          "order": 6
        },
        {
          "id": "d5fcc235-9f39-4b81-9d27-2b8d9d1a29a3",
          "english": "exhibition",
          "chinese": "词567",
          "pinyin": "cí567",
          "order": 7
        },
        {
          "id": "2d8a1c9b-0793-47bf-a242-780b0a118c70",
          "english": "exist",
          "chinese": "词568",
          "pinyin": "cí568",
          "order": 8
        },
        {
          "id": "6fce1f74-0032-4321-80e7-211d99d6cf9d",
          "english": "existence",
          "chinese": "词569",
          "pinyin": "cí569",
          "order": 9
        }
      ]
    },
    {
      "id": "283896b9-14fb-4b39-9f46-530e7fbdd2e6",
      "name": "HSK 6 67",
      "description": "HSK 6 67 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "0072906e-e590-4be6-baa1-ef61af01e4fe",
          "english": "existing",
          "chinese": "词570",
          "pinyin": "cí570",
          "order": 0
        },
        {
          "id": "b72eb38c-5067-423a-899e-729c07ee8371",
          "english": "exit",
          "chinese": "词571",
          "pinyin": "cí571",
          "order": 1
        },
        {
          "id": "9d5ea431-acc1-4a8e-a74d-875d3b562293",
          "english": "expand",
          "chinese": "词572",
          "pinyin": "cí572",
          "order": 2
        },
        {
          "id": "4dc080a6-f6b0-49d6-b926-903b52b47191",
          "english": "expansion",
          "chinese": "词573",
          "pinyin": "cí573",
          "order": 3
        },
        {
          "id": "a75f4984-d65b-49ac-a7ba-7690540fde43",
          "english": "expect",
          "chinese": "词574",
          "pinyin": "cí574",
          "order": 4
        },
        {
          "id": "8996d078-7093-4761-b8c1-4d3925821d30",
          "english": "expectation",
          "chinese": "词575",
          "pinyin": "cí575",
          "order": 5
        },
        {
          "id": "dd1b1942-0dd9-4c96-955a-f4f8b2fa0486",
          "english": "expected",
          "chinese": "词576",
          "pinyin": "cí576",
          "order": 6
        },
        {
          "id": "d2e60ed9-ba5f-4546-8ba2-032546abc043",
          "english": "expense",
          "chinese": "词577",
          "pinyin": "cí577",
          "order": 7
        },
        {
          "id": "8d969326-6d1c-4753-a36b-4034a0c25008",
          "english": "expensive",
          "chinese": "词578",
          "pinyin": "cí578",
          "order": 8
        },
        {
          "id": "35812f09-1117-41a3-a5c4-49f6bae0dc71",
          "english": "experience",
          "chinese": "词579",
          "pinyin": "cí579",
          "order": 9
        }
      ]
    },
    {
      "id": "0a03cb1c-0466-46ee-a3e6-81de6e4f6543",
      "name": "HSK 6 68",
      "description": "HSK 6 68 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "8488faa9-1f75-4c4c-b2ce-a37593da9a66",
          "english": "experiment",
          "chinese": "词580",
          "pinyin": "cí580",
          "order": 0
        },
        {
          "id": "6492d43e-8e49-42bd-bcfd-06b06478ef72",
          "english": "expert",
          "chinese": "词581",
          "pinyin": "cí581",
          "order": 1
        },
        {
          "id": "36bd609d-274d-4094-a2a1-0343ede1217f",
          "english": "explain",
          "chinese": "词582",
          "pinyin": "cí582",
          "order": 2
        },
        {
          "id": "69754430-5ee8-411d-bb31-ebf65ae255a4",
          "english": "explanation",
          "chinese": "词583",
          "pinyin": "cí583",
          "order": 3
        },
        {
          "id": "b2a8d783-1c2b-487e-9893-20f6bb147219",
          "english": "explore",
          "chinese": "词584",
          "pinyin": "cí584",
          "order": 4
        },
        {
          "id": "2b797c3d-7586-4d62-9077-443cd8b36411",
          "english": "explosion",
          "chinese": "词585",
          "pinyin": "cí585",
          "order": 5
        },
        {
          "id": "39197db4-975f-478b-b8fc-9ce647d93bfb",
          "english": "export",
          "chinese": "词586",
          "pinyin": "cí586",
          "order": 6
        },
        {
          "id": "e747e67f-69f4-407b-ae18-726dbf84be5d",
          "english": "expose",
          "chinese": "词587",
          "pinyin": "cí587",
          "order": 7
        },
        {
          "id": "5452b481-8b0d-4e34-980c-eb4ed46279b5",
          "english": "express",
          "chinese": "词588",
          "pinyin": "cí588",
          "order": 8
        },
        {
          "id": "759d3242-7ed7-4e18-9ef8-bbc13809cd2e",
          "english": "expression",
          "chinese": "词589",
          "pinyin": "cí589",
          "order": 9
        }
      ]
    },
    {
      "id": "81c1ab91-2669-4e0e-afad-a9ccfac903bd",
      "name": "HSK 6 69",
      "description": "HSK 6 69 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "41997075-ac64-45e7-9d84-cde15bcbe02a",
          "english": "extend",
          "chinese": "词590",
          "pinyin": "cí590",
          "order": 0
        },
        {
          "id": "79105edf-1a00-4747-b3f8-35e8c072b889",
          "english": "extension",
          "chinese": "词591",
          "pinyin": "cí591",
          "order": 1
        },
        {
          "id": "779bbfa7-b61b-4ddf-a68f-82d3d22aae09",
          "english": "extensive",
          "chinese": "词592",
          "pinyin": "cí592",
          "order": 2
        },
        {
          "id": "6f8a971f-53b9-428b-bfa6-d440c054c88a",
          "english": "extent",
          "chinese": "词593",
          "pinyin": "cí593",
          "order": 3
        },
        {
          "id": "6c9ba32d-7d8f-4d23-be14-23135690b3c0",
          "english": "external",
          "chinese": "词594",
          "pinyin": "cí594",
          "order": 4
        },
        {
          "id": "4cc2fee8-6e6a-4cf1-87fe-65f95752ccaf",
          "english": "extra",
          "chinese": "词595",
          "pinyin": "cí595",
          "order": 5
        },
        {
          "id": "447fe4ec-6947-4e1b-bdb2-fcfb57610676",
          "english": "extreme",
          "chinese": "词596",
          "pinyin": "cí596",
          "order": 6
        },
        {
          "id": "5800ac16-f4e7-475d-bd7a-177f9fb829de",
          "english": "extremely",
          "chinese": "词597",
          "pinyin": "cí597",
          "order": 7
        },
        {
          "id": "b5fc096c-cf6a-4c10-886f-e9be6bdefbc9",
          "english": "face",
          "chinese": "词598",
          "pinyin": "cí598",
          "order": 8
        },
        {
          "id": "36e0282c-f865-438a-a4bd-e93b4f1673b5",
          "english": "facility",
          "chinese": "词599",
          "pinyin": "cí599",
          "order": 9
        }
      ]
    },
    {
      "id": "cd7af4c2-80e1-4711-9277-f0f83f525ac1",
      "name": "HSK 6 7",
      "description": "HSK 6 7 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "c8b0ef6d-6907-444d-9cef-26101a86920b",
          "english": "minimization",
          "chinese": "最小化",
          "pinyin": "zuìxiǎohuà",
          "order": 0
        },
        {
          "id": "8e02ab03-d931-4f4e-a475-d02b9fea5254",
          "english": "constraint",
          "chinese": "约束",
          "pinyin": "yuēshù",
          "order": 1
        },
        {
          "id": "45870a8d-880a-4e74-84f6-e3934479db83",
          "english": "limitation",
          "chinese": "限制",
          "pinyin": "xiànzhì",
          "order": 2
        },
        {
          "id": "067047c2-121b-4776-8515-2e742bdeb7e6",
          "english": "restriction",
          "chinese": "限定",
          "pinyin": "xiàndìng",
          "order": 3
        },
        {
          "id": "ebf36af6-2854-4709-a3e0-89ec7102f4ef",
          "english": "boundary",
          "chinese": "边界",
          "pinyin": "biānjiè",
          "order": 4
        },
        {
          "id": "13519c9a-9029-4879-b6a7-30e7bc9ab60c",
          "english": "threshold",
          "chinese": "阈值",
          "pinyin": "yùzhí",
          "order": 5
        },
        {
          "id": "9c81e013-f272-4f4c-8b19-1dfa6ab471c6",
          "english": "limit",
          "chinese": "极限",
          "pinyin": "jíxiàn",
          "order": 6
        },
        {
          "id": "ec2a37bb-55de-4954-aca4-850597a778db",
          "english": "maximum",
          "chinese": "最大值",
          "pinyin": "zuìdàzhí",
          "order": 7
        },
        {
          "id": "033e2f83-ca3b-4b89-8729-2e11260f4018",
          "english": "minimum",
          "chinese": "最小值",
          "pinyin": "zuìxiǎozhí",
          "order": 8
        },
        {
          "id": "822ec2aa-8edd-423a-8e96-0ad50385ed1d",
          "english": "peak",
          "chinese": "峰值",
          "pinyin": "fēngzhí",
          "order": 9
        }
      ]
    },
    {
      "id": "54e37f30-db5b-420a-bf00-7dc3fc70892d",
      "name": "HSK 6 70",
      "description": "HSK 6 70 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "4ccd5d23-a350-4051-baeb-8eafbf9fd112",
          "english": "fact",
          "chinese": "词600",
          "pinyin": "cí600",
          "order": 0
        },
        {
          "id": "b7f3e6d3-fc03-4b5f-8583-16c9b6fb8557",
          "english": "factor",
          "chinese": "词601",
          "pinyin": "cí601",
          "order": 1
        },
        {
          "id": "50fecb58-bb01-4815-83a8-f73b050f925a",
          "english": "factory",
          "chinese": "词602",
          "pinyin": "cí602",
          "order": 2
        },
        {
          "id": "6216ed8c-2c96-47bc-8b6e-5b61ec83d20f",
          "english": "faculty",
          "chinese": "词603",
          "pinyin": "cí603",
          "order": 3
        },
        {
          "id": "740b46e8-b854-43ab-8d58-ed2da4393811",
          "english": "fail",
          "chinese": "词604",
          "pinyin": "cí604",
          "order": 4
        },
        {
          "id": "8f723fc0-4056-4e99-a2d7-7e6037c73758",
          "english": "failure",
          "chinese": "词605",
          "pinyin": "cí605",
          "order": 5
        },
        {
          "id": "8c5dd33d-c8ce-4cda-b4cc-a4f20a3a543a",
          "english": "fair",
          "chinese": "词606",
          "pinyin": "cí606",
          "order": 6
        },
        {
          "id": "6f50e055-18a1-433e-b912-a0da72c529ab",
          "english": "fairly",
          "chinese": "词607",
          "pinyin": "cí607",
          "order": 7
        },
        {
          "id": "7860c693-ca0d-4b02-b633-4c49a6489c98",
          "english": "faith",
          "chinese": "词608",
          "pinyin": "cí608",
          "order": 8
        },
        {
          "id": "f9ac91a5-38dd-4231-b50d-a93b40246134",
          "english": "fall",
          "chinese": "词609",
          "pinyin": "cí609",
          "order": 9
        }
      ]
    },
    {
      "id": "3fd91230-1c43-4af5-b317-7d7c8bc98ad0",
      "name": "HSK 6 71",
      "description": "HSK 6 71 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "d262907d-3121-4be8-b753-49be94d67fe9",
          "english": "false",
          "chinese": "词610",
          "pinyin": "cí610",
          "order": 0
        },
        {
          "id": "2b71efe6-29c8-47f0-8f76-27748cf51809",
          "english": "familiar",
          "chinese": "词611",
          "pinyin": "cí611",
          "order": 1
        },
        {
          "id": "cc927601-76a7-4a2d-a2af-e60cb0202984",
          "english": "family",
          "chinese": "词612",
          "pinyin": "cí612",
          "order": 2
        },
        {
          "id": "c2ada044-4da2-4962-8f70-70bce24de573",
          "english": "famous",
          "chinese": "词613",
          "pinyin": "cí613",
          "order": 3
        },
        {
          "id": "37931f7e-5c99-4250-86e1-6cba1758947c",
          "english": "fantasy",
          "chinese": "词614",
          "pinyin": "cí614",
          "order": 4
        },
        {
          "id": "5ebbd281-25a8-4dc3-9239-6790187b49e9",
          "english": "farm",
          "chinese": "词615",
          "pinyin": "cí615",
          "order": 5
        },
        {
          "id": "8efc027c-8885-4a6f-ab6c-5d40bd92b359",
          "english": "farmer",
          "chinese": "词616",
          "pinyin": "cí616",
          "order": 6
        },
        {
          "id": "6979223a-4a8a-4d32-852e-674ceeec2736",
          "english": "fashion",
          "chinese": "词617",
          "pinyin": "cí617",
          "order": 7
        },
        {
          "id": "9a683a57-ebe2-4f48-b9d7-13704e2bc25a",
          "english": "fast",
          "chinese": "词618",
          "pinyin": "cí618",
          "order": 8
        },
        {
          "id": "2a2c5c52-e969-4920-88fc-86c45d7100cc",
          "english": "father",
          "chinese": "词619",
          "pinyin": "cí619",
          "order": 9
        }
      ]
    },
    {
      "id": "4b41a9e6-40f6-4036-a146-33f9936fc53f",
      "name": "HSK 6 8",
      "description": "HSK 6 8 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "84cd020b-e03b-4ca2-a162-f99f9ac9f4d6",
          "english": "summit",
          "chinese": "顶峰",
          "pinyin": "dǐngfēng",
          "order": 0
        },
        {
          "id": "3d2eebdf-24a3-46e6-94cb-aa718ac6e0d3",
          "english": "apex",
          "chinese": "顶点",
          "pinyin": "dǐngdiǎn",
          "order": 1
        },
        {
          "id": "c4b4a9e8-3034-43b7-bfbc-776fe9f0b893",
          "english": "vertex",
          "chinese": "顶点",
          "pinyin": "dǐngdiǎn",
          "order": 2
        },
        {
          "id": "be0c99d9-a909-42ad-952c-3ae483a56e33",
          "english": "edge",
          "chinese": "边缘",
          "pinyin": "biānyuán",
          "order": 3
        },
        {
          "id": "bd39786d-92b7-49ea-81e4-10dc2774b10d",
          "english": "margin",
          "chinese": "边距",
          "pinyin": "biānjù",
          "order": 4
        },
        {
          "id": "03aecc35-c3a6-48d4-918d-756da07ceda2",
          "english": "border",
          "chinese": "边界",
          "pinyin": "biānjiè",
          "order": 5
        },
        {
          "id": "d8fbcb12-7d0f-4203-88e9-be04452e1387",
          "english": "perimeter",
          "chinese": "周长",
          "pinyin": "zhōucháng",
          "order": 6
        },
        {
          "id": "dc3863c3-275e-4513-9aa5-26ae837a1002",
          "english": "circumference",
          "chinese": "圆周",
          "pinyin": "yuánzhōu",
          "order": 7
        },
        {
          "id": "74c6cc22-fbee-4c79-923e-9ea4d9d9ed60",
          "english": "diameter",
          "chinese": "直径",
          "pinyin": "zhíjìng",
          "order": 8
        },
        {
          "id": "29e73f02-9043-4896-a099-424cd48354fd",
          "english": "radius",
          "chinese": "半径",
          "pinyin": "bànjìng",
          "order": 9
        }
      ]
    },
    {
      "id": "d0d1615b-5afb-45a5-b453-564024005efb",
      "name": "HSK 6 9",
      "description": "HSK 6 9 - Authentic HSK Level 6 vocabulary",
      "hsklevel": 6,
      "wordCount": 10,
      "words": [
        {
          "id": "65a56fcb-2c0d-4b41-b049-ce5013046a2c",
          "english": "circle",
          "chinese": "圆",
          "pinyin": "yuán",
          "order": 0
        },
        {
          "id": "1692caad-394c-45e7-bfac-79e11e10913a",
          "english": "sphere",
          "chinese": "球",
          "pinyin": "qiú",
          "order": 1
        },
        {
          "id": "0955ff5a-ebc3-4fc4-a8b3-4cc05d2917f8",
          "english": "triangle",
          "chinese": "三角形",
          "pinyin": "sānjiǎoxíng",
          "order": 2
        },
        {
          "id": "429b371b-7297-45be-80c5-5fea857da892",
          "english": "rectangle",
          "chinese": "矩形",
          "pinyin": "jǔxíng",
          "order": 3
        },
        {
          "id": "4ee6e87e-5259-4e2a-8a2f-91a14bb71966",
          "english": "square",
          "chinese": "正方形",
          "pinyin": "zhèngfāngxíng",
          "order": 4
        },
        {
          "id": "a8913100-5b40-466d-9d67-2791b52875f6",
          "english": "polygon",
          "chinese": "多边形",
          "pinyin": "duōbiānxíng",
          "order": 5
        },
        {
          "id": "eb56ec4b-4442-4ba8-a9a7-f1864b230d85",
          "english": "parallelogram",
          "chinese": "平行四边形",
          "pinyin": "píngxíngsìbiānxíng",
          "order": 6
        },
        {
          "id": "3cfb3dd6-738c-44c9-921b-54e974e4420a",
          "english": "trapezoid",
          "chinese": "梯形",
          "pinyin": "tīxíng",
          "order": 7
        },
        {
          "id": "462d2b51-8764-42a0-82b8-ef5dcd510a36",
          "english": "rhombus",
          "chinese": "菱形",
          "pinyin": "língxíng",
          "order": 8
        },
        {
          "id": "07fe9062-1119-443c-b661-3f80a206d269",
          "english": "ellipse",
          "chinese": "椭圆",
          "pinyin": "tuǒyuán",
          "order": 9
        }
      ]
    }
  ]
};

// Helper functions for client-only access
export const getGroupsByHSKLevel = (level: number): WordGroup[] => {
  return VOCABULARY_DATA.groups.filter(group => group.hsklevel === level);
};

export const getAllWords = (): VocabularyWord[] => {
  return VOCABULARY_DATA.groups.flatMap(group => group.words);
};

export const getGroupById = (id: string): WordGroup | undefined => {
  return VOCABULARY_DATA.groups.find(group => group.id === id);
};

export const getWordsForGroup = (groupId: string): VocabularyWord[] => {
  const group = getGroupById(groupId);
  return group ? group.words : [];
};
