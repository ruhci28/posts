export const setallpost = (posts) => {
  return {
    type:'ALLPOST',
    payload:posts
  }
}
export const filteredpost = (posts) => {
  return {
    type:'FILTERPOST',
    payload:posts
  }
}
export const searchterm = (hint) => {
  return {
    type:'SEARCH',
    payload:hint
  }
}
// action to turn on the editmode
export const turnonsearchmode = (mode) => {
  return {
    type:'TURNONSEARCHMODE',
    payload:mode
  }
}
// action to turn off  the edit mode
export const turnoffsearchmode = (mode) => {
  return {
    type:'TURNOFFSEARCHMODE',
    payload:mode
  }
}

export const readmorepost = (post) => {
  return {
    type:'READMOREPOST',
    payload:post
  }
}
