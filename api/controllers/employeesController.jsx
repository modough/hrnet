import employeeModel from "../models/employeeModel";

export const createEmployee = (req, res, next) => {
    const thingObject = JSON.parse(req.body.employee);
    delete thingObject._id;
    const employee = new employeeModel({
        //Operateur spread (...) pour copier tous les elements de thingObject
        ...thingObject,
    });
    //save() pour enregistrer l'objet crée
    employee.save()
        .then(() => res.status(201).json({ message: 'Created !' }))
        .catch(error => res.status(400).json({ error }));
};

export const deleteEmployee = (req, res, next) => {
    employeeModel.findOne({ _id: req.params.id })
        .then((employee) => {
            if (!employee) {
                return res.status(404).json({
                    error: new Error('Employee doesn\'t exist !')
                });
            }
            if (employee.id !== req.auth.id) {
                return res.status(401).json({
                    error: new Error('Not authorized !')
                });
            }
            employeeModel.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Deleted !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

export const findOneEmployee = (req, res, next) => {
    //findOne() pour retourner un seul objet grâce à son id
    employeeModel.findOne({ _id: req.params.id })
        .then(employee => res.status(200).json(employee))
        .catch(error => res.status(400).json({ error }));
};


export const findAllEmployees = (req, res, next) => {
    //find() pour retourner tous les objets crées 
    employeeModel.find()
        .then(employee => res.status(200).json(employee))
        .catch(error => res.status(400).json({ error }));
};

export const updateOneEmployee = (req, res, next) => {
    const thingObject = JSON.parse(req.body.employee);
    //updateOne() Mise à jour de la sauce avec les nouvelles valeurs
    employeeModel.updateOne({ _id: req.params.id }, { ...thingObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Updated !' }))
        .catch(error => res.status(400).json({ error }));
};
