import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
})

// get mess menu
// edit menu

// students
//req: email res: timetable

// teachers
// req: email res: timetable
// edit timetable
// request other faculty for change/swap (generate request id with info, send notification)
// view requests (requests made and requests to them)
// accept / reject request (execute change/swap, send notification)