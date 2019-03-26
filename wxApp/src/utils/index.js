function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function setStorage(key, data) {
  wx.setStorage({
    key: key,
    data: data
  })
}

export function getStorage(key) {
  return wx.getStorageSync(key);
}

export function removeStorage(key) {
  wx.removeStorage({
    key: key,
    success: function (res) {
      console.log(res.data);
    }
  })
}
export function openAlert(content) {
  wx.showModal({
    content: content,
    showCancel: false,
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      }
    }
  });
}


export default {
  formatNumber,
  formatTime,
  setStorage,
  getStorage,
  removeStorage,
  openAlert
}
