async function makePayment(amount) {
    if (Math.random() > 0.7) {
        return {
            success: true,
            transactionId: 'TX-123'
        };
    } else {
        throw new Error('Payment gateway timeout');
    }
}

async function retryPayment(amount, maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`Attempt ${attempt}...`);

            const result = await makePayment(amount);

            console.log('Payment successful:', result.transactionId);

            return result;
        } catch (err) {
            console.log(`Attempt ${attempt} failed: ${err.message}`);

            if (attempt === maxAttempts) {
                throw err;
            }

            await new Promise(resolve =>
                setTimeout(resolve, 1000)
            );
        }
    }
}

retryPayment(100000);