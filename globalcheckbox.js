
/* A Row  */

const mARow = document.getElementById('mARow');
const aRowChildren = document.querySelectorAll('.aRow');

mARow.addEventListener('change', function(e){
  const isMARowChecked = e.target.checked;

  aRowChildren.forEach(child => {

    if (isMARowChecked) {
      child.checked = true;
    }
    else {
      child.checked = false;
    }

  })

})

/* A Yoon Row */

const mAYoonRow = document.getElementById('aRowYoon');
const aYoonRowChildren = document.querySelectorAll('.aRowYoon');

mAYoonRow.addEventListener('change', function(e){

  const isMAYoonRowChecked = e.target.checked

  aYoonRowChildren.forEach(child => {
    if (isMAYoonRowChecked) {
      child.checked = true;
    }
    else {
      child.checked = false;
    }
  })

})

/* I Row */

const mIRow = document.getElementById('miRow');
const iRowChildren = document.querySelectorAll('.iRow');

mIRow.addEventListener('change', function(e) {
  const isMIRowChecked = e.target.checked

  iRowChildren.forEach(child => {
    if (isMIRowChecked) {
      child.checked = true;
    }
    else {
      child.checked = false;
    }
  })
})

/* U Row */

const mURow = document.getElementById('mURow');
const uRowChildren = document.querySelectorAll('.uRow');

mURow.addEventListener('change', function(e) {

  const isMURowChecked = e.target.checked

  uRowChildren.forEach(child => {
    if(isMURowChecked) {
      child.checked = true;
    }
    else {
      child.checked = false;
    }
  })

})

/* U Yoon Row */

const mURowYoon = document.getElementById('mURowYoon');
const uRowYoonChildren = document.querySelectorAll('.uRowYoon');

mURowYoon.addEventListener('change', function(e) {
  const isMURowYoonChecked = e.target.checked

  uRowYoonChildren.forEach(child => {
    if(isMURowYoonChecked) {
      child.checked= true;
    }
    else {
      child.checked = false;
    }
  })

})

/* E Row */

const mERow = document.getElementById('mERow');
const eRowChildren = document.querySelectorAll('.eRow');

mERow.addEventListener('change', function(e) {
  const isMERowChecked = e.target.checked

  eRowChildren.forEach(child => {
    if(isMERowChecked) {
      child.checked = true;
    }
    else {
      child.checked = false;
    }
  })
})

/* O Row */

const mORow = document.getElementById('mORow');
const oRowChildren = document.querySelectorAll('.oRow');

mORow.addEventListener('change', function(e) {
  const isMORowChecked = e.target.checked

  oRowChildren.forEach(child => {
    if(isMORowChecked) {
      child.checked = true;
    }
    else {
      child.checked = false;
    }
  })
})

/* O Yoon Row */

const mORowYoon = document.getElementById('mORowYoon');
const oRowYoonChildren = document.querySelectorAll('.oRowYoon');

mORowYoon.addEventListener('change', function(e) {
  const isMORowYoonChecked = e.target.checked

  oRowYoonChildren.forEach(child => {
    if(isMORowYoonChecked) {
      child.checked = true;
    }
    else {
      child.checked = false;
    }
  })
})
