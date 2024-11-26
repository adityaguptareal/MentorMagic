const {Router}=require("express")
const mentorRouter=Router()
const {z}=require("zod")
const mongoose=require("mongoose")
mentorRouter.get("/",function (req,res) {
    res.status(200).json({msg:"You are on the main route"})
})
mentorRouter.post("/signup",function (req,res) {
    const requiredData=z.object({
        username:z.string().max().min(),
        email:z.string().min().max(),
        firstName:z.string().min().max(20),
        lastName:z.string().min().max(20)
        gender:
    })
    res.status(200).json({msg:"You are on the main route"})
})

export deafult mentorRouter