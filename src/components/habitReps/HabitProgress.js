import React, {useState, useContext, useEffect} from "react"
import { HabitContext } from "./HabitProvider"
import { HabitRepContext } from "../habitReps/HabitRepProvider"

export const HabitProgress = (props) => {
    const {habits, getHabits} = useContext(HabitContext)
    const {habitReps, getHabitReps} = useContext(HabitRepContext)


    const [habit, setHabit] = useState({})
    const [habitRep, setHabitRep] = useState({})

    useEffect(() => {
        getHabits()
        getHabitReps()

    }, [])

    useEffect(() => {

        const repsForThisHabit = habitReps.map(habitRep => {


            const relatedHabit = habits.find(habit => habit.id === habitRep.habitid)
            setHabit(relatedHabit)
    
            const matchingHabitRepsArray = habitReps.filter(hr => hr.habitId === habit.id)
    

        })
       
        
        })
    })

    return (
        <section className="habitProgress">

        </section>

    )
}

/* for reference:
const employeesHTMLList = arrayOfEmployees.map(employee => {
                let relatedCustomers = customerRelationships.filter(cr => cr.employeeId === employee.id)
                relatedCustomers = relatedCustomers.map(rc => {
                    return customers.find(customer => customer.id === rc.customerId)
                })
                const relatedComputer = arrayOfComputers.find(computer => computer.id === employee.computerId)
                const relatedDepartment = arrOfDepartments.find(department => department.id === employee.departmentId)
                const relatedLocation = arrOfLocations.find(location => location.id === employee.locationId)
                return EmployeeHTMLConverter(employee, relatedComputer, relatedDepartment, relatedLocation, relatedCustomers)
            }).join("")

            contentTarget.innerHTML = employeesHTMLList
        })
}
