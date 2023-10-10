import { Post } from "./Post"
import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"

import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post
            author='Ariel Campos'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, fugiat!'
          />
          <Post
            author='Aldana Fresca'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, fugiat!'
          />
          
        </main>

      </div>
    </div>
  )
}
