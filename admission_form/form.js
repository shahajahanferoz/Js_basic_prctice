function showPreview(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}

const creditOption = (e) => {
  const value = e.target.value;
  if (value == "CSE") {
    document.querySelector("#optionalSelect").style.display = "block";
    const optional = (document.querySelector("#optionalSelect").innerHTML = `
      <h3>Please select your interest</h3>
      <input type="checkbox" id="project" name="project" value="project">
      <label class="label-of-input" for="project"> Project</label><br>
      <input type="checkbox" id="thesis" name="thesis" value="thesis">
      <label class="label-of-input" for="thesis"> Thesis</label><br>
      <input type="checkbox" id="both" name="both" value="both">
      <label class="label-of-input" for="both"> Both</label><br>
      `);
  } else if (value == "BBA") {
    document.querySelector("#optionalSelect").style.display = "block";
    const optional = (document.querySelector("#optionalSelect").innerHTML = `
                 <h3>Please select your interest</h3>
                 <input type="checkbox" id="finance" name="finance" value="finance">
                 <label class="label-of-input" for="finance"> Finance</label><br>
                 <input type="checkbox" id="marketing" name="marketing" value="marketing">
                 <label class="label-of-input" for="marketing"> Marketing</label><br>
       `);
  } else if (value == "MBA") {
    document.querySelector("#optionalSelect").style.display = "block";
    const optional = (document.querySelector("#optionalSelect").innerHTML = `
                 <h3>Please select your interest</h3>
                 <input type="checkbox" id="economics" name="economics" value="economics">
                 <label class="label-of-input" for="economics"> Economics</label><br>
                 <input type="checkbox" id="shipping" name="shipping" value="shipping">
                 <label class="label-of-input" for="shipping"> Shipping</label><br>
       `);
  } else if (value == "MSC") {
    document.querySelector("#optionalSelect").style.display = "block";
    const optional = (document.querySelector("#optionalSelect").innerHTML = `
                 <h3>Please select your interest</h3>
                 <input type="checkbox" id="dataMaining" name="dataMaining" value="dataMaining">
                 <label class="label-of-input" for="dataMaining"> Data Maining</label><br>
                 <input type="checkbox" id="software" name="software" value="software">
                 <label class="label-of-input" for="software"> Software</label><br>
       `);
  } else {
    document.querySelector("#optionalSelect").style.display = "none";
  }
};
const course = document.getElementById("course");
course.addEventListener("change", creditOption);

// validation
const submitBtn = document.getElementById("submitButton")
submitBtn.addEventListener("click", (event) => {
  const studentName = document.getElementById("studentName");
  const fatherName = document.getElementById("fatherName");
  const motherName = document.getElementById("motherName");
  const mobile = document.getElementById("mobile");

  const inputValidationStyle = (input, text) => {


    if (input.nextElementSibling && input.nextElementSibling.className == 'redLabel') {
      input.focus();
    }
    else{
      const redLabel = document.createElement("p");
      redLabel.classList.add('redLabel')
      redLabel.style.color = "red";
      redLabel.innerText = text;
      redLabel.style.paddingLeft = "150px";
      input.parentNode.appendChild(redLabel);
      input.style.border = "2px solid red";
      input.focus();
    }
    return event.preventDefault();
  };

  if (studentName.value.length > 20 || studentName.value.length < 3) {
    inputValidationStyle(studentName, "please input your name within 3 to 20 character.");
  }
  if (studentName.value.length <= 20 && studentName.value.length >= 3) {
    studentName.style.border = "2px solid rgb(121, 134, 116)";
    if (studentName.nextElementSibling) {
      studentName.nextElementSibling.className == 'redLabel' ? studentName.parentNode.removeChild(studentName.nextElementSibling) : "";
    }
  }

  if (fatherName.value.length > 20 || fatherName.value.length < 3) {
    inputValidationStyle(
      fatherName,
      "please input the name within 3 to 20 character."
    );
  }
  if (fatherName.value.length <= 20 && fatherName.value.length >= 3) {
    fatherName.style.border = "2px solid rgb(121, 134, 116)";
    if (fatherName.nextElementSibling) {
      fatherName.nextElementSibling.className == 'redLabel' ? fatherName.parentNode.removeChild(fatherName.nextElementSibling) : "";
    }
  }

  if (motherName.value.length > 20 || motherName.value.length < 3) {
    inputValidationStyle(
      motherName,
      "please input your name within 3 to 20 character."
    );
  }
  if (motherName.value.length <= 20 && motherName.value.length >= 3) {
    motherName.style.border = "2px solid rgb(121, 134, 116)";
    if (motherName.nextElementSibling) {
      motherName.nextElementSibling.className == 'redLabel' ? motherName.parentNode.removeChild(motherName.nextElementSibling) : "";
    }
  }

});



// Mobile Number Validation
function validateMobileNumber(inputField) {
  const mobileRegex = /^\d{11}$/;
  const errorMessage = inputField.parentElement.querySelector('.error-message');

  if (mobileRegex.test(inputField.value)) {
    inputField.style.border = '2px solid black';
    if (errorMessage) {
      errorMessage.remove();
    }
  } else {
    inputField.style.border = '2px solid red';
    
    if (!errorMessage) {
      const newErrorMessage = document.createElement('p');
      newErrorMessage.className = 'error-message';
      newErrorMessage.style.color = 'red';
      newErrorMessage.style.paddingLeft = "150px";
      newErrorMessage.innerText = 'Mobile number must be a valid 11-digit number';
      inputField.parentElement.appendChild(newErrorMessage);
    }
    
  }
}

const mobile = document.getElementById('mobile');
mobile.addEventListener('keyup', function () {
  validateMobileNumber(mobile);
  // console.log('mobile: ', mobile);
});

mobile.addEventListener('change', function () {
  validateMobileNumber(mobile);
});


submitBtn.addEventListener('click', function () {
  validateMobileNumber(mobile);
});




// Email validation

function validateEmail(inputField) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorMessage = inputField.parentElement.querySelector('.error-message');
  
  if (emailRegex.test(inputField.value)) {
      inputField.style.border = '2px solid black';
      if (errorMessage) {
          errorMessage.remove();
      }
  } else {
      inputField.style.border = '2px solid red';
      
      if (!errorMessage) {
          const newErrorMessage = document.createElement('p');
          newErrorMessage.className = 'error-message';
          newErrorMessage.style.color = 'red';
          newErrorMessage.innerText = 'Please enter a valid email address';
          inputField.parentElement.appendChild(newErrorMessage);
      }
  }
}

const email = document.getElementById('email');
email.addEventListener('keyup', function () {
  validateEmail(email);
});

email.addEventListener('change', function () {
  validateEmail(email);
});


submitBtn.addEventListener('click', function () {
  validateEmail(email);
});