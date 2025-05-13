const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, i) =>
        fruit === 'Apple' ? <li key={i}> Apple (special)</li> : <li key={i}>{fruit}</li>
      )}
    </ul>
  );
}

export default FruitList;