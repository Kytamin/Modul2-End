import {Student} from "./Student";
import {StudentManager} from "./Student Manager";
import {Menu} from "./Menu";
const readlineSync=require('readline-sync')
let flagApp = true;
function start(){
    while (flagApp){
        Menu.mainMenu()
        let number = +readlineSync.question('Chose option: ')
        switch (number){
            case 1: StudentManager.displayList()
                start()
                break;
            case 2:StudentManager.findStudent()
                start()
                break;
            case 3:StudentManager.addStudent()
                start()
                break;
            case 4:StudentManager.fixInfoStudent()
                start()
                break;
            case 5:StudentManager.deleteStudent()
                start()
                break;
            default:
                flagApp = false;

        }
    }
}
start()

// StudentManager.addStudent("Ky","C0223G1","ThanhHoa",6,"Esport")
// StudentManager.addStudent("T.Hieu","C0223G1","HN",7,"Không rõ")
// StudentManager.addStudent("A.Van","C0223G1","HN",8,"Nghiện")
// StudentManager.addStudent("C.Hieu","C0223G1","Hung Yen",9,"out trình các bạn")
// StudentManager.addStudent("Nam","C0223G1","HN",9,"bitcoin")
// StudentManager.displayList()
// console.table(StudentManager.findStudent("KY"))
// StudentManager.fixInfoStudent(1,"Hoang Ky","C0223G11","codegymthanhxuan",10,"videoGame")
// StudentManager.displayList()
// console.log(StudentManager.findStudent("Hoang Ky"))
// StudentManager.deleteStudent(1)
// console.table(StudentManager.StudentList)
// StudentManager.deleteStudent(1)
// StudentManager.findStudent("Ky")