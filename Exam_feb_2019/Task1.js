function htmlGrade(examPoints, completedHomework, totalHomework) {
  const maxPoints = 100;
  const maxExamPoints = 400;
  let grade = 0;

  if (examPoints === maxExamPoints) {
    grade = 6;
  } else if (examPoints < maxExamPoints) {
    let totalPoints = (examPoints / maxExamPoints) * 90;
    if (completedHomework === totalHomework) {
      totalPoints += 10;
    }
    grade = 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2);
  }
  if (grade < 3) {
    grade = 2;
  } else if (grade > 6) {
    grade = 6;
  }
  console.log(grade.toFixed(2));
}

htmlGrade(300, 10, 10);
htmlGrade(200, 5, 5);