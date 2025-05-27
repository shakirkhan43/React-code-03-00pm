function Data() {
    // JSON data
    const items = [
        { id: 1, name: "Item 1", price: 100 },
        { id: 2, name: "Item 2", price: 200 },
        { id: 3, name: "Item 3", price: 300 },
    ];

    

    return (
        <>
            <h1>Items List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Data;