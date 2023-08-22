import React from "react";
import "./style.css";
import Story from './Story'
const Stories=() => {
const stories =[
    {
    username: "ahmed",
    user_photo: 'https://images.pexels.com/photos/17619622/pexels-photo-17619622/free-photo-of-noir-et-blanc-homme-veste-chapeau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    story_photo: "https://images.pexels.com/photos/17619622/pexels-photo-17619622/free-photo-of-noir-et-blanc-homme-veste-chapeau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    username: "ahmed",
    user_photo: 'https://images.pexels.com/photos/17619622/pexels-photo-17619622/free-photo-of-noir-et-blanc-homme-veste-chapeau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    story_photo: "https://images.pexels.com/photos/17619622/pexels-photo-17619622/free-photo-of-noir-et-blanc-homme-veste-chapeau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    username: "ahmed",
    user_photo: 'https://images.pexels.com/photos/17619622/pexels-photo-17619622/free-photo-of-noir-et-blanc-homme-veste-chapeau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    story_photo: "https://images.pexels.com/photos/17619622/pexels-photo-17619622/free-photo-of-noir-et-blanc-homme-veste-chapeau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},

];


    return(
<>
<div className="stories">
<Story type="new"/>

{ stories.map((story )=>(
    <Story type="old" data={Story}/>
    ))}


</div>
</>
    );
};
export default Stories;