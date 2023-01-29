import { User } from "../model/User.model.js";

export const save = (req, res, next) => {
  console.log(req.body);
  User.create({
    userName: req.body.name,
    password: req.body.password
  });
  return res.status(201).json({result:"User Added"});
};



export const list = async (req, res, next) => {
  const result = await User.find();
  return res.status(201).json({result:result});
};


// export const remove = async (req, res, next) => {
//   const obj = await Brand.deleteOne({ _id: req.body._id });
//   return res
//     .status(201)
//     .json({ status: true, message: "Deleted Successfully" });
// };

// export const edit = async (req, res, next) => {
//   console.log(req.body);
//   const result = await Brand.updateOne(
//     { _id: req.body.id },
//     { $set: { categoryName: req.body.category, brandName: req.body.brand } }
//   );
//   return res.status(201).json({ message: "Updated Successfully" });
// };
