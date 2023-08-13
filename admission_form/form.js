function showPreview(event) {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    }
  }


  const creditOption =(e)=>{
    const value = e.target.value;
    if (value == 'CSE') {
      document.querySelector('#optionalSelect').style.display = 'block';
      const optional =  document.querySelector('#optionalSelect').innerHTML = `
      <h3>Please select your interest</h3>
      <input type="checkbox" id="project" name="project" value="project">
      <label class="label-of-input" for="project"> Project</label><br>
      <input type="checkbox" id="thesis" name="thesis" value="thesis">
      <label class="label-of-input" for="thesis"> Thesis</label><br>
      <input type="checkbox" id="both" name="both" value="both">
      <label class="label-of-input" for="both"> Both</label><br>
      `;
    } else if (value == 'BBA') {
      document.querySelector('#optionalSelect').style.display = 'block';
      const optional =  document.querySelector('#optionalSelect').innerHTML = `
                 <h3>Please select your interest</h3>
                 <input type="checkbox" id="finance" name="finance" value="finance">
                 <label class="label-of-input" for="finance"> Finance</label><br>
                 <input type="checkbox" id="marketing" name="marketing" value="marketing">
                 <label class="label-of-input" for="marketing"> Marketing</label><br>
       `;
     }
     else if (value == 'MBA') {
      document.querySelector('#optionalSelect').style.display = 'block';
      const optional =  document.querySelector('#optionalSelect').innerHTML = `
                 <h3>Please select your interest</h3>
                 <input type="checkbox" id="economics" name="economics" value="economics">
                 <label class="label-of-input" for="economics"> Economics</label><br>
                 <input type="checkbox" id="shipping" name="shipping" value="shipping">
                 <label class="label-of-input" for="shipping"> Shipping</label><br>
       `;
     }
     else if (value == 'MSC') {
      document.querySelector('#optionalSelect').style.display = 'block';
      const optional =  document.querySelector('#optionalSelect').innerHTML = `
                 <h3>Please select your interest</h3>
                 <input type="checkbox" id="dataMaining" name="dataMaining" value="dataMaining">
                 <label class="label-of-input" for="dataMaining"> Data Maining</label><br>
                 <input type="checkbox" id="software" name="software" value="software">
                 <label class="label-of-input" for="software"> Software</label><br>
       `;
     }
     else{
      document.querySelector('#optionalSelect').style.display = 'none';
     }
  }
  const course = document.getElementById('course')
  course.addEventListener("change",creditOption);


  // validation

document.getElementById("submitButton").addEventListener('click',(event)=>{
  const studentName = document.getElementById("studentName");
  const fatherName = document.getElementById("fatherName");
  const motherName = document.getElementById("motherName");

  if (studentName.value.length >20 || studentName.value.length < 3) {
    
  }
})

  

 
