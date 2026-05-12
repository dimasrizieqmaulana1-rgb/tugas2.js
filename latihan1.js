const transaction = {
    id: 'TX-001',
    amount: 100000,
    user: { name: 'Budi', phone: '08123456789' },
    timestamp: '2024-01-15T10:30:00Z'
};

const { id, amount, user: { name } } = transaction;

console.log(id, amount, name);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = [...array1, ...array2];

console.log(combined);
