const players = [
  { id: 1, name: 'Virat Kohli', img: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png' },
  { id: 2, name: 'Rohit Sharma', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKCY2iyAKFE8rplvq2O9W3qB2bi565PmkYX9PjWF6DIwS5UYwTSiVoE4G-nGVXWkGrwY&usqp=CAU' },
  { id: 3, name: 'MS Dhoni', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKC0SYDgO_g49QatHdSp1DO9_wOEVomtOZjyNyBlnFoixk8XKAVm3WDWtRE6JDiS2fh-jfTJtKu1iwrK9uB83aRJeNVBjEbzwCPBGa4c' },
];

function PlayerCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {players.map(player => {
        return <div key={player.id} className="bg-white p-4 shadow rounded-lg text-center">
          <img src={player.img} alt={player.name} className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="mt-2 font-bold">{player.name}</h2>
        </div>
})}
    </div>
  );
}
export default PlayerCards;