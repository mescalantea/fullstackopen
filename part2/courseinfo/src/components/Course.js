import Header from './Header'
import Part from './Part'
import Total from './Total'

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <div>
                {course.parts.map(({ id, name, exercises }) => (
                    <Part id={id} part={name} exercises={exercises} />
                ))
                }
            </div>
        </div>
    )
}
export default Course