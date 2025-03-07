const express = require('express');
const fs = require('fs/promises');
const app = express();
let users = [];
app.use(express.json());

const read_data = async () => {
    users = JSON.parse(await fs.readFile('./data.json', 'utf-8'));
};

const write_data = async () => {
    await fs.writeFile('./data.json', JSON.stringify(users, null, 2));
};

read_data().then(r => {});

app.get('/getdata', async (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const { name, age } = req.body;
    const new_id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const new_user = { id: new_id, name, age };
    users.push(new_user);
    write_data().then(r => {});
    res.status(200).json({ message: 'Data Received.', data: new_user });
});

app.put('/users/:id', (req, res) => {
    const id  = req.params.id;
    console.log(id)
    const { name, age } = req.body;
    const userIndex = users.findIndex(user => user.id == id);
    console.log(name, age);
    if (!name || !age) {
        res.status(400).json({ message: 'Name and Age are required.' });
        return;
    }
    if (userIndex == -1) {
        res.status(404).json({ message: 'User not found.' });
    } else {
        users[userIndex].name = name;
        users[userIndex].age = age;
        write_data().then(r => {});
        res.status(200).json({ message: 'Data Updated.' });
    }
});



app.listen(9000, () => {
    console.log('Server started at http://localhost:9000');
});