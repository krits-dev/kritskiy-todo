export const today = new Date().toLocaleDateString('en-GB')

const getToday = new Date()
let getTomorrow = new Date()
getTomorrow.setDate(getToday.getDate() + 1)
export const tomorrow = getTomorrow.toLocaleDateString('en-GB')

let getTwoDays = new Date()
getTwoDays.setDate(getTwoDays.getDate() + 2)
export const twoDays = getTwoDays.toLocaleDateString('en-GB')

let getThreeDays = new Date()
getThreeDays.setDate(getThreeDays.getDate() + 3)
export const threeDays = getThreeDays.toLocaleDateString('en-GB')

export const todosData = [
  {
    _id: Math.random(),
    title: 'Visit David',
    description: `Lorem Ipsum Dolor Sit metet, consectetur adipiscing elit, 
      sed eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    color: 'red',
    done: false,
    date: today,
  },
  {
    _id: Math.random(),
    title: 'Goceries For Dinner',
    description: `Lorem Ipsum Dolor Sit metet, consectetur adipiscing elit.`,
    color: 'blue',
    done: false,
    date: today,
  },
  {
    _id: Math.random(),
    title: 'Fix Dad’s iPad',
    description: `Lorem Ipsum Dolor Sit metet, consectetur adipiscing elit, 
      sed eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    color: 'yellow',
    done: true,
    date: today,
  },
  {
    _id: Math.random(),
    title: 'Task for tomorrow',
    description: `Lorem Ipsum Dolor Sit metet, consectetur adipiscing elit, 
      sed eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    color: 'red',
    done: false,
    date: tomorrow,
  },
  {
    _id: Math.random(),
    title: 'Task_2 for tomorrow',
    description: `Lorem Ipsum Dolor Sit metet, consectetur adipiscing elit.`,
    color: 'yellow',
    done: false,
    date: tomorrow,
  },
  {
    _id: Math.random(),
    title: `Task for ${twoDays}`,
    description: `Lorem Ipsum Dolor Sit metet, consectetur adipiscing elit, 
      sed eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    color: 'blue',
    done: false,
    date: twoDays,
  },
  {
    _id: Math.random(),
    title: `Task_2 for ${twoDays}`,
    description: `Lorem Ipsum Dolor Sit metet, consectetur adipiscing elit.`,
    color: 'yellow',
    done: false,
    date: twoDays,
  },
  {
    _id: Math.random(),
    title: `Task for ${threeDays}`,
    description: `Lorem Ipsum Dolor Sit metet, consectetur adipiscing elit, 
      sed eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    color: 'red',
    done: false,
    date: threeDays,
  },
  {
    _id: Math.random(),
    title: `Task_2 for ${threeDays}`,
    description: `Lorem Ipsum Dolor Sit metet, consectetur adipiscing elit.`,
    color: 'blue',
    done: false,
    date: threeDays,
  },
]
