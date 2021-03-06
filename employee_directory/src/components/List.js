import React from "react";

function List(props) {
    const searchedSorted = props.employees.filter( employee => (employee.firstName + " " + employee.lastName).toLowerCase().includes(props.search.toLowerCase())).sort( (a,b) => {
        let x = (a.firstName + a.lastName).toLowerCase();
        let y = (b.firstName + b.lastName).toLowerCase();
        if (props.sort === "asc") {
            if (x < y) return -1;
            if (x > y) return 1;
        } else {
            if (x > y) return -1;
            if (x < y) return 1;
        }
        return 0;
    });

    return (
        <table className="table table-striped table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Name:</th>
                    <th scope="col">Phone:</th>
                    <th scope="col">Email:</th>
                    <th scope="col">DOB:</th>
                </tr>
            </thead>
            <tbody>
                {searchedSorted.map(employee => (
                    <tr key={employee.id}>
                        <th scope="row">{employee.firstName + " " + employee.lastName}</th>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default List;