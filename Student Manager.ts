import {Student} from "./Student";
const readlineSync = require('readline-sync')

export class StudentManager {
   static StudentList:Student[]=[]
     static id=0
   static checkEmptyList(){
       return  StudentManager.StudentList.length===0
    }
    static displayList():void{
        StudentManager.checkEmptyList()?console.log(` “Không có dữ liệu”`):console.table(StudentManager.StudentList)
   }
    static addStudent():void{
       let name=readlineSync.question("input Name")
        let classroom=readlineSync.question("input classroom")
        let address=readlineSync.question("input address")
        let point=+readlineSync.question("input Point")
        let favorite=readlineSync.question("in put favorite")


       StudentManager.id++
       StudentManager.StudentList.push(new Student(StudentManager.id,name,classroom,address,point,favorite))
    }
    static findStudentByName(name:string){
       let i=-1
        StudentManager.StudentList.forEach((element,index)=>{
            if(element.getName()===name){
                i=index
            }
        })
        return i
    }
    static findStudentByID(id:number){
        let i=-1
        StudentManager.StudentList.forEach((element,index)=>{
            if(element.getIdStudent()===id){
                i=index
            }
        })
        return i
    }
   static findStudent(){
       let name=readlineSync.question("input Student Name")
       let index =StudentManager.findStudentByName(name)
       if(index!==-1){
           return StudentManager.StudentList[index]
       }else {
           console.log(`Không tồn tại sinh viên này`)
       }
    }
    static fixInfoStudent():void{
       let id=readlineSync.question("input id Student")
        if(StudentManager.findStudentByID(+id)===-1){
            console.log(`Không tồn tại sinh viên này`)
            return
        }
        let name=readlineSync.question("input new name")
        let classroom=readlineSync.question("input new classroom")
        let address=readlineSync.question("input new classroom")
        let point=+readlineSync.question("input new classroom")
        let favorite=readlineSync.question("input new classroom")


    }
    static deleteStudent():void{
       let studentId=readlineSync.question("inputId")
        let index=StudentManager.findStudentByID(+studentId)
        if(StudentManager.findStudentByID(+studentId)===-1){
            console.log(`Không tồn tại sinh viên cần xóa`)
        }else {
            StudentManager.StudentList.splice(index,1)
            console.log(`Xóa thành công`)
        }


   }
}