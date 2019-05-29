var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        playList: [

        ],
        scrollHeight: 0,
        scrollTop: 0,
        hidden: true,
        loadNum: 0,
        loadWord: '加载中...',
        nomore: false
    },
    onLoad: function () {
        let that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    scrollHeight: res.windowHeight
                });
            }
        });
        this.getRankData();
    },
    getRankData() {
        let that = this;
        wx.request({
            url: 'https://www.easy-mock.com/mock/5ce260b0df6d7154c966c32f/WXfootball/playerRank',
            data: {
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                let resplayList = res.data;
                that.setData({
                    playList: resplayList.data.playList
                });
            }
        })
    },
    loadMore() {
        let that = this;
        if (that.data.loadNum < 2) {
            this.setData({
                hidden: false
            })
            wx.request({
                url: 'https://www.easy-mock.com/mock/5ce260b0df6d7154c966c32f/WXfootball/playerRankLoadMore',
                data: {
                },
                header: {
                    'content-type': 'application/json'
                },
                success: function (res) {
                    let resplayList = res.data;
                    let nowList = [...that.data.playList, ...resplayList.data.playList]
                    that.setData({
                        playList: nowList
                    });
                    that.setData({
                        loadNum: ++that.data.loadNum,
                        hidden: true
                    })
                }
            })
        } else {
            this.setData({
                loadWord: '没有更多内容了 -.-',
                nomore: true,
                hidden: false
            })
            setTimeout(() => {
                that.setData({
                    hidden: true
                })
            }, 3500);
        }
    }
});