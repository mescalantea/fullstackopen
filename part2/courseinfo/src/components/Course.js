import Header from './Header'
import Part from './Part'

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
        </div>
    )
}
export default Course