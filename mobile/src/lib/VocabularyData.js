// Mobile vocabulary data structure matching the web app's schema

export const vocabularyGroups = [
  // HSK 1 Groups
  {
    id: 'hsk1-1',
    title: 'HSK 1-1',
    description: 'Basic Family & People',
    wordCount: 10,
    hskLevel: 1,
    orderIndex: 1,
    isLearned: 0
  },
  {
    id: 'hsk1-2', 
    title: 'HSK 1-2',
    description: 'Numbers & Time',
    wordCount: 10,
    hskLevel: 1,
    orderIndex: 2,
    isLearned: 0
  },
  {
    id: 'hsk1-3',
    title: 'HSK 1-3', 
    description: 'Basic Actions',
    wordCount: 10,
    hskLevel: 1,
    orderIndex: 3,
    isLearned: 0
  },
  // More groups will be loaded from the web app's data
];

export const vocabularyWords = {
  'hsk1-1': [
    {
      id: 1,
      englishText: 'father',
      chineseText: '爸爸',
      pinyinText: 'bàba'
    },
    {
      id: 2,
      englishText: 'mother',
      chineseText: '妈妈', 
      pinyinText: 'māma'
    },
    {
      id: 3,
      englishText: 'older brother',
      chineseText: '哥哥',
      pinyinText: 'gēge'
    },
    {
      id: 4,
      englishText: 'older sister',
      chineseText: '姐姐',
      pinyinText: 'jiějie'
    },
    {
      id: 5,
      englishText: 'younger brother',
      chineseText: '弟弟',
      pinyinText: 'dìdi'
    },
    {
      id: 6,
      englishText: 'younger sister',
      chineseText: '妹妹',
      pinyinText: 'mèimei'
    },
    {
      id: 7,
      englishText: 'son',
      chineseText: '儿子',
      pinyinText: 'érzi'
    },
    {
      id: 8,
      englishText: 'daughter',
      chineseText: '女儿',
      pinyinText: 'nǚ\'ér'
    },
    {
      id: 9,
      englishText: 'teacher',
      chineseText: '老师',
      pinyinText: 'lǎoshī'
    },
    {
      id: 10,
      englishText: 'student',
      chineseText: '学生',
      pinyinText: 'xuéshēng'
    }
  ],
  'hsk1-2': [
    {
      id: 11,
      englishText: 'one',
      chineseText: '一',
      pinyinText: 'yī'
    },
    {
      id: 12,
      englishText: 'two',
      chineseText: '二',
      pinyinText: 'èr'
    },
    {
      id: 13,
      englishText: 'three',
      chineseText: '三',
      pinyinText: 'sān'
    },
    {
      id: 14,
      englishText: 'four',
      chineseText: '四',
      pinyinText: 'sì'
    },
    {
      id: 15,
      englishText: 'five',
      chineseText: '五',
      pinyinText: 'wǔ'
    },
    {
      id: 16,
      englishText: 'six',
      chineseText: '六',
      pinyinText: 'liù'
    },
    {
      id: 17,
      englishText: 'seven',
      chineseText: '七',
      pinyinText: 'qī'
    },
    {
      id: 18,
      englishText: 'eight',
      chineseText: '八',
      pinyinText: 'bā'
    },
    {
      id: 19,
      englishText: 'nine',
      chineseText: '九',
      pinyinText: 'jiǔ'
    },
    {
      id: 20,
      englishText: 'ten',
      chineseText: '十',
      pinyinText: 'shí'
    }
  ],
  'hsk1-3': [
    {
      id: 21,
      englishText: 'eat',
      chineseText: '吃',
      pinyinText: 'chī'
    },
    {
      id: 22,
      englishText: 'drink',
      chineseText: '喝',
      pinyinText: 'hē'
    },
    {
      id: 23,
      englishText: 'go',
      chineseText: '去',
      pinyinText: 'qù'
    },
    {
      id: 24,
      englishText: 'come',
      chineseText: '来',
      pinyinText: 'lái'
    },
    {
      id: 25,
      englishText: 'see',
      chineseText: '看',
      pinyinText: 'kàn'
    },
    {
      id: 26,
      englishText: 'listen',
      chineseText: '听',
      pinyinText: 'tīng'
    },
    {
      id: 27,
      englishText: 'speak',
      chineseText: '说',
      pinyinText: 'shuō'
    },
    {
      id: 28,
      englishText: 'read',
      chineseText: '读',
      pinyinText: 'dú'
    },
    {
      id: 29,
      englishText: 'write',
      chineseText: '写',
      pinyinText: 'xiě'
    },
    {
      id: 30,
      englishText: 'study',
      chineseText: '学',
      pinyinText: 'xué'
    }
  ]
};

// API integration functions to sync with web app
export class VocabularyAPI {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  // Fetch all vocabulary groups from web app
  async fetchGroups() {
    try {
      // In development, we'll start with local data
      // In production, this would fetch from the web app's API
      return vocabularyGroups;
    } catch (error) {
      console.error('Failed to fetch groups:', error);
      return vocabularyGroups; // Fallback to local data
    }
  }

  // Fetch words for a specific group
  async fetchGroupWords(groupId) {
    try {
      // In development, return local data
      return vocabularyWords[groupId] || [];
    } catch (error) {
      console.error('Failed to fetch group words:', error);
      return vocabularyWords[groupId] || [];
    }
  }

  // Update group learned status
  async updateGroupStatus(groupId, isLearned) {
    try {
      // Find and update the group locally
      const group = vocabularyGroups.find(g => g.id === groupId);
      if (group) {
        group.isLearned = isLearned ? 1 : 0;
      }
      
      // In production, this would sync with the web app's API
      console.log('Updated group status:', groupId, isLearned);
      return true;
    } catch (error) {
      console.error('Failed to update group status:', error);
      return false;
    }
  }
}

export const vocabularyAPI = new VocabularyAPI();