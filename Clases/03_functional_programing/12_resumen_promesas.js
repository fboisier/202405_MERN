// SIN PROMESAS:


function getData1(callback) {
    setTimeout(() => {
        callback('Data 1 received');
    }, 1000);
}

function getData2(callback) {
    setTimeout(() => {
        callback('Data 2 received');
    }, 1000);
}

getData1((data1) => {
    console.log(data1); // 'Data 1 received' after 1 second
    getData2((data2) => {
        console.log(data2); // 'Data 2 received' after another 1 second
    });
});

// CON PROMESAS:

function getData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data 1 received');
        }, 1000);
    });
}

function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data 2 received');
        }, 1000);
    });
}

// USANDO THEN CATCH

getData1().then((data1) => {
    console.log(data1); // 'Data 1 received' after 1 second
    return getData2();
}).then((data2) => {
    console.log(data2); // 'Data 2 received' after another 1 second
}).catch((error) => {
    console.error(error);
});

const fetchData = async () => {
    try {
        const data1 = await getData1();
        console.log(data1); // 'Data 1 received' after 1 second
        const data2 = await getData2();
        console.log(data2); // 'Data 2 received' after another 1 second
    } catch (error) {
        console.error(error);
    }
}

fetchData();