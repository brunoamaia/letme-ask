import { useEffect, useState } from "react"

import { database } from "../services/firebase"

type TopicsProps = Array<Topics>
interface Topics {
  id: string
  countQuestions: number
  title: string
}

interface FirebaseData {
  link: Record<string, {
    title: string
  }>
}

export function useQuestions() {
  const [topics, setTopics] = useState<TopicsProps>()

  useEffect(() => {
    // get data from SessionStorage
    const localData = sessionStorage.getItem('DATA_TOPICS_FIREBASE')

    if (localData == null) {
      // get data from Firebase Realtime Database
      const dataRef = database.ref()

      dataRef.child("rooms").get().then((room) => {
        if (room.exists()) {
          const allTopics: FirebaseData = room.val()

          const parsedTopics = Object.entries(allTopics).map(([key, value]) => {
            return {
              id: key,
              title: value.title,
              countQuestions: Object.values(value.questions ?? {}).length
            }
          })
          setTopics(parsedTopics)

          sessionStorage.setItem('DATA_TOPICS_FIREBASE', JSON.stringify(parsedTopics))
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    } else {
      // use data from sessionStorage
      setTopics(JSON.parse(localData))
    }

  }, [])

  return { topics }
}