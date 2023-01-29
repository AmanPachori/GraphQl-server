const mongoose = require('mongoose')
const {modelSchema}  = require('../models/model');
const userData = mongoose.model('userData',modelSchema);


const resolvers = {
  Query: {
    getAlluser:(root)=>{
      return new Promise((resolve,reject)=>{
          userData.find((err,users)=>{
              if(err) reject(err);
              else resolve(users);
          })
      })
  },
},
Mutation :{
  createuser: (root,{ input }) => {
    const newuser=new userData({
        price : input.price,
        address : input.address,
        image : input.image,
        noOfBedroom : input.noOfBedroom,
        noOfBathroom : input.noOfBathroom,
        area: input.area
    });

    newuser.id=newuser._id;

    return new Promise((resolve,reject)=>{
        newuser.save((err)=>{
            if(err) reject(err);
            else resolve(newuser);
        })
    })

}
}

};

module.exports ={resolvers};