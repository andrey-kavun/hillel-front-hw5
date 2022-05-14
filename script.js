const DEFAULT_MARKS_AMOUNT = 10;

mainFunction();

function mainFunction() {
  let completedListOStudents = createStudentList();
  do {
    let operationType;
    do {
      operationType = +prompt(
        `Please enter operation number:\n 1 - Get the best student\n 2 - Get a grade list\n 3 - Get the average grade for each student\n 4 - Get a debtors list\n 5 - Add new student`
      );
    } while (
      operationType !== operationType ||
      operationType < 1 ||
      operationType > 5
    );

    switch (operationType) {
      case 1:
        getBestStudent(completedListOStudents);
        break;
      case 2:
        sortByAvgMarks(completedListOStudents);
        break;
      case 3:
        console.log(getAvgMarks(completedListOStudents));
        break;
      case 4:
        getDebtorsList(completedListOStudents);
        break;
      case 5:
        addNewStudent(completedListOStudents);
        break;
    }
  } while (confirm(`Do you want to make new operation?`));
}

function createStudentList() {
  let studentList = [];
  let numberOfStudents;
  do {
    numberOfStudents = +prompt(`"How many students are in your group?`);
  } while (numberOfStudents !== numberOfStudents);
  for (let i = 0; i < numberOfStudents; i++) {
    let studentMarks = [];
    for (let i = 0; i < DEFAULT_MARKS_AMOUNT; i++) {
      studentMarks.push(Math.floor(Math.random() * (13 - 0)) + 0);
    }
    let studentInfo = {};
    studentInfo.name = prompt(`Please, enter student name.`);
    studentInfo.marks = studentMarks;
    studentList.push(studentInfo);
  }
  console.log(studentList);
  return studentList;
}

function getBestStudent(completedListOStudents) {
  getAvgMarks(completedListOStudents);
  let bestStudent = completedListOStudents.reduce((prev, curr) => {
    if (prev.avgMark > curr.avgMark) {
      return prev;
    }
    return curr;
  });
  console.log(
    `Best student is: ${bestStudent.name}, highest average mark -  ${bestStudent.avgMark}`
  );
}

function sortByAvgMarks(completedListOStudents) {
  getAvgMarks(completedListOStudents);
  completedListOStudents.sort((a, b) => a.avgMark - b.avgMark);
  console.log(completedListOStudents);
}

function getAvgMarks(completedListOStudents) {
  for (let i = 0; i < completedListOStudents.length; i++) {
    let sumMarks = 0;
    let student = completedListOStudents[i];
    for (let i = 0; i < DEFAULT_MARKS_AMOUNT; i++) {
      sumMarks += student.marks[i];
    }
    completedListOStudents[i].avgMark = sumMarks / DEFAULT_MARKS_AMOUNT;
  }
  return completedListOStudents;
}

function getDebtorsList(completedListOStudents) {
  getAvgMarks(completedListOStudents);
  let avgGroupsMark;
  let sumAvgMarks = 0;
  for (let i = 0; i < completedListOStudents.length; i++) {
    let student = completedListOStudents[i];
    sumAvgMarks += student.avgMark;
  }
  avgGroupsMark = (sumAvgMarks / completedListOStudents.length).toFixed(2);
  console.log(`Group average: ${avgGroupsMark}`);
  let debtorsList = [];
  for (let i = 0; i < completedListOStudents.length; i++) {
    let student = completedListOStudents[i];
    student.avgMark[i];
    if (student.avgMark < avgGroupsMark) {
      debtorsList.push(student);
    }
  }
  console.log(debtorsList);
}

function addNewStudent(completedListOStudents) {
  let studentMarks = [];
  for (let i = 0; i < 10; i++) {
    studentMarks.push(Math.floor(Math.random() * (13 - 0)) + 0);
  }
  studentInfo = {};
  studentInfo.name = prompt(`Please, enter student name.`);
  studentInfo.marks = studentMarks;
  completedListOStudents.push(studentInfo);
  console.log(completedListOStudents);
  return completedListOStudents;
}
