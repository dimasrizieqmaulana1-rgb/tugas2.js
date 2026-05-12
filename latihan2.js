function fetchUser(id) {
    return new Promise(resolve =>
        setTimeout(() => resolve({ id, name: 'Rani' }), 100)
    );
}

function fetchWallet(userId) {
    return new Promise(resolve =>
        setTimeout(() => resolve({ balance: 5000000, userId }), 100)
    );
}

fetchUser(1)
    .then(user => {
        console.log(`User: ${user.name}`);
        return fetchWallet(user.id);
    })
    .then(wallet => {
        console.log(`Balance: Rp${wallet.balance}`);
    })
    .catch(err => console.error(err));