// function of changing fontstyle of text
// function changingStyle(inputid, modifyingStyle, value1, value2) {
//   const textField = document.getElementById('text-field');
//   const text = textField.value;
//   const styleButton = document.getElementById(inputid);

//   const value = 'textField.style.' + 'modifyingStyle';
//   if (value === 'value1') {
//     value = 'value2';
//     styleButton.classList.remove('focus:bg-sky-700');
//   } else {
//     value = 'bold';
//     styleButton.classList.add('focus:bg-sky-700');
//   }
// }

// bold button
document.getElementById('bold-btn').addEventListener('click', function () {
  const textField = document.getElementById('text-field');
  const text = textField.value;
  const boldButton = document.getElementById('bold-btn');

  if (textField.style.fontWeight === 'bold') {
    textField.style.fontWeight = 'normal';
    boldButton.classList.remove('focus:bg-sky-700');
  } else {
    textField.style.fontWeight = 'bold';
    boldButton.classList.add('focus:bg-sky-700');
  }

  changingStyle('bold-btn', 'fontWeight', 'bold', 'normal');
});

// italic button

document.getElementById('italic-btn').addEventListener('click', function () {
  const textField = document.getElementById('text-field');
  const text = textField.value;
  const italicButton = document.getElementById('italic-btn');

  if (textField.style.fontStyle === 'italic') {
    textField.style.fontStyle = 'normal';
    italicButton.classList.remove('focus:bg-sky-700');
  } else {
    textField.style.fontStyle = 'italic';
    italicButton.classList.add('focus:bg-sky-700');
  }
});

// underline button
document.getElementById('underline-btn').addEventListener('click', function () {
  const textField = document.getElementById('text-field');
  const text = textField.value;
  const underlineButton = document.getElementById('underline-btn');

  if (textField.style.textDecoration === 'underline') {
    textField.style.textDecoration = 'none';
    underlineButton.classList.remove('focus:bg-sky-700');
  } else {
    textField.style.textDecoration = 'underline';
    underlineButton.classList.add('focus:bg-sky-700');
  }
});

// alignment function

function textAlignment(alignment) {
  const textField = document.getElementById('text-field');
  textField.style.textAlign = alignment;
}

// left align
document.getElementById('left-btn').addEventListener('click', function () {
  textAlignment('left');
});

// align center
document.getElementById('center-btn').addEventListener('click', function () {
  textAlignment('center');
});
// align right
document.getElementById('right-btn').addEventListener('click', function () {
  textAlignment('right');
});
// align justify
document.getElementById('justify-btn').addEventListener('click', function () {
  textAlignment('justify');
});

// changing font size

const textField = document.getElementById('text-field');
const fontSize = document.getElementById('font-size');
textField.style.fontSize = fontSize.value + 'px';

document.getElementById('font-size').addEventListener('input', function () {
  textField.style.fontSize = fontSize.value + 'px';
});

// changing font color
const fontColor = document.getElementById('color-picker');
textField.style.color = fontColor.value;
document.getElementById('color-picker').addEventListener('input', function () {
  textField.style.color = fontColor.value;
});
