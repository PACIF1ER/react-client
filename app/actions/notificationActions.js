import moment from 'moment'

export const requestNotificationPermission = () => {
  return dispatch => {
    if (!window.Notification) {return}

    return new Promise(function(resolve, reject){
      if (Notification.permission === 'granted') {
        resolve()
      } else {
        Notification.requestPermission().then(() => {
          if (Notification.permission === 'granted') {
            resolve()
          }
        });
      }
    })
  }
}

export const notify = (todos) => {
  return (dispatch, getState) => {
    if (window.Notification && Notification.permission === 'granted') {
      const currentTime = moment()

      todos.forEach(todo => {
        if(!!todo.alert_at){
          if (currentTime.isSame(moment(todo.alert_at), 'minute')){
            let options = {
              body: todo.body,
              tag: 'alert',
              icon: 'nwa.jpg'
            }
            new Notification('時間だよ', options)
          }
        }
      })
    }
  }
}
