const students = [
  {
    id: 1,
    name: 'John',
    subjects: ['Math', 'Science', 'English']
  },
  {
    id: 2,
    name: 'Jane',
    subjects: ['History', 'Geography']
  },
  {
    id: 3,
    name: 'Bob',
    subjects: ['Physics', 'Chemistry']
  },
  {
    id: 4,
    name: 'Alice',
    subjects: ['Hindi', 'Biology']
  }
];

function StudentList() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{textAlign:"center", border:"2px solid green", padding:"5px", margin:"10px", fontSize:"30px", fontWeight:"bold", fontFamily:"serif"}}>Student List</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Subjects</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, id) => {
            return <tr key={id}>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{student.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {student.subjects.join(', ')}
              </td>
            </tr>
})}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;