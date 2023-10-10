export function Post({author, content}){
    return (
        <div>
            <p>Hello <strong>{author}</strong>!</p>
            <p>{content}</p>
        </div>
    )
}