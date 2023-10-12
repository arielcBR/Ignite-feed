/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import  ptBR  from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'


export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([1, 2])

    const { avatarUrl, name, role} = author
    const publishedDateFormated = format(publishedAt, "d  'de' LLLL 'ás' HH:MM'h'", {locale: ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})

    function handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments, 3])  
        console.log(comments);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{name}</strong>
                        <span>{role}</span>
                    </div> 
                </div>
                 

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map(line => {
                        if(line.type === 'paragraph')
                            return <p>{line.content}</p>
                        else if (line.type === 'link')
                            return <p><a href="#">{line.content}</a></p>
                            
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment/>
                })}
            </div>
        </article>
    )
}