import { Card } from './UserCard'

// const UserCard = ({ name }) => {
const UserCard = () => {
    let name = 'User Example'
    return (
    <>
      <Card>
        <h3>{name}</h3>
      </Card>
    </>
  )
}

export default UserCard
