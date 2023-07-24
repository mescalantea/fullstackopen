const Total = ({parts}) => (<strong>Total of { parts.reduce((sum, p) => sum + p.exercises, 0) } exercises</strong>)
export default Total