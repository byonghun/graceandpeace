import axios from 'axios'
const firebaseRef = firebase.database().ref()

export const dataService = store => next => action => {
  if(action.type === 'POST_SERMON') {
    // use axios to hit db
    firebaseRef.child("Test").set(action.sermon)
  }
  if(action.type === 'POST_SONG') {
    // use axios to hit db
    firebaseRef.child("Song").set(action.sermon)
  }

  next(action)
}
