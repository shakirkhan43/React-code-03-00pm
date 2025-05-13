const cardTypes = ['Success', 'Error', 'Warning', 'info', 'DANGER'];

function AlertCard({ type }) {
  return <div className={`${type.toLowerCase()}`}>This is a {type} message</div>;
}




function AlertsList() {
  return (
    <div>
      {cardTypes.map((type, index) => (
        <AlertCard key={index} type={type} />
      ))}
    </div>
  );
}
export default AlertsList;