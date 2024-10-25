import { useState } from 'react';

//Função para carregar itens do Local Storage
const loadFromLocalStorage = () => {
  const trips = [];
  let index = 0;

  while (localStorage.getItem(`trip_${index}`)) {
    const data = localStorage.getItem(`trip_${index}`).split(',');
    trips.push({
      destination: data[0],
      activity: data[1],
      fromDate: data[2],
      toDate: data[3],
    });
    index++;
  }

  return trips;
};

function TripForm() {
  const [formData, setFormData] = useState({
    destination: '',
    activity: '',
    fromDate: '',
    toDate: '',
  });

  // Inicializando o estado dos itens com os dados do Local Storage
  const [items, setItems] = useState(loadFromLocalStorage());
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState('');

  //Função para salvar itens no Local Storage
  const saveToLocalStorage = (items) => {
    localStorage.clear()
    items.forEach((item, index) => {
      localStorage.setItem(
        `trip_${index}`,
        `${item.destination},${item.activity},${item.fromDate},${item.toDate}`
      );
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { destination, activity, fromDate, toDate } = formData;
    if (!destination || !activity || !fromDate || !toDate) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const updatedItems = editIndex !== null 
      ? items.map((item, i) => (i === editIndex ? formData : item))
      : [...items, formData];

    setItems(updatedItems);
    saveToLocalStorage(updatedItems); // Salva no Local Storage
    setFormData({ destination: '', activity: '', fromDate: '', toDate: '' });
    setEditIndex(null);
  };

  const handleRemove = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    saveToLocalStorage(updatedItems);
  };

  const handleEdit = (index) => {
    setFormData(items[index]);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center mt-8 w-full">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Choose Your Destination</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="destination" className="block text-gray-700 mb-2">Destination</label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select a destination</option>
            <option value="Sao Pedro">São Pedro</option>
            <option value="Baia das Gatas">Baía das Gatas</option>
            <option value="Mindelo Tour">Mindelo Tour</option>
            <option value="Calhau">Calhau</option>
            <option value="Salamansa">Salamansa</option>
            <option value="Jon dBebra">Jon dBebra</option>
            <option value="Linguintxe">Linguintxe</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="activity" className="block text-gray-700 mb-2">Activities</label>
          <select
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select an activity</option>
            <option value="Spectacular Turtle Experiences">Spectacular Turtle Experiences</option>
            <option value="Full day">Full day trip</option>
            <option value="Half day">Half day trip</option>
            <option value="Hiking">Hiking</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="fromDate" className="block text-gray-700 mb-2">From</label>
          <input
            type="date"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="toDate" className="block text-gray-700 mb-2">To</label>
          <input
            type="date"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
      </form>

      <div className="bg-white p-8 shadow-md w-full mt-8 overflow-x-auto no-scrollbar">
        <h2 className="text-xl font-semibold mb-4">Your Trips</h2>
        <ul className='flex space-x-4 p-4 w-full'>
          {items.length > 0 ? items.map((item, index) => (
            <li key={index} className="bg-gray-200 p-4 rounded-lg mb-2 w-80 max-w-80 min-w-80 mr-2">
              <p><strong>Destination:</strong> {item.destination}</p>
              <p><strong>Activity:</strong> {item.activity}</p>
              <p><strong>From:</strong> {item.fromDate}</p>
              <p><strong>To:</strong> {item.toDate}</p>
              <div className="flex space-x-2 mt-2">
                <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white px-4 py-1 rounded">Edit</button>
                <button onClick={() => handleRemove(index)} className="bg-red-500 text-white px-4 py-1 rounded">Remove</button>
              </div>
            </li>
          )) : (<div className='w-full flex justify-center items-center'><p className='font-bold'>Empty</p></div>)}
        </ul>
      </div>
    </div>
  );
}

export default TripForm;
