export class Student {
    private _idStudent:number
    private _name:string
    private _classroom:string
    private _address:string
    private _point:number
    private _favorite:string

    constructor(idStudent: number, name: string, classroom: string, address: string, point: number, favorite: string) {
        this._idStudent = idStudent;
        this._name = name;
        this._classroom = classroom;
        this._address = address;
        this._point = point;
        this._favorite = favorite;
    }

    getIdStudent(): number {
        return this._idStudent;
    }

    setIdStudent(value: number) {
        this._idStudent = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getClassroom(): string {
        return this._classroom;
    }

    setClassroom(value: string) {
        this._classroom = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }

    getPoint(): number {
        return this._point;
    }

    setPoint(value: number) {
        this._point = value;
    }

    getFavorite(): string {
        return this._favorite;
    }

    setFavorite(value: string) {
        this._favorite = value;
    }
}