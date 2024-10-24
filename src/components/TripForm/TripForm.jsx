
import { useState } from 'react';

function TripForm() {
    // useState para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    destination: '',
    activity: '',
    date: '',
  });
  const [items,setItems] = useState([])
    // Função para lidar com mudanças nos inputs do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
    // Função que é chamada quando o formulário é submetido
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Destination: ${formData.destination}\nActivity: ${formData.activity}\nDate: ${formData.date}`);
    setItems([...items, {destination: formData.destination, activity: formData.activity, date: formData.activity}]);
  };
    // JSX (HTML dentro do JavaScript) para renderizar o formulário
  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4 text-center">Choose Your Destination</h1>
      <p className="text-gray-600 mb-6 text-center">
        Choose your destination and activities in São Vicente
      </p>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="destination">
          Destination
        </label>
        <select
          name="destination"
          id="destination"
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
        <label className="block text-gray-700 mb-2" htmlFor="activity">
          Activities
        </label>
        <select
          name="activity"
          id="activity"
          value={formData.activity}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select an activity</option>
          <option value="Spectacular Turtle Experiences">Spectacular Turtle Experiences</option>
          <option value="Full day">Full day excursion</option>
          <option value="Half day">Half-day excursion </option>
          <option value="Hiking">Hiking</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
      {
        items.map((item) =>  <p>{item.activity}</p>)
      }
    </form>
  );
}

export default TripForm;
