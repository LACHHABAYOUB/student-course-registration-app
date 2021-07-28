/**
 * app.js
 * Modification : LACHHAB Ayoub
 */


//      Add required code to the JavaScript source file, app.js,
//      to support this added feature for the webapp, such that when
//      the when the “Submit Registration” button is clicked, the form
//      is submitted and  a new Student-Course Registration is appended
//      and displays in the data in the table at the bottom of the page, 
//      as shown in the screenshot above. The webapp should be able to 
//      register many students data and see them listed on the webpage.



"use strict";

window.onload = function() {


    let currentRowId = 2;
    const formNewAccount = document.querySelector("#formCourseReg");
    formNewAccount.addEventListener("submit", 
        event => {


            event.preventDefault();
            const txtStudentId = document.querySelector("#txtStudentId");
            const txtFullName = document.querySelector("#txtFullName");
            const ddlCourseType = document.querySelector("#ddlCourseType");


            const strStudentId = txtStudentId.value;
            const strFullName = txtFullName.value;
            const strCourseType = ddlCourseType.value;

            addNewRegistrationDataRow(strStudentId, strFullName,strCourseType);
            txtStudentId.value = "";
            txtFullName.value = "";
            ddlCourseType["selectedIndex"] = 0;
            txtStudentId.focus();
    });



    const addNewRegistrationDataRow = function(studentId, fullName,CourseType) {
        const tblRegistrations = document.querySelector("#tblRegistrations");
        const newRow = tblRegistrations.insertRow(-1);
        const newCellRowId = newRow.insertCell(0);
        const strNewRowId = document.createTextNode(`${++currentRowId}.`);
        newCellRowId.appendChild(strNewRowId);
        
        const newCellStudentId = newRow.insertCell(1);
        const strNewRowStudentId = document.createTextNode(`${studentId}`);
        newCellStudentId.appendChild(strNewRowStudentId);
        
        const newCellFullName = newRow.insertCell(2);
        const strNewRowFullName = document.createTextNode(`${fullName}`);
        newCellFullName.appendChild(strNewRowFullName);
        
        const newCellCourseType = newRow.insertCell(3);
        const strNewRowCourseType = document.createTextNode(`${CourseType}`);
        newCellCourseType.appendChild(strNewRowCourseType);
    }
}