const EmployeesController = {};
import employeesModel from "../models/Employees.js";


//select

EmployeesController.getEmployees = async (req, res) => {
    const employees = await employeesModel.find()
    res.json(employees)
};


//insert

EmployeesController.insertEmployees = async (req, res) => {
    const {name,email,password,telephone,address,role,hireDate,salary,active} = req.body;
    const newProduct = new employeesModel({name,email,password,telephone,address,role,hireDate,salary,active})

    await newProduct.save()
    res.json({message: "employees saved"});
};


//delete 

EmployeesController.deleteEmployees = async (req, res) => {
    await employeesModel.findByIdAndDelete(req.params.id);
    res.json({message: "employees Deleted"})
}; 


//update

EmployeesController.updateEmployees = async (req, res) => {
    const {name,email,password,telephone,address,role,hireDate,salary,active} = req.body;
    const updatedEmployees = await employeesModel.findByIdAndUpdate(req.params.id, {name,email,password,telephone,address,role,hireDate,salary,active} , {new: true} )

    res.json({message: "Updated employees"})
};


export default EmployeesController;
 