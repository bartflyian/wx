var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabList: ['世界', '亚洲', '国内'],
        currentTab: '0',
        dataSource: [
            { id: '1', teamName: 'Juventus', from: 'Italy', teamLogo: '../../../imgs/team_logo/1.png', Rank: '1', points: '2041' },
            { id: '2', teamName: 'barcelona', from: 'Spain', teamLogo: '../../../imgs/team_logo/1.png', Rank: '2', points: '1986' },
            { id: '3', teamName: 'Juventus', from: 'Italy', teamLogo: '../../../imgs/team_logo/1.png', Rank: '3', points: '1965' }
        ],// 存储每一个tab下的数据 可以这样存dataSource: [[],[],[],[],[],[],....]
        windowHeight: 0,
        windowWidth: 0,
        tabBoxHeight: 250//  每一个position_list的高度（这里的作用，后面会提到）
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    switchTab: function (e) {
        var _th = this
        var tab = e.currentTarget.dataset.current
        if (this.data.currentTab === tab) {
            return false
        } else {
            this.setData({
                currentTab: tab
            })
        }
    },
    switchSwiper: function (e) {
        var _th = this
        var tab = e.detail.current
        this.setData({
            currentTab: tab
        }, () => {
            let URL = ''
            let data = {}
            if (tab === 0) {
            } else if (tab === 1) {
            } else {
            }
        })
    },
    isNull: function (val) {
        let result = false
        if (val === null || val === undefined || val === '') {
            result = true
        }
        return result
    }
}) 