import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";

const NewComment = ({postID}) => {
    const [comment, setComment] = useState('');
    const [owner, setOwner] = useState('');
    const [redirect, setRedirect] = useState(false)
    const blog_post = postID

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://127.0.0.1:8000/api/user', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });
                const content = await response.json();
                setOwner(content.id);
            }
        )();
    })

    const submit = async (e) => {
        e.preventDefault()
        await fetch('http://127.0.0.1:8000/api/comments/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                owner,
                comment,
                blog_post
            })
        })

        setTimeout(() => setRedirect(true), 100)
    }
    if (redirect)
        return <Redirect to={{pathname:`/posts/${blog_post}`}} />


    return (
        <div>
            <main className="form-signin">
                <form onSubmit={submit}>
                    <fieldset>
                        <legend>Оставьте свой комментарий</legend>
                        <div class="mt-5 mb-5 form-floating">
                            <textarea onChange={e => setComment(e.target.value)} class="form-control" placeholder="Ваше описание" id="floatingTextarea2" style={{height: 100}}></textarea>
                            <label for="floatingTextarea2">Комментарий</label>
                        </div>
                        <button type="submit" class="btn btn-primary mx-auto">Добавить</button>
                    </fieldset>
                </form>
            </main>
        </div>
    );
};

export default NewComment;
