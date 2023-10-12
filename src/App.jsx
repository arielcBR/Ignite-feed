import { Post } from "./components/Post/Post"
import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/arielcBR.png',
      name: 'Ariel Campos',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content:'jane.design/doctorcare'} 
    ],
    publishedAt: new Date('2023-10-10 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CT0'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content:'jane.design/doctorcare'} 
    ],
    publishedAt: new Date('2023-10-11 21:00:00')
  },
]

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          {
            posts.map(post => (
              <Post 
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
          
        </main>

      </div>
    </div>
  )
}

