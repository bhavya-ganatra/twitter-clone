import React, { useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebaseinit'
import Flipmove from 'react-flip-move'


function Feed() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>doc.data()))
        })
    },[])
    
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox/>

            <Flipmove>
            {/* Posts */}
                {
                    posts.map(post=>(
                        <Post 
                        key={post.text}
                        displayName={post.displayName} 
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                        />
                    ))
                }
            </Flipmove>
            {/* <Post 
             displayName="Joey Tribiani" 
             username="kan-adams" 
             verified 
             text="Hey, How you doing?"
             avatar="../joey.jpg"
             image="./joey-gif.gif"/> */}
            
        </div>
    )
}

export default Feed
