import  { useEffect, useState } from 'react';
import './countitngyear.css'

const CountingYears = () => {
    const [count,setCount] = useState(0)
    const [employe,setEmploye] = useState(0);
    const [project,setProject] = useState (0);
    const [costal,setCoastal] = useState(0)
    const duration = 3000;
    const targetYear = 2021
    const members = 10
    const projects = 20;
    const coastalArea = 576105;

    useEffect(() => {
        const intervalEmployee = duration / members
        let currentEmploye = 0;

        const intervalE = setInterval(() => {
            currentEmploye++;
            setEmploye(currentEmploye);
            if (currentEmploye >= members) {
                clearInterval(intervalE)
            }
        },intervalEmployee);
        return () => clearInterval(intervalE)
    },[members,duration])

    useEffect(() => {
        const intervalTime = duration /targetYear
        let currentCount = 2000;

        const interval = setInterval(() => {
            currentCount++;
            setCount(currentCount);

            // Stop the interval once the target year is reached
            if (currentCount >= targetYear) {
                clearInterval(interval);
            }
        }, intervalTime);
        return () => clearInterval(interval);
    },[targetYear,duration])

    useEffect(() => {
        const intervalTime = duration / projects
        let currentCount = 0;

        const interval = setInterval(() => {
            currentCount++;
            setProject(currentCount);

            // Stop the interval once the target year is reached
            if (currentCount >= projects) {
                clearInterval(interval);
            }
        }, intervalTime);
        return () => clearInterval(interval);
    },[projects,duration])

    useEffect(() => {
        const intervalTime = duration / coastalArea
        let currentCount = 576000;

        const interval = setInterval(() => {
            currentCount++;
            setCoastal(currentCount);

            // Stop the interval once the target year is reached
            if (currentCount >= coastalArea) {
                clearInterval(interval);
            }
        }, intervalTime);
        return () => clearInterval(interval);
    },[coastalArea,duration])

  return (
    <div className='counting_main'>
        <div className='counting_div'>
            <span className='num'>{count}</span>
            <p>YEAR OF INCORPRATION</p>
        </div>
        <div className='counting_div'>
            <span className='num'>{employe}</span>
            <p>EMPLOYEES</p>
        </div>
        <div className='counting_div'>
            <span className='num'>{project}</span>
            <p>PROJECT IN HAND</p>
        </div>
        <div className='counting_div'>
            <span className='num'>{costal}</span>
            <p>ZIP-OFFICE</p>
        </div>
    </div>
  )
}

export default CountingYears