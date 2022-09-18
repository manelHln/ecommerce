const RoleCheck = async(req, res, next) =>{
    const user = await User.findById(req.params.id);
    user.isAdmin ? next() : res.status(403).send("Not authorized!")
}