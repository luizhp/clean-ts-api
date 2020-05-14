export const surveyResultAnswerSchema = {
  type: 'object',
  properties: {
    image: {
      type: 'string'
    },
    answer: {
      type: 'string'
    },
    count: {
      type: 'number',
      format: 'double'
    },
    percent: {
      type: 'number',
      format: 'double'
    }
  },
  required: ['answer', 'count', 'percent']
}