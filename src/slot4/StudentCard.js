import React from 'react'
import Card from 'react-bootstrap/Card';
function StudentCard({student}) {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={student.images} />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>
          Mã SV: {student.id}
          <br/>
          Tuoi : {student.age}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default StudentCard