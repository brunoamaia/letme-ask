import router from 'next/router';
import { useEffect, useState } from 'react';
import { useQuestions } from '../../../hooks/useQuestions';

import { LastTopicsStyles } from './styles'

type TopicsProps = Array<Topics> | null
interface Topics {
  id: string
  countQuestions: number
  title: string
}

export function LastTopics() {
  const { topics } = useQuestions()
  const [dataTopics, setDataTopics] = useState<TopicsProps>()
  useEffect(() => {
    setDataTopics(topics)
  }, [topics])

  if (dataTopics != null) {
    dataTopics.sort(function (a, b) {
      if (a.countQuestions > b.countQuestions) {
        return -1
      }
      if (a.countQuestions < b.countQuestions) {
        return 1
      }
      return 0
    })
  }

  return (
    <LastTopicsStyles>
      {dataTopics != null && (
        <>
          <h3>Tópicos com mais qestões</h3>
          {dataTopics.length > 0 && dataTopics.map(topic => {
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
        </>
      )}
    </LastTopicsStyles>
  )
}