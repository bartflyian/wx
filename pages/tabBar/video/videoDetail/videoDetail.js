var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        title: '',
        videourl: '',
        videoList: [
            { id: 1, title: '玻利维亚顶级联赛悲剧 主裁突发心脏病倒地去世', imgurl: '../../../imgs/video/1.jpg', videourl: 'http://edge.ivideo.sina.com.cn/216754886.mp4?KID=sina,viask&Expires=1558454400&ssig=xweyUgWVwJ' },
            { id: 2, title: '尤文新主场球衣宣传片 C罗等球星出镜', imgurl: '../../../imgs/video/2.jpg', videourl: 'http://edge.ivideo.sina.com.cn/203759807.mp4?KID=sina,viask&Expires=1558454400&ssig=vKbS6SDL2X' },
            { id: 3, title: '里戈尼染红 国米轻取提前降级的10人切沃', imgurl: '../../../imgs/video/3.jpg', videourl: 'http://edge.ivideo.sina.com.cn/216617858.mp4?KID=sina,viask&Expires=1558454400&ssig=p2jtz%2FMRPl' },
            { id: 4, title: '18年红狼生涯画句号 德罗西赛季后离开罗马', imgurl: '../../../imgs/video/4.jpg', videourl: 'http://edge.ivideo.sina.com.cn/216754886.mp4?KID=sina,viask&Expires=1558454400&ssig=xweyUgWVwJ' },
            { id: 5, title: '集体身着德罗西球衣 罗马全队拥抱送别队长', imgurl: '../../../imgs/video/5.jpg', videourl: 'http://edge.ivideo.sina.com.cn/216754886.mp4?KID=sina,viask&Expires=1558454400&ssig=xweyUgWVwJ' },
            { id: 6, title: '恰尔汗奥卢一击制胜 米兰欧冠希望犹存', imgurl: '../../../imgs/video/6.jpg', videourl: 'http://edge.ivideo.sina.com.cn/216754886.mp4?KID=sina,viask&Expires=1558454400&ssig=xweyUgWVwJ' },
            { id: 7, title: 'C罗造制胜乌龙 尤文2-1提前5轮夺8连冠', imgurl: '../../../imgs/video/7.jpg', videourl: 'http://edge.ivideo.sina.com.cn/216754886.mp4?KID=sina,viask&Expires=1558454400&ssig=xweyUgWVwJ' },
            { id: 8, title: '比男足还早! 尤文图斯女足卫冕意甲冠军', imgurl: '../../../imgs/video/8.jpg', videourl: 'http://edge.ivideo.sina.com.cn/216754886.mp4?KID=sina,viask&Expires=1558454400&ssig=xweyUgWVwJ' }
        ],
    },
    onLoad(options) {
        this.data.videoList.forEach(item => {
            if (options.id == item.id) {
                this.setData({
                    title: item.title,
                    videourl: item.videourl
                })
            }
        });
    }
});