const asyncHandler = require('express-async-handler')

const getGoals = syncHandler(async(req, res)=>{
    res.status(200).json({message: 'Hello, get goals'})
})

const setGoal = syncHandler(async(req, res)=>{
    res.status(200).json({message: 'Hello, set goals'})
})

const updateGoal = syncHandler(async(req, res)=>{
    res.status(200).json({message: 'Hello, update goals'})
})

const deleteGoal = syncHandler(async(req, res)=>{
    res.status(200).json({message: 'Hello, delete goals'})
})


module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}