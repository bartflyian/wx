var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    index_bgImg: '../../imgs/news_tab/bg.jpg',
    leftS: '../../imgs/news_tab/leftS.png',
    rightS: '../../imgs/news_tab/rightS.png',
    game_score:
      { month: '4', day: '23', leftTeam: '巴萨', rightTeam: '切尔西', leftScore: '2', rightScore: '0', leftImg: '../../imgs/team_logo/1.png', rightImg: '../../imgs/team_logo/2.png' }
    ,
    win: 0,
    gameScoreList: [
      { month: '4', day: '23', leftTeam: '巴萨', rightTeam: '切尔西', leftScore: '2', rightScore: '0', leftImg: '../../imgs/team_logo/1.png', rightImg: '../../imgs/team_logo/2.png' },
      { month: '5', day: '24', leftTeam: '皇马', rightTeam: '拜仁', leftScore: '2', rightScore: '4', leftImg: '../../imgs/team_logo/3.png', rightImg: '../../imgs/team_logo/4.png' },
      { month: '5', day: '25', leftTeam: '拜仁', rightTeam: '切尔西', leftScore: '3', rightScore: '3', leftImg: '../../imgs/team_logo/4.png', rightImg: '../../imgs/team_logo/2.png' },
      { month: '5', day: '26', leftTeam: '皇马', rightTeam: '巴萨', leftScore: '1', rightScore: '0', leftImg: '../../imgs/team_logo/3.png', rightImg: '../../imgs/team_logo/1.png' },
    ],
    nowSlide: 0,
    newList: [
    ]
  },
  onLoad() {
    this.getNewsData();
    this.changeWintip();

  },
  getNewsData() {
    let that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ce260b0df6d7154c966c32f/WXfootball/news',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        let resNewList = res.data;
        console.log(resNewList)
        that.setData({
          newList: resNewList.data.newList
        });
      }
    })
  },
  slideScore(e) {
    let leftOrright = e.currentTarget.dataset.side;
    if (leftOrright == 0) {
      if (this.data.nowSlide != 0) {
        this.setData({
          nowSlide: --this.data.nowSlide
        });
      }
    }
    else if (this.data.nowSlide != this.data.gameScoreList.length - 1) {
      this.setData({
        nowSlide: ++this.data.nowSlide
      });
    }
    this.setData({
      game_score: this.data.gameScoreList[this.data.nowSlide]
    });
    this.changeWintip();
  },
  changeWintip() {
    let leftS = Math.round(this.data.game_score.leftScore);
    let rightS = Math.round(this.data.game_score.rightScore);
    let wintip = leftS == rightS ? 0 : (leftS < rightS ? 1 : 2);
    this.setData({
      win: wintip
    })
  },
  gotoDetail(e) {
    wx.navigateTo({
      url: '../newsContent/newsContent?newsId=' + e.currentTarget.dataset.id
    })
  }
});