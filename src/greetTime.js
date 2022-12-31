import React, { Component } from 'react'

class GreetTime extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }





    render() {

        const v = new Date().getHours();
        const greet = v < 12 ? "Good Morning" : v <= 16 ? "Good Afternoon" : v < 22 ? "Good Evening" : "Good Night";
        const i = v < 12 ? "https://thegoodmorningimages.com/wp-content/uploads/2021/02/good_morning_sunrise_images_6.jpeg" : v <= 16 ? "https://th.bing.com/th/id/R.622b75742a6fea33bddf368012fd11ff?rik=QP7b1jVHxeuNRg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-YI_W4ZKkLyE%2fU7sLL5p4pEI%2fAAAAAAAAMgs%2f3Qo2PiplUJE%2fs1600%2fGood%2bAfternoon%2bPictures%2c%2bImages%2band%2b%2bGallery%2bCollection.jpg&ehk=ICZaGQoDpz3J8rFZN9CzmR8W4bExorIpsKpuSDnYPC0%3d&risl=&pid=ImgRaw&r=0" : v < 22 ? "https://greetings-day.com/wp-content/uploads/2015/08/Good-evening-everyone-1024x687.jpg" : "https://goodmorningimages.com/wp-content/uploads/2019/01/Full-Moon-Good-Night-Hd-Wallpaper-With-Message.jpg";
        const time = new Date().toLocaleTimeString();
        setInterval(
            () => {
                this.setState({
                    time: new Date().toLocaleTimeString()
                })
            }
            , 1000)
        return (
            <><img src={i} />
                <div className='box'>
                    <p className='child'> {greet}</p>
                    <p className='child'>{this.state.time}</p>
                </div>
            </>
        )
    }
}

export default GreetTime


