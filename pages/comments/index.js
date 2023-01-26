import { useState } from "react";

export default function CommentsPage() {

    const [comments, setComments] = useState([])
    const fetchComments = async () => {
        const res = await fetch('/api/comments');
        const data = await res.json();
        setComments(data);
    }
    return (
        <>
            <button onClick={fetchComments}>Load comments</button>
            {
                comments?.map(comment => {
                    return (
                        <div key={comment.id} style={{ backgroundColor: "rgba(12, 131, 229, 0.47)" }}>
                            <h3> {comment.id} {comment.text} </h3>
                        </div>
                    )
                })
            }
        </>
    )
}
