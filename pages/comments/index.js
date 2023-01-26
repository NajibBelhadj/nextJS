import { useState } from "react";

export default function CommentsPage() {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const fetchComments = async () => {
        const res = await fetch('/api/comments');
        const data = await res.json();
        setComments(data);
    }
    const submitComment = async () => {
        const res = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        setComments([...comments, data])
    }

    const deleteComment = async (commentId) => {
        const res = await fetch(`/api/comments/${commentId}`,
            { method: 'DELETE' }
        );
        const data = await res.json();
        fetchComments();
    }
    return (
        <>
            <div>
                <input type='text' value={comment} onChange={({ target }) => setComment(target.value)} />
                <button onClick={submitComment} >Submit comment</button>
            </div>
            <button onClick={fetchComments}>Load comments</button>
            {
                comments?.map(comment => {
                    return (
                        <div key={comment.id} style={{ backgroundColor: "rgba(12, 131, 229, 0.47)" }}>
                            <h3> {comment.id} {comment.text} </h3>
                            <button onClick={() => deleteComment(comment.id)} >Delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}
