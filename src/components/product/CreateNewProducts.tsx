import { useState } from 'react';

export default function CreateNewProduct(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
    quantityInStock: 0,
    categoryEnums: '',
    photoLink: '',
    offPrice: 0,
    stars: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8093/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(JSON.stringify(formData))


      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      alert('Product created successfully!');
    } catch (error) {
      alert('Error creating product: ' + error);
    }
  };

  const categoryEnumsOptions = [
    'VESTIDOS',
    'BLUSAS',
    'CALCAS',
    'SAIAS',
    'CASACOS',
    'SAPATOS',
    'BOLSAS',
    'ACESSORIOS',
    'LINGERIE',
    'FITNESS',
    'MODA_PRAIA',
    'MEIAS_E_COLLANTS',
    'JOIAS',
    'PERFUMES',
    'MAQUIAGEM',
    'CABELO',
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full h-full mx-auto mb-8 mt-8 p-4 overflow-y-scroll text-gray-900 bg-opacity-0 rounded-md">
      <h2 className="text-2xl font-bold mb-4">CRIAR NOVO PRODUTO</h2>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-8'>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">NOME:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">PREÇO:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">DESCRIÇÂO:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">QUANTIDADE NO ESTOQUE:</label>
          <input
            type="number"
            name="quantityInStock"
            value={formData.quantityInStock}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">CATEGORIAS:</label>
          <select
            name="categoryEnums"
            value={formData.categoryEnums}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="">Select Category</option>
            {categoryEnumsOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">LINK PARA FOTO:</label>
          <input
            type="text"
            name="photoLink"
            value={formData.photoLink}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">DESCONTO:</label>
          <input
            type="number"
            name="offPrice"
            value={formData.offPrice}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ESTRELAS:</label>
          <input
            type="number"
            name="stars"
            value={formData.stars}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400"
        >
          CRIAR NOVO PRODUTO
        </button>
      </form>
    </div>
  );
}
