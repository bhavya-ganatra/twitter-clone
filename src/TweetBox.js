import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebaseinit'

function TweetBox() {
    const [tweetMessage,setTweetMessage]=useState('')
    const [tweetImage,setTweetImage]=useState('')
    const sendTweet=(e)=>{
        e.preventDefault()

        db.collection('posts').add({
            displayName:'jake parelta',
            username:'jakie',
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-Brooklyn-99-Andy-Sanberg.jpg"
        })
        setTweetMessage("")
        setTweetImage("")
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="../Barney.jpg" />
                    <input 
                     onChange={(e)=>setTweetMessage(e.target.value)}
                     placeholder="What's happening?" 
                     type="input" value={tweetMessage}/>
                </div>
                <input 
                 onChange={(e)=>setTweetImage(e.target.value)} 
                 value={tweetImage}
                 className="tweetBox__imageInput" 
                 placeholder="Optional: Enter Image URL" 
                 type="input"/>
                <Button
                 onClick={sendTweet}
                 type="submit" 
                 className="tweetBox__tweetButton"
                 >
                 Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
