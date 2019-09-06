const serverUri = 'https://mojing.yika.co/';


const {
  postI,
  barTitle,
  header,
  appid
} = require('./base/moJing.js')


const request = (type, data) => {
  return new Promise(resolve => {
    wx.request({
      url: serverUri + 'app/ewei_shopv2_api.php?i=' + postI + '&r=' + type + '&openid=' + (((getApp() == undefined) ? "" : getApp().globalData.openid) || wx.getStorageSync('openid')),
      data: data ? data : '',
      header,
      method: data ? 'POST' : 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        resolve(res)
      }
    })
  })
}
module.exports = {
  getThemes: () => request('mojing.my.get_shop_style'),
  getAddressList: (openid) => request('mojing.index.address_list'),
  addAddress: (etc, data) => request('mojing.index.address_insert', data),
  changeDefaultAddress: (etc, address_id) => request('mojing.index.change_address', {
    address_id
  }),
  delAddress: (etc, address_id) => request('mojing.my.address_del', {
    address_id
  }),
  editAddress: (etc, data) => request('mojing.my.address_edit', data),
  getDefalutAdderss: () => request('mojing.index.get_address'),
  getGiftInfo: (etc, data) => request('mojing.my.gift_detail', data),
  getGiftList: () => request('mojing.my.gift_list'),
  agentPay: (etc, data) => request('mojing.my.agent_pay', data),
  getUpgreadUpInfo: (data) => request('mojing.my.dl_upgrade', data),
  getOrderInfo: (etc, data) => request('mojing.my.agent_pay_ok', data),
  getTeamDetail: (etc, data) => request('mojing.my.team_detail', data),
  getTeamDetail2: (etc, data) => request('mojing.my.team_detail2', data),
  chuZhiPay: (etc, data) => request('mojing.my.chuzhi', data),
  getYueDetails: (etc, data) => request('mojing.my.yue_details', data),
  getShouyi: (etc, data) => request('mojing.my.shouyi_log', data),
  getUserInfo: () => request('mojing.my.index'),
  getGoodFromId: (etc, goods_id) => request('mojing.index.goods_details', {
    goods_id
  }),
  getGoodInfo: data => request('mojing.index.get_param', data),
  getGoodSpec: data => request('mojing.index.get_spec', data),
  getOrderDetail: data => request('mojing.order.order_detail', data),
  getGoodOrderInfo: data => request('mojing.index.order_show', data),
  getGoodOrderList: data => request('mojing.order.index', data),
  getPriceByOption: (etc, data) => request('mojing.index.get_option', data),
  orderPay: (etc, data) => request('mojing.index.order_pay', data),
  closeOrder: (etc, data) => request('mojing.order.order_close', data),
  delOrder: (etc, data) => request('mojing.order.order_del', data),
  payOrder: (etc, data) => request('mojing.order.order_detail_pay', data),
  getDrawHis: () => request('mojing.my.tixian_log'),
  getReferCenterInfo: () => request('mojing.my.tuiguang'),
  addCard: (etc, data) => request('mojing.my.bank_card_add', data),
  getDefaultCard: () => request('mojing.my.bank_card_default'),
  sendMsg: (etc, data) => request('mojing.my.send_code', data),
  getCardList: () => request('mojing.my.bank_card_list'),
  changeDefaultCard: (etc, data) => request('mojing.my.change_card', data),
  delCard: (etc, data) => request('mojing.my.card_del', data),
  tixian: (etc, data) => request('mojing.my.tixian_go', data),
  getMyTeam: data => request('mojing.my.my_team', data),
  getTeam: data => request('mojing.my.xiaji_team', data),
  getShare: () => request('mojing.tuijian.get_share'),
  shareclum: data => request('mojing.tuijian.fenxiang', data),
  getReferLsit: data => request('mojing.tuijian.index', data),
  getDjInfo: data => request('mojing.my.dj_money_log', data),
  postI,
  getWuliu: (etc, data) => request('mojing.order.get_logistics', data),
  login: data => request('wxapp.login', data),
  bindScene: data => request('mojing.login.index', data),
  reg: data => request('wxapp.auth', data),
  getHomeInfo: (data) => request('mojing.index.index', data),
  parent: data => request('mojing.tuijian.fenxiang_parent', data),
  serverUri,
  barTitle,
  getReferList: () => request('mojing.my.tuijian_log')
}