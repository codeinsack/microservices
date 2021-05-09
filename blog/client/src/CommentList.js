import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    setComments(response.data);
  }

  const renderedComments = comments.map(comment => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return (
    <ul>
      {renderedComments}
    </ul>
  )
}
