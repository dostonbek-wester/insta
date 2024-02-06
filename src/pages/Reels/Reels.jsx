import React, { useState } from "react";
import ReactPlayer from 'react-player'
import './Reels.css'
import { Data } from "../../data/data";
import { Favorite, LinearScale, Comment, Telegram, FavoriteBorder, Face } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


// Render a YouTube video player
function Reels(params) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playing, setPlaying] = useState(false)

    function Play(params) {
        setPlaying(!playing)
        console.log("HI")
    }
   
    return (
        <>
            <div className="reels">
                <Swiper
                    direction={'vertical'}
                    pagination={false}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {Data.map((item, index) => (
                        <SwiperSlide onClick={()=>Play()} className="reel-video"  key={index}>

                            <div className="like_icon">
                                <FavoriteBorder className="icon" />
                                <p className="p">{item.likes}</p>
                            </div>
                            <div className="comment_icon">
                                <Comment className="icon" />
                                <p className="p2">{item.comment}</p>
                            </div>
                            <div className="send_icon">
                                <Telegram className="icon" />
                                <p className="p3">{item.share}</p>
                            </div>
                            <h4 className="title">Lorem ipsum dolor sit amet consectetur elit.</h4>
                            <LinearScale className="dot_icon" />
                            <Face className="Face" />
                            <button className="button">subsribe</button>
                            <h4 className="H">{item.channelName}</h4>

                            <ReactPlayer playing={playing} onReady={() => { setPlaying(false) }} style={{ borderRadius: 20 }} width={590} height={'100%'} url={item.video} />
                        </SwiperSlide>
                    ))}
                </Swiper>



            </div>
        </>

    )
}


export default Reels
