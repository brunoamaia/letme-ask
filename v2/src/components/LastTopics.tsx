import router from 'next/router';

import { LastTopicsStyles } from '../styles/last-topics'

type LastTopicsProps = {
  data: Array<Topics>
}
interface Topics {
  id: string
  countQuestions: number
  title: string
}

export function LastTopics({ data }: LastTopicsProps) {
  data.sort(function (a, b) {
    if (a.countQuestions > b.countQuestions) {
      return -1
    }
    if (a.countQuestions < b.countQuestions) {
      return 1
    }
    return 0
  })

  return (
    <LastTopicsStyles>
      <h3>Tópicos com mais qestões</h3>
      {data.length > 0 && data.map(topic => {
        return (
          <div
            className="items" key={topic.id}
            onClick={() => { router.push(`/rooms/${topic.id}`) }}
          >
            <p>{topic.title}</p>
            <span>{topic.countQuestions}</span>
          </div>
        )
      })}
    </LastTopicsStyles>
  )
}