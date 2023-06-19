import employeeModel from "../models/employeeModel.js";

export const createEmployee = async (req, res, next) => {
    const newEmployee = new employeeModel(req.body);
    try {
        const savedEmployee = await newEmployee.save();
        res.status(200).json(savedEmployee);
    } catch (error) {
        next(error);
    }
};

export const deleteEmployee = (req, res, next) => {
    //findByIdAndDelete() pour supprimer un objet grâce à son id
    try {
        employeeModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'Deleted !' })
    }
    catch (error) {
        res.status(500).json({ error })
    };
};

export const findOneEmployee = async (req, res, next) => {
    //findById() pour retourner un seul objet grâce à son id
    try {
        const foundEmployee = await employeeModel.findById(req.params.id)
        res.status(200).json(foundEmployee)
    } catch (error) {
        res.status(400).json({ error })
    }
};


export const findAllEmployees = async (req, res, next) => {
    //find() pour retourner tous les objets crées 
    try {
        const foundEmployees = await employeeModel.find();
        res.status(200).json(foundEmployees);
    } catch (error) {
        res.status(400).json({ error });
    }


};

export const updateOneEmployee = async (req, res, next) => {
    try {
        const updatedEmployee = await employeeModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedEmployee);
    } catch (error) {
        next(error);
    }
};
