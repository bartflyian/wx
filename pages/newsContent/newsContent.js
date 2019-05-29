var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    title: '',
    content: '',
    from: '',
    newImage: '',
    newsContentList: [
      { id: '001', title: '我和德罗西的邂逅：他曾用“倔强”挽回意大利仅剩的尊严', from: '南方都市报', newImage: '../../imgs/news/news1.jpg', content: '当罗马城的队长德罗西决定离开时，一切都显得那么波澜不惊，本想说“一个人，一座城”，但听说你只是离开并非道别。你离开时是如此低调，但就像宣布你即将离队时罗马俱乐部官方通告中所说的那样：“大概十八年前，稚嫩的德罗西在同安德莱赫特的比赛中首发出场，而面对帕尔马的比赛将是他身披罗马球衣在奥林匹克球场最后一战，这是一个时代的终结。”这是一个时代的终结，如此低调的德罗西配得上如此高度的评价，615场比赛书写着你的忠诚，红狼的那些岁月有你奔跑的背影，有你坚毅的眼神，有你的爱和我们对你的爱。如今岁月已成往事，告别就在不远，回望那段岁月，岁月里你从记忆的深处走来。' },
      { id: '002', title: '[赛季总结]虽有遗憾，但足够自豪 ', from: '羊城晚报', newImage: '../../imgs/news/news2.jpg', content: '经历了一个不算成功的夏窗之后，英超冠军蓝月亮再次扬帆起航，球队在经历严重伤病困扰的情况下，仍然卫冕了联赛杯与英超，并在足总杯中挺进决赛，尽管欧冠仍是止步八强没有突破，三冠在望的赛季结果足以让所有曼城拥趸自豪。' },
      { id: '003', title: '天空体育总结：2018-19赛季英超十大趋势', from: '北方都市报', newImage: '../../imgs/news/news3.jpg', content: '尽管冠军争夺战可以说是有史以来最激烈的，但第二和第三名之间的差距比任何其他赛季都要大，利物浦领先切尔西25分，超过了曼联在2011-12赛季对阿森纳的19分优势。' },
      { id: '004', title: '从门将到前锋，曼联夏窗7大可考虑的强援人选', from: '东方时空', newImage: '../../imgs/news/news4.jpg', content: '[翻译团]从门将到前锋，曼联夏窗7大可考虑的强援人选 由  红蓝92 发表在虎扑足球·曼联专区 从门将到前锋，曼联夏窗7大可考虑的强援人选' }
    ]
  },
  onLoad(options) {       //options用于接收上个页面传递过来的参数
    let that = this;
    // that.setData({                             //this.setData的方法用于把传递过来的id转化成小程序模板语言
    //   b_id: options.id,     //id是a页面传递过来的名称，a_id是保存在本页面的全局变量   {{b_id}}方法使用
    //   b_tu: options.tu,
    // }) 
    that.data.newsContentList.forEach(item => {
      if (item.id == options.newsId) {
        that.setData({
          title: item.title,
          content: item.content,
          from: item.from,
          newImage: item.newImage,
        })

        wx.setNavigationBarTitle({
          title: item.title//页面标题 
        })
      }
    });
  }
});