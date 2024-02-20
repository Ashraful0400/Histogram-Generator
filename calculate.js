function init(){
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
    document.getElementById('maxGrade').addEventListener('blur', validateMaxGrade, false);
    document.getElementById('A+Grade').addEventListener('blur', validateAPGrade, false);
    document.getElementById('AGrade').addEventListener('blur', validateAGrade, false);
    document.getElementById('A-Grade').addEventListener('blur', validateAMGrade, false);
    document.getElementById('C+Grade').addEventListener('blur', validateCPGrade, false);
    document.getElementById('CGrade').addEventListener('blur', validateCGrade, false);
    document.getElementById('C-Grade').addEventListener('blur', validateCMGrade, false);
    document.getElementById('B+Grade').addEventListener('blur', validateBPGrade, false);
    document.getElementById('BGrade').addEventListener('blur', validateBGrade, false);
    document.getElementById('B-Grade').addEventListener('blur', validateBMGrade, false);

    document.getElementById('FGrade').addEventListener('blur', validateFGrade, false);

    document.getElementById('DGrade').addEventListener('blur', validateDGrade, false);
  }
  
  function handleFileSelect(event){
    const reader = new FileReader()
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0])
    
  }
  
//   function handleFileLoad(event){
//     console.log(event);
//     document.getElementById('fileContent').textContent = event.target.result;
//   }

  var students = [];

  function handleFileLoad(event) {
    var lines = event.target.result.split('\n');
    students = lines.slice(1).map(function (line) {
        var parts = line.split(',');
        return { name: parts[0], percent: parseFloat(parts[1]) };
    });

    console.log(students); 
    
    // processGradeInput();
    processStudentData(); 
    processMedianData();
    processMeanData();
    processHistogramData();
}

function processStudentData() {
  
    console.log(students); 
}





  const errorMessage = document.getElementById('error-message');

  function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function hideError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';
}
  

var max =100 , AP = 95, A = 90, AM = 85, BP = 80, B = 75, BM = 70, CP = 65, C = 60, CM = 55, D = 50, F = 0;

function validateMaxGrade() {
    const maxGradeInput = document.getElementById('maxGrade');
    const newMax = parseFloat(maxGradeInput.value);
    if (isNaN(newMax) || newMax < 0 || newMax > 100) {
        displayError('Please enter a valid number between 0 and 100 for max grade.');
    } else {
        hideError();
        max = newMax;
    }
}



function validateAPGrade() {
    const maxGradeInput = document.getElementById('A+Grade');
    const newAP = parseFloat(maxGradeInput.value);
    if (isNaN(newAP) || newAP < 0 || newAP > 100) {
        displayError('Please enter a valid number between 0 and 100 for max grade.');
    } else {
        hideError();
        AP = newAP;
    }
}

function validateAGrade() {
    const maxGradeInput = document.getElementById('AGrade');
    const newA = parseFloat(maxGradeInput.value);
    if (isNaN(newA) || newA < 0 || newA > 100) {
        displayError('Please enter a valid number between 0 and 100 for max grade.');
    } else {
        hideError();
        A = newA;
    }
}

function validateAMGrade() {
    const maxGradeInput = document.getElementById('A-Grade');
    const newAM = parseFloat(maxGradeInput.value);
    if (isNaN(newAM) || newAM < 0 || newAM > 100) {
        displayError('Please enter a valid number between 0 and 100 for max grade.');
    } else {
        hideError();
        AM = newAM;
    }
}



function validateBPGrade() {
    const maxGradeInput = document.getElementById('B+Grade');
    const newBP = parseFloat(maxGradeInput.value);
    if (isNaN(newBP) || newBP < 0 || newBP > 100) {
        displayError('Please enter a valid number between 0 and 100 for max grade.');
    } else {
        hideError();
        BP = newBP;
    }
}

function validateBGrade() {
    const maxGradeInput = document.getElementById('Brade');
    const newB = parseFloat(maxGradeInput.value);
    if (isNaN(newB) || newB < 0 || newB > 100) {
        displayError('Please enter a valid number between 0 and 100 for max grade.');
    } else {
        hideError();
        B = newB;
    }
}

function validateBMGrade() {
    const maxGradeInput = document.getElementById('B-Grade');
    const newBM = parseFloat(maxGradeInput.value);
    if (isNaN(newBM) || newBM < 0 || newBM > 100) {
        displayError('Please enter a valid number between 0 and 100 for max grade.');
    } else {
        hideError();
        BM = newBM;
    }
}

function validateCPGrade() {
    const maxGradeInput = document.getElementById('C+Grade');
    const newCP = parseFloat(maxGradeInput.value);
    if (isNaN(newCP) || newCP < 0 || newCP > 100) {
        displayError('Please enter a valid number between 0 and 100 for max grade.');
    } else {
        hideError();
        CP = newCP;
    }
}

function validateCGrade() {
    const maxGradeInput = document.getElementById('CGrade');
    const newC = parseFloat(maxGradeInput.value);
    if (isNaN(newC) || newC < 0 || newC > 100) {
        displayError('Please enter a valid number between 0 and 100 for max grade.');
    } else {
        hideError();
        C = newC;
    }
}

function validateCMGrade() {
    const maxGradeInput = document.getElementById('C-Grade');
    const newCM = parseFloat(maxGradeInput.value);
    if (isNaN(newCM) || newCM < 0 || newCM > 100) {
        displayError('Please enter a valid number between 0 and 100 for max grade.');
    } else {
        hideError();
        CM = newCM;
    }
}

function validateDGrade() {
    const maxGradeInput = document.getElementById('DGrade');
    const newD = parseFloat(maxGradeInput.value);
    if (isNaN(newD) || newD < 0 || newD > 100) {
        displayError('Please enter a valid number between 0 and 100 for max grade.');
    } else {
        hideError();
        D = newD;
    }
}

function validateFGrade() {
    const maxGradeInput = document.getElementById('FGrade');
    const newF = parseFloat(maxGradeInput.value);
    if (isNaN(newF) || newF < 0 || newF > 100) {
        displayError('Please enter a valid number between 0 and 100 for max grade.');
    } else {
        hideError();
        F = newF;
    }
}




function processMedianData() {
    var sortedGrades = students.map(function(s) { return s.percent; }).sort(function(a, b) { return a - b; });

            var medianGrade;
            if(sortedGrades.length % 2 == 0){
                medianGrade = (sortedGrades[sortedGrades.length / 2 - 1] +
                 sortedGrades[sortedGrades.length / 2]) / 2;
            }
            else {
                medianGrade = sortedGrades[(sortedGrades.length-1)/2]
            }
            document.getElementById('median').textContent = medianGrade;
}

function processMeanData() {
    
    if (students.length > 0) {
        var highestGrade = students[0].percent;
        var lowestestGrade = students[0].percent;
        var highestStudent = students[0].name;
        var lowestStudent = students[0].name;
        var total = 0;
        for(var i = 0; i < students.length; i++){
            var grade = students[i].percent;
            total +=  students[i].percent;

            if(grade > highestGrade){
                highestGrade = grade;
                highestStudent = students[i].name;
            }


            if(grade < lowestestGrade){
                lowestestGrade = grade;
                lowestStudent = students[i].name;
            }

           
        }

        var meanGrade = total / students.length;
    } else {
        // Handle the case where students array is empty, e.g., show an error message.
        console.error('The students array is empty. Make sure to load data from a CSV file.');
    }

    document.getElementById('highest').textContent =  highestStudent + '(' +  highestGrade + ')';
    document.getElementById('lowest').textContent =  lowestStudent + '(' +  lowestestGrade + ')';
    document.getElementById('mean').textContent = meanGrade;
   
}
           
            

           
       
            
            

            


            //Histogram

            function processHistogramData() {
                const osContainerAplus = document.getElementById('osContainerAPlus');  
                const osContainerA = document.getElementById('osContainerA');
                const osContainerAminus = document.getElementById('osContainerAminus');
                const osContainerBplus = document.getElementById('osContainerBplus');
                const osContainerB = document.getElementById('osContainerB');
                const osContainerBminus = document.getElementById('osContainerBminus');
                const osContainerCplus = document.getElementById('osContainerCplus');
                const osContainerC = document.getElementById('osContainerC');
                const osContainerCminus = document.getElementById('osContainerCminus');
                const osContainerD = document.getElementById('osContainerD');
                const osContainerF = document.getElementById('osContainerF');
               
        
            
                students.forEach(function(student) {
                    if (student.percent >= AP) {
                        osContainerAplus.textContent += 'O '; 
                    } else if (student.percent >= A ) {
                        osContainerA.textContent += 'O '; 
                    } else if (student.percent >= AM ) {
                        osContainerAminus.textContent += 'O '; 
                    }
                    else if (student.percent >= BP ) {
                        osContainerBplus.textContent += 'O ';
                    }
                    else if (student.percent >= B ) {
                        osContainerB.textContent += 'O ';
                    }
                    else if (student.percent >= BM ) {
                        osContainerBminus.textContent += 'O ';
                    }
                    
                    else if (student.percent >= CP ) {
                        osContainerCplus.textContent += 'O ';
                    }
                    else if (student.percent >= C ) {
                        osContainerC.textContent += 'O ';
                    }
                    else if (student.percent >= CM ) {
                        osContainerCminus.textContent += 'O ';
                    }
                    else if (student.percent >= D ) {  
                        osContainerD.textContent += 'O ';
                    }
                    else{
                        osContainerF.textContent += 'O ';
                    }
                });
            }
            
         
       
