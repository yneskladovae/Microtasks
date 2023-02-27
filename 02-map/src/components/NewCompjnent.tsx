import React from "react";

// type NewComponentPropsType = {
//     students: Array<StudentType>
// }
//
// type StudentType = {
//     id: number
//     name: string
//     age: number
// }

type TopCarsPropsType = {
    topCars: Array<TopCarsType>
}

type TopCarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: TopCarsPropsType) => {
    return (
        <div>
            {/*<ol>*/}
            {/*    {props.students.map((student) => {*/}
            {/*        return (*/}
            {/*            <li key={student.id} >Name - {student.name}, Age - {student.age }</li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ol>*/}
            <table>
                <tr>
                    <th>№</th>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                {props.topCars.map((el, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}