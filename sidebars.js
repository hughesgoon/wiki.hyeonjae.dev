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
        'math-stats/ai-statistics/index',
        {
          type: 'category',
          label: '확률 기초',
          items: [
            'math-stats/ai-statistics/basic/probability',
            'math-stats/ai-statistics/basic/conditional-probability-and-bayes-theorem',
            'math-stats/ai-statistics/basic/random-variable-and-distribution',
          ],
        },
      ],
    },
  ],
};
