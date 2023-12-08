class DataController {
    dataList= [];

    setCurrentIndex = function(index) {
        localStorage.setItem('currentIndex', index);
    }

    getCurrentIndex = function() {
        return localStorage.getItem('currentIndex');
    }
    addStudent = function(std) {
        this.dataList.push(std);
        let json = JSON.stringify(this.dataList);
        localStorage.setItem('dataList', json);
        console.log(this.dataList);
    }
    editStudent = function(std) {
        this.dataList.push(std);
        let json = JSON.stringify(this.dataList);
        localStorage.setItem('dataList', json);
        console.log(this.dataList);
    }
    deleteStudent = function(std) {
        this.dataList.push(std);
        let json = JSON.stringify(this.dataList);
        localStorage.setItem('dataList', json);
        console.log(this.dataList);
    }
    listStudent = function(std) {
        this.dataList.push(std);
        let json = JSON.stringify(this.dataList);
        localStorage.setItem('dataList', json);
        console.log(this.dataList);
    }
    loadData = function() {
        let json = localStorage.getItem('dataList');
        if (json === null || json == "") return
        this.dataList = JSON.parse(json);
        console.log(this.dataList);
    }
}



const controller = new DataController();
export default controller;