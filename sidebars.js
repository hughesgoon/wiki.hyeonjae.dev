module.exports = {
  cse: [
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'cse',
    },
  ],

  mathstats: [
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'math-stats',
    },
    {
      type: 'category',
      label: 'AI를 위한 수리통계학',
      items: [
        {
          type: 'category',
          label: '확률 기초',
          items: [
            'math-stats/ai-statistics/basic/probability',
            'math-stats/ai-statistics/basic/conditional-probability-and-bayes-theorem',
          ],
        },
      ],
    },
  ],
};
