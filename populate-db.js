import { Pool } from '@neondatabase/serverless';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const sampleGroups = [
  {
    title: 'Basic Greetings',
    description: 'Essential greetings and polite expressions',
  },
  {
    title: 'Family & People',
    description: 'Family members and common relationships',
  },
  {
    title: 'Food & Dining', 
    description: 'Food items and restaurant vocabulary',
  },
  {
    title: 'Daily Activities',
    description: 'Common daily actions and activities',
  },
  {
    title: 'Numbers & Time',
    description: 'Numbers, time expressions, and dates',
  }
];

const sampleWords = {
  'Basic Greetings': [
    { englishText: 'hello', chineseText: '你好' },
    { englishText: 'goodbye', chineseText: '再见' },
    { englishText: 'thank you', chineseText: '谢谢' },
    { englishText: 'please', chineseText: '请' },
    { englishText: 'excuse me', chineseText: '不好意思' },
    { englishText: 'sorry', chineseText: '对不起' },
    { englishText: 'good morning', chineseText: '早上好' },
    { englishText: 'good evening', chineseText: '晚上好' },
    { englishText: 'how are you', chineseText: '你好吗' },
    { englishText: 'nice to meet you', chineseText: '很高兴认识你' }
  ],
  'Family & People': [
    { englishText: 'mother', chineseText: '妈妈' },
    { englishText: 'father', chineseText: '爸爸' },
    { englishText: 'child', chineseText: '孩子' },
    { englishText: 'friend', chineseText: '朋友' },
    { englishText: 'teacher', chineseText: '老师' },
    { englishText: 'student', chineseText: '学生' },
    { englishText: 'brother', chineseText: '兄弟' },
    { englishText: 'sister', chineseText: '姐妹' },
    { englishText: 'husband', chineseText: '丈夫' },
    { englishText: 'wife', chineseText: '妻子' }
  ],
  'Food & Dining': [
    { englishText: 'rice', chineseText: '米饭' },
    { englishText: 'water', chineseText: '水' },
    { englishText: 'tea', chineseText: '茶' },
    { englishText: 'coffee', chineseText: '咖啡' },
    { englishText: 'bread', chineseText: '面包' },
    { englishText: 'meat', chineseText: '肉' },
    { englishText: 'vegetable', chineseText: '蔬菜' },
    { englishText: 'fruit', chineseText: '水果' },
    { englishText: 'restaurant', chineseText: '餐厅' },
    { englishText: 'delicious', chineseText: '好吃' }
  ],
  'Daily Activities': [
    { englishText: 'eat', chineseText: '吃' },
    { englishText: 'sleep', chineseText: '睡觉' },
    { englishText: 'work', chineseText: '工作' },
    { englishText: 'study', chineseText: '学习' },
    { englishText: 'walk', chineseText: '走路' },
    { englishText: 'run', chineseText: '跑步' },
    { englishText: 'read', chineseText: '读书' },
    { englishText: 'write', chineseText: '写字' },
    { englishText: 'listen', chineseText: '听' },
    { englishText: 'speak', chineseText: '说话' }
  ],
  'Numbers & Time': [
    { englishText: 'one', chineseText: '一' },
    { englishText: 'two', chineseText: '二' },
    { englishText: 'three', chineseText: '三' },
    { englishText: 'ten', chineseText: '十' },
    { englishText: 'today', chineseText: '今天' },
    { englishText: 'tomorrow', chineseText: '明天' },
    { englishText: 'yesterday', chineseText: '昨天' },
    { englishText: 'time', chineseText: '时间' },
    { englishText: 'hour', chineseText: '小时' },
    { englishText: 'minute', chineseText: '分钟' }
  ]
};

async function populateData() {
  try {
    console.log('Starting database population...');
    
    // Clear existing data
    await pool.query('DELETE FROM vocabulary_words');
    await pool.query('DELETE FROM word_groups');
    
    // Insert groups
    for (const [index, group] of sampleGroups.entries()) {
      const groupResult = await pool.query(`
        INSERT INTO word_groups (id, title, description, is_learned, created_at)
        VALUES ($1, $2, $3, $4, $5) RETURNING id
      `, [`group_${index + 1}`, group.title, group.description, 0, new Date()]);
      
      const groupId = groupResult.rows[0].id;
      console.log(`Inserted group: ${group.title} (${groupId})`);
      
      // Insert words for this group
      const words = sampleWords[group.title];
      for (const [wordIndex, word] of words.entries()) {
        await pool.query(`
          INSERT INTO vocabulary_words (id, group_id, english_text, chinese_text, order_index)
          VALUES ($1, $2, $3, $4, $5)
        `, [`word_${groupId}_${wordIndex}`, groupId, word.englishText, word.chineseText, wordIndex]);
      }
      
      console.log(`Inserted ${words.length} words for ${group.title}`);
    }
    
    console.log('Database populated successfully!');
    
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    await pool.end();
  }
}

populateData();