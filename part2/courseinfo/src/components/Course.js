import Header from './Header'
import Part from './Part'
import Total from './Total'

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <div>
                {course.parts.map(({ id, name, exercises }) => (
                    <Part key={id} name={name} exercises={exercises} />
                ))
                }
            </div>
            <Total parts={course.parts} />
        </div>
    )
}
export default Course